import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <header className='flex items-center justify-center space-x-2 font-bold px-5 py-5'>
      <div className='flex lg:flex-row lg:space-x-5 justify-center font-bold px-10 py-5 mb-5'>
        <div className='flex flex-col items-center'>
          <h1 className='text-7xl'>Box Press</h1>
          <h2>シガー文化をもっと身近に</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
