import { Link } from 'react-router-dom';

const travel1 = [
  {
    title: 'What are the entitlements?',
    body: (
      <p className={`text-sm my-1`}>
        i. Facility of free travelling in DTC Buses
        <br />
        ii. The facility of 50% concession to the escort for those who have 100%
        disability
      </p>
    ),
  },
  {
    title: 'What are the eligibility requirements?',
    body: (
      <p className={`text-sm my-1`}>
        Applicant should have 40% and above disability and be a resident of
        Delhi
      </p>
    ),
  },
  {
    title: 'What are the documents required?',
    body: (
      <p className={`text-sm my-1`}>
        i. Card issued by Sub Divisional Magistrate (SDM) at the district
        magistrate office. Form placed:
        <Link to='https://drive.google.com/file/d/1KiJvdm2dtHJpfyxKNifUBpJtu3R4nPPz/view' />
        <br />
        ii. Residential proof
        <br />
        iii. Passport size photograph
        <br />
        iv. Copy of Disability certificate
      </p>
    ),
  },
  {
    title: 'What is the application process?',
    body: (
      <p className={`text-sm my-1`}>
        <strong>Offline</strong>
        <br />
        Concessional application forms can be obtained from the respective
        depot. Filled forms with all documents can be submitted at the same
        depot.
      </p>
    ),
  },
  {
    title: 'What are the timelines?',
    body: (
      <p className={`text-sm my-1`}>
        Applications are accepted on a rolling basis.
      </p>
    ),
  },
  {
    title: ' What are the grievance redressal bodies?',
    body: (
      <p className={`text-sm my-1`}>
        At Department Level- DELHI TRANSPORT CORPORATION (HQ) (Govt. of NCT of
        Delhi) I.P. Estate: New Delhi-110002; Phone - 23370236; Email -
        bus-pass@dtc.nic.in
        <br />
        At Appellate Level- Office of the Chief Commissioner for Persons with
        Disabilities, Sarojini House, 6, Bhagwan Das Rd, Bhagwan Das Lane, Mandi
        House, New Delhi, Delhi 110001, Phone- 011 2338 6054, Email-
        comdis.delhi@nic.in
      </p>
    ),
  },
];

const travel2 = [
  {
    title: 'What are the entitlements?',
    body: (
      <p className={`text-sm my-1`}>
        <strong>For PWD Reservation</strong>
        <br />
        i. A reservation quota of two sleeper class berths in all trains running
        on non-suburban sections for handicapped persons with handicapped
        concession tickets. The escort is also allotted the berth out of this
        quota.
        <br />
        ii. In sub-urban trains, separate accommodation for handicapped persons
        has been earmarked.
        <br />
        <strong>Fare Concessions</strong>
        <br />
        i. Orthopedically Handicapped / Paraplegic, Intellectually Disabled
        persons, Blind persons travelling for any purpose.
        <br />
        a. 75% in Second, Sleeper, First, AC Chair Car and AC 3 tier.
        <br />
        b. 50% in First Class and AC 2 tier
        <br />
        c. 25% in AC 3 tier & AC Chair Car of Rajdhani / Shatabdi trains.
        <br />
        d. 50% in Monthly Season Ticket & Quarterly Season Ticket.
        <br />
        e. One escort is also eligible for the same element of concession.
        <br />
        ii. For Deaf & Dumb persons (both afflictions together in the same
        person) traveling for any purpose.
        <br />
        a. 50% in Second class, Sleeper, First class
        <br />
        b. 50% in Monthly Season Ticket & Quarterly Season Ticket.
        <br />
        c. One escort is also eligible for same element of concession
        <br />
        <strong>For Patients</strong>
        <br />
        i. Thalassemia patients traveling for treatment/periodic check-up
        <br />
        a. 75% in Second, Sleeper, First, AC Chair Car and AC 3 tier
        <br />
        b. 50% in 1AC & 2AC
        <br />
        c. One escort is also eligible for same element of concession
        <br />
        ii. Haemophilia Patients - severe & moderate form of disease for
        treatment/periodical check-up.
        <br />
        a. 75% in 2nd class, Sleeper, 1st class, 3AC, AC chair car
        <br />
        b. One escort is also eligible for same element of concession
        <br />
        iii. For Non-infectious Leprosy patients - for treatment/periodic
        checkup
        <br />
        a. 75% in 2nd class, Sleeper, 1st class
        <br />
        b. One escort is also eligible for same element of concession
        <br />
        iv. Sickle Cell Anaemia patients travelling for treatment/periodical
        check-up to recognized hospitals by Mail/Express Trains.
        <br />
        a. 50% in basic fares of Sleeper, AC-2-tier, 3AC, AC chair car classes.
      </p>
    ),
  },
  {
    title: 'What are the eligibility requirements?',
    body: (
      <p className={`text-sm my-1`}>
        <strong>For PWD</strong>
        <br />
        i. Orthopedically Handicapped/Paraplegic persons travelling alone or
        with an escort for any purpose
        <br />
        ii. Persons with severe intellectual disability who are travelling alone
        or with escort for any purpose
        <br />
        iii. Blind persons travelling alone or with an escort for any purpose
        <br />
        iv. Deaf & Dumb persons (both afflictions together in the same person)
        traveling alone or with an escort for any purpose
        <br />
        <strong>For Patients</strong>
        <br />
        i. Thalassemia patients traveling alone or with an escort for
        treatment/periodic check-up
        <br />
        ii. Haemophilia Patients - severe & moderate form of disease -
        travelling alone or with an escort for treatment/periodical check-up
        <br />
        iii. Non-infectious Leprosy patients for treatment/periodic checkup
        <br />
        iv. Patients suffering from Sickle Cell Anaemia travelling for
        treatment/periodical check-up to recognized hospitals by Mail/Express
        Trains
      </p>
    ),
  },
  {
    title: 'What are the documents required?',
    body: (
      <p className={`text-sm my-1`}>
        <strong>For PWD</strong>
        <br />
        <strong>Offline</strong>
        <br />
        i. ID proof
        <br />
        ii. Concessional certificate (Annexure 14)
        <br />
        <strong>Online</strong>
        <br />
        i. Railway concession card
        <br />
        ii. Documents for obtaining railway ID card -
        <br />
        iii. Concession Certificate or Unique Disability ID (UDID) Card
        <br />
        iv. Photo Identity Proof (e.g. Aadhaar Card)
        <br />
        v. Date of Birth Proof (Any government issued ID)
        <br />
        vi. Address Proof (Any government issued ID)
        <br />
        vii. Passport size color photo
        <br />
        viii. Attested photocopies of these documents
        <br />
        For Patients
        <br />
        Offline
        <br />
        i. Duly filled form for outward and return journey
        <br />
        ii. ID proof
      </p>
    ),
  },
  {
    title: 'What is the application process?',
    body: (
      <p className={`text-sm my-1`}>
        <strong>For PWD: Offline</strong>
        <br />
        Submit the duly filled concession certificate to the prescribed medical
        hospitals
        <br />
        The link to the concession certificate is given below:
        <Link to='http://www.indianrailways.gov.in/railwayboard/uploads/directorate/traffic_comm/Passenger_Information_2018/Concession%20Certificate.pdf' />
        <br />
        <strong>For PWD: Online</strong>
        <br />
        Railway concession card needs to be issued for booking tickets online
        through irctc.co.in. Procedure for the same is as follows
        <br />
        i. Visit the nearest Divisional Railway Manager's Office with all the
        relevant documents given below in original as well as self-attested
        photocopies
        <br />
        ii. Concession Certificate or Unique Disability ID (UDID) Card
        <br />
        iii. Identity Proof (e.g. Aadhaar Card)
        <br />
        iv. Date of Birth Proof (Any government issued ID)
        <br />
        v. Address Proof (Any government issued ID)
        <br />
        vi. Passport size color photo
        <br />
        vii. Attested photocopies of these documents.
        <br />
        viii. Submit the application for issue of Railway Identity Card for
        Physically Challenged Persons for Ticketing to the Senior Divisional
        Commercial Manager (Sr. DCM)
        <br />
        ix. Collect the card from the D.R.M Office upon verification
        <br />
        x. The railway photo identity card will have a 11 digit identification
        number which will be used for any subsequent booking online and offline
        <br />
        <strong>For Patients: Offline</strong>
        <br />
        i. The concessional tickets can only be booked over the counter and not
        online
        <br />
        ii. Two different forms for outward and return journey need to be
        submitted
        <br />
        iii. The form for outward journey can be found on the link below:
        <br />
        <Link to='http://www.indianrailways.gov.in/railwayboard/uploads/directorate/traffic_comm/Concession_Certificate_Patients_Onward.pdf' />
        <br />
        iv. The form for return journey can be found on the link:
        <br />
        <Link to='http://www.indianrailways.gov.in/railwayboard/uploads/directorate/traffic_comm/Concession_Certificate_Patients_Returns.pdf' />
        <br />
        v. The concession would be provided after the ticket booking authority
        verifies the duly filled form, by Hospital authorities."
      </p>
    ),
  },
  {
    title: 'What are the timelines?',
    body: (
      <p className={`text-sm my-1`}>
        Applications are accepted on a rolling basis.
      </p>
    ),
  },
  {
    title: ' What are the grievance redressal bodies?',
    body: (
      <p className={`text-sm my-1`}>
        At Department Level- INDIAN RAILWAYS Address : Federation of Railway
        Officers Association Office, 256-A, Rail Bhavan, Raisina Road, New Delhi
        -11000; Phone: (Rly) 43468 (P&T) 23389155; Email - secyfroa@gmail.com
        <br />
        At Appellate Level- Office of the Chief Commissioner for Persons with
        Disabilities, Sarojini House, 6, Bhagwan Das Rd, Bhagwan Das Lane, Mandi
        House, New Delhi, Delhi 110001, 011 2338 6054, Email-
        comdis.delhi@nic.in
      </p>
    ),
  },
];

const travel3 = [
  {
    title: 'What are the entitlements?',
    body: (
      <p className={`text-sm my-1`}>
        i. 50% concessional fare to blind persons on single journey or single
        fare for round trip journeys on all domestic flights.
        <br />
        ii. 1st accompanying infant - Rs 1250 per coupon, plus taxes
        <br />
        iii. The Air Hostess Steward will look after the blind persons not
        accompanied by escorts in flight.
      </p>
    ),
  },
  {
    title: 'What are the eligibility requirements?',
    body: (
      <p className={`text-sm my-1`}>
        Persons who are 100% blind and residents of India
      </p>
    ),
  },
  {
    title: 'What are the documents required?',
    body: (
      <p className={`text-sm my-1`}>
        Photocopy of the certificate issued by an Eye Hospital or Medical
        Practitioner (not less than MBBS), stating that the person is totally
        blind in both the eyes.
      </p>
    ),
  },
  {
    title: 'What is the application process?',
    body: (
      <p className={`text-sm my-1`}>
        Ticket to be purchased 3 days before departure
      </p>
    ),
  },
  {
    title: 'What are the timelines?',
    body: (
      <p className={`text-sm my-1`}>
        Applications are accepted on a rolling basis.
      </p>
    ),
  },
  {
    title: ' What are the grievance redressal bodies?',
    body: (
      <p className={`text-sm my-1`}>
        At Department Level- Air India Limited, Airlines House, 113, Gurudwara
        Rakabganj Road, New Delhi - 110 001 24x7 Customer Care number -
        0124-2641407 / 020-26231407 / 1860 2331407 , Email-
        contactus@airindia.in
        <br />
        At Appellate Level- Office of the Chief Commissioner for Persons with
        Disabilities, Sarojini House, 6, Bhagwan Das Rd, Bhagwan Das Lane, Mandi
        House, New Delhi, Delhi 110001, Phone- 011 2338 6054, ,Email-
        comdis.delhi@nic.in
      </p>
    ),
  },
];

const travel4 = [
  {
    title: 'What are the entitlements?',
    body: (
      <p className={`text-sm my-1`}>
        i. Discount of 50% of Basic fare of select booking class in Economy
        cabin.
        <br />
        ii. (Under 2 years) 1st accompanying Infant - Rs.1250 per coupon, Plus
        applicable taxes.
      </p>
    ),
  },
  {
    title: 'What are the eligibility requirements?',
    body: (
      <p className={`text-sm my-1`}>
        Disabled persons suffering from locomotor disability to the extent of
        80% and above and are residents of India. Conditions falling under this
        category include cases of- Paraplegia, Hemiplegia, Cerebral palsy,
        severe cases of Poliomyelitis, Kyphosis, Muscular dystrophies, Amputees.
      </p>
    ),
  },
  {
    title: 'What are the documents required?',
    body: (
      <p className={`text-sm my-1`}>
        Disability Certificate issued by a Chief District medical officer or a
        board constituted by Government hospital.
      </p>
    ),
  },
  {
    title: 'What is the application process?',
    body: (
      <p className={`text-sm my-1`}>
        Ticket to be purchased 3 days before departure.
      </p>
    ),
  },
  {
    title: 'What are the timelines?',
    body: (
      <p className={`text-sm my-1`}>
        Applications are accepted on a rolling basis.
      </p>
    ),
  },
  {
    title: ' What are the grievance redressal bodies?',
    body: (
      <p className={`text-sm my-1`}>
        At Department Level- INDIAN RAILWAYS Address : Federation of Railway
        Officers Association Office, 256-A, Rail Bhavan, Raisina Road, New Delhi
        -11000; Phone: (Rly) 43468 (P&T) 23389155; Email - secyfroa@gmail.com
        <br />
        At Appellate Level- Office of the Chief Commissioner for Persons with
        Disabilities, Sarojini House, 6, Bhagwan Das Rd, Bhagwan Das Lane, Mandi
        House, New Delhi, Delhi 110001, 011 2338 6054, Email-
        comdis.delhi@nic.in
      </p>
    ),
  },
];

export { travel1, travel2, travel3, travel4 };
