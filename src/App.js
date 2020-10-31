import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import useStyles from "./style";
import "./App.css";

import NewsCards from "./components/NewsCards/NewsCards";
import Nav from "./components/Nav";

const alanKey =
  "fce402fd775811b75f62ca6dd958272e2e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }
      },
    });
  }, []);
  return (
    <div className="App">
      <Nav />
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      <div className={classes.logoContainer}>
        <img
          src="https://alan.app/voice/images/previews/preview.jpg"
          className={classes.alanLogo}
          alt="logo"
        />
      </div>
    </div>
  );
}

export default App;
