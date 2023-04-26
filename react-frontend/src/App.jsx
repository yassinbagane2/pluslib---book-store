import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import SharedLayout from "./compnents/Shared/SharedLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
