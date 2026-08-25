import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  muted?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  muted = false,
}: SectionProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id={id} className={cn("py-20 sm:py-24", muted && "bg-surface", className)}>
      <div className="section-shell">
        <div ref={ref} data-visible={visible} className="reveal max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
          ) : null}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </div>
  );
}
