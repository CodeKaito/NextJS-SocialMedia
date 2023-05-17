import Card from "./Card";

export default function NavigationCard() {
    return (
        <Card>
        <div className='px-4 py-2'>
            <h2 className='text-gray-400 mb-3'>Navigation</h2>
                <a href="" className="flex gap-3 py-3">Home</a>
                <a href="" className="flex gap-3 py-3">Friends</a>
                <a href="" className="flex gap-3 py-3">Saved posts</a>
                <a href="" className="flex gap-3 py-3">Notifications</a>
                <a href="" className="flex gap-3 py-3">Logout</a>
        </div>
        </Card>
    )
}
