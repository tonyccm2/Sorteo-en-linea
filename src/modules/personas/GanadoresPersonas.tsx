import { ParticipantPerson } from "../../components/ParticipantPerson"
import { usePersonsStore } from "../../store/Personas"

export const GanadoresPersonas = () => {
    const winners = usePersonsStore(state => state.winners)

    return (

        <div className="mt-4 pt-2 pb-4  rounded-lg border-[#44b2d4]">
            <p className="block text-gray-300 font-bold mb-1">Ganadores:</p>
            {
                winners?.map((name, index) => (
                    <div key={index}>
                        <ParticipantPerson name={name} />
                    </div>
                ))
            }
        </div>
    )
}
