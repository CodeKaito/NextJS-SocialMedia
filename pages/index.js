import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='text-red-500'>
      <h1>Hello, World!</h1>
    </div>
  )
}
