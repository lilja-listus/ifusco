import { createContext, ReactNode, useContext, useState } from 'react';
import { ApolloClient, useApolloClient } from '@apollo/client';
import { NextRouter, useRouter } from 'next/router';
import { useSigninMutation } from 'lib/graphql/signin.graphql';
import { useSignupMutation } from 'lib/graphql/signup.graphql';
import { useEditUserMutation } from 'lib/graphql/edituser.graphql';
import { useCurrentUserQuery } from 'lib/graphql/currentUser.graphql';
import { IUser } from '../interfaces/IUser';

type AuthProps = {
    user: IUser;
    error: string;
    signIn: (email: string, password: string) => Promise<void>
    signUp: (email: string, password: string, nameFirst: string) => Promise<void>
    signOut: () => void
    editUser: (nameFirst: string, nameLast?: string, university?: string,
        country?: string,
        hasPaid?: string, password?: string) => Promise<void>
};

export interface IAuthProviderProps {
    children?: ReactNode
}

const AuthContext: React.Context<Partial<AuthProps>> = createContext<Partial<AuthProps>>({});

export const AuthProvider = ({ children }: IAuthProviderProps): JSX.Element => {
    const auth: unknown = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = (): Partial<AuthProps> => {
    return useContext(AuthContext);
};

function useProvideAuth(): unknown {
    const client: ApolloClient<object> = useApolloClient();
    const router: NextRouter = useRouter();

    const [error, setError] = useState('');
    const { data } = useCurrentUserQuery({
        errorPolicy: 'ignore',
        fetchPolicy: 'network-only',
    });

    const user: IUser = data && data.currentUser;

    const [signinMutation] = useSigninMutation();
    const [signupMutation] = useSignupMutation();
    const [editUserMutation] = useEditUserMutation();

    const signIn = async (email: string, password: string): Promise<void> => {
        try {
            const { data } = await signinMutation({ variables: { email, password } });
            if (data.login.token && data.login.user) {
                sessionStorage.setItem('token', data.login.token);
                client.resetStore().then(() => {
                    router.push('/my-dashboard');
                });
            } else {
                setError('Invalid login');
            }

        } catch (err) {
            setError(err.message);
        }
    };


    const signUp = async (email: string, password: string, nameFirst: string): Promise<void> => {
        try {
            const { data } = await signupMutation({ variables: { email, nameFirst, password } });

            if (data.register.token && data.register.user) {
                sessionStorage.setItem('token', data.register.token);
                client.resetStore().then(() => {
                    router.push('/my-dashboard');
                });
            } else {
                setError('Invalid login');
            }

        } catch (err) {
            setError(err.message);
        }
    };

    const signOut = (): void => {
        sessionStorage.removeItem('token');
        client.resetStore().then(() => {
            router.push('/');
        });
    };

    const editUser = async (nameFirst, nameLast,
        university,
        country,
        hasPaid, password): Promise<void> => {
        try {
            await editUserMutation({
                variables: {
                    input: {
                        // country,
                        // hasPaid,
                        id: user._id,
                        nameFirst,
                        // nameLast, 
                        password,
                        // university,
                    },
                },
            });

        } catch (err) {
            setError(err.message);
        }
    };

    return {
        editUser, error, signIn, signOut, signUp, user,
    };
}
