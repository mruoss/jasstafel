/* eslint-env browser */

export default () => {
	window.addEventListener(
		'load',
		() => {
			const appCache = window.applicationCache
			appCache.addEventListener(
				'updateready',
				() => {
					if (appCache.status === appCache.UPDATEREADY) {
						// Browser downloaded a new app cache.
						// Swap it in and reload the page to get the new hotness.
						appCache.swapCache()
						// eslint-disable-next-line no-alert
						if (
							confirm(
								'Eine neuere Version der Jasstafel ist verfügbar. Soll sie jetzt geladen werden? Achtung: Der Spielstand geht dabei verloren.',
							)
						) {
							window.location.reload()
						}
					} else {
						// Manifest didn't changed. Nothing new to server.
					}
				},
				false,
			)
		},
		false,
	)
}
