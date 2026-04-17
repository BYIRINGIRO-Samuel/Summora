import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f1f4f9]">
      <main className="flex-grow">
        <Hero />
        {/* Further sections can be added here */}
      </main>
    </div>
  );
}
