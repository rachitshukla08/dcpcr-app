import DisabilityCard from "../components/DisabilityCard";
import { resources } from "../data/data";

const Resources = () => {
  return (
    <div className="mt-12 px-16">
      <DisabilityCard disability={resources} />
    </div>
  );
};

export default Resources;
