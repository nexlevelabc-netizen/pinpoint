import { useState, useEffect } from 'react';
import { X, CalendarDays } from 'lucide-react';

export function BookAppointment() {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-6 py-3.5 rounded-full font-body font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, #0C7FF2 0%, #199BC7 100%)',
          color: 'white',
        }}
      >
        <CalendarDays size={18} />
        Book an Appointment
      </button>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Wide Slide-out Panel - horizontal like Coderfy */}
      <div
        className="fixed top-4 bottom-4 right-4 left-4 lg:left-auto lg:w-[85vw] xl:w-[80vw] z-[70] rounded-2xl shadow-2xl transition-all duration-500 ease-in-out flex flex-col overflow-hidden"
        style={{
          background: '#FFFFFF',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateX(0) scale(1)' : 'translateX(60px) scale(0.96)',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b shrink-0" style={{ borderColor: 'var(--p-border)' }}>
          <div className="flex items-center gap-3">
            <img
              src="images/logo-navbar.png"
              alt="Pinpoint Finance"
              className="h-7 w-auto object-contain"
            />
            <div className="w-px h-6" style={{ background: 'var(--p-border)' }} />
            <div>
              <h3 className="font-display text-base font-bold" style={{ color: 'var(--p-charcoal)' }}>
                Book an Appointment
              </h3>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full font-body text-xs font-semibold transition-colors hover:opacity-90"
            style={{ background: '#DC2626', color: 'white' }}
          >
            <X size={14} />
            Close
          </button>
        </div>

        {/* Google Calendar Embed - full width */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2Rwa1rTt3-9F0L3LPN5t7mS2J_s5R8jZCL2Q="
            className="w-full h-full border-0"
            title="Book an Appointment with Pinpoint Finance"
          >
            <p className="font-body text-center p-8" style={{ color: 'var(--p-slate)' }}>
              Your browser does not support iframes. Please contact us directly at{' '}
              <a href="mailto:info@pinpointfinance.co.uk" className="underline" style={{ color: 'var(--p-blue)' }}>
                info@pinpointfinance.co.uk
              </a>
            </p>
          </iframe>
        </div>
      </div>
    </>
  );
}
