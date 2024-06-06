import PropTypes from "prop-types";

const Card = ({ title, text, icon }) => {
  return (
    <div className="">
      <h2 className="">
        <img
          src={icon}
          alt="Icone do cartão"
          className=""
        />
        {title}
      </h2>
      <p className="">
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
