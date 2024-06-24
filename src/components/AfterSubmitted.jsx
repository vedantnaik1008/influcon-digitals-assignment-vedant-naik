import correct from '../../public/svg/submiitedc.svg';
import useForm from '../hook/useForm';

const AfterSubmitted = () => {
    const { submitted } = useForm();
  return submitted && (
                        <div className='relative'>
                            <img
                                src={correct}
                                width={100}
                                height={100}
                                alt='submitted'
                                className='mt-10'
                            />
                            <svg
                                className='absolute top-[70px] left-6 h-[40px]'
                                width='57'
                                height='47'
                                viewBox='0 0 57 47'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M4.21045 30.3278L16.2839 42.4012L52.5043 4.45605'
                                    stroke='white'
                                    strokeWidth='8'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </div>
                    )
  
}

export default AfterSubmitted
