import Link from "next/link";

export default function Footer() {

    return (
        <footer className="bg-dark text-light text-sm flex flex-col justify-evenly items-center min-h-min mb-4 p-2 max-w-[1268px] w-[calc(100%-32px)] m-auto rounded-[10px] lg:flex-row">
            <Link href="/aviso-legal" className="underline">Aviso Legal</Link>
            <span>D&apos;Grana Tapas - 2023 - Copyright ©</span>
            <span>Made with ❤️ by <a href="https://www.linkedin.com/in/francis-bernal-full-stack-developer/" target="_blank" className="text-blue-500 underline">Francis B.</a></span>
        </footer>
        
    )
}