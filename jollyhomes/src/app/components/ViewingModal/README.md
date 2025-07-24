# ViewingModal Component

A modular viewing appointment scheduling modal component for real estate clients to book property viewing appointments.

## Structure

```
ViewingModal/
├── components/           # Reusable UI components
│   ├── ActionButtons.tsx    # Cancel and submit buttons
│   ├── FormField.tsx        # Generic input field component
│   ├── InfoBox.tsx          # Information display component
│   ├── ModalHeader.tsx      # Modal header with title and close button
│   ├── ViewingForm.tsx      # Main form component
│   ├── SelectField.tsx      # Select dropdown component
│   ├── TextAreaField.tsx    # Textarea component
│   └── index.ts             # Component exports
├── hooks/                # Custom hooks
│   ├── useBodyScrollLock.ts # Hook for managing body scroll
│   ├── useViewingForm.ts    # Hook for form state management
│   └── index.ts             # Hook exports
├── animations.ts         # Framer Motion animation variants
├── constants.ts          # Static data and configuration
├── types.ts             # TypeScript type definitions
├── ViewingModal.tsx     # Main modal component
├── index.ts             # Main exports
└── README.md            # This file
```

## Components

### ViewingModal (Main Component)
The main modal component that orchestrates all sub-components and handles the overall modal behavior for scheduling property viewings.

### FormField
A reusable input field component that handles text, email, tel, date, and other input types with date validation.

### SelectField
A reusable select dropdown component with configurable options for property types, time slots, and group sizes.

### TextAreaField
A reusable textarea component for special requests and additional information.

### ModalHeader
The modal header containing the schedule icon, title, subtitle, and close button.

### InfoBox
A reusable information display component showing the viewing process steps.

### ActionButtons
The form action buttons (Cancel and Schedule Viewing) with loading states.

### ViewingForm
The main form component that combines all form fields and handles viewing appointment submission.

## Hooks

### useViewingForm
Manages viewing form state, validation, and submission logic with async handling.

### useBodyScrollLock
Handles locking/unlocking body scroll when modal is open/closed.

## Features

- **Property Viewing Scheduling**: Complete form for booking property viewing appointments
- **Date & Time Selection**: Preferred and alternative scheduling options
- **Property Type Selection**: Various property types (apartment, house, condo, etc.)
- **Group Size Management**: Number of people attending the viewing
- **Special Requests**: Additional requirements or accessibility needs
- **Date Validation**: Prevents past dates and limits to 3 months ahead
- **Modular Design**: Each component has a single responsibility
- **Type Safety**: Full TypeScript support with proper type definitions
- **Reusable Components**: Form components can be reused in other parts of the application
- **Custom Hooks**: Business logic separated into reusable hooks
- **Animation Support**: Smooth animations using Framer Motion
- **Accessibility**: Proper labeling and keyboard navigation support
- **Responsive Design**: Mobile-friendly layout

## Form Fields

### Personal Information
- **Full Name** (required)
- **Email Address** (required)
- **Phone Number** (required)
- **Property Type** (required)

### Viewing Schedule
- **Preferred Date** (required, date picker with validation)
- **Preferred Time** (required, dropdown with time slots)
- **Alternative Date** (optional, date picker)
- **Alternative Time** (optional, dropdown with time slots)

### Additional Details
- **Number of People** (required, dropdown)
- **Special Requests** (optional, textarea)

## Usage

```tsx
import ViewingModal from './components/ViewingModal';

function App() {
  const [isViewingModalOpen, setIsViewingModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsViewingModalOpen(true)}>
        Schedule Viewing
      </button>
      
      <ViewingModal
        isOpen={isViewingModalOpen}
        onClose={() => setIsViewingModalOpen(false)}
      />
    </div>
  );
}
```

## Integration with Navbar

The ViewingModal is integrated into the main navigation with:
- **Schedule Viewing Button**: Blue-colored button next to the Get Quote button
- **Modal State Management**: Separate state management for viewing modal
- **Responsive Design**: Hidden on mobile, accessible through mobile menu

## Benefits

1. **User Experience**: Streamlined property viewing booking process
2. **Flexibility**: Multiple scheduling options with alternatives
3. **Validation**: Date and time validation prevents invalid bookings
4. **Maintainability**: Smaller components are easier to understand and modify
5. **Reusability**: Form components can be used in other booking forms
6. **Testing**: Individual components can be tested in isolation
7. **Performance**: Better tree-shaking and code splitting opportunities
8. **Scalability**: Easy to add new features or modify existing ones
9. **Professional**: Matches real estate industry standards for appointment booking