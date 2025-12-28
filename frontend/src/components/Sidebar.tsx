import Link from 'next/link';
import { LayoutDashboard, PlusCircle, Video, Settings, LogOut } from 'lucide-react';

const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: PlusCircle, label: 'Create Short', href: '/create' },
    { icon: Video, label: 'My Shorts', href: '/shorts' },
    { icon: Settings, label: 'Settings', href: '/settings' },
];

export default function Sidebar() {
    return (
        <div className="w-64 h-screen bg-slate-950 border-r border-slate-900 flex flex-col p-6 sticky top-0">
            <div className="mb-10">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400">
                    Shorts Studio
                </h2>
            </div>

            <nav className="flex-1 space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-900 rounded-xl transition-all"
                    >
                        <item.icon size={20} />
                        <span className="font-medium">{item.label}</span>
                    </Link>
                ))}
            </nav>

            <button className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-400 transition-all">
                <LogOut size={20} />
                <span className="font-medium">Logout</span>
            </button>
        </div>
    );
}
