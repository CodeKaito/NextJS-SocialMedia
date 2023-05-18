import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Image from "next/image";

export default function ProfilePage() {
    return (
        <Layout>
            <Card noPadding={true}>
            <Image src='/images/santorini.jpg' height={800} width={800} alt='profile' className='rounded-md' />
            John Doe</Card>
        </Layout>
    )
}