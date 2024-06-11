import { ParticipantPerson } from "../../components/ParticipantPerson"
import { usePersonsStore } from "../../store/Personas"

export const ParticipantesPersonas = () => {
    const participants = usePersonsStore(state => state.participants)
    return (
        <div className="mt-4 pt-2 pb-4  rounded-lg">
            <p className="block text-gray-300 font-bold mb-1">Participantes:</p>
            {
                participants?.map((name, index) => (
                    <div key={index}>
                        <ParticipantPerson name={name} />
                    </div>
                ))
            }
        </div>
    )
}
