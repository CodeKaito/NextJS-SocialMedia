import NavigationCard from "./NavigationCard";

export default function Layout({children, hideNavigation}) {
    let rightColumnClasses = '';
    if (hideNavigation) {
        rightColumnClasses += 'w-full';
        } else {
        rightColumnClasses += 'w-9/12';
    }
    return(
        <div className='md:flex mt-4 max-w-4xl mx-auto gap-6'>
            <title>PostMate</title>
            {!hideNavigation && (
                <div className='w-3/12'>
                    <NavigationCard />
                </div>
            )}  
            <div className={rightColumnClasses}>
                {children}
                </div>
        </div>
    )
}