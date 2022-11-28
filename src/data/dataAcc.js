import { HiAcademicCap } from 'react-icons/hi';
import { GiBrain, GiHealthNormal, GiReceiveMoney } from 'react-icons/gi';
import { FaTruck } from 'react-icons/fa';
import {
  education1,
  education2,
  education3,
  education4,
  education5,
  education6,
  education7,
  education8,
} from './Education';
import { health1, health2, health3, health4 } from './Health';
import { financial1, financial2, financial3, financial4 } from './Financial';
import { travel1, travel2, travel3, travel4 } from './Travel';
import { skills1, skills2, skills3 } from './Skills';

const Data = [
  {
    id: '1',
    icon: <HiAcademicCap className='text-2xl mr-4' />,
    catagory: 'Educational Schemes and Entitlements',
    entitlements: [
      {
        id: 1,
        title: 'Reservation in private schools',
        questions: education1,
        minAge: 3,
        maxAge: 18,
        maxIncome: 999999,
        minDisabilty: 40,
      },
      {
        id: 2,
        title: 'Learning and wellbeing of CWSN in Delhi government schools',
        questions: education2,
        minAge: 3,
        maxAge: 18,
        maxIncome: 999999,
        minDisabilty: 0,
      },
      {
        id: 3,
        title: 'CBSE concessions and provisions for CWSN',
        questions: education3,
        minAge: 14,
        maxAge: 18,
        maxIncome: 999999,
        minDisabilty: 0,
      },
      {
        id: 4,
        title: 'Pre- Matric Scholarship for PWD',
        questions: education4,
        minAge: 13,
        maxAge: 15,
        maxIncome: 250000,
        minDisabilty: 40,
      },
      {
        id: 5,
        title: 'Post Matric Scholarship for PWD',
        questions: education5,
        minAge: 14,
        maxAge: 100,
        maxIncome: 250000,
        minDisabilty: 40,
      },
      {
        id: 6,
        title: 'Top Class Education',
        questions: education6,
        minAge: 15,
        maxAge: 100,
        maxIncome: 600000,
        minDisabilty: 40,
      },
      {
        id: 7,
        title: 'National Fellowship for PWD',
        questions: education7,
        minAge: 22,
        maxAge: 100,
        maxIncome: 999999,
        minDisabilty: 40,
      },
      {
        id: 8,
        title: 'National Overseas Scholarship for PWD',
        questions: education8,
        minAge: 20,
        maxAge: 35,
        maxIncome: 600000,
        minDisabilty: 40,
      },
    ],
  },
  {
    id: '2',
    icon: <GiHealthNormal className='text-2xl mr-4' />,
    catagory: 'Heathcare Schemes and Entitlements',
    entitlements: [
      {
        id: 1,
        title: 'Delhi Aarogya Kosh',
        questions: health1,
        minAge: 0,
        maxAge: 100,
        maxIncome: 999999,
        minDisabilty: 0,
      },
      {
        id: 2,
        title: 'Delhi Aarogya Nidhi',
        questions: health2,
        minAge: 0,
        maxAge: 100,
        maxIncome: 300000,
        minDisabilty: 0,
      },
      {
        id: 3,
        title:
          'Assistance to Disabled Persons for Purchase/ Fitting of Aids and Appliances (ADIP)',
        questions: health3,
        minAge: 0,
        maxAge: 100,
        maxIncome: 360000,
        minDisabilty: 40,
      },
      {
        id: 4,
        title: 'Cochlear implant surgery under ADIP',
        questions: health4,
        minAge: 0,
        maxAge: 12,
        maxIncome: 240000,
        minDisabilty: 0,
      },
    ],
  },
  {
    id: '3',
    icon: <GiReceiveMoney className='text-2xl mr-4' />,
    catagory: 'Finacial Schemes and Entitlements',
    entitlements: [
      {
        id: 1,
        title: 'Disability pension scheme',
        questions: financial1,
        minAge: 0,
        maxAge: 100,
        maxIncome: 100000,
        minDisabilty: 40,
      },
      {
        id: 2,
        title: 'Divyangjan Swalambhan Yojna',
        questions: financial2,
        minAge: 14,
        maxAge: 100,
        maxIncome: 999999,
        minDisabilty: 40,
      },
      {
        id: 3,
        title:
          'Income Tax Rebate for People With Disabilities under Section 80 U',
        questions: financial3,
        minAge: 18,
        maxAge: 100,
        maxIncome: 999999,
        minDisabilty: 40,
      },
      {
        id: 4,
        title:
          'Income Tax Rebate for Individuals who have Disabled Dependants under Section 80 DD',
        questions: financial4,
        minAge: 0,
        maxAge: 100,
        maxIncome: 999999,
        minDisabilty: 40,
      },
    ],
  },
  {
    id: '4',
    icon: <FaTruck className='text-2xl mr-4' />,
    catagory: 'Travel Allowances Schemes and Entitlements',
    entitlements: [
      {
        id: 1,
        title: 'Concessions for travel by DTC buses',
        questions: travel1,
        minAge: 0,
        maxAge: 100,
        maxIncome: 999999,
        minDisabilty: 40,
      },
      {
        id: 2,
        title: 'Quota and concessions in Indian railways',
        questions: travel2,
        minAge: 0,
        maxAge: 100,
        maxIncome: 999999,
        minDisabilty: 0,
      },
      {
        id: 3,
        title: 'Entitlement for blind persons in Air India Airlines',
        questions: travel3,
        minAge: 0,
        maxAge: 100,
        maxIncome: 999999,
        minDisabilty: 0,
      },
      {
        id: 4,
        title: 'Locomotor disability concession in Air India airlines',
        questions: travel4,
        minAge: 0,
        maxAge: 100,
        maxIncome: 999999,
        minDisabilty: 0,
      },
    ],
  },
  {
    id: '5',
    icon: <GiBrain className='text-2xl mr-4' />,
    catagory: 'Skill development and employment Schemes and Entitlements',
    entitlements: [
      {
        id: 1,
        title: 'Pradhan Mantri Kaushal Vikas Yojna',
        questions: skills1,
        minAge: 15,
        maxAge: 45,
        maxIncome: 999999,
        minDisabilty: 0,
      },
      {
        id: 2,
        title: 'Entitlements at Vocational Rehabilitation Center',
        questions: skills2,
        minAge: 0,
        maxAge: 100,
        maxIncome: 999999,
        minDisabilty: 0,
      },
      {
        id: 3,
        title: 'National action plan for skill training of PWDs under SIPDA',
        questions: skills3,
        minAge: 13,
        maxAge: 59,
        maxIncome: 999999,
        minDisabilty: 40,
      },
    ],
  },
];

export default Data;
