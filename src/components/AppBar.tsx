import icono from '../assets/icon.png'

export const AppBar = () => {
    return (
        <>
            <div className='w-full p-2 bg-[#3b3b3b] flex justify-center '>
                <img src={icono} alt="sorteo en linea" width={50} />
                <p className=' text-2xl font-bold content-center'>Sorteo en linea</p>
            </div>
        </>
    )
}
