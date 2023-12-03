
import Order from "@/components/Order";
import { getDictionary } from "../dictionaries";
import type { Dict } from "@/dictionaries/types";

export default async function Pedido({ params: { lang } }: { params: { lang: string } }) {
    const dict: Dict = await getDictionary(lang);

    return (
        <section className="col-span-full bg-black/50 min-h-[calc(100vh-196px)] lg:min-h-[calc(100vh-148px)]">
            <h1 className="mb-4">{dict.pedidoSection.title}</h1>
            <Order dict={dict} lang={lang} />
        </section>
    )
}