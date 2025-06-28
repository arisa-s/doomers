import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press - Doomers",
  description: "Press kit, reviews, and media coverage for Doomers.",
};

export default function Press() {
  return (
    <div className="min-h-screen">
      {/* Main content area with side-by-side layout */}

      <div className="flex-1 p-8 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* <div className="flex flex-col gap-8 items-center py-12">
            <h1 className="text-4xl font-accent text-accent mb-8">Press</h1>
          </div> */}
        </div>
      </div>
    </div>
  );
}
