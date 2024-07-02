import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HeroSection } from "./components/hero";
import { Footer } from "./components/rodape";
import { AboutProject } from "./components/about-project";
import Benefits from "./components/benefits";
import Comments from "./components/coments";
import Team from "./components/team";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <main className="flex flex-col  bg-blueBg-0"> {/* Não mexer aqui por favor! */}
      <HeroSection />
      <Benefits />
      <span>[Coloque aqui a sesão de tech-and-lang]</span>
      <Team />
      <AboutProject />
      <Comments />
      <Footer />
      <main />

    </main>
  </React.StrictMode>
);
