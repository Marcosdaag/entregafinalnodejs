# 🚀 Proyecto Final - API REST de Productos

Repositorio orientado a la entrega del proyecto final del curso de Backend con Node.js dictado por Talento Tech. Dentro del repositorio se encuentra una API REST desarrollada en **Node.js** con **Express**, pensada para gestionar el catálogo de productos de una tienda oficial.

La aplicación cuenta con una arquitectura escalable separada en capas (Rutas, Controladores, Servicios y Modelos). Todos los datos se guardan y leen en la nube gracias a **Firestore** (Firebase). Además, implementé una capa de seguridad para proteger la información usando **JSON Web Tokens (JWT)**.

---

## 📂 Estructura del código

Para mantener el proyecto prolijo y fácil de escalar, la estructura es la siguiente:

- `routes/`: Define las URLs de los endpoints (Auth y Productos).
- `controllers/`: Manejan las peticiones HTTP, validan cositas rápidas y arman la respuesta.
- `services/`: Aquí vive la lógica pesada y de negocio. 
- `models/`: Es la única capa que interactúa de forma directa con la base de datos de Firebase.
- `middlewares/`: Acá está la barrera de seguridad que frena las peticiones si el token JWT no es válido o caducó.
- `config/`: Archivo de inicialización para conectar con Firebase.

---

## 🔑 Credenciales de prueba

Para hacer las pruebas en Postman y poder usar los endpoints de productos, primero vas a necesitar generar un Token. Puedes usar estas credenciales estáticas que configuré para el entorno de desarrollo:

- **Usuario:** `admin`
- **Contraseña:** `admin123`

---

## ⚙️ Pasos para probar el proyecto

Levantar el proyecto en tu compu es súper fácil. Solo sigue estos pasos:

1. **Instalar las dependencias:**
   Abre una terminal en la raíz de este proyecto y ejecuta:
   ```bash
   npm install
   ```

2. **Variables de entorno:**
   Asegúrate de tener un archivo `.env` en la raíz. Si no lo tienes, puedes copiar la estructura del archivo `.env.example` y colocar los valores de tu propia app de Firebase. 

3. **Encender el servidor:**
   Una vez que se instaló todo, corre este comando:
   ```bash
   npm run start
   ```
   Deberías ver un mensaje en consola avisando que el servidor está corriendo en el puerto 3000.

---

## 📡 Endpoints (Rutas)

### 1. Autenticación
- **POST `/auth/login`**:
  - **Body (JSON):** `{"username": "admin", "password": "admin123"}`
  - **Qué hace:** Devuelve un Bearer Token si las credenciales son correctas.

### 2. Productos
>Todas estas rutas están protegidas. Se requiere incluir en la pestaña "Headers" de la petición `Authorization` con el valor `Bearer {TOKEN}`.

- **GET `/api/products`**
  - Devuelve todos los productos guardados en Firestore.
- **GET `/api/products/:id`**
  - Trae un único producto buscando por su ID.
- **POST `/api/products/create`**
  - **Body (JSON):** Requiere los campos (ej: name, price, stock).
  - **Qué hace:** Guarda el nuevo producto directamente en la nube.
- **DELETE `/api/products/:id`**
  - Elimina el producto de Firestore según su ID.

---