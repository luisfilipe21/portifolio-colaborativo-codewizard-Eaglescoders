import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind.svg";
import js from "../../assets/js.svg";
import vite from "../../assets/vite.svg";


export const HeroSection = () => {
    return (
        <section className="w-full h-screen max-w-5xl mx-auto my-auto bg-blue-900">
            <div className="flex justify-between h-full w-full p-8">
                <div className="h-full flex">
                    <div className="flex gap-4 items-center">
                        
                        <div className="flex ">
                            <div className="w-28 h-40 bg-black rounded-3xl mb-32">

                            </div>
                        </div>
                        <div className="flex flex-col mb-64">
                            <div className="w-28 h-40 bg-black rounded-3xl mb-4">

                            </div>
                            <div className="w-28 h-40 bg-black rounded-3xl">

                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="w-28 h-40 bg-black rounded-3xl mb-4">

                            </div>
                            <div className="w-28 h-40 bg-black rounded-3xl">

                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-28 h-40 bg-black rounded-3xl ">

                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-end">
                    <div className="flex flex-col justify-center items-end">
                        <p className="font-inconsolata text-gray-0  text-sizeParagraph font-medium">projeto</p>
                        <h2 className="font-zen text-sizeTitle font-normal text-white">Frontend Fusion</h2>
                        <p className="font-inconsolata text-gray-0 text-sizeParagraph text-s">Codifique o seu futuro hoje!</p>
                    </div>
                    <div className="flex gap-4 mt-8">
                        <img src={react}/>
                        <img src={vite}/>
                        <img src={js}/>
                        <img src={tailwind}/>
                    </div>

                </div>
            </div>
        </section>
    )
}