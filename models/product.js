"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      this.hasMany(models.ProductDataMapping, {
        foreignKey: "product_id",
      }),
        this.hasMany(models.Media, {
          foreignKey: "product_id",
        }),
        this.hasMany(models.Comment, {
          foreignKey: "product_id",
        }),
        this.hasMany(models.Tag, {
          foreignKey: "product_id",
        });
      this.hasMany(models.ProductVariationDataMapping, {
        foreignKey:"product_id"
      })
    }
    toJSON() {
      return {
        ...this.get(),
        createdAt: undefined,
        updatedAt: undefined,
        deletedAt: undefined,
      };
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      offer: {
        type: DataTypes.INTEGER,
      },
      skuId: {
        type: DataTypes.STRING,
        allowNull: false,
        isAlpha: true,
      },
      MatrixProduct: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      modelId: {
        type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Product",
      tableName: "product",
    }
  );
  return Product;
};
