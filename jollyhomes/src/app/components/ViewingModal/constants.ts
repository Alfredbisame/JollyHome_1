export const PROPERTY_TYPE_OPTIONS = [
  { value: "", label: "Select property type" },
  { value: "apartment", label: "Apartment" },
  { value: "house", label: "House" },
  { value: "condo", label: "Condominium" },
  { value: "townhouse", label: "Townhouse" },
  { value: "villa", label: "Villa" },
  { value: "studio", label: "Studio" },
  { value: "penthouse", label: "Penthouse" }
];

export const TIME_SLOT_OPTIONS = [
  { value: "", label: "Select preferred time" },
  { value: "09:00", label: "9:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "13:00", label: "1:00 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "16:00", label: "4:00 PM" },
  { value: "17:00", label: "5:00 PM" },
  { value: "18:00", label: "6:00 PM" }
];

export const NUMBER_OF_PEOPLE_OPTIONS = [
  { value: "", label: "Number of people" },
  { value: "1", label: "1 person" },
  { value: "2", label: "2 people" },
  { value: "3", label: "3 people" },
  { value: "4", label: "4 people" },
  { value: "5", label: "5 people" },
  { value: "6+", label: "6+ people" }
];

export const INITIAL_VIEWING_FORM_DATA = {
  name: '',
  email: '',
  phone: '',
  propertyType: '',
  preferredDate: '',
  preferredTime: '',
  alternativeDate: '',
  alternativeTime: '',
  numberOfPeople: '',
  specialRequests: ''
};

export const VIEWING_PROCESS_INFO = [
  "We'll confirm your appointment within 2 hours",
  "Receive property details and viewing guidelines",
  "Meet our agent at the property location",
  "Get a comprehensive property tour and Q&A session"
];

// Helper function to get minimum date (today)
export const getMinDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

// Helper function to get maximum date (3 months from now)
export const getMaxDate = () => {
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  return maxDate.toISOString().split('T')[0];
};