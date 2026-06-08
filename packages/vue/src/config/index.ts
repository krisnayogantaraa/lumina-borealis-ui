import type { App, Component } from 'vue';

export type IconResolver = (name: string) => Component | string | undefined;

/**
 * Definisi satu warna semantik beserta variasinya.
 * User cukup mengisi `base`. Variasi lain (`hover`, `active`, `light`)
 * bersifat opsional — jika tidak diisi, Lumina akan tetap jatuh ke default CSS.
 */
export interface ColorDefinition {
  /** Warna utama (dipakai untuk background solid, teks, border, dll). */
  base: string;
  /** Warna saat di-hover. */
  hover?: string;
  /** Warna saat di-click/active. */
  active?: string;
  /** Warna versi terang (dipakai untuk background outline/ghost saat hover). */
  light?: string;
  /** Warna border (dipakai oleh variant outline). */
  border?: string;
}

export interface LuminaOptions {
  icons?: {
    /**
     * Resolves a string icon name into either a Vue Component (e.g. Lucide SVG)
     * or a string representing CSS classes (e.g. 'fa-solid fa-check' for FontAwesome).
     */
    resolver?: IconResolver;
  };

  theme?: {
    /**
     * Override atau tambahkan warna semantik.
     *
     * Key yang sudah ada di default: 'primary', 'secondary', 'danger', 'warning', 'success'.
     * Anda bisa meng-override salah satunya, atau menambahkan key baru sesuai kebutuhan.
     *
     * @example
     * ```ts
     * app.use(createLumina({
     *   theme: {
     *     colors: {
     *       // Override primary menjadi biru
     *       primary: { base: '#2563eb', hover: '#1d4ed8', active: '#1e40af', light: '#eff6ff' },
     *       // Tambah warna baru "brand"
     *       brand: { base: '#8b5cf6', hover: '#7c3aed', light: '#f5f3ff' },
     *     }
     *   }
     * }))
     * ```
     */
    colors?: Record<string, ColorDefinition>;
  };
}

export const LUMINA_CONFIG_KEY = Symbol('LUMINA_CONFIG');

/**
 * Menyuntikkan warna dari konfigurasi user menjadi CSS custom properties di :root.
 * Ini memastikan seluruh komponen Lumina langsung merespons perubahan warna
 * tanpa perlu inline-style di tiap komponen.
 */
function injectThemeColors(colors: Record<string, ColorDefinition>) {
  // Kumpulkan semua CSS variable yang perlu di-set
  const vars: Record<string, string> = {};

  for (const [name, def] of Object.entries(colors)) {
    vars[`--luma-color-${name}`] = def.base;
    if (def.hover) vars[`--luma-color-${name}-hover`] = def.hover;
    if (def.active) vars[`--luma-color-${name}-active`] = def.active;
    if (def.light) vars[`--luma-color-${name}-light`] = def.light;
    if (def.border) vars[`--luma-color-${name}-border`] = def.border;
  }

  // Suntikkan ke :root melalui sebuah <style> tag agar mudah di-debug
  const styleId = 'lumina-borealis-theme';
  let styleEl = document.getElementById(styleId) as HTMLStyleElement | null;

  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = styleId;
    document.head.appendChild(styleEl);
  }

  const cssText = Object.entries(vars)
    .map(([key, val]) => `  ${key}: ${val};`)
    .join('\n');

  styleEl.textContent = `:root {\n${cssText}\n}`;
}

/**
 * Global Configuration Plugin for Lumina Borealis.
 * Install this in main.ts via `app.use(createLumina({ ... }))`.
 */
export function createLumina(options: LuminaOptions = {}) {
  return {
    install(app: App) {
      app.provide(LUMINA_CONFIG_KEY, options);

      // Inject theme colors jika tersedia
      if (options.theme?.colors && typeof document !== 'undefined') {
        injectThemeColors(options.theme.colors);
      }
    },
  };
}

