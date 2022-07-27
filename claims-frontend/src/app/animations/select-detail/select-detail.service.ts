import { Injectable } from '@angular/core';

interface HospitalDetail {
  id: string;
  name: string;
  location: string;
}

interface PoilcyDetail {
  id: string;
  name: string;
}

interface BenefitDetail {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class SelectDetailService {
  public hospitalDetails: Array<HospitalDetail> = [
    { 
      id: 'H1', 
      name: 'Apollo Hospital', 
      location: 'Delhi-Indraprastha' 
    },

    { 
      id: 'H2', 
      name: 'Chettinad Global City', 
      location: 'Chennai-OMR' 
    },

    {
      id: 'H3',
      name: 'Ohio Hospital',
      location: 'Kolkata-Newtown',
    },
    {
      id: 'H4',
      name: 'MIOT Hospital',
      location: 'Chennai-Ramapuram',
    },
    {
      id: 'H5',
      name: 'Lotus Hospital',
      location: 'Kolkata-Rajarhat',
    },
    {
      id: 'H6',
      name: 'Agarwal Hospital',
      location: 'Madhya Pradesh-Bhopal',
    },
  ];

  public policyDetails: Array<PoilcyDetail> = [
    { 
      id: 'P1001', 
      name: 'CLAIMExpert Plus Classic' 
    },

    { 
      id: 'P1002', 
      name: 'CLAIMExpert Plus Enhanced' 
    },

    { 
      id: 'P1003', 
      name: 'CLAIMExpert Plus Premium' 
    },
  ];

  public benefitDetails: Array<BenefitDetail> = [
    { 
      id: 'B101', 
      name: 'Coverage for COVID-19' 
    },
    
    { 
      id: 'B102', 
      name: 'Coverage for hospitalization at home' 
    },
    
    { 
      id: 'B103', 
      name: 'Ambulance charges upto 4000 covered' 
    },

    { 
      id: 'B104', 
      name: 'Day care Expenses covered' 
    },

    { 
      id: 'B105', 
      name: 'Medical Epenses covered' 
    },

    {
      id: 'B106',
      name: 'Pre and Post Hospitalization charges for Premium Twin Sharing room covered',
    },

    { 
      id: 'B107', 
      name: 'Pre and Post Hospitalization charges for Deluxe room covered' 
    },
    
    {
      id: 'B108',
      name: 'Pre and Post Hospitalization charges for Premium Deluxe room covered',
    },
  ];
}
