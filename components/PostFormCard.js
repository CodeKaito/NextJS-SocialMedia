import Avatar from "./Avatar";
import Card from "./Card";
import { BsUniversalAccess, BsFillSunFill } from 'react-icons/bs'
import { GiPositionMarker } from 'react-icons/gi'

export default function PostFormCard() {
    return (
        <Card>
            <div className='flex gap-2'>
                <div>
                    <Avatar />
                </div>
                <textarea className='grow p-3 h-14 overflow-y-hidden' placeholder={"Whats's on your mind?"} />
            </div>
            <div className='flex gap-5 items-center mt-2'>
                <div>
                    <button className='flex gap-1'><BsUniversalAccess />People</button>
                </div>
                <div>
                    <button className='flex gap-1'><GiPositionMarker />Check in</button>
                </div>
                <div>
                    <button className='flex gap-1'><BsFillSunFill />Mood</button>
                </div>
                <div className='grow text-right '>
                    <button className="bg-socialBlue text-white px-5 py-1 rounded-md">Share a post</button>
                </div>
            </div>
        </Card>
    )
}