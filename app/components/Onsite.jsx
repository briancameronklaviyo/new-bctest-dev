export function trackViewedProduct(product) {
    console.log(product)


    var klaviyo = window.klaviyo || [];
    var item = {
        Name: product.title,
        ProductID: product.id.substring(product.id.lastIndexOf('/') + 1),
        ImageURL: product.selectedVariant.image.url,
        Handle: product.handle,
        Brand: product.vendor,
        Price: product.selectedVariant.price.amount
};
klaviyo.push(['track', 'Hydrogen Viewed Product', item]);

}

export function trackAddedToCart(product) {
var klaviyo = window.klaviyo || []
let item = {
        Name: product.title,
        ImageURL: product.selectedVariant.image.url,
        Handle: product.handle,
        Price: product.selectedVariant.price.amount
      }
      klaviyo.push(['track', 'hydrogen ATC', item])
}