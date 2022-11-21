import { useState } from "react";
import { serviceForm } from "../data/data";

const ServiceForm = () => {
  const [value, setValue] = useState("");
  const [disabilityType, setDisabilityType] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const checkValue = (value) => {
    console.log(value, typeof value);
    if (parseInt(value) >= 100) setValue("100");
    else if (parseInt(value) <= 0) setValue("");
    else setValue(value++);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h2>{serviceForm.formHeading}</h2>
        <label htmlFor="DOB">{serviceForm.dob}</label>
        <input type="date" placeholder={serviceForm.dobPlaceholder} required />
        <label htmlFor="familyIncome">{serviceForm.familyIncome}</label>

        <input list="familyIncome" />
        <datalist id="familyIncome">
          {serviceForm.incomeList.map((income, i) => (
            <option key={i} value={income} />
          ))}
        </datalist>
        <br />
        <label htmlFor="category">{serviceForm.category}</label>
        {serviceForm.categoryList.map((category, i) => {
          return (
            <div>
              <input
                key={i}
                type="checkbox"
                id={category}
                name="category"
                value={category}
              />
              <label htmlFor="category">{category}</label>
            </div>
          );
        })}

        <label htmlFor="disabilityType">{serviceForm.disabilityType}</label>
        {serviceForm.disabilityList.map((disability, i) => {
          return (
            <div>
              <input
                key={i}
                type="radio"
                id={disability}
                name="disability"
                value={disability}
              />
              <label htmlFor="disability">{disability}</label>
            </div>
          );
        })}

        <label htmlFor="disabilityPercentage">
          {serviceForm.disabilityPercentage}
        </label>
        <input
          type="number"
          onChange={(e) => checkValue(e.target.value)}
          value={value}
        />
      </form>
    </div>
  );
};

export default ServiceForm;
