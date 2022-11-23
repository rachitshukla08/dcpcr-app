import { useState } from "react";
import { contentDis } from "../data/data";
import "../styles/ContentDis.css";
import DisabilityCard from "./DisabilityCard";

const ContentDis = () => {
  const [disabilityType, setDisabilityType] = useState("default");
  const [filteredTypes, setFilteredTypes] = useState(contentDis.cards);
  const setType = (type) => {
    filter(type);
    setDisabilityType(type);
    window.scrollTo({
      top: 80,
      behavior: "smooth",
    });
  };
  const filter = (type) => {
    let filteredData = contentDis.cards.filter((card) => {
      return card.type !== type;
    });
    setFilteredTypes(filteredData);
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
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              {contentDis.defaultLink}
            </a>
          </div>
        </div>
      );
    } else {
      const disability = contentDis[disabilityType];
      return <DisabilityCard disability={disability} />;
    }
  };
  return (
    <div className="">
      <section className="pt-20 px-16">
        {renderData()}
        {/* Cards */}
        <div className="grid grid-rows-2 grid-cols-3 gap-x-20 gap-y-9 mt-20 pb-20">
          {filteredTypes.map((card, idx) => {
            return (
              <button
                onClick={() => setType(card.type)}
                className={`px-8 py-6 h-44 bg-gray-200 disability-card ${card.type} color-white background-tint`}
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
