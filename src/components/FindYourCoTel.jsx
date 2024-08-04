import { Link } from "react-router-dom";


const FindYourCoTel = () => {
    return (
        <section className='py-20 find_your_col_tel'>
            <div className=' w-[90%] mx-auto'>
                <h2 className='text-[#002a69] text-center font-playfair font-bold text-3xl py-10'>
                    Find Your Co-Tel
                </h2>
                <iframe
                    width='100%'
                    height='400'
                    loading="lazy"
                    className='border-none rounded-sm md:w-[70%] md:mx-auto'
                    src='https://maps.google.com/maps?q=Kolkata%2C%20West%20Bengal&t=&z=13&ie=UTF8&iwloc=B&output=embed'
                />

                <div className=' w-[90%] mx-auto flex justify-center'>
                    <button className='px-8 py-2 rounded-lg text-white bg-[#002a69] mt-10'>
                        <Link to='/contact-us'>Contact Us</Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FindYourCoTel;
