import docData from "../data/docData";
import Accordian from "./Accordian";

const DisabilityRef = () => {
  return (
    <div className="mx-20 shadow-lg">
      <Accordian open={true} title={"References"} level={1}>
        {docData.map((d) => {
          return (
            <Accordian
              className="px-8"
              key={d.id}
              title={d.title}
              body={d.body}
              level={3}
            />
          );
        })}
      </Accordian>
    </div>
  );
};

export default DisabilityRef;
