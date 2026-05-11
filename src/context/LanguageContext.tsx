"use client";

import React, { createContext, useContext, useState } from "react";
import { translations, Language } from "@/i18n/translations";

type LanguageContextType = {
  lang: Language;
  t: typeof translations["en"];
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLang] = useState<Language>("en");
  const toggleLang = () => setLang((l) => (l === "en" ? "zh" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
