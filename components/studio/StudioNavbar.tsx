import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import { NavbarProps } from 'sanity';

function StudioNavbar(props: NavbarProps) {
  return (
    <div>
      <div className='flex items-center justify-between p-5'>
        <Link href='/' className='text-[09819] flex items-center'>
          <ArrowUturnLeftIcon className='h-6 w-6 mr-2 text-[#F09819]' />
          TOPに戻る
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
