import React, { useState } from "react";

const RatingStar = ({ initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (newRating) => {
    setRating(newRating);
    onRatingChange(newRating);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starRating = index + 1;
        return (
          <span
            key={starRating}
            onClick={() => handleClick(starRating)}
            onMouseEnter={() => setRating(starRating)}
            onMouseLeave={() => setRating(initialRating)}
            style={{
              cursor: "pointer",
              color: starRating <= rating ? "gold" : "gray",
              fontSize: "1.5rem",
            }}
          >
            {starRating <= rating ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
};

const Evaluation = ({ currentArticle }) => {
  console.log("hello", currentArticle);

  const [articleRatings, setArticleRatings] = useState(0);

  const handleRatingChange = (rating) => {
    setArticleRatings(rating);

    const article = { ...currentArticle };
    const oldAverageRating = article.rating;
    const numberOfVotes = article.numberOfRating;
    const newAverageRating =
      (oldAverageRating * numberOfVotes + rating) / (numberOfVotes + 1);
    console.log(newAverageRating);

    currentArticle.rating = newAverageRating;
    article.numberOfRating += 1;

    console.log(article);
  };

  return (
    <div>
      <div key={currentArticle.id}>
        <RatingStar
          initialRating={articleRatings}
          onRatingChange={(rating) => handleRatingChange(rating)}
        />
        {articleRatings > 0 && (
          <p>
            Voici la note moyenne de cet article :
            {Math.round(currentArticle.rating * 100) / 100}{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default Evaluation;
