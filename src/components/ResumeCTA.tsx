import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Section";
import resumeAsset from "@/assets/resume.asset.json";

export function ResumeCTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <Reveal>
          <div className="rounded-xl border border-border bg-surface p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold sm:text-3xl">Interested in working together?</h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              View my complete resume to learn more about my experience, skills and projects.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <a href={resumeAsset.url} download="Sanjay_N_Resume.pdf">
                  <Download className="size-4" aria-hidden="true" />
                  Download Resume
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={resumeAsset.url} target="_blank" rel="noreferrer noopener">
                  <FileText className="size-4" aria-hidden="true" />
                  View Resume
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
