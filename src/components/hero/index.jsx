import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind.svg";
import js from "../../assets/js.svg";
import vite from "../../assets/vite.svg";
import charmander from "../../assets/charmander.png";


export const HeroSection = () => {
    return (
        <section className="w-full max-w-5xl mx-auto my-auto sm:max-w-md md:max-w-4xl lg:max-w-5xl">
            <div className="flex flex-col-reverse items-center p-8 gap-8 md:flex-row md:justify-between">
                <div className="h-full flex md:justify-center">
                    <div className="flex items-center gap-2 lg:gap-4">
                        <div className="flex">
                            <div className="w-16 h-20 rounded-2xl mb-12 md:w-20 md:h-28 md:mb-34">
                                <img src={charmander} alt="" className="w-full h-full rounded-2xl" />
                            </div>
                        </div>
                        <div className="flex flex-col mb-16 md:mb-30">
                            <div className="w-16 h-20 md:w-20 md:h-28 bg-black rounded-2xl mb-4">
                                <img src={charmander} alt="" className="w-full h-full rounded-2xl" />
                            </div>
                            <div className="w-16 h-20 md:w-20 md:h-28 bg-black rounded-2xl">
                                <img src={charmander} alt="" className="w-full h-full rounded-2xl" />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center ">
                            <div className="w-16 h-20 md:w-20 md:h-28 bg-black rounded-2xl mb-4">
                                <img src={charmander} alt="" className="w-full h-full rounded-2xl" />
                            </div>
                            <div className="w-16 h-20 md:w-20 md:h-28 bg-black rounded-2xl">
                                <img src={charmander} alt="" className="w-full h-full rounded-2xl" />
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <div className="w-16 h-20 rounded-2xl mb-12 md:w-20 md:h-28 md:mb-34">
                                <img src={charmander} alt="" className="w-full h-full rounded-2xl" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center md:gap-4">
                    <div className="flex flex-col justify-center items-center md:items-end">
                        <p className="font-inconsolata text-gray-0 font-medium text-lg lg:text-sizeParagraph">projeto</p>
                        <h2 className="font-zen font-normal text-white text-3xl lg:text-sizeTitle text-gray-0">Frontend Fusion</h2>
                        <p className="font-inconsolata text-gray-0 text-lg lg:text-sizeParagraph">Codifique o seu futuro hoje!</p>
                    </div>

                    <div className="flex justify-end">
                        <div className="flex mt-8 gap-12 md:gap-4">
                            <img src={react} />
                            <img src={vite} />
                            <img src={js} />
                            <img src={tailwind} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}