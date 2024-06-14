import github from "../../assets/github.svg";
import charmander from "../../assets/charmander.png";

export const Footer = () => {
    return (
        <footer className="bg-rodape-0 w-full rounded-t-3xl">
            <div className="flex p-8 justify-between">

                <div className="flex flex-col md:flex-row md:mr-4">
                    <div>
                        <button className="bg-button-0 w-36 flex items-center text-white gap-1 justify-center p-4 rounded-lg font-inconsolata text-xl">
                            gitub <img src={github} alt="Membro da equipegithub" />
                        </button>
                    </div>
                    <div className="flex flex-col my-4 gap-8 md:flex-row md:pl-4">
                        <a href="#" className="text-sizeParagraphSm font-inconsolata text-white ">Sobre</a>
                        <a href="#" className="text-sizeParagraphSm font-inconsolata text-white ">Equite</a>
                        <a href="#" className="text-sizeParagraphSm font-inconsolata text-white ">Projetos</a>
                        <a href="#" className="text-sizeParagraphSm font-inconsolata text-white ">Participantes</a>
                    </div>
                </div>

                <div className="flex w-24 md:w-full md:justify-end md:max-w-60">
                    <div className="flex h-max box-border gap-8 md:flex-col">
                        <div className="flex flex-wrap items-center h-12 relative md:flex-nowrap md:w-full md:max-w-60">
                            <img src={charmander} alt="Membro da equipe" className="w-8 rounded-full md:z-0 md:absolute md:right-[105px] lg:w-12 lg:right-40 " />
                            <img src={charmander} alt="Membro da equipe" className="w-8 rounded-full md:z-10 md:absolute md:right-[85px] lg:w-12 lg:right-32 " />
                            <img src={charmander} alt="Membro da equipe" className="w-8 rounded-full md:z-20 md:absolute md:right-[65px] lg:w-12 lg:right-24 " />
                            <img src={charmander} alt="Membro da equipe" className="w-8 rounded-full md:z-30 md:absolute md:right-[45px] lg:w-12 lg:right-16 " />
                            <img src={charmander} alt="Membro da equipe" className="w-8 rounded-full md:z-40 md:absolute md:right-[25px] lg:w-12 lg:right-8 " />
                            <img src={charmander} alt="Membro da equipe" className="w-8 rounded-full md:z-50 md:absolute md:right-[5px]  lg:w-12 lg:right-0 "  />
                        </div>

                        <div className="hidden gap-0.5 md:inline-flex md:flex-col md:max-w-60 justify-center">
                            <p className="font-mulish text-white text-xs">Dinho silwa - Webdesigner & enginer</p>
                            <p className="font-mulish text-white text-xs">Davi santana - Webdesigner & enginer</p>
                            <p className="font-mulish text-white text-xs">Mercia Freitas - Webdesigner</p>
                            <p className="font-mulish text-white text-xs">Nico silva - WebEnginer</p>
                            <p className="font-mulish text-white text-xs">Ricardo gomes - webdesigner</p>
                            <p className="font-mulish text-white text-xs">Jonh Doe - Webdevelopemet</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-xs text-white font-mulish pb-8 md:text-left md:ml-8">Projeto Frontendfusion - Todos os direitos reservados</p>
        </footer>
    )
}