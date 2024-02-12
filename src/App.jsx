import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import LayoutPublic from "./layouts/LayoutPublic";
import NotFound from "./pages/NotFound";
import BlogDetail from "./pages/BlogDetail";

const App = () => {
  return <>
    <Navbar />
    <h1>App</h1>
    <Routes>
      <Route element={<LayoutPublic />} path="/">
        <Route element={<Inicio />} index></Route>
        <Route element={<Contacto />} path="/contacto"></Route>
        <Route element={<Blog />} path="/blog"></Route>
        <Route element={<BlogDetail />} path="/blog/:id"></Route>
        <Route element={<NotFound />} path="*"></Route>
      </Route>
    </Routes>
  </>
}

export default App;