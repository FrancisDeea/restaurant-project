export default function Modal({ children }: { children: React.ReactNode }) {

    return (
        <div className="w-[90vw] h-[90vh] bg-black">
            {children}
        </div>
    )
}