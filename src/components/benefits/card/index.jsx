import PropTypes from "prop-types";

const Card = ({ title, text, icon }) => {
  return (
    <div className="bg-white-2 dark:bg-purple-2 drop-shadow-customized dark:drop-shadow-none rounded-lg flex flex-col gap-2 p-8   w-medium h-extraSmall lg:gap-4 lg:h-larger">
      <h2 className="text-base font-bold flex gap-2.5  font-mulish text-purple-1 dark:text-gray-3 lg:text-lg lg:gap-1.5">
        <img
          src={`./src/assets/icons/${icon}.svg`}
          alt="Icone do cartão"
          className="h-6"
        />
        {title}
      </h2>
      <p className="text-xs font-normal leading-mobile-medium text-purple-1 dark:text-purple-3 font-mulish lg:text-desktop-extraMini lg:leading-desktop-larger">
        {text}
      </p>
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
};
