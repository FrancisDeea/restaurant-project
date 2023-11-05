import Link from "next/link"

export default function Button({ value, url }: { value: string, url: string }) {
    return (
        <Link
            className="bg-medium px-4 py-2 rounded-3xl font-bold block w-max"
            href={url}
        >
            {value}
        </Link>
    )
}