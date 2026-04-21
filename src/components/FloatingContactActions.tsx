import { MessageCircle, Phone } from "lucide-react";
import { SITE_CONFIG, WHATSAPP_URL } from "@/lib/siteConfig";

const FloatingContactActions = () => {
  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="inline-flex h-12 items-center justify-center rounded-full bg-green-500 px-3 text-white shadow-lg shadow-green-500/30 transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
      >
        <MessageCircle size={20} />
        <span className="ml-2 hidden text-xs font-medium sm:inline">WhatsApp</span>
      </a>
      <a
        href={SITE_CONFIG.phoneHref}
        aria-label={`Call ${SITE_CONFIG.companyName}`}
        className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-3 text-primary-foreground shadow-lg shadow-primary/30 transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
      >
        <Phone size={20} />
        <span className="ml-2 hidden text-xs font-medium sm:inline">Call</span>
      </a>
    </div>
  );
};

export default FloatingContactActions;
