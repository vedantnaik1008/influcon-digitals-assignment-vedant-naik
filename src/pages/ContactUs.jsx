import hero_wave from '../../public/svg/Group 53.svg';
import LeftArrow from '../components/leftArrow';
import Tab0 from '../components/Tab0';
import Tab1 from '../components/tab1';
import Tab2 from '../components/tab2';
import Tab3 from '../components/tab3';
import Tab4 from '../components/tab4';
import Tab5 from '../components/tab5';
import useForm from '../hook/useForm';

const ContactUs = () => {
    const {
        handleChange,
        handleSubmit,
        setClick,
        click,
        tab,
        setTab,
        formData,
        submitted,
        tab1Disabled,
        tab2Disabled,
        tab3Disabled,
        tab4Disabled,
        handleLeftArrow
    } = useForm();
    console.log(tab, "ContactUs");
    console.log(formData, 'ContactUs');
    return (
        <>
            <section className='py-20 hero-waves relative '>
                <div>
                    <img
                        src={hero_wave}
                        alt='hero-wave'
                        className='bg-hero_wave bg-no-repeat w-full absolute bottom-0 left-0 object-cover h-[60%] md:h-auto'
                    />
                </div>
                <div className='flex flex-col justify-center items-center  py-8 relative z-10'>
                    <div className='flex justify-between items-center'>
                        {tab === 0 ? null : <LeftArrow click={click} submitted={submitted} handleLeftArrow={handleLeftArrow}/>}
                        <h1 className='text-[#002a69] text-center font-playfair font-extrabold text-3xl max-w-[300px] md:max-w-[550px]  uppercase'>
                            {submitted && tab === 5
                                ? 'Thank you for contacting us. you will hear from us soon'
                                : 'Know where you want to stay? contact us'}
                        </h1>
                    </div>

                    {submitted && tab === 5 && <Tab5 />}
                </div>

                {submitted ? null : (
                    <div className='relative flex flex-col justify-center items-center'>
                        {tab === 0 && (
                            <Tab0
                                setClick={setClick}
                                click={click}
                                tab={tab}
                                setTab={setTab}
                            />
                        )}
                        {click ? (
                            <form
                                onSubmit={handleSubmit}
                                className=' text-[#002a69] w-[80%] md:w-[60%]'>
                                {tab === 1 && (
                                    <Tab1
                                        handleChange={handleChange}
                                        setTab={setTab}
                                        formData={formData}
                                        tab1Disabled={tab1Disabled}
                                    />
                                )}
                                {tab === 2 && (
                                    <Tab2
                                        handleChange={handleChange}
                                        setTab={setTab}
                                        formData={formData}
                                        tab1Disabled={tab2Disabled}
                                    />
                                )}
                                {tab === 3 && (
                                    <Tab3
                                        handleChange={handleChange}
                                        setTab={setTab}
                                        formData={formData}
                                        tab1Disabled={tab3Disabled}
                                    />
                                )}
                                {tab === 4 && (
                                    <Tab4
                                        handleChange={handleChange}
                                        formData={formData}
                                        tab1Disabled={tab4Disabled}
                                    />
                                )}
                            </form>
                        ) : null}
                    </div>
                )}
            </section>
        </>
    );
};

export default ContactUs;