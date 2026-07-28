// src/data/gallery.ts
import type { ImageMetadata } from "astro";

// Interface untuk type checking yang ketat di Astro/TypeScript
export interface GalleryItem {
  id: number;
  category: string;
  title: string;
  image: ImageMetadata;
}

// Mengimpor semua gambar dari subfolder /gallery/ secara eager
const images = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/gallery/**/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

export const gallery: GalleryItem[] = Object.entries(images)
  .map(([path, image], index) => {
    // 1. Ambil nama folder sebagai kategori (contoh: /gallery/kegiatan/foto1.jpg -> "kegiatan")
    const category =
      path.split("/").at(-2)?.replace(/[-_]/g, " ") ?? "lainnya";

    // 2. Ambil nama file (tanpa ekstensi) untuk dijadikan judul/title otomatis (contoh: "rapat-desa.jpg" -> "Rapat Desa")
    const rawFileName = path.split("/").pop()?.split(".")[0] ?? "";
    const title =
      rawFileName
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase()) || "Dokumentasi Desa";

    return {
      id: index + 1,
      category,
      title,
      image,
    };
  })
  .sort((a, b) => a.category.localeCompare(b.category));