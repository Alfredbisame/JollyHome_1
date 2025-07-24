export interface AgentSignupData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  location: string;
}

export interface AgentSignupBannerProps {
  onSignupClick?: () => void;
  className?: string;
}

export interface AgentSignupContentProps {
  title?: string;
  description?: string;
}

export interface AgentSignupButtonProps {
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  text?: string;
}
