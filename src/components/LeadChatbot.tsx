import { FormEvent, useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { Bot, MessageSquare, Send, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { SITE_CONFIG } from "@/lib/siteConfig";

type LeadData = {
  name: string;
  contact: string;
  service: string;
  requirements: string;
};

const initialLead: LeadData = {
  name: "",
  contact: "",
  service: "",
  requirements: "",
};
const SESSION_STORAGE_KEY = "sitexar_lead_chatbot_state";
const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const LeadChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [leadData, setLeadData] = useState<LeadData>(initialLead);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const canSubmit = useMemo(() => {
    return (
      leadData.name.trim().length > 1 &&
      leadData.contact.trim().length > 4 &&
      leadData.requirements.trim().length > 9
    );
  }, [leadData]);

  useEffect(() => {
    const storedState = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!storedState) return;
    try {
      const parsed = JSON.parse(storedState) as { isOpen?: boolean; leadData?: LeadData };
      if (parsed.leadData) {
        setLeadData(parsed.leadData);
      }
      if (parsed.isOpen) {
        setIsOpen(true);
      }
    } catch (error) {
      console.error("Failed to restore chatbot session state", error);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      SESSION_STORAGE_KEY,
      JSON.stringify({ isOpen, leadData }),
    );
  }, [isOpen, leadData]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) return;
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const cleanedContact = leadData.contact.trim();
      const safeEmail = isEmail(cleanedContact) ? cleanedContact : SITE_CONFIG.email;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are missing.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: leadData.name,
          email: safeEmail,
          title: "New Chatbot Lead",
          service: leadData.service || "Not specified",
          budget: "Collected via chatbot",
          timeline: "Collected via chatbot",
          message: `Lead source: Chatbot\nPreferred contact: ${cleanedContact}\nService: ${leadData.service || "Not specified"}\nRequirements: ${leadData.requirements}`,
          time: new Date().toLocaleString(),
        },
        publicKey,
      );

      toast({
        title: "Lead submitted",
        description: "Thanks! Our team will contact you soon.",
      });
      setLeadData(initialLead);
      setIsOpen(false);
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
    } catch (error) {
      console.error("Lead chatbot submit error:", error);
      toast({
        title: "Submission failed",
        description: `Please call us at ${SITE_CONFIG.phoneDisplay} or email ${SITE_CONFIG.email}.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-[60] sm:bottom-6 sm:left-6">
      {isOpen ? (
        <div className="w-[90vw] max-w-sm rounded-2xl border border-border/70 bg-card/95 p-4 shadow-xl backdrop-blur">
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">Sitexar Assistant</p>
              <p className="text-xs text-muted-foreground">
                Tell us what you are looking for and we will get back quickly.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
              className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X size={16} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              placeholder="Your name"
              value={leadData.name}
              onChange={(event) =>
                setLeadData((prev) => ({ ...prev, name: event.target.value }))
              }
              required
            />
            <Input
              placeholder="Email or phone"
              value={leadData.contact}
              onChange={(event) =>
                setLeadData((prev) => ({ ...prev, contact: event.target.value }))
              }
              required
            />
            <Input
              placeholder="Service needed (optional)"
              value={leadData.service}
              onChange={(event) =>
                setLeadData((prev) => ({ ...prev, service: event.target.value }))
              }
            />
            <Textarea
              placeholder="Project requirements"
              value={leadData.requirements}
              className="min-h-24"
              onChange={(event) =>
                setLeadData((prev) => ({
                  ...prev,
                  requirements: event.target.value,
                }))
              }
              required
            />
            <Button
              type="submit"
              disabled={!canSubmit || isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-secondary"
            >
              {isSubmitting ? "Submitting..." : "Submit requirements"}
              <Send className="ml-2" size={14} />
            </Button>
          </form>
        </div>
      ) : (
        <Button
          type="button"
          onClick={() => setIsOpen(true)}
          className="h-12 rounded-full bg-gradient-to-r from-primary to-secondary px-4 shadow-lg shadow-primary/25"
          aria-label="Open assistant chatbot"
        >
          <Bot className="mr-2" size={18} />
          <span className="hidden sm:inline">Ask Assistant</span>
          <MessageSquare className="sm:hidden" size={16} />
        </Button>
      )}
    </div>
  );
};

export default LeadChatbot;
