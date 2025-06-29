import MainLayout from "@/components/layout/MainLayout";

export default function LoadingReadingList() {
  return (
    <MainLayout
      backgroundImage="url('/images/hands/handsFour.png')"
      pageTitle="/reading-list"
    >
      <div className="space-y-12 md:space-y-16 text-lg">
        {/* Loading skeleton for Talks Section */}
        <section>
          <div className="mb-6 md:mb-8">
            <div className="h-8 bg-accent/20 rounded w-20 animate-pulse"></div>
          </div>
          <div className="space-y-4 md:space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-b border-primary pb-1 md:pb-2">
                <div className="h-5 bg-primary/20 rounded mb-1 md:mb-2 animate-pulse"></div>
                <div className="h-4 bg-accent/20 rounded w-16 animate-pulse"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Loading skeleton for Books Section */}
        <section>
          <div className="mb-6 md:mb-8">
            <div className="h-8 bg-accent/20 rounded w-20 animate-pulse"></div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div
                key={i}
                className="h-5 bg-primary/20 rounded animate-pulse"
              ></div>
            ))}
          </div>
        </section>

        {/* Loading skeleton for Articles Section */}
        <section>
          <div className="mb-6 md:mb-8">
            <div className="h-8 bg-accent/20 rounded w-24 animate-pulse"></div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="space-y-1">
                <div className="h-5 bg-primary/20 rounded animate-pulse"></div>
                <div className="h-3 bg-primary/10 rounded w-24 animate-pulse"></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
