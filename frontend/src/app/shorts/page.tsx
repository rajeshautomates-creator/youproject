import Sidebar from '@/components/Sidebar';
import { Play, Download, Trash2, ExternalLink } from 'lucide-react';

export default function MyShorts() {
    const shorts = [
        {
            id: 1,
            topic: "Space Facts",
            status: "Completed",
            thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=700&fit=crop",
            date: "2 hours ago"
        },
        {
            id: 2,
            topic: "Future of AI",
            status: "Completed",
            thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=700&fit=crop",
            date: "Yesterday"
        },
        {
            id: 3,
            topic: "Healthy Coding",
            status: "Processing",
            thumbnail: null,
            date: "Just now"
        }
    ];

    return (
        <div className="flex bg-[#020617] min-h-screen">
            <Sidebar />
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-6xl mx-auto space-y-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-white">My Library</h1>
                            <p className="text-slate-400 mt-1">Manage and download your generated videos</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {shorts.map((short) => (
                            <div key={short.id} className="glass rounded-2xl overflow-hidden flex flex-col group">
                                <div className="relative aspect-[9/16] bg-slate-900 flex items-center justify-center">
                                    {short.thumbnail ? (
                                        <img src={short.thumbnail} alt={short.topic} className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity" />
                                    ) : (
                                        <div className="text-slate-700 animate-pulse text-sm">Rendering...</div>
                                    )}
                                    {short.status === 'Completed' && (
                                        <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center shadow-xl">
                                                <Play fill="white" size={32} />
                                            </div>
                                        </button>
                                    )}
                                </div>

                                <div className="p-5 space-y-4">
                                    <div>
                                        <h3 className="font-semibold text-white truncate">{short.topic}</h3>
                                        <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">{short.date}</p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors text-sm">
                                            <Download size={16} /> Download
                                        </button>
                                        <button className="p-2 text-slate-500 hover:text-red-400 transition-colors">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
