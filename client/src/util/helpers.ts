/* eslint-disable import/prefer-default-export */
export function updateFavicon(mode: string) {
	const favicon = document.getElementById("favicon") as HTMLLinkElement
	switch (mode) {
		case "1":
			favicon.href = "/images/favicon.ico"
			break
		case "2":
			favicon.href = "/images/favicon-2.ico"
			break
		default:
			break
	}
}
