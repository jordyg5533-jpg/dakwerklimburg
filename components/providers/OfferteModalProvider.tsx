'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import Modal from '@/components/ui/Modal';
import LeadForm from '@/components/forms/LeadForm';

interface OfferteModalContextType {
  isOpen: boolean;
  openModal: (source?: string) => void;
  closeModal: () => void;
}

const OfferteModalContext = createContext<OfferteModalContextType | undefined>(
  undefined
);

export function useOfferteModal() {
  const context = useContext(OfferteModalContext);
  if (!context) {
    throw new Error('useOfferteModal must be used within OfferteModalProvider');
  }
  return context;
}

export default function OfferteModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<string>('unknown');

  const openModal = (newSource: string = 'unknown') => {
    setSource(newSource);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <OfferteModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="Vraag gratis offerte aan"
      >
        <LeadForm source={source} />
      </Modal>
    </OfferteModalContext.Provider>
  );
}
