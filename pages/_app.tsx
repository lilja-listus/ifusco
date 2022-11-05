import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { useApollo } from 'lib/apollo';
import { themeDark, themeLight } from 'lib/theme';
import { AuthProvider } from 'lib/useAuth';
import Header from 'components/Header';
import Footer from 'components/Footer';
import createEmotionCache from '../components/data/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';

interface IProps {
    readonly Component: any;
    readonly emotionCache: EmotionCache;
    readonly pageProps: any;
}

const clientSideEmotionCache: EmotionCache = createEmotionCache();

const MyApp: React.FC<IProps> = ({ Component, emotionCache = clientSideEmotionCache, pageProps }): JSX.Element => {

    const apolloClient: ApolloClient<NormalizedCacheObject> = useApollo(pageProps.initialApolloState);

    const [darkState, setDarkState] = useState(false);

    const handleThemeChange = (): void => {
        setDarkState(!darkState);
    };

    useEffect(() => {
        const jssStyles: Element = document.querySelector('#jss-server-side');

        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }, []);

    return (
        <CacheProvider value={emotionCache}>
            <ApolloProvider client={apolloClient}  >
                <ThemeProvider theme={darkState ? themeDark : themeLight}>
                    <CssBaseline />
                    <AuthProvider>
                        <Header darkState={darkState} handleThemeChange={handleThemeChange} />
                        <Component {...pageProps} />
                    </AuthProvider>
                </ThemeProvider>
                <Footer />
            </ApolloProvider >
        </CacheProvider>);
};

export default MyApp;
