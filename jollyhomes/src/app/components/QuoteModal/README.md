# QuoteModal Component

A refactored, modular quote modal component broken down into smaller, reusable components.

## Structure

```
QuoteModal/
├── components/           # Reusable UI components
│   ├── ActionButtons.tsx    # Cancel and submit buttons
│   ├── FormField.tsx        # Generic input field component
│   ├── InfoBox.tsx          # Information display component
│   ├── ModalHeader.tsx      # Modal header with title and close button
│   ├── QuoteForm.tsx        # Main form component
│   ├── SelectField.tsx      # Select dropdown component
│   ├── TextAreaField.tsx    # Textarea component
│   └── index.ts             # Component exports
├── hooks/                # Custom hooks
│   ├── useBodyScrollLock.ts # Hook for managing body scroll
│   ├── useQuoteForm.ts      # Hook for form state management
│   └── index.ts             # Hook exports
├── animations.ts         # Framer Motion animation variants
├── constants.ts          # Static data and configuration
├── types.ts             # TypeScript type definitions
├── QuoteModal.tsx       # Main modal component
├── index.ts             # Main exports
└── README.md            # This file
```

## Components

### QuoteModal (Main Component)
The main modal component that orchestrates all sub-components and handles the overall modal behavior.

### FormField
A reusable input field component that handles text, email, tel, and other input types.

### SelectField
A reusable select dropdown component with configurable options.

### TextAreaField
A reusable textarea component for multi-line text input.

### ModalHeader
The modal header containing the title, subtitle, and close button.

### InfoBox
A reusable information display component with icon and bullet points.

### ActionButtons
The form action buttons (Cancel and Submit) with loading states.

### QuoteForm
The main form component that combines all form fields and handles form submission.

## Hooks

### useQuoteForm
Manages form state, validation, and submission logic.

### useBodyScrollLock
Handles locking/unlocking body scroll when modal is open/closed.

## Features

- **Modular Design**: Each component has a single responsibility
- **Type Safety**: Full TypeScript support with proper type definitions
- **Reusable Components**: Form components can be reused in other parts of the application
- **Custom Hooks**: Business logic separated into reusable hooks
- **Animation Support**: Smooth animations using Framer Motion
- **Accessibility**: Proper labeling and keyboard navigation support
- **Responsive Design**: Mobile-friendly layout

## Usage

```tsx
import QuoteModal from './components/QuoteModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>
        Get Quote
      </button>
      
      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
```

## Benefits of Refactoring

1. **Maintainability**: Smaller components are easier to understand and modify
2. **Reusability**: Form components can be used in other forms
3. **Testing**: Individual components can be tested in isolation
4. **Performance**: Better tree-shaking and code splitting opportunities
5. **Developer Experience**: Clear separation of concerns and better code organization
6. **Scalability**: Easy to add new features or modify existing ones