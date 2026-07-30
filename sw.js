/* Canicktenia — funcionamiento sin conexión */

const CACHE = "canicktenia-v5";
const FUENTES = "canicktenia-fuentes-v1";

const CONCHA = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
];

self.addEventListener("install", (evento) => {
  evento.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(CONCHA)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (evento) => {
  evento.waitUntil(
    caches.keys()
      .then((claves) =>
        Promise.all(claves.filter((k) => k !== CACHE && k !== FUENTES).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (evento) => {
  const pet = evento.request;
  if (pet.method !== "GET") return;
  const url = new URL(pet.url);

  /* Fuentes de Google: se guardan la primera vez y luego salen de la caché */
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    evento.respondWith(
      caches.open(FUENTES).then((cache) =>
        cache.match(pet).then((guardada) => {
          const red = fetch(pet)
            .then((resp) => {
              if (resp && (resp.ok || resp.type === "opaque")) cache.put(pet, resp.clone());
              return resp;
            })
            .catch(() => guardada);
          return guardada || red;
        })
      )
    );
    return;
  }

  if (url.origin !== self.location.origin) return;

  /* La app: primero la caché para abrir al instante, y se refresca por detrás */
  evento.respondWith(
    caches.open(CACHE).then((cache) =>
      cache.match(pet, { ignoreSearch: true }).then((guardada) => {
        const red = fetch(pet)
          .then((resp) => {
            if (resp && resp.ok) cache.put(pet, resp.clone());
            return resp;
          })
          .catch(() => guardada || cache.match("./index.html"));
        return guardada || red;
      })
    )
  );
});
