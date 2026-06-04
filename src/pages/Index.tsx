import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "О компании", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  {
    icon: "LayoutDashboard",
    title: "Комплексные решения",
    desc: "Стратегия цифровизации, аудит бизнес-процессов и подбор IT-систем под задачи вашей компании.",
    items: ["Стратегия цифровизации", "Аудит бизнес-процессов", "Интеграция IT-систем"],
  },
  {
    icon: "Zap",
    title: "Автоматизация бизнеса",
    desc: "Внедрение CRM и ERP-систем, автоматизация документооборота и складского учёта.",
    items: ["CRM: Битрикс24, amoCRM", "ERP-системы", "Автоматизация склада (WMS)"],
  },
  {
    icon: "Monitor",
    title: "Оборудование и ПО",
    desc: "Поставки кассового и торгового оборудования, лицензионного программного обеспечения.",
    items: ["Онлайн-кассы и ФН", "Сканеры, ТСД, принтеры", "Лицензионное ПО"],
  },
  {
    icon: "BarChart3",
    title: "Системы аналитики",
    desc: "Настройка BI-систем, сквозная аналитика, дашборды и отчёты для принятия решений.",
    items: ["BI-системы", "Сквозная аналитика", "Дашборды для руководства"],
  },
];

const ADVANTAGES = [
  { icon: "Award", num: "10+", label: "лет на рынке IT" },
  { icon: "Briefcase", num: "200+", label: "реализованных проектов" },
  { icon: "Users", num: "150+", label: "постоянных клиентов" },
  { icon: "Headphones", num: "24/7", label: "техническая поддержка" },
];

const TEAM = [
  {
    name: "Коваль Антон Геннадьевич",
    role: "Генеральный директор",
    exp: "20 лет в IT-отрасли",
  },
  {
    name: "Мария Соколова",
    role: "Руководитель проектов",
    exp: "Эксперт по внедрению CRM/ERP",
  },
  {
    name: "Дмитрий Ким",
    role: "Технический директор",
    exp: "Архитектура корпоративных систем",
  },
];

const CASES = [
  {
    industry: "Ритейл",
    task: "Разрозненный учёт продаж в 12 магазинах",
    solution: "Внедрение единой ERP + кассовое оборудование",
    result: "−35% времени на инвентаризацию, +18% точность учёта",
  },
  {
    industry: "Производство",
    task: "Отсутствие сквозной аналитики по производству",
    solution: "BI-система + интеграция с 1С",
    result: "Сокращение потерь на 22%, прозрачность KPI в реальном времени",
  },
  {
    industry: "Оптовая торговля",
    task: "Хаотичная работа отдела продаж",
    solution: "Внедрение Битрикс24, автоматизация воронки",
    result: "+40% конверсия лидов, −2 часа ежедневной рутины",
  },
];

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
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  const heroAnim = useInView(0.1);
  const servicesAnim = useInView(0.1);
  const casesAnim = useInView(0.1);
  const advantagesAnim = useInView(0.1);
  const aboutAnim = useInView(0.1);
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

          <button
            onClick={() => scrollTo("#contacts")}
            className="hidden md:block text-sm font-semibold px-5 py-2 rounded text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: "var(--brand-steel)" }}
          >
            Получить консультацию
          </button>

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
            <button
              onClick={() => scrollTo("#contacts")}
              className="mt-2 text-sm font-semibold px-5 py-2.5 rounded text-white text-center"
              style={{ background: "var(--brand-steel)" }}
            >
              Получить консультацию
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="pt-16 min-h-screen flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 hero-grid" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #111827 0%, #1e3a5f 55%, #1e3a8a 100%)" }}
        />
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
                style={{
                  background: "rgba(37,99,235,0.15)",
                  borderColor: "rgba(59,130,246,0.3)",
                  color: "#93c5fd",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                IT-компания Дальнего Востока
              </div>

              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 opacity-0-init ${heroAnim.inView ? "animate-fade-in-up delay-100" : ""}`}
              >
                Автоматизируем бизнес,<br />
                <span style={{ color: "#60a5fa" }}>освобождаем время</span>
              </h1>

              <p
                className={`text-lg text-blue-100 leading-relaxed mb-10 max-w-xl opacity-0-init ${heroAnim.inView ? "animate-fade-in-up delay-200" : ""}`}
              >
                Комплексные IT-решения для производственных, торговых и сервисных компаний.
                Внедряем CRM/ERP, поставляем оборудование, строим аналитику — под ключ.
              </p>

              <div className={`flex flex-col sm:flex-row gap-4 opacity-0-init ${heroAnim.inView ? "animate-fade-in-up delay-300" : ""}`}>
                <button
                  onClick={() => scrollTo("#contacts")}
                  className="px-8 py-3.5 font-semibold text-white rounded transition-all hover:opacity-90 active:scale-95 text-base"
                  style={{ background: "var(--brand-blue)" }}
                >
                  Получить консультацию
                </button>
                <button
                  onClick={() => scrollTo("#services")}
                  className="px-8 py-3.5 font-semibold rounded border text-white transition-all hover:bg-white hover:text-gray-900 text-base"
                  style={{ borderColor: "rgba(255,255,255,0.3)" }}
                >
                  Наши услуги
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

      {/* ADVANTAGES STRIP */}
      <div ref={advantagesAnim.ref} style={{ background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {ADVANTAGES.map((adv, i) => (
            <div
              key={adv.label}
              className={`flex flex-col items-center text-center gap-2 opacity-0-init ${advantagesAnim.inView ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Направления деятельности</h2>
              <p className="text-gray-500 text-lg max-w-xl">
                Комплексный подход к цифровизации бизнеса — от стратегии до технической поддержки.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {SERVICES.map((svc, i) => (
                <div
                  key={svc.title}
                  className={`service-card border border-gray-200 rounded-lg p-8 cursor-default opacity-0-init ${servicesAnim.inView ? "animate-fade-in-up" : ""}`}
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                    style={{ background: "rgba(30,58,95,0.08)" }}
                  >
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
            <div className={`mb-14 opacity-0-init ${casesAnim.inView ? "animate-fade-in-up" : ""}`}>
              <div className="section-line" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Реализованные проекты</h2>
              <p className="text-gray-500 text-lg max-w-xl">Измеримые результаты для наших клиентов.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {CASES.map((c, i) => (
                <div
                  key={c.industry}
                  className={`bg-white border border-gray-200 rounded-lg p-7 opacity-0-init ${casesAnim.inView ? "animate-fade-in-up" : ""}`}
                  style={{ animationDelay: `${0.1 + i * 0.12}s` }}
                >
                  <span
                    className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5"
                    style={{ background: "rgba(37,99,235,0.08)", color: "var(--brand-blue)" }}
                  >
                    {c.industry}
                  </span>
                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Задача</span>
                      <p className="mt-1 text-gray-700 leading-relaxed">{c.task}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Решение</span>
                      <p className="mt-1 text-gray-700 leading-relaxed">{c.solution}</p>
                    </div>
                    <div className="pt-2 border-t border-gray-100">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Результат</span>
                      <p className="mt-1 font-semibold text-blue-700 leading-relaxed">{c.result}</p>
                    </div>
                  </div>
                </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">О компании</h2>
              <p className="text-gray-500 text-lg max-w-2xl">
                «Инновации ДВ» — системный интегратор и IT-партнёр для бизнеса на Дальнем Востоке.
                С 2014 года помогаем компаниям выстраивать эффективные цифровые процессы.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
              <div className={`opacity-0-init ${aboutAnim.inView ? "animate-fade-in-up delay-100" : ""}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Наша миссия</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Делать передовые IT-технологии доступными для любого бизнеса — от небольшой торговой точки
                  до крупного производственного предприятия. Мы не просто поставляем решения: мы разбираемся
                  в задачах клиента и предлагаем то, что реально работает.
                </p>
                <div className="space-y-3">
                  {[
                    "Индивидуальный подход к каждому проекту",
                    "Прозрачные условия сотрудничества",
                    "Техническая поддержка после внедрения",
                    "Работаем по всему Дальневосточному региону"
                  ].map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <Icon name="CheckCircle" size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`opacity-0-init ${aboutAnim.inView ? "animate-fade-in-up delay-200" : ""}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Команда</h3>
                <div className="space-y-4">
                  {TEAM.map(member => (
                    <div key={member.name} className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm text-white"
                        style={{ background: "var(--brand-steel)" }}
                      >
                        {member.name.split(" ").map((n: string) => n[0]).join("")}
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
                Реквизиты организации
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-sm">
                {[
                  { label: "Полное наименование", value: "ООО «Инновации ДВ»" },
                  { label: "ИНН", value: "Уточняется" },
                  { label: "КПП", value: "Уточняется" },
                  { label: "ОГРН", value: "Уточняется" },
                  { label: "Юридический адрес", value: "Уточняется" },
                  { label: "Расчётный счёт", value: "Уточняется" },
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

      {/* CONTACTS */}
      <section id="contacts" className="py-24" style={{ background: "var(--brand-dark)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div ref={contactsAnim.ref}>
            <div className={`mb-14 opacity-0-init ${contactsAnim.inView ? "animate-fade-in-up" : ""}`}>
              <div className="section-line" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Свяжитесь с нами</h2>
              <p className="text-blue-200 text-lg max-w-xl">
                Оставьте заявку — ответим в течение рабочего часа.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className={`opacity-0-init ${contactsAnim.inView ? "animate-fade-in-up delay-100" : ""}`}>
                {formSent ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "var(--brand-blue)" }}>
                      <Icon name="Check" size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Заявка отправлена!</h3>
                    <p className="text-blue-200">Мы свяжемся с вами в течение рабочего часа.</p>
                    <button
                      onClick={() => setFormSent(false)}
                      className="mt-2 text-sm text-blue-400 hover:text-blue-300 underline"
                    >
                      Отправить ещё
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-blue-100 mb-1.5">Ваше имя</label>
                      <input
                        type="text"
                        required
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded text-white text-sm border outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition"
                        style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)" }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-100 mb-1.5">Телефон</label>
                      <input
                        type="tel"
                        required
                        placeholder="+7 (000) 000-00-00"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded text-white text-sm border outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition"
                        style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)" }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-100 mb-1.5">Сообщение</label>
                      <textarea
                        rows={4}
                        placeholder="Опишите вашу задачу..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded text-white text-sm border outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 resize-none transition"
                        style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)" }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 font-semibold text-white rounded transition-all hover:opacity-90 active:scale-95"
                      style={{ background: "var(--brand-blue)" }}
                    >
                      Отправить заявку
                    </button>
                    <p className="text-xs text-gray-500 text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                )}
              </div>

              <div className={`space-y-6 opacity-0-init ${contactsAnim.inView ? "animate-fade-in-up delay-200" : ""}`}>
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (000) 000-00-00" },
                  { icon: "Mail", label: "Email", value: "info@innovacii-dv.ru" },
                  { icon: "MapPin", label: "Адрес", value: "г. Владивосток, ул. Примерная, д. 1" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт, 09:00–18:00 (VLAT)" },
                ].map(contact => (
                  <div key={contact.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(37,99,235,0.2)" }}
                    >
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
          <p className="text-gray-600 text-xs text-center">© 2024 ООО «Инновации ДВ». Все права защищены.</p>
          <div className="flex gap-6">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}