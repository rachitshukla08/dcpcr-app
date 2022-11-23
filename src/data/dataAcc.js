import { HiAcademicCap } from "react-icons/hi";
import { GiBrain, GiHealthNormal, GiReceiveMoney } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";
import {
  education1,
  education2,
  education3,
  education4,
  education5,
  education6,
  education7,
  education8,
} from "./Education";
import { health1, health2, health3, health4 } from "./Health";
import { financial1, financial2, financial3, financial4 } from "./Financial";
import { travel1, travel2, travel3, travel4 } from "./Travel";
import { skills1, skills2, skills3 } from "./Skills";
import { data } from "autoprefixer";

const Data = [
  {
    id: "1",
    icon: <HiAcademicCap className="text-2xl mr-4" />,
    catagory: "Educational Schemes and Entitlements",
    entitlements: [
      {
        title: "Reservation in private schools",
        questions: education1,
      },
      {
        title: "Learning and wellbeing of CWSN in Delhi government schools",
        questions: education2,
      },
      {
        title: "CBSE concessions and provisions for CWSN",
        questions: education3,
      },
      { title: "Pre- Matric Scholarship for PWD", questions: education4 },
      { title: "Post Matric Scholarship for PWD", questions: education5 },
      { title: "Top Class Education", questions: education6 },
      { title: "National Fellowship for PWD", questions: education7 },
      { title: "National Overseas Scholarship for PWD", questions: education8 },
    ],
  },
  {
    id: "2",
    icon: <GiHealthNormal className="text-2xl mr-4" />,
    catagory: "Heathcare Schemes and Entitlements",
    entitlements: [
      { title: "Delhi Aarogya Kosh", questions: health1 },
      { title: "Delhi Aarogya Nidhi", questions: health2 },
      {
        title:
          "Assistance to Disabled Persons for Purchase/ Fitting of Aids and Appliances (ADIP)",
        questions: health3,
      },
      { title: "Cochlear implant surgery under ADIP", questions: health4 },
    ],
  },
  {
    id: "3",
    icon: <GiReceiveMoney className="text-2xl mr-4" />,
    catagory: "Finacial Schemes and Entitlements",
    entitlements: [
      { title: "Disability pension scheme", questions: financial1 },
      { title: "Divyangjan Swalambhan Yojna", questions: financial2 },
      {
        title:
          "Income Tax Rebate for People With Disabilities under Section 80 U",
        questions: financial3,
      },
      {
        title:
          "Income Tax Rebate for Individuals who have Disabled Dependants under Section 80 DD",
        questions: financial4,
      },
    ],
  },
  {
    id: "4",
    icon: <FaTruck className="text-2xl mr-4" />,
    catagory: "Travel Allowances Schemes and Entitlements",
    entitlements: [
      { title: "Concessions for travel by DTC buses", questions: travel1 },
      {
        title: "Quota and concessions in Indian railways",
        questions: travel2,
      },
      {
        title: "Entitlement for blind persons in Air India Airlines",
        questions: travel3,
      },
      {
        title: "Locomotor disability concession in Air India airlines",
        questions: travel4,
      },
    ],
  },
  {
    id: "5",
    icon: <GiBrain className="text-2xl mr-4" />,
    catagory: "Skill development and employment Schemes and Entitlements",
    entitlements: [
      { title: "Pradhan Mantri Kaushal Vikas Yojna", questions: skills1 },
      {
        title: "Entitlements at Vocational Rehabilitation Center",
        questions: skills2,
      },
      {
        title: "National action plan for skill training of PWDs under SIPDA",
        questions: skills3,
      },
    ],
  },
];

export default Data;
