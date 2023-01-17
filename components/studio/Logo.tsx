import Image from 'next/image';

function Logo(props: any) {
  const { renderDefault, title } = props;

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
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
