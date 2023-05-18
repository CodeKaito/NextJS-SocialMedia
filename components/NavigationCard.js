import Card from "./Card";
import { AiOutlineHome } from 'react-icons/ai'
import { BsPeople, BsBookmarks } from 'react-icons/bs'
import { IoMdNotificationsOutline, IoMdLogOut } from 'react-icons/Io'

export default function NavigationCard() {

    const activeElement = 'hover:font-bold text-sm md:text-md flex gap-1 md:gap-3 py-3 my-1 bg-socialBlue text-white md:-mx-7 px-6 md:px-7 rounded-md shadow-md shadow-gray-300 items-center';
    const nonActiveElement = 'hover:font-bold text-sm md:text-md flex gap-1 md:gap-3 py-2 my-2 hover:bg-blue-500 hover:bg-opacity-20 md:-mx-4 px-6 md:px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300 items-center';

    return (
        <Card>
        <div className='px-4 py-2'>
            <h2 className='text-gray-400 mb-3'>Navigation</h2>
                <a href="" className={activeElement}><AiOutlineHome />Home</a>
                <a href="" className={nonActiveElement}><BsPeople />Friends</a>
                <a href="" className={nonActiveElement}><BsBookmarks />Saved</a>
                <a href="" className={nonActiveElement}><IoMdNotificationsOutline />Notifications</a>
                <a href="" className={nonActiveElement}><IoMdLogOut />Logout</a>
        </div>
        </Card>
    )
}
