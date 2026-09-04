/**
 * ДАННЫЕ ПРОЕКТОВ
 *
 * КАК САМОМУ ЗАМЕНИТЬ КАРТИНКУ (без промптов):
 * 1. Положите новый файл в папку `public/images/` (например public/images/01.jpg).
 * 2. В нужном проекте ниже впишите: image: "/images/01.jpg".
 * Всё — картинка заменится. Имя файла может быть любым.
 * Если image: null — показывается аккуратный placeholder.
 *
 * Изображения хранятся локально в public/images.
 */

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
    image: "/images/01.png",
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
    image: "/images/02.png",
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
    image: "/images/03.png",
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
    image: "/images/04.png",
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
    image: "/images/05.png",
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
    image: "/images/06.png",
    type: "Общественное здание",
    year: 2025,
    tagsLeft: LEFT,
    tagsRight: RIGHT,
    description: "Проработка фасадных решений и подготовка к подаче.",
    featured: false,
  },
];
