import React from 'react';
import Link from 'next/link';
import { Category } from 'cofe-ct-b2b-ecommerce/types/product/Category';
import Breadcrumb from 'components/commercetools-ui/breadcrumb';

type Props = {
  categories: Category[];
};

const ProductDetailsBreadcrumbs: React.FC<Props> = ({ categories }) => {
  const separatedCategories: string[][] =
    categories.length > 0
      ? categories
          .sort((a, b) => a.depth - b.depth)
          .filter((category) => category.depth === categories[0].depth)
          .map((category) => [category.categoryId])
      : [];

  categories.forEach((category) => {
    const index = separatedCategories.findIndex((childCategories) => childCategories.includes(category.parentId));
    if (index !== -1) {
      separatedCategories[index].push(category.categoryId);
    }
  });

  const mainCategoryIds = separatedCategories.reduce((prev, curr) => (prev.length > curr.length ? prev : curr), []);
  const mainCategory = categories.filter((category) => mainCategoryIds.includes(category.categoryId));
  return (
    <Breadcrumb Separator="/">
      {mainCategory.map((category) => (
        <Link key={category.categoryId} href={category.slug}>
          {category.name}
        </Link>
      ))}
    </Breadcrumb>
  );
};

export default ProductDetailsBreadcrumbs;
