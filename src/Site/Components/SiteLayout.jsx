import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useTranslation } from "../../Providers/TranslationProvider";
import { useTWThemeContext } from "../../Providers/ThemeProvider";
import { requestHandler } from "../../axios-client";
import TopHeader from "./TopHeader";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function SiteLayout() {
  const { language } = useTranslation();
  const { setTheme } = useTWThemeContext();
  const [socialMedia, setSocialMedia] = useState([]);
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("theme");
    return savedMode ? savedMode : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", mode);
    const htmlElement = document.querySelector("html");
    localStorage.setItem("theme", mode);
    setTheme(mode);
    if (htmlElement) {
      htmlElement.setAttribute("data-theme", mode);
      sessionStorage.setItem("mode", mode);
    }
  }, [mode]);

  useEffect(() => {
    requestHandler("get", "site/socialmedia").then((res) => {
      setSocialMedia(res.data.socialMedia);
    });
  }, []);

  const handleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      if (language === "ar") {
        htmlElement.setAttribute("dir", "rtl");
      } else {
        htmlElement.setAttribute("dir", "ltr");
      }
    }
  }, [language]);

  return (
    <div className={`bg-background-color`}>
      <TopHeader handleMode={handleMode} mode={mode} />
      <Header handleMode={handleMode} mode={mode} />
      <Outlet
        context={{
          mode,
        }}
      />
      <Footer socialMedia={socialMedia} mode={mode} />
    </div>
  );
}
