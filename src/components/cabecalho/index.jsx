import github from "../../assets/github.svg";
import sol from "../../assets/sol.svg";
import lista from "../../assets/lista.svg";
import clsx from "clsx";
import { useState } from "react";

export const Header = () => {
  const [list, setList] = useState(false);

  const ListMenu = clsx(
    `font-inconsolata py-1 text-[#ffffff] cursor-pointer hover:underline`
  );

  const open = () => {
    setList(!list);
  };

  return (
    <header
      className={`
        w-full flex  items-center gap-10 flex-row
        xs:pl-5
        md:justify-center
    extraLg:pr-36 py-5 extraLg:justify-end
    relative
    
    `}
    >
      <ul className="flex gap-16 hidden md:flex">
        <li className={`${ListMenu}`}>
          <a href="#">Sobre</a>
        </li>
        <li className={`${ListMenu}`}>
          <a href="#">Equipe</a>
        </li>
        <li className={`${ListMenu}`}>
          <a href="#">Vantagens</a>
        </li>
        <li className={`${ListMenu}`}>
          <a href="#">Participantes</a>
        </li>
      </ul>

      <img
        src={lista}
        onClick={open}
        className="cursor-pointer absolute right-8 md:hidden"
      />

      <img
        src={sol}
        className="cursor-pointer right-24 absolute flex md:sticky "
      />
      <button
        className="bg-green-1 text-white-1 flex text-white p-4 w-36 items-center gap-2 justify-center rounded-lg font-inconsolata text-xl
        "
      >
        github
        <img src={github} />
      </button>

      {list ? (
        <div className="absolute right-12 top-20 bg-rodape-0 rounded-md p-4">
          <ul>
            <li className="font-inconsolata py-1 text-white cursor-pointer hover:underline">
              <a href="#">Sobre</a>
            </li>
            <li className="font-inconsolata py-1 text-white cursor-pointer hover:underline">
              <a href="#">Equipe</a>
            </li>
            <li className="font-inconsolata py-1 text-white cursor-pointer hover:underline">
              <a href="#">Vantagens</a>
            </li>
            <li className="font-inconsolata py-1 text-white cursor-pointer hover:underline">
              <a href="#">Participantes</a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
};
