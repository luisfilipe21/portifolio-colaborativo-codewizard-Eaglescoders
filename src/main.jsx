import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HeroSection } from "./components/hero";
import { Footer } from "./components/rodape";
import { AboutProject } from "./components/about-project";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="flex flex-col bg-blueBg-0">
      <HeroSection />

      <span>[Coloque aqui a sessão de benefits]</span>
      <span>[Coloque aqui a sesão de tech-and-lang]</span>
      <span>[Coloque aqui a sesão de team]</span>
      <AboutProject />
      <span>[Coloque aqui a sesão de coments]</span>
      <span><Footer /></span>
    </main>
  </React.StrictMode>
);
