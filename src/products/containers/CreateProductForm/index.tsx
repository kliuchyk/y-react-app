import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { PRODUCT_VALIDATION_SCHEMA as validationSchema } from '../constants/ProductSchema';
import { selectOrigins } from '../../../origins/selectors';
import { Origin } from '../../../origins/reducer';
import { createProductRequest } from '../../actions';
import { NewProduct } from '../../reducer';
import { selectLoading } from '../../selectors';
import './styles.css';

export const CreateProductForm: React.FC = () => {
  const origins: Origin[] = useSelector(selectOrigins);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      price: 0,
      origin: '',
    },
    validationSchema,
    onSubmit: (values: NewProduct) => {
      const { name, price, origin } = values;
      dispatch(createProductRequest({ name, price, origin: origin.toLowerCase() }));
    },
  });

  const originsList = origins.map((origin: Origin, idx: number) => (
    <option key={idx}>{origin.displayName}</option>
  ));

  return (
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
      <button type="submit" disabled={loading}>
        Submit
      </button>
    </form>
  );
};
