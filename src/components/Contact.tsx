import { useState } from "react";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Section, Reveal } from "@/components/Section";
import { profile } from "@/data/portfolio";

type Fields = { name: string; email: string; subject: string; message: string };
const empty: Fields = { name: "", email: "", subject: "", message: "" };

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (values.subject.trim().length < 3) errors.subject = "Please add a short subject.";
  if (values.message.trim().length < 10) errors.message = "Message should be at least 10 characters.";
  return errors;
}

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [ready, setReady] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    setReady(Object.keys(found).length === 0);
  };

  const field = (key: keyof Fields) => ({
    id: key,
    value: values[key],
    "aria-invalid": Boolean(errors[key]),
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => setValues((v) => ({ ...v, [key]: e.target.value })),
  });

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's get in touch"
      description="Open to full stack developer roles, internships and collaboration. The quickest way to reach me is email."
      muted
    >
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <Reveal>
          <ul className="space-y-4">
            <ContactRow icon={<Mail className="size-4" />} label="Email">
              <a href={`mailto:${profile.email}`} className="hover:text-primary">
                {profile.email}
              </a>
            </ContactRow>
            <ContactRow icon={<Phone className="size-4" />} label="Phone">
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                {profile.phone}
              </a>
            </ContactRow>
            <ContactRow icon={<Linkedin className="size-4" />} label="LinkedIn">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-primary"
              >
                linkedin.com/in/Sanjay-n
              </a>
            </ContactRow>
            <ContactRow icon={<MapPin className="size-4" />} label="Location">
              {profile.location}
            </ContactRow>
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-lg border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Name" error={errors.name} name="name">
                <Input {...field("name")} placeholder="Your name" autoComplete="name" />
              </FormField>
              <FormField label="Email" error={errors.email} name="email">
                <Input
                  {...field("email")}
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </FormField>
            </div>
            <div className="mt-5">
              <FormField label="Subject" error={errors.subject} name="subject">
                <Input {...field("subject")} placeholder="What is this about?" />
              </FormField>
            </div>
            <div className="mt-5">
              <FormField label="Message" error={errors.message} name="message">
                <Textarea {...field("message")} rows={5} placeholder="Write your message..." />
              </FormField>
            </div>

            <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
              <Send className="size-4" aria-hidden="true" />
              Send Message
            </Button>

            <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
              {ready
                ? `Your message looks good. This form isn't connected to an email service yet — please send it directly to ${profile.email}.`
                : "This form validates your details locally; no email service is connected yet."}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
      <span
        className="grid size-9 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground"
        aria-hidden="true"
      >
        {icon}
      </span>
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm font-medium break-words transition-colors">{children}</p>
      </div>
    </li>
  );
}

function FormField({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      {children}
      {error ? (
        <p id={`${name}-error`} className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
