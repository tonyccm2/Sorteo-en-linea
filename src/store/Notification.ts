import { create } from "zustand"

interface INotificationStore {
    active: boolean
    message: string
    closeNotification: () => void,
    setMessage: (message: string) => void
}

export const useNotificationStore = create<INotificationStore>((set) => ({
    active: false,
    message: '',
    closeNotification: () => set(() => {
        return { active: false }
    }),
    setMessage: (message: string) => set(() => {
        return { message: message, active: true }
    })
}))