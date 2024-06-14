import Card from "./card";
import benefitCard from "../../data/benefits.json";

const Benefits = () => {
  return (
    <section className="flex flex-wrap px-4 justify-around gap-4 w-full my-0 mx-auto md:justify-between md:max-w-medium lg:max-w-larger lg:px-0 lg:justify-center">
      <div className="max-w-sm   pr-8">
        <h2 className="font-black text-purple-1 dark:text-gray-2 border-purple-1 dark:border-purple-3 leading-mobile-ultra pb-4 mb-2 border-x-0 border-t-0 border-solid border-2 text-desktop-extraMedium font-inconsolata lg:text-desktop-extraUltra lg:leading-desktop-ultra lg:pb-8 lg:mb-8">
          Vantagens do <br /> Projeto
        </h2>

        <p className="text-xs font-normal leading-mobile-mini text-black-1 dark:text-gray-1 font-mulish lg:text-lg lg:leading-desktop-larger">
          Participar de um projeto em grupo para aprender programação web
          frontend e desenvolver um portfólio colaborativo oferece uma série de
          vantagens!
        </p>
      </div>

      {benefitCard.map((card) => {
        return (
          <Card
            key={card.title}
            title={card.title}
            text={card.text}
            icon={card.icon}
          />
        );
      })}
    </section>
  );
};

export default Benefits;
