import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Rootlayout from "./components/Rootlayout";
import Ourstory from "./pages/Ourstory";
import Portfolio from "./pages/Portfolio";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Rootlayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/story" element={<Ourstory/>}></Route>
    <Route path="/portfolio" element={<Portfolio/>}></Route>
    <Route path="/career" element={<Career/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
  </Route>
))

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
