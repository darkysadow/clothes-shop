import Link from "next/link";

export default function Nav() {
    return (
        <nav>
            <ul className='flex flex-row space-x-4'>
                <li><Link href={'/products'} className='hover:text-fuchsia-200 hover:transition-colors transition-colors'>Products</Link></li>
                <li><Link href={'/contacts'} className='hover:text-fuchsia-200 hover:transition-colors transition-colors'>Contacts</Link></li>
                <li><Link href={'/'} className='hover:text-fuchsia-200 hover:transition-colors transition-colors'>Home</Link></li>
            </ul>
        </nav>
    )
}