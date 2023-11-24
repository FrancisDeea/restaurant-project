import { Dict } from "@/dictionaries/types";

export default function DinamicTextSection({ dict }: { dict: Dict }) {

    return (
        <section className="lg:col-auto overflow-hidden leading-[5.8rem] bg-dinamicInfo saturate-[1.3] flex flex-col justify-center order-4 lg:order-none shadow-lg">
            <h2 className="dinamic-text bg-dinamicText1 animate-duration-[20s]">{dict.dinamicTextSection.text1}</h2>
            <p className="dinamic-text bg-dinamicText2 animate-duration-[28s] reverse">{dict.dinamicTextSection.text2}</p>
            <h3 className="dinamic-text bg-dinamicText3 animate-duration-[18s]">{dict.dinamicTextSection.text3}</h3>
            <p className="dinamic-text bg-dinamicText4 animate-duration-[25s] reverse">{dict.dinamicTextSection.text4}</p>
        </section>
    )
}