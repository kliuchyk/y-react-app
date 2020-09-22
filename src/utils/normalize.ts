export function normalize(products: []): any {
  const byId = products.reduce((acc: any, curr: any) => {
    acc[curr.id] = curr;
    return acc;
  }, {});
  const allIds = Object.keys(byId);

  return {
    byId,
    allIds,
  };
}
