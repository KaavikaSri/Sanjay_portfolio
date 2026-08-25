import { Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.title}</p>
        </div>

        <div className="flex items-center gap-5 text-muted-foreground">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="transition-colors hover:text-primary"
          >
            <Linkedin className="size-5" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            className="transition-colors hover:text-primary"
          >
            <Mail className="size-5" aria-hidden="true" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
