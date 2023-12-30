import React from "react";

const BookList = ({ books }) => {
  return (
    <>
      {books.map((book) => (
        <div className="card" style={{ width: "18rem" }} key={book.id}>
          <img
            src={book.cover_image}
            className="card-img-top rounded-3"
            style={{ width: "15rem", height: "17rem" }}
            alt="Cover"
          />
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <div>
              <p className="text-secondary">by {book.author}</p>
            </div>
            <p className="card-text">{book.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BookList;
