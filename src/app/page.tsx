import Image from "next/image";
import { aiTools } from "@/data/ai-tools";

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold text-center">AI Toolbox</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:grid-cols-2">
          {aiTools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 rounded-lg border border-gray-200 transition-colors group hover:border-gray-300"
            >
              <div className="w-16 h-16 relative">
                <Image
                  src={tool.icon}
                  alt={`${tool.name} icon`}
                  fill
                  className="object-contain transition-transform group-hover:scale-110"
                />
              </div>
              <h2 className="text-lg font-semibold text-center">{tool.name}</h2>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
