const Routes = [
  { path: '/', exact: true, pathCP: './pages/ProductList' },
  { path: '/detail/:name', pathCP: './pages/ProductDetail' },
  { path: '/confirm', pathCP: './pages/ProductConfirm' },
  { path: '/cart', pathCP: './pages/ProductCart' }
];

export default Routes;