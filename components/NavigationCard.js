import Card from "./Card";
import { AiOutlineHome } from 'react-icons/ai'
import { BsPeople, BsBookmarks } from 'react-icons/bs'
import { IoMdNotificationsOutline, IoMdLogOut } from 'react-icons/Io'

export default function NavigationCard() {
    return (
        <Card>
        <div className='px-4 py-2'>
            <h2 className='text-gray-400 mb-3'>Navigation</h2>
                <a href="" className="flex gap-3 py-3"><AiOutlineHome />Home</a>
                <a href="" className="flex gap-3 py-3"><BsPeople />Friends</a>
                <a href="" className="flex gap-3 py-3"><BsBookmarks />Saved</a>
                <a href="" className="flex gap-3 py-3"><IoMdNotificationsOutline />Notifications</a>
                <a href="" className="flex gap-3 py-3"><IoMdLogOut />Logout</a>
        </div>
        </Card>
    )
}
