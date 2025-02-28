import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import FooterColumns from "./footerContent/FooterColumns";
import SocialPart from "./footerContent/SocialPart";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Footer = () => {
  const { t, locale } = useLanguage();
  const StartQuot = locale === "en" ? RiDoubleQuotesL : RiDoubleQuotesR;
  const EndQuot = locale === "en" ? RiDoubleQuotesR : RiDoubleQuotesL;
  return (
    <footer className="mt-12">
      <div className="border-t-[1px] border-slate-500/30">
        <div className="flex flex-wrap py-4 md:py-8 md:px-4 w-full xl:max-w-[2100px] mx-auto">
          <FooterColumns />
          <SocialPart />
        </div>
      </div>
      <div className="border-t-[1px] border-slate-500/30 text-center text-xs md:text-sm py-4">
        <div>
          {t.copyRight}
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
