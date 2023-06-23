import React, { useState, useEffect } from "react";
import { articles } from "../../Api";
import { useParams } from "react-router-dom";
import { Formik, Field, Form } from "formik";
const FormulaireCommentaire = ({currentArticle}) => {
  console.log(articles);
  const [comment, setComment] = useState("")

  const handleSubmit = () => {
    const newComment = {
        id : currentArticle.comments.length + 1,
        author : "Moi",
        content : comment
  }
    currentArticle.comments.push(newComment)
    console.log(currentArticle.comments)
    setComment("")
    }

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Commentaire
      <div>
        {currentArticle.comments.map((comment) => {
          return (
            <div>
              <p>{comment.author}</p>
              <p>{comment.content}</p>
            </div>
          );
        })}
      </div>
        <Formik
        initialValues={{
            comment: "",
        }}
        onSubmit={handleSubmit}
        >
        <Form>
            <Field
            name="comment"
            type="text"
            placeholder="Commentaire"
            value={comment}
            onChange={handleChange}
            />
            <button type="submit">Envoyer</button>
        </Form>
        
        </Formik>
    </div>
  );
};

export default FormulaireCommentaire;
