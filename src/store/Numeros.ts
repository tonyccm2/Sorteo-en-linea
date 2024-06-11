import { create } from "zustand"
import { persist } from "zustand/middleware"

interface INumbersState {
    participants: number
    winners: number[]
    setParticipants: (participantes: number) => void,
    addWinner: (winner: number) => void,
    deleteWinner: (winner: number) => void,
    clearWinners: () => void
}


export const useNumerosStore = create<INumbersState>()(persist((set) => {
    return {
        participants: 1,
        winners: [],
        setParticipants: (participants: number) => set({ participants }),
        addWinner: (winner: number) => set(state => {
            const newWinners = [...state.winners, winner];
            return { winners: newWinners }
        }),
        deleteWinner: (winner: number) => set(state => {
            const newWinners = state.winners.filter(row => row !== winner)
            return { winners: newWinners }
        }),
        clearWinners: () => set({ winners: [] }),
    }
}, {
    name: 'numeroStore',
}))