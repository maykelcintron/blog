import { Link } from 'react-router-dom'

export default function Card({id, title, description, image, date}) {
  return (
    <article className="w-[300px] md:h-60 bg-white rounded-lg hover:shadow-orange-600 dark:text-white dark:bg-[#23272e] dark:hover:shadow-orange-600 dark:shadow-lg items-center mx-auto md:flex md:w-[768px] md:pr-4 cursor-pointer hover:shadow-lg hover:transition-all hover:duration-300">
        <img className="md:h-56 md:rounded-l-lg object-cover md:w-1/2 max-w-[300px] rounded-lg md:rounded-none" src={image} alt="" />
        <div className="px-4 pb-4">
            <span className="text-sm text-gray-500 dark:text-gray-400 inline-block mt-5 mb-2">{date}</span>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="w-full text-justify text-sm/relaxed text-gray-500 dark:text-gray-400 pt-2">{description}</p>
            <Link 
              to={`/blog/${id}`} 
              className="text-orange-600 text-[15px] inline-block pt-2"
            >
              Leer más
            </Link>
        </div>
    </article>
  )
}