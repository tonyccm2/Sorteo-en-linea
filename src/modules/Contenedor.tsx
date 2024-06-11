import { useAtomValue } from "jotai"
import { Numeros } from "./numeros/Numeros"
import { Personas } from "./personas/Personas"
import { numerosAtom } from "../atom/numeros"
import { GanadoresNumeros } from "./numeros/GanadoresNumeros"
import { GanadoresPersonas } from './personas/GanadoresPersonas';
import { ParticipantesPersonas } from "./personas/ParticipantesPersonas"

export const Contenedor = () => {
    const numeros = useAtomValue(numerosAtom)
    return (
        <>
            <div className="flex justify-center py-4 px-10 max-w-3xl m-auto">
                {
                    numeros
                        ? <div>
                            <Numeros />
                            <GanadoresNumeros />
                        </div>
                        : <div>
                            <Personas />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <ParticipantesPersonas />
                                <GanadoresPersonas />
                            </div>
                        </div>
                }
            </div>
        </>
    )
}
