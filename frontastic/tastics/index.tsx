// Doc Examples
import SimpleButton from './doc-examples/simple-button';
import HelloWorld from './doc-examples/hello-world';
import StarWarsOpeningCrawl from './doc-examples/star-wars/movies';
import StarWarsCharacterSearch from './doc-examples/star-wars/character-search';
import StarWarsCharacterFilter from './doc-examples/star-wars/character-filter';
//import ContentfulBlog from './doc-examples/contentful/blog';

import AccountDetails from './account/details';
import AccountLogin from './account/login';
import AccountOrdersHistory from './account/orders';
import AccountRegister from './account/register';
import ResetPassword from './account/reset-password';
import AccountTest from './account/test';
import Cart from './cart';
import Checkout from './checkout';
import ThankYou from './checkout/thank-you';
import Markdown from './content/markdown';
import Spacer from './content/spacer';
import Tile from './content/tile';
import Footer from './footer';
import Header from './header';
import HeaderContext from './header/context-bar';
import HeaderIcon from './header/icon-bar';
import HeaderLinks from './header/links';
import HeaderNavigation from './header/navigation';
import HeaderLogo from './header/logo';
import HeaderSearch from './header/search-bar';
import HeaderUser from './header/user-bar';
import Newsletter from './newsletter';
import NotFound from './not-found';
import ProductDetails from './products/details';
import ProductList from './products/product-list';
import ProductSlider from './products/slider';
import SimilarProducts from './products/similar-products';
import Showcase from './showcase';
import Wishlist from './wishlist';
import ContentfulBlogTastic from './contentful-blog';
import { BusinessUnit } from './business-unit';
import { BusinessUnitTree } from './business-unit-tree';
import { StorePickerTastic } from './store-picker';
import QuoteThankYouTastic from './quotes/thank-you';

export const tastics = {
  // Doc Examples
  'example/simple-button': SimpleButton,
  'example/hello-world': HelloWorld,
  'example/star-wars/movie': StarWarsOpeningCrawl,
  'example/star-wars/character-search': StarWarsCharacterSearch,
  'example/star-wars/character-filter': StarWarsCharacterFilter,
  //'contentful/blog': ContentfulBlog,

  'b2b/business-unit': BusinessUnit,
  'b2b/business-unit-tree': BusinessUnitTree,
  'b2b/store-picker': StorePickerTastic,
  'b2b/quote/thank-you': QuoteThankYouTastic,
  'commercetools/ui/checkout': Checkout,
  'commercetools/ui/thank-you': ThankYou,
  'commercetools/ui/cart': Cart,
  'commercetools/ui/footer': Footer,
  'commercetools/ui/header': Header,
  'commercetools/ui/header/context-bar': HeaderContext,
  'commercetools/ui/header/icon-bar': HeaderIcon,
  'commercetools/ui/header/links': HeaderLinks,
  'commercetools/ui/header/navigation': HeaderNavigation,
  'commercetools/ui/header/logo': HeaderLogo,
  'commercetools/ui/header/search-bar': HeaderSearch,
  'commercetools/ui/header/user-bar': HeaderUser,
  'commercetools/ui/content/tile': Tile,
  'commercetools/ui/content/spacer': Spacer,
  'commercetools/ui/content/showcase': Showcase,
  'commercetools/ui/content/markdown': Markdown,
  'commercetools/ui/content/newsletter': Newsletter,
  'commercetools/ui/products/details': ProductDetails,
  'commercetools/ui/products/product-list': ProductList,
  'commercetools/ui/products/slider': ProductSlider,
  'commercetools/ui/products/similar-products': SimilarProducts,
  'commercetools/ui/wishlist': Wishlist,
  'commercetools/ui/account/test': AccountTest,
  'commercetools/ui/account/details': AccountDetails,
  'commercetools/ui/account/login': AccountLogin,
  'commercetools/ui/account/register': AccountRegister,
  'commercetools/ui/account/orders': AccountOrdersHistory,
  'commercetools/ui/account/reset-password': ResetPassword,
  'commercetools/ui/content/contentful/blog': ContentfulBlogTastic,
  default: NotFound,
};
