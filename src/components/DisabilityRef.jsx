import docData from '../data/docData';
import Accordian from './Accordian';

const DisabilityRef = () => {
  return (
    <div className='mx-20 shadow-lg'>
      <Accordian open={true} title={'Referrences'} level={1}>
        {docData.map((d) => {
          return (
            <Accordian key={d.id} title={d.title} body={d.body} level={3} />
          );
        })}
      </Accordian>
    </div>
  );
};

export default DisabilityRef;
