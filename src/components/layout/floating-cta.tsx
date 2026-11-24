import { MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export function FloatingCta() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={siteConfig.phoneHref}
        aria-label="Call us"
        className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white shadow-lg transition hover:scale-110"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
