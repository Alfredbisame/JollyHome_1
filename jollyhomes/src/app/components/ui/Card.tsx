import { cn } from '@/app/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={cn(
      "bg-white rounded-lg border border-gray-200 shadow-sm",
      className
    )}>
      {children}
    </div>
  );
};
