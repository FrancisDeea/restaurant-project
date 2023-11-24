import { socialNetworks } from "@/lib/data"

const SocialNetwork = ({ link, children, color }: { link: string, children: React.ReactNode, color: string }) => {
    return (
        <a href={link} className={`${color} h-12 lg:flex-1 rounded-[40px] flex flex-row gap-2 justify-center items-center text-white hover:scale-95 transition-transform shadow-lg`}>
            {children}
        </a>
    )
}

export default function SocialSection({ lang }: { lang: string }) {
    return (
        <section className="bg-tranasparent flex flex-col gap-4 p-0 border-none text-dark font-bold text-xl lg:col-span-2 lg:flex-row animate-fade-up animate-duration-300 animate-delay-200 order-3 lg:order-none">
            {
                socialNetworks.map(item => {
                    const Icon = item.icon
                    return (
                        <SocialNetwork
                            key={item.value_es}
                            link={item.url}
                            color={item.value_es === "Instagram" ? "bg-instagram" : item.value_es === "Facebook" ? "bg-blue-500" : "bg-red-500"}
                        >
                            <Icon /> {lang === "en" ? item.value_en : item.value_es}
                        </SocialNetwork>
                    )
                }
                )
            }
        </section>
    )
}