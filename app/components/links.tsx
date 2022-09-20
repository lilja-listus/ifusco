import { Button } from '@material-ui/core';
import { useAuth } from 'lib/useAuth';
import Link from 'next/link';


export const Links = (): JSX.Element[] => {
    const { user } = useAuth();

    return [
        !user && { href: '/auth/signup', label: 'Sign Up' },
        !user && { href: '/auth/signin', label: 'Sign In' },
        user && { href: '/my-dashboard', label: 'My Dashboard' },
        user && { href: '/auth/signout', label: 'Sign Out' },
    ]
        .filter((link) => link)
        .map(({ label, href }) => {
            return (
                <Link href={href} key={href}>
                    <Button color="inherit">{label}</Button>
                </Link>
            );
        });
};
