import React from 'react'

const TeamButton = ({text, onClick}) => {
  return (
    <button 
        onClick={onClick}   
        className="bg-rodape-0 p-1 w-[197px] rounded h-[35px] text-white">
        {text}
    </button>
  )
}

export default TeamButton