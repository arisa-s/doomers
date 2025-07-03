import MainLayout from "@/components/layout/MainLayout";

export default async function Home() {
  return (
    <MainLayout
      backgroundImage="url('/images/hands/handsTwo.png')"
      pageTitle="/"
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <span className="text-2xl font-bold">Coming soon...</span>
      </div>
    </MainLayout>
  );
}
