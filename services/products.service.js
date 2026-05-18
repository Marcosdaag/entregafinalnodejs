import { productModel } from "../models/product.model.js";

export const productsService = {
  getAllProducts: async () => {
    return await productModel.findAll();
  },
  getProductById: async (id) => {
    return await productModel.findById(id);
  },
  createProduct: async (productData) => {
    return await productModel.create(productData);
  },
  deleteProduct: async (id) => {
    return await productModel.delete(id);
  },
  updateProduct: async (id, productData) => {
    return await productModel.update(id, productData);
  }
};
