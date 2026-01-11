import { HighlightsConfig } from "@/config/config";

export const Highlights = () => {
  return (
    <section className="flex items-center">
      <div className="w-full flex flex-col items-start gap-4">
        <p className="text-2xl border border-foreground/20 rounded-full font-semibold text-start px-3 py-1">
          Highlights
        </p>
        <div className="grid grid-cols-2 md:grid-flow-col md:auto-cols-fr gap-4 w-full">
          {HighlightsConfig.map((highlight, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-2 ${
                index !== HighlightsConfig.length - 1 &&
                "border-r border-foreground/20"
              }`}
            >
              <p className="text-3xl font-semibold text-center px-3 py-1">
                {highlight.title}
              </p>
              <p className="text-center text-2xl px-3 py-1">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
