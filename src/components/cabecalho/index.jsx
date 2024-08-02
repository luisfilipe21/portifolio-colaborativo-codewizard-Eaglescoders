import github from "../../assets/github.svg";
import sol from "../../assets/sol.svg";
import lista from "../../assets/lista.svg";
import clsx from "clsx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export const Header = () => {
  const [list, setList] = useState(false);

  const ListMenu = clsx(
    `font-inconsolata py-1 text-[#ffebeb] cursor-pointer hover:underline`
  );

  const openAndClose = () => {
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
      {list ? (
        <ul className="absolute right-8   w-64 top-20 items-center flex flex-col">
          <li
            className={`${ListMenu} rounded-t-md  bg-[#221c3e]  py-2  flex justify-center w-full hover:bg-[#393062] `}
          >
            <a href="#">Sobre</a>
          </li>
          <li
            className={`${ListMenu} bg-[#221c3e]  py-2 flex justify-center w-full hover:bg-[#393062]`}
          >
            <a href="#">Equipe</a>
          </li>
          <li
            className={`${ListMenu} bg-[#221c3e] py-2 flex justify-center w-full hover:bg-[#393062]`}
          >
            <a href="#">Vantagens</a>
          </li>
          <li
            className={`${ListMenu} bg-[#221c3e] rounded-b-md bg-] py-2 flex justify-center w-full hover:bg-[#393062]`}
          >
            <a href="#">Participantes</a>
          </li>
        </ul>
      ) : (
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
      )}
      {list ? (
        <IoClose color="white" size={35} className="cursor-pointer absolute  right-8 md:hidden" onClick={openAndClose}/>
      ) : (
        <img
          src={lista}
          onClick={openAndClose}
          className="cursor-pointer absolute right-8 md:hidden"
        />
      )}

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
    </header>
  );
};
