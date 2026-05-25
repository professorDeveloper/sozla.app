import { FiMail, FiPhone } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import Title from "../../shared/ui/Title";
import SubText from "../../shared/ui/SubText";

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <div className="text-center mb-16">
          <Title className={"mb-5"}>
            Bog‘lanish
          </Title>
          <SubText className="text-gray-500 dark:text-gray-400 mt-2">
            Savollaringiz bormi? Biz bilan bog‘laning
          </SubText>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* EMAIL CARD */}
          <div className="group flex flex-col items-center p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-red-200 dark:hover:border-red-900">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 mb-6 group-hover:rotate-12 transition-transform duration-300">
              <FiMail className="text-red-500 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Elektron pochta</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-3 text-center max-w-xs">
              Hamkorlik yoki takliflar bo‘yicha bizga xat yozishingiz mumkin.
            </p>
            <a href="mailto:email@example.com" className="text-blue-600 dark:text-blue-400 mt-4 font-medium hover:underline">
              email@example.com
            </a>
          </div>

          {/* PHONE CARD */}
          <div className="group flex flex-col items-center p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-gray-300 dark:hover:border-gray-600">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 mb-6 group-hover:scale-110 transition-transform duration-300">
              <FiPhone className="text-gray-700 dark:text-gray-200 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Telefon</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-3 text-center max-w-xs">
              Ilova bo‘yicha savollaringizga telefon orqali javob beramiz.
            </p>
            <a href="tel:+998000000000" className="text-blue-600 dark:text-blue-400 mt-4 font-medium hover:underline">
              +998 (XX) XXX-XX-XX
            </a>
          </div>

          {/* TELEGRAM CARD */}
          <div className="group flex flex-col items-center p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-blue-900">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">
              <FaTelegramPlane className="text-blue-500 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Telegram</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-3 text-center max-w-xs">
              Bizga to‘g‘ridan-to‘g‘ri yozing, mutaxassislarimiz tezda javob beradi.
            </p>
            <a href="https://t.me/sozla_support" target="_blank" className="text-blue-600 dark:text-blue-400 mt-4 font-medium hover:underline">
              @sozla_support
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}