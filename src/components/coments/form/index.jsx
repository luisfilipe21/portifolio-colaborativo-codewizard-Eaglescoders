import { useRef, useState } from "react";
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { BiEraser, BiUser } from "react-icons/bi";
import { ImInfo } from "react-icons/im";
import { CommentPolicy } from "./commentpolicy.jsx";
import { BsEye } from "react-icons/bs";
import Filter from 'bad-words';





export default function Form() {


  const getBadWords = () =>{
    const words = import.meta.env.VITE_BAD_WORDS || ''
    return words.split(',');
  }
  
  const filterTeste = new Filter()
  const badwords = getBadWords()
  const wordsToArray = []
  wordsToArray.push(...badwords)






  const [star, setstar] = useState();
  const [hover, sethover] = useState()

  const [formValues, setformValues] = useState({
    avatar: '',

  })


  const validationComments = Yup.object().shape({
    name: Yup.string().required("Digite o nome"),
    email: Yup.string().required("digite o email"),
    comment: Yup.string().required("Digite o comentário"),
    rate: Yup.string().required("Escola uma Estrela"),
    githubuser: Yup.string(),
    avatar: Yup.string()
  })

  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(validationComments)
  })




  const file = useRef();

  const staticData = {
    name: "Guido van Rossum",
    githubuser: "guidovanrossum",
    function: "Criador do Python",
    coment:
      "Vejo um potencial incrível no 'Frontend Fusion'. A colaboração é a essência do avanço tecnológico, e vocês capturaram isso de forma brilhante. Achei inspirador. Recomendo focar na escalabilidade do projeto para garantir que a estrutura possa crescer sem comprometer a qualidade.",
    img: "./src/assets/guido.png",
  };

  const clean = () => {
    setformValues({
      avatar: '',
      name: '',
      email: '',
      comment: '',
      rate: '',
      githubuser: ''
    });
  };
  

  const onSubmit = async (data) => {

    try {
      const { name, email, comment, avatar, rate, githubuser } = data
      const response = await axios.post('/api/comments/send', {
        name, email, comment, avatar, rate, githubuser
      });
      if (response.status === 201) {
        toast("✅ Sucesso!")
      } else {
        toast("Falha")


      }
    } catch (error) {
      console.log(error)
    }
  };


  const handleInputsChanges = (e) => {
    const { name, value } = e.target
    const verifyWords = wordsToArray.includes(value)

    if(verifyWords){
      alert("Não pode DIgitar Palavrão aqui ô Filho da Puta ")
    }
    setformValues(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const getGithubUserDetails = async (e) => {

    const response = await axios.get(`https://api.github.com/users/${formValues.githubuser}`)
    const avatar = response.data.avatar_url
    setformValues(prevState => ({
      ...prevState,
      avatar: avatar
    }))

  }






  return (
    <>
      <Toaster toastOptions={{ style: { fontSize: '24px' }, success: { duration: 4000 } }} />
      <form
        className="flex justify-center gap-8"
        //will no longer be necessary as we will use {...register} to manipulate the input value
        // onSubmit={(e) => sendInformation(e)}
        onSubmit={handleSubmit(onSubmit)}
        onChange={handleInputsChanges}
      >
        <fieldset className="flex flex-col w-extraSmall mx-auto gap-3.5 lg:mx-0 lg:w-extraLarger">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Nome"
              className="w-full bg-inherit h-9 rounded-lg border border-blue-1 p-2.5 outline-none text-purple-1 dark:text-white-1 font-inter lg:h-14 lg:px-8 lg:max-w-min"
              //will no longer be necessary as we will use {...register} to manipulate the input value
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              {...register("name")}
            />
            {errors.name && <span className="text-red-600 px-4 bg-red-300 py-2 font-bold">{errors.name.message}</span>}



            <input
              type="text"
              placeholder="githubuser"
              className="w-full bg-inherit h-9 rounded-lg border border-blue-1 p-2.5 outline-none text-purple-1 dark:text-white-1 font-inter lg:h-14 lg:px-8 lg:max-w-min"
              //will no longer be necessary as we will use {...register} to manipulate the input value
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              {...register("githubuser")}
              onBlur={getGithubUserDetails}

            />
            {errors.githubuser && <span className="text-red-600 px-4 bg-red-300 py-2 font-bold">{errors.githubuser.message}</span>}

          </div>


          <input
            type="email"
            placeholder="email@exemplo.com"
            className="w-full bg-inherit h-9 rounded-lg border border-blue-1 p-2.5 outline-none text-purple-1 dark:text-white-1 font-inter lg:h-14 lg:px-8 "
            // value={mail}
            // onChange={(e) => setMail(e.target.value)}
            //will no longer be necessary as we will use {...register} to manipulate the input value
            // pattern={emailRegex}
            {...register("email")}
          />
          {errors.email && <span className="text-red-600 px-4 bg-red-300 py-2 font-bold">{errors.email.message}</span>}


          <textarea
            name=""
            id=""
            placeholder="Digite o seu comentário"
            className="w-full bg-inherit h-mini rounded-lg border border-blue-1 p-2.5 outline-none text-purple-1 dark:text-white-1 font-inter resize-none lg:h-small lg:px-8 lg:pt-4"
            // value={coment}
            // onChange={(e) => setComent(e.target.value)}
            //will no longer be necessary as we will use {...register} to manipulate the input value
            {...register("comment")}
          ></textarea>

          {errors.comment && <span className="text-red-600 px-4 bg-red-300 py-2 font-bold">{errors.comment.message}</span>}

          {/* <fieldset className="flex mr-auto py-4">
            {
              [...Array(5)].map((star, index) => {
                const currencyStar = index + 1
                return (
                  <label key={index}
                    htmlFor={currencyStar}
                    title={`Classificar o Projeto em ${currencyStar}`}
                    className="cursor-pointer"

                  >
                    <input type="radio"
                      id={currencyStar}
                      className="hidden"
                      onClick={() => sethover(currencyStar)}
                      value={currencyStar}
                      name="rate"
                      onChange={handleInputsChanges}
                      {...register('rate')}
                    />

                    {currencyStar <= (star | hover) ?
                      <FaStar className="text-yellow-400" /> :
                      <FaRegStar className="text-yellow-400" strokeWidth={0.2} />}
                  </label>
                )
              })
            }
          </fieldset> */}

          <div className="flex gap-4 h-9 font-inter lg:hidden">
            <input
              type="submit"
              value="Confirmar"
              className="rounded-lg w-full h-full dark:text-white-1 cursor-pointer px-2.5 dark:bg-blue-1 font-inter"
            />
            <button
              type="button"
              className="rounded-lg w-full h-full dark:text-white-1 cursor-pointer border border-blue-1 p-2.5 flex items-center justify-center font-inter"
              onClick={clean}
            >
              Limpar
            </button>
          </div>
        </fieldset>

        <section className="hidden lg:flex flex-col w-hiper h-auto bg-purple-3 dark:bg-purple-2 rounded-2xl p-9 gap-4">
          <h2 className="flex w-[100%] justify-between px-2 text-white-2 text-[12px] font-bold">
            {!formValues.name ? <span>Todos os Comentários são Publicos</span> : <h2 className="flex items-center gap-2  bg-green-600 px-2 py-1 rounded-md text-white"> <BsEye /> pre-visualização </h2>}
          </h2>
          <textarea
            className="text-purple-1 dark:text-gray-2 text-desktop-extraMini font-normal w-full min-h-36  bg-inherit resize-none outline-none p-2.5 overflow-hidden"
            value={formValues.comment ? `${formValues.comment}` : `"${staticData.coment}"`}
            disabled
          ></textarea>

          <div className="flex items-center gap-2.5">
            <figure className="h-14 w-14 rounded-full bg-black-1 grid place-content-center overflow-hidden">

              {
                formValues.avatar.length > 0 ? <img src={formValues.avatar} alt="" /> :
                  <BiUser className="text-zinc-200" size={32} />

              }

            </figure>
            <div className="flex flex-col text-purple-1 dark:text-white-1">
              <h3 className="text-desktop-extraSmall font-bold">
                {formValues.name ? formValues.name : staticData.name}
              </h3>
              <h4 className="text-desktop-mini">{formValues.githubuser ? formValues.githubuser : staticData.name}</h4>


            </div>
          </div>

          <div className="flex gap-4 h-9 font-inter w-52 self-end">

            <input
              type="submit"
              value="Confirmar"
              className="rounded-lg w-full h-9 text-purple-1 dark:text-white-1 cursor-pointer px-2.5 dark:bg-blue-1 font-inter"
            />
            <button

              type="button"
              className="rounded-lg w-full h-9 text-purple-1 dark:text-white-1 cursor-pointer border border-blue-1 p-2.5 flex items-center justify-center font-inter"
              onClick={clean}
            >
              <BiEraser /> Limpar
            </button>
          </div>
        </section>

      </form>



    </>
  );
}
