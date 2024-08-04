import PropTypes from 'prop-types';

const Tab3 = ({ handleChange, setTab, formData, tab3Disabled }) => {
    return (
        <div className='w-full md:w-[60%] bg-[#E2F1FF]  rounded-md my-10 px-3 py-5 md:px-5 md:py-8 flex flex-col   gap-5 mx-auto'>
            <label htmlFor='relocationDate' className='flex flex-col gap-2'>
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
            <label htmlFor='location' className='flex flex-col gap-2'>
                <p>Select Your Location</p>
                <select
                    name='location'
                    id='location'
                    value={formData.location}
                    onChange={handleChange}
                    className='bg-white rounded-md w-full  p-2'>
                    <option value='goa'>goa</option>
                    <option value='west bengal'>west bengal</option>
                    <option value='maharashtra'>maharashtra</option>
                </select>
            </label>

            <div className='self-center'>
                <button
                    disabled={tab3Disabled}
                    type='button'
                    onClick={() => setTab(4)}
                    className='bg-[#002a69]  disabled:opacity-60 text-white px-8 py-1 rounded-3xl'>
                    Next
                </button>
            </div>
        </div>
    );
};

Tab3.propTypes = {
    handleChange: PropTypes.func.isRequired,
    setTab: PropTypes.func.isRequired,
    formData: PropTypes.shape({
        relocationDate: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired
    }).isRequired,
    tab3Disabled: PropTypes.bool.isRequired
};

export default Tab3;
