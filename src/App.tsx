import React from "react";
import { useTranslation } from "react-i18next";
import IconButton from "@material-ui/core/IconButton";
import { IconFlagDE, IconFlagUK } from "material-ui-flags";
import "./App.css";

const LANGUAGES = ["en", "de"];

function App() {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lang: string) => {
    if (lang === LANGUAGES[0]) {
      i18n.changeLanguage(lang);
    } else {
      i18n.changeLanguage(lang);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <IconButton onClick={() => switchLanguage(LANGUAGES[0])}>
            <IconFlagUK />
          </IconButton>
          <IconButton onClick={() => switchLanguage(LANGUAGES[1])}>
            <IconFlagDE />
          </IconButton>
        </div>
        <p>{t("translated-paragraph")}</p>
      </header>
    </div>
  );
}

export default App;
