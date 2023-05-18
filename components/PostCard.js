import Image from "next/image";
import Avatar from "./Avatar";
import Card from "./Card";
import { AiOutlineHeart, AiFillBell } from 'react-icons/ai'
import { FaRegComment, FaTimes } from 'react-icons/fa'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { BsShare, BsThreeDotsVertical, BsFillBookmarksFill } from 'react-icons/bs'
import { IoImageOutline } from 'react-icons/io5'
import { GoAlert } from 'react-icons/go'
import ClickOutHandler from 'react-clickout-handler'
import { useState } from "react";

export default function PostCard() {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    function openDropdown(e) {
        e.stopPropagation();
        setDropdownOpen(true);
    }

    function handleClickOutsideDropdown(e) {
        e.stopPropagation();
        setDropdownOpen(false);
    }

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
                    {!dropdownOpen && (
                        <button onClick={openDropdown} className='text-gray-500 hover:text-gray-800'><BsThreeDotsVertical /></button>
                    )}
                    {dropdownOpen && (
                        <button className='text-gray-500 hover:text-gray-800'><BsThreeDotsVertical /></button>
                    )}
                    <ClickOutHandler onClickOut={handleClickOutsideDropdown}>
                        <div className='relative'>
                        {dropdownOpen && (
                            <div className='absolute -right-6 bg-white shadow-lg shadow-gray-700 p-3 rounded-md border-gray-100 w-52'>
                                <a href='' className='flex py-2 gap-2 px-2'><BsFillBookmarksFill />Save post </a>
                                <a href='' className='flex py-2 gap-2 px-2'><AiFillBell />Turn notifications</a>
                                <a href='' className='flex py-2 gap-2 px-2'><FaTimes />Hide</a>
                                <a href='' className='flex py-2 gap-2 px-2 text-red-500'><RiDeleteBin6Fill />Delete</a>
                                <a href='' className='flex py-2 gap-2 px-2 text-red-500'><GoAlert />Report</a>
                            </div>
                        )}
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