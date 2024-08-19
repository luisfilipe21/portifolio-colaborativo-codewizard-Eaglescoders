import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind.svg";
import js from "../../assets/js.svg";
import vite from "../../assets/vite.svg";

import useFetchData from "../../controller/useFetchData";

export const HeroSection = () => {
  const { data } = useFetchData(
    import.meta.env.VITE_API_URL_GET_DADOS_CADASTRO
  );

  return (
    <section
      className="w-full self-center gap-10  pb-16 px-1  flex items-center justify-between max-w-[1300px] flex-col-reverse
      lg:flex-row
      lg:pb-40 py-20
      lg:px-10
    "
    >
      <div className="flex  gap-2 md:gap-4">
        <figure className="flex items-center justify-center ">
          <img
            src={data?.people[0].githubImgUrl}
            alt={data?.people[0].name}
            title={data?.people[0].name}
            className="w-24  rounded-2xl md:w-32 "
          />
        </figure>
        <figure className="flex  flex-col items-center justify-center gap-2 md:gap-4">
          <img
            src={data?.people[1].githubImgUrl}
            alt={data?.people[1].name}
            title={data?.people[1].name}
            className="w-24   rounded-2xl md:w-32 "
          />
          <img
            src={data?.people[2].githubImgUrl}
            alt={data?.people[2].name}
            title={data?.people[2].name}
            className="w-24   rounded-2xl md:w-32 "
          />
        </figure>
        <figure className="flex flex-col mt-6 items-center gap-2  md:gap-4">
          <img
            src={data?.people[3].githubImgUrl}
            alt={data?.people[3].name}
            title={data?.people[3].name}
            className=" w-24  rounded-2xl md:w-32 "
          />
          <img
            src={data?.people[4].githubImgUrl}
            alt={data?.people[4].name}
            title={data?.people[4].name}
            className=" w-24    rounded-2xl md:w-32 "
          />
        </figure>
        <figure className="flex mt-6  items-center justify-center">
          <img
            src={data?.people[4].githubImgUrl}
            alt={data?.people[4].name}
            title={data?.people[4].name}
            className=" w-24    rounded-2xl md:w-32 "
          />
        </figure>
      </div>

      <div className="flex flex-col justify-center md:gap-4">
        <div className="flex flex-col justify-center items-center md:items-center">
          <p className="font-inconsolata text-gray-0 font-medium text-xl md:text-sizeParagraph">
            projeto
          </p>
          <h2 className="font-zen font-normal text-white text-[26px]  md:text-sizeTitle text-gray-0 ">
            Frontend Fusion
          </h2>
          <p className="font-inconsolata text-gray-0 text-lg lg:text-sizeParagraph">
            Codifique o seu futuro hoje!
          </p>
        </div>

        <div className="flex mt-6 gap-8 items-center self-center ">
          <img src={react} className="w-10 md:w-14" />
          <img src={vite} className="w-10 md:w-14" />
          <img src={js} className="w-10 md:w-14" />
          <img src={tailwind} className="w-10 md:w-14" />
        </div>
      </div>
    </section>
  );
};
