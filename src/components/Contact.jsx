import React from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex flex-wrap justify-center my-20 gap-5">
        <div className="bg-gray-100 p-4 w-[500px] max-w-[96vw] shadow-xl">
          <h1 className="font-bold text-xl text-blue-400">
            {t('contact_title')}
          </h1>
          <div className="my-4">
            <i className="fa-solid fa-envelope"></i>
            <span className="text-blue-400">orginfo.uz</span>
          </div>
          <div>
            <i className="fa-solid fa-phone"></i>
            <span>+998 90 123 45 67 / +998 91 123 45 67</span>
          </div>
          <div className="flex justify-end my-3">
            <div className="w-10 h-10 bg-blue-700 rounded flex justify-center items-center text-white">
              <i class="fa-solid fa-location-dot"></i>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 w-[500px] max-w-[96vw] shadow-xl">
          <h1 className="font-bold text-xl text-blue-400">
            {t('contact_title')}
          </h1>
          <div className="my-4">
            <i className="fa-solid fa-envelope"></i>
            <span className="text-blue-400">orginfo.uz</span>
          </div>
          <div>
            <i className="fa-solid fa-phone"></i>
            <span>+998 90 123 45 67 / +998 91 123 45 67</span>
          </div>
          <div className="flex justify-end my-3">
            <div className="w-10 h-10 bg-blue-700 rounded flex justify-center items-center text-white">
              <i class="fa-solid fa-location-dot"></i>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          className="w-[1200px] max-w-[96vw] h-[60vh] mx-auto mb-20"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2871.939978236976!2d72.33519077584607!3d40.77437907138431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced0053edc25d%3A0x623dfed4c21c7941!2sAndijon%20Davlat%20Texnika%20Instituti!5e1!3m2!1sen!2s!4v1763222950796!5m2!1sen!2s"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;