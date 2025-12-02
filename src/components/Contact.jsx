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
          {/* <div className="my-4">
            <i className="fa-solid fa-envelope"></i>
            <span className="text-blue-400">orginfo.uz</span>
          </div> */}
          <div className="mt-8">
            <i className="fa-solid fa-phone"></i>
            <span>+99897 998 00 10</span>
          </div>
          <div className="flex justify-end my-3">
            <div className="w-10 h-10 bg-blue-700 rounded flex justify-center items-center text-white">
              <i class="fa-solid fa-location-dot"></i>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe className="w-[1200px] max-w-[96vw] h-[60vh] mx-auto mb-20" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d22968.30246352284!2d72.34368594498396!3d40.7952449646169!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQ3JzUzLjUiTiA3MsKwMTknMjQuMiJF!5e1!3m2!1sen!2s!4v1764690868765!5m2!1sen!2s" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default Contact;