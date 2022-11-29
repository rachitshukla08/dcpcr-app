import parse from 'html-react-parser';

const DisabilityCard = ({ disability }) => {
  return (
    <div className='flex flex-col gap-4 mx-20 px-10 pb-10 shadow-lg pt-5 custom-border max-h-screen overflow-y-auto '>
      <p className='text-xl'>{disability.title}</p>
      <p className='fw-400'>{disability.titleContent}</p>
      {disability.content.map((obj) => {
        return (
          <ul className='list-disc pl-8'>
            {parse(obj.liContent)}
            <ul className={`${obj.subLiContent ? 'pl-8 pt-4' : ''}`}>
              {parse(obj.subLiContent)}
            </ul>
          </ul>
        );
      })}
    </div>
  );
};

export default DisabilityCard;
