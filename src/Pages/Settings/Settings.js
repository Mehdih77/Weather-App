import ToggleBtn from "../../components/ToggleBtn/ToggleBtn";
import { useSettingContext } from "../../Context/SettingContext/SettingProvider";
import "./Settings.css";

export default function Settings() {
  const {
    toggleLanguage,
    englishLanguage,
    toggleTimeFormat,
    checkedTimeFormat,
  } = useSettingContext();

  return (
    <section className="setting_page">
      <h3>{englishLanguage ? "Settings" : "تنظیمات"}</h3>
      <label className="setting_page_language setting_page_label">
        {englishLanguage ? (
          <>
            Change System Language
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

      <label className="setting_page_label">
        {englishLanguage ? (
          <>
            Time Format / 24
            <ToggleBtn
              toggle={toggleTimeFormat}
              checkedBox={checkedTimeFormat}
            />
          </>
        ) : (
          <>
            <ToggleBtn
              toggle={toggleTimeFormat}
              checkedBox={checkedTimeFormat}
            />
            فرمت 24ساعته
          </>
        )}
      </label>

      <label className="setting_page_label">
        {englishLanguage ? (
          <>
            Dark Mode
            <ToggleBtn disable="true" />
          </>
        ) : (
          <>
            <ToggleBtn disable="true" />
             حالت تاریکی
          </>
        )}
      </label>
      <label className="setting_page_label">
        {englishLanguage ? (
          <>
            Push Notification
            <ToggleBtn disable="true" />
          </>
        ) : (
          <>
            <ToggleBtn disable="true" />
            اطلاع رسانی
          </>
        )}
      </label>
    </section>
  );
}
