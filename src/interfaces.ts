export interface Product {
  id: string;
  name: string;
  activeIngredient: string;
  dosageForm: string;
  strength: string;
  company: string;
  atcCode: string;
  indication: string;
  routeOfAdministration: string;
  description: string;
  marketingAuthorisationNumber: string;
  instructions: {
    id: string;
    instruction: string;
  };
  prerequisites: {
    id: string;
    doNotUse: string;
    otherMedicines: string;
  };
  sideEffects: {
    id: string;
    possibleSideEffects: string;
    commonSideEffects: string;
    otherPossibleSideEffects: string;
    rareSideEffects: string;
    veryRareSideEffects: string;
    notKnownSideEffects: string;
    reportingOfsideEffects: string;
    commonProblemsOfConditions: string;
  };
  keywords: {
    keyword: string;
    tooltip: String;
  }[];
}

export interface Section {
  section: string;
  title: string;
  starred: boolean;
  showVideo: boolean;
}

export interface medicationsType {
  name: string;
  instructions?: string;
  dose?: string;
  frequency?: string;
  type: string;
}

export interface user {
  name?: string;
  age?: number;
  gender?: string;
  existingHealthCondition?: string[];
  existingMedications?: string[];
  email: string;
  password: string;
  profileType: string;
  isLogged: boolean;
  country?: string;
}
