import github from "../../assets/github.svg";
import charmander from "../../assets/charmander.png";

export const Footer = () => {
    return (
        <footer className="bg-rodape-0 rounded-t-3xl">
            <div className="flex p-8 justify-between">

                <div className="flex flex-col md:flex-row md:mr-4">
                    <div>
                        <button className="bg-button-0 w-36 flex items-center text-white gap-1 justify-center p-4 rounded-lg font-inconsolata text-xl">gitub <img src={github} alt="Membro da equipegithub" />
                        </button>
                    </div>
                    <div className="flex flex-col my-4 gap-8 md:flex-row md:pl-4">
                        <a href="#" className="text-sizeParagraphSm font-inconsolata text-white ">Sobre</a>
                        <a href="#" className="text-sizeParagraphSm font-inconsolata text-white ">Equite</a>
                        <a href="#" className="text-sizeParagraphSm font-inconsolata text-white ">Projetos</a>
                        <a href="#" className="text-sizeParagraphSm font-inconsolata text-white ">Participantes</a>
                    </div>
                </div>

                <div className="flex md:w-full">
                    <div className="flex w-24 h-max flex-wrap box-border md:flex-nowrap">
                        <div className="flex items-center h-12">
                            <img src={charmander} alt="Membro da equipe" className="w-12 rounded-full md:z-50" />
                            <img src={charmander} alt="Membro da equipe" className="w-12 rounded-full md:z-40" />
                            <img src={charmander} alt="Membro da equipe" className="w-12 rounded-full md:z-30" />
                            <img src={charmander} alt="Membro da equipe" className="w-12 rounded-full md:z-20" />
                            <img src={charmander} alt="Membro da equipe" className="w-12 rounded-full md:z-10" />
                            <img src={charmander} alt="Membro da equipe" className="w-12 rounded-full md:z-0" />
                        </div>

                        <div className="hidden md:inline-flex md:flex-col bg-red-600 md:w-full">
                            <p className="font-mulish text-white text-xs">Nome dos participantes</p>
                            <p className="font-mulish text-white text-xs">Nome dos participantes</p>
                            <p className="font-mulish text-white text-xs">Nome dos participantes</p>
                            <p className="font-mulish text-white text-xs">Nome dos participantes</p>
                            <p className="font-mulish text-white text-xs">Nome dos participantes</p>
                            <p className="font-mulish text-white text-xs">Nome dos participantes</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-xs text-white font-mulish pb-8 md:text-left md:ml-8">Projeto Frontendfusion - Todos os direitos reservados</p>
        </footer>
    )
}