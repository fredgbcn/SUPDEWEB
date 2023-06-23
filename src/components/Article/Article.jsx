import React from "react";
import FormulaireCommentaire from './FormulaireCommentaire'
import Evaluation from './Evaluation'
import { useParams } from "react-router-dom";
import {articles} from "../../Api";

    const Article = (props) => {
console.log("mounted")
        const {id} = useParams();
        console.log("articles", articles)
        const currentArticle = articles.find((article) => article.id === parseInt(id));

        return(
            <div>
                <h1>{currentArticle.title}</h1>
                <br />
                <FormulaireCommentaire currentArticle={currentArticle} />
                <Evaluation />
            

            </div>
        )
    }

export default Article;