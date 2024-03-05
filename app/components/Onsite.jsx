export function trackViewedProduct(product) {
    console.log(product)


    var klaviyo = window.klaviyo || [];
    var item = {
        Name: product.title,
        ProductID: product.id.substring(product.id.lastIndexOf('/') + 1),
        // Categories:
        //     product.collections == undefined
        //     ? null
        //     : product.collections.edges.map((a) => a.node.title),
        // ImageURL: product.media.nodes[0].image.url,
        // Handle: product.handle,
        // Brand: product.vendor,
        // Price: product.variants.nodes[0].price.amount
};
klaviyo.push(['track', 'Viewed Product', item]);

}

export function trackAddedToCart(product) {
    console.log('ATC event triggered')
var klaviyo = window.klaviyo || []
let item = {
        Name: product.title,
        // ImageURL: product.media.nodes[0].image.url,
        // Handle: product.handle,
        // Price: product.variants.nodes[0].price.amount
      }
      klaviyo.push(['track', 'hydrogen ATC', item])
}