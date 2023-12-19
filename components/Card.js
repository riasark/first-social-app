export default function Card({children}){
    return(
        <div className='ml-4 p-4 bg-white border border-gray-200 rounded-lg shadow-lg text-align-top'>
            {children}
        </div>
    )
}