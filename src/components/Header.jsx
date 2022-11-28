import '../styles/Header.css';
import FontSizeChanger from 'react-font-size-changer';

const Header = () => {
  return (
    <div>
      <div className='border-b-2 flex justify-end px-32 h-16 text-center font-medium gap-4'>
        {/* Top part */}
        <span className='header-element'>
          <svg
            width='22'
            height='18'
            viewBox='0 0 22 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M19.25 0.75H2.74996C1.73704 0.75 0.916626 1.57042 0.916626 2.58333V13.5833C0.916626 14.5963 1.73704 15.4167 2.74996 15.4167H7.33329V17.25H14.6666V15.4167H19.25C20.2629 15.4167 21.0741 14.5963 21.0741 13.5833L21.0833 2.58333C21.0833 1.57042 20.2629 0.75 19.25 0.75ZM19.25 13.5833H2.74996V2.58333H19.25V13.5833ZM17.4166 5.33333H7.33329V7.16667H17.4166V5.33333ZM17.4166 9H7.33329V10.8333H17.4166V9ZM6.41663 5.33333H4.58329V7.16667H6.41663V5.33333ZM6.41663 9H4.58329V10.8333H6.41663V9Z'
              fill='#0A0E6A'
            />
          </svg>
        </span>

        <span className='header-element'>Screen Reader Access</span>
        <span className='ml-2 header-element'> | </span>
        <span className='header-element'>
          <svg
            width='19'
            height='15'
            viewBox='0 0 19 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.75 8H3.5V14.4167H6.25V8H9V5.25H0.75V8ZM6.25 3.41666H10.8333V14.4167H13.5833V3.41666H18.1667V0.666664H6.25V3.41666Z'
              fill='#0a0e6a'
            />
          </svg>
        </span>
        <FontSizeChanger
          targets={['#app']}
          options={{
            stepSize: 2,
            range: 3,
          }}
          customButtons={{
            up: <span style={{ fontSize: '16px' }}>A+</span>,
            down: <span style={{ fontSize: '16px' }}>A-</span>,
            styles: {
              color: '#0a0e6a',
            },
          }}
        />
        <span className='header-element'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M18.1 10H16.1C15.5 10 15.1 10.4 15.1 11C15.1 11.6 15.5 12 16.1 12V14H14.9C15 13.7 15.1 13.3 15.1 13C15.1 11.3 13.8 10 12.1 10C11 10 10 10.6 9.5 11.5C9.2 12 9.4 12.6 9.9 12.9C10.4 13.2 11 13 11.3 12.5C11.5 12.2 11.8 12 12.2 12C12.8 12 13.2 12.4 13.2 13C13.2 13.6 12.8 14 12.2 14C11.6 14 11.2 14.4 11.2 15C11.2 15.6 11.6 16 12.2 16C12.8 16 13.2 16.4 13.2 17C13.2 17.6 12.8 18 12.2 18C11.8 18 11.5 17.8 11.3 17.5C11 17 10.4 16.9 9.9 17.1C9.4 17.3 9.3 18 9.5 18.5C10.3 19.9 12.2 20.4 13.6 19.6C14.5 19.1 15.1 18.1 15.1 17C15.1 16.7 15 16.3 14.9 16H16.1V19C16.1 19.6 16.5 20 17.1 20C17.7 20 18.1 19.6 18.1 19V12C18.7 12 19.1 11.6 19.1 11C19.1 10.4 18.6 10 18.1 10ZM11.1 5H12.1C12.7 5 13.1 5.4 13.1 6V7C13.1 7.6 13.5 8 14.1 8C14.7 8 15.1 7.6 15.1 7V6C15.1 4.3 13.8 3 12.1 3H11.1C10.5 3 10.1 3.4 10.1 4C10.1 4.6 10.5 5 11.1 5ZM6.1 9.2C6.2 9.7 6.8 10.1 7.3 9.9C7.8 9.7 8.2 9.2 8 8.7L6.2 1.7C6 0.499999 4.7 -0.200001 3.5 0.0999985C2.7 0.299999 2 0.899999 1.8 1.7L0 8.7C0 9.3 0.3 9.8 0.8 10C1.3 10.1 1.9 9.8 2 9.3L2.6 7H5.5L6.1 9.2ZM3.1 5L3.8 2.2C3.8 2.1 4 2 4.2 2C4.3 2 4.3 2.1 4.4 2.2L5 5H3.1ZM7.1 14H6.1C5.5 14 5.1 13.6 5.1 13V12C5.1 11.4 4.7 11 4.1 11C3.5 11 3.1 11.4 3.1 12V13C3.1 14.7 4.4 16 6.1 16H7.1C7.7 16 8.1 15.6 8.1 15C8.1 14.4 7.6 14 7.1 14Z'
              fill='#0a0e6a'
            />
          </svg>
        </span>
        <span className='header-element'> English </span>
        <span className='header-element'>
          {' '}
          <svg
            width='14'
            height='9'
            viewBox='0 0 14 9'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12.8333 1.5L6.99996 7.33333L1.16663 1.5'
              stroke='#0a0e6a'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </span>
      </div>
      {/* 2 buttons */}
      <div className='mt-5 flex gap-16 px-32'>
        <img
          className='dcpcr-img'
          src={require('../assets/dcpcr-left.png')}
          alt=''
        />
        <img
          className='dcpcr-img ml-auto'
          src={require('../assets/dcpcr-right.png')}
          alt=''
        />
      </div>
    </div>
  );
};

export default Header;
