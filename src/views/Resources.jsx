import parse from 'html-react-parser';
import { resources } from '../data/data';

const Resources = () => {
  return (
    <div className='mt-12 px-16'>
      <div className='flex flex-col gap-4 mx-20 px-10 pb-10 shadow-lg pt-5 custom-border max-h-screen overflow-y-auto '>
        <p className='text-xl'>{resources.title}</p>
        <p className='fw-400'>{resources.titleContent}</p>
        {resources.content.map((obj, key) => {
          return (
            <ul className='pl-4'>
              {parse(obj.liContent)}
              <ol className={`${obj.subLiContent && 'pl-6 pt-2'} font-normal`}>
                {parse(obj.subLiContent)}
              </ol>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Resources;
