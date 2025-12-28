import Sidebar from '@/components/Sidebar';
import { BarChart, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function Dashboard() {
    const stats = [
        { label: 'Total Shorts', value: '12', icon: BarChart, color: 'text-indigo-400' },
        { label: 'Processing', value: '2', icon: Clock, color: 'text-amber-400' },
        { label: 'Completed', value: '9', icon: CheckCircle, color: 'text-emerald-400' },
        { label: 'Failed', value: '1', icon: AlertCircle, color: 'text-rose-400' },
    ];

    return (
        <div className="flex bg-[#020617] min-h-screen">
            <Sidebar />
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-6xl mx-auto space-y-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white">Studio Overview</h1>
                        <p className="text-slate-400 mt-1">Monitor your video generation status</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="p-6 glass rounded-2xl space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-400 font-medium">{stat.label}</span>
                                    <stat.icon className={stat.color} size={24} />
                                </div>
                                <div className="text-3xl font-bold text-white">{stat.value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">Recent Generations</h2>
                        <div className="glass rounded-2xl overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-slate-900/50 border-b border-slate-800">
                                    <tr>
                                        <th className="px-6 py-4 text-sm font-medium text-slate-400">Topic</th>
                                        <th className="px-6 py-4 text-sm font-medium text-slate-400">Status</th>
                                        <th className="px-6 py-4 text-sm font-medium text-slate-400">Duration</th>
                                        <th className="px-6 py-4 text-sm font-medium text-slate-400">Created</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800">
                                    {[
                                        { topic: "Space Facts", status: "Completed", duration: "60s", date: "2 hours ago" },
                                        { topic: "AI Future", status: "Processing", duration: "45s", date: "10 mins ago" },
                                        { topic: "Cooking Hack", status: "Failed", duration: "30s", date: "Yesterday" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-slate-900/30 transition-colors">
                                            <td className="px-6 py-4 font-medium text-white">{row.topic}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${row.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' :
                                                        row.status === 'Processing' ? 'bg-amber-500/10 text-amber-400' :
                                                            'bg-rose-500/10 text-rose-400'
                                                    }`}>
                                                    {row.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-slate-400">{row.duration}</td>
                                            <td className="px-6 py-4 text-slate-400">{row.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
