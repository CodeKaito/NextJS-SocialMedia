import Card from "@/components/Card";
import Layout from "@/components/Layout";
import { FcGoogle } from 'react-icons/fc'
import { FaGithub, FaFacebook } from 'react-icons/fa'

export default function LoginPage() {
    return (
        <Layout hideNavigation={true}>
            <div className='h-screen flex items-center'>
                <div className='max-w-xs mx-auto grow -mt-34'>
                    <h1 className='text-6xl mb-4 text-gray-400 text-center'>Login</h1>
                    <Card>
                        <a className='flex items-center justify-center gap-4 hover:scale-105 transition-all' href=''>
                            <FcGoogle size={40} />Login with Google</a>
                    </Card>
                    <Card>
                        <a className='flex items-center justify-center gap-4 hover:scale-105 transition-all' href=''>
                            <FaGithub size={40} />Login with Github</a>
                    </Card>
                    <Card>
                        <a className='flex items-center justify-center gap-4 hover:scale-105 transition-all' href=''>
                            <FaFacebook size={40} />Login with Facebook</a>
                    </Card>
                </div>
            </div>
        </Layout>
    )
}