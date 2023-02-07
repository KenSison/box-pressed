import Image from 'next/image';
import { LogoProps } from 'sanity';

function Logo(props: LogoProps) {
  const { renderDefault } = props;

  return (
    <div className='flex items-center space-x-2'>
      {/* TODO: Logoをあとから変更 next.config.js も書き換え必須 */}
      <Image
        className='rounded-full object-cover'
        height={50}
        width={50}
        src='https://links.papareact.com/1m8'
        alt='logo'
      />
      {renderDefault(props)}
    </div>
  );
}

export default Logo;
