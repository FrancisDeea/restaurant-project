import Category from "@/components/category";

export default function Menu() {
    const base = "/assets/platos"

    return (
        <section className="col-span-full p-0 border-none">
            <h1 className="text-sm font-extrabold text-dark">La carta del D&apos;Graná tapas (o el menú, pijo)</h1>
            <p className="text-4xl font-black mb-4 text-medium">¿Qué te apetece comer hoy?</p>
            <div className="grid gap-4 lg:grid-cols-3">
                <Category name="Ensaladas" slug="menu/ensaladas" img={`${base}/ensalada-bacon-queso-cabra.webp`} />
                <Category name="Entrantes" slug="menu/entrantes" img={`${base}/patatas-bravas-caseras.webp`} />
                <Category name="Principales" slug="menu/principales" img={`${base}/flamenquin-cordobes-casero.webp`} />
                <Category name="Asiáticos" slug="menu/asiaticos" img={`${base}/pan-bao-solomillo-2.webp`} />
                <Category name="Pescados" slug="menu/pescados" img={`${base}/cazon-adobo.webp`} />
                <Category name="Exigentes" slug="menu/exigentes" img={`${base}/milhojas-queso-cabra-mango-jamon.webp`} />
                <Category name="Hamburguesas" slug="menu/hamburguesas" img={`${base}/hamburguesa-angus.webp`} />
                <Category name="Postres" slug="menu/postres" img={`${base}/migas-chocolate.webp`} />
                <Category name="Bebidas" slug="menu/bebidas" img={`${base}/bebidas-dgrana.webp`} />
            </div>
        </section>
    )
}