export default function Card({ children }) {
    return (
        <div className='bg-white shadow-md shadow-gray-250 hover:shadow-gray-400 rounded-md p-4 mb-5'>
            {children}
        </div>
    )
} 