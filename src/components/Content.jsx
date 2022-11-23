import { useNavigate } from "react-router-dom";
import "../styles/Content.css";
import { homeContent } from "../data/data";

const Content = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <section className="pt-20 px-16 custom-height overflow-y-clip custom-img background-tint">
        <div className="flex flex-col gap-14 centre-align color-white">
          <h1 className="text-5xl">{homeContent.title}</h1>
          <p className="text-center px-16">{homeContent.content}</p>
          <button className="start-btn" onClick={() => navigate("/service")}>
            {homeContent.getStarted}
          </button>
          <p>{homeContent.rights}</p>
        </div>
      </section>
    </div>
  );
};

export default Content;
