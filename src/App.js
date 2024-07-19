import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Accueil from "./pages/Accueil";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout />}>
          <Route index element={<Accueil />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
