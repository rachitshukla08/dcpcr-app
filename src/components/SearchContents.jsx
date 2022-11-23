import React from "react";
import { useSearchParams } from "react-router-dom";
import Data from "../data/dataAcc";
import Accordian from "./Accordian";

const SearchContents = () => {
  const [searchParams] = useSearchParams();

  const catagoryId = searchParams.get("catagory") || null;
  const dob = searchParams.get("dob") || null; 
  const income = searchParams.get("income");
  const dpercentage = searchParams.get("dpercentage");

  const calculate_age = (dob) => { 

      var diff_ms = Date.now() - dob.getTime();
      var age_dt = new Date(diff_ms); 

      return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  const age = calculate_age(new Date(dob));
  console.log(age);
  

  const categoryArr =
    !catagoryId || catagoryId === "0"
      ? Data
      : Data.filter((d) => {
          return d.id === catagoryId
        });

  const filteredData = categoryArr.map((c) => {
      let filteredEntitlements = c.entitlements.filter(({minAge,maxAge,maxIncome,minDisabilty}) => {
        return age >= minAge && age <=maxAge && income <= maxIncome && dpercentage >= minDisabilty 
      })
      return {...c, entitlements : filteredEntitlements};
  });  
  
  console.log(filteredData)

  return (
    <div className="container py-4">
      <div className="w-full text-base font-semibold text-black">
        Search Results
      </div>
      {filteredData && filteredData.map((d) => {
        return (
          d.entitlements.length > 0 && <Accordian key={d.id} title={d.catagory} icon={d.icon} level={1}>
            {d.entitlements && d.entitlements.map((e) => {
              return (
                <Accordian key={e.id} title={e.title} level={2}>
                  {e.questions.map((q) => {
                    return (
                      <Accordian key={q.id} title={q.title} body={q.body} level={3} />
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
