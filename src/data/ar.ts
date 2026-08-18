/**
 * Arabic content layer.
 *
 * The base data files stay in English (they are also used for SEO / URLs).
 * This module holds the Arabic counterpart, keyed by a stable identifier,
 * so nothing in the English data has to be duplicated or reshaped.
 */

export const projectAr: Record<string, { title: string; description: string }> = {
  "town-team": {
    title: "تاون تيم",
    description:
      "منصة تجارة إلكترونية للملابس قائمة على فرق العمل، مع إدارة للمخزون وأدوات تعاون بين أعضاء الفريق.",
  },
  "under-armour": {
    title: "متجر أندر آرمور",
    description:
      "منصة تجارة إلكترونية متكاملة للملابس الرياضية تضم كتالوج منتجات ونظام إتمام شراء.",
  },
  "ohanna-landing": {
    title: "صفحة هبوط أوهانا",
    description: "صفحة هبوط عصرية لعلامة أزياء بطابع داكن مع عرض مميز للمنتجات.",
  },
  "lumina-beauty": {
    title: "لومينا بيوتي",
    description: "منصة تجارة إلكترونية لمستحضرات التجميل مع فلترة للمنتجات ونظام توصيات.",
  },
  "little-boys": {
    title: "ليتل بويز للأزياء",
    description: "متجر ملابس متخصص للأطفال مع أدلة مقاسات وواجهة سهلة للأهل.",
  },
  "clothing-shop": {
    title: "متجر الملابس",
    description: "تطبيق تجارة إلكترونية متكامل للملابس مع تسجيل دخول للمستخدمين وإدارة للطلبات.",
  },
  lumina: {
    title: "لومينا (منصة التجميل)",
    description: "سوق شامل لمستحضرات التجميل مع إدارة للبائعين وتقييمات العملاء.",
  },
  "linea-jewelry": {
    title: "متجر لينيا للمجوهرات",
    description: "منصة مجوهرات فاخرة مع تخصيص للمنتجات وقوائم أمنيات.",
  },
  "vingo-roll": {
    title: "فينجو رول",
    description: "سوق أثاث مدعوم بتقنيات Web3 مع معاملات على البلوكتشين وتكامل مع NFT.",
  },
  "e-inventory": {
    title: "لوحة تحكم المخزون",
    description: "لوحة تحكم إدارية للمخزون مع تتبع لحظي للكميات وتحليلات مفصلة.",
  },
  velocity: {
    title: "فيلوسيتي للسباحة",
    description: "منصة مجتمعية لفرق السباحة مع جدولة للفعاليات وإدارة للأعضاء.",
  },
  luxelle: {
    title: "لوكسيل",
    description: "صفحة هبوط فاخرة لمستحضرات التجميل مبنية بـ Angular مع تكامل Web3.",
  },
  "zyro-electric": {
    title: "زايرو إلكتريك",
    description: "منصة تجارة إلكترونية لإكسسوارات التقنية بواجهة عصرية وإمكانات Web3.",
  },
  "shop-microservices": {
    title: "متجر الخدمات المصغّرة",
    description:
      "معمارية خدمات مصغّرة متقدمة للتجارة الإلكترونية مع تكامل Web3 وبنية خلفية قابلة للتوسّع.",
  },
  "inventory-microservices": {
    title: "مخزون الخدمات المصغّرة",
    description: "نظام شامل لإدارة المخزون بمعمارية خدمات مصغّرة مع تتبع وتحليلات متقدمة.",
  },
  "market-api": {
    title: "واجهة برمجة السوق",
    description:
      "واجهة برمجية RESTful لعمليات السوق الرقمي بقاعدة بيانات MongoDB وتوثيق Swagger وإدارة بيانات لحظية.",
  },
  "e-commerce-api": {
    title: "واجهة برمجة التجارة الإلكترونية",
    description:
      "واجهة برمجية خلفية متكاملة للتجارة الإلكترونية بقاعدة SQL Server وتوثيق Swagger وتغطية شاملة للنقاط الطرفية.",
  },
  "marketing-mvc": {
    title: "تطبيق التسويق MVC",
    description:
      "تطبيق تسويقي متكامل مبني بـ ASP.NET MVC وSQL Server، بواجهة عصرية ومنطق أعمال شامل.",
  },
};

export const categoryAr: Record<string, string> = {
  All: "الكل",
  Clothing: "ملابس",
  Beauty: "تجميل",
  Jewelry: "مجوهرات",
  Furniture: "أثاث",
  Dashboard: "لوحات تحكم",
  Web3: "ويب 3",
  Sports: "رياضة",
  "Tech Accessories": "إكسسوارات تقنية",
  Backend: "خدمات خلفية",
};

export const projectTypeAr: Record<string, string> = {
  Team: "عمل جماعي",
  Freelance: "عمل حر",
  Self: "مشروع شخصي",
};

export const projectStatusAr: Record<string, string> = {
  "In Progress": "قيد التنفيذ",
  Completed: "مكتمل",
  Deployed: "منشور",
  Done: "منجز",
};

export const skillGroupAr: Record<string, string> = {
  Frontend: "الواجهات الأمامية",
  Backend: "الخدمات الخلفية",
  Databases: "قواعد البيانات",
  "Architecture & Patterns": "المعمارية وأنماط التصميم",
  "Real-Time & Communication": "الاتصال اللحظي",
  "DevOps & CI/CD": "DevOps والنشر المستمر",
  "Security & Testing": "الأمان والاختبارات",
  "Tools & Platforms": "الأدوات والمنصات",
};

export const experienceAr: Record<
  string,
  { role: string; company: string; period: string; points: string[] }
> = {
  "WE3DS Company": {
    role: "مطوّر برمجيات أول",
    company: "شركة WE3DS",
    period: "يوليو 2024 — حتى الآن",
    points: [
      "تصميم وتنفيذ خدمات مصغّرة قابلة للتوسّع على .NET 8 باستخدام Clean Architecture والتصميم الموجّه بالمجال (DDD) لسير عمل الأسواق المؤسسية.",
      "قيادة الانتقال إلى معماريات متعددة المستأجرين مع عزل آمن للبيانات وصلاحيات هرمية قائمة على الأدوار (RBAC).",
      "بناء طبقات تكامل عالية الإنتاجية تدير أكثر من 1000 نقطة اتصال إنترنت الأشياء عبر بث لحظي بـ SignalR.",
      "أتمتة خطوط CI/CD باستخدام Azure DevOps وTFS مما قلّص دورات النشر بشكل كبير.",
      "تحسين أداء قواعد البيانات بنسبة 300% عبر ضبط استعلامات SQL والفهرسة والتخزين المؤقت الموزّع بـ Redis.",
    ],
  },
  "Self-Employed": {
    role: "مطوّر متكامل (عمل حر)",
    company: "عمل حر",
    period: "نوفمبر 2023 — يوليو 2024",
    points: [
      "تطوير تطبيقات ويب متكاملة باستخدام Next.js وReact لواجهات أسواق ديناميكية وصديقة لمحركات البحث.",
      "بناء واجهات برمجية خلفية قوية بـ .NET Core وفق مبادئ المعمارية النظيفة.",
      "دمج واجهات REST خارجية معقّدة (المدفوعات، المصادقة، الخرائط) لتوسيع قدرات المنصة.",
      "حزم الخدمات القديمة في حاويات Docker لتبسيط التطوير والانتقال إلى السحابة.",
    ],
  },
};

export const testimonialAr: Record<string, { quote: string; name: string; title: string }> = {
  "Sofia Marchetti": {
    quote:
      "نقل سوقنا الرقمي من نموذج أولي هشّ إلى منصة تعالج مبيعات بتسعة أرقام. مزيج نادر من العمق التقني والحس المنتَجي.",
    name: "صوفيا مارشيتي",
    title: "الرئيسة التنفيذية، Aurelia Commerce",
  },
  "Daniel Okafor": {
    quote:
      "محرك المزايدة اللحظي الذي صممه ما زال العمود الفقري لأعمالنا. ثابت تماماً تحت الضغط.",
    name: "دانيال أوكافور",
    title: "المدير التقني، BidHub",
  },
  "Yara Haddad": {
    quote:
      "قليل من المهندسين يفهمون ديناميكيات الأسواق الرقمية حقاً. هو يفهمها — المدفوعات والثقة والبحث والخدمات اللوجستية. وقد نفّذها جميعاً.",
    name: "يارا حداد",
    title: "نائبة رئيس الهندسة، Nearby",
  },
};
