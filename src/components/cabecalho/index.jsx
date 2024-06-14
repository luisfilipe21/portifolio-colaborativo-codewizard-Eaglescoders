import github2 from "../../assets/github2.svg";
import github from "../../assets/github.svg";
import sol from "../../assets/sol.svg";
import lista from "../../assets/lista.svg";
import { useState } from "react";


export const Header = () => {

    const [list, setList] = useState(false);

    const open = () => {
        setList(!list)
    }

    return (
        <header className="w-full mx-auto my-auto sm:max-w-md md:max-w-3xl lg:max-w-5xl">
            <div className="py-6 px-4 flex justify-between items-center md:flex-row-reverse">
                <div className="flex flex-row-reverse gap-8">
                    <button className="bg-buttonHeader-0 flex text-white p-4 w-36 items-center gap-2 justify-center rounded-lg font-inconsolata text-xl">
                        github<img src={github}/>
                    </button>
                    <img src={sol} className="hidden md:flex md:justify-end cursor-pointer" />
                </div>
                <div className="hidden md:flex">
                    <ul className="flex gap-8">
                        <li className="font-inconsolata py-1 text-white cursor-pointer hover:underline"><a href="#">Sobre</a></li>
                        <li className="font-inconsolata py-1 text-white cursor-pointer hover:underline"><a href="#">Equipe</a></li>
                        <li className="font-inconsolata py-1 text-white cursor-pointer hover:underline"><a href="#">Vantagens</a></li>
                        <li className="font-inconsolata py-1 text-white cursor-pointer hover:underline"><a href="#">Participantes</a></li>
                    </ul>
                </div>

                <div className="flex gap-2 md:hidden">
                    <img src={sol} className="cursor-pointer:" />
                    <img src={lista} onClick={open} className="cursor-pointer:"/>
                </div>

                {list ?
                    <div className="absolute right-12 top-20 bg-rodape-0 rounded-md p-4">
                        <ul>
                            <li className="font-inconsolata py-1 text-white cursor-pointer hover:underline"><a href="#">Sobre</a></li>
                            <li className="font-inconsolata py-1 text-white cursor-pointer hover:underline"><a href="#">Equipe</a></li>
                            <li className="font-inconsolata py-1 text-white cursor-pointer hover:underline"><a href="#">Vantagens</a></li>
                            <li className="font-inconsolata py-1 text-white cursor-pointer hover:underline"><a href="#">Participantes</a></li>
                        </ul>
                    </div>
                    : null}
            </div>
        </header>
    )
}