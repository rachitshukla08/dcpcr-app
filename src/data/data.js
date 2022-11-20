const navlinks = [
  { name: "Home", path: "/" },
  { name: "Find the Service", path: "/service" },
  { name: "Disability info", path: "/disability-info" },
  { name: "Essential Docs", path: "/docs" },
  { name: "Resources", path: "/resources" },
];

const contentDis = {
  defaultOne: `
  The Rights of Persons with Disabilities Act, 2016, defines the term Person with Disability as “a person with long term physical, mental, intellectual or sensory impairment which, in interaction with barriers, hinders his full and effective participation in society equally with others.”`,
  defaultTwo: `The Act also specifies a comprehensive list of 21 disabilities, which are included under the ambit of the Act and are broadly classified into 6 major categories`,
  defaultLink: `https://legislative.gov.in/sites/default/files/A2016-49_1.pdf`,
  cards: [
    {
      name: "Physical Disability",
      content: "_PhysicalDisabilty",
      type: "physical",
    },
    {
      name: "Intellectual Disability",
      content: "_Intellectual Disability",
      type: "intellectual",
    },
    {
      name: "Mental Disability",
      content: "_Mental",
      type: "mental",
    },
    {
      name: "Neurological",
      content: "_Neurological",
      type: "neurological",
    },
    {
      name: "Blood Disorder",
      content: "_Blood Disorder",
      type: "blood",
    },
    {
      name: "Multiple Disability",
      content: "_Multiple Disability",
      type: "multiple",
    },
  ],
};

export { navlinks, contentDis };
