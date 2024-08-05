import { facilities } from '../data/FacilititesData';
import Students from '../../public/image/student.webp';

import blue_wave from '../../public/image/blue-waves.png';
import workingProfessionals from '../../public/image/workingProfessionals.webp';

const Facilities = () => {
    return (
        <section className='py-20  md:relative'>
            <img
                loading='lazy'
                src={blue_wave}
                alt='blue-waves'
                className='hidden md:block md:absolute md:bottom-[25%] md:left-0 md:z-10'
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
                                loading='lazy'
                                src={item.img}
                                height={item.h}
                                width={item.w}
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
                            loading='lazy'
                            src={Students}
                            alt='students'
                            width={600}
                            height={397}
                        />
                        <h3 className='py-7 text-center text-[#002a69] text-2xl font-medium'>
                            For Students
                        </h3>
                    </div>
                    <div className='bg-white drop-shadow-md rounded-3xl md:relative md:z-20'>
                        <img
                            loading='lazy'
                            className='rounded-t-3xl'
                            src={workingProfessionals}
                            alt='working professionals'
                            width={600}
                            height={397}
                        />
                        <h3 className='py-7 text-center text-[#002a69] text-2xl font-medium'>
                            For Working Professionals
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Facilities;
