const byPriceRange = (products, min, max) =>
         products.filter(item => item.price >= min && item.price <= max);
module.exports = { byPriceRange };
