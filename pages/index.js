import Card from "@/components/Card";

export default function Home() {
  return (
    <div className='flex mt-4 max-w-4xl mx-auto gap-6'>
      <div className='w-1/3'>
        <Card>
          <h2 className='text-gray-400 mb-3'>Navigation</h2>
          <a href="" className="flex gap-2 py-3">Home</a>
          <a href="" className="flex gap-2 py-3">Friends</a>
          <a href="" className="flex gap-2 py-3">Saved posts</a>
          <a href="" className="flex gap-2 py-3">Notifications</a>
          <a href="" className="flex gap-2 py-3">Logout</a>
        </Card>
      </div>
      <div className='grow'>
        <Card>form here</Card>
        <Card>first post test</Card>
      </div>
    </div>
  )
}
