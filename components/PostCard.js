import Avatar from "./Avatar";
import Card from "./Card";

export default function PostCard() {
    return(
        <Card>
          <div className='flex gap-3'>
            <div>
              <Avatar />
            </div>
            <div>
              <p><a className='font-semibold'>John Doe</a> shared a <a className='text-socialBlue'>post</a></p>
              <p className='text-gray-500 text-sm'>2 hours ago</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quidem eligendi quas voluptatem exercitationem quis explicabo animi ex accusamus, a, odit dignissimos, 
              quibusdam quo eaque debitis tenetur corrupti quamtempore quod.</p>
            </div>
          </div>
        </Card>
    )
}