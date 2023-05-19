import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import FriendInfo from "@/components/FriendInfo";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProfilePage() {

    const router = useRouter();
    const {asPath:pathname} = router;
    const isPosts = pathname.includes('posts') || pathname === '/profile';
    const isAbout = pathname.includes('about');
    const isFriends = pathname.includes('friends');
    const isPhotos = pathname.includes('photo');
    const tabClasses = 'flex gap-1 px-5 py-1 items-center';
    const activeTabClasses = 'flex gap-1 px-5 py-1 items-center bg-socialBlue text-white rounded-md';

    return (
        <Layout>
            <Card noPadding={true}>
                <div className='relative overflow-hidden rounded-md'>
                    <div className='h-40 overflow-hidden flex justify-center items-center'>
                        <Image src='/images/santorini.jpg' height={800} width={800} alt='profile' className='rounded-md' />
                    </div>
                    <div className='absolute top-24 left-7 rounded-full border border-gray-400 shadow-lg hover:scale-105'>
                        <Avatar size={'lg'} />
                    </div>
                
                    <div className='p-4'>
                        <div className='ml-36'>
                            <h1 className='uppercase font-semibold text-2xl'>
                                John Doe
                            </h1>
                            <div className='text-gray-500 leading-4'>Massachusetts MA, Boston</div>
                        </div>
                        <div className='mt-10 flex gap-0'>
                            <Link href={'/profile/posts'} className={isPosts ? activeTabClasses : tabClasses}>
                                Posts
                            </Link>
                            <Link href={'/profile/about'} className={isAbout ? activeTabClasses: tabClasses}>
                                About
                            </Link>
                            <Link href={'/profile/friends'} className={isFriends ? activeTabClasses : tabClasses}>
                                Friends
                            </Link>
                            <Link href={'/profile/photos'} className={isPhotos ? activeTabClasses : tabClasses}>
                                Photos
                            </Link>
                        </div>
                    </div>
                </div>
            </Card>
            {isPosts && (
                <PostCard />
            )}
            {isAbout && (
                <Card>
                    <h2 className='text-3xl mb-2'>About me</h2>
                    <p className='mb-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem omnis cumque vel corporis quasi ipsum libero illum perferendis! Perspiciatis praesentium ex sequi quae iure voluptates earum ducimus inventore tenetur non.</p>
                    <p className='mb-2 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sit aspernatur ratione culpa totam temporibus consequatur impedit tenetur, adipisci, molestias ipsum. Laboriosam laborum quos consectetur aliquam omnis earum dolorum totam!</p>
                </Card>
            )}
            {isFriends && (
                <Card>
                    <h2 className='text-3xl mb-2'>Friends</h2>
                    <div className=''>
                        <div className='border-b border-b-gray-100 p-4 -mx-4'>
                            <FriendInfo />
                        </div>
                        <div className='border-b border-b-gray-100 p-4 -mx-4'>
                            <FriendInfo />
                        </div>
                        <div className='border-b border-b-gray-100 p-4 -mx-4'>
                            <FriendInfo />
                        </div>
                        <div className='border-b border-b-gray-100 p-4 -mx-4'>
                            <FriendInfo />
                        </div>
                        <div className='border-b border-b-gray-100 p-4 -mx-4'>
                            <FriendInfo />
                        </div>
                    </div>
                </Card>
            )}
            {isPhotos && (
                <div>
                    <Card>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='rounded-md overflow-hidden h-50 shadow-md flex item-center hover:scale-105 transition-all cursor-pointer'>
                                <img src="https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                            <div className='rounded-md overflow-hidden h-50 shadow-md flex item-center hover:scale-105 transition-all cursor-pointer'>
                                <img src="https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                            <div className='rounded-md overflow-hidden h-50 shadow-md flex item-center hover:scale-105 transition-all cursor-pointer'>
                                <img src="https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                            <div className='rounded-md overflow-hidden h-50 shadow-md flex item-center hover:scale-105 transition-all cursor-pointer'>
                                <img src="https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                        </div>
                    </Card>
                </div>
            )}
        </Layout>
    )
}