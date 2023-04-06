import Book from "../components/book";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

export default function Index() {
  const store = useAppContext();

  const booksContainer = {
    display: "flex",
    flewWrap: "wrap",
    gap: "30px",
    width: "300px",
  };

  return (
    <div>
      <Layout>
        <div style={booksContainer}>
          {store.items.map((item) => (
            <Book key={item.id} book={item} />
          ))}
        </div>
      </Layout>
    </div>
  );
}
