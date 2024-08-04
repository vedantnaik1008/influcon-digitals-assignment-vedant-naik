import PropTypes from 'prop-types';

const Tab1 = ({ handleChange, setTab, formData, tab1Disabled }) => {
    return (
        <div className='w-[100%] bg-[#E2F1FF]  rounded-md my-10 px-3 py-5 md:px-5 md:py-8 flex flex-col   gap-5'>
            <label htmlFor='name' className='flex flex-col gap-2 '>
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
            <label htmlFor='phone' className='flex flex-col gap-2'>
                <p>Enter Your Phone Number:</p>
                <input
                    id='phone'
                    className='bg-white rounded-md w-full  p-2'
                    type='tel'
                    value={formData.phone}
                    onChange={handleChange}
                    name='phone'
                />
            </label>
            <label htmlFor='email' className='flex flex-col gap-2'>
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
                    disabled={tab1Disabled}
                    onClick={() => setTab(2)}
                    className='bg-[#002a69] disabled:opacity-60 text-white px-8 py-1 rounded-3xl'>
                    Next
                </button>
            </div>
        </div>
    );
};

// Assuming this is part of your tab1.jsx component file

// Define PropTypes
Tab1.propTypes = {
    handleChange: PropTypes.func.isRequired,
    setTab: PropTypes.func.isRequired,
    formData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }).isRequired,
    tab1Disabled: PropTypes.bool.isRequired
};


export default Tab1;
