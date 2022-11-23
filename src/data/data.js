const homeContent = {
  title: "Child Rights",
  content: `The Delhi Commission for Protection of Child Rights has attempted to
  create extensive repository of all existing entitlements and
  relevant information which could be of benefit to Persons with
  Disabilities & their caregivers in Delhi. This website aims to
  address the information asymmetry by creating awareness about the
  rights of Persons with Disabilities, especially Children with
  Special Needs or Children who have parents with disabilities &
  assist them in understanding the means of leveraging rightful
  entitlements for their own benefit.`,
  getStarted: "Get started",
  rights: "Click to know your rights & entitlement",
};

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
    content: [
      {
        liContent: `<li>Locomotor Disabilities:</li><span class="fw-400">Locomotor Disability is the disability of the bones, joints or muscles leading to substantial restriction of the movement of the limbs or a usual form of cerebral palsy. Different types of locomotor disabilities are classified as the following-</span>`,
        subLiContent: `<li>Leprosy cured person- <span class="fw-400">Any person who has been cured of leprosy but is suffering from- loss of sensation in hands or feet as well as loss of sensation and partial paralysis in the eyelid but with no visible deformity; visible deformity and partial paralysis but having sufficient mobility in their hands and feet to enable them to engage in normal economic activity; extreme physical deformity as well as advanced age which prevents the person from undertaking any gainful occupation.</span></li></br>
        <li>Cerebral palsy - <span class="fw-400">A group of non-progressive conditions characterised by abnormal motor control posture resulting from brain insult or injuries occurring in the perinatal, neonatal or infant period of development.</span></li></br>
        <li>Dwarfism - <span class="fw-400">Medical or genetic condition resulting in an adult height of 4 feet 10 inches (147 centimetres) or less.</span></li></br>
        <li>Muscular dystrophy - <span class="fw-400">A group of hereditary genetic muscle diseases that weakens the muscles that move the human body. A person with multiple dystrophy has incorrect and missing information in their genes, which prevents them from making the proteins they need for healthy muscles. Dystrophy is a disorder in which an organ or tissue of the body wastes away.</span></li></br>
        <li>Acid attack victims - <span class="fw-400">A person disfigured due to violent assaults by throwing of acid or similar corrosive substance.</span></li>`,
      },
      {
        liContent: `<li>Visual Impairment:</li><span class="fw-400">Visual Impairment can be further classified as the following:</span>`,
        subLiContent: `<li>Blindness- <span class="fw-400">A condition where a person suffers from any of the following conditions namely: Total absence of sight; or Visual acuity not exceeding 6/60 or 20/200 (Snellen) in the better eye with correcting lenses; or Limitation of the field vision subtending an angle of 20 degrees or worse.</span></li></br>
        <li>Low-vision- <span class="fw-400">A person with impairment of visual functioning even after treatment or standard refractive correction but who uses or is potentially capable of using vision for the planning or execution of a task with appropriate assistive devices.</span></li></br>`,
      },
      {
        liContent: `<li>Hearing Impairment</li>`,
        subLiContent: `<li>Deaf- <span class="fw-400">Persons having 70 DB hearing loss in speech frequencies in both ears</span></li></br>
        <li>Hard of hearing <span class="fw-400">Loss of sixty decibels or more in the better ear in the conversational range of frequencies</span></li> </br>
        <li>Speech and Language Disability<span class="fw-400">A permanent disability arising out of conditions such as laryngectomy (Laryngectomy is the removal of part or all of the larynx (voice box) or aphasia (A language disorder caused by damage in a specific area of the brain that affects a person's ability to communicate) affecting one or more components of speech and language due to organic or neurological causes.</span></li></br>`,
      },
    ],
    // liContent: `<li>Locomotor Disabilities:</li><span class="fw-400">Locomotor Disability is the disability of the bones, joints or muscles leading to substantial restriction of the movement of the limbs or a usual form of cerebral palsy. Different types of locomotor disabilities are classified as the following-</span>`,
    // subLiContent: `<li>Leprosy cured person- <span class="fw-400">Any person who has been cured of leprosy but is suffering from- loss of sensation in hands or feet as well as loss of sensation and partial paralysis in the eyelid but with no visible deformity; visible deformity and partial paralysis but having sufficient mobility in their hands and feet to enable them to engage in normal economic activity; extreme physical deformity as well as advanced age which prevents the person from undertaking any gainful occupation.</span></li></br><li>Cerebral palsy - <span class="fw-400">A group of non-progressive conditions characterised by abnormal motor control posture resulting from brain insult or injuries occurring in the perinatal, neonatal or infant period of development.</span></li></br><li>Dwarfism - <span class="fw-400">Medical or genetic condition resulting in an adult height of 4 feet 10 inches (147 centimetres) or less.</span></li></br><li>Muscular dystrophy - <span class="fw-400">A group of hereditary genetic muscle diseases that weakens the muscles that move the human body. A person with multiple dystrophy has incorrect and missing information in their genes, which prevents them from making the proteins they need for healthy muscles. Dystrophy is a disorder in which an organ or tissue of the body wastes away.</span></li></br><li>Acid attack victims - <span class="fw-400">A person disfigured due to violent assaults by throwing of acid or similar corrosive substance.</span></li>`,
  },

  intellectual: {
    title: "Intellectual Disability",
    titleContent:
      "Under the ambit of intellectual disabilities, two types of disabilities are broadly classified-",
    content: [
      {
        liContent: `<li>Specific Learning Disabilities</li><span class="fw-400">Affects a person’s ability to acquire, process and/or use either, spoken, read, written or nonverbal information.</span>`,
        subLiContent: ``,
      },
      {
        liContent: `<li>Autism Spectrum Disorder</li><span class="fw-400">A condition of uneven skill development primarily affecting the communication and social abilities of a person, marked by repetitive and ritualistic behaviour.</span>`,
        subLiContent: ``,
      },
    ],
  },

  mental: {
    title: "Mental behaviour ",
    titleContent: "",
    content: [
      {
        liContent: `<li>Mental Illness</li></br><span class="fw-400">A substantial disorder of thinking, mood, perception, orientation or memory that grossly impairs judgement, behaviour, capacity to recognise reality or ability to meet the ordinary demands of life, but does not include retardation which is a condition of arrested or incomplete development of mind of a person, specially characterised by subnormality of intelligence.</span>`,
        subLiContent: ``,
      },
    ],
  },

  neurological: {
    title: "Neurological",
    titleContent: "Disability caused due to chronic neurological conditions-",
    content: [
      {
        liContent: `<li>Multiple sclerosis</li><span class="fw-400">A disease in which the immune system eats away the protective covering of nerves leading to damage to the protective covering (myelin sheath) that surrounds nerve fibres in the brain and affecting the ability of nerve cells in the brain and spinal cord to communicate with each other.</span>`,
        subLiContent: ``,
      },
      {
        liContent: `<li>Parkinson's disease</li><span class="fw-400">A long term disorder  of the nervous system marked by tremor, muscular rigidity and slow imprecise movement, chiefly affecting middle-aged and elderly people. Its symptoms are associated with degeneration of the nerve cells in deep parts of the brain called the basal ganglia of the brain and low or falling levels of dopamine, a neurotransmitter.</span>`,
        subLiContent: ``,
      },
    ],
  },

  blood: {
    title: "Blood Disorder",
    titleContent: "Disability caused due to Blood disorders",
    content: [
      {
        liContent: `<li>Haemophilia</li><span class="fw-400">An inheritable disease, usually affecting only male but transmitted by women to their male children, characterised by loss or impairment of the normal clotting ability of blood so that a minor wound may result in fatal bleeding.</span>`,
        subLiContent: ``,
      },
      {
        liContent: `<li>Thalassemia</li><span class="fw-400">An inherited blood disorder characterised by less oxygen-carrying protein (haemoglobin) and fewer red blood cells in the body than normal. Symptoms include fatigue, weakness, paleness and slow growth.</span>`,
        subLiContent: ``,
      },
      {
        liContent: `<li>Sickle cell disease</li><span class="fw-400">A hemolytic disorder characterised by chronic anaemia, periodic episodes of extreme pain that seems to come out of nowhere, and various complications due to associated tissue and organ damage; “hemolytic” refers to the destruction of the cell membrane of red blood cells resulting in the release of haemoglobin from within the red blood cells into the blood plasma.</span>`,
        subLiContent: ``,
      },
    ],
  },

  multiple: {
    title: "Multiple Disabilities",
    titleContent:
      "A condition in which a person may have a combination of hearing and visual impairments causing severe   communication, developmental, and educational problems. (More than one of the above-specified disabilities).",
    content: [
      {
        liContent: "",
        subLiContent: "",
      },
    ],
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

const essentialDocs = {
  card: {
    title: "Essential Documents for a Person with Disability",
    titleContent:
      "A person with a benchmark disability as defined above will require a Disability Certificate & Unique Disability ID to avail benefits under various schemes and entitlements. ",
    content: [
      {
        liContent: `<li>Disability Certificate: </li><span class="fw-400">Disability Certificate or Handicap Certificate (as it may alternatively be called) is a document that certifies the type and degree of disability that has affected the person.</span>`,
        subLiContent: ``,
      },
      {
        liContent: `<li>Unique Disability ID: </li> <span class ="fw-400">Unique Disability ID is a single source document for identification, and verification of the disabled for availing benefits that they are eligible for under the various schemes and acts.</span>`,
        subLiContent: ``,
      },
    ],
  },
};

export { homeContent, navlinks, contentDis, serviceForm, essentialDocs };
