import PropTypes from 'prop-types';

const Tab2 = ({ handleChange, setTab, formData, tab2Disabled }) => {
    return (
        <div className='w-full md:w-[60%] lg:w-[50%] bg-[#E2F1FF]  rounded-md my-10 px-3 py-5 md:px-5 md:py-8 flex flex-col   gap-5 mx-auto'>
            <label className='flex flex-col gap-2'>
                <p>Select Your Gender:</p>
                <div className='flex gap-4'>
                    <div className='flex gap-2'>
                        <input
                            type='radio'
                            onChange={handleChange}
                            name='gender'
                            checked={formData.gender = "Male"} // Correctly compare the current value
                        />
                        <p className='text-[#002a69]'>Male</p>
                    </div>
                    <div className='flex gap-2'>
                        <input
                            type='radio'
                            onChange={handleChange}
                            name='gender'
                            checked={formData.gender = 'Female'} // Correctly compare the current value
                        />
                        <p className='text-[#002a69]'>Female</p>
                    </div>
                    <div className='flex gap-2'>
                        <input
                            type='radio'
                            onChange={handleChange}
                            name='gender'
                            checked={formData.gender = 'Other'} // Correctly compare the current value
                        />
                        <p className='text-[#002a69]'>Other</p>
                    </div>
                </div>
            </label>
            <label htmlFor='dob' className='flex flex-col gap-2'>
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
                    disabled={tab2Disabled}
                    type='button'
                    onClick={() => setTab(3)}
                    className='bg-[#002a69]  disabled:opacity-60 text-white px-8 py-1 rounded-3xl'>
                    Next
                </button>
            </div>
        </div>
    );
};

Tab2.propTypes = {
    handleChange: PropTypes.func.isRequired,
    setTab: PropTypes.func.isRequired,
    formData: PropTypes.shape({
        gender: PropTypes.string.isRequired,
        dob: PropTypes.string.isRequired
    }).isRequired,
    tab2Disabled: PropTypes.bool.isRequired
};

export default Tab2;
