import { useNumerosStore } from "../../store/Numeros"
import { ParticipantNumber } from "../../components/ParticipantNumber";

export const GanadoresNumeros = () => {
    const winners = useNumerosStore(state => state.winners)
    return (
        <>

            <div className="pt-4">
                <p className="block text-gray-300 font-bold mb-1">Ganadores:</p>
                {
                    winners?.map((winner, index) => (
                        <div key={index}>
                            <ParticipantNumber winner={winner} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}
