import { useRef, useState } from "react";
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios";

export default function Form() {

  const [formValues, setformValues] = useState({
    avatar: ''
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
    setName("");
    setMail("");
    setComent("");
  };


  const onSubmit = async (data) => {

try{
  const{name, email, comment, avatar ,rate, githubuser } = data
  const response = await axios.post('/api/comments/send', {
    name, email, comment, avatar, rate , githubuser
  });
  if(response.status === 201){
    alert("Comentário enviado")
  }else{
    alert("Falha no Envio")
  }
}catch(error){
  console.log(error)
}
};


  const handleInputsChanges = (e) => {
    const { name, value } = e.target
    setformValues(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const getGithubUserDetails = async (e) => {

    const response = await axios.get(`https://api.github.com/users/${formValues.githubuser}`)
    const avatar = response.data.avatar_url
    setformValues(prevState => ({
      avatar: avatar
    }))

  }



  return (
        <>


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
            type="text"
            placeholder="Classificar"
            className="w-full bg-inherit h-9 rounded-lg border border-blue-1 p-2.5 outline-none text-purple-1 dark:text-white-1 font-inter lg:h-14 lg:px-8 lg:max-w-min"
            //will no longer be necessary as we will use {...register} to manipulate the input value
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            {...register("rate")}
            list="rate-list"
          />
          {errors.githubuser && <span className="text-red-600 px-4 bg-red-300 py-2 font-bold">{errors.githubuser.message}</span>}



          <datalist id="rate-list" className="bg-red-400">
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>

          </datalist>

          {errors.rate && <span className="text-red-600 px-4 bg-red-300 py-2 font-bold">{errors.rate.message}</span>}


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


          <div className="flex gap-4 h-9 font-inter lg:hidden">
            <input
              type="submit"
              value="Confirmar"
              className="rounded-lg w-full h-full dark:text-white-1 cursor-pointer px-2.5 dark:bg-blue-1 font-inter"
            />
            <button
              className="rounded-lg w-full h-full dark:text-white-1 cursor-pointer border border-blue-1 p-2.5 flex items-center justify-center font-inter"
              onClick={clean}
            >
              Limpar
            </button>
          </div>
        </fieldset>

        <div className="hidden lg:flex flex-col w-hiper h-extraLarger bg-purple-3 dark:bg-purple-2 rounded-2xl p-9 gap-4">
          <textarea
            className="text-purple-1 dark:text-gray-2 text-desktop-extraMini font-bold w-full min-h-36  bg-inherit resize-none outline-none p-2.5 overflow-hidden"
            value={formValues.comment ? `${formValues.comment}` : `"${staticData.coment}"`}
            disabled
          ></textarea>

          <div className="flex items-center gap-2.5">
            <div className="h-14 w-14 rounded-full bg-black-1 overflow-hidden">
              <img src={formValues.avatar ? formValues.avatar : "/src/assets/guido.png"} alt="" />
            </div>
            <div className="flex flex-col text-purple-1 dark:text-white-1">
              <h3 className="text-desktop-extraSmall font-bold">
                {formValues.name ? formValues.name : staticData.name}
              </h3>
              {
                formValues.githubuser && <h4 className="text-desktop-mini">@{formValues.githubuser ? formValues.githubuser : staticData.githubuser}</h4>

              }
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
              onClick={clean}
            >
              Limpar
            </button>
          </div>
        </div>

      </form>


    </>
  );
}
