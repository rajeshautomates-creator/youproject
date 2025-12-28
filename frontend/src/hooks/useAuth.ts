import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useAuth() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('admin_token');
        if (!token) {
            router.push('/login');
        } else {
            setUser({ email: 'admin' }); // Mock for now
        }
        setLoading(false);
    }, []);

    return { user, loading };
}
