import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0B1B3B] text-white py-10 px-6">

      <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
        <p>{t('footer_copyright')}</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            href="#"
            className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-full"
          >
            <i className="fa-brands fa-telegram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}