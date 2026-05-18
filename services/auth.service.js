import jwt from "jsonwebtoken";

export const authService = {
  login: (username, password) => {
    // Usuario por defecto para prueba segun los requerimientos
    if (username === "admin" && password === "admin123") {
      const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return { token };
    }
    return null;
  }
};
