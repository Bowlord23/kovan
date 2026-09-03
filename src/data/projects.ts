/**
 * ДАННЫЕ ПРОЕКТОВ
 * Чтобы заменить проект — отредактируйте поля ниже.
 * image: путь к изображению (например "/images/project-01.jpg").
 * Пока image = null — показывается аккуратный placeholder.
 */

import heroImage from "@/assets/tretya-pryadilnaya.png.asset.json";

export type Project = {
  id: string;
  number: string;
  title: string;
  image: string | null;
  type: string;
  year: number;
  tags: string[];
  description: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "p01",
    number: "01",
    title: "Третья Прядильная",
    image: heroImage.url,
    type: "Жилой комплекс",
    year: 2026,
    tags: ["ВПМ", "НПМ", "АГР"],
    description: "Подготовка ВПМ и НПМ жилого комплекса для АГР.",
    featured: true,
  },
  {
    id: "p02",
    number: "02",
    title: "Жилой дом",
    image: null,
    type: "Жилой дом",
    year: 2025,
    tags: ["ОКС", "Благоустройство", "ВПМ"],
    description: "Моделирование ОКС и прилегающего благоустройства.",
    featured: false,
  },
  {
    id: "p03",
    number: "03",
    title: "Образовательный комплекс",
    image: null,
    type: "Образовательный комплекс",
    year: 2025,
    tags: ["НПМ", "Оптимизация", "АГР"],
    description: "Оптимизация геометрии и подготовка НПМ.",
    featured: false,
  },
  {
    id: "p04",
    number: "04",
    title: "Многофункциональный комплекс",
    image: null,
    type: "МФК",
    year: 2025,
    tags: ["ВПМ", "UV", "Текстуры"],
    description: "UV-развёртки и текстурные наборы фасадов.",
    featured: false,
  },
  {
    id: "p05",
    number: "05",
    title: "Жилой квартал",
    image: null,
    type: "Квартал",
    year: 2025,
    tags: ["ОКС", "Благоустройство", "НПМ"],
    description: "Квартальная застройка с благоустройством и МАФ.",
    featured: false,
  },
  {
    id: "p06",
    number: "06",
    title: "Общественное здание",
    image: null,
    type: "Общественное здание",
    year: 2025,
    tags: ["ВПМ", "НПМ", "АГР"],
    description: "Проработка фасадных решений и подготовка к подаче.",
    featured: false,
  },
  {
    id: "p07",
    number: "07",
    title: "Жилой комплекс",
    image: null,
    type: "Жилой комплекс",
    year: 2025,
    tags: ["НПМ", "Оптимизация", "АГР"],
    description: "Оптимизация полигональности и контроль нормалей.",
    featured: false,
  },
  {
    id: "p08",
    number: "08",
    title: "Архитектурный объект",
    image: null,
    type: "Архитектурный объект",
    year: 2025,
    tags: ["ВПМ", "Текстуры", "АГР"],
    description: "Моделирование по проектной документации.",
    featured: false,
  },
  {
    id: "p09",
    number: "09",
    title: "Благоустройство",
    image: null,
    type: "Благоустройство",
    year: 2025,
    tags: ["МАФ", "Растительность", "НПМ"],
    description: "МАФ, покрытия, растительность, малые формы.",
    featured: false,
  },
  {
    id: "p10",
    number: "10",
    title: "ОКС",
    image: null,
    type: "ОКС",
    year: 2025,
    tags: ["ОКС", "ВПМ", "АГР"],
    description: "Подготовка модели ОКС к технической проверке.",
    featured: false,
  },
];
