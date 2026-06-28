import { createContext, useContext, useState, type ReactNode } from 'react';

interface ContactPanelContextType {
  isOpen: boolean;
  openPanel: () => void;
  closePanel: () => void;
}

const ContactPanelContext = createContext<ContactPanelContextType>({
  isOpen: false,
  openPanel: () => {},
  closePanel: () => {},
});

export function ContactPanelProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContactPanelContext.Provider
      value={{
        isOpen,
        openPanel: () => setIsOpen(true),
        closePanel: () => setIsOpen(false),
      }}
    >
      {children}
    </ContactPanelContext.Provider>
  );
}

export function useContactPanel() {
  return useContext(ContactPanelContext);
}
