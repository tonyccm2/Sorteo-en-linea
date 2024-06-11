import { useAtom } from "jotai"
import { numerosAtom } from "../atom/numeros"

export const TabButton = () => {
    const [numeros, setNumeros] = useAtom(numerosAtom)
    return (
        <>
            <div className="flex justify-center gap-2 pt-4">
                <button onClick={() => setNumeros(true)} disabled={numeros} className={`text-white font-bold px-6 py-2 rounded-full opacity-80 hover:opacity-100 ${numeros ? 'bg-[#44b2d4]' : 'bg-[#3f3f3f]'}`}>
                    Sortear Números
                </button>
                <button onClick={() => setNumeros(false)} disabled={!numeros} className={`text-white font-bold px-6 py-2 rounded-full opacity-80 hover:opacity-100 ${numeros ? 'bg-[#3f3f3f]' : 'bg-[#44b2d4]'}`}>
                    Sortear Personas
                </button>
            </div>
        </>
    )
}
