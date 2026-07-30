# Canicktenia

Cuaderno de entrenamiento de calistenia y fuerza. Funciona en el iPhone como una app: icono propio, pantalla completa y sin conexión.

## Qué hay en la carpeta

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | La app entera: pantallas, lógica y estilos |
| `sw.js` | Hace que abra sin conexión (el gimnasio sin cobertura) |
| `manifest.webmanifest` | Nombre e iconos al instalarla |
| `icon-*.png` | Los iconos |

Los cuatro tienen que estar juntos en la misma carpeta.

## Publicarla en GitHub Pages (gratis)

1. Entra en [github.com](https://github.com) y crea una cuenta si no la tienes.
2. **New repository** → nombre `canicktenia` → **Public** → **Create repository**.
3. En el repositorio: **Add file → Upload files**. Arrastra los siete archivos (no la carpeta, los archivos sueltos) y pulsa **Commit changes**.
4. **Settings → Pages**. En *Branch* elige `main` y carpeta `/ (root)`. **Save**.
5. Espera un par de minutos y recarga esa página: aparecerá tu dirección, del tipo
   `https://tu-usuario.github.io/canicktenia/`

## Instalarla en el iPhone

1. Abre esa dirección **en Safari** (en Chrome no funciona el añadir a inicio).
2. Botón de compartir → **Añadir a pantalla de inicio** → **Añadir**.
3. Ábrela desde el icono. La primera vez, con datos o wifi, para que se guarde entera; a partir de ahí funciona sin conexión.

## Pasar los datos del cuaderno anterior

En la versión de Claude, pestaña **Datos** → **Descargar copia** o **Copiar al portapapeles**. En Canicktenia, pestaña **Datos** → **Elegir archivo** o pega el texto y pulsa **Revisar el texto pegado**.

## Actualizar la app del iPhone

1. Sube a GitHub los archivos nuevos (**siempre `index.html` y `sw.js` juntos**: el `sw.js` lleva el número que le dice al iPhone que hay algo nuevo). En el repositorio: **Add file → Upload files**, arrastra los dos, marca *Commit directly to the main branch* y **Commit changes**. Al llamarse igual, sustituyen a los anteriores.
2. Espera un minuto a que GitHub Pages lo publique.
3. Abre la app desde su icono **con conexión**. Se descarga por detrás.
4. Aparecerá abajo una banda negra: *«Hay una versión nueva del cuaderno»* → **Actualizar**. Si no sale, ciérrala del todo (desliza hacia arriba en el selector de apps) y ábrela otra vez.

En **Datos → Versión** ves qué versión tienes instalada y hay un botón para forzar la comprobación.

No borres el icono para volver a añadirlo: si quitas la app, se puede llevar por delante lo que tengas registrado. Si alguna vez tienes que hacerlo, guarda antes una copia desde la pestaña Datos.

## Cosas que conviene saber

- Los datos se guardan en el propio iPhone, dentro de Safari. No viajan a ningún servidor.
- **Haz una copia de vez en cuando** desde la pestaña Datos: si borras la app o limpias los datos de Safari, se van con ella. La copia se comparte a Archivos, al correo o a donde quieras.
- Cada dispositivo lleva su propio cuaderno. Para pasar de uno a otro, usa la copia.
