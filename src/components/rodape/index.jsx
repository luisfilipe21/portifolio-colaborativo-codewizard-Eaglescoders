import github from "../../assets/github.svg";
import useFetchData from "../../controller/useFetchData";

export const Footer = () => {
    const { data } = useFetchData('https://sistema-cadastro-dados-portifolio-front-end-fusion.vercel.app/api/EagleCoders');

    return (
        <footer className="bg-rodape-0 w-full rounded-t-3xl">
            <div className="flex p-8 justify-between">

                <div className="flex flex-col md:flex-row md:mr-4">
                    <div>
                        <button className="bg-blue-1 text-white-1 w-36 flex items-center text-white gap-1 justify-center p-4 rounded-lg font-inconsolata text-xl">
                            github <img src={github} alt="Membro da equipegithub" />
                        </button>
                    </div>
                    <div className="flex flex-col my-4 gap-8 md:flex-row md:pl-4 text-white-1">
                        <nav >
                            <ul className="flex flex-col my-4 gap-8 md:flex-row md:pl-4">
                                <li>
                                    <a href="#" className="text-sizeParagraphSm font-inconsolata text-white ">Sobre</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sizeParagraphSm font-inconsolata text-white ">Equipe</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sizeParagraphSm font-inconsolata text-white ">Projetos</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sizeParagraphSm font-inconsolata text-white ">Participantes</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="flex w-24 md:w-full md:justify-end md:max-w-60">
                    <div className="flex h-max box-border gap-8 md:flex-col">
                        <figure className="flex flex-wrap items-center h-12 relative md:flex-nowrap md:w-full md:max-w-60">

                            {/* {data?.people.map((integrante, index) =>
                                <img
                                    className={`w-8 rounded-full md:zIndex${index} md:absolute md:marginRight${index} lg:w-12 lg:right-40`}
                                    style={{ 
                                        zIndex: index, 
                                        marginRight: `${index*10}px`
                                      }} 
                                    key={integrante.id}
                                    src={integrante.githubImgUrl}
                                    alt={integrante.name}
                                    title={integrante.name}
                                />
                            )} */}

                            <img src={data.people[0].githubImgUrl} alt={data.people[0].name} title={data.people[0].name} className="w-8 rounded-full md:z-0 md:absolute md:right-[105px] lg:w-12 lg:right-40 " />
                            <img src={data.people[1].githubImgUrl} alt={data.people[1].name} title={data.people[1].name} className="w-8 rounded-full md:z-10 md:absolute md:right-[85px] lg:w-12 lg:right-32 " />
                            <img src={data.people[2].githubImgUrl} alt={data.people[2].name} title={data.people[2].name} className="w-8 rounded-full md:z-20 md:absolute md:right-[65px] lg:w-12 lg:right-24 " />
                            <img src={data.people[3].githubImgUrl} alt={data.people[3].name} title={data.people[3].name} className="w-8 rounded-full md:z-30 md:absolute md:right-[45px] lg:w-12 lg:right-16 " />
                            <img src={data.people[4].githubImgUrl} alt={data.people[4].name} title={data.people[4].name} className="w-8 rounded-full md:z-40 md:absolute md:right-[25px] lg:w-12 lg:right-8 " />
                            <img src={data.people[0].githubImgUrl} alt={data.people[0].name} title={data.people[0].name} className="w-8 rounded-full md:z-50 md:absolute md:right-[5px]  lg:w-12 lg:right-0 " />
                        </figure>

                        <div className="hidden gap-0.5 md:inline-flex md:flex-col md:max-w-60 justify-center text-white-1">

                            {data?.people.map((integrante) =>
                                <p
                                    className="font-mulish text-xs"
                                    key={integrante.id}>
                                    {integrante.name} - {integrante.subTitle}
                                </p>)}
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-xs  font-mulish pb-8 md:text-left md:ml-8 text-white-1">
                Projeto Frontendfusion - Todos os direitos reservados
            </p>
        </footer>
    )
}