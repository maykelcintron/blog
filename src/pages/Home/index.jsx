import Header from '../../components/Header'
import Card from '../../components/Card'
import cards from '../../helpers/cards.js'

export default function Home() {
    return (
    <>
        <Header />
        <section className="dark:bg-[#1e2229] pt-28 ">
            <h1 id="title" className="mt-10 dark:text-white text-4xl font-bold text-center">DISEÑO DE ARCHIVOS Y BASES DE DATOS.</h1>
            <div className="grid gap-10 mt-10 pb-10">
            {cards.map((card) => (
                <Card key={card.id}
                    id={card.id}
                    title={card.title} 
                    description={card.description} 
                    image={card.image} 
                    date={card.date} 
                />
            ))}
            </div>
        </section>
    </>
    )
}
