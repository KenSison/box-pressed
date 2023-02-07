import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='bg-black border-black-200'>
      <div className='max-w-screen-xl px-4 py-3 mx-auto md:px-6'>
        <ul className='flex flex-row justify-center mt-0 mr-6 space-x-8 text-sm font-medium'>
          <li className=''>
            <Link href='/review' className='text-white hover:text-[#F09819]'>
              REVIEW
            </Link>
          </li>
          <li className=''>
            <Link href='/article' className='text-white hover:text-[#F09819]'>
              ARTICLE
            </Link>
          </li>
          <li className=''>
            <Link href='/news' className='text-white hover:text-[#F09819]'>
              NEWS
            </Link>
          </li>
          <li className=''>
            <Link href='/about' className='text-white hover:text-[#F09819]'>
              ABOUT
            </Link>
          </li>
          <li className=''>
            <Link href='/contact' className='text-white hover:text-[#F09819]'>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
