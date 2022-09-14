import { Button } from '@material-ui/core';
import { useAuth } from 'lib/useAuth';
import Link from 'next/link';


export const Links = () => {
    const { user } = useAuth();

    return [
        !user && { label: 'Sign Up', href: '/auth/signup' },
        !user && { label: 'Sign In', href: '/auth/signin' },
        user && { label: 'My Dashboard', href: '/my-dashboard' },
        user && { label: 'Sign Out', href: '/auth/signout' },
    ]
        .filter((link) => link)
        .map(({ label, href }) => {
            return (
                <Link href={href} key={href}>
                    <Button color="inherit">{label}</Button>
                </Link>
            );
        });
}