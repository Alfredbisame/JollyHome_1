export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

export interface ContactInfoItem {
  id: string;
  icon: string;
  title: string;
  content: string;
  href?: string;
}

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
  isSubmitting?: boolean;
}

export interface ContactInfoProps {
  items: ContactInfoItem[];
}

export interface ContactHeaderProps {
  title?: string;
  subtitle?: string;
}
