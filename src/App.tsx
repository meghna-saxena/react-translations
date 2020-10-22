import React from "react";
import { useTranslation } from "react-i18next";
import IconButton from "@material-ui/core/IconButton";
import { IconFlagDE, IconFlagUK } from "material-ui-flags";
import "./App.css";

const LANGUAGES = ["en", "pl"];

function App() {
  const [lang, setLang] = React.useState(LANGUAGES[0]);
  const [defaultflag, setDefaultFlag] = React.useState(false);
  const { t, i18n } = useTranslation();

  const switchLanguage = () => {
    if (lang === LANGUAGES[0]) {
      setLang(LANGUAGES[1]);
      setDefaultFlag(!defaultflag);
      i18n.changeLanguage(LANGUAGES[1]);
    } else {
      setLang(LANGUAGES[0]);
      setDefaultFlag(!defaultflag);
      i18n.changeLanguage(LANGUAGES[0]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <IconButton onClick={switchLanguage}>
          {defaultflag ? <IconFlagUK /> : <IconFlagDE />}
        </IconButton>
        <p>{t("translated-paragraph")}</p>
      </header>
    </div>
  );
}

export default App;
