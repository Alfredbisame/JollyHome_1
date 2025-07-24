export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  iconColor: string;
}

export interface HowItWorksProps {
  steps?: Step[];
  className?: string;
}

export interface StepCardProps {
  step: Step;
  index: number;
  isLast: boolean;
}
