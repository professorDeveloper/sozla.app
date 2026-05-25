import React, { useEffect, useRef, useState } from "react";
import Button from "@/shared/ui/Button";
import logo from "@assets/img/sozla.svg";
import { Link } from "react-router-dom";
import ThemeToggle from "@/features/theme-toggle/ui/ThemeToggle";
import { Menu, X, ChevronDown, Check } from "lucide-react";

const LANGUAGES = [
  { code: "uz", label: "O‘zbek", flag: "🇺🇿" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

function LanguageDropdown({ fullWidth = false }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(LANGUAGES[0]);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className={`relative ${fullWidth ? "w-full" : ""}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`
          group flex items-center justify-between gap-2
          ${fullWidth ? "w-full px-4 py-3" : "px-3 py-2"}
          rounded-xl border border-gray-200 dark:border-gray-700
          bg-white dark:bg-gray-800
          text-gray-700 dark:text-gray-200 font-medium
          hover:border-primary dark:hover:border-primary
          hover:shadow-sm transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-primary/30
        `}
      >
        <span className="flex items-center gap-2">
          <span className="text-base leading-none">{selected.flag}</span>
          <span className="text-sm">{selected.label}</span>
        </span>
        <ChevronDown
          size={16}
          className={`text-gray-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`
          absolute ${fullWidth ? "left-0 right-0" : "right-0"} mt-2
          ${fullWidth ? "" : "min-w-[160px]"}
          origin-top
          bg-white dark:bg-gray-800
          border border-gray-100 dark:border-gray-700
          rounded-xl shadow-lg shadow-gray-200/60 dark:shadow-black/40
          overflow-hidden z-50
          transition-all duration-200
          ${open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-1 pointer-events-none"}
        `}
      >
        {LANGUAGES.map((lang) => {
          const isActive = selected.code === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => {
                setSelected(lang);
                setOpen(false);
              }}
              className={`
                w-full flex items-center justify-between gap-2 px-4 py-2.5 text-sm
                transition-colors duration-150
                ${isActive
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/60"}
              `}
            >
              <span className="flex items-center gap-2">
                <span className="text-base leading-none">{lang.flag}</span>
                <span>{lang.label}</span>
              </span>
              {isActive && <Check size={16} className="text-primary" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header className="w-full border-b bg-white dark:bg-gray-900 dark:border-gray-800">
      <div className="container mx-auto">
        <div className=" max-w-7xl mx-auto py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700 dark:text-gray-300">
            <Link to="/" className="hover:text-primary transition">Asosiy</Link>
            <Link to="/about" className="hover:text-primary transition">Biz haqimizda</Link>
            <Link to="/contact" className="hover:text-primary transition">Bog‘lanish</Link>
            <Link to="/faq" className="hover:text-primary transition">FAQ</Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />

            <LanguageDropdown />

            <Button className="bg-primary text-white px-5 py-2 rounded-full hover:opacity-90">
              Yuklab olish
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center border rounded-lg text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black/40">
            {/* Panel */}
            <div
              className="bg-[#F8F9FA] dark:bg-gray-900 
            h-[100dvh] w-full flex flex-col px-5 pt-4 pb-[env(safe-area-inset-bottom)] 
            overflow-y-auto"
            >
              {/* Top */}
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
                <img src={logo} alt="Logo" className="h-8" />

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border 
                bg-white dark:bg-gray-800 
                text-gray-700 dark:text-gray-200
                hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Menu */}
              <nav className="flex flex-col gap-2 text-gray-800 dark:text-gray-200">
                {[
                  "Asosiy",
                  "Ilova haqida",
                  "Biz haqimizda",
                  "Bog‘lanish",
                  "FAQ",
                ].map((item) => (
                  <Link
                    key={item}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition"
                  >
                    {item}
                  </Link>
                ))}
              </nav>

              {/* Theme */}
              <div className="flex items-center justify-between mt-6 text-gray-700 dark:text-gray-300">
                <span>Theme</span>
                <ThemeToggle />
              </div>

              {/* Bottom */}
              <div className="mt-auto bg-white dark:bg-gray-800 p-4 mb-2 rounded-2xl shadow-sm flex flex-col gap-4">
                <LanguageDropdown fullWidth />

                <Button className="bg-primary text-white py-3 rounded-full w-full text-lg hover:opacity-90">
                  Yuklab olish
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
