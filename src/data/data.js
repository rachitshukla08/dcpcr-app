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
      imgUrl: "../assets/disability/physical.png",
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

  physical: {
    title: "Physical Disability",
    titleContent:
      "Under the overall ambit of Physical Disability, three types of disabilities are broadly classified:",
    liTitle: "Locomotor Disabilities:",
    liContent:
      "Locomotor Disability is the disability of the bones, joints or muscles leading to substantial restriction of the movement of the limbs or a usual form of cerebral palsy. Different types of locomotor disabilities are classified as the following-",
    subLiContent: `<li>Leprosy cured person- <span class="fw-400">Any person who has been cured of leprosy but is suffering from- loss of sensation in hands or feet as well as loss of sensation and partial paralysis in the eyelid but with no visible deformity; visible deformity and partial paralysis but having sufficient mobility in their hands and feet to enable them to engage in normal economic activity; extreme physical deformity as well as advanced age which prevents the person from undertaking any gainful occupation.</span></li></br><li>Cerebral palsy - <span class="fw-400">A group of non-progressive conditions characterised by abnormal motor control posture resulting from brain insult or injuries occurring in the perinatal, neonatal or infant period of development.</span></li></br><li>Dwarfism - <span class="fw-400">Medical or genetic condition resulting in an adult height of 4 feet 10 inches (147 centimetres) or less.</span></li></br><li>Muscular dystrophy - <span class="fw-400">A group of hereditary genetic muscle diseases that weakens the muscles that move the human body. A person with multiple dystrophy has incorrect and missing information in their genes, which prevents them from making the proteins they need for healthy muscles. Dystrophy is a disorder in which an organ or tissue of the body wastes away.</span></li></br><li>Acid attack victims - <span class="fw-400">A person disfigured due to violent assaults by throwing of acid or similar corrosive substance.</span></li>`,
  },
};

const serviceForm = {
  formHeading: "Let us help you find relevant scheme and services for you!",
  dob: "Date of Birth",
  dobPlaceholder: "DD/MM/YYYY",
  familyIncome: "Annual Family Income (Optional)",
  category:
    "Any specific category of scheme and services, you are interested in? (Optional)",
  disabilityType: "Type of disability?",
  disabilityPercentage: "Disability percentage% (Optional)",
  incomeList: [
    "0 - 20,000",
    "20,000 - 50,000",
    "50,000 - 2,50,000",
    "2,50,000 - 5,00,000",
    "5,00,000 or above",
  ],
  categoryList: [
    "All",
    "Educational",
    "Health",
    "Financial",
    "Skill & Employment",
  ],
  disabilityList: [
    "Physical disability",
    "Intellectual disability",
    "Mental disability",
    "Neurological",
    "Blood disorder",
    "Multiple disability",
  ],
};

export { navlinks, contentDis, serviceForm };
