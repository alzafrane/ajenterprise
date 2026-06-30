export interface Product {
  id: number;
  name: string;
  desc: string;
  specs: string[];
  image?: string;
  images?: string[];
  popular: boolean;
  price?: number;
  originalPrice?: number;
}

export const createSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export const products: Product[] = [
  {
    id: 1,
    name: "Refurbished Dell Latitude 5400",
    desc: "Business-class durability with robust performance. Ideal for everyday office work and heavy multitasking.",
    specs: ["Intel i5", "8th Genration", "8GB Ram", "256 SSD"],
    images: [
      "/images/dell_5400_open.jpg",
      "/images/dell_5400_closed.jpg",
      "/images/dell_5400_angle.jpg",
    ],
    popular: true,
    price: 18999,
    originalPrice: 45000,
  },
  {
    id: 2,
    name: "Refurbished Dell Latitude 7280",
    desc: "Sleek design paired with absolute performance and enterprise security features.",
    specs: ["Intel i7", "7th Genration", "8GB Ram", "256 SSD"],
    images: [
      "/images/dell_7280_open_front.jpg",
      "/images/dell_7280_open_angle.jpg",
      "/images/dell_7280_closed_top.jpg",
    ],
    popular: true,
    price: 21999,
    originalPrice: 55000,
  },
  {
    id: 3,
    name: "Refurbished Dell Latitude 3400",
    desc: "Reliable and durable companion perfect for office productivity, studying, and everyday utility tasks.",
    specs: ["Intel Core i5", "8th Gen..", "8 Gb Ram", "256 Gb SSD"],
    images: [
      "/images/dell_3400_open.jpg",
      "/images/dell_3400_closed.jpg",
      "/images/dell_3400_kbd.jpg",
    ],
    popular: false,
    price: 17999,
    originalPrice: 42000,
  },
  {
    id: 4,
    name: "Refurbished Dell Latitude 5490",
    desc: "Business-class durability with robust performance. Ideal for everyday office work and heavy multitasking.",
    specs: ["Intel i5", "8th Genration", "8GB Ram", "256 SSD"],
    images: [
      "/images/dell_5400_open.jpg",
      "/images/dell_5400_closed.jpg",
      "/images/dell_5400_angle.jpg",
    ],
    popular: true,
    price: 19500,
    originalPrice: 48000,
  },
  {
    id: 5,
    name: "Refurbished Dell Latitude 5480",
    desc: "Reliable and durable business companion perfect for productivity and everyday utility tasks.",
    specs: ["Intel i5", "6th Genration", "8GB Ram", "256 SSD"],
    images: [
      "/images/dell_5480_open.jpg",
      "/images/dell_5400_closed.jpg",
      "/images/dell_3400_kbd.jpg",
    ],
    popular: false,
    price: 16500,
    originalPrice: 38000,
  },
  {
    id: 6,
    name: "Refurbished Dell Latitude 3510",
    desc: "Essential business laptop with a sleek modern design, perfect for students and professionals on the go.",
    specs: ["Intel i3", "10th Genration", "8GB Ram", "256 SSD"],
    images: [
      "/images/dell_3400_open.jpg",
      "/images/dell_5400_closed.jpg",
      "/images/dell_3400_kbd.jpg",
    ],
    popular: false,
    price: 18500,
    originalPrice: 40000,
  },
  {
    id: 7,
    name: "Refurbished HP Probook 440 G7",
    desc: "Stylish, thin-and-light laptop designed to empower your workday with essential business features and modern aesthetic.",
    specs: ["Intel i5", "10th Genration", "8GB Ram", "256 SSD"],
    images: [
      "/images/hp_probook_open.jpg",
      "/images/macbook_a1708_closed.jpg",
      "/images/dell_3400_kbd.jpg",
    ],
    popular: false,
    price: 24999,
    originalPrice: 65000,
  },
  {
    id: 8,
    name: "Refurbished HP Elitebook 840 G6",
    desc: "Premium enterprise laptop offering robust performance, striking visual display, and high-end security features for professionals.",
    specs: ["Intel i5", "8th Genration", "8GB Ram", "256 SSD"],
    images: [
      "/images/hp_probook_open.jpg",
      "/images/macbook_a1708_closed.jpg",
      "/images/dell_3400_kbd.jpg",
    ],
    popular: false,
    price: 22999,
    originalPrice: 60000,
  },
  {
    id: 9,
    name: "Refurbished HP 250 G8",
    desc: "Budget-friendly business laptop delivering reliable performance for everyday tasks and seamless connectivity.",
    specs: ["Intel i5", "11th Genration", "8GB Ram", "256 SSD"],
    images: [
      "/images/dell_3400_open.jpg",
      "/images/dell_3400_closed.jpg",
      "/images/dell_3400_kbd.jpg",
    ],
    popular: false,
    price: 26999,
    originalPrice: 68000,
  },
  {
    id: 10,
    name: "Used MacBook Pro A1708",
    desc: "Premium lightweight aluminum build with stunning Retina display and reliable performance for professionals.",
    specs: ["Intel i5 / i7", "Year 2017", "8GB / 16GB Ram", "128GB/256GB SSD"],
    images: [
      "/images/macbook_a1708_open.jpg",
      "/images/macbook_a1708_closed.jpg",
      "/images/macbook_a1708_keyboard.jpg",
    ],
    popular: false,
    price: 35000,
    originalPrice: 85000,
  },
  {
    id: 11,
    name: "Used MacBook Pro A1989",
    desc: "Powerful computing with Touch Bar, dynamic vivid display, and fast storage for creative workflows.",
    specs: ["Intel i5 / i7", "Year 2018", "8GB / 16GB Ram", "256GB SSD"],
    images: [
      "/images/macbook_a1989_open.jpg",
      "/images/macbook_a1989_closed.jpg",
      "/images/macbook_a2251_keyboard.jpg",
    ],
    popular: false,
    price: 42000,
    originalPrice: 95000,
  },
  {
    id: 12,
    name: "Used MacBook Pro A2251",
    desc: "Ultimate productivity laptop with enhanced Magic Keyboard and True Tone display for an immersive experience.",
    specs: ["Intel i5 / i7", "Year 2020", "8GB / 16GB Ram", "256GB SSD"],
    images: [
      "/images/macbook_a2251_open.jpg",
      "/images/macbook_a2251_closed.jpg",
      "/images/macbook_a2251_keyboard.jpg",
    ],
    popular: false,
    price: 48000,
    originalPrice: 110000,
  },
  {
    id: 13,
    name: 'Used MacBook Pro 15" A1990',
    desc: "Breathtaking 15-inch Retina display and exceptional performance for creative professionals with Touch Bar integration.",
    specs: ["Intel i7 / i9", "Year 2018", "16GB / 32GB Ram", "512GB SSD"],
    images: [
      "/images/macbook_pro_a1990.jpg",
      "/images/macbook_a1989_closed.jpg",
      "/images/macbook_a2251_keyboard.jpg",
    ],
    popular: true,
    price: 55000,
    originalPrice: 130000,
  },
  {
    id: 14,
    name: 'Used MacBook Pro 16" A2141',
    desc: "Immersive 16-inch Retina display with powerful processing capabilities, perfect for demanding multi-core workloads.",
    specs: ["Intel i7", "Year 2019", "16GB Ram", "512GB SSD"],
    images: [
      "/images/macbook_pro_a2141_i7.jpg",
      "/images/macbook_a2251_closed.jpg",
      "/images/macbook_a2251_keyboard.jpg",
    ],
    popular: false,
    price: 65000,
    originalPrice: 150000,
  },
  {
    id: 15,
    name: 'Used MacBook Pro 16" A2141',
    desc: "The ultimate professional powerhouse delivering top-tier performance for video editing, 3D rendering, and coding.",
    specs: ["Intel i9", "Year 2019", "16GB / 32GB Ram", "512GB / 1TB SSD"],
    images: [
      "/images/macbook_pro_a2141_i9.jpg",
      "/images/macbook_a2251_closed.jpg",
      "/images/macbook_a2251_keyboard.jpg",
    ],
    popular: false,
    price: 75000,
    originalPrice: 180000,
  },
  {
    id: 16,
    name: 'Used MacBook Pro M1 Pro 14"',
    desc: "Game-changing Apple Silicon performance, jaw-dropping Liquid Retina XDR display, and incredible battery life.",
    specs: ["8-Core CPU & 14-Core GPU", "Year 2021", "16GB RAM", "512GB SSD"],
    images: [
      "/images/macbook_m1_open.jpg",
      "/images/macbook_m1_closed.jpg",
      "/images/macbook_m1_kbd.jpg",
    ],
    popular: true,
    price: 110000,
    originalPrice: 200000,
  },
  {
    id: 17,
    name: 'Used MacBook Pro M2 Pro 14"',
    desc: "Exceptional sustained performance, advanced connectivity, and phenomenal battery life in a remarkably portable package.",
    specs: [
      "12-Core CPU & 30-Core GPU",
      "Year 2022/2023",
      "16GB RAM",
      "512GB SSD",
    ],
    images: [
      "/images/macbook_m2_open.jpg",
      "/images/macbook_m2_closed.jpg",
      "/images/macbook_m2_kbd.jpg",
    ],
    popular: false,
    price: 135000,
    originalPrice: 240000,
  },
  {
    id: 18,
    name: 'Used MacBook Pro M3 Pro 14"',
    desc: "The next generation of Apple Silicon offering mind-blowing speed, hardware-accelerated ray tracing, and a stunning Space Black finish.",
    specs: [
      "12-Core CPU & 19-Core GPU",
      "Year 2023/2024",
      "18GB RAM",
      "512GB SSD",
    ],
    images: [
      "/images/macbook_m3_open.jpg",
      "/images/macbook_m3_closed.jpg",
      "/images/macbook_m3_kbd.jpg",
    ],
    popular: true,
    price: 165000,
    originalPrice: 280000,
  },
  {
    id: 19,
    name: "Refurbished Lenovo ThinkPad T490",
    desc: "A durable and powerful laptop designed for professionals, offering robust performance and excellent keyboard.",
    specs: ["Intel i5", "8th Generation", "8GB RAM", "256GB SSD"],
    images: [
      "/images/dell_5400_open.jpg",
      "/images/dell_5400_closed.jpg",
      "/images/dell_5400_angle.jpg",
    ],
    popular: false,
    price: 24000,
    originalPrice: 65000,
  },
  {
    id: 20,
    name: "Refurbished HP ProBook 450 G8",
    desc: "A commercial-grade laptop built for productivity, featuring a sleek design and reliable performance.",
    specs: ["Intel i5", "11th Generation", "8GB RAM", "256GB SSD"],
    images: [
      "/images/hp_probook_open.jpg",
      "/images/hp_probook_open.jpg",
      "/images/hp_probook_open.jpg",
    ],
    popular: false,
    price: 35000,
    originalPrice: 75000,
  },
];
