import { useState } from "react";
import { contentDis } from "../data/data";
import "../styles/ContentDis.css";

const ContentDis = () => {
  const [disabilityType, setDisabilityType] = useState("default");
  const setType = (type) => {
    setDisabilityType(type);
  };
  const renderData = () => {
    if (disabilityType === "default") {
      return (
        <div className="flex flex-col gap-4 text-center  centre-align">
          <div>{contentDis.defaultOne}</div>
          <div>
            {contentDis.defaultTwo}{" "}
            <a
              className="underline decoration-indigo-500"
              href={contentDis.defaultLink}
            >
              {" "}
              {contentDis.defaultLink}
            </a>
          </div>
        </div>
      );
    } else if (disabilityType === "physical") {
      return (
        <div>
          <p>Physical Disability</p>
        </div>
      );
    }
  };
  return (
    <div className="">
      <section className="pt-20 px-16">
        {renderData()}
        {/* Cards */}
        <div className="grid grid-rows-2 grid-cols-3 gap-x-20 gap-y-9 mt-20">
          {contentDis.cards.map((card, idx) => {
            return (
              <button
                onClick={() => setType(card.type)}
                className="px-8 py-6 bg-gray-200 disability-card"
                key={idx}
              >
                {card.name}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ContentDis;
