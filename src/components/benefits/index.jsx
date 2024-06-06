import Card from "./card";
import benefitCard from "../../data/benefits.json";

const Benefits = () => {
  return (
    <section className="">
      <div className="">
        <h2 className="">
          Vantagens do <br /> Projeto
        </h2>

        <p className="">
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
