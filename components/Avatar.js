export default function Avatar({size}) {

    let width = 'w-12';
    if (size === 'lg') {
        width = 'w-24' ;
    }

    return (
        <div className={`${width} rounded-full overflow-hidden`}>
            <img src="/images/profile.jpg" alt="image" />
        </div>
    )
}