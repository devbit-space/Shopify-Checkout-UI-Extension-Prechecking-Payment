import '@shopify/ui-extensions';

//@ts-ignore
declare module './src/Checkout.jsx' {
  const shopify: import('@shopify/ui-extensions/purchase.checkout.actions.render-before').Api;
  const globalThis: { shopify: typeof shopify };
}

//@ts-ignore
declare module './src/Cartline-list.jsx' {
  const shopify: import('@shopify/ui-extensions/purchase.thank-you.cart-line-list.render-after').Api;
  const globalThis: { shopify: typeof shopify };
}
