import MainLayout from "@/components/layout/MainLayout";

export default function LoadingCastAndCrew() {
  return (
    <MainLayout
      backgroundImage="url('/images/hands/handsOne.png')"
      pageTitle="/cast-and-crew"
    >
      {/* Toggle Button Skeleton */}
      <div className="flex justify-center mb-12">
        <div className="h-8 bg-accent/20 rounded w-16 mr-4 animate-pulse"></div>
        <div className="h-8 bg-primary/20 rounded w-16 animate-pulse"></div>
      </div>

      {/* Cast Grid Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-secondary/30 animate-pulse">
            <div className="flex flex-col items-center text-center">
              {/* Profile Picture Skeleton */}
              <div className="w-full h-60 md:h-80 bg-white/20 mb-2"></div>

              <div className="p-4 w-full">
                <div className="h-5 bg-accent/20 rounded mb-2 w-3/4 mx-auto"></div>
                <div className="h-4 bg-primary/20 rounded w-1/2 mx-auto"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
