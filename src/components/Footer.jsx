import logo from '../../public/image/cotel-final-1.png'
import location from '../../public/svg/location.svg';
import message from '../../public/svg/message.svg';
import contact from '../../public/svg/contact.svg';
import instagram from '../../public/svg/instagram.svg';
import facebook from '../../public/svg/facebook.svg';
import linkedin from '../../public/svg/linkedin.svg';

const Footer = () => {
  return (
      <footer className='py-10 bg-[#002A69] text-white'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center  mx-auto w-[90%]'>
              <img loading='lazy'
                  src={logo}
                  alt='logo'
                  className='rounded-full w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-cover md:justify-self-center'
              />
              <div className='md:justify-self-center'>
                  <h3 className='font-playfair text-white text-2xl font-medium mb-3'>
                      Contact Us :
                  </h3>
                  <ul className='flex flex-col gap-4 mt-4'>
                      <li className='flex gap-3 items-center'>
                          <img loading='lazy'
                              src={location}
                              alt='location'
                              width={20}
                              height={20}
                          />
                          <p>12 A, Chakraberia Ln Ballygunge, 700019</p>
                      </li>
                      <li className='flex gap-3 items-center'>
                          <img loading='lazy'
                              src={message}
                              alt='message'
                              width={20}
                              height={20}
                          />
                          <p>cotel.arihant@gmail.com</p>
                      </li>
                      <li className='flex gap-3 items-center'>
                          <img loading='lazy'
                              src={contact}
                              alt='contact'
                              width={20}
                              height={20}
                          />
                          <p>+91 98309 48647</p>
                      </li>
                  </ul>
              </div>

              <div className='flex flex-col gap-4 md:justify-self-center'>
                  <p>Get in Touch with Us:</p>
                  <div className='flex gap-10 items-center'>
                      <a href=''>
                          <img loading='lazy'
                              src={facebook}
                              alt='facebook'
                              width={10}
                              height={10}
                          />
                      </a>
                      <a href=''>
                          <img loading='lazy'
                              src={instagram}
                              alt='instagram'
                              width={20}
                              height={20}
                          />
                      </a>
                      <a href=''>
                          <img loading='lazy'
                              src={linkedin}
                              alt='linkedin'
                              width={20}
                              height={20}
                          />
                      </a>
                  </div>
              </div>
          </div>
          <hr className='bg-white mt-10 mx-auto w-[95%] md:w-[50%]' />
          <p className='text-center'>Designed By InfluCon Digitals </p>
      </footer>
  );
}

export default Footer
