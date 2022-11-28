import { useNavigate } from 'react-router-dom';
import '../styles/Content.css';
import { homeContent } from '../data/data';

const Content = () => {
  const navigate = useNavigate();
  return (
    <section className='flex px-16 custom-height justify-center overflow-y-clip custom-img background-tint'>
      <div className='flex flex-col mt-32 max-w-screen-2xl gap-14 items-center color-white'>
        <h1 className='text-6xl '>{homeContent.title}</h1>
        <p className='text-center px-16 text-xl fw-400 '>
          {homeContent.content}
        </p>
        <button className='start-btn' onClick={() => navigate('/service')}>
          {homeContent.getStarted}
        </button>
        <p>{homeContent.rights}</p>
      </div>
    </section>
  );
};

export default Content;
