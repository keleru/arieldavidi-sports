import type { Work } from "../types/work";

const modules = import.meta.glob("../assets/works/*.{jpg,jpeg,png}",
    { eager: true,
    }) as Record<string, { default: string }>;

const works: Work[] = Object.values(modules).map((mod, i) => ({
  id: i,
  image: mod.default,
}));

export default works;

