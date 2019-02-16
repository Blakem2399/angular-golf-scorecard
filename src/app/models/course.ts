//Used JSON2ts.com to make life easier
declare module namespace {

  export interface TeeBox {
    courseHoleTeeBoxId: number;
    courseHoleId: number;
    teeTypeId: number;
    teeType: string;
    teeColorTypeId: number;
    teeColorType: string;
    lat: number;
    lng: number;
    par: number;
    yards: number;
    meters: number;
    hcp: number;
    hcp2?: any;
    teeHexColor: string;
  }

  export interface ChangeLocation {
    courseHoleTeeBoxId: number;
    courseHoleId: number;
    teeTypeId: number;
    teeType: string;
    teeColorTypeId?: any;
    teeColorType?: any;
    lat: number;
    lng: number;
    par: number;
    yards: number;
    meters: number;
    hcp: number;
    hcp2?: any;
    teeHexColor?: any;
  }

  export interface Hole {
    hole: number;
    courseHoleId: number;
    courseId: number;
    greenLat: number;
    greenLng: number;
    frontLat: number;
    frontLng: number;
    backLat: number;
    backLng: number;
    pinLat?: any;
    pinLng?: any;
    pinExpires?: any;
    teeBoxes: TeeBox[];
    changeLocations: ChangeLocation[];
  }

  export interface Data {
    id: string;
    includes: string;
    courseId: number;
    statusId: number;
    status: string;
    courseTypeId: number;
    courseType: string;
    practiceAreaId: number;
    measurementTypeId: number;
    measurementType: string;
    mediaId: number;
    holeCount: number;
    lat: number;
    lng: number;
    popularityOneWeek: number;
    popularityThreeMonth: number;
    distanceFromMeKilometers: number;
    distanceFromMeMiles: number;
    localRankOneWeek: number;
    localRankThreeMonth: number;
    globalRankOneWeek: number;
    globalRankThreeMonth: number;
    localMaxRank: number;
    globalMaxRank: number;
    name: string;
    addr1: string;
    addr2?: any;
    city: string;
    stateOrProvince: string;
    country: string;
    zipCode: string;
    phone: string;
    website: string;
    courseDesigner?: any;
    courseArchitect?: any;
    accomodations?: any;
    hours?: any;
    fax?: any;
    fees?: any;
    description?: any;
    thumbnail: string;
    holes: Hole[];
  }

  export interface RootObject {
    data: Data;
  }

}
