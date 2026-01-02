Flow - A tu lado, a tu ritmo

> Herramienta de bienestar emocional basada en activación conductual.
> 100% gratuita. 100% open-source. 100% sin ánimo de lucro.

## 🚧 Estado: En desarrollo activo (Fase 0)

### Setup completado:
- [x] Proyecto base React + TypeScript + Vite
- [x] TailwindCSS configurado
- [x] Base de datos (Dexie/IndexedDB)
- [x] State management (Zustand)
- [x] PWA configuración
- [ ] Onboarding (próximo)
- [ ] Registro de actividades
- [ ] Diario emocional

## 🛠️ Desarrollo local
```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📁 Estructura del proyecto
````
src/
├── components/        # Componentes React
├── hooks/            # Custom hooks
├── services/         # Lógica de negocio (db, storage)
├── store/            # Estado global (Zustand)
├── types/            # TypeScript types
├── utils/            # Helpers
└── assets/           # Imágenes, iconos
````

## 🎨 Paleta de colores

- **Sage** (#88AB8E) - Verde principal
- **Sky** (#A8D8EA) - Azul suave
- **Peach** (#FFCDB2) - Naranja cálido
- **Cream** (#F5F5DC) - Fondo
- **Terra** (#E07A5F) - CTAs
- **Charcoal** (#3D405B) - Texto

## 📝 Tecnologías

- React 18
- TypeScript
- Vite
- TailwindCSS
- Dexie (IndexedDB)
- Zustand
- PWA

## 📄 Licencia

MIT License
````

### 10. Commit y push
````bash
git add .
git commit -m "feat: setup inicial del proyecto - React, TypeScript, Tailwind, Dexie, Zustand, PWA"
git push origin main
````

### 11. Verificar que todo funciona
````bash
npm run dev
````

Deberías ver en http://localhost:5173 una pantalla con el logo de Flow y confirmación de que todo está configurado.

---

## ✅ CHECKLIST - Cuando termines

- [ ] Proyecto corre sin errores (`npm run dev`)
- [ ] TailwindCSS funciona (ves los colores de Flow)
- [ ] Base de datos está configurada (no hay errores en consola)
- [ ] README actualizado
- [ ] Todo commiteado y pusheado a GitHub
- [ ] Avisas a tu madre que está listo para que empiece con componentes

---

## 🆘 Si algo falla

1. Verifica que tienes Node.js 18+ (`node --version`)
2. Borra `node_modules` y reinstala: `rm -rf node_modules && npm install`
3. Verifica que no hay errores en la consola del navegador (F12)
4. Búscame en el chat si algo no funciona
