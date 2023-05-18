import Image from "next/image";
import Avatar from "./Avatar";
import Card from "./Card";
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { BsShare, BsThreeDotsVertical } from 'react-icons/bs'
import { IoImageOutline } from 'react-icons/io5'
import ClickOutHandler from 'react-clickout-handler'
import { useState } from "react/cjs/react.production.min";

export default function PostCard() {

    const [dropdown, setDropdown] = useState();
    
    return(
        <Card>
            <div className='flex gap-3'>
                <div>
                <Avatar />
                </div>
                <div className='grow'>
                <p><a className='font-semibold'>John Doe</a> shared a <a className='text-socialBlue'>post</a></p>
                <p className='text-gray-500 text-sm'>Posted 2 hours ago</p>
                </div>
                <div className="relative">
                    <button className='text-gray-500 hover:text-gray-800'><BsThreeDotsVertical /></button>
                    <ClickOutHandler onClickOut={() => {}}>
                        <div>
                            dropdown menu
                        </div>
                    </ClickOutHandler>
                </div>
            </div>
            <div>
                <p className='my-4 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quidem eligendi quas voluptatem exercitationem quis explicabo animi ex accusamus, a, odit dignissimos, 
                quibusdam quo eaque debitis tenetur corrupti quamtempore quod.
                </p>
                <div className='rounded-md overflow-hidden'>
                    <Image src="/images/santorini.jpg" width='900' height='900' alt="santorini" />
                </div>
            </div>
            <div className='mt-5 flex gap-8'>
                <button className='flex gap-2 items-center'>
                    <AiOutlineHeart />72
                </button>
                <button className='flex gap-2 items-center'>
                    <FaRegComment />11
                </button>
                <button className='flex gap-2 items-center'>
                    <BsShare />4
                </button>
            </div>
            <div className='flex mt-4 gap-3'>
                <div>
                    <Avatar />
                </div>
                <div className='border grow rounded-md relative'>
                    <textarea className='block w-full overflow-hidden p-3 px-4 h-12' placeholder='Leave a comment' />
                    <button className='absolute top-3 right-3 text-gray-400'><IoImageOutline className='w-7 h-7'/></button>
                    
                </div>
            </div>
        </Card>
    )
}