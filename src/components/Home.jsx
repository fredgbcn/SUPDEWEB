import React from "react";
import '../Api'
import articles from "../Api";
import Article from "./Article/Article";
import FormulaireArticle from "./Article/FormulaireArticle";
    const Home = () => {
        return(
            <div>
                Home {articles.map((article) => (console.log(article.category)))}

            </div>
        )
    }

export default Home;