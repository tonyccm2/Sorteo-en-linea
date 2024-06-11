import { create } from "zustand"
import { persist } from "zustand/middleware"

interface IPersonsState {
    participants: string[]
    winners: string[]
    addParticipant: (name: string) => void
    deleteParticipant: (name: string) => void
    addWinner: (name: string) => void
    deleteWinner: (name: string) => void
    clearWinners: () => void
}

export const usePersonsStore = create<IPersonsState>()(persist((set) => {
    return {
        participants: [],
        winners: [],
        addParticipant: (name: string) => set(state => {
            const newParticipants = [...state.participants, name]
            return { participants: newParticipants }
        }),
        deleteParticipant: (name: string) => set(state => {
            const newParticipants = state.participants.filter(participant => participant !== name)
            return { participants: newParticipants }
        }),
        addWinner: (name: string) => set(state => {
            const newWinners = [...state.winners, name]
            return { winners: newWinners }
        }),
        deleteWinner: (name: string) => set(state => {
            const newWinners = state.winners.filter(winner => winner !== name)
            return { winners: newWinners }
        }),
        clearWinners: () => set(() => {
            return { winners: [] }
        })
    }
}, {
    name: 'personsStore'
}))