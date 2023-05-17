import Card from "@/components/Card";

export default function Home() {
  return (
    <div className='flex mt-4 max-w-4xl mx-auto gap-6'>
      <div className='w-1/3'>
        <Card>test links</Card>
      </div>
      <div className='grow'>
        <Card>form here</Card>
        post
      </div>
    </div>
  )
}
