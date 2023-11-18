import Link from "next/link"

export default function Button({ value, url }: { value: string, url: string }) {
    return (
        <Link
            className="bg-medium px-6 py-2 rounded-3xl font-bold text-lg block w-max hover:scale-95 transition-transform"
            href={url}
        >
            {value}
        </Link>
    )
}