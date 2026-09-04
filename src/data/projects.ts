/**
 * ДАННЫЕ ПРОЕКТОВ
 *
 * КАК САМОМУ ЗАМЕНИТЬ КАРТИНКУ (без промптов):
 * 1. Положите новый файл в папку `public/images/` (например public/images/01.jpg).
 * 2. В нужном проекте ниже впишите: image: "/images/01.jpg".
 * Всё — картинка заменится. Имя файла может быть любым.
 * Если image: null — показывается аккуратный placeholder.
 *
 * Сейчас используются загруженные изображения из src/assets (CDN).
 */

import img01 from "@/assets/01.png.asset.json";
import img02 from "@/assets/02.png.asset.json";
import img03 from "@/assets/03.png.asset.json";
import img04 from "@/assets/04.png.asset.json";
import img05 from "@/assets/05.png.asset.json";
import img06 from "@/assets/06.png.asset.json";

export type Project = {
  id: string;
  number: string;
  title: string;
  image: string | null;
  type: string;
  year: number;
  tagsLeft: string;
  tagsRight: string;
  description: string;
  featured: boolean;
};

const LEFT = "ОКС · Благоустройство";
const RIGHT = "ВПМ+НПМ";

export const projects: Project[] = [
  {
    id: "p01",
    number: "01",
    title: "Третья Прядильная",
    image: img01.url,
    type: "Жилой комплекс",
    year: 2026,
    tagsLeft: LEFT,
    tagsRight: RIGHT,
    description: "Подготовка ВПМ и НПМ жилого комплекса для АГР.",
    featured: true,
  },
  {
    id: "p02",
    number: "02",
    title: "Садовая",
    image: img02.url,
    type: "Жилой дом",
    year: 2026,
    tagsLeft: LEFT,
    tagsRight: RIGHT,
    description: "Моделирование ОКС и прилегающего благоустройства.",
    featured: false,
  },
  {
    id: "p03",
    number: "03",
    title: "Гимназия №41",
    image: img03.url,
    type: "Образовательный комплекс",
    year: 2026,
    tagsLeft: LEFT,
    tagsRight: RIGHT,
    description: "Оптимизация геометрии и подготовка НПМ.",
    featured: false,
  },
  {
    id: "p04",
    number: "04",
    title: "Малышева",
    image: img04.url,
    type: "МФК",
    year: 2026,
    tagsLeft: LEFT,
    tagsRight: RIGHT,
    description: "UV-развёртки и текстурные наборы фасадов.",
    featured: false,
  },
  {
    id: "p05",
    number: "05",
    title: "Блок 4",
    image: img05.url,
    type: "Квартал",
    year: 2026,
    tagsLeft: LEFT,
    tagsRight: RIGHT,
    description: "Квартальная застройка с благоустройством и МАФ.",
    featured: false,
  },
  {
    id: "p06",
    number: "06",
    title: "Волковский",
    image: img06.url,
    type: "Общественное здание",
    year: 2025,
    tagsLeft: LEFT,
    tagsRight: RIGHT,
    description: "Проработка фасадных решений и подготовка к подаче.",
    featured: false,
  },
];
