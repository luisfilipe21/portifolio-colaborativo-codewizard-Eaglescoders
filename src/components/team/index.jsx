import React from 'react'
import useFetchData from '../../controller/useFetchData';
import Loader from './loader';
import TeamCard from './TeamCard';

const Team = () => {
    const { data, error, loading } = useFetchData('https://sistema-cadastro-dados-portifolio-front-end-fusion.vercel.app/api/EagleCoders');

    if (loading) return <Loader />;
    if (error) return <p className="text-red-500">Tivemos um erro! Tente novamente mais tarde.</p>;

  return (
    <div>
            {data?.people.map((member) => (
                <TeamCard key={member.id} member={member} />
            ))}
    </div>
  )
}

export default Team