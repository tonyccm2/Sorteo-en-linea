
import { useNotificationStore } from "../store/Notification"

export const Notification = () => {
    const active = useNotificationStore(state => state.active)
    const mesage = useNotificationStore(state => state.message)
    const closeNotification = useNotificationStore(state => state.closeNotification)
    const cerrar = () => {
        closeNotification()
    }

    return (
        <>
            <div className={`${active ? "visible transition-opacity ease-in-out duration-700 opacity-100" : "invisible opacity-0 duration-700"}`}>
                <div className="absolute right-4 bottom-4 bg-red-600 max-w-80 w-full px-2 py-2 rounded-lg border-b border-white opacity-80 hover:opacity-100">
                    <div className="grid grid-cols-8 gap-1">
                        <div className="flex">
                            <svg viewBox="-6 -6 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.20164 18.4695L10.1643 4.00506C10.9021 2.66498 13.0979 2.66498 13.8357 4.00506L21.7984 18.4695C22.4443 19.6428 21.4598 21 19.9627 21H4.0373C2.54022 21 1.55571 19.6428 2.20164 18.4695Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 9V13" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 17.0195V17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </div>
                        <div className="col-span-6">
                            <p className="font-bold">
                                Error
                            </p>
                            <p className="text-sm">
                                {mesage}
                            </p>
                        </div>
                        <button onClick={cerrar} className="relative text-red-200 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
