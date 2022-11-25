import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Data from '../data/dataAcc';
import Accordian from './Accordian';

const SearchContents = () => {
  const [searchParams] = useSearchParams();

  let categories = searchParams.get('catagory') || '1,2,3,4,5';
  let dob = searchParams.get('dob');
  let income = searchParams.get('income') || 0;
  let dpercentage = searchParams.get('dpercentage') || 0;
  let query = searchParams.get('q');
  if (income === 'null') income = 999999;
  if (!dpercentage) dpercentage = 100;

  let age;
  if (dob) {
    const calculate_age = (dob) => {
      var diff_ms = Date.now() - dob.getTime();
      var age_dt = new Date(diff_ms);

      return Math.abs(age_dt.getUTCFullYear() - 1970);
    };
    age = calculate_age(new Date(dob));
  }

  let categoryList = categories.split(',');
  const categoryArr = Data.filter((d) => {
    return categoryList.includes(d.id);
  });

  let filteredData;

  if (query) {
    filteredData = categoryArr.map((c) => {
      let filteredEntitlements = c.entitlements.filter((e) => {
        return e.title.toLowerCase().includes(query.toLowerCase());
      });
      return { ...c, entitlements: filteredEntitlements };
    });
  } else if (dob) {
    filteredData = categoryArr.map((c) => {
      let filteredEntitlements = c.entitlements.filter(
        ({ minAge, maxAge, maxIncome, minDisabilty }) => {
          return (
            age >= minAge &&
            age <= maxAge &&
            income <= maxIncome &&
            dpercentage >= minDisabilty
          );
        }
      );
      return { ...c, entitlements: filteredEntitlements };
    });
  } else {
    filteredData = categoryArr;
  }

  console.log(filteredData);

  return (
    <div className='py-4'>
      <div className='w-full text-base font-semibold text-black'>
        Search Results
      </div>

      {filteredData &&
        filteredData.map((d) => {
          return (
            d.entitlements.length > 0 && (
              <Accordian
                key={d.id}
                open={true}
                title={d.catagory}
                icon={d.icon}
                level={1}
              >
                {d.entitlements &&
                  d.entitlements.map((e) => {
                    return (
                      <Accordian key={e.id} title={e.title} level={2}>
                        {e.questions.map((q) => {
                          return (
                            <Accordian
                              key={q.id}
                              title={q.title}
                              body={q.body}
                              level={3}
                            />
                          );
                        })}
                      </Accordian>
                    );
                  })}
              </Accordian>
            )
          );
        })}
    </div>
  );
};

export default SearchContents;
