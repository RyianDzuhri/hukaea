const images = import.meta.glob(
    "../assets/images/gallery/**/*.{jpg,jpeg,png,webp}",
    {
        eager: true,
        import: "default",
    }
);

export const gallery = Object.entries(images)
    .map(([path, image], index) => {

        const category =
            path.split("/").at(-2)?.replace(/[-_]/g, " ") ??
            "lainnya";

        return {

            id: index + 1,

            category,

            image,

        };

    })
    .sort((a, b) => a.category.localeCompare(b.category));