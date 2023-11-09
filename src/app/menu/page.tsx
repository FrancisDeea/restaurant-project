import Category from "@/components/category";

export default function Menu() {
    const base = "/assets/platos"

    return (
        <section className="col-span-full p-0 border-none">
            <h1 className="text-sm font-extrabold text-dark">La carta del D&apos;Graná tapas (o el menú, pijo)</h1>
            <p className="text-4xl font-black mb-4 text-medium">¿Qué te apetece comer hoy?</p>
            <div className="grid gap-4 lg:grid-cols-3">
                <Category name="Ensaladas" slug={`${base}/ensalada-bacon-queso-cabra.webp`} />
                <Category name="Entrantes" slug={`${base}/patatas-bravas-caseras.webp`} />
                <Category name="Principales" slug={`${base}/flamenquin-cordobes-casero.webp`} />
                <Category name="Asiáticos" slug={`${base}/pan-bao-solomillo-2.webp`} />
                <Category name="Pescados" slug={`${base}/cazon-adobo.webp`} />
                <Category name="Exigentes" slug={`${base}/milhojas-queso-cabra-mango-jamon.webp`} />
                <Category name="Hamburguesas" slug={`${base}/hamburguesa-angus.webp`} />
                <Category name="Postres" slug={`${base}/migas-chocolate.webp`} />
                <Category name="Bebidas" slug={`${base}/bebidas-dgrana.webp`} />
            </div>
        </section>
    )
}