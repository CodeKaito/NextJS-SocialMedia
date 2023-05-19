import Link from "next/link";
import Card from "./Card";
import { AiOutlineHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { BsPeople, BsBookmarks } from 'react-icons/bs'
import { IoMdNotificationsOutline, IoMdLogOut } from 'react-icons/Io'
import { useRouter } from "next/router";

export default function NavigationCard() {

    const router = useRouter();
    const {asPath:pathname} = router;

    const activeElementClasses = 'hover:font-bold text-sm md:text-md flex gap-1 md:gap-3 py-3 my-1 bg-socialBlue text-white md:-mx-7 px-4 md:px-7 rounded-md shadow-md shadow-gray-300 items-center';
    const nonActiveElementClasses = 'hover:font-bold text-sm md:text-md flex gap-1 md:gap-3 py-2 my-2 hover:bg-blue-500 hover:bg-opacity-20 md:-mx-4 px-6 md:px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300 items-center';

    return (
        <Card>
        <div className='md:px-4 py-2 flex md:gap-4 justify-between md:block'>
            <h2 className='text-gray-400 mb-3 hidden md:block'>Navigation</h2>
                <Link href={'/'}>
                    <span className={pathname === '/' ? activeElementClasses : nonActiveElementClasses}><AiOutlineHome /><span className='hidden md:block'>Home</span></span>
                </Link>
                
                <Link href={'/profile'}>
                <span className={pathname.startsWith('/profile') && pathname !== ('/profile/friends') ? activeElementClasses : nonActiveElementClasses}><CgProfile /><span className='hidden md:block'>Profile</span></span>
                </Link>

                <Link href={'/profile/friends'}>
                    <span className={pathname === '/profile/friends' ? activeElementClasses : nonActiveElementClasses}><BsPeople /><span className='hidden md:block'>Friends</span></span>
                </Link>
                
                <Link href={'/saved'}>
                    <span className={pathname === '/saved' ? activeElementClasses : nonActiveElementClasses}><BsBookmarks /><span className='hidden md:block'>Saved</span></span>
                </Link>

                <Link href={'/notifications'}>
                    <span className={pathname === '/notifications' ? activeElementClasses : nonActiveElementClasses}><IoMdNotificationsOutline /><span className='hidden md:block'>Notifications</span></span>
                </Link>

                <Link href={'/login'}>
                    <span href="" className={nonActiveElementClasses}><IoMdLogOut /><span className='hidden md:block'>Logout</span></span>
                </Link>
        </div>
        </Card>
    )
}
