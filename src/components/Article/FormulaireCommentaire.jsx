import React, { useState, useEffect } from "react";
import { articles } from "../../Api";
import { useParams } from "react-router-dom";
import { Formik, Field, Form } from "formik";
const FormulaireCommentaire = ({currentArticle}) => {
  console.log(articles);
  const [comment, setComment] = useState("")
  const [listOfComments, setListOfComments] = useState([])
  const [editedComment, setEditedComment] = useState("")

  useEffect(() => {
    setListOfComments(currentArticle.comments.map((comment) => {
        return {
            id : comment.id,
            author : comment.author,
            content : comment.content,
            isEditVisible : false
        }
        }))
  }, [currentArticle.comments])
  console.log(listOfComments)
  const handleSubmit = () => {
    const newComment = {
        id : currentArticle.comments.length + 1,
        author : "Moi",
        content : comment
  }
    currentArticle.comments.push(newComment)
    setListOfComments(currentArticle.comments)
    console.log(currentArticle.comments)
    setComment("")
    }

  const handleChange = (e) => {
    setComment(e.target.value)
  }



 const handleDelete = (id) => {
    const newComments = currentArticle.comments.filter((comment) => comment.id !== id)
    currentArticle.comments = newComments
    setListOfComments(newComments)
  }


  const handleEditSubmit = (id) => {
    const newComments = listOfComments.map((comment) => {
        if(comment.id === id) {
            comment.isEditVisible = false
            comment.content = editedComment
        }
        return comment
    })

    setListOfComments(newComments)
    setComment("")
  }

  const handleChangeEdit = (e) => {
    setEditedComment(e.target.value)
    }

  const onClickEdit = (id) => {
    const newComments = listOfComments.map((comment) => {
        if(comment.id === id) {
            comment.isEditVisible = true
            setEditedComment(comment.content)
        }
        return comment
    })
    setListOfComments(newComments)
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
        {listOfComments.map((comment) => {
          return (
            <div style={{
                display : "flex",
                flexDirection : "column",
            }}>
                <div>

              <p>{comment.author}</p>
              <p>{comment.content}</p>
              {comment.isEditVisible && (
                  <Formik 
                  initialValues={{
                            comment: "",
                        }}
                        onSubmit={() => handleEditSubmit(comment.id)}
                        >
                        <Form style={{
                     
                        }}>
                            <Field
                            name="EditComment"
                            type="text"
                            placeholder="Edit Commentaire"
                            value={editedComment}
                            onChange={handleChangeEdit}
                            />
                            <button type="submit">Edit</button>
                        </Form>
                
                        </Formik>
              )}
              <div>
                  <button style={{
                      backgroundColor : "blue",
                      color : "white",
                      width : "60px",
                      height : "30px",
                      borderRadius : "5px",
                      margin : "5px"
                    }} onClick={() => onClickEdit(comment.id)}>Edit</button>
              <button style={{
                  backgroundColor : "red",
                    color : "white",
                    width : "60px",
                    height : "30px",
                    borderRadius : "5px",
                    margin : "5px"
                    
                }} onClick={() => handleDelete(comment.id)}>X</button>
              </div>
                </div>
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
