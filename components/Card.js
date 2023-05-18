export default function Card({ children, noPadding }) {

    let classes = 'bg-white shadow-md shadow-gray-250 hover:shadow-gray-400 rounded-md mb-5';
    if (noPadding) {
        classes + 'p-4';
    }
    
    return (
        <div className={classes}>
            {children}
        </div>
    )
} 