import { useEffect } from 'react';
import { useAuth } from 'lib/useAuth';
import { useTranslation } from 'react-i18next';

const SignOut: React.FC = (): JSX.Element => {
    const { signOut } = useAuth();
    const { t } = useTranslation();

    useEffect(() => {
        signOut();
    }, []);

    return <div>{t("SIGNOUT")}</div>;
};

export default SignOut;
