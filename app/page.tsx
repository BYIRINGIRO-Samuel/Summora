import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="grow">
        <Hero />
      </main>
    </div>
  );
}
