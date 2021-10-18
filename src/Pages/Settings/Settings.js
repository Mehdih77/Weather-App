import ToggleBtn from "../../components/ToggleBtn/ToggleBtn";
import { useSettingContext } from "../../Context/SettingContext/SettingProvider";
import "./Settings.css";

export default function Settings() {
  const { toggleLanguage, englishLanguage } = useSettingContext();

  return (
    <section className="setting_page">
      <h3>{englishLanguage ? "Settings" : "تنظیمات"}</h3>
      <label className="setting_page_language">
        {englishLanguage ? (
          <>
            Change system language
            <select onChange={(e) => toggleLanguage(e.target.value)}>
              <option value="english">-Select-</option>
              <option value="english">English</option>
              <option value="persian">Persian</option>
            </select>
          </>
        ) : (
          <>
            <select onChange={(e) => toggleLanguage(e.target.value)}>
              <option value="english">-انتخاب-</option>
              <option value="english">انگلیسی</option>
              <option value="persian">فارسی</option>
            </select>
            زبان سیستم را تغییر دهید
          </>
        )}
      </label>

      <label className="setting_page_language">
        Change system language
        <ToggleBtn />
      </label>
    </section>
  );
}
