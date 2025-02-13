import React from "react";
import { useTranslation } from "react-i18next";
import IconButton from "@material-ui/core/IconButton";
import { IconFlagDE, IconFlagUK } from "material-ui-flags";
import "./App.css";

const LANGUAGES = ["en", "de"];

function App() {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <header style={{ height: 70, backgroundColor: "#577d67" }}>
        <nav
          style={{ display: "flex", justifyContent: "flex-end", padding: 5 }}
        >
          <IconButton onClick={() => switchLanguage(LANGUAGES[1])}>
            <IconFlagDE />
          </IconButton>
          <IconButton onClick={() => switchLanguage(LANGUAGES[0])}>
            <IconFlagUK />
          </IconButton>
        </nav>
      </header>
      <main
        style={{
          display: "flex",
          justifyContent: "left",
          marginLeft: 40,
          fontSize: 28,
          fontWeight: 200,
        }}
      >
        <section>
          <p>{t("how-are-you")}</p>
          <p>{t("when-will-we-go-out")}</p>
          <p>{t("let-us-watch-something")}</p>
          <p>{t("i-love-you")}</p>
        </section>
      </main>
    </div>
  );
}

export default App;
