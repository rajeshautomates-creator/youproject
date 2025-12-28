import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8 bg-[#020617]">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold tracking-tight sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400">
          AI Shorts Studio
        </h1>
        <p className="max-w-xl mx-auto text-xl text-slate-400">
          Generate premium YouTube Shorts with AI. Script, Voice, and Video in one click.
        </p>
      </div>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="px-8 py-4 text-lg font-semibold text-white transition-all bg-indigo-600 rounded-xl hover:bg-indigo-500 studio-glow"
        >
          Enter Studio
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-3">
        {[
          { title: "AI Scripting", desc: "GPT-4 powered viral hooks" },
          { title: "Pro Voices", desc: "Realistic OpenAI & ElevenLabs TTS" },
          { title: "Auto Edit", desc: "9:16 layout with burn-in captions" }
        ].map((feature, i) => (
          <div key={i} className="p-6 glass rounded-2xl">
            <h3 className="text-lg font-semibold text-cyan-400">{feature.title}</h3>
            <p className="text-slate-400">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
