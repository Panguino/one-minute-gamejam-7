import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/styles/GlobalStyles'
import Layout from '@/components/layouts/Layout'
import { theme } from '@/styles/theme'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	)
}

export default MyApp
