import { Link } from "react-router-dom";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareWhatsapp,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { useTranslation } from "../../Providers/TranslationProvider";
import { useCompanyInfo } from "../../Providers/CompanyInfoProvider";

const Footer = ({ socialMedia, mode }) => {
  const { translations, language } = useTranslation();
  const { companyInfo, loading } = useCompanyInfo();

  return (
    <>
      <footer className="py-8  bg-blocks-color text-primary-text relative">
        <div className=" flex flex-col flex-wrap justify-between w-full gap-8 lg:flex-row lg:px-32 md:px-16 px-8">
          <div className="flex-[40%]">
            <div className="font-semibold text-xl mb-8">
              <img
                src="/Images/Logo.png"
                className={`h-16 ${mode === "dark" ? "" : "hidden"}`}
                alt=""
              />
              <img
                src="/Images/Logo_light.png"
                className={`h-16 ${mode === "dark" ? "hidden" : ""}`}
                alt=""
              />
            </div>
            <div className="text-sm w-3/4 text-secondary-text">
              {language === "ar"
                ? companyInfo?.company_description_ar
                : companyInfo?.company_description_en}
            </div>
          </div>
          <div className="flex flex-[40%]">
            <div className="flex-[25%]">
              <div className="font-semibold text-xl mb-8">
                {(translations && translations["company"]) || "company"}
              </div>
              <div className="flex flex-col gap-5 items-start text-secondary-text">
                <Link
                  to="/"
                  target="_blank"
                  className="flex gap-2 items-center"
                >
                  <span>
                    {(translations && translations["about us"]) || "about us"}
                  </span>
                </Link>

                <Link to="/privacy" className="flex gap-2 items-center">
                  <span>
                    {(translations && translations["privacy policy"]) ||
                      "privacy policy"}
                  </span>
                </Link>
                <Link to="/TermsConditions" className="flex gap-2 items-center">
                  <span>
                    {(translations && translations["terms and conditions"]) ||
                      "terms and conditions"}
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex-[25%]">
              <div className="font-semibold text-xl mb-8">
                {(translations && translations["support"]) || "support"}
              </div>
              <div className="flex flex-col gap-5 items-start text-secondary-text">
                <Link to="/contact" className="flex gap-2 items-center">
                  <span>
                    {(translations && translations["contact"]) || "contact"}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex flex-col items-center md:items-start md:flex-row justify-between gap-8 lg:flex-row lg:px-32 md:px-16 px-8 py-6 bg-background-color text-primary-text">
        <div>
          {(translations &&
            translations[
              "Copyright © 2024 ABDEEN for watches. All rights reserved."
            ]) ||
            "Copyright © 2024 ABDEEN for watches. All rights reserved."}
          <span className="block text-xs">
            {(translations && translations["Designed and Developed by"]) ||
              "Designed and Developed by"}{" "}
            <a
              className="text-secondary-text"
              target="_blank"
              href="https://www.linkedin.com/in/muhammed-naser-edden/"
            >
              {language === "ar" ? "محمد ناصر الدين" : "Muhammed Nasser Edden"}
            </a>
          </span>
        </div>
        <div className="flex gap-4 items-center">
          {socialMedia &&
            socialMedia.map((media) => {
              if (media.title === "facebook") {
                return (
                  <Link
                    to={`${media.link}`}
                    target="_blank"
                    className="hover:text-black text-primary-text"
                    key={media.title}
                  >
                    <FaSquareFacebook size={32} />
                  </Link>
                );
              } else if (media.title === "instagram") {
                return (
                  <Link
                    to={`${media.link}`}
                    target="_blank"
                    className="hover:text-black text-primary-text"
                    key={media.title}
                  >
                    <FaSquareInstagram size={32} />
                  </Link>
                );
              } else if (media.title === "whatsapp") {
                return (
                  <Link
                    to={`${media.link}`}
                    target="_blank"
                    className="hover:text-black text-primary-text"
                    key={media.title}
                  >
                    <FaSquareWhatsapp size={32} />
                  </Link>
                );
              } else {
                return null;
              }
            })}
        </div>
      </div>
    </>
  );
};

export default Footer;
