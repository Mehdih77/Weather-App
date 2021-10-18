import { createContext, useContext, useEffect, useState } from "react";

const SettingStateContext = createContext();

export function useSettingContext() {
  const context = useContext(SettingStateContext);
  if (!context) {
    throw Error("Error In SettingStateContext");
  }
  return context;
}

export default function SettingProvider({ children }) {
  const [englishLanguage, setEnglishLanguage] = useState(true);
  const toggleLanguage = (value) => {
    if (value === "english") {
      setEnglishLanguage(true);
    } else {
      setEnglishLanguage(false);
    }
    localStorage.setItem("language", JSON.stringify(!englishLanguage));
  };

  useEffect(() => {
    const lang = localStorage.getItem("language") === "true";
    setEnglishLanguage(lang);
  }, []);

  const value = {
    englishLanguage,
    toggleLanguage,
  };

  return (
    <SettingStateContext.Provider value={value}>
      {children}
    </SettingStateContext.Provider>
  );
}
