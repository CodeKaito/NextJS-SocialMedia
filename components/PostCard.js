import Image from "next/image";
import Avatar from "./Avatar";
import Card from "./Card";

export default function PostCard() {
    return(
        <div>
        <Card>
            <div className='flex gap-3'>
                <div>
                <Avatar />
                </div>
                <div>
                <p><a className='font-semibold'>John Doe</a> shared a <a className='text-socialBlue'>post</a></p>
                <p className='text-gray-500 text-sm'>2 hours ago</p>
                </div>
            </div>
            <div>
                <p className='my-4 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quidem eligendi quas voluptatem exercitationem quis explicabo animi ex accusamus, a, odit dignissimos, 
                quibusdam quo eaque debitis tenetur corrupti quamtempore quod.
                </p>
                <div>
                    <Image src="/images/santorini.jpg" width='900' height='900' alt="santorini" />
                </div>
            </div>
        </Card>
        <Card>
        <div className='flex gap-3'>
                <div>
                <Avatar />
                </div>
                <div>
                <p><a className='font-semibold'>John Doe</a> shared a <a className='text-socialBlue'>post</a></p>
                <p className='text-gray-500 text-sm'>2 hours ago</p>
                </div>
            </div>
            <div>
                <p className='my-4 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quidem eligendi quas voluptatem exercitationem quis explicabo animi ex accusamus, a, odit dignissimos, 
                quibusdam quo eaque debitis tenetur corrupti quamtempore quod.
                </p>
                <div>
                    <Image src="/images/caraibi.jpg" width='900' height='900' alt="santorini" />
                </div>
            </div>
        </Card>
        </div>
    )
}