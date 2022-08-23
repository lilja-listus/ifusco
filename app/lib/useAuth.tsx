import { useState, useContext, createContext, useEffect } from 'react'
import { useApolloClient } from '@apollo/client'
import { useRouter } from 'next/router'

import { useSigninMutation } from 'lib/graphql/signin.graphql'
import { useSignupMutation } from 'lib/graphql/signup.graphql'
import { useEditUserMutation } from 'lib/graphql/edituser.graphql'
import { useCurrentUserQuery } from 'lib/graphql/currentUser.graphql'

type AuthProps = {
    user: any;
    error: string;
    signIn: (email: string, password: string) => Promise<void>
    signUp: (email: string, password: string, nameFirst: string) => Promise<void>
    signOut: () => void
    editUser: (nameFirst: string, nameLast: string, university?: string,
        country?: string,
        hasPaid?: string, password?: string) => Promise<void>
}


const AuthContext = createContext<Partial<AuthProps>>({})

export function AuthProvider({ children }) {
    const auth = useProvideAuth()
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}

function useProvideAuth() {
    const client = useApolloClient();
    const router = useRouter();

    const [error, setError] = useState('');
    const { data } = useCurrentUserQuery({
        fetchPolicy: 'network-only',
        errorPolicy: 'ignore'
    })

    const user = data && data.currentUser;

    const [signinMutation] = useSigninMutation();
    const [signupMutation] = useSignupMutation();
    const [editUserMutation] = useEditUserMutation();

    const signIn = async (email, password) => {
        try {
            const { data } = await signinMutation({ variables: { email, password } })
            if (data.login.token && data.login.user) {
                sessionStorage.setItem('token', data.login.token)
                client.resetStore().then(() => {
                    router.push('/')
                })
            } else {
                setError('Invalid login')
            }

        } catch (err) {
            setError(err.message);
        }
    }


    const signUp = async (email, password, nameFirst) => {
        try {
            const { data } = await signupMutation({ variables: { email, password, nameFirst } })
            if (data.register.token && data.register.user) {
                sessionStorage.setItem('token', data.register.token)
                client.resetStore().then(() => {
                    router.push('/')
                })
            } else {
                setError('Invalid login')
            }

        } catch (err) {
            setError(err.message);
        }
    }

    const signOut = () => {
        sessionStorage.removeItem('token');
        client.resetStore().then(() => {
            router.push('/');
        });
    }

    const editUser = async (nameFirst, nameLast,
        university,
        country,
        hasPaid, password) => {
        try {
            const data = await editUserMutation({
                variables: {
                    input: {
                        id: user._id,
                        password, nameFirst, nameLast,
                        university,
                        country,
                        hasPaid,
                    }
                }
            });

            console.log(data)
        } catch (err) {
            setError(err.message);
        }
    }

    return {
        user, error, signIn, signOut, signUp, editUser
    }
}