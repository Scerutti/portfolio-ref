# Portfolio Personal - Sebastián Cerutti

Un portfolio profesional, moderno y responsive construido con React y TypeScript.

## 🚀 Características

- **Responsive Design**: Optimizado para todos los dispositivos
- **Modo Claro/Oscuro**: Cambio de tema con persistencia
- **Internacionalización**: Soporte para inglés y español
- **Animaciones Suaves**: Efectos visuales con Framer Motion
- **Diseño Minimalista**: Interfaz limpia y profesional
- **SEO Optimizado**: Meta tags y estructura semántica

## 📱 Secciones

- **Hero**: Presentación principal con animaciones
- **Sobre Mí**: Información personal y habilidades
- **Educación**: Formación académica y certificaciones
- **Proyectos**: Portfolio de trabajos destacados
- **Recomendaciones**: Testimonios de LinkedIn
- **Contacto**: Formulario de contacto funcional

## 🛠️ Tecnologías Utilizadas

- **Vite** - Build tool ultra-rápido
- **React 18** - Framework principal
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS utility-first
- **Framer Motion** - Animaciones
- **React Icons** - Iconografía
- **PostCSS** - Procesamiento de CSS
- **Intersection Observer** - Animaciones al scroll
- **ESLint** - Linting y calidad de código

## 🚀 Instalación y Uso

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd portfolio-react
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

5. **Previsualizar build de producción**
   ```bash
   npm run preview
   ```

6. **Linting**
   ```bash
   npm run lint
   ```

## 🎨 Personalización

### Cambiar Información Personal

1. **Datos personales**: Edita `src/components/Hero.tsx`
2. **Habilidades**: Modifica `src/components/About.tsx`
3. **Proyectos**: Actualiza `src/components/Projects.tsx`
4. **Educación**: Cambia `src/components/Education.tsx`
5. **Contacto**: Personaliza `src/components/Contact.tsx`

### Colores y Temas

Los colores se definen en `src/index.css` usando CSS custom properties:

```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #1e293b;
  --accent-primary: #3b82f6;
  /* ... más variables */
}
```

### Traducciones

Las traducciones están en `src/contexts/LanguageContext.tsx`:

```typescript
const translations = {
  en: {
    'nav.home': 'Home',
    // ... más traducciones
  },
  es: {
    'nav.home': 'Inicio',
    // ... más traducciones
  }
};
```

## 📱 Responsive Design

El portfolio está optimizado para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🌟 Características Destacadas

- **Performance**: Carga rápida y optimizada
- **Accesibilidad**: Cumple estándares WCAG
- **SEO**: Meta tags y estructura semántica
- **PWA Ready**: Preparado para Progressive Web App
- **Cross-browser**: Compatible con todos los navegadores modernos

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

**Sebastián Ceru**
- Email: softsys95@gmail.com
- LinkedIn: [linkedin.com/in/cerutti-sebastian](https://www.linkedin.com/in/cerutti-sebastiáng/)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
