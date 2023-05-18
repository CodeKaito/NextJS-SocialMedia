import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import NavigationCard from "@/components/NavigationCard";
import PostFormCard from "@/components/PostFormCard";

export default function Home() {
  return (
    <div className='flex mt-4 max-w-4xl mx-auto gap-6'>
      <div className='w-1/3'>
        <NavigationCard />
      </div>
      <div className='grow'>
        <PostFormCard />
        <Card>
          <div className='flex'>
            <div>
              <Avatar />
            </div>
            <div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Quidem eligendi quas voluptatem exercitationem quis explicabo animi ex accusamus, a, odit dignissimos, 
                quibusdam quo eaque debitis tenetur corrupti quam tempore quod.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
