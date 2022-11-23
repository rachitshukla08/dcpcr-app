import DisabilityCard from "../components/DisabilityCard";
import DisabilityRef from "../components/DisabilityRef";

import { essentialDocs } from "../data/data";


const EssentialDocs = () => {
  return (
    <>
    <div className="mt-12 px-16">
      <DisabilityCard disability={essentialDocs.card} />
    </div>
    <div className="mt-12 px-16">
      <DisabilityRef/>
    </div>
    
    </>
  );
};

export default EssentialDocs;
