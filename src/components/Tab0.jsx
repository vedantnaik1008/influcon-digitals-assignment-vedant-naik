import PropTypes from 'prop-types';

const Tab0 = ({ setClick, click, tab, setTab }) => {
    console.log('tab0', tab, click);
    return (
        <button
            onClick={() => {
                setClick(true);
                setTab(1);
            }}
            className={`${
                click && tab > 0
                    ? 'hidden'
                    : 'px-8 py-2 rounded-lg text-white bg-[#002a69] mt-10'
            }`}>
            Contact Us
        </button>
    );
};

Tab0.propTypes = {
    setClick: PropTypes.func.isRequired,
    click: PropTypes.bool.isRequired,
    tab: PropTypes.number.isRequired,
    setTab: PropTypes.func.isRequired
};

export default Tab0;