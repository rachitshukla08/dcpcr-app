import "../styles/Content.css";

const Content = () => {
  return (
    <div className="">
      <section className="pt-20 px-16 custom-height overflow-y-clip custom-img background-tint">
        <div className="flex flex-col gap-14 centre-align color-white">
          <h1 className="text-5xl">Child Rights</h1>
          <p className="text-center px-16">
            The Delhi Commission for Protection of Child Rights has attempted to
            create extensive repository of all existing entitlements and
            relevant information which could be of benefit to Persons with
            Disabilities & their caregivers in Delhi. This website aims to
            address the information asymmetry by creating awareness about the
            rights of Persons with Disabilities, especially Children with
            Special Needs or Children who have parents with disabilities &
            assist them in understanding the means of leveraging rightful
            entitlements for their own benefit.
          </p>
          <button className="start-btn">Get started</button>
          <p>Click to know your rights & entitlement</p>
        </div>
      </section>
    </div>
  );
};

export default Content;
