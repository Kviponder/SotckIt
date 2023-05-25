// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
}); //If the category is deleted, the product will be deleted as well

// Categories have many Products
Category.hasMany(Product, {
  //hasMany() method indicates the Category can have more than one Product
  foreignKey: "category_id",
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  //belongsToMany() here indicates the Product can have more than one Tag
  through: ProductTag, //The through property is used to state what model we want to use to go through
  foreignKey: "product_id",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  //belongsToMany() here indicates the Tag can have more than one Product
  through: ProductTag,
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
