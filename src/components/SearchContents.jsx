import React from "react";
import { useSearchParams } from "react-router-dom";
import Data from "../data/dataAcc";
import Accordian from "./Accordian";

const SearchContents = () => {
  const [searchParams] = useSearchParams();

  const catagoryId = searchParams.get("catagory") || null;

  const filteredData =
    !catagoryId || catagoryId === "0"
      ? Data
      : Data.filter((d) => {
          return d.id === catagoryId;
        });

  return (
    <div className="container py-4">
      <div className="w-full text-base font-semibold text-black">
        Search Results
      </div>
      {filteredData.map((d) => {
        return (
          <Accordian key={d.id} title={d.catagory} icon={d.icon} level={1}>
            {d.entitlements.map((e) => {
              return (
                <Accordian title={e.title} level={2}>
                  {e.questions.map((q) => {
                    return (
                      <Accordian title={q.title} body={q.body} level={3} />
                    );
                  })}
                </Accordian>
              );
            })}
          </Accordian>
        );
      })}
    </div>
  );
};

export default SearchContents;
