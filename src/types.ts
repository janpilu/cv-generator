interface CVItem {
  name: string;
  subtitle?: string;
  duration?: string;
  content: string[];
}

interface CVSection {
  title: string;
  items: CVItem[];
}

interface SkillCategory {
  name: string;
  skills: string[];
}

interface CVData {
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

export type { CVData };
