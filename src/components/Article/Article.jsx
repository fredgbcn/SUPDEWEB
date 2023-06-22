import React from "react";
import FormulaireCommentaire from './FormulaireCommentaire'
import Evaluation from './Evaluation'

    const Article = (props) => {
        return(
            <div>

                {/*Auteur, Catégorie, Titre, Contenu, Comentaires */}
                <FormulaireCommentaire />
                <p>Mon Commentaire</p>
                <Evaluation />
            

            </div>
        )
    }

export default Article;