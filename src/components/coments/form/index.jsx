import { useRef, useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [coment, setComent] = useState("");

  const file = useRef();

  const staticData = {
    name: "Guido van Rossum",
    function: "Criador do Python",
    coment:
      "Vejo um potencial incrível no 'Frontend Fusion'. A colaboração é a essência do avanço tecnológico, e vocês capturaram isso de forma brilhante. Achei inspirador. Recomendo focar na escalabilidade do projeto para garantir que a estrutura possa crescer sem comprometer a qualidade.",
    img: "./src/assets/guido.png",
  };

  const clean = () => {
    setName("");
    setMail("");
    setComent("");
  };

  async function API() {
    const url = await fetch("http://localhost:3000/coments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        function: "Desenvolvedor Front-end",
        email: mail,
        coment: coment,
        img: "caminho-da-imagem",
      }),
    });

    return url;
  }

  async function sendInformation(e) {
    e.preventDefault();

    await API();
    clean();
  }

  const upLoad = () => {};

  const emailRegex = "^[a-zA-Z][a-zA-Z0-9]{3,}@[a-zA-Z]{3,}.[a-zA-Z]{2,}$";

  return (
    <form
      className="flex justify-center gap-8"
      onSubmit={(e) => sendInformation(e)}
    >
      <fieldset className="flex flex-col w-extraSmall mx-auto gap-3.5 lg:mx-0 lg:w-extraLarger">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Nome"
            className="w-full bg-inherit h-9 rounded-lg border border-blue-1 p-2.5 outline-none text-purple-1 dark:text-white-1 font-inter lg:h-14 lg:px-8 lg:max-w-min"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <>
            <label
              htmlFor="file"
              className="hidden bg-black-1 w-40 h-14 rounded-lg cursor-pointer text-gray-1 lg:flex items-center justify-center gap-4"
              onClick={(e) => upLoad(e)}
            >
              <img src="src/assets/upload.svg" alt="Icone de Upload" />
              Upload
            </label>
            <input
              type="file"
              name=""
              id="file"
              className="hidden"
              ref={file}
            />
          </>
        </div>

        <input
          type="email"
          placeholder="email@exemplo.com"
          className="w-full bg-inherit h-9 rounded-lg border border-blue-1 p-2.5 outline-none text-purple-1 dark:text-white-1 font-inter lg:h-14 lg:px-8 "
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          pattern={emailRegex}
        />
        <textarea
          name=""
          id=""
          placeholder="Digite o seu comentário"
          className="w-full bg-inherit h-mini rounded-lg border border-blue-1 p-2.5 outline-none text-purple-1 dark:text-white-1 font-inter resize-none lg:h-small lg:px-8 lg:pt-4"
          value={coment}
          onChange={(e) => setComent(e.target.value)}
        ></textarea>

        <div className="flex gap-4 h-9 font-inter lg:hidden">
          <input
            type="submit"
            value="Confirmar"
            className="rounded-lg w-full h-full dark:text-white-1 cursor-pointer px-2.5 dark:bg-blue-1 font-inter"
          />
          <button
            className="rounded-lg w-full h-full dark:text-white-1 cursor-pointer border border-blue-1 p-2.5 flex items-center justify-center font-inter"
            onClick={(e) => clean(e)}
          >
            Limpar
          </button>
        </div>
      </fieldset>

      <div className="hidden lg:flex flex-col w-hiper h-extraLarger bg-purple-3 dark:bg-purple-2 rounded-2xl p-9 gap-4">
        <textarea
          className="text-purple-1 dark:text-gray-2 text-desktop-extraMini font-bold w-full min-h-36  bg-inherit resize-none outline-none p-2.5 overflow-hidden"
          value={coment !== "" ? `"${coment}"` : `"${staticData.coment}"`}
          disabled
        ></textarea>

        <div className="flex items-center gap-2.5">
          <div className="h-14 w-14 rounded-full bg-black-1 overflow-hidden">
            <img src="/src/assets/guido.png" alt="" />
          </div>
          <div className="flex flex-col text-purple-1 dark:text-white-1">
            <span className="text-desktop-extraSmall font-bold">
              {name !== "" ? name : staticData.name}
            </span>
            <span className="text-desktop-mini">{staticData.function}</span>
          </div>
        </div>

        <div className="flex gap-4 h-9 font-inter w-52 self-end">
          <input
            type="submit"
            value="Confirmar"
            className="rounded-lg w-full h-9 text-purple-1 dark:text-white-1 cursor-pointer px-2.5 dark:bg-blue-1 font-inter"
          />
          <button
            className="rounded-lg w-full h-9 text-purple-1 dark:text-white-1 cursor-pointer border border-blue-1 p-2.5 flex items-center justify-center font-inter"
            onClick={(e) => clean(e)}
          >
            Limpar
          </button>
        </div>
      </div>
    </form>
  );
}
