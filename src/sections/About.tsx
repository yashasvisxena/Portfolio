import { ContactConfig, HomeConfig } from "@/config/config";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function About() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleContactClick = (
    e: React.MouseEvent,
    key: string,
    value: (typeof ContactConfig)[keyof typeof ContactConfig]
  ) => {
    if (value.type === "copy") {
      e.preventDefault();
      navigator.clipboard.writeText(value.link);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
      toast.success("Copied to clipboard");
    }
  };

  return (
    <section
      id="about"
      className="w-full max-w-7xl flex items-center min-h-[calc(100vh-4.25rem)] mx-auto p-4 px-6 md:px-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 w-full">
        <div className="md:col-span-2 md:row-span-1">
          {HomeConfig.description}
        </div>

        <div className="md:col-span-1 md:row-span-2 rounded-lg overflow-hidden bg-background h-[300px] md:h-full">
          <img
            src={HomeConfig.image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div
          className={cn(
            "md:col-span-2 md:row-span-1 flex flex-col md:flex-row items-baseline md:items-center justify-between gap-8 md:gap-4 text-left p-4 rounded-md ",
            HomeConfig.cardBgChange ? "bg-foreground/90 text-background" : "bg-background text-foreground"
          )}
        >
          <h2 className="flex-1 text-4xl sm:text-5xl md:text-7xl font-mono font-thin whitespace-pre-line leading-tight">
            {HomeConfig.role}
          </h2>
          <div className="flex md:flex-col items-start h-full gap-1 justify-around">
            {Object.entries(ContactConfig).map(([key, value]) => {
              const href =
                value.type === "mailto"
                  ? `mailto:${value.link}`
                  : value.type === "tel"
                  ? `tel:${value.link}`
                  : value.link;

              const isCopied = copiedKey === key;

              return (
                <a
                  key={key}
                  href={value.type === "copy" ? "#" : href}
                  onClick={(e) => handleContactClick(e, key, value)}
                  target={value.type === "open" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={cn(
                    "group relative flex items-center gap-0.5 text-xs md:text-sm font-medium transition-colors w-fit",
                    HomeConfig.cardBgChange
                      ? "text-background hover:text-background/80"
                      : "text-foreground hover:text-foreground/80"
                  )}
                >
                  <div className="flex items-center gap-2">
                    {isCopied ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      value.icon
                    )}
                    <span className="capitalize">
                      {isCopied ? "Copied!" : key}
                    </span>
                  </div>

                  {!isCopied && (
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  )}

                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px w-0  transition-all duration-300 group-hover:w-full",
                      HomeConfig.cardBgChange
                        ? "bg-background/50"
                        : "bg-foreground/50"
                    )}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
