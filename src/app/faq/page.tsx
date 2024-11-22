'use client'
import FAQCard from "@/components/faq/FAQCard"
import { faqs } from "@/utils/FAQsQuestions"
import { useState } from "react"

const FaqPage = () => {

  const [tarjeta, setTarjeta] = useState<number>(0)

  const handleClick = (id: number) => {
    if(id === 10) return null

    setTarjeta(id)
  }

  return (
    <main>
        <h1>Preguntas Frecuentes</h1>

        <section className="grid grid-cols-12 gap-4 mb-8">
          {faqs.map((i, index) => <FAQCard key={index} id={index} title={i.title} onClick={handleClick}/>)}
        </section>

        <section className="flex flex-col">
          <FAQCard title={faqs[tarjeta].title} id={10} onClick={handleClick}>
            {faqs[tarjeta].label}
          </FAQCard>
        </section>
    </main>
  )
}

export default FaqPage