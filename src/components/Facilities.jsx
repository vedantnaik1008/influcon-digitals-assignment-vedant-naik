import { facilities } from '../data/FacilititesData';
import Students from '../../public/image/student.png';
import lYellow from '../../public/image/LYellow.png';
import yellowBg from '../../public/image/yellowBg.png';
import gallery from '../../public/image/gallery.png';
import lBlue from '../../public/image/lBlue.png';
import blue_wave from '../../public/image/blue-waves.png';
import workingProfessionals from '../../public/image/workingProfessionals.png';

const Facilities = () => {
    return (
        <section className='py-20  md:relative'>
            <img
                src={blue_wave}
                alt='blue-waves'
                className='hidden md:block md:absolute md:top-[40%] mdd:top-[32%] xxl:top-[29%]  md:left-0 md:z-10'
            />
            <div className='w-[90%] mx-auto'>
                <h2 className='text-[#002a69] text-center font-playfair font-bold text-3xl py-10'>
                    Facilities
                </h2>
                <div className='flex flex-col md:flex-row md:gap-10 justify-center items-center gap-8 flex-wrap'>
                    {facilities.map((item) => (
                        <div
                            key={item.id}
                            className='flex flex-col justify-center items-center'>
                            <img
                                src={item.img}
                                height={item.h}
                                width={item.w}
                                loading='lazy'
                                alt={item.title}
                                className='bg-[#FFDF4D] rounded-full mb-5 drop-shadow-md p-6'
                            />
                            <h3 className='text-[#002a69] text-center'>
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
                <div className='py-28 flex flex-col justify-center items-center gap-10 md:flex-row md:justify-between'>
                    <div className='bg-white drop-shadow-md rounded-3xl md:relative md:z-20'>
                        <img
                            src={Students}
                            alt='students'
                            width={600}
                            height={600}
                        />
                        <h3 className='py-7 text-center text-[#002a69] text-2xl font-medium'>
                            For Students
                        </h3>
                    </div>
                    <div className='bg-white drop-shadow-md rounded-3xl md:relative md:z-20'>
                        <img
                            src={workingProfessionals}
                            alt='working professionals'
                            width={600}
                            height={600}
                        />
                        <h3 className='py-7 text-center text-[#002a69] text-2xl font-medium'>
                            For Working Professionals
                        </h3>
                    </div>
                </div>
                <div className='pt-10 flex flex-col justify-center items-center gap-20 md:flex-row md:justify-between'>
                    <div className='relative w-full  '>
                        <h2
                            className='text-[#FFDF4D] font-playfair text-3xl mb-2 text-center md:absolute md:-right-[75px] md:top-16 
                        xl:-right-1 xl:top-20 
                        xxl:right-6 xxl:top-20 md:text-2xl lg:text-3xl lg:-right-[60px] md:rotate-[270deg] llg:-right-[40px]'>
                            Gallery
                        </h2>
                        <img
                            src={yellowBg}
                            alt='yellowBg'
                            className='hidden md:absolute md:block md:-left-6 md:-top-6 lg:-left-3 lg:-top-6
                            xl:left-10 xl:-top-10
                            xxl:left-16 xxl:-top-10 w-full md:w-[50%] md:h-[250px] llg:left-4'
                        />
                        <img
                            src={gallery}
                            alt='gallery'
                            className='relative  w-full bg-[#FFDF4D] p-5 md:p-0 md:max-w-[400px] mx-auto'
                        />
                        <img
                            src={lYellow}
                            alt='lYellow'
                            className='hidden md:absolute md:block md:-bottom-8 md:-right-12 lg:-bottom-8 lg:-right-6
                            xl:right-8 xl:-bottom-10
                            xxl:right-16 xxl:-bottom-10  w-full md:w-[200px]  md:h-[200px] llg:-right-1'
                        />
                    </div>
                    <div className='relative w-full' id='contact'>
                        <h2 className='text-[#002a69] font-playfair text-3xl mb-2 text-center md:absolute md:-right-[90px] md:bottom-16 md:rotate-[270deg] xl:bottom-20 xxl:-right-14'>
                            Contact us
                        </h2>
                        <img
                            src={lBlue}
                            alt='lBlue'
                            className='hidden md:absolute md:block md:w-[250px] md:-right-8 md:-top-8 w-full  xl:-top-12 xxl:right-1'
                        />
                        <form
                            action=''
                            className='bg-[#E2F1FF] rounded-md px-3 py-5 md:px-5 md:py-8 flex flex-col gap-5 text-[#002a69] md:max-w-[500px] mx-auto'>
                            <label htmlFor='' className='flex flex-col gap-2'>
                                <p>Enter Your Full Name:</p>
                                <input
                                    className='bg-white rounded-md w-full  p-2'
                                    type='text'
                                />
                            </label>
                            <label htmlFor='' className='flex flex-col gap-2'>
                                <p>Enter Your Phone Number:</p>
                                <input
                                    className='bg-white rounded-md w-full  p-2'
                                    type='text'
                                />
                            </label>
                            <label htmlFor='' className='flex flex-col gap-2'>
                                <p>Enter Your Email Address:</p>
                                <input
                                    className='bg-white rounded-md w-full  p-2'
                                    type='text'
                                />
                            </label>
                            <label htmlFor='' className='flex flex-col gap-2'>
                                <p>Select your Gender</p>
                                <div className='flex gap-4'>
                                    <div className='flex gap-2'>
                                        <input className='' type='radio' />
                                        <p className='text-[#002a69]'>Male</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <input className='' type='radio' />
                                        <p className='text-[#002a69]'>Female</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <input className='' type='radio' />
                                        <p className='text-[#002a69]'>Other</p>
                                    </div>
                                </div>
                            </label>
                            <div className='self-center'>
                                <button className='bg-[#002a69] text-white px-8 py-1 rounded-3xl'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Facilities;
