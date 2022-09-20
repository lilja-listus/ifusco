import { useEffect } from 'react';
import { useAuth } from 'lib/useAuth';

const SignOut: React.FC = (): JSX.Element => {
    const { signOut } = useAuth();

    useEffect(() => {
        signOut();
    }, []);

    return <div>Signout</div>;
};

export default SignOut;
