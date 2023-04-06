import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages";
import Create from "./pages/create";
import Store from "./store/store";
import View from "./pages/view";

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/create" element={<Create />} />
          <Route path="/view/:BookId" element={<View />} />
        </Routes>
      </BrowserRouter>
    </Store>
  );
}

export default App;
