import axios from "axios"
import { useEffect, useState } from "react"

export const Teste = () => {

  const [comments, setComments] = useState([])

  useEffect(()=>{
    const getComments = async () =>{
      const response = await axios.get('http://localhost:3001/comments/get');
      const allcomments = await response.data
      console.log(allcomments)
      setComments(allcomments)
    }

    getComments()
  },[])

  return(<>
  <span className="w-full p-4 bg-white-1">
    <ul className="flex gap-2 flex-col">
    {
      comments.map(({name, comment
      }, index) =>(
        <>
                <li key={index}>{name}</li>
                <p>{comment}</p>
        </>
      ))
    }
    </ul>
  </span>
  
  </>)

}