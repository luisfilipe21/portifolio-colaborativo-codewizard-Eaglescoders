export function SectionAbout({ content, imgSrc, title }){
    return (
        <div className="w-full h-auto md:h-48 flex flex-col md:flex-row items-start md:items-center gap-8 dark:bg-purple-2 bg-gray-6 rounded-lg px-[42px] py-8 md:py-0">
            <div className="h-full flex items-start md:items-center justify-start md:justify-center">
                <img src={imgSrc} alt="" className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className="w-full md:w-[75%] flex flex-col text-start">
                <span className="font-semibold">{title}</span>
                <span className="grid">
                    {content?.split('.').map((val, index) => (
                        <span key={index} className="text-sm md:text-base">{val.trim() && `${val.trim()}.`}</span>
                    ))}
                </span>
            </div>
        </div>
    )
}
