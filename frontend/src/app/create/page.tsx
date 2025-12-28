"use client";

import Sidebar from '@/components/Sidebar';
import { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';

export default function CreateShort() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        topic: '',
        language: 'English',
        duration: '60',
        style: 'Modern',
        voice: 'alloy',
        cta: 'Subscribe for more!'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Submit to API
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <div className="flex bg-[#020617] min-h-screen">
            <Sidebar />
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white">Create New Short</h1>
                        <p className="text-slate-400 mt-1">Configure your AI video generation</p>
                    </div>

                    <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-8">
                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-slate-300">What is the topic?</label>
                            <textarea
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none h-32"
                                placeholder="Ex: 5 Mind-blowing facts about Quantum Physics..."
                                value={formData.topic}
                                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-slate-300">Language</label>
                                <select
                                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                                    value={formData.language}
                                    onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                                >
                                    <option>English</option>
                                    <option>Odia</option>
                                    <option>Hindi</option>
                                    <option>Spanish</option>
                                </select>
                            </div>

                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-slate-300">Duration (seconds)</label>
                                <select
                                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                                    value={formData.duration}
                                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                >
                                    <option value="30">30 Seconds</option>
                                    <option value="45">45 Seconds</option>
                                    <option value="60">60 Seconds</option>
                                </select>
                            </div>

                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-slate-300">Visual Style</label>
                                <select
                                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                                    value={formData.style}
                                    onChange={(e) => setFormData({ ...formData, style: e.target.value })}
                                >
                                    <option>Modern</option>
                                    <option>Cinematic</option>
                                    <option>Minimalist</option>
                                    <option>Educational</option>
                                </select>
                            </div>

                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-slate-300">AI Voice</label>
                                <select
                                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                                    value={formData.voice}
                                    onChange={(e) => setFormData({ ...formData, voice: e.target.value })}
                                >
                                    <option value="alloy">Alloy (Neutral)</option>
                                    <option value="echo">Echo (Warm)</option>
                                    <option value="fable">Fable (Narrative)</option>
                                    <option value="onyx">Onyx (Deep)</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-slate-300">Call to Action (CTA)</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="Ex: Subscribe for more!"
                                value={formData.cta}
                                onChange={(e) => setFormData({ ...formData, cta: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2 studio-glow"
                        >
                            {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
                            {loading ? 'Generating Material...' : 'Generate Short'}
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}
