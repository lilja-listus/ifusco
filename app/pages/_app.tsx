import { useEffect, useState } from 'react';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'lib/apollo';
import { themeLight, themeDark } from 'lib/theme';
import { AuthProvider } from 'lib/useAuth'
import Header from 'components/Header';
import Footer from 'components/Footer';
import createEmotionCache from './createEmotionCache'
import { CacheProvider } from '@emotion/react';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {

    const apolloClient = useApollo(pageProps.initialApolloState)
    const [darkState, setDarkState] = useState(false)

    const handleThemeChange = () => {
        setDarkState(!darkState)
    }

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }, []);

    return (
        <CacheProvider value={emotionCache}>
            <ApolloProvider client={apolloClient}  >
                <ThemeProvider theme={darkState ? themeDark : themeLight}>
                    <CssBaseline />
                    <AuthProvider>
                        <Header darkState={darkState} handleThemeChange={handleThemeChange} />
                        <Component {...pageProps} /></AuthProvider></ThemeProvider>
                <Footer />
            </ApolloProvider >
        </CacheProvider>)
}


