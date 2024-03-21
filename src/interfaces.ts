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
  starred?: boolean;
  showVideo?: boolean;
  content?: string;
}

export interface medicationsType {
  name: string;
  instructions?: string;
  dose?: number;
  dosageMeasure?: string;
  frequency?: string;
  times?: string;
  type: "inhaler" | "injection" | "tablet" | "pill";
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

export interface Posts {
  type: "managing_stress" | "women_over_60" | "health_wellbeing";
  heading: "Managing Stress" | "Women over 60" | "Health & Wellbeing";
  postType: "Poll" | "Thread" | "Blog";
  title: string;
  author: string;
  date: string;
  views: number;
  likes: number;
  comments: number;
}

export interface NotificationType {
  time?: string;
  action: string;
  type: "reminder" | "info";
}
