import { useState } from "react"
import { usePersonsStore } from "../../store/Personas"
import confetti from 'canvas-confetti'
import { useNotificationStore } from "../../store/Notification"

export const Personas = () => {
    const [inputValue, setInputValue] = useState('')
    const participants = usePersonsStore(store => store.participants)
    const addParticipant = usePersonsStore(store => store.addParticipant)
    const deleteParticipant = usePersonsStore(store => store.deleteParticipant)
    const winners = usePersonsStore(store => store.winners)
    const addWinner = usePersonsStore(store => store.addWinner)
    const clearWinners = usePersonsStore(store => store.clearWinners)
    const setMessage = useNotificationStore(store => store.setMessage)

    const agregar = () => {
        if (inputValue.length > 0) {
            if (participants.includes(inputValue) || winners.includes(inputValue)) {
                setMessage('Esta persona ya está participando')
            } else {
                addParticipant(inputValue)
                clearWinners()
            }
            setInputValue('')
        } else {
            setMessage('Ingrese un participante')
        }
    }
    const sortear = () => {
        if (participants.length > 0) {
            const random = Math.floor(Math.random() * participants.length)
            const ganador = participants[random]
            deleteParticipant(ganador)
            addWinner(ganador)
            confetti()
        } else {
            setMessage('no hay más participantes')
        }
    }
    return (
        <>
            <div className="w-full rounded-lg bg-[#3b3b3b] p-4">
                <label className="block text-gray-300 font-bold mb-1">
                    Agregar participante:
                </label>
                <div className="grid grid-cols-3 gap-2">
                    <input value={inputValue} onKeyDown={(e) => {
                        if (e.keyCode == 13) {
                            agregar()
                        }
                    }}
                        onChange={(event) => setInputValue(event.target.value)}
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#44b2d4]" id="participantesNombres" type="text" />
                    <button onClick={agregar} className="bg-[#3abd40cc] rounded hover:bg-[#3abd40] text-white font-bold">
                        Agregar
                    </button>
                    <button onClick={sortear} className="bg-[#44b2d4cc] rounded hover:bg-[#44b2d4] text-white font-bold">
                        Sortear
                    </button>
                </div>
            </div>
        </>
    )
}
