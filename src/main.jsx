import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HeroSection } from "./components/hero";
import { Footer } from "./components/rodape";
import { AboutProject } from "./components/about-project";
import Benefits from "./components/benefits";
import Comments from "./components/coments";
import { Header } from "./components/cabecalho";
import {Team} from "./components/team";
import LingAndTech from "./components/ling-and-tech/LingAndTech";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <main className="flex flex-col bg-purple-1"> {/* Não mexer aqui por favor! */}
      <Header />
      <HeroSection />
      <Benefits />
      <LingAndTech />
      <Team />
      <AboutProject />
      <Comments />
      <Footer />
    </main>
  </React.StrictMode>
);
