import { Link } from 'react-router-dom';
import leftArrow from '../../public/svg/left-arrow.svg';
import useForm from '../hook/useForm';

const GoBackButton = () => {
    const { click, submitted } = useForm();
    return (
        <div
            className={`${
                !click
                    ? 'hidden'
                    : `absolute z-40 ${
                          submitted
                              ? 'top-[60%] md:top-[15%]'
                              : 'top-[90%] md:top-[31%]'
                      } left-1 md:left-10 lg:left-20 `
            }`}>
            <Link to={'/'}>
                <img
                    src={leftArrow}
                    alt='left-arrow'
                    height={24}
                    width={23}
                    className='w-6 h-6'
                />
            </Link>
        </div>
    );
};

export default GoBackButton;
