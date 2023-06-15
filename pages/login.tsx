import { Sign } from 'crypto';
import background from '../public/background.png';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/UI/PageHeader';

export default function SignIn() {
  return (
    <div className='wrapper relative w-full h-screen overflow-hidden'>
      <div //                   ----------------------- background ---------------------------
      >
        <Image
          src={background}
          alt='hi'
          className='absolute w-full h-full -z-10'
        ></Image>
      </div>
      <PageHeader />
      <div className='Form flex justify-center items-center md:mx-0 md:my-auto md:h-screen md:-mb- '>
        <div ///             --------------------------- Form------------------------
          className='Login Form md:min-h-[660px] '
        >
          <div className=' bg-black opacity-80 w-96 h-96  text-neutral-50 flex flex-col pt-4 pl-4 md:mb-8'>
            <h1 className='text-neutral-50 bg-opacity-100 text-size text-3xl text-center'>
              Sign In
            </h1>
            <form className='flex flex-col'>
              <input
                className='bg-black opacity-100'
                placeholder='Email Address'
              ></input>
              <input
                className='bg-black mt-2 bg-opacity-80'
                placeholder='Password'
              ></input>
              <Link // SignIn Link
                href={'/GuestLogin'}
                className='border-black text-neutral-100 mt-4 mr-4 bg-red-600  rounded-sm hover:duration-500 hover:bg-red-700 text-center'
              >
                Guest Login
              </Link>
            </form>
          </div>
        </div>
      </div>
      <div //  ----------------------------Footer----------------------
      >
        <footer className='bg-gray-950 relative text-xl pt-16 pb-16 opacity-70'>
          <p className='p-1 pl-2 text-neutral-50'>
            Questions? CAll xxxx-xxx-xxxx
          </p>
          <div>
            <ul className='pt-2 box-border flex text-neutral-50'>
              <li className='pl-2'>FAQ</li>
              <li className='pl-2'>Help Center</li>
              <li className='pl-2'>Terms of Use</li>
              <li className='pl-2'>Privacy </li>
              <li className='pl-2'>Cookie Prefernce</li>
            </ul>
            <div>
              <select className='bg-black rounded-sm pl-5 pb-1 text-neutral-100'>
                <option label='English' value='en-IN'>
                  English
                </option>
                <option label='हिन्दी' value='hi-IN'>
                  हिन्दी
                </option>
              </select>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
