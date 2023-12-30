import { useState } from "react";
import useSWR from "swr";
import BookList from "./BookList";

const fetcher = (url) => fetch(url).then((res) => res.json());

const BookSearch = () => {
  const [query, setQuery] = useState("");
  const { data, error, mutate } = useSWR(
    query ? `https://freetestapi.com/api/v1/books?search=${query}` : null,
    fetcher
  );

  const handleSearch = () => {
    setQuery(query);
    mutate();
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">SWR BooksQuery</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search"
            />
            <button
              onClick={handleSearch}
              className="btn btn-outline-success"
              type="button"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      {error && (
        <div className="container pt-5">
          <div className="alert alert-danger" role="alert">
            Oops ada yang salah nih.
          </div>
        </div>
      )}
      {data && (
        <div className="container pt-5">
          <div className="row g-5 justify-content-start">
            <BookList books={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookSearch;
