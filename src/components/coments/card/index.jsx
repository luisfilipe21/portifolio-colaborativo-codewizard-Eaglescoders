import axios from "axios";
import { useEffect, useState } from "react";

export default function Card() {

  const [allComments, setallComments]= useState([])

  useEffect(()=>{
    const getAllComments = async () =>{
      const response = await axios.get('http://localhost:3001/comments/get')
      const dataResponse = await response.data ;
      setallComments(dataResponse)
    }
    getAllComments()
  },[])
  return (
    <div className="flex gap-4">
        {
      allComments.map(({name, githubuser, avatar, comment}, index) =>(
        <>
            <div key={index} className=" bg-green-200 flex flex-col gap-8 p-9 rounded-2xl  dark:bg-purple-2 w-small lg:w-extraMedium ">
      
      <p className="text-mobile-extraMini font-bold leading-4 text-gray-1 lg:leading-desktop-larger lg:text-desktop-extraMini">
        &#34;{comment}&#34;
      </p>
      <div className="flex items-center gap-2.5">
        <div className="h-9 w-9 rounded-full bg-black-1 lg:h-14 lg:w-14 overflow-hidden">
          <img src={avatar} alt="Foto dos usuários" />
        </div>
        <div className="flex flex-col dark:text-white-1">
          <span className="text-mobile-extraMini font-bold lg:text-desktop-extraSmall">
            {name}
          </span>
          <span className="text-mobile-mini lg:text-desktop-mini">{githubuser}</span>
        </div>
      </div>
    </div>
        </>
      ))
    }
    </div>
  );
}

