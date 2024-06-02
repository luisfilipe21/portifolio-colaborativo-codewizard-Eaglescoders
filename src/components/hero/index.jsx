export const HeroSection = () => {
    return (
        <section className="w-full h-screen">
            <div className="flex justify-center items-center ">
                <div className="w-1/2 h-screen p-12">
                    <div className="flex gap-4 h-3/4">
                        <div className="min-w-40 h-full flex items-center">
                            <div className="bg-black w-full h-48 rounded-2xl">

                            </div>
                        </div>
                        <div className="min-w-40 h-full flex flex-col mt-6">
                            <div className="bg-black w-full h-48 rounded-2xl mb-4">

                            </div>
                            <div className="bg-black w-full h-48 rounded-2xl">

                            </div>
                        </div>
                        <div className="min-w-40 h-full flex flex-col justify-center">
                            <div className="bg-black w-full h-48 rounded-2xl mb-4">

                            </div>
                            <div className="bg-black w-full h-48 rounded-2xl">

                            </div>
                        </div>
                        <div className="min-w-40 h-full flex items-center">
                            <div className="bg-black w-full h-48 rounded-2xl">

                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-end w-1/2">
                    <div className="flex flex-col justify-center items-end">
                        <p>projeto</p>
                        <h2>Frontend Fusion</h2>
                        <p>Codifique o seu futuro hoje!</p>
                    </div>
                    <div className="flex gap-4">
                        <p>imagens</p>
                        <p>imagens</p>
                        <p>imagens</p>
                        <p>imagens</p>
                    </div>
                </div>
            </div>
        </section>
    )
}