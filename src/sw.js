import { precacheAndRoute } from 'workbox-precaching'
import { StaleWhileRevalidate } from 'workbox-strategies'
import { setDefaultHandler } from 'workbox-routing'

precacheAndRoute(self.__WB_MANIFEST)
setDefaultHandler(new StaleWhileRevalidate())
