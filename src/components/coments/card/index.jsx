import PropTypes from "prop-types";

export default function Card({ text, name, func, src }) {
  return (
    <div className="flex flex-col gap-8 p-9 rounded-2xl bg-purple-3 dark:bg-purple-2 w-small lg:w-extraMedium ">
      <div className="flex gap-1">
        <img src="./src/assets/icons/star-full.svg" alt="" />
        <img src="./src/assets/icons/star-full.svg" alt="" />
        <img src="./src/assets/icons/star-full.svg" alt="" />
        <img src="./src/assets/icons/star-full.svg" alt="" />
        <img src="./src/assets/icons/star-full.svg" alt="" />
      </div>
      
      <p className="text-mobile-extraMini font-bold leading-4 text-gray-1 lg:leading-desktop-larger lg:text-desktop-extraMini">
        &#34;{text}&#34;
      </p>
      <div className="flex items-center gap-2.5">
        <div className="h-9 w-9 rounded-full bg-black-1 lg:h-14 lg:w-14 overflow-hidden">
          <img src={src} alt="Foto dos usuários" />
        </div>
        <div className="flex flex-col dark:text-white-1">
          <span className="text-mobile-extraMini font-bold lg:text-desktop-extraSmall">
            {name}
          </span>
          <span className="text-mobile-mini lg:text-desktop-mini">{func}</span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  func: PropTypes.string,
  src: PropTypes.string,
};
