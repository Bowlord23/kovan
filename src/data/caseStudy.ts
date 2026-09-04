/**
 * ДАННЫЕ ПОДРОБНОГО ПРОЕКТА (CASE STUDY)
 * Весь текст и изображения меняются здесь.
 * image: null → показывается placeholder с подписью.
 * fit: "cover" для рендеров, "contain" для wireframe / UV / технических изображений.
 */

export type CaseImage = {
  image: string | null;
  label: string;
  caption: string;
  ratio: string;
  fit: "cover" | "contain";
};

export type CaseBlock = {
  index: string;
  title: string;
  text?: string;
  images: CaseImage[];
  columns: 1 | 2 | 3;
};

export const caseStudy = {
  eyebrow: "Проект 01",
  title: "Третья Прядильная",
  subtitle: "ВПМ · НПМ · АГР",
  meta: [
    { label: "Год", value: "2026" },
    { label: "Тип объекта", value: "Жилой дом" },
    {
      label: "Роль",
      value: "3D-моделирование · оптимизация · UV · текстурирование · техническая подготовка",
    },
    { label: "Программы", value: "Blender · Photoshop" },
  ],
  task: "Проект жилого дома на улице Третья Прядильная для компании ПИК. Для проекта выполнены низкополигональная и высокополигональная модели — объект капитального строительства и комплексное благоустройство участка.",
  hero: {
    image: "/images/buk.png",
    label: "Третья Прядильная",
    caption: "1920 × 1080",
    ratio: "16 / 9",
    fit: "cover",
  } as CaseImage,
  blocks: [
    {
      index: "01",
      title: "Задача",
      text: "Исходными данными для проекта являлись чертежи в формате DWG и буклет АГР. Задача заключалась в создании технически корректной ВПМ и последующей подготовке оптимизированной НПМ для использования в составе АГР.",
      images: [],
      columns: 1,
    },
    {
      index: "02",
      title: "Моделирование",
      text: "На основе проектной документации была создана геометрия ОКС с проработкой основных архитектурных элементов и фасадов. Отдельное внимание уделялось соответствию проектным габаритам и архитектурному облику объекта.",
      images: [
        { image: null, label: "ВПМ · Общий вид", caption: "1920 × 1080", ratio: "3 / 2", fit: "cover" },
        { image: null, label: "ВПМ · Детали фасада", caption: "1920 × 1080", ratio: "3 / 2", fit: "cover" },
      ],
      columns: 2,
    },
    {
      index: "03",
      title: "Оптимизация",
      text: "После создания исходной модели геометрия была адаптирована под требования НПМ: оптимизирована полигональность, проверены нормали и трансформации, подготовлена структура объектов. ВПМ — 190 тыс. полигонов, НПМ — 41 тыс. полигонов.",
      images: [
        { image: "/images/102.png", label: "НПМ", caption: "41 тыс. полигонов", ratio: "4 / 3", fit: "cover" },
        { image: "/images/101.png", label: "ВПМ", caption: "190 тыс. полигонов", ratio: "4 / 3", fit: "cover" },
        { image: "/images/100.png", label: "Финальный вид", caption: "1920 × 1080", ratio: "4 / 3", fit: "contain" },
      ],
      columns: 3,
    },
    {
      index: "04",
      title: "UV и текстуры",
      text: "Для модели подготовлены UV-развёртки и текстурные наборы с учётом технических требований проекта.",
      images: [
        { image: "/images/uvs.png", label: "UV Layout", caption: "2048 × 2048", ratio: "1 / 1", fit: "contain" },
        { image: "/images/maps.png", label: "Texture Atlas", caption: "2048 × 2048", ratio: "1 / 1", fit: "contain" },
        { image: "/images/mats.png", label: "Final Material", caption: "2048 × 2048", ratio: "1 / 1", fit: "contain" },
      ],
      columns: 3,
    },
    {
      index: "05",
      title: "Благоустройство",
      images: [
        { image: null, label: "Благоустройство · 01", caption: "1600 × 1200", ratio: "4 / 3", fit: "cover" },
        { image: null, label: "МАФ · 02", caption: "1600 × 1200", ratio: "4 / 3", fit: "cover" },
        { image: null, label: "Растительность · 03", caption: "1600 × 1200", ratio: "4 / 3", fit: "cover" },
      ],
      columns: 3,
    },
    {
      index: "06",
      title: "Результат",
      text: "Модель была подготовлена к технической проверке и передаче в составе комплекта АГР.",
      images: [
        { image: "/images/buk.png", label: "Фасады — материалы", caption: "1920 × 1080", ratio: "16 / 9", fit: "contain" },
      ],
      columns: 1,
    },
  ] as CaseBlock[],
};
