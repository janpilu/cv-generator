export interface CVItem {
  name: string;
  subtitle?: string;
  duration?: string;
  content: string[];
}

export interface CVSection {
  title: string;
  items: CVItem[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
  layout?: "horizontal" | "vertical";
}

export interface CVData {
  personalInfo: {
    name: string;
    title?: string;
    contact: {
      email: string;
      phone: string;
      location?: string;
    };
  };
  sections: CVSection[];
  skills: SkillCategory[];
}
