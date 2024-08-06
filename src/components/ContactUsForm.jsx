import lYellow from '../../public/image/LYellow.png';
import yellowBg from '../../public/image/yellowBg.png';
import gallery from '../../public/image/gallery.webp';
import lBlue from '../../public/image/lBlue.png';
import useForm from '../hook/useForm';

const ContactUsForm = () => {
    const { handleSubmit, handleChange, formData, tab1Disabled } = useForm();
    return (
        <div className='pt-10 flex flex-col justify-center items-center gap-20 md:flex-row md:justify-between  w-[90%] mx-auto'>
            <div className='relative w-full  '>
                <h2
                    className='text-[#FFDF4D]  text-3xl mb-2 text-center md:absolute md:-right-[75px] md:top-16 
                        xl:-right-1 xl:top-20 
                        xxl:right-6 xxl:top-20 md:text-2xl lg:text-3xl lg:-right-[60px] md:rotate-[270deg] llg:-right-[40px]'>
                    Gallery
                </h2>
                <img
                    loading='lazy'
                    src={yellowBg}
                    alt='yellowBg'
                    width={'304'}
                    height={'250'}
                    className='hidden md:absolute md:block md:-left-6 md:-top-6 lg:-left-3 lg:-top-6
                            xl:left-10 xl:-top-10
                            xxl:left-16 xxl:-top-10 w-full md:w-[50%] md:h-[250px] llg:left-4'
                />
                <img
                    loading='lazy'
                    src={gallery}
                    width={'400'}
                    height={'401'}
                    alt='gallery'
                    className='relative  w-full bg-[#FFDF4D] p-5 md:p-0 md:max-w-[400px] mx-auto'
                />
                <img
                    loading='lazy'
                    src={lYellow}
                    alt='lYellow'
                    width={'200'}
                    height={'200'}
                    className='hidden md:absolute md:block md:-bottom-8 md:-right-12 lg:-bottom-8 lg:-right-6
                            xl:right-8 xl:-bottom-10
                            xxl:right-16 xxl:-bottom-10  w-full md:w-[200px]  md:h-[200px] llg:-right-1'
                />
            </div>
            <div className='relative w-full' id='contact'>
                <h2 className='text-[#002a69]  text-3xl mb-2 text-center md:absolute md:-right-[90px] md:bottom-16 md:rotate-[270deg] xl:bottom-20 xxl:-right-14'>
                    Contact us
                </h2>
                <img
                    loading='lazy'
                    src={lBlue}
                    width={'250'}
                    height={'244'}
                    alt='lBlue'
                    className='hidden md:absolute md:block md:w-[250px] md:-right-8 md:-top-8 w-full  xl:-top-12 xxl:right-1'
                />
                <form
                    onSubmit={handleSubmit}
                    className='bg-[#E2F1FF] rounded-md px-3 py-5 md:px-5 md:py-8 flex flex-col gap-5 text-[#002a69] md:max-w-[500px] mx-auto'>
                    <label className='flex flex-col gap-2'>
                        <p>Enter Your Full Name:</p>
                        <input
                            className='bg-white rounded-md w-full  p-2'
                            type='text'
                            value={formData.name}
                            onChange={handleChange}
                            name='name'
                        />
                    </label>
                    <label htmlFor='' className='flex flex-col gap-2'>
                        <p>Enter Your Phone Number:</p>
                        <input
                            className='bg-white rounded-md w-full  p-2'
                            type='tel'
                            value={formData.phone}
                            onChange={handleChange}
                            name='phone'
                        />
                    </label>
                    <label htmlFor='' className='flex flex-col gap-2'>
                        <p>Enter Your Email Address:</p>
                        <input
                            className='bg-white rounded-md w-full  p-2'
                            type='email'
                            value={formData.email}
                            onChange={handleChange}
                            name='email'
                        />
                    </label>
                    <label htmlFor='' className='flex flex-col gap-2'>
                        <p>Select your Gender</p>
                        <div className='flex gap-4'>
                            <div className='flex gap-2'>
                                <input
                                    type='radio'
                                    onChange={handleChange}
                                    name='gender'
                                    value={(formData.gender = 'Male')} // Correctly compare the current value
                                />
                                <p className='text-[#002a69]'>Male</p>
                            </div>
                            <div className='flex gap-2'>
                                <input
                                    type='radio'
                                    onChange={handleChange}
                                    name='gender'
                                    value={(formData.gender = 'Female')} // Correctly compare the current value
                                />
                                <p className='text-[#002a69]'>Female</p>
                            </div>
                            <div className='flex gap-2'>
                                <input
                                    type='radio'
                                    onChange={handleChange}
                                    name='gender'
                                    value={(formData.gender = 'Other')} // Correctly compare the current value
                                />
                                <p className='text-[#002a69]'>Other</p>
                            </div>
                        </div>
                    </label>
                    <div className='self-center'>
                        <button
                            disabled={tab1Disabled}
                            type='submit'
                            className='bg-[#002a69] text-white px-8 py-1 rounded-3xl'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUsForm;
