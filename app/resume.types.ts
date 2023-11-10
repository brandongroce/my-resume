export interface Resume {
    header: Header;
    sections: Sections;
    tools?: (string)[] | null;
  }
  export interface Header {
    name: string;
    title: string;
    email: string;
    phone: string;
    address1: string;
    address2: string;
  }
  export interface Sections {
    skills: Skills;
    experience: Experience;
    education: Education;
    activities: Activities;
    references: References;
  }
  export interface Skills {
    title: string;
    subtitle: string;
    content?: (ContentSkills)[] | null;
  }
  export interface ContentSkills {
    type: string;
    primary?: (string)[] | null;
    secondary?: (string)[] | null;
    focus?: (string)[] | null;
  }
  export interface Experience {
    title: string;
    subtitle: string;
    content?: (ContentExperience)[] | null;
  }
  export interface ContentExperience {
    name: string;
    products: string;
    type: string;
    position?: string | null;
    detail: string;
    date: string;
    duties?: (string)[] | null;
  }
  export interface Education {
    title: string;
    subtitle: string;
    content: ContentEducation;
  }
  export interface ContentEducation {
    school: string;
    grade: string;
    program: string;
    details?: (string)[] | null;
  }
  export interface Activities {
    title: string;
    subtitle: string;
    content?: (ContentActivities)[] | null;
  }
  export interface ContentActivities {
    heading: string;
    items?: (string)[] | null;
  }
  export interface References {
    title: string;
    subtitle: string;
    content?: (ContentReferences)[] | null;
  }
  export interface ContentReferences {
    name: string;
    phone: string;
    email: string;
    description: string;
    relation: string;
  }
  