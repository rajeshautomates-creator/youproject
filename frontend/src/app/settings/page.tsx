import Sidebar from '@/components/Sidebar';
import { Key, MessageSquare, Terminal, Save } from 'lucide-react';

export default function Settings() {
    return (
        <div className="flex bg-[#020617] min-h-screen">
            <Sidebar />
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white">System Settings</h1>
                        <p className="text-slate-400 mt-1">Configure API keys and AI parameters</p>
                    </div>

                    <div className="space-y-6">
                        <section className="glass rounded-3xl p-8 space-y-6">
                            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                                <Key className="text-indigo-400" size={24} />
                                <h2 className="text-xl font-semibold text-white">API Integration</h2>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">OpenAI API Key</label>
                                    <input
                                        type="password"
                                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                                        placeholder="sk-..."
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">ElevenLabs API Key (Optional)</label>
                                    <input
                                        type="password"
                                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                                        placeholder="el-..."
                                    />
                                </div>
                            </div>
                        </section>

                        <section className="glass rounded-3xl p-8 space-y-6">
                            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                                <MessageSquare className="text-cyan-400" size={24} />
                                <h2 className="text-xl font-semibold text-white">Prompt Engineering</h2>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Script System Prompt</label>
                                    <textarea
                                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none h-48"
                                        defaultValue="You are a viral YouTube Shorts script writer. Write engaging, fast-paced scripts with strong hooks..."
                                    />
                                </div>
                            </div>
                        </section>

                        <section className="glass rounded-3xl p-8 space-y-6">
                            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                                <Terminal className="text-slate-400" size={24} />
                                <h2 className="text-xl font-semibold text-white">System Logs</h2>
                            </div>

                            <div className="bg-black/50 p-4 rounded-xl font-mono text-xs text-emerald-500 h-40 overflow-y-auto">
                                <div>[13:45:02] Pipeline started for Short #8271</div>
                                <div>[13:45:05] GPT-4o Script generated successfully</div>
                                <div>[13:45:12] OpenAI TTS audio created</div>
                                <div>[13:45:15] Ffmpeg rendering frame 120/1800...</div>
                                <div className="animate-pulse">_</div>
                            </div>
                        </section>

                        <div className="flex justify-end">
                            <button className="flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20">
                                <Save size={20} />
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
