import { Link } from "react-router-dom";

export default function Book({ book }) {
  const booksContainerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "300px",
  };

  const bookInfoStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    textDecoration: "none",
  };

  return (
    <div style={booksContainerStyle}>
      <Link to={`/view/${book.id}`} style={bookInfoStyle}>
        <img src={book.cover} width="200" height="300" alt={book.title}></img>
        <div>{book.title}</div>
      </Link>
    </div>
  );
}
