import React, { useState } from "react";
import Article from "./components/Article";

function App() {
  let EN = {
    title: "NVIDIA news",
    news: "NVIDIA Accelerated AT on Azure",
    description: "Article description:",
    preview:
      "NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.",
    content:
      "Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.",
    author: "Author: Mike",
    published: "Published: 06.12.2022",
    theme: "Theme: Video cards",
    btn_one: "Mark as read",
    btn_read: "Read",
    btn_close: "Close",
    btn_two: "Mark as unread",
    current_lang: "EN",
  };

  let UA = {
    title: "NVIDIA НОВИНИ",
    news: "Прискорений штучний інтелект NVIDIA в Azure",
    description: "Опис статті:",
    preview:
      "NVIDIA на Azure надає підприємствам штучний інтелект, мережі та високопродуктивні обчислення.",
    content:
      "Microsoft Azure та NVIDIA дозволяють підприємствам у хмарі використовувати об'єднану міць прискорених обчислень NVIDIA та мереж NVIDIA на запит для задоволення різноманітних обчислювальних вимог ІІ, машинного навчання, аналізу даних, графіки, віртуальних робочих столів та високопродуктивних обчислень додатків HPC. Від дрібних графічних процесорів і одиночних графічних процесорів до кількох графічних процесорів на кількох вузлах для розподілених обчислень - отримайте доступ до прискорення графічного процесора потрібного розміру для робочих навантажень.",
    author: "Автор: Майк",
    published: "Опубліковано: 06.12.2022",
    theme: "Тема: відео карти",
    btn_one: "Прочитано",
    btn_read: "Читати",
    btn_close: "Закрити",
    btn_two: "Не прочитано",
    current_lang: "UA",
  };

  const [isShow, setIsShow] = useState(false);
  const [isRead, setIsRead] = useState(false);
  const [buttonText, setButtonText] = useState("Read");
  const [currentLang, setCurrentLang] = useState("EN");

  const buttonTexts = () => {
    isShow ? setButtonText(`${article.btn_read}`) : setButtonText(`${article.btn_close}`);
  };

  const toggleArticle = () => {
    buttonTexts();
    setIsShow(!isShow);
  };

  const toggleRead = () => {
    setIsRead(true) 
  };

  const toggleRead2 = () => {
    setIsRead(false);
  };

  const article = currentLang === "EN" ? EN : UA;

  const setLangUA = () => {
    setCurrentLang("UA");
    setButtonText(UA.btn_read);
  };
  
  const setLangEN = () => {
    setCurrentLang("EN");
    setButtonText(EN.btn_read);
  };

  return (
    <div className="wrapper">
      <h1 className="title">{article.title}</h1>
      <div className="article">
        <Article show={isShow} text={article} isRead={isRead}>
          <div className="article__title">
            <h2>{article.news}</h2>
          </div>
        </Article>
        <div className="article__actions">
          <button onClick={toggleRead} className="article__btn">
            {article.btn_one}
          </button>
          <button onClick={toggleArticle} className="article__btn">
            {buttonText}
          </button>
          <button onClick={toggleRead2} className="article__btn">
            {article.btn_two}
          </button>
        </div>
      </div>
      <div className="lang">
        <button onClick={setLangUA} className="lang-btn">
          UA
        </button>
        <button onClick={setLangEN} className="lang-btn">
          EN
        </button>
      </div>
    </div>
  );
}
export default App;
