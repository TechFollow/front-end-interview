//model of response from the API Adresses from gouv.fr : https://geo.api.gouv.fr/adresse

export class Feature{
  type:string;
  geometry:
    {
      type:string;
      coordinates: [];
    };
  properties:{
    label: string;
  }
}

export class Address {
  type: string;
  version: string;
  features: Feature[];
  attribution:string;
  licence: string;
  query:string;
  limit:number
}
