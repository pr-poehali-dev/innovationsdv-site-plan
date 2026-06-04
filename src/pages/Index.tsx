import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

type Lang = "ru" | "en" | "zh";

const T = {
  ru: {
    navHome: "Главная", navServices: "Услуги", navAbout: "О компании", navContacts: "Контакты",
    cta: "Получить консультацию",
    heroBadge: "IT-компания Дальнего Востока",
    heroTitle1: "Автоматизируем бизнес,",
    heroTitle2: "освобождаем время",
    heroDesc: "Комплексные IT-решения для производственных, торговых и сервисных компаний. Внедряем CRM/ERP, поставляем оборудование, строим аналитику — под ключ.",
    heroBtn2: "Наши услуги",
    adv1: "лет на рынке IT", adv2: "реализованных проектов", adv3: "постоянных клиентов", adv4: "техническая поддержка",
    servicesTitle: "Направления деятельности",
    servicesDesc: "Комплексный подход к цифровизации бизнеса — от стратегии до технической поддержки.",
    s1title: "Комплексные решения", s1desc: "Стратегия цифровизации, аудит бизнес-процессов и подбор IT-систем под задачи вашей компании.", s1i1: "Стратегия цифровизации", s1i2: "Аудит бизнес-процессов", s1i3: "Интеграция IT-систем",
    s2title: "Автоматизация бизнеса", s2desc: "Внедрение CRM и ERP-систем, автоматизация документооборота и складского учёта.", s2i1: "CRM: Битрикс24, amoCRM", s2i2: "ERP-системы", s2i3: "Автоматизация склада (WMS)",
    s3title: "Оборудование и ПО", s3desc: "Поставки кассового и торгового оборудования, лицензионного программного обеспечения.", s3i1: "Онлайн-кассы и ФН", s3i2: "Сканеры, ТСД, принтеры", s3i3: "Лицензионное ПО",
    s4title: "Системы аналитики", s4desc: "Настройка BI-систем, сквозная аналитика, дашборды и отчёты для принятия решений.", s4i1: "BI-системы", s4i2: "Сквозная аналитика", s4i3: "Дашборды для руководства",
    s5title: "Интеграция с государственными системами", s5desc: "Подключение и настройка обязательных государственных систем для торговых, производственных и логистических компаний.", s5i1: "ГИС МТ (Честный знак)", s5i2: "Меркурий (ветеринарный контроль)", s5i3: "ЭДО (электронный документооборот)", s5i4: "Логистика и транспортные системы",
    s6title: "Автоматизация торговых агентов", s6desc: "Внедрение мобильных систем для автоматизации работы торговых представителей: сбор заказов, маршруты, контроль дебиторки.", s6i1: "Агент+ (мобильная торговля)", s6i2: "Моби С (заказы и маршруты)", s6i3: "Сервис Точки (контроль торговых точек)",
    casesTitle: "Реализованные проекты", casesDesc: "Измеримые результаты для наших клиентов.",
    caseTask: "Задача", caseSolution: "Решение", caseResult: "Результат",
    c1industry: "Ритейл", c1task: "Разрозненный учёт продаж в 12 магазинах", c1sol: "Внедрение единой ERP + кассовое оборудование", c1res: "−35% времени на инвентаризацию, +18% точность учёта",
    c2industry: "Производство", c2task: "Отсутствие сквозной аналитики по производству", c2sol: "BI-система + интеграция с 1С", c2res: "Сокращение потерь на 22%, прозрачность KPI в реальном времени",
    c3industry: "Оптовая торговля", c3task: "Хаотичная работа отдела продаж", c3sol: "Внедрение Битрикс24, автоматизация воронки", c3res: "+40% конверсия лидов, −2 часа ежедневной рутины",
    c4industry: "Дистрибуция", c4task: "Торговые агенты принимали заказы вручную, данные поступали в офис с задержкой до 2 суток", c4sol: "Внедрение системы Моби С", c4res: "Заказы поступают в режиме реального времени, дебиторская задолженность сократилась на 30%, маршруты оптимизированы",
    c5industry: "Общепит", c5task: "Отсутствие маркировки и ветеринарного контроля при приёмке товаров", c5sol: "Подключение к системе Меркурий + автоматизация входящего контроля", c5res: "Полное соответствие требованиям Россельхознадзора, исключены штрафы",
    c6industry: "Фармацевтика", c6task: "Ручная работа с маркировкой лекарств по системе ГИС МТ", c6sol: "Интеграция ГИС МТ с учётной системой, автоматизация сканирования DataMatrix", c6res: "Скорость приёмки выросла в 3 раза, исключены ошибки при списании",
    c7industry: "Логистика", c7task: "Нет прозрачности по статусам грузов и маршрутам доставки", c7sol: "Внедрение транспортной TMS-системы с мобильным приложением для водителей", c7res: "100% онлайн-контроль доставок, затраты на топливо снижены на 18%",
    aboutTitle: "О компании", aboutDesc: "«Инновации ДВ» — системный интегратор и IT-партнёр для бизнеса на Дальнем Востоке. С 2014 года помогаем компаниям выстраивать эффективные цифровые процессы.",
    missionTitle: "Наша миссия", missionText: "Делать передовые IT-технологии доступными для любого бизнеса — от небольшой торговой точки до крупного производственного предприятия. Мы не просто поставляем решения: мы разбираемся в задачах клиента и предлагаем то, что реально работает.",
    m1: "Индивидуальный подход к каждому проекту", m2: "Прозрачные условия сотрудничества", m3: "Техническая поддержка после внедрения", m4: "Работаем по всему Дальневосточному региону",
    teamTitle: "Команда",
    role1: "Генеральный директор", role2: "Руководитель проектов", role3: "Технический директор",
    exp3: "Архитектура корпоративных систем",
    reqTitle: "Реквизиты организации",
    reqName: "Полное наименование", reqOgrn: "ОГРН", reqInn: "ИНН", reqKpp: "КПП", reqOkpo: "ОКПО", reqDate: "Дата регистрации", reqActivity: "Вид деятельности", reqAddress: "Юридический адрес",
    partnersTitle: "Наши партнёры", partnersDesc: "Работаем с ведущими IT-компаниями Дальнего Востока.",
    clientsTitle: "Нашему опыту доверяют", clientsDesc: "Компании, которые уже работают с нами.",
    contactsTitle: "Свяжитесь с нами", contactsDesc: "Оставьте заявку — ответим в течение рабочего часа.",
    formName: "Ваше имя", formPhone: "Телефон", formMsg: "Сообщение", formMsgPh: "Опишите вашу задачу...", formBtn: "Отправить заявку", formPolicy: "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности",
    formSuccessTitle: "Заявка отправлена!", formSuccessDesc: "Мы свяжемся с вами в течение рабочего часа.", formAgain: "Отправить ещё",
    cPhone: "Телефон", cEmail: "Email", cAddress: "Адрес", cHours: "Режим работы",
    footer: "© 2024 ООО «Инновации ДВ». Все права защищены.",
  },
  en: {
    navHome: "Home", navServices: "Services", navAbout: "About", navContacts: "Contacts",
    cta: "Get a Consultation",
    heroBadge: "IT Company of the Far East",
    heroTitle1: "We automate business,",
    heroTitle2: "we free up your time",
    heroDesc: "Comprehensive IT solutions for manufacturing, trading and service companies. We implement CRM/ERP, supply equipment, build analytics — turnkey.",
    heroBtn2: "Our Services",
    adv1: "years in IT market", adv2: "completed projects", adv3: "regular clients", adv4: "technical support",
    servicesTitle: "Our Services", servicesDesc: "A comprehensive approach to business digitalization — from strategy to technical support.",
    s1title: "Comprehensive Solutions", s1desc: "Digitalization strategy, business process audit and selection of IT systems for your company.", s1i1: "Digitalization Strategy", s1i2: "Business Process Audit", s1i3: "IT Systems Integration",
    s2title: "Business Automation", s2desc: "CRM and ERP system implementation, document workflow and warehouse management automation.", s2i1: "CRM: Bitrix24, amoCRM", s2i2: "ERP Systems", s2i3: "Warehouse Automation (WMS)",
    s3title: "Equipment & Software", s3desc: "Supply of cash register and retail equipment, licensed software.", s3i1: "Online Cash Registers", s3i2: "Scanners, TSD, Label Printers", s3i3: "Licensed Software",
    s4title: "Analytics Systems", s4desc: "BI system setup, end-to-end analytics, dashboards and reports for management.", s4i1: "BI Systems", s4i2: "End-to-End Analytics", s4i3: "Management Dashboards",
    s5title: "Government Systems Integration", s5desc: "Connection and configuration of mandatory state systems for retail, manufacturing and logistics companies.", s5i1: "GIS MT (Honest Sign)", s5i2: "Mercury (veterinary control)", s5i3: "EDO (electronic document management)", s5i4: "Logistics & transport systems",
    s6title: "Sales Agent Automation", s6desc: "Mobile system implementation to automate field sales representatives: order collection, routing, accounts receivable control.", s6i1: "Agent+ (mobile trade)", s6i2: "Mobi C (orders & routes)", s6i3: "Service Points (outlet control)",
    casesTitle: "Completed Projects", casesDesc: "Measurable results for our clients.",
    caseTask: "Challenge", caseSolution: "Solution", caseResult: "Result",
    c1industry: "Retail", c1task: "Fragmented sales tracking across 12 stores", c1sol: "Unified ERP implementation + cash register equipment", c1res: "−35% inventory time, +18% accounting accuracy",
    c2industry: "Manufacturing", c2task: "No end-to-end production analytics", c2sol: "BI system + 1C integration", c2res: "22% loss reduction, real-time KPI transparency",
    c3industry: "Wholesale", c3task: "Chaotic sales department workflow", c3sol: "Bitrix24 implementation, funnel automation", c3res: "+40% lead conversion, −2 hours daily routine",
    c4industry: "Distribution", c4task: "Sales agents took orders manually, data reached the office with up to 2-day delays", c4sol: "Agent+ system implementation integrated with Mobi C and Service Points", c4res: "Orders processed in real time, accounts receivable reduced by 30%, routes optimized",
    c5industry: "Food Service", c5task: "No labeling or veterinary control during goods receipt", c5sol: "Mercury system integration + automated incoming quality control", c5res: "Full compliance with Rosselkhoznadzor requirements, fines eliminated",
    c6industry: "Pharmaceuticals", c6task: "Manual drug labeling via GIS MT system", c6sol: "GIS MT integration with accounting system, DataMatrix scanning automation", c6res: "Receiving speed tripled, write-off errors eliminated",
    c7industry: "Logistics", c7task: "No visibility into cargo statuses and delivery routes", c7sol: "TMS transport system implementation with mobile app for drivers", c7res: "100% online delivery control, fuel costs reduced by 18%",
    aboutTitle: "About Us", aboutDesc: "Innovacii DV is a systems integrator and IT partner for businesses in the Russian Far East. Since 2014, we have been helping companies build efficient digital processes.",
    missionTitle: "Our Mission", missionText: "Making advanced IT technologies accessible to any business — from a small retail shop to a large manufacturing enterprise. We don't just deliver solutions: we understand the client's needs and offer what truly works.",
    m1: "Individual approach to each project", m2: "Transparent terms of cooperation", m3: "Technical support after implementation", m4: "Operating across the entire Far Eastern region",
    teamTitle: "Our Team",
    role1: "CEO", role2: "Project Manager", role3: "CTO",
    exp3: "Corporate systems architecture",
    reqTitle: "Company Details",
    reqName: "Full Name", reqOgrn: "OGRN", reqInn: "INN (Tax ID)", reqKpp: "KPP", reqOkpo: "OKPO", reqDate: "Registration Date", reqActivity: "Business Activity", reqAddress: "Legal Address",
    partnersTitle: "Our Partners", partnersDesc: "We work with leading IT companies of the Russian Far East.",
    clientsTitle: "Trusted by Our Clients", clientsDesc: "Companies that already work with us.",
    contactsTitle: "Contact Us", contactsDesc: "Leave a request — we will respond within one business hour.",
    formName: "Your Name", formPhone: "Phone", formMsg: "Message", formMsgPh: "Describe your task...", formBtn: "Send Request", formPolicy: "By clicking the button, you agree to the privacy policy",
    formSuccessTitle: "Request Sent!", formSuccessDesc: "We will contact you within one business hour.", formAgain: "Send Another",
    cPhone: "Phone", cEmail: "Email", cAddress: "Address", cHours: "Working Hours",
    footer: "© 2024 Innovacii DV LLC. All rights reserved.",
  },
  zh: {
    navHome: "首页", navServices: "服务", navAbout: "关于我们", navContacts: "联系我们",
    cta: "获取咨询",
    heroBadge: "远东IT公司",
    heroTitle1: "业务自动化，",
    heroTitle2: "释放您的时间",
    heroDesc: "为制造业、贸易和服务企业提供综合IT解决方案。我们实施CRM/ERP，供应设备，构建分析系统——交钥匙工程。",
    heroBtn2: "我们的服务",
    adv1: "年IT市场经验", adv2: "已完成项目", adv3: "固定客户", adv4: "技术支持",
    servicesTitle: "服务方向", servicesDesc: "全面的业务数字化方法——从战略到技术支持。",
    s1title: "综合解决方案", s1desc: "数字化战略、业务流程审计和IT系统选型，针对贵公司的具体任务。", s1i1: "数字化战略", s1i2: "业务流程审计", s1i3: "IT系统集成",
    s2title: "业务自动化", s2desc: "CRM和ERP系统实施，文档流程和仓库管理自动化。", s2i1: "CRM: Bitrix24, amoCRM", s2i2: "ERP系统", s2i3: "仓库自动化 (WMS)",
    s3title: "设备与软件", s3desc: "收银设备、零售设备及正版软件的供应。", s3i1: "在线收银机", s3i2: "扫描仪、数据采集器、标签打印机", s3i3: "正版软件",
    s4title: "分析系统", s4desc: "BI系统配置、端到端分析、管理层仪表板和报告。", s4i1: "BI系统", s4i2: "端到端分析", s4i3: "管理层仪表板",
    s5title: "政府系统集成", s5desc: "为零售、生产和物流企业连接和配置强制性国家系统。", s5i1: "GIS МТ（诚信标志）", s5i2: "Меркурий（兽医控制）", s5i3: "ЭДО（电子文档管理）", s5i4: "物流与运输系统",
    s6title: "销售代理自动化", s6desc: "实施移动系统，自动化销售代表工作：订单收集、路线规划、应收账款控制。", s6i1: "Агент+（移动贸易）", s6i2: "Моби С（订单与路线）", s6i3: "Сервис Точки（门店管控）",
    casesTitle: "已完成项目", casesDesc: "为客户带来可量化的成果。",
    caseTask: "任务", caseSolution: "解决方案", caseResult: "成果",
    c1industry: "零售", c1task: "12家门店的销售数据分散管理", c1sol: "统一ERP实施 + 收银设备", c1res: "库存时间减少35%，核算准确率提升18%",
    c2industry: "制造业", c2task: "缺乏贯穿生产全流程的分析", c2sol: "BI系统 + 1C集成", c2res: "损耗减少22%，KPI实时透明化",
    c3industry: "批发贸易", c3task: "销售部门工作混乱", c3sol: "Bitrix24实施，销售漏斗自动化", c3res: "线索转化率提升40%，每日节省2小时",
    c4industry: "分销", c4task: "销售代理手动接单，数据传到办公室最长延迟2天", c4sol: "实施Агент+系统，集成Моби С和Сервис Точки", c4res: "订单实时处理，应收账款减少30%，路线优化",
    c5industry: "餐饮", c5task: "收货时缺乏商品标识和兽医控制", c5sol: "接入Меркурий系统 + 自动化入库质检", c5res: "完全符合Россельхознадзор要求，罚款风险消除",
    c6industry: "制药", c6task: "通过GIS МТ系统手动处理药品标签", c6sol: "GIS МТ与会计系统集成，DataMatrix扫描自动化", c6res: "收货速度提升3倍，报废错误消除",
    c7industry: "物流", c7task: "货物状态和配送路线缺乏透明度", c7sol: "实施TMS运输系统及司机移动应用", c7res: "100%在线配送管控，燃油成本降低18%",
    aboutTitle: "关于公司", aboutDesc: "«创新远东»是俄罗斯远东地区企业的系统集成商和IT合作伙伴。自2014年起，我们帮助企业构建高效的数字化流程。",
    missionTitle: "我们的使命", missionText: "让先进的IT技术惠及各类企业——从小型零售店到大型制造企业。我们不只是提供解决方案：我们深入了解客户需求，提供真正有效的方案。",
    m1: "针对每个项目的个性化方法", m2: "透明的合作条款", m3: "实施后的技术支持", m4: "服务覆盖整个远东地区",
    teamTitle: "团队",
    role1: "总经理", role2: "项目经理", role3: "技术总监",
    exp3: "企业系统架构",
    reqTitle: "公司信息",
    reqName: "全称", reqOgrn: "ОГРН（统一国家法人注册号）", reqInn: "ИНН（纳税人识别号）", reqKpp: "КПП", reqOkpo: "ОКПО", reqDate: "注册日期", reqActivity: "业务活动", reqAddress: "法定地址",
    partnersTitle: "我们的合作伙伴", partnersDesc: "与远东领先IT公司合作。",
    clientsTitle: "信任我们的客户", clientsDesc: "已与我们合作的公司。",
    contactsTitle: "联系我们", contactsDesc: "提交申请——我们将在一个工作小时内回复。",
    formName: "您的姓名", formPhone: "电话", formMsg: "留言", formMsgPh: "请描述您的需求...", formBtn: "提交申请", formPolicy: "点击按钮即表示您同意隐私政策",
    formSuccessTitle: "申请已发送！", formSuccessDesc: "我们将在一个工作小时内与您联系。", formAgain: "再次发送",
    cPhone: "电话", cEmail: "电子邮件", cAddress: "地址", cHours: "工作时间",
    footer: "© 2024 «创新远东»有限责任公司。保留所有权利。",
  },
};

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

export default function Index() {
  const [lang, setLang] = useState<Lang>("ru");
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [formSent, setFormSent] = useState(false);
  const [casesIdx, setCasesIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => { setCasesIdx(0); }, [lang]);

  const t = T[lang];

  const NAV_LINKS = [
    { label: t.navHome, href: "#home" },
    { label: t.navServices, href: "#services" },
    { label: t.navAbout, href: "#about" },
    { label: t.navContacts, href: "#contacts" },
  ];

  const heroAnim = useInView(0.1);
  const servicesAnim = useInView(0.1);
  const casesAnim = useInView(0.1);
  const advantagesAnim = useInView(0.1);
  const aboutAnim = useInView(0.1);
  const partnersAnim = useInView(0.1);
  const clientsAnim = useInView(0.1);
  const contactsAnim = useInView(0.1);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "cases", "about", "contacts"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const LANGS: { code: Lang; label: string }[] = [
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
    { code: "zh", label: "中文" },
  ];

  const SERVICES = [
    { icon: "LayoutDashboard", title: t.s1title, desc: t.s1desc, items: [t.s1i1, t.s1i2, t.s1i3] },
    { icon: "Zap", title: t.s2title, desc: t.s2desc, items: [t.s2i1, t.s2i2, t.s2i3] },
    { icon: "Monitor", title: t.s3title, desc: t.s3desc, items: [t.s3i1, t.s3i2, t.s3i3] },
    { icon: "BarChart3", title: t.s4title, desc: t.s4desc, items: [t.s4i1, t.s4i2, t.s4i3] },
    { icon: "Network", title: t.s5title, desc: t.s5desc, items: [t.s5i1, t.s5i2, t.s5i3, t.s5i4] },
    { icon: "UserCheck", title: t.s6title, desc: t.s6desc, items: [t.s6i1, t.s6i2, t.s6i3] },
  ];

  const ADVANTAGES = [
    { icon: "Award", num: "10+", label: t.adv1 },
    { icon: "Briefcase", num: "200+", label: t.adv2 },
    { icon: "Users", num: "150+", label: t.adv3 },
    { icon: "Headphones", num: "24/7", label: t.adv4 },
  ];

  const TEAM = [
    { name: "Коваль Антон Геннадьевич", role: t.role1, exp: "20 " + (lang === "ru" ? "лет в IT-отрасли" : lang === "en" ? "years in IT" : "年IT行业经验") },
    { name: "Абаимов Вячеслав Вячеславович", role: t.role2, exp: lang === "ru" ? "Эксперт по внедрению ГИС МТ, ЭДО, Меркурий" : lang === "en" ? "Expert in GIS MT, EDO, Mercury implementation" : "GIS MT、EDO、Mercury实施专家" },
    { name: "Дмитрий Ким", role: t.role3, exp: t.exp3 },
  ];

  const CASES = [
    { industry: t.c1industry, task: t.c1task, solution: t.c1sol, result: t.c1res },
    { industry: t.c2industry, task: t.c2task, solution: t.c2sol, result: t.c2res },
    { industry: t.c3industry, task: t.c3task, solution: t.c3sol, result: t.c3res },
    { industry: t.c4industry, task: t.c4task, solution: t.c4sol, result: t.c4res },
    { industry: t.c5industry, task: t.c5task, solution: t.c5sol, result: t.c5res },
    { industry: t.c6industry, task: t.c6task, solution: t.c6sol, result: t.c6res },
    { industry: t.c7industry, task: t.c7task, solution: t.c7sol, result: t.c7res },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("#home")} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded flex items-center justify-center" style={{ background: "var(--brand-steel)" }}>
              <span className="text-white font-bold text-sm" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>ИД</span>
            </div>
            <span className="font-semibold text-gray-900 text-[15px] tracking-tight">Инновации ДВ</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`nav-link text-sm font-medium transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "text-blue-600 active"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {/* Lang switcher */}
            <div className="flex items-center border border-gray-200 rounded overflow-hidden">
              {LANGS.map((l, i) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2.5 py-1 text-xs font-semibold transition-colors ${
                    lang === l.code
                      ? "bg-gray-900 text-white"
                      : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                  } ${i > 0 ? "border-l border-gray-200" : ""}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollTo("#contacts")}
              className="text-sm font-semibold px-5 py-2 rounded text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: "var(--brand-steel)" }}
            >
              {t.cta}
            </button>
          </div>

          <button className="md:hidden p-2 text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="flex items-center gap-1">
              {LANGS.map(l => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded border transition-colors ${
                    lang === l.code
                      ? "bg-gray-900 text-white border-gray-900"
                      : "text-gray-500 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollTo("#contacts")}
              className="mt-1 text-sm font-semibold px-5 py-2.5 rounded text-white text-center"
              style={{ background: "var(--brand-steel)" }}
            >
              {t.cta}
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="pt-16 min-h-screen flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #111827 0%, #1e3a5f 55%, #1e3a8a 100%)" }} />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/dc952390-4837-45eb-b79b-467f972bc182/files/7400b035-1210-4dca-b356-0c26aec79297.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative flex-1 flex items-center">
          <div className="max-w-6xl mx-auto px-6 py-24 w-full">
            <div ref={heroAnim.ref} className="max-w-2xl">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8 border opacity-0-init ${heroAnim.inView ? "animate-fade-in-up" : ""}`}
                style={{ background: "rgba(37,99,235,0.15)", borderColor: "rgba(59,130,246,0.3)", color: "#93c5fd" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                {t.heroBadge}
              </div>
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 opacity-0-init ${heroAnim.inView ? "animate-fade-in-up delay-100" : ""}`}>
                {t.heroTitle1}<br />
                <span style={{ color: "#60a5fa" }}>{t.heroTitle2}</span>
              </h1>
              <p className={`text-lg text-blue-100 leading-relaxed mb-10 max-w-xl opacity-0-init ${heroAnim.inView ? "animate-fade-in-up delay-200" : ""}`}>
                {t.heroDesc}
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 opacity-0-init ${heroAnim.inView ? "animate-fade-in-up delay-300" : ""}`}>
                <button onClick={() => scrollTo("#contacts")} className="px-8 py-3.5 font-semibold text-white rounded transition-all hover:opacity-90 active:scale-95 text-base" style={{ background: "var(--brand-blue)" }}>
                  {t.cta}
                </button>
                <button onClick={() => scrollTo("#services")} className="px-8 py-3.5 font-semibold rounded border text-white transition-all hover:bg-white hover:text-gray-900 text-base" style={{ borderColor: "rgba(255,255,255,0.3)" }}>
                  {t.heroBtn2}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative pb-8 flex justify-center">
          <button onClick={() => scrollTo("#services")} className="text-blue-300 opacity-60 hover:opacity-100 transition-opacity">
            <Icon name="ChevronDown" size={28} />
          </button>
        </div>
      </section>

      {/* ADVANTAGES */}
      <div ref={advantagesAnim.ref} style={{ background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {ADVANTAGES.map((adv, i) => (
            <div key={adv.label} className={`flex flex-col items-center text-center gap-2 opacity-0-init ${advantagesAnim.inView ? "animate-fade-in-up" : ""}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1" style={{ background: "rgba(37,99,235,0.08)" }}>
                <Icon name={adv.icon} size={20} className="text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{adv.num}</span>
              <span className="text-sm text-gray-500 font-medium leading-tight">{adv.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={servicesAnim.ref}>
            <div className={`mb-14 opacity-0-init ${servicesAnim.inView ? "animate-fade-in-up" : ""}`}>
              <div className="section-line" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.servicesTitle}</h2>
              <p className="text-gray-500 text-lg max-w-xl">{t.servicesDesc}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {SERVICES.map((svc, i) => (
                <div key={svc.title} className={`service-card border border-gray-200 rounded-lg p-8 cursor-default opacity-0-init ${servicesAnim.inView ? "animate-fade-in-up" : ""}`} style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ background: "rgba(30,58,95,0.08)" }}>
                    <Icon name={svc.icon} size={24} className="text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{svc.desc}</p>
                  <ul className="space-y-2">
                    {svc.items.map(item => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--brand-blue)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-24" style={{ background: "#f8f9fa" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div ref={casesAnim.ref}>
            <div className={`mb-10 opacity-0-init ${casesAnim.inView ? "animate-fade-in-up" : ""}`}>
              <div className="section-line" />
              <div className="flex items-end justify-between gap-4 flex-wrap">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.casesTitle}</h2>
                  <p className="text-gray-500 text-lg max-w-xl">{t.casesDesc}</p>
                </div>
                <div className="flex items-center gap-2 pb-1">
                  <button
                    onClick={() => setCasesIdx(i => Math.max(0, i - 1))}
                    disabled={casesIdx === 0}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition-all hover:border-blue-500 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <Icon name="ChevronLeft" size={18} />
                  </button>
                  <span className="text-sm text-gray-400 font-medium min-w-[48px] text-center">
                    {casesIdx + 1} / {isMobile ? CASES.length : CASES.length - 2}
                  </span>
                  <button
                    onClick={() => setCasesIdx(i => Math.min(isMobile ? CASES.length - 1 : CASES.length - 3, i + 1))}
                    disabled={casesIdx === (isMobile ? CASES.length - 1 : CASES.length - 3)}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition-all hover:border-blue-500 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <Icon name="ChevronRight" size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Slider */}
            <div className="overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(calc(-${casesIdx} * (${isMobile ? "100% + 24px" : "33.333% + 8px"})))` }}
              >
                {CASES.map((c, i) => (
                  <div
                    key={c.industry + i}
                    className="bg-white border border-gray-200 rounded-lg p-7 flex-shrink-0"
                    style={{ width: isMobile ? "100%" : "calc(33.333% - 16px)" }}
                  >
                    <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5" style={{ background: "rgba(37,99,235,0.08)", color: "var(--brand-blue)" }}>
                      {c.industry}
                    </span>
                    <div className="space-y-4 text-sm">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">{t.caseTask}</span>
                        <p className="mt-1 text-gray-700 leading-relaxed">{c.task}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">{t.caseSolution}</span>
                        <p className="mt-1 text-gray-700 leading-relaxed">{c.solution}</p>
                      </div>
                      <div className="pt-2 border-t border-gray-100">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">{t.caseResult}</span>
                        <p className="mt-1 font-semibold text-blue-700 leading-relaxed">{c.result}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {CASES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCasesIdx(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: casesIdx === i ? "24px" : "8px",
                    height: "8px",
                    background: casesIdx === i ? "var(--brand-blue)" : "#d1d5db",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={aboutAnim.ref}>
            <div className={`mb-14 opacity-0-init ${aboutAnim.inView ? "animate-fade-in-up" : ""}`}>
              <div className="section-line" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.aboutTitle}</h2>
              <p className="text-gray-500 text-lg max-w-2xl">{t.aboutDesc}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
              <div className={`opacity-0-init ${aboutAnim.inView ? "animate-fade-in-up delay-100" : ""}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t.missionTitle}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{t.missionText}</p>
                <div className="space-y-3">
                  {[t.m1, t.m2, t.m3, t.m4].map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <Icon name="CheckCircle" size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`opacity-0-init ${aboutAnim.inView ? "animate-fade-in-up delay-200" : ""}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{t.teamTitle}</h3>
                <div className="space-y-4">
                  {TEAM.map(member => (
                    <div key={member.name} className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm text-white" style={{ background: "var(--brand-steel)" }}>
                        {member.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{member.name}</div>
                        <div className="text-xs font-medium" style={{ color: "var(--brand-blue)" }}>{member.role}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{member.exp}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Реквизиты */}
            <div className={`border border-gray-200 rounded-lg p-8 opacity-0-init ${aboutAnim.inView ? "animate-fade-in-up delay-300" : ""}`}>
              <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                <Icon name="FileText" size={18} className="text-gray-400" />
                {t.reqTitle}
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-sm">
                {[
                  { label: t.reqName, value: "ООО «Инновации ДВ»" },
                  { label: t.reqOgrn, value: "1162536055880" },
                  { label: t.reqInn, value: "2543091244" },
                  { label: t.reqKpp, value: "254301001" },
                  { label: t.reqOkpo, value: "00875023" },
                  { label: t.reqDate, value: lang === "ru" ? "3 марта 2016 года" : lang === "en" ? "March 3, 2016" : "2016年3月3日" },
                  { label: t.reqActivity, value: lang === "ru" ? "Разработка компьютерного программного обеспечения (62.01)" : lang === "en" ? "Computer software development (62.01)" : "计算机软件开发 (62.01)" },
                  { label: t.reqAddress, value: "690002, " + (lang === "ru" ? "Приморский край, г. Владивосток, пр-кт Красного Знамени, д. 59, офис 505" : lang === "en" ? "Primorsky Krai, Vladivostok, Krasnogo Znameni Ave., 59, office 505" : "滨海边疆区，符拉迪沃斯托克，红旗大街59号，505室") },
                ].map(req => (
                  <div key={req.label}>
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{req.label}</div>
                    <div className="text-gray-700 font-medium">{req.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={partnersAnim.ref}>
            <div className={`mb-12 opacity-0-init ${partnersAnim.inView ? "animate-fade-in-up" : ""}`}>
              <div className="section-line" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.partnersTitle}</h2>
              <p className="text-gray-500 text-lg max-w-xl">{t.partnersDesc}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { name: "Созвездие", desc: "Консалтинг и автоматизация на базе 1С. Владивосток", logo: "https://www.szv.ru/images/logo.png" },
                { name: "Клеверенс", desc: "ПО для складской автоматизации и маркировки на ТСД", logo: "https://cdn.poehali.dev/projects/dc952390-4837-45eb-b79b-467f972bc182/bucket/f6eaf21b-89f0-4fb0-88b4-afe3a1fe6c84.jpg" },
                { name: "Моби-С", desc: "Мобильная торговля и автоматизация торговых представителей", logo: "https://mobi-c.ru/images/logo.png" },
                { name: "ScanSoft", desc: "Мобильные решения для склада, магазина и маркировки", logo: "https://cdn.poehali.dev/projects/dc952390-4837-45eb-b79b-467f972bc182/bucket/477b5182-febb-4de9-aaec-c5f2d96c12bb.jpg" },

                { name: "Битрикс24", desc: "CRM-система, корпоративный портал и управление задачами", logo: "https://cdn.poehali.dev/projects/dc952390-4837-45eb-b79b-467f972bc182/bucket/eee62951-8251-46d6-b59d-a99596247c54.png" },
                { name: "1С", desc: "Платформа для автоматизации учёта, ERP и отраслевых решений", logo: "https://cdn.poehali.dev/projects/dc952390-4837-45eb-b79b-467f972bc182/bucket/0655e969-9685-40c9-b633-ffadc28cc658.jpg" },
                { name: "Техно-ДВ", desc: "Кассовое и торговое оборудование для автоматизации бизнеса", logo: "https://tehno-dv.ru/images/logos/8/LogoTehnoDV-55_1ekt-z6.png" },
              ].map((p, i) => (
                <div
                  key={p.name}
                  className={`flex flex-col items-center text-center border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition-all opacity-0-init ${partnersAnim.inView ? "animate-fade-in-up" : ""}`}
                  style={{ animationDelay: `${0.05 + i * 0.08}s` }}
                >
                  <div className="w-full h-16 flex items-center justify-center mb-4 flex-shrink-0">
                    <img src={p.logo} alt={p.name} className="max-h-16 max-w-full object-contain" />
                  </div>
                  <div className="border-t border-gray-100 pt-3 w-full">
                    <div className="font-bold text-gray-800 text-sm mb-1">{p.name}</div>
                    <div className="text-xs text-gray-400 leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="py-20" style={{ background: "#f8f9fa" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div ref={clientsAnim.ref}>
            <div className={`mb-12 opacity-0-init ${clientsAnim.inView ? "animate-fade-in-up" : ""}`}>
              <div className="section-line" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.clientsTitle}</h2>
              <p className="text-gray-500 text-lg max-w-xl">{t.clientsDesc}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "ООО ГК Движение", sphere: "Транспорт и логистика", logo: "https://cdn.poehali.dev/projects/dc952390-4837-45eb-b79b-467f972bc182/bucket/9e0c465b-c1ba-4420-a4a0-62d82850750c.jpg", bg: "" },
                { name: "ООО ДК-Групп", sphere: "Оптовая торговля", logo: "https://dk-group.shop/templates/dkgroupoil/assets/img/logo.svg", bg: "#1a1a2e" },
                { name: "ООО КосмоСити", sphere: "Оптовая торговля косметикой", logo: "https://cdn.poehali.dev/projects/dc952390-4837-45eb-b79b-467f972bc182/bucket/82849593-cc92-4959-9845-56937defc854.jpg", bg: "" },
                { name: "Черчилль Тобакко", sphere: "Оптовая торговля табачной продукцией", logo: "https://cdn.poehali.dev/projects/dc952390-4837-45eb-b79b-467f972bc182/bucket/cca712a1-bbbd-4bee-bd74-1266bf3d060d.jpeg", bg: "" },
                { name: "Хорольский молочный завод", sphere: "Производство молочной продукции", logo: "https://cdn.poehali.dev/projects/dc952390-4837-45eb-b79b-467f972bc182/bucket/a16e3313-563b-44f8-b503-d3dc90f87389.jpg", bg: "" },
                { name: "Арсеньевский молочный комбинат", sphere: "Производство молочной продукции", logo: "https://static.tildacdn.com/tild6465-3762-4662-b834-386133323038/photo.png", bg: "" },
              ].map((c, i) => (
                <div
                  key={c.name}
                  className={`bg-white border border-gray-200 rounded-xl p-6 flex items-center gap-5 hover:shadow-md hover:border-blue-200 transition-all opacity-0-init ${clientsAnim.inView ? "animate-fade-in-up" : ""}`}
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-lg border border-gray-100 flex-shrink-0 overflow-hidden flex items-center justify-center" style={{ background: c.bg || "#fff" }}>
                    <img src={c.logo} alt={c.name} className="w-full h-full object-contain p-1" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm leading-snug">{c.name}</div>
                    <div className="text-xs text-gray-400 mt-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full inline-block flex-shrink-0" style={{ background: "var(--brand-blue)" }} />
                      {c.sphere}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24" style={{ background: "var(--brand-dark)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div ref={contactsAnim.ref}>
            <div className={`mb-14 opacity-0-init ${contactsAnim.inView ? "animate-fade-in-up" : ""}`}>
              <div className="section-line" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.contactsTitle}</h2>
              <p className="text-blue-200 text-lg max-w-xl">{t.contactsDesc}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className={`opacity-0-init ${contactsAnim.inView ? "animate-fade-in-up delay-100" : ""}`}>
                {formSent ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "var(--brand-blue)" }}>
                      <Icon name="Check" size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{t.formSuccessTitle}</h3>
                    <p className="text-blue-200">{t.formSuccessDesc}</p>
                    <button onClick={() => setFormSent(false)} className="mt-2 text-sm text-blue-400 hover:text-blue-300 underline">{t.formAgain}</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-blue-100 mb-1.5">{t.formName}</label>
                      <input type="text" required placeholder={lang === "ru" ? "Иван Иванов" : lang === "en" ? "John Smith" : "张三"} value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded text-white text-sm border outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition" style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)" }} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-100 mb-1.5">{t.formPhone}</label>
                      <input type="tel" required placeholder="+7 (000) 000-00-00" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded text-white text-sm border outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition" style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)" }} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-100 mb-1.5">{t.formMsg}</label>
                      <textarea rows={4} placeholder={t.formMsgPh} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded text-white text-sm border outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 resize-none transition" style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)" }} />
                    </div>
                    <button type="submit" className="w-full py-3.5 font-semibold text-white rounded transition-all hover:opacity-90 active:scale-95" style={{ background: "var(--brand-blue)" }}>
                      {t.formBtn}
                    </button>
                    <p className="text-xs text-gray-500 text-center">{t.formPolicy}</p>
                  </form>
                )}
              </div>
              <div className={`space-y-6 opacity-0-init ${contactsAnim.inView ? "animate-fade-in-up delay-200" : ""}`}>
                {[
                  { icon: "Phone", label: t.cPhone, value: "+7 (924) 263-09-21, +7 (924) 327-07-08" },
                  { icon: "Mail", label: t.cEmail, value: "office@intdv.ru" },
                  { icon: "MapPin", label: t.cAddress, value: lang === "ru" ? "г. Владивосток, пр-кт Красного Знамени, д. 59, офис 505" : lang === "en" ? "Vladivostok, Krasnogo Znameni Ave., 59, office 505" : "符拉迪沃斯托克，红旗大街59号，505室" },
                  { icon: "Clock", label: t.cHours, value: lang === "ru" ? "Пн–Пт, 09:00–18:00 (VLAT)" : lang === "en" ? "Mon–Fri, 09:00–18:00 (VLAT)" : "周一至周五，09:00–18:00 (VLAT)" },
                ].map(contact => (
                  <div key={contact.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(37,99,235,0.2)" }}>
                      <Icon name={contact.icon} size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-0.5">{contact.label}</div>
                      <div className="text-white font-medium">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-8" style={{ background: "#0c1219", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: "var(--brand-steel)" }}>
              <span className="text-white font-bold text-[10px]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>ИД</span>
            </div>
            <span className="text-gray-400 text-sm">Инновации ДВ</span>
          </div>
          <p className="text-gray-600 text-xs text-center">{t.footer}</p>
          <div className="flex gap-6">
            {NAV_LINKS.map(link => (
              <button key={link.href} onClick={() => scrollTo(link.href)} className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}