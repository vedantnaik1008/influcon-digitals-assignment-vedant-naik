import useForm from "../hook/useForm";


const ContactUsForm = () => {
    const {handleChange, handleSubmit, setClick, click, tab, setTab, formData, submitted } = useForm()
    return submitted ? null : (
        <div className='relative flex flex-col justify-center items-center'>
            <button
                onClick={() => setClick(true)}
                className={`${
                    click
                        ? 'hidden'
                        : 'px-8 py-2 rounded-lg text-white bg-[#002a69] mt-10'
                }`}>
                Contact Us
            </button>
            {click ? (
                <form
                    onSubmit={handleSubmit}
                    className=' text-[#002a69]'>
                    {tab === 1 && (
                        <>
                            <div className='w-[100%] bg-[#E2F1FF]  rounded-md my-10 px-3 py-5 md:px-5 md:py-8 flex flex-col   gap-5'>
                                <label
                                    htmlFor='name'
                                    className='flex flex-col gap-2 '>
                                    <p>Enter Your Full Name:</p>
                                    <input
                                        id='name'
                                        className='bg-white rounded-md w-full  p-2'
                                        type='text'
                                        value={formData.name}
                                        onChange={handleChange}
                                        name='name'
                                    />
                                </label>
                                <label
                                    htmlFor='phone'
                                    className='flex flex-col gap-2'>
                                    <p>Enter Your Phone Number:</p>
                                    <input
                                        id='phone'
                                        className='bg-white rounded-md w-full  p-2'
                                        type='tel'
                                        value={Number(formData.phone)}
                                        onChange={handleChange}
                                        name='phone'
                                    />
                                </label>
                                <label
                                    htmlFor='email'
                                    className='flex flex-col gap-2'>
                                    <p>Enter Your Email Address:</p>
                                    <input
                                        id='email'
                                        className='bg-white rounded-md w-full  p-2'
                                        type='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        name='email'
                                    />
                                </label>

                                <div className='self-center'>
                                    <button
                                        type='button'
                                        onClick={() => setTab(2)}
                                        className='bg-[#002a69] text-white px-8 py-1 rounded-3xl'>
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    )}

                    {tab === 2 && (
                        <>
                            <div className='w-full md:w-[60%] lg:w-[50%] bg-[#E2F1FF]  rounded-md my-10 px-3 py-5 md:px-5 md:py-8 flex flex-col   gap-5 mx-auto'>
                                <label className='flex flex-col gap-2'>
                                    <p>Select Your Gender:</p>
                                    <div className='flex gap-4'>
                                        <div className='flex gap-2'>
                                            <input
                                                type='radio'
                                                value={
                                                    (formData.gender = 'Male')
                                                }
                                                onChange={handleChange}
                                                name='gender'
                                            />
                                            <p className='text-[#002a69]'>
                                                Male
                                            </p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <input
                                                type='radio'
                                                value={
                                                    (formData.gender = 'Female')
                                                }
                                                onChange={handleChange}
                                                name='gender'
                                            />
                                            <p className='text-[#002a69]'>
                                                Female
                                            </p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <input
                                                type='radio'
                                                value={
                                                    (formData.gender = 'Other')
                                                }
                                                onChange={handleChange}
                                                name='gender'
                                            />
                                            <p className='text-[#002a69]'>
                                                Other
                                            </p>
                                        </div>
                                    </div>
                                </label>
                                <label
                                    htmlFor='dob'
                                    className='flex flex-col gap-2'>
                                    <p>Select Your DOB:</p>
                                    <input
                                        id='dob'
                                        className='bg-white rounded-md w-full p-2'
                                        type='date'
                                        value={formData.dob}
                                        onChange={handleChange}
                                        name='dob'
                                    />
                                </label>

                                <div className='self-center'>
                                    <button
                                        type='button'
                                        onClick={() => setTab(3)}
                                        className='bg-[#002a69] text-white px-8 py-1 rounded-3xl'>
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    )}

                    {tab === 3 && (
                        <>
                            <div className='w-full md:w-[60%] bg-[#E2F1FF]  rounded-md my-10 px-3 py-5 md:px-5 md:py-8 flex flex-col   gap-5 mx-auto'>
                                <label
                                    htmlFor='relocationDate'
                                    className='flex flex-col gap-2'>
                                    <p>When do you want to move in?</p>
                                    <input
                                        id='relocationDate'
                                        className='bg-white rounded-md w-full p-2'
                                        type='date'
                                        value={formData.relocationDate}
                                        onChange={handleChange}
                                        name='relocationDate'
                                    />
                                </label>
                                <label
                                    htmlFor='location'
                                    className='flex flex-col gap-2'>
                                    <p>Select Your Location</p>
                                    <select
                                        name='location'
                                        id='location'
                                        value={formData.location}
                                        onChange={handleChange}
                                        className='bg-white rounded-md w-full  p-2'>
                                        <option value='goa'>goa</option>
                                        <option value='west bengal'>
                                            west bengal
                                        </option>
                                        <option value='maharashtra'>
                                            maharashtra
                                        </option>
                                    </select>
                                </label>

                                <div className='self-center'>
                                    <button
                                        type='button'
                                        onClick={() => setTab(4)}
                                        className='bg-[#002a69] text-white px-8 py-1 rounded-3xl'>
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                    {tab === 4 && (
                        <>
                            <div className='w-full  bg-[#E2F1FF]  rounded-md my-10 px-3 py-5 md:px-5 md:py-8 flex flex-col gap-5 mx-auto lg:flex-row lg:gap-8  justify-center'>
                                <label
                                    htmlFor='platform'
                                    className='flex flex-col gap-2 md:flex-grow'>
                                    <p>How did you hear about us?</p>
                                    <select
                                        name='platform'
                                        id='platform'
                                        value={formData.platform}
                                        onChange={handleChange}
                                        className='flex-grow bg-white rounded-md w-full p-2'>
                                        <option value='twitter.com'>
                                            twitter.com
                                        </option>
                                        <option value='facebook'>
                                            facebook
                                        </option>
                                        <option value='linkedin'>
                                            linkedin
                                        </option>
                                        <option value='others'>other</option>
                                    </select>
                                </label>
                                <div className='self-center lg:self-end'>
                                    <button
                                        type='submit'
                                        className='bg-[#002a69] text-white px-8 py-2 rounded-xl'>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </form>
            ) : null}
        </div>
    );
};

export default ContactUsForm
