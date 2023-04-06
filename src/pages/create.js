import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

export default function Create() {
  const [title, setTitle] = useState("");
  const [autor, setAutor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  const store = useAppContext();
  const navigate = useNavigate();

  const inputStyles = {
    formContainer: {
      width: "400px",
      margin: "0 auto",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      margin: "15px 0",
    },
    title: {
      fontSize: "16px",
      textAlign: "left",
      color: "white",
    },
    input: {
      padding: "10px",
      borderRadius: "5px",
      fontSize: "16px",
    },
  };

  const buttonStyle = {
    padding: "15px 20px",
    minWidth: "200px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#1e9638",
    color: "white",
    fontWeigth: "bolder",
    fontSize: "18px",
  };

  function handleChange(e) {
    const type = e.target.name;
    const value = e.target.value;

    switch (type) {
      case "title":
        setTitle(value);
        break;

      case "autor":
        setAutor(value);
        break;

      case "intro":
        setIntro(value);
        break;

      case "completado":
        setCompleted(value);
        break;

      case "review":
        setReview(value);
        break;

      default:
    }
  }

  function handleOnChangeFile(e) {
    const element = e.target;
    const file = element.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = function () {
      setCover(reader.result.toString());
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newBook = {
      id: crypto.randomUUID(),
      title,
      autor,
      cover,
      intro,
      completed,
      review,
    };
    store.createItem(newBook);

    navigate("/");
  }

  return (
    <div>
      <Layout>
        <form onSubmit={handleSubmit} style={inputStyles.formContainer}>
          <div style={inputStyles.container}>
            <div style={inputStyles.title}>Titulo</div>
            <input
              style={inputStyles.input}
              type="text"
              name="title"
              onChange={handleChange}
              value={title}
            />
          </div>

          <div style={inputStyles.container}>
            <div style={inputStyles.title}>Autor</div>
            <input
              style={inputStyles.input}
              type="text"
              name="autor"
              onChange={handleChange}
              value={autor}
            />
          </div>

          <div style={inputStyles.container}>
            <div style={inputStyles.title}>Cover</div>
            <input
              style={inputStyles.input}
              type="file"
              name="cover"
              onChange={handleOnChangeFile}
            />
          </div>

          <div>
            {!!cover ? <img src={cover} width="200" alt="Preview" /> : ""}
          </div>

          <div style={inputStyles.container}>
            <div style={inputStyles.title}>Introducción</div>
            <input
              style={inputStyles.input}
              type="text"
              name="intro"
              onChange={handleChange}
              value={intro}
            />
          </div>

          <div>
            <div style={inputStyles.title}>Completado</div>
            <input
              style={inputStyles.input}
              type="checkbox"
              name="completado"
              onChange={handleChange}
              value={completed}
            />
          </div>

          <div style={inputStyles.container}>
            <div style={inputStyles.title}>Review</div>
            <input
              style={inputStyles.input}
              type="text"
              name="review"
              onChange={handleChange}
              value={review}
            />
          </div>

          <input type="submit" value="Registrar Libro" style={buttonStyle} />
        </form>
      </Layout>
    </div>
  );
}
