// src/vite-env.d.ts

/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    // Agregá acá cualquier otra variable de entorno que uses
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}