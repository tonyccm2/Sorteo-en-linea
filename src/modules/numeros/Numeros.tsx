import confetti from "canvas-confetti"
import { useNumerosStore } from "../../store/Numeros"
import { useNotificationStore } from "../../store/Notification"

export const Numeros = () => {
    const participants = useNumerosStore(state => state.participants)
    const setParticipants = useNumerosStore(state => state.setParticipants)
    const winners = useNumerosStore(state => state.winners)
    const clearWinners = useNumerosStore(state => state.clearWinners)
    const addWinner = useNumerosStore(state => state.addWinner)
    const setMessage = useNotificationStore(store => store.setMessage)

    const sortear = () => {
        if (participants >= 1) {
            let random = Math.floor(Math.random() * participants)
            while (winners.includes(random + 1) && winners.length < participants) {
                random = Math.floor(Math.random() * participants)
            }
            if (winners.length < participants) {
                addWinner(random + 1)
                confetti()
            } else {
                setMessage('No hay más ganadores')
            }
        } else {
            setMessage('Ingresa un número mayor a 0')
        }
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        clearWinners()
        setParticipants(parseInt(e.target.value))
    }

    return (
        <>
            <div className="w-full rounded-lg bg-[#3b3b3b] p-4">
                <label className="block text-gray-300 font-bold mb-1">
                    N° de participantes:
                </label>
                <div className="grid grid-cols-2 gap-2">
                    <input value={participants} onChange={onInputChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#44b2d4]" id="participantesNumero" type="number" />
                    <button onClick={sortear} className="bg-[#44b2d4cc] rounded hover:bg-[#44b2d4] text-white font-bold">
                        Sortear
                    </button>
                </div>
            </div>
        </>
    )
}
