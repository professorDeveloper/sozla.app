import React from "react";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

// Assetlar (Yo'llarni o'zingizga moslang)
import googlePlay from "@assets/img/hero/play.svg";
import appStore from "@assets/img/hero/appstore.svg";
import logo from "@assets/img/sozla.svg";
import Button from "./../shared/ui/Button";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="bg-white dark:bg-[#0F172A] pt-16 pb-10">
      <div className="container">
        {/* YUQORI QISM: Logo va Yuklab olish */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div className="max-w-[480px]">
            <img src={logo} alt="So'zla" className="h-20 mb-8 object-contain" />
            <p className="text-[#64748B] dark:text-gray-400 text-lg font-medium leading-relaxed">
              O’zbek tilidagi eng sifatli kontent orqali{" "}
              <br className="hidden md:block" />
              bolajonlarning muloqot qobiliyatini rivojlantiramiz."
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-primary font-bold text-[18px] mb-5">
              Ilovani yuklab olish
            </h4>
            <div className="flex gap-4">
              <Button bg="#ffffff" borderColor="#519234">
                <img
                  src={googlePlay}
                  alt="Google Play"
                  className="h-5 w-auto object-contain"
                />
              </Button>
              <Button bg="#ffffff" borderColor="#519234">
                <img
                  src={appStore}
                  alt="App Store"
                  className="h-5 w-auto object-contain"
                />
              </Button>
            </div>
          </div>
        </div>

        {/* O'RTA QISM: Navigatsiya Linklari */}
        <div className="mb-12">
          <nav className="flex flex-wrap gap-x-10 gap-y-4 border-b border-gray-50 pb-8">
            <Link
              to="/"
              className="text-[#1E293B] dark:text-gray-200 text-[17px] font-bold hover:text-primary transition-colors"
            >
              Asosiy
            </Link>
            <Link
              to="/about"
              className="text-[#1E293B] dark:text-gray-200 text-[17px] font-bold hover:text-primary transition-colors"
            >
              Biz haqimizda
            </Link>
            <Link
              to="/contact"
              className="text-[#1E293B] dark:text-gray-200 text-[17px] font-bold hover:text-primary transition-colors"
            >
              Bog'lanish
            </Link>
            <Link
              to="/faq"
              className="text-[#1E293B] dark:text-gray-200 text-[17px] font-bold hover:text-primary transition-colors"
            >
              FAQ
            </Link>
          </nav>
        </div>

        {/* PASTI QISM: Copyright va MUI Style Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#94A3B8] dark:text-gray-500 text-base">
            2026 So'zla. Barcha huquqlar himoyalangan.
          </p>

          <div className="flex items-center gap-1">
            {/* Telegram - MUI IconButton Style */}
            <a
              href="#"
              className="p-3 rounded-full text-[#24A1DE] transition-all duration-300 hover:bg-sky-50 dark:hover:bg-sky-900/30 active:bg-sky-100"
            >
              <FaTelegramPlane size={24} />
            </a>

            {/* Instagram - MUI IconButton Style */}
            <a
              href="#"
              className="p-3 rounded-full text-[#0F172A] dark:text-white transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200"
            >
              <FaInstagram size={24} />
            </a>

            {/* Google - MUI IconButton Style */}
            <a
              href="#"
              className="p-3 rounded-full transition-all duration-300 hover:bg-red-50 dark:hover:bg-red-900/20 active:bg-red-100"
            >
              <FcGoogle size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
