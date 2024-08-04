import PropTypes from 'prop-types';

const Tab4 = ({ handleChange, formData, tab4Disabled }) => {
    return (
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
                    <option value='' defaultValue={''}></option>
                    <option value='twitter.com'>twitter.com</option>
                    <option value='facebook'>facebook</option>
                    <option value='linkedin'>linkedin</option>
                    <option value='others'>other</option>
                </select>
            </label>
            <div className='self-center lg:self-end'>
                <button
                    disabled={tab4Disabled}
                    type='submit'
                    className='bg-[#002a69]  disabled:opacity-60 text-white px-8 py-2 rounded-xl'>
                    Submit
                </button>
            </div>
        </div>
    );
};

Tab4.propTypes = {
    handleChange: PropTypes.func.isRequired,
    setTab: PropTypes.func.isRequired,
    formData: PropTypes.shape({
        platform: PropTypes.string.isRequired
    }).isRequired,
    tab4Disabled: PropTypes.bool.isRequired
};

export default Tab4;
