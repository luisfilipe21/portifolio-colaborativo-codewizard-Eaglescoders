import useFetchData from '../../controller/useFetchData';
import Loader from './loader';
import TeamCard from './TeamCard';
export const Team = () => {
    const { data, error, loading } = useFetchData(import.meta.env.VITE_API_URL_GET_DADOS_CADASTRO);

    if (loading) return <Loader />;
    if (error) return <p className="text-red-500">Tivemos um erro! Tente novamente mais tarde.</p>;


  return (
    <div className='mt-28 mb-10'>

            {data?.people.map((member) => (
                <TeamCard key={member.id} member={member} />
                
            ))}
    </div>
  )
}

