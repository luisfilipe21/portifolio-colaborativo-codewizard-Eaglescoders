import React from 'react'
import useFetchData from '../../controller/useFetchData';
import Loader from './loader';
import TeamCard from './TeamCard';

export const Team = () => {
    const { data, error, loading } = useFetchData('https://sistema-cadastro-dados-portifolio-front-end-fusion.vercel.app/api/EagleCoders');

    if (loading) return <Loader />;
    if (error) return <p className="text-red-500">Tivemos um erro! Tente novamente mais tarde.</p>;

    // console.log(data)
  return (
    <div className='mt-28 mb-10'>

            {data?.people.map((member) => (
                <TeamCard key={member.id} member={member} />
            ))}
    </div>
  )
}

