import { useState } from "react";
import Icon from "@/components/ui/icon";

interface ChatWidgetProps {
  lang?: "ru" | "en" | "zh";
}

const T = {
  ru: {
    bubble: "Есть вопрос?",
    title: "Напишите нам",
    subtitle: "Ответим в течение рабочего часа",
    labelName: "Ваше имя",
    labelPhone: "Телефон",
    labelMsg: "Ваш вопрос",
    placeholderName: "Иван Иванов",
    placeholderMsg: "Чем можем помочь?",
    btn: "Отправить заявку",
    policy: "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности",
    successTitle: "Заявка принята!",
    successDesc: "Мы свяжемся с вами в ближайшее время.",
    again: "Отправить ещё",
  },
  en: {
    bubble: "Have a question?",
    title: "Contact Us",
    subtitle: "We'll respond within one business hour",
    labelName: "Your name",
    labelPhone: "Phone",
    labelMsg: "Your question",
    placeholderName: "John Smith",
    placeholderMsg: "How can we help?",
    btn: "Send Request",
    policy: "By clicking the button you agree to our privacy policy",
    successTitle: "Request Sent!",
    successDesc: "We will contact you shortly.",
    again: "Send another",
  },
  zh: {
    bubble: "有问题？",
    title: "联系我们",
    subtitle: "我们将在一个工作小时内回复",
    labelName: "您的姓名",
    labelPhone: "电话",
    labelMsg: "您的问题",
    placeholderName: "张三",
    placeholderMsg: "我们能帮您什么？",
    btn: "发送申请",
    policy: "点击按钮即表示您同意隐私政策",
    successTitle: "申请已发送！",
    successDesc: "我们将尽快与您联系。",
    again: "再次发送",
  },
};

export default function ChatWidget({ lang = "ru" }: ChatWidgetProps) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const t = T[lang] || T.ru;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const handleOpen = () => {
    setOpen(true);
    setShowBubble(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {showBubble && !open && (
        <div
          className="bg-white text-gray-700 text-sm font-medium px-4 py-2 rounded-full shadow-lg border border-gray-100 cursor-pointer animate-bounce-slow select-none"
          onClick={handleOpen}
          style={{ boxShadow: "0 4px 20px rgba(37,99,235,0.15)" }}
        >
          {t.bubble}
        </div>
      )}

      {open && (
        <div
          className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-80 overflow-hidden"
          style={{ boxShadow: "0 8px 40px rgba(37,99,235,0.18)" }}
        >
          <div className="px-5 py-4 flex items-center justify-between" style={{ background: "var(--brand-blue)" }}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <Icon name="MessageCircle" size={18} className="text-white" />
              </div>
              <div>
                <div className="font-semibold text-white text-sm">{t.title}</div>
                <div className="text-blue-100 text-xs">{t.subtitle}</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <Icon name="X" size={18} />
            </button>
          </div>

          <div className="p-5">
            {sent ? (
              <div className="flex flex-col items-center gap-3 py-6 text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "var(--brand-blue)" }}>
                  <Icon name="Check" size={28} className="text-white" />
                </div>
                <div className="font-bold text-gray-900">{t.successTitle}</div>
                <div className="text-sm text-gray-500">{t.successDesc}</div>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", phone: "", message: "" }); }}
                  className="mt-1 text-sm underline"
                  style={{ color: "var(--brand-blue)" }}
                >
                  {t.again}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">{t.labelName}</label>
                  <input
                    type="text"
                    required
                    placeholder={t.placeholderName}
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg text-sm border border-gray-200 outline-none focus:ring-2 focus:border-transparent transition text-gray-900 placeholder-gray-400"
                    style={{ "--tw-ring-color": "var(--brand-blue)" } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">{t.labelPhone}</label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (000) 000-00-00"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg text-sm border border-gray-200 outline-none focus:ring-2 focus:border-transparent transition text-gray-900 placeholder-gray-400"
                    style={{ "--tw-ring-color": "var(--brand-blue)" } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">{t.labelMsg}</label>
                  <textarea
                    rows={3}
                    placeholder={t.placeholderMsg}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg text-sm border border-gray-200 outline-none focus:ring-2 focus:border-transparent transition text-gray-900 placeholder-gray-400 resize-none"
                    style={{ "--tw-ring-color": "var(--brand-blue)" } as React.CSSProperties}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 font-semibold text-white rounded-lg transition-all hover:opacity-90 active:scale-95 text-sm"
                  style={{ background: "var(--brand-blue)" }}
                >
                  {t.btn}
                </button>
                <p className="text-xs text-gray-400 text-center leading-snug">{t.policy}</p>
              </form>
            )}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(o => !o)}
        className="w-14 h-14 rounded-full text-white shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95"
        style={{ background: "var(--brand-blue)", boxShadow: "0 4px 24px rgba(37,99,235,0.4)" }}
      >
        <Icon name={open ? "X" : "MessageCircle"} size={24} />
      </button>
    </div>
  );
}
