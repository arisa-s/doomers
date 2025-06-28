import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cast & Crew - Doomers",
  description: "Meet the talented cast and creative team behind Doomers.",
};

export default function CastAndCrew() {
  return (
    <div className="min-h-screen">
      {/* Main content area with side-by-side layout */}
      <div className="flex-1 p-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-8 items-center py-12">
            {/* <h1 className="text-4xl font-accent text-accent mb-8">
              Cast & Crew
            </h1> */}
          </div>
        </div>
      </div>
    </div>
  );
}
