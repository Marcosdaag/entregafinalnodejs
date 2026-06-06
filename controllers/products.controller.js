import { productsService } from "../services/products.service.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await productsService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productsService.getProductById(id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const productData = req.body;
    const { title, price, description } = productData;
    if (!title || !price || !description) {
      return res.status(400).json({ message: "Faltan campos requeridos: title, price, description" });
    }
    const newProduct = await productsService.createProduct(productData);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productsService.getProductById(id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    await productsService.deleteProduct(id);
    res.status(200).json({ message: `Producto con id ${id} eliminado exitosamente` });
  } catch (error) {
    next(error);
  }
};
