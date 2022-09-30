import { Button } from '@material-ui/core';
import { useAuth } from 'lib/useAuth';
import Link from 'next/link';

interface ILink {
    readonly href: string;
    readonly label: string;
}

const Links: React.FC = (): JSX.Element => {
    const { user } = useAuth();

    const links: ILink[] = [
        !user && { href: '/auth/signup', label: 'Sign Up' },
        !user && { href: '/auth/login', label: 'Log In' },
        user && { href: '/my-dashboard', label: 'My Dashboard' },
        user && { href: '/auth/signout', label: 'Sign Out' },
    ].filter((link) => link);

    return (
        <>
            {links.map(({ label, href }) => (
                <Link href={href} key={href}>
                    <Button color="inherit">{label}</Button>
                </Link>
            ))
            }
        </>
    );
};

export default Links;