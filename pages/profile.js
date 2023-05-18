import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Image from "next/image";

export default function ProfilePage() {
    return (
        <Layout>
            <Card noPadding={true}>
                <div className='relative'>
                    <div className='h-40 overflow-hidden flex justify-center items-center'>
                        <Image src='/images/santorini.jpg' height={800} width={800} alt='profile' className='rounded-md' />
                    </div>
                    <div className='absolute top-24 left-7 rounded-full border border-gray-400 shadow-lg hover:scale-105'>
                        <Avatar size={'lg'} />
                    </div>
                
                    <div className='p-4 pb-24'>
                        <div className='ml-36'>
                            <h1 className='uppercase font-semibold text-2xl'>
                                John Doe
                            </h1>
                        </div>
                    </div>
                </div>
            </Card>
        </Layout>
    )
}