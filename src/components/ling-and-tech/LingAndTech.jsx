import Card from "./card/index";

import HtmlIcon from "../../assets/html-icon.svg";
import CssIcon from "../../assets/css-icon.svg";
import JavaScriptIcon from "../../assets/javascript-icon.svg";
import ReactIcon from "../../assets/react-icon.svg";
import TailwindCssIcon from "../../assets/tailwind-icon.svg";
import GitHubIcon from "../../assets/github-icon.svg";
import GitIcon from "../../assets/git-icon.svg";
import VscodeIcon from "../../assets/vscode-icon.svg";

function LingAndTech() {
  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center bg-[#0f0920] mt-20 mb-10">
      <div className="flex flex-col justify-center items-center pb-8">
        <h1 className="font-inconsolata text-[22px] md:text-[31px] pb-4 text-[#FFFFFF]">
          Linguagens e Tecnologias Usadas
        </h1>
        <div className="w-[306px] md:w-[512px] h-[2px] bg-[#EBEBEB]"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
        <Card title="Html" src={HtmlIcon} alt="Html icon" />
        <Card title="Css" src={CssIcon} alt="Css icon" />
        <Card title="Javascript" src={JavaScriptIcon} alt="JavaScript icon" />
        <Card title="React" src={ReactIcon} alt="React icon" />
        <Card title="Tailwind Css" src={TailwindCssIcon} alt="Tailwind icon" />
        <Card title="GitHub" src={GitHubIcon} alt="GitHub icon" />
        <Card title="Git" src={GitIcon} alt="Git icon" />
        <Card title="Vscode" src={VscodeIcon} alt="Vscode icon" />
      </div>
    </div>
  );
}

export default LingAndTech;