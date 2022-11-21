import { useState } from "react";
import { contentDis } from "../data/data";
import "../styles/ContentDis.css";
import parse from "html-react-parser";

const ContentDis = () => {
  const [disabilityType, setDisabilityType] = useState("default");
  const [filteredTypes, setFilteredTypes] = useState(contentDis.cards);
  const setType = (type) => {
    filter(type);
    setDisabilityType(type);
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
            >
              {" "}
              {contentDis.defaultLink}
            </a>
          </div>
        </div>
      );
    } else if (disabilityType === "physical") {
      return (
        <div className="flex flex-col gap-4 mx-20 px-10 pb-10 shadow-lg pt-5 custom-border">
          <p className="text-xl">{contentDis.physical.title}</p>
          <p className="fw-400">{contentDis.physical.titleContent}</p>
          <ul className="list-decimal pl-8">
            <li>
              <span className="">{contentDis.physical.liTitle}</span>
              <span className="fw-400"> {contentDis.physical.liContent}</span>
            </li>
            <ul className="list-disc pl-8 pt-4">
              {parse(contentDis.physical.subLiContent)}
            </ul>
          </ul>
        </div>
      );
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
