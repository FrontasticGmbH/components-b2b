import ProductList from 'components/commercetools-ui/products/product-list';

function ProductListTastic({ data }) {
  if (!data) return <></>;

  const { items, facets, category, previousCursor, nextCursor, totalItems, isPreview } = data.data.dataSource;

  if (isPreview) {
    return (
      <ProductList
        products={items}
        totalProducts={totalItems}
        facets={facets}
        category={category}
        previousCursor={previousCursor}
        nextCursor={nextCursor}
        isPreview={true}
        previewURL="/preview"
      />
    );
  }
  return (
    <ProductList
      products={items}
      totalProducts={totalItems}
      facets={facets}
      category={category}
      previousCursor={previousCursor}
      nextCursor={nextCursor}
    />
  );
}

export default ProductListTastic;
