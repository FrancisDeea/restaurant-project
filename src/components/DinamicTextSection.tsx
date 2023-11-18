export default function DinamicTextSection() {

    return (
        <section className="lg:col-auto overflow-hidden leading-[5.8rem] bg-dinamicInfo flex flex-col justify-center order-4 lg:order-none shadow-lg">
            <h2 className="dinamic-text bg-dinamicText1 animate-duration-[20s]">Bar de tapas. Restaurate Mediterráneo. Sabores asiáticos.</h2>
            <p className="dinamic-text bg-dinamicText2 animate-duration-[28s] reverse">Ensaladilla rusa. Tortilla de patatas. Paella. Callos. Mini burguers. Fajitas. Rollitos primavera.</p>
            <h3 className="dinamic-text bg-dinamicText3 animate-duration-[18s]">Productos frescos. Tapas caseras. 28 Platos elaborados.</h3>
            <p className="dinamic-text bg-dinamicText4 animate-duration-[25s] reverse">Hamburguesas. Tostas. Secreto ibérico. Pulpo. Tartar de atún. Flamenquín. Huevos rotos. Pan Bao. Bravas.</p>
        </section>
    )
}