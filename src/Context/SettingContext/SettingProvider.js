import { createContext, useCallback, useContext, useEffect, useState } from "react";

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
  const [checkedTimeFormat, setCheckedTimeFormat] = useState(false);

  const toggleLanguage = (value) => {
    if (value === "english") {
      setEnglishLanguage(true);
    } else {
      setEnglishLanguage(false);
    }
    localStorage.setItem("language", JSON.stringify(!englishLanguage));
  };

  const toggleTimeFormat = useCallback(() => {
    setCheckedTimeFormat(!checkedTimeFormat)
    // localStorage.setItem("timeFormat", JSON.stringify(!checkedTimeFormat));
  },[checkedTimeFormat]);

  useEffect(() => {
    const lang = localStorage.getItem("language") === "true";
    setEnglishLanguage(lang);
  }, []);

  const value = {
    englishLanguage,
    toggleLanguage,
    checkedTimeFormat,
    toggleTimeFormat
  };

  return (
    <SettingStateContext.Provider value={value}>
      {children}
    </SettingStateContext.Provider>
  );
}
