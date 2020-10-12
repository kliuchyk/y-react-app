import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { PRODUCT_VALIDATION_SCHEMA as validationSchema } from '../constants/ProductSchema';
import { selectEditModalProduct } from '../../../modals/selectors';
import { NewProduct, SelectedProduct } from '../../reducer';
import { Origin } from '../../../origins/reducer';
import { selectLoading } from '../../selectors';
import { selectOrigins } from '../../../origins/selectors';
import { editProductRequest } from '../../actions';
import { cancelProductEdit } from '../../../modals/actions';

const EditProductModal: React.FC = () => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector(selectEditModalProduct);
  const loading = useSelector(selectLoading);
  const origins: Origin[] = useSelector(selectOrigins);

  function isSelectedProduct(
    product: SelectedProduct | null | undefined
  ): product is SelectedProduct {
    return (product as SelectedProduct).name !== undefined;
  }

  let product: SelectedProduct = { name: '', origin: '', price: 0, id: '' };

  if (isSelectedProduct(selectedProduct)) {
    product = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      origin: selectedProduct.origin,
      price: selectedProduct.price,
    };
  }

  const formik = useFormik({
    initialValues: {
      name: product.name,
      price: product.price,
      origin: product.origin,
    },
    validationSchema,
    onSubmit: (values: NewProduct) => {
      const { name, price, origin } = values;
      dispatch(
        editProductRequest({
          id: product.id,
          name,
          price,
          origin: origin.toLowerCase(),
        })
      );
    },
  });

  const originsList = origins.map((origin: Origin, idx: number) => (
    <option key={idx}>{origin.displayName.toLocaleLowerCase()}</option>
  ));

  const cancelEditing = () => {
    dispatch(cancelProductEdit());
  };

  const resetForm = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    formik.resetForm();
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="add-product-form">
        <div className="input-container">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            disabled={loading}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="form-error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="input-container">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            placeholder="Price"
            name="price"
            id="price"
            value={formik.values.price}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            disabled={loading}
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="form-error">{formik.errors.price}</div>
          ) : null}
        </div>

        <div className="input-container">
          <label htmlFor="origin">Origin</label>
          <select
            name="origin"
            id="origin"
            value={formik.values.origin}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            disabled={loading}
          >
            <option key="default" value="" disabled>
              Origins
            </option>
            {originsList}
          </select>
          {formik.touched.origin && formik.errors.origin ? (
            <div className="form-error">{formik.errors.origin}</div>
          ) : null}
        </div>
        <div className="form-actions">
          <button onClick={cancelEditing} disabled={loading}>
            Cancel
          </button>
          <button onClick={resetForm} disabled={loading}>
            Reset
          </button>
          <button type="submit" disabled={loading}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductModal;
