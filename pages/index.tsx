import { url } from 'inspector';
import Image from 'next/image';
import Link from 'next/link';
import background from '../public/background.png';
import image_1 from '../public/img_1.png';
import image_2 from '../public/img_2.png';
import image_3 from '../public/img_3.png';
import image_4 from '../public/img_4.png';

export default function Home() {
  return (
    <div>
      <div
      //////////////////////////////////////////// background //////////
      >
        <Image
          src={background}
          alt='background image'
          className='absolute w-full h-full -z-10  '
        ></Image>
      </div>
      <header className='flex p-5 justify-between w-auto flex-wrap '>
        <div // Logo
          className='md:w-16'
        >
          <svg
            viewBox='0 0 111 30'
            width='9.25rem'
            height='2.5rem'
            version='1.1'
            aria-hidden='true'
            role='img'
            style={{
              color: 'red',
              fill: 'currentcolor',
              height: '50px',
              display: 'block',
            }}
          >
            <g>
              <path d='M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z'></path>
            </g>
          </svg>
        </div>
        <div /* Language Selector */>
          <div className='text-neutral-100 absolute pt-1 pl-1'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              data-name='Globe'
            >
              <path
                d='M8 14.5C8.23033 14.5 8.84266 14.2743 9.48679 12.986C9.76293 12.4337 9.99973 11.7621 10.1748 11H5.8252C6.00027 11.7621 6.23707 12.4337 6.51321 12.986C7.15734 14.2743 7.76967 14.5 8 14.5ZM5.57762 9.5C5.52716 9.02077 5.5 8.51911 5.5 8C5.5 7.48089 5.52716 6.97923 5.57762 6.5H10.4224C10.4728 6.97923 10.5 7.48089 10.5 8C10.5 8.51911 10.4728 9.02077 10.4224 9.5H5.57762ZM11.7092 11C11.4822 12.1217 11.1317 13.117 10.6914 13.9184C12.0137 13.3161 13.0987 12.2837 13.7678 11H11.7092ZM14.3261 9.5H11.9298C11.9759 9.01412 12 8.51269 12 8C12 7.48731 11.9759 6.98588 11.9298 6.5H14.3261C14.4398 6.98152 14.5 7.48373 14.5 8C14.5 8.51627 14.4398 9.01848 14.3261 9.5ZM4.0702 9.5H1.67393C1.56019 9.01848 1.5 8.51627 1.5 8C1.5 7.48373 1.56019 6.98152 1.67393 6.5H4.0702C4.02411 6.98588 4 7.48731 4 8C4 8.51269 4.02411 9.01412 4.0702 9.5ZM2.23221 11H4.29076C4.51779 12.1217 4.86832 13.117 5.30864 13.9184C3.98635 13.3161 2.90128 12.2837 2.23221 11ZM5.8252 5H10.1748C9.99973 4.23793 9.76293 3.56626 9.48679 3.01397C8.84266 1.72571 8.23033 1.5 8 1.5C7.76967 1.5 7.15734 1.72571 6.51321 3.01397C6.23707 3.56626 6.00027 4.23793 5.8252 5ZM11.7092 5H13.7678C13.0987 3.71627 12.0137 2.68389 10.6914 2.08162C11.1317 2.88302 11.4822 3.8783 11.7092 5ZM5.30864 2.08162C4.86832 2.88302 4.51779 3.8783 4.29076 5H2.23221C2.90128 3.71628 3.98635 2.68389 5.30864 2.08162ZM8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0Z'
                fill='currentColor'
              ></path>
            </svg>
          </div>

          <select className='bg-black rounded-sm pl-5 pb-1 text-neutral-100'>
            <option label='English' value='en-IN'>
              English
            </option>
            <option label='हिन्दी' value='hi-IN'>
              हिन्दी
            </option>
          </select>
          <Link // SignIn Link
            href={'/login'}
            className='border-black text-neutral-100 bg-red-600 px-2 pb-1 rounded-sm ml-2 hover:duration-500 hover:bg-red-700'
          >
            Sign In
          </Link>
        </div>
      </header>
      ?
      <div ////////////////////////////Features ////////////////////////////////////////
        //////////////////
        className='ml-5 space-y-4 flex flex-col h-screen -mb-96'
      >
        <h1 className='text-neutral-50 text-4xl'>
          Unlimited Movies,TV Shows and more.
        </h1>
        <p className='text-neutral-100 '> Watch anywhere. Cancel anytime.</p>
        <h3 className='text-neutral-50'>
          Ready to watch? Enter your email to create or restart your memebership
        </h3>
        <form>
          <input className='p-1 rounded-sm' placeholder='Email Address'></input>
          <Link // SignIn Link
            href={'/login'}
            className='border-black text-neutral-100 bg-red-600 px-2 pb-1 rounded-sm ml-2 hover:duration-500 hover:bg-red-700'
          >
            Get Started
          </Link>
        </form>
      </div>
      <div
        //   <<<<<<<<<<<<<<<<<<<<<<<<<<Panel controller here >>>>>>>>>>>>>>>>>>>>>>

        className='inline-flex flex-wrap  justify-center w-full bg-black mt-40'
      >
        <div
          // panels starts here >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

          style={{
            background:
              'radial-gradient(99.93% 134.44% at 17.93% 0%, #09143C 0%, #101338 57.21%, #400E20 99.57%)',
          }}
          className='flex flex-col sm:w-96 sm:h-96 justify-center text-center mt-2 ml-2 text-neutral-50'
        >
          <Image src={image_1} alt='img_1' />
          Enjoy on your TV. Watch on smart TVs,PlayStation,Xbox,Apple TV.
        </div>
        <div
          style={{
            background:
              'radial-gradient(99.93% 134.44% at 17.93% 0%, #09143C 0%, #101338 57.21%, #400E20 99.57%)',
          }}
          className='flex flex-col sm:w-96 sm:h-96 mt-2 ml-2 justify-center text-center  text-neutral-50'
        >
          <Image src={image_2} alt='img_2' />
          Watch everywhere.
        </div>
        <div
          style={{
            background:
              'radial-gradient(99.93% 134.44% at 17.93% 0%, #09143C 0%, #101338 57.21%, #400E20 99.57%)',
          }}
          className='flex flex-col sm:w-96 sm:h-96 ml-2 justify-center text-center mt-2 text-neutral-50'
        >
          <Image src={image_3} alt='img_3' />
          Create profiles for children.
        </div>
        <div
          style={{
            background:
              'radial-gradient(99.93% 134.44% at 17.93% 0%, #09143C 0%, #101338 57.21%, #400E20 99.57%)',
          }}
          className='flex flex-col sm:w-96  sm:h-96 ml-2 justify-center text-center mt-2 text-neutral-50'
        >
          <Image src={image_4} alt='img_4' />
          Download your shows to watch offline.
        </div>
      </div>
      <div ////////////////// question slider/////////////
      >
        <h1 className='bg-black relative '>Frequently Asked Questions</h1>
        <div>
          <div className='flex justify-center bg-black 1'>
            <h1 className='bg-black text-neutral-100'> </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
