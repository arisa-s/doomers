import MainLayout from "@/components/layout/MainLayout";

export default function LoadingPress() {
  return (
    <MainLayout
      backgroundImage="url('/images/hands/handsThree.png')"
      pageTitle="/press"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-16 my-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="perspective-1000">
            <div className="relative w-full h-56 md:h-80 backdrop-blur-sm bg-white/20 p-6 flex flex-col items-center justify-center animate-pulse">
              <div className="text-center w-full">
                <div className="h-6 md:h-8 bg-primary/20 rounded mb-4 w-3/4 mx-auto"></div>
                <div className="w-16 h-1 bg-primary/20 mx-auto"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
