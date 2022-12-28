"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductVariation extends Model {
    static associate(models) {
      this.hasMany(models.ProductVariationData, {
        foreignKey: "product_variation_id",
      });
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
  ProductVariation.init(
    {
      ProductName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      paranoid: true,
      tableName: "product_variation",
      modelName: "ProductVariation",
    }
  );
  return ProductVariation;
};
