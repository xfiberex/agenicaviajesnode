# 🌍 Agencia de Viajes - Node.js

Una aplicación web moderna para una agencia de viajes desarrollada con Node.js, Express y MySQL. Permite a los usuarios explorar destinos, ver detalles de viajes y compartir testimoniales sobre sus experiencias.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Prerrequisitos](#prerrequisitos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [API Endpoints](#api-endpoints)
- [Base de Datos](#base-de-datos)
- [Deployment](#deployment)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## ✨ Características

- 🏠 **Página de Inicio**: Presentación de la agencia con destinos destacados
- 🗺️ **Catálogo de Viajes**: Lista completa de destinos disponibles
- 📖 **Detalles de Viaje**: Información detallada de cada destino incluyendo:
  - Precios
  - Fechas de ida y vuelta
  - Disponibilidad
  - Imágenes
  - Descripción completa
- 👥 **Sección Nosotros**: Información sobre la agencia
- 💬 **Testimoniales**: Sistema para que los usuarios compartan sus experiencias
- 📱 **Diseño Responsivo**: Compatible con dispositivos móviles y desktop

## 🛠️ Tecnologías Utilizadas

### Backend
- **Node.js** - Entorno de ejecución de JavaScript
- **Express.js** - Framework web para Node.js
- **Sequelize** - ORM para bases de datos SQL
- **MySQL2** - Driver para MySQL
- **Pug** - Motor de plantillas para renderizado de vistas

### Frontend
- **HTML5**
- **CSS3**
- **Bootstrap** - Framework CSS para diseño responsivo
- **JavaScript**

### Herramientas de Desarrollo
- **Nodemon** - Recarga automática durante desarrollo
- **dotenv** - Gestión de variables de entorno

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [MySQL](https://www.mysql.com/) (versión 8.0 o superior)
- [Git](https://git-scm.com/)

## 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/agenicaviajesnode.git
   cd agenicaviajesnode
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar la base de datos**
   - Crear una base de datos MySQL
   - Configurar las variables de entorno (ver sección de Configuración)

## ⚙️ Configuración

1. **Crear archivo de variables de entorno**
   
   Crear un archivo `.env` en la raíz del proyecto:
   ```env
   # Configuración de Base de Datos para Desarrollo
   DB_NAME=agencia_viajes
   DB_USER=tu_usuario
   DB_PASS=tu_contraseña
   DB_HOST=localhost
   DB_PORT=3306
   
   # Para Producción (Railway, Heroku, etc.)
   DATABASE_URL=mysql://usuario:contraseña@host:puerto/basedatos
   
   # Puerto del servidor
   PORT=4000
   ```

2. **Configurar Base de Datos**
   - El proyecto incluye modelos de Sequelize que crearán las tablas automáticamente
   - Asegúrate de que la base de datos especificada en `.env` exista

## 🎯 Uso

### Desarrollo
```bash
npm run dev
```
El servidor se iniciará en `http://localhost:4000` con recarga automática.

### Producción
```bash
npm start
```

## 📁 Estructura del Proyecto

```
agenicaviajesnode/
│
├── config/
│   └── db.js                 # Configuración de base de datos
│
├── controllers/
│   ├── paginasController.js  # Controladores de páginas principales
│   └── testimonialController.js # Controlador de testimoniales
│
├── models/
│   ├── Viaje.js             # Modelo de viajes
│   └── Testimoniales.js     # Modelo de testimoniales
│
├── routes/
│   └── index.js             # Definición de rutas
│
├── views/
│   ├── layout/              # Plantillas base y componentes
│   │   ├── index.pug
│   │   ├── header.pug
│   │   ├── footer.pug
│   │   ├── bloque_viajes.pug
│   │   └── bloque_testimoniales.pug
│   ├── inicio.pug           # Página de inicio
│   ├── nosotros.pug         # Página sobre nosotros
│   ├── viajes.pug           # Lista de viajes
│   ├── viaje.pug            # Detalle de viaje individual
│   └── testimoniales.pug    # Página de testimoniales
│
├── public/
│   ├── css/                 # Estilos CSS
│   └── img/                 # Imágenes del sitio
│
├── Documentation/           # Documentación del proyecto
├── index.js                 # Archivo principal del servidor
├── package.json            # Dependencias y scripts
└── README.md               # Este archivo
```

## 🔗 API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/` | Página de inicio |
| GET | `/nosotros` | Página sobre la agencia |
| GET | `/viajes` | Lista de todos los viajes |
| GET | `/viajes/:slug` | Detalle de un viaje específico |
| GET | `/testimoniales` | Página de testimoniales |
| POST | `/testimoniales` | Crear nuevo testimonial |

## 🗄️ Base de Datos

### Modelo Viaje
```javascript
{
  titulo: String,
  precio: String,
  fecha_ida: Date,
  fecha_vuelta: Date,
  imagen: String,
  descripcion: String,
  disponibles: String,
  slug: String
}
```

### Modelo Testimoniales
```javascript
{
  nombre: String,
  correo: String,
  mensaje: String
}
```

## 🚀 Deployment

### Variables de Entorno para Producción
Para desplegar en servicios como Railway, Heroku, o similar:

1. Configurar `DATABASE_URL` con la URL completa de tu base de datos
2. Configurar `PORT` (usualmente se asigna automáticamente)

### Comandos de Deployment
```bash
# Construir para producción
npm run build

# Iniciar en producción
npm start
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Ricky Jimenez**

---

## 📸 Screenshots

*Agrega aquí capturas de pantalla de tu aplicación una vez que esté funcionando*

## 🔧 Comandos Útiles

```bash
# Instalar dependencias
npm install

# Modo desarrollo con recarga automática
npm run dev

# Modo producción
npm start

# Ver logs en tiempo real
tail -f logs/access.log
```

## 🐛 Solución de Problemas

### Error de conexión a la base de datos
- Verificar que MySQL esté ejecutándose
- Comprobar las credenciales en el archivo `.env`
- Asegurarse de que la base de datos exista

### Puerto en uso
- Cambiar el puerto en las variables de entorno
- Matar el proceso que esté usando el puerto: `netstat -ano | findstr :4000`

---

⭐ ¡No olvides dar una estrella al proyecto si te ha sido útil!