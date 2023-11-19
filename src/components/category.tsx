/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

export default function Category({ name, slug, img }: { name: string, slug: string, img: string }) {
    return (
        <Link href={slug} className=" hover:scale-95 transition-transform">
            <div className='w-full h-24 bg-slate-200 rounded-[30px] flex justify-center items-center relative overflow-hidden shadow-xl'>
                <h2 className="z-10">{name}</h2>
                <div className='absolute w-full h-full'>
                    <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover brightness-[0.3]"
                    />
                </div>
            </div>
        </Link>
    )
}