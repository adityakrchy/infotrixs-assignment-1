import Login from '@/components/Login'
import Navbar from '@/components/Navbar'
import QuoteCard from '@/components/QuoteCard'
import axios from 'axios'
import Image from 'next/image'

async function getQuote(){
  const res = await axios.get("https://zenquotes.io/api/random")
  if(!res){
    return Error("Data fetching failed")
  }
  return res.data;
}

export default async function Home() {
  let data = await getQuote();
  return (
    <>
      <main className='min-h-screen flex items-center justify-center' style={{ background: "radial-gradient(587.43% 297.06% at 208.4% 35.5%, rgba(2, 38, 255, 0.59) 0%, rgba(39, 39, 39, 0.59) 100%)" }}>
        <QuoteCard quotes={data} />
      </main>
    </>
  )
}
