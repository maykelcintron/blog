import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import cards from '../../helpers/cards'
import { Data1, Data2, Data3 } from '../../components/Data'

export default function Blog() {
  const { id } = useParams();
  
  const card = cards.find(card => card.id == id)

  return (
    <>
      <Header />
      <div className='dark:bg-[#1e2229] pt-10'>
        <img className="w-full md:h-[600px] object-cover" src={card.image} />
        <div className="max-w-[968px] p-10">
          <h1 className="text-4xl font-bold dark:text-white mb-3">{card.title}</h1>
          <p className="text-justify text-black dark:text-gray-400 mb-3">{card.description}</p>
        { card.id == 1 ? <Data1 /> : 
          card.id == 2 ? <Data2 /> : <Data3 />}
        </div>
      </div>
    </>
  )
}