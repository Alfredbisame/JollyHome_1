export const PROJECT_TYPE_OPTIONS = [
  { value: "", label: "Select project type" },
  { value: "new-construction", label: "New Construction" },
  { value: "renovation", label: "Home Renovation" },
  { value: "extension", label: "Home Extension" },
  { value: "custom-design", label: "Custom Design" },
  { value: "consultation", label: "Consultation Only" }
];

export const BUDGET_OPTIONS = [
  { value: "", label: "Select budget range" },
  { value: "under-50k", label: "Under $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "100k-250k", label: "$100,000 - $250,000" },
  { value: "250k-500k", label: "$250,000 - $500,000" },
  { value: "500k-1m", label: "$500,000 - $1,000,000" },
  { value: "over-1m", label: "Over $1,000,000" }
];

export const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  message: ''
};

export const NEXT_STEPS_INFO = [
  "We'll review your request within 24 hours",
  "Schedule a free consultation call",
  "Provide a detailed project estimate",
  "Discuss timeline and next steps"
];