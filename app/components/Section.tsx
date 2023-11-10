import { PropsWithChildren } from "react"

interface SectionProps{
    id: string,
    title: string

}

export default function Section({ id, title, children }:PropsWithChildren<SectionProps>) {
    return (
        <section id={ id } className="section">
            <h2 className="text-xl font-bold mt-6 mb-4 border-b text-gray-900">{title}</h2>
            <div className="mb-6">
                { children }
            </div>
        </section>
    )
}