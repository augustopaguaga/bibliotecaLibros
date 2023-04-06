import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

export default function View() {
  const [item, setItem] = useState(null);
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.BookId);
    setItem(book);
  }, []);

  const itemStyles = {
    container: {
      display: "flex",
      gap: "20px",
      color: "white",
      width: "800px",
      margin: "0 auto",
    },
  };

  if (!item) {
    <Layout>Item not found</Layout>;
  }

  return (
    <Layout>
      <div style={itemStyles.container}>
        <div>
          <div>
            {item?.cover ? <img src={item?.cover} width="400"></img> : ""}{" "}
          </div>
        </div>

        <div>
          <h2>{item?.titulo}</h2>

          <div>{item?.autor}</div>
          <div>{item?.intro}</div>
          <div>{item?.completed ? "Leído" : "Por terminar"}</div>
          <div>{item?.review}</div>
        </div>
      </div>
    </Layout>
  );
}
