import '../styles/global.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const AnyComponent = Component as any;
    return <AnyComponent {...pageProps} />;
    // <Component {...pageProps} />
};

export default MyApp;
