/* eslint-disable @next/next/no-title-in-document-head */
import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
	return (
		<Html>
			<Head>
				<title>Brand | New App</title>
				<link rel="icon" id="favicon" href="/favicon.ico" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
