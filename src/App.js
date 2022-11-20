import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
import DisabilityInfo from "./views/DisabilityInfo";

const App = () => {
  const [name, setName] = useState("rachit");
  const changeName = () => {
    setName((prev) => (prev === "rachit" ? "ajay" : "rachit"));
  };

  const [fname, setFname] = useState("");
  const [type, setType] = useState("option1");
  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      name: fname,
      desc: "textarea",
      type: type,
    };
    console.log(obj);
  };

  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/disability-info" element={<DisabilityInfo />}></Route>
      </Routes>
      <Footer />
      {/* <button onClick={changeName} className="mt-40">
        Change Name {name}
      </button>
      <form onSubmit={submitHandler}>
        <label>first name</label>
        <input
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <textarea></textarea>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="option1"></option>
        </select>
        <input type="submit" />
      </form> */}
    </div>
  );
};

export default App;
