import Link from "next/link";

export default function Logo() {
    return (
        <h1 className='text-xl hover:text-transparent font-semibold hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition-all text-transparent bg-clip-text bg-slate-50 hover:transition-all'>
            <Link href={'/'}>DarkysadowShop.</Link>
        </h1>
    )
}