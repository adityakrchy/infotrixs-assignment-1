
import Image from 'next/image'
import Link from 'next/link'



const Navbar = () => {

   


    return (
        <>
            <nav className='h-16 flex bg-white justify-between items-center shadow fixed w-svw'>
                <Link href={"/"}><h1 className='font-bold text-3xl ml-4'>Quote</h1></Link>
                <div className='mr-4 flex items-center justify-center gap-x-4'>
                    <Link className=' font-semibold  text-gray-500 hover:text-gray-700 hover:underline' href="/login">Login</Link>
                    <Link href="/signup" className='bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg  font-semibold'>Sign Up</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;