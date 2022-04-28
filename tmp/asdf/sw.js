;(() => {
	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_version.js
	try {
		self['workbox:core:6.5.2'] && _()
	} catch (e) {}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/models/messages/messageGenerator.js
	var fallback = (code, ...args) => {
		let msg = code
		if (args.length > 0) {
			msg += ` :: ${JSON.stringify(args)}`
		}
		return msg
	}
	var messageGenerator = true ? fallback : generatorFunction

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/WorkboxError.js
	var WorkboxError = class extends Error {
		constructor(errorCode, details) {
			const message = messageGenerator(errorCode, details)
			super(message)
			this.name = errorCode
			this.details = details
		}
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/cacheNames.js
	var _cacheNameDetails = {
		googleAnalytics: 'googleAnalytics',
		precache: 'precache-v2',
		prefix: 'workbox',
		runtime: 'runtime',
		suffix: typeof registration !== 'undefined' ? registration.scope : '',
	}
	var _createCacheName = (cacheName) => {
		return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
			.filter((value) => value && value.length > 0)
			.join('-')
	}
	var eachCacheNameDetail = (fn) => {
		for (const key of Object.keys(_cacheNameDetails)) {
			fn(key)
		}
	}
	var cacheNames = {
		updateDetails: (details) => {
			eachCacheNameDetail((key) => {
				if (typeof details[key] === 'string') {
					_cacheNameDetails[key] = details[key]
				}
			})
		},
		getGoogleAnalyticsName: (userCacheName) => {
			return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics)
		},
		getPrecacheName: (userCacheName) => {
			return userCacheName || _createCacheName(_cacheNameDetails.precache)
		},
		getPrefix: () => {
			return _cacheNameDetails.prefix
		},
		getRuntimeName: (userCacheName) => {
			return userCacheName || _createCacheName(_cacheNameDetails.runtime)
		},
		getSuffix: () => {
			return _cacheNameDetails.suffix
		},
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/logger.js
	var logger = true
		? null
		: (() => {
				if (!('__WB_DISABLE_DEV_LOGS' in self)) {
					self.__WB_DISABLE_DEV_LOGS = false
				}
				let inGroup = false
				const methodToColorMap = {
					debug: `#7f8c8d`,
					log: `#2ecc71`,
					warn: `#f39c12`,
					error: `#c0392b`,
					groupCollapsed: `#3498db`,
					groupEnd: null,
				}
				const print = function (method, args) {
					if (self.__WB_DISABLE_DEV_LOGS) {
						return
					}
					if (method === 'groupCollapsed') {
						if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
							console[method](...args)
							return
						}
					}
					const styles = [
						`background: ${methodToColorMap[method]}`,
						`border-radius: 0.5em`,
						`color: white`,
						`font-weight: bold`,
						`padding: 2px 0.5em`,
					]
					const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')]
					console[method](...logPrefix, ...args)
					if (method === 'groupCollapsed') {
						inGroup = true
					}
					if (method === 'groupEnd') {
						inGroup = false
					}
				}
				const api = {}
				const loggerMethods = Object.keys(methodToColorMap)
				for (const key of loggerMethods) {
					const method = key
					api[method] = (...args) => {
						print(method, args)
					}
				}
				return api
		  })()

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/waitUntil.js
	function waitUntil(event, asyncFn) {
		const returnPromise = asyncFn()
		event.waitUntil(returnPromise)
		return returnPromise
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/_version.js
	try {
		self['workbox:precaching:6.5.2'] && _()
	} catch (e) {}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/createCacheKey.js
	var REVISION_SEARCH_PARAM = '__WB_REVISION__'
	function createCacheKey(entry) {
		if (!entry) {
			throw new WorkboxError('add-to-cache-list-unexpected-type', { entry })
		}
		if (typeof entry === 'string') {
			const urlObject = new URL(entry, location.href)
			return {
				cacheKey: urlObject.href,
				url: urlObject.href,
			}
		}
		const { revision, url } = entry
		if (!url) {
			throw new WorkboxError('add-to-cache-list-unexpected-type', { entry })
		}
		if (!revision) {
			const urlObject = new URL(url, location.href)
			return {
				cacheKey: urlObject.href,
				url: urlObject.href,
			}
		}
		const cacheKeyURL = new URL(url, location.href)
		const originalURL = new URL(url, location.href)
		cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision)
		return {
			cacheKey: cacheKeyURL.href,
			url: originalURL.href,
		}
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js
	var PrecacheInstallReportPlugin = class {
		constructor() {
			this.updatedURLs = []
			this.notUpdatedURLs = []
			this.handlerWillStart = async ({ request, state }) => {
				if (state) {
					state.originalRequest = request
				}
			}
			this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse }) => {
				if (event.type === 'install') {
					if (state && state.originalRequest && state.originalRequest instanceof Request) {
						const url = state.originalRequest.url
						if (cachedResponse) {
							this.notUpdatedURLs.push(url)
						} else {
							this.updatedURLs.push(url)
						}
					}
				}
				return cachedResponse
			}
		}
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js
	var PrecacheCacheKeyPlugin = class {
		constructor({ precacheController: precacheController2 }) {
			this.cacheKeyWillBeUsed = async ({ request, params }) => {
				const cacheKey =
					(params === null || params === void 0 ? void 0 : params.cacheKey) ||
					this._precacheController.getCacheKeyForURL(request.url)
				return cacheKey ? new Request(cacheKey, { headers: request.headers }) : request
			}
			this._precacheController = precacheController2
		}
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js
	var supportStatus
	function canConstructResponseFromBodyStream() {
		if (supportStatus === void 0) {
			const testResponse = new Response('')
			if ('body' in testResponse) {
				try {
					new Response(testResponse.body)
					supportStatus = true
				} catch (error) {
					supportStatus = false
				}
			}
			supportStatus = false
		}
		return supportStatus
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/copyResponse.js
	async function copyResponse(response, modifier) {
		let origin = null
		if (response.url) {
			const responseURL = new URL(response.url)
			origin = responseURL.origin
		}
		if (origin !== self.location.origin) {
			throw new WorkboxError('cross-origin-copy-response', { origin })
		}
		const clonedResponse = response.clone()
		const responseInit = {
			headers: new Headers(clonedResponse.headers),
			status: clonedResponse.status,
			statusText: clonedResponse.statusText,
		}
		const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit
		const body = canConstructResponseFromBodyStream() ? clonedResponse.body : await clonedResponse.blob()
		return new Response(body, modifiedResponseInit)
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/getFriendlyURL.js
	var getFriendlyURL = (url) => {
		const urlObj = new URL(String(url), location.href)
		return urlObj.href.replace(new RegExp(`^${location.origin}`), '')
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js
	function stripParams(fullURL, ignoreParams) {
		const strippedURL = new URL(fullURL)
		for (const param of ignoreParams) {
			strippedURL.searchParams.delete(param)
		}
		return strippedURL.href
	}
	async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
		const strippedRequestURL = stripParams(request.url, ignoreParams)
		if (request.url === strippedRequestURL) {
			return cache.match(request, matchOptions)
		}
		const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true })
		const cacheKeys = await cache.keys(request, keysOptions)
		for (const cacheKey of cacheKeys) {
			const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams)
			if (strippedRequestURL === strippedCacheKeyURL) {
				return cache.match(cacheKey, matchOptions)
			}
		}
		return
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/Deferred.js
	var Deferred = class {
		constructor() {
			this.promise = new Promise((resolve, reject) => {
				this.resolve = resolve
				this.reject = reject
			})
		}
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/models/quotaErrorCallbacks.js
	var quotaErrorCallbacks = /* @__PURE__ */ new Set()

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js
	async function executeQuotaErrorCallbacks() {
		if (false) {
			logger.log(`About to run ${quotaErrorCallbacks.size} callbacks to clean up caches.`)
		}
		for (const callback of quotaErrorCallbacks) {
			await callback()
			if (false) {
				logger.log(callback, 'is complete.')
			}
		}
		if (false) {
			logger.log('Finished running callbacks.')
		}
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-core-npm-6.5.3-a3490d4bd1-b898da6d99.zip/node_modules/workbox-core/_private/timeout.js
	function timeout(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms))
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-strategies-npm-6.5.3-66f4995798-74e1ac4d23.zip/node_modules/workbox-strategies/_version.js
	try {
		self['workbox:strategies:6.5.2'] && _()
	} catch (e) {}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-strategies-npm-6.5.3-66f4995798-74e1ac4d23.zip/node_modules/workbox-strategies/StrategyHandler.js
	function toRequest(input) {
		return typeof input === 'string' ? new Request(input) : input
	}
	var StrategyHandler = class {
		constructor(strategy, options) {
			this._cacheKeys = {}
			if (false) {
				finalAssertExports.isInstance(options.event, ExtendableEvent, {
					moduleName: 'workbox-strategies',
					className: 'StrategyHandler',
					funcName: 'constructor',
					paramName: 'options.event',
				})
			}
			Object.assign(this, options)
			this.event = options.event
			this._strategy = strategy
			this._handlerDeferred = new Deferred()
			this._extendLifetimePromises = []
			this._plugins = [...strategy.plugins]
			this._pluginStateMap = /* @__PURE__ */ new Map()
			for (const plugin of this._plugins) {
				this._pluginStateMap.set(plugin, {})
			}
			this.event.waitUntil(this._handlerDeferred.promise)
		}
		async fetch(input) {
			const { event } = this
			let request = toRequest(input)
			if (request.mode === 'navigate' && event instanceof FetchEvent && event.preloadResponse) {
				const possiblePreloadResponse = await event.preloadResponse
				if (possiblePreloadResponse) {
					if (false) {
						logger.log(`Using a preloaded navigation response for '${getFriendlyURL(request.url)}'`)
					}
					return possiblePreloadResponse
				}
			}
			const originalRequest = this.hasCallback('fetchDidFail') ? request.clone() : null
			try {
				for (const cb of this.iterateCallbacks('requestWillFetch')) {
					request = await cb({ request: request.clone(), event })
				}
			} catch (err) {
				if (err instanceof Error) {
					throw new WorkboxError('plugin-error-request-will-fetch', {
						thrownErrorMessage: err.message,
					})
				}
			}
			const pluginFilteredRequest = request.clone()
			try {
				let fetchResponse
				fetchResponse = await fetch(request, request.mode === 'navigate' ? void 0 : this._strategy.fetchOptions)
				if (false) {
					logger.debug(
						`Network request for '${getFriendlyURL(request.url)}' returned a response with status '${
							fetchResponse.status
						}'.`,
					)
				}
				for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
					fetchResponse = await callback({
						event,
						request: pluginFilteredRequest,
						response: fetchResponse,
					})
				}
				return fetchResponse
			} catch (error) {
				if (false) {
					logger.log(`Network request for '${getFriendlyURL(request.url)}' threw an error.`, error)
				}
				if (originalRequest) {
					await this.runCallbacks('fetchDidFail', {
						error,
						event,
						originalRequest: originalRequest.clone(),
						request: pluginFilteredRequest.clone(),
					})
				}
				throw error
			}
		}
		async fetchAndCachePut(input) {
			const response = await this.fetch(input)
			const responseClone = response.clone()
			void this.waitUntil(this.cachePut(input, responseClone))
			return response
		}
		async cacheMatch(key) {
			const request = toRequest(key)
			let cachedResponse
			const { cacheName, matchOptions } = this._strategy
			const effectiveRequest = await this.getCacheKey(request, 'read')
			const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName })
			cachedResponse = await caches.match(effectiveRequest, multiMatchOptions)
			if (false) {
				if (cachedResponse) {
					logger.debug(`Found a cached response in '${cacheName}'.`)
				} else {
					logger.debug(`No cached response found in '${cacheName}'.`)
				}
			}
			for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
				cachedResponse =
					(await callback({
						cacheName,
						matchOptions,
						cachedResponse,
						request: effectiveRequest,
						event: this.event,
					})) || void 0
			}
			return cachedResponse
		}
		async cachePut(key, response) {
			const request = toRequest(key)
			await timeout(0)
			const effectiveRequest = await this.getCacheKey(request, 'write')
			if (false) {
				if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
					throw new WorkboxError('attempt-to-cache-non-get-request', {
						url: getFriendlyURL(effectiveRequest.url),
						method: effectiveRequest.method,
					})
				}
				const vary = response.headers.get('Vary')
				if (vary) {
					logger.debug(
						`The response for ${getFriendlyURL(
							effectiveRequest.url,
						)} has a 'Vary: ${vary}' header. Consider setting the {ignoreVary: true} option on your strategy to ensure cache matching and deletion works as expected.`,
					)
				}
			}
			if (!response) {
				if (false) {
					logger.error(`Cannot cache non-existent response for '${getFriendlyURL(effectiveRequest.url)}'.`)
				}
				throw new WorkboxError('cache-put-with-no-response', {
					url: getFriendlyURL(effectiveRequest.url),
				})
			}
			const responseToCache = await this._ensureResponseSafeToCache(response)
			if (!responseToCache) {
				if (false) {
					logger.debug(`Response '${getFriendlyURL(effectiveRequest.url)}' will not be cached.`, responseToCache)
				}
				return false
			}
			const { cacheName, matchOptions } = this._strategy
			const cache = await self.caches.open(cacheName)
			const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate')
			const oldResponse = hasCacheUpdateCallback
				? await cacheMatchIgnoreParams(cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions)
				: null
			if (false) {
				logger.debug(
					`Updating the '${cacheName}' cache with a new Response for ${getFriendlyURL(effectiveRequest.url)}.`,
				)
			}
			try {
				await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache)
			} catch (error) {
				if (error instanceof Error) {
					if (error.name === 'QuotaExceededError') {
						await executeQuotaErrorCallbacks()
					}
					throw error
				}
			}
			for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
				await callback({
					cacheName,
					oldResponse,
					newResponse: responseToCache.clone(),
					request: effectiveRequest,
					event: this.event,
				})
			}
			return true
		}
		async getCacheKey(request, mode) {
			const key = `${request.url} | ${mode}`
			if (!this._cacheKeys[key]) {
				let effectiveRequest = request
				for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
					effectiveRequest = toRequest(
						await callback({
							mode,
							request: effectiveRequest,
							event: this.event,
							params: this.params,
						}),
					)
				}
				this._cacheKeys[key] = effectiveRequest
			}
			return this._cacheKeys[key]
		}
		hasCallback(name) {
			for (const plugin of this._strategy.plugins) {
				if (name in plugin) {
					return true
				}
			}
			return false
		}
		async runCallbacks(name, param) {
			for (const callback of this.iterateCallbacks(name)) {
				await callback(param)
			}
		}
		*iterateCallbacks(name) {
			for (const plugin of this._strategy.plugins) {
				if (typeof plugin[name] === 'function') {
					const state = this._pluginStateMap.get(plugin)
					const statefulCallback = (param) => {
						const statefulParam = Object.assign(Object.assign({}, param), { state })
						return plugin[name](statefulParam)
					}
					yield statefulCallback
				}
			}
		}
		waitUntil(promise) {
			this._extendLifetimePromises.push(promise)
			return promise
		}
		async doneWaiting() {
			let promise
			while ((promise = this._extendLifetimePromises.shift())) {
				await promise
			}
		}
		destroy() {
			this._handlerDeferred.resolve(null)
		}
		async _ensureResponseSafeToCache(response) {
			let responseToCache = response
			let pluginsUsed = false
			for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
				responseToCache =
					(await callback({
						request: this.request,
						response: responseToCache,
						event: this.event,
					})) || void 0
				pluginsUsed = true
				if (!responseToCache) {
					break
				}
			}
			if (!pluginsUsed) {
				if (responseToCache && responseToCache.status !== 200) {
					responseToCache = void 0
				}
				if (false) {
					if (responseToCache) {
						if (responseToCache.status !== 200) {
							if (responseToCache.status === 0) {
								logger.warn(
									`The response for '${this.request.url}' is an opaque response. The caching strategy that you're using will not cache opaque responses by default.`,
								)
							} else {
								logger.debug(
									`The response for '${this.request.url}' returned a status code of '${response.status}' and won't be cached as a result.`,
								)
							}
						}
					}
				}
			}
			return responseToCache
		}
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-strategies-npm-6.5.3-66f4995798-74e1ac4d23.zip/node_modules/workbox-strategies/Strategy.js
	var Strategy = class {
		constructor(options = {}) {
			this.cacheName = cacheNames.getRuntimeName(options.cacheName)
			this.plugins = options.plugins || []
			this.fetchOptions = options.fetchOptions
			this.matchOptions = options.matchOptions
		}
		handle(options) {
			const [responseDone] = this.handleAll(options)
			return responseDone
		}
		handleAll(options) {
			if (options instanceof FetchEvent) {
				options = {
					event: options,
					request: options.request,
				}
			}
			const event = options.event
			const request = typeof options.request === 'string' ? new Request(options.request) : options.request
			const params = 'params' in options ? options.params : void 0
			const handler = new StrategyHandler(this, { event, request, params })
			const responseDone = this._getResponse(handler, request, event)
			const handlerDone = this._awaitComplete(responseDone, handler, request, event)
			return [responseDone, handlerDone]
		}
		async _getResponse(handler, request, event) {
			await handler.runCallbacks('handlerWillStart', { event, request })
			let response = void 0
			try {
				response = await this._handle(request, handler)
				if (!response || response.type === 'error') {
					throw new WorkboxError('no-response', { url: request.url })
				}
			} catch (error) {
				if (error instanceof Error) {
					for (const callback of handler.iterateCallbacks('handlerDidError')) {
						response = await callback({ error, event, request })
						if (response) {
							break
						}
					}
				}
				if (!response) {
					throw error
				} else if (false) {
					logger.log(
						`While responding to '${getFriendlyURL(request.url)}', an ${
							error instanceof Error ? error.toString() : ''
						} error occurred. Using a fallback response provided by a handlerDidError plugin.`,
					)
				}
			}
			for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
				response = await callback({ event, request, response })
			}
			return response
		}
		async _awaitComplete(responseDone, handler, request, event) {
			let response
			let error
			try {
				response = await responseDone
			} catch (error2) {}
			try {
				await handler.runCallbacks('handlerDidRespond', {
					event,
					request,
					response,
				})
				await handler.doneWaiting()
			} catch (waitUntilError) {
				if (waitUntilError instanceof Error) {
					error = waitUntilError
				}
			}
			await handler.runCallbacks('handlerDidComplete', {
				event,
				request,
				response,
				error,
			})
			handler.destroy()
			if (error) {
				throw error
			}
		}
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/PrecacheStrategy.js
	var PrecacheStrategy = class extends Strategy {
		constructor(options = {}) {
			options.cacheName = cacheNames.getPrecacheName(options.cacheName)
			super(options)
			this._fallbackToNetwork = options.fallbackToNetwork === false ? false : true
			this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin)
		}
		async _handle(request, handler) {
			const response = await handler.cacheMatch(request)
			if (response) {
				return response
			}
			if (handler.event && handler.event.type === 'install') {
				return await this._handleInstall(request, handler)
			}
			return await this._handleFetch(request, handler)
		}
		async _handleFetch(request, handler) {
			let response
			const params = handler.params || {}
			if (this._fallbackToNetwork) {
				if (false) {
					logger.warn(
						`The precached response for ${getFriendlyURL(request.url)} in ${
							this.cacheName
						} was not found. Falling back to the network.`,
					)
				}
				const integrityInManifest = params.integrity
				const integrityInRequest = request.integrity
				const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest
				response = await handler.fetch(
					new Request(request, {
						integrity: integrityInRequest || integrityInManifest,
					}),
				)
				if (integrityInManifest && noIntegrityConflict) {
					this._useDefaultCacheabilityPluginIfNeeded()
					const wasCached = await handler.cachePut(request, response.clone())
					if (false) {
						if (wasCached) {
							logger.log(`A response for ${getFriendlyURL(request.url)} was used to "repair" the precache.`)
						}
					}
				}
			} else {
				throw new WorkboxError('missing-precache-entry', {
					cacheName: this.cacheName,
					url: request.url,
				})
			}
			if (false) {
				const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'))
				logger.groupCollapsed(`Precaching is responding to: ` + getFriendlyURL(request.url))
				logger.log(
					`Serving the precached url: ${getFriendlyURL(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`,
				)
				logger.groupCollapsed(`View request details here.`)
				logger.log(request)
				logger.groupEnd()
				logger.groupCollapsed(`View response details here.`)
				logger.log(response)
				logger.groupEnd()
				logger.groupEnd()
			}
			return response
		}
		async _handleInstall(request, handler) {
			this._useDefaultCacheabilityPluginIfNeeded()
			const response = await handler.fetch(request)
			const wasCached = await handler.cachePut(request, response.clone())
			if (!wasCached) {
				throw new WorkboxError('bad-precaching-response', {
					url: request.url,
					status: response.status,
				})
			}
			return response
		}
		_useDefaultCacheabilityPluginIfNeeded() {
			let defaultPluginIndex = null
			let cacheWillUpdatePluginCount = 0
			for (const [index, plugin] of this.plugins.entries()) {
				if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
					continue
				}
				if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
					defaultPluginIndex = index
				}
				if (plugin.cacheWillUpdate) {
					cacheWillUpdatePluginCount++
				}
			}
			if (cacheWillUpdatePluginCount === 0) {
				this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin)
			} else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
				this.plugins.splice(defaultPluginIndex, 1)
			}
		}
	}
	PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
		async cacheWillUpdate({ response }) {
			if (!response || response.status >= 400) {
				return null
			}
			return response
		},
	}
	PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
		async cacheWillUpdate({ response }) {
			return response.redirected ? await copyResponse(response) : response
		},
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/PrecacheController.js
	var PrecacheController = class {
		constructor({ cacheName, plugins = [], fallbackToNetwork = true } = {}) {
			this._urlsToCacheKeys = /* @__PURE__ */ new Map()
			this._urlsToCacheModes = /* @__PURE__ */ new Map()
			this._cacheKeysToIntegrities = /* @__PURE__ */ new Map()
			this._strategy = new PrecacheStrategy({
				cacheName: cacheNames.getPrecacheName(cacheName),
				plugins: [...plugins, new PrecacheCacheKeyPlugin({ precacheController: this })],
				fallbackToNetwork,
			})
			this.install = this.install.bind(this)
			this.activate = this.activate.bind(this)
		}
		get strategy() {
			return this._strategy
		}
		precache(entries) {
			this.addToCacheList(entries)
			if (!this._installAndActiveListenersAdded) {
				self.addEventListener('install', this.install)
				self.addEventListener('activate', this.activate)
				this._installAndActiveListenersAdded = true
			}
		}
		addToCacheList(entries) {
			if (false) {
				finalAssertExports.isArray(entries, {
					moduleName: 'workbox-precaching',
					className: 'PrecacheController',
					funcName: 'addToCacheList',
					paramName: 'entries',
				})
			}
			const urlsToWarnAbout = []
			for (const entry of entries) {
				if (typeof entry === 'string') {
					urlsToWarnAbout.push(entry)
				} else if (entry && entry.revision === void 0) {
					urlsToWarnAbout.push(entry.url)
				}
				const { cacheKey, url } = createCacheKey(entry)
				const cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default'
				if (this._urlsToCacheKeys.has(url) && this._urlsToCacheKeys.get(url) !== cacheKey) {
					throw new WorkboxError('add-to-cache-list-conflicting-entries', {
						firstEntry: this._urlsToCacheKeys.get(url),
						secondEntry: cacheKey,
					})
				}
				if (typeof entry !== 'string' && entry.integrity) {
					if (
						this._cacheKeysToIntegrities.has(cacheKey) &&
						this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity
					) {
						throw new WorkboxError('add-to-cache-list-conflicting-integrities', {
							url,
						})
					}
					this._cacheKeysToIntegrities.set(cacheKey, entry.integrity)
				}
				this._urlsToCacheKeys.set(url, cacheKey)
				this._urlsToCacheModes.set(url, cacheMode)
				if (urlsToWarnAbout.length > 0) {
					const warningMessage = `Workbox is precaching URLs without revision info: ${urlsToWarnAbout.join(', ')}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`
					if (true) {
						console.warn(warningMessage)
					} else {
						logger.warn(warningMessage)
					}
				}
			}
		}
		install(event) {
			return waitUntil(event, async () => {
				const installReportPlugin = new PrecacheInstallReportPlugin()
				this.strategy.plugins.push(installReportPlugin)
				for (const [url, cacheKey] of this._urlsToCacheKeys) {
					const integrity = this._cacheKeysToIntegrities.get(cacheKey)
					const cacheMode = this._urlsToCacheModes.get(url)
					const request = new Request(url, {
						integrity,
						cache: cacheMode,
						credentials: 'same-origin',
					})
					await Promise.all(
						this.strategy.handleAll({
							params: { cacheKey },
							request,
							event,
						}),
					)
				}
				const { updatedURLs, notUpdatedURLs } = installReportPlugin
				if (false) {
					printInstallDetails(updatedURLs, notUpdatedURLs)
				}
				return { updatedURLs, notUpdatedURLs }
			})
		}
		activate(event) {
			return waitUntil(event, async () => {
				const cache = await self.caches.open(this.strategy.cacheName)
				const currentlyCachedRequests = await cache.keys()
				const expectedCacheKeys = new Set(this._urlsToCacheKeys.values())
				const deletedURLs = []
				for (const request of currentlyCachedRequests) {
					if (!expectedCacheKeys.has(request.url)) {
						await cache.delete(request)
						deletedURLs.push(request.url)
					}
				}
				if (false) {
					printCleanupDetails(deletedURLs)
				}
				return { deletedURLs }
			})
		}
		getURLsToCacheKeys() {
			return this._urlsToCacheKeys
		}
		getCachedURLs() {
			return [...this._urlsToCacheKeys.keys()]
		}
		getCacheKeyForURL(url) {
			const urlObject = new URL(url, location.href)
			return this._urlsToCacheKeys.get(urlObject.href)
		}
		getIntegrityForCacheKey(cacheKey) {
			return this._cacheKeysToIntegrities.get(cacheKey)
		}
		async matchPrecache(request) {
			const url = request instanceof Request ? request.url : request
			const cacheKey = this.getCacheKeyForURL(url)
			if (cacheKey) {
				const cache = await self.caches.open(this.strategy.cacheName)
				return cache.match(cacheKey)
			}
			return void 0
		}
		createHandlerBoundToURL(url) {
			const cacheKey = this.getCacheKeyForURL(url)
			if (!cacheKey) {
				throw new WorkboxError('non-precached-url', { url })
			}
			return (options) => {
				options.request = new Request(url)
				options.params = Object.assign({ cacheKey }, options.params)
				return this.strategy.handle(options)
			}
		}
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js
	var precacheController
	var getOrCreatePrecacheController = () => {
		if (!precacheController) {
			precacheController = new PrecacheController()
		}
		return precacheController
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/_version.js
	try {
		self['workbox:routing:6.5.2'] && _()
	} catch (e) {}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/utils/constants.js
	var defaultMethod = 'GET'

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/utils/normalizeHandler.js
	var normalizeHandler = (handler) => {
		if (handler && typeof handler === 'object') {
			if (false) {
				finalAssertExports.hasMethod(handler, 'handle', {
					moduleName: 'workbox-routing',
					className: 'Route',
					funcName: 'constructor',
					paramName: 'handler',
				})
			}
			return handler
		} else {
			if (false) {
				finalAssertExports.isType(handler, 'function', {
					moduleName: 'workbox-routing',
					className: 'Route',
					funcName: 'constructor',
					paramName: 'handler',
				})
			}
			return { handle: handler }
		}
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/Route.js
	var Route = class {
		constructor(match, handler, method = defaultMethod) {
			if (false) {
				finalAssertExports.isType(match, 'function', {
					moduleName: 'workbox-routing',
					className: 'Route',
					funcName: 'constructor',
					paramName: 'match',
				})
				if (method) {
					finalAssertExports.isOneOf(method, validMethods, { paramName: 'method' })
				}
			}
			this.handler = normalizeHandler(handler)
			this.match = match
			this.method = method
		}
		setCatchHandler(handler) {
			this.catchHandler = normalizeHandler(handler)
		}
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/RegExpRoute.js
	var RegExpRoute = class extends Route {
		constructor(regExp, handler, method) {
			if (false) {
				finalAssertExports.isInstance(regExp, RegExp, {
					moduleName: 'workbox-routing',
					className: 'RegExpRoute',
					funcName: 'constructor',
					paramName: 'pattern',
				})
			}
			const match = ({ url }) => {
				const result = regExp.exec(url.href)
				if (!result) {
					return
				}
				if (url.origin !== location.origin && result.index !== 0) {
					if (false) {
						logger.debug(
							`The regular expression '${regExp.toString()}' only partially matched against the cross-origin URL '${url.toString()}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`,
						)
					}
					return
				}
				return result.slice(1)
			}
			super(match, handler, method)
		}
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/Router.js
	var Router = class {
		constructor() {
			this._routes = /* @__PURE__ */ new Map()
			this._defaultHandlerMap = /* @__PURE__ */ new Map()
		}
		get routes() {
			return this._routes
		}
		addFetchListener() {
			self.addEventListener('fetch', (event) => {
				const { request } = event
				const responsePromise = this.handleRequest({ request, event })
				if (responsePromise) {
					event.respondWith(responsePromise)
				}
			})
		}
		addCacheListener() {
			self.addEventListener('message', (event) => {
				if (event.data && event.data.type === 'CACHE_URLS') {
					const { payload } = event.data
					if (false) {
						logger.debug(`Caching URLs from the window`, payload.urlsToCache)
					}
					const requestPromises = Promise.all(
						payload.urlsToCache.map((entry) => {
							if (typeof entry === 'string') {
								entry = [entry]
							}
							const request = new Request(...entry)
							return this.handleRequest({ request, event })
						}),
					)
					event.waitUntil(requestPromises)
					if (event.ports && event.ports[0]) {
						void requestPromises.then(() => event.ports[0].postMessage(true))
					}
				}
			})
		}
		handleRequest({ request, event }) {
			if (false) {
				finalAssertExports.isInstance(request, Request, {
					moduleName: 'workbox-routing',
					className: 'Router',
					funcName: 'handleRequest',
					paramName: 'options.request',
				})
			}
			const url = new URL(request.url, location.href)
			if (!url.protocol.startsWith('http')) {
				if (false) {
					logger.debug(`Workbox Router only supports URLs that start with 'http'.`)
				}
				return
			}
			const sameOrigin = url.origin === location.origin
			const { params, route } = this.findMatchingRoute({
				event,
				request,
				sameOrigin,
				url,
			})
			let handler = route && route.handler
			const debugMessages = []
			if (false) {
				if (handler) {
					debugMessages.push([`Found a route to handle this request:`, route])
					if (params) {
						debugMessages.push([`Passing the following params to the route's handler:`, params])
					}
				}
			}
			const method = request.method
			if (!handler && this._defaultHandlerMap.has(method)) {
				if (false) {
					debugMessages.push(`Failed to find a matching route. Falling back to the default handler for ${method}.`)
				}
				handler = this._defaultHandlerMap.get(method)
			}
			if (!handler) {
				if (false) {
					logger.debug(`No route found for: ${getFriendlyURL(url)}`)
				}
				return
			}
			if (false) {
				logger.groupCollapsed(`Router is responding to: ${getFriendlyURL(url)}`)
				debugMessages.forEach((msg) => {
					if (Array.isArray(msg)) {
						logger.log(...msg)
					} else {
						logger.log(msg)
					}
				})
				logger.groupEnd()
			}
			let responsePromise
			try {
				responsePromise = handler.handle({ url, request, event, params })
			} catch (err) {
				responsePromise = Promise.reject(err)
			}
			const catchHandler = route && route.catchHandler
			if (responsePromise instanceof Promise && (this._catchHandler || catchHandler)) {
				responsePromise = responsePromise.catch(async (err) => {
					if (catchHandler) {
						if (false) {
							logger.groupCollapsed(
								`Error thrown when responding to:  ${getFriendlyURL(
									url,
								)}. Falling back to route's Catch Handler.`,
							)
							logger.error(`Error thrown by:`, route)
							logger.error(err)
							logger.groupEnd()
						}
						try {
							return await catchHandler.handle({ url, request, event, params })
						} catch (catchErr) {
							if (catchErr instanceof Error) {
								err = catchErr
							}
						}
					}
					if (this._catchHandler) {
						if (false) {
							logger.groupCollapsed(
								`Error thrown when responding to:  ${getFriendlyURL(
									url,
								)}. Falling back to global Catch Handler.`,
							)
							logger.error(`Error thrown by:`, route)
							logger.error(err)
							logger.groupEnd()
						}
						return this._catchHandler.handle({ url, request, event })
					}
					throw err
				})
			}
			return responsePromise
		}
		findMatchingRoute({ url, sameOrigin, request, event }) {
			const routes = this._routes.get(request.method) || []
			for (const route of routes) {
				let params
				const matchResult = route.match({ url, sameOrigin, request, event })
				if (matchResult) {
					if (false) {
						if (matchResult instanceof Promise) {
							logger.warn(
								`While routing ${getFriendlyURL(
									url,
								)}, an async matchCallback function was used. Please convert the following route to use a synchronous matchCallback function:`,
								route,
							)
						}
					}
					params = matchResult
					if (Array.isArray(params) && params.length === 0) {
						params = void 0
					} else if (matchResult.constructor === Object && Object.keys(matchResult).length === 0) {
						params = void 0
					} else if (typeof matchResult === 'boolean') {
						params = void 0
					}
					return { route, params }
				}
			}
			return {}
		}
		setDefaultHandler(handler, method = defaultMethod) {
			this._defaultHandlerMap.set(method, normalizeHandler(handler))
		}
		setCatchHandler(handler) {
			this._catchHandler = normalizeHandler(handler)
		}
		registerRoute(route) {
			if (false) {
				finalAssertExports.isType(route, 'object', {
					moduleName: 'workbox-routing',
					className: 'Router',
					funcName: 'registerRoute',
					paramName: 'route',
				})
				finalAssertExports.hasMethod(route, 'match', {
					moduleName: 'workbox-routing',
					className: 'Router',
					funcName: 'registerRoute',
					paramName: 'route',
				})
				finalAssertExports.isType(route.handler, 'object', {
					moduleName: 'workbox-routing',
					className: 'Router',
					funcName: 'registerRoute',
					paramName: 'route',
				})
				finalAssertExports.hasMethod(route.handler, 'handle', {
					moduleName: 'workbox-routing',
					className: 'Router',
					funcName: 'registerRoute',
					paramName: 'route.handler',
				})
				finalAssertExports.isType(route.method, 'string', {
					moduleName: 'workbox-routing',
					className: 'Router',
					funcName: 'registerRoute',
					paramName: 'route.method',
				})
			}
			if (!this._routes.has(route.method)) {
				this._routes.set(route.method, [])
			}
			this._routes.get(route.method).push(route)
		}
		unregisterRoute(route) {
			if (!this._routes.has(route.method)) {
				throw new WorkboxError('unregister-route-but-not-found-with-method', {
					method: route.method,
				})
			}
			const routeIndex = this._routes.get(route.method).indexOf(route)
			if (routeIndex > -1) {
				this._routes.get(route.method).splice(routeIndex, 1)
			} else {
				throw new WorkboxError('unregister-route-route-not-registered')
			}
		}
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js
	var defaultRouter
	var getOrCreateDefaultRouter = () => {
		if (!defaultRouter) {
			defaultRouter = new Router()
			defaultRouter.addFetchListener()
			defaultRouter.addCacheListener()
		}
		return defaultRouter
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-routing-npm-6.5.3-02837f1ab3-9274c40f5b.zip/node_modules/workbox-routing/registerRoute.js
	function registerRoute(capture, handler, method) {
		let route
		if (typeof capture === 'string') {
			const captureUrl = new URL(capture, location.href)
			if (false) {
				if (!(capture.startsWith('/') || capture.startsWith('http'))) {
					throw new WorkboxError('invalid-string', {
						moduleName: 'workbox-routing',
						funcName: 'registerRoute',
						paramName: 'capture',
					})
				}
				const valueToCheck = capture.startsWith('http') ? captureUrl.pathname : capture
				const wildcards = '[*:?+]'
				if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
					logger.debug(
						`The '$capture' parameter contains an Express-style wildcard character (${wildcards}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`,
					)
				}
			}
			const matchCallback = ({ url }) => {
				if (false) {
					if (url.pathname === captureUrl.pathname && url.origin !== captureUrl.origin) {
						logger.debug(
							`${capture} only partially matches the cross-origin URL ${url.toString()}. This route will only handle cross-origin requests if they match the entire URL.`,
						)
					}
				}
				return url.href === captureUrl.href
			}
			route = new Route(matchCallback, handler, method)
		} else if (capture instanceof RegExp) {
			route = new RegExpRoute(capture, handler, method)
		} else if (typeof capture === 'function') {
			route = new Route(capture, handler, method)
		} else if (capture instanceof Route) {
			route = capture
		} else {
			throw new WorkboxError('unsupported-route-type', {
				moduleName: 'workbox-routing',
				funcName: 'registerRoute',
				paramName: 'capture',
			})
		}
		const defaultRouter2 = getOrCreateDefaultRouter()
		defaultRouter2.registerRoute(route)
		return route
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js
	function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
		for (const paramName of [...urlObject.searchParams.keys()]) {
			if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
				urlObject.searchParams.delete(paramName)
			}
		}
		return urlObject
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/utils/generateURLVariations.js
	function* generateURLVariations(
		url,
		{
			ignoreURLParametersMatching = [/^utm_/, /^fbclid$/],
			directoryIndex = 'index.html',
			cleanURLs = true,
			urlManipulation,
		} = {},
	) {
		const urlObject = new URL(url, location.href)
		urlObject.hash = ''
		yield urlObject.href
		const urlWithoutIgnoredParams = removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching)
		yield urlWithoutIgnoredParams.href
		if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
			const directoryURL = new URL(urlWithoutIgnoredParams.href)
			directoryURL.pathname += directoryIndex
			yield directoryURL.href
		}
		if (cleanURLs) {
			const cleanURL = new URL(urlWithoutIgnoredParams.href)
			cleanURL.pathname += '.html'
			yield cleanURL.href
		}
		if (urlManipulation) {
			const additionalURLs = urlManipulation({ url: urlObject })
			for (const urlToAttempt of additionalURLs) {
				yield urlToAttempt.href
			}
		}
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/PrecacheRoute.js
	var PrecacheRoute = class extends Route {
		constructor(precacheController2, options) {
			const match = ({ request }) => {
				const urlsToCacheKeys = precacheController2.getURLsToCacheKeys()
				for (const possibleURL of generateURLVariations(request.url, options)) {
					const cacheKey = urlsToCacheKeys.get(possibleURL)
					if (cacheKey) {
						const integrity = precacheController2.getIntegrityForCacheKey(cacheKey)
						return { cacheKey, integrity }
					}
				}
				if (false) {
					logger.debug(`Precaching did not find a match for ` + getFriendlyURL(request.url))
				}
				return
			}
			super(match, precacheController2.strategy)
		}
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/addRoute.js
	function addRoute(options) {
		const precacheController2 = getOrCreatePrecacheController()
		const precacheRoute = new PrecacheRoute(precacheController2, options)
		registerRoute(precacheRoute)
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/precache.js
	function precache(entries) {
		const precacheController2 = getOrCreatePrecacheController()
		precacheController2.precache(entries)
	}

	// pnp:/Users/mruoss/src/private/jasstafel/.yarn/cache/workbox-precaching-npm-6.5.3-1e3cb5c579-231aab3fc5.zip/node_modules/workbox-precaching/precacheAndRoute.js
	function precacheAndRoute(entries, options) {
		precache(entries)
		addRoute(options)
	}

	// pnp:/Users/mruoss/src/private/jasstafel/src/sw.js
	precacheAndRoute([
		{ revision: '83192731e4753f014d95d3ad1bd1ed45', url: 'assets/icons/android-chrome-192x192.png' },
		{ revision: '1ff040fe2acb1ac1721ba8e8e082737b', url: 'assets/icons/android-chrome-512x512.png' },
		{ revision: '51e925320a0f52446ec47c04d7360cdf', url: 'assets/icons/apple-icon-114x114.png' },
		{ revision: '47b3f6a262da6c5774aa708862045ef4', url: 'assets/icons/apple-icon-120x120.png' },
		{ revision: '4cfee17ff92070c8771b280a91812a00', url: 'assets/icons/apple-icon-144x144.png' },
		{ revision: '47ddb7b78f9826db57bbd35438ae4395', url: 'assets/icons/apple-icon-152x152.png' },
		{ revision: '67ccaff793612ab49504a6805bc63468', url: 'assets/icons/apple-icon-180x180.png' },
		{ revision: '2e6afcc1b2b4433c7236ff1a29fffdec', url: 'assets/icons/apple-icon-57x57.png' },
		{ revision: '38c894978314df3f8e021b5ee6bea950', url: 'assets/icons/apple-icon-60x60.png' },
		{ revision: '74989b029aba0e0563bc0ca6b4e3e3f0', url: 'assets/icons/apple-icon-72x72.png' },
		{ revision: 'd6a878262213d1f279037f8651f00942', url: 'assets/icons/apple-icon-76x76.png' },
		{ revision: 'dc0a584b5c133328ea2e6d7597611fd4', url: 'assets/icons/apple-icon-precomposed.png' },
		{ revision: 'dc0a584b5c133328ea2e6d7597611fd4', url: 'assets/icons/apple-icon.png' },
		{ revision: '25864039dd31f88c3ecb4329be5ecc85', url: 'assets/icons/favicon-16x16.png' },
		{ revision: '474aca487da7eb34f6e51a2049cc1459', url: 'assets/icons/favicon-32x32.png' },
		{ revision: '3aa250fe4d1bf6114830847fe9066c7e', url: 'assets/icons/favicon-96x96.png' },
		{ revision: '2665d3e0493b2b2fb88315a2c8f76986', url: 'assets/icons/favicon.ico' },
		{ revision: '4cfee17ff92070c8771b280a91812a00', url: 'assets/icons/ms-icon-144x144.png' },
		{ revision: 'a0663efc23eadfe2f1178b7a10e8beae', url: 'assets/icons/ms-icon-150x150.png' },
		{ revision: '2f389c4b9f3d24aed70fd96a7c2dc02e', url: 'assets/icons/ms-icon-310x310.png' },
		{ revision: '18851dcfbb8f018df0cb03d8c9f3ea3a', url: 'assets/icons/ms-icon-70x70.png' },
		{ revision: '1c6ddee0ce73202dadbd32e0f3e4a6a9', url: 'assets/schiefer-seamless.jpg' },
		{ revision: '0e49684520c7304ec26fbbc892114f9c', url: 'assets/schiefer.jpg' },
		{ revision: 'b1104cfef9744ea8bcd7805af7bb4c7f', url: 'index.html' },
		{ revision: '7409f6bae243aaa8b5471381a51ddd87', url: 'js/index-FCUYH6UO.js' },
		{ revision: 'c1bc0bd0f24c80c35d3ff2d5f7e87e99', url: 'manifest.webmanifest' },
	])
})()
