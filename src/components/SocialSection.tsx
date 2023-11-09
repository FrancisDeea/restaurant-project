import { socialNetworks } from "@/lib/data"

const SocialNetwork = ({ link, children, color }: { link: string, children: React.ReactNode, color: string }) => {
    return (
        <a href={link} className={`${color} h-12 flex-1 rounded-[40px] flex flex-row gap-2 justify-center items-center text-white hover:scale-95 transition-transform`}>
            {children}
        </a>
    )
}

export default function SocialSection() {
    return (
        <section className="bg-tranasparent col-span-2 flex flex-row gap-4 p-0 border-none text-dark font-bold text-xl">
            {
                socialNetworks.map(item => {
                    const Icon = item.icon
                    return (
                        <SocialNetwork
                            key={item.value}
                            link={item.url}
                            color={item.value === "Instagram" ? "bg-instagram" : item.value === "Facebook" ? "bg-blue-500" : "bg-red-500"}
                        >
                            <Icon /> {item.value}
                        </SocialNetwork>
                    )
                }
                )
            }
        </section>
    )
}