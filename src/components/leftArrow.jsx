import leftArrowSVG from '../../public/svg/left-arrow.svg';
import PropTypes from 'prop-types';

const LeftArrow = ({ click, submitted, handleLeftArrow }) => {
    return (
        <div
            onClick={handleLeftArrow}
            className={`${
                !click
                    ? 'hidden'
                    : `absolute z-40 cursor-pointer ${
                          submitted
                              ? 'top-[60%] md:top-[15%]'
                              : 'top-[90%] md:top-[31%]'
                      } left-1 md:left-10 lg:left-20 `
            }`}>
            <img
                src={leftArrowSVG}
                alt='left-arrow'
                height={24}
                width={23}
                className='w-6 h-6'
            />
        </div>
    );
};

LeftArrow.propTypes = {
    click: PropTypes.bool.isRequired,
    submitted: PropTypes.bool.isRequired,
    handleLeftArrow: PropTypes.func.isRequired
};

export default LeftArrow;
