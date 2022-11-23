import DisabilityCard from "../components/DisabilityCard";
import { essentialDocs } from "../data/data";

const EssentialDocs = () => {
  return (
    <div className="mt-12 px-16">
      <DisabilityCard disability={essentialDocs.card} />
    </div>
  );
};

export default EssentialDocs;
