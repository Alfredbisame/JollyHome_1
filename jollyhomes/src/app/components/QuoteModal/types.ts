export interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
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
}

export interface SelectFieldProps extends FormFieldProps {
  options: { value: string; label: string }[];
}

export interface TextAreaFieldProps extends FormFieldProps {
  rows?: number;
}