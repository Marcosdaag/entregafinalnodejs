import { authService } from "../services/auth.service.js";

export const login = (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Usuario y contraseña son requeridos" });
    }

    const result = authService.login(username, password);

    if (result) {
      res.status(200).json({
        message: "Autenticación correcta",
        token: `Bearer ${result.token}`
      });
    } else {
      res.status(401).json({ message: "Credenciales incorrectas" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor", error: error.message });
  }
};
