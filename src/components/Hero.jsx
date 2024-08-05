import heroWave from '../../public/image/hero-wave.png'
import heroBed from '../../public/image/hero-bed.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
      <section className=' relative lg:h-screen'>
          <div className=''>
              <div className='flex flex-col justify-center items-center  hero-waves py-8'>
                  <h1 className='text-[#002a69] text-center font-playfair font-extrabold text-xl md:text-3xl max-w-[300px] md:max-w-[670px] uppercase'>
                      Best Hostel service in Kolkata - Experience Premium Living
                      at Cotel
                  </h1>
                  <p className='text-[#002a69] text-center text-xs md:text-base max-w-[300px] md:max-w-[450px] mt-4'>
                      Discover the Best Student and Working Professionals
                      Accommodation with Comfort, Community, and Convenience.
                  </p>
                  <button className='mt-4 px-6 py-2 bg-[#FFDF4D] text-[#002a69] rounded-xl'>
                      <Link to={'/contact-us'}>Find my CoTel</Link>
                  </button>
              </div>
              <div className='relative flex justify-center items-center'>
                  <img
                      src={heroWave}
                      alt='hero-wave'
                      className=' w-full h-[50%] md:h-[60%] xl:h-[60%]  object-cover'
                      width={100}
                      height={100}
                  />
                  <img
                      src={heroBed}
                      loading='lazy'
                      alt='hero-bed'
                      width={'1152'}
                      height={'474'}
                      className='absolute bottom-0 left-[10%] w-full hidden md:block md:w-[80%] mx-auto md:h-[80%] xl:h-full object-cover'
                  />
              </div>
          </div>
      </section>
  );
}

export default Hero
