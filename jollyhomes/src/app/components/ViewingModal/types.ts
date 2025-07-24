export interface ViewingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ViewingFormData {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  preferredDate: string;
  preferredTime: string;
  alternativeDate: string;
  alternativeTime: string;
  numberOfPeople: string;
  specialRequests: string;
}

export interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  required?: boolean;
  placeholder?: string;
  type?: string;
  id?: string;
  min?: string;
  max?: string;
}

export interface SelectFieldProps extends FormFieldProps {
  options: { value: string; label: string }[];
}

export interface TextAreaFieldProps extends FormFieldProps {
  rows?: number;
}