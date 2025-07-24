import { cn } from '@/app/lib/utils';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  className, 
  variant = 'default' 
}) => {
  return (
    <span className={cn(
      "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
      variant === 'default' && "bg-blue-100 text-blue-800",
      variant === 'outline' && "border border-gray-300 text-gray-700 bg-white",
      className
    )}>
      {children}
    </span>
  );
};
