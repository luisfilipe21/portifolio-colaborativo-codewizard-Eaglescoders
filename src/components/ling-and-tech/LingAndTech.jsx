import Card from "./card/index";

import HtmlIcon from "../../public/html-icon.svg";
import CssIcon from "../../public/css-icon.svg";
import JavaScriptIcon from "../../public/javascript-icon.svg";
import ReactIcon from "../../public/react-icon.svg";
import TailwindCssIcon from "../../public/tailwind-icon.svg";
import GitHubIcon from "../../public/github-icon.svg";
import GitHubIconDark from "../../public/github-icon-black.svg";
import GitIcon from "../../public/git-icon.svg";
import VscodeIcon from "../../public/vscode-icon.svg";
import { useDarkMode } from "../../model/darkMode";

function LingAndTech() {
  const {darkMode} = useDarkMode();


  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center  mt-20 mb-10">
      <div className="flex flex-col justify-center items-center pb-8">
        <h1 className="font-inconsolata text-[22px] md:text-[31px] pb-4 dark:text-white-1">
          Linguagens e Tecnologias Usadas
        </h1>
        <div className="w-[306px] md:w-[512px] h-[2px] bg-purple-1 dark:bg-[#EBEBEB]"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
        <Card title="Html" src={HtmlIcon} alt="Html icon" />
        <Card title="Css" src={CssIcon} alt="Css icon" />
        <Card title="Javascript" src={JavaScriptIcon} alt="JavaScript icon" />
        <Card title="React" src={ReactIcon} alt="React icon" />
        <Card title="Tailwind Css" src={TailwindCssIcon} alt="Tailwind icon" />
        
        {darkMode ? <Card title="GitHub" src={GitHubIcon} alt="GitHub icon" />
        :
        <Card title="GitHub" src={GitHubIconDark} alt="GitHub icon" />
         }
        
        <Card title="Git" src={GitIcon} alt="Git icon" />
        <Card title="Vscode" src={VscodeIcon} alt="Vscode icon" />
      </div>
    </div>
  );
}

export default LingAndTech;