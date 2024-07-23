import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Accueil from "./pages/Accueil";
import Fruits from './pages/Fruits';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
        <Route path="/fruits" element={<Fruits />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
