/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Product } from '@Types/product/Product';
import { Variant } from '@Types/product/Variant';
import ProductDetails, { UIProduct } from 'components/commercetools-ui/products/product-details';
import { useProducts } from 'frontastic';

function ProductDetailsTastic({ data }) {
  const router = useRouter();
  const { getAttributeGroup } = useProducts();
  const { product: dataSourceProduct, isPreview }: { product: Product; isPreview: boolean } = data.data.dataSource;
  const [product, setProduct] = useState(dataSourceProduct);

  const [currentVariantIdx, setCurrentVariantIdx] = useState<number>();
  const [variant, setVariant] = useState<Variant>(product.variants[0]);
  const [prod, setProd] = useState<UIProduct>();
  const [productFeaturesAttributes, setProductFeaturesAttributes] = useState<string[]>([]);

  if (!product || !variant) return null;

  useEffect(() => {
    setProduct(dataSourceProduct);
    setVariant(dataSourceProduct?.variants[0]);
  }, [dataSourceProduct]);

  useEffect(() => {
    if (typeof currentVariantIdx !== 'undefined') {
      const currentVariantSKU = prod.variants[currentVariantIdx].sku;
      const path = router.asPath.split('?')[0].split('/').slice(0, -1).join('/');

      router.replace(
        {
          pathname: `${path}/${currentVariantSKU}`,
          query: router.query,
        },
        undefined,
        {
          shallow: true,
        },
      );
      setVariant(product.variants[currentVariantIdx]);
    }
  }, [currentVariantIdx]);

  useEffect(() => {
    const currentProd: UIProduct = {
      name: product.name,
      // add variants as well, so we can select and filter
      variants: product.variants,
      categories: product.categories,
      price: variant.price,
      // rating: 4,
      images: variant.images?.map((img: string, id: number) => ({
        id: `${variant.sku}-${id}`,
        src: img,
        alt: variant.sku,
      })),
      description: `
        <p>${product.description || ''}</p>
      `,
    };

    setProd(currentProd);
  }, [variant]);

  useEffect(() => {
    (async () => {
      setProductFeaturesAttributes(await getAttributeGroup('features'));
    })();
  }, []);

  return (
    <ProductDetails
      isPreview={isPreview}
      product={prod}
      subscriptions={data?.data?.dataSource.subscriptions}
      configurableComponents={data?.data?.dataSource.configurableComponents}
      productFeaturesAttributes={productFeaturesAttributes}
      variant={variant}
      onChangeVariantIdx={setCurrentVariantIdx}
    />
  );
}

export default ProductDetailsTastic;
