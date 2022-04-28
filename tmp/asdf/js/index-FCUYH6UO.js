;(() => {
	var uP = Object.create
	var $9 = Object.defineProperty
	var hP = Object.getOwnPropertyDescriptor
	var pP = Object.getOwnPropertyNames
	var dP = Object.getPrototypeOf,
		vP = Object.prototype.hasOwnProperty
	var mP = ((e) =>
		typeof require != 'undefined'
			? require
			: typeof Proxy != 'undefined'
			? new Proxy(e, { get: (r, t) => (typeof require != 'undefined' ? require : r)[t] })
			: e)(function (e) {
		if (typeof require != 'undefined') return require.apply(this, arguments)
		throw new Error('Dynamic require of "' + e + '" is not supported')
	})
	var V1 = (e, r) => () => (e && (r = e((e = 0))), r)
	var z = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports),
		Vh = (e, r) => {
			for (var t in r) $9(e, t, { get: r[t], enumerable: !0 })
		},
		yh = (e, r, t, n) => {
			if ((r && typeof r == 'object') || typeof r == 'function')
				for (let i of pP(r))
					!vP.call(e, i) && i !== t && $9(e, i, { get: () => r[i], enumerable: !(n = hP(r, i)) || n.enumerable })
			return e
		}
	var Q = (e, r, t) => (
			(t = e != null ? uP(dP(e)) : {}),
			yh(r || !e || !e.__esModule ? $9(t, 'default', { value: e, enumerable: !0 }) : t, e)
		),
		Qi = (e) => yh($9({}, '__esModule', { value: !0 }), e)
	var Rh = z((S2) => {
		'use strict'
		var d7 = Symbol.for('react.element'),
			LP = Symbol.for('react.portal'),
			gP = Symbol.for('react.fragment'),
			MP = Symbol.for('react.strict_mode'),
			zP = Symbol.for('react.profiler'),
			HP = Symbol.for('react.provider'),
			VP = Symbol.for('react.context'),
			yP = Symbol.for('react.forward_ref'),
			SP = Symbol.for('react.suspense'),
			xP = Symbol.for('react.memo'),
			wP = Symbol.for('react.lazy'),
			Sh = Symbol.iterator
		function NP(e) {
			return e === null || typeof e != 'object'
				? null
				: ((e = (Sh && e[Sh]) || e['@@iterator']), typeof e == 'function' ? e : null)
		}
		var Nh = {
				isMounted: function () {
					return !1
				},
				enqueueForceUpdate: function () {},
				enqueueReplaceState: function () {},
				enqueueSetState: function () {},
			},
			_h = Object.assign,
			kh = {}
		function y8(e, r, t) {
			;(this.props = e), (this.context = r), (this.refs = kh), (this.updater = t || Nh)
		}
		y8.prototype.isReactComponent = {}
		y8.prototype.setState = function (e, r) {
			if (typeof e != 'object' && typeof e != 'function' && e != null)
				throw Error(
					'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
				)
			this.updater.enqueueSetState(this, e, r, 'setState')
		}
		y8.prototype.forceUpdate = function (e) {
			this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
		}
		function Ph() {}
		Ph.prototype = y8.prototype
		function Ji(e, r, t) {
			;(this.props = e), (this.context = r), (this.refs = kh), (this.updater = t || Nh)
		}
		var Zi = (Ji.prototype = new Ph())
		Zi.constructor = Ji
		_h(Zi, y8.prototype)
		Zi.isPureReactComponent = !0
		var xh = Array.isArray,
			Ah = Object.prototype.hasOwnProperty,
			$i = { current: null },
			Eh = { key: !0, ref: !0, __self: !0, __source: !0 }
		function Th(e, r, t) {
			var n,
				i = {},
				c = null,
				C = null
			if (r != null)
				for (n in (r.ref !== void 0 && (C = r.ref), r.key !== void 0 && (c = '' + r.key), r))
					Ah.call(r, n) && !Eh.hasOwnProperty(n) && (i[n] = r[n])
			var l = arguments.length - 2
			if (l === 1) i.children = t
			else if (1 < l) {
				for (var u = Array(l), h = 0; h < l; h++) u[h] = arguments[h + 2]
				i.children = u
			}
			if (e && e.defaultProps) for (n in ((l = e.defaultProps), l)) i[n] === void 0 && (i[n] = l[n])
			return { $$typeof: d7, type: e, key: c, ref: C, props: i, _owner: $i.current }
		}
		function _P(e, r) {
			return { $$typeof: d7, type: e.type, key: r, ref: e.ref, props: e.props, _owner: e._owner }
		}
		function eo(e) {
			return typeof e == 'object' && e !== null && e.$$typeof === d7
		}
		function kP(e) {
			var r = { '=': '=0', ':': '=2' }
			return (
				'$' +
				e.replace(/[=:]/g, function (t) {
					return r[t]
				})
			)
		}
		var wh = /\/+/g
		function Xi(e, r) {
			return typeof e == 'object' && e !== null && e.key != null ? kP('' + e.key) : r.toString(36)
		}
		function rr(e, r, t, n, i) {
			var c = typeof e
			;(c === 'undefined' || c === 'boolean') && (e = null)
			var C = !1
			if (e === null) C = !0
			else
				switch (c) {
					case 'string':
					case 'number':
						C = !0
						break
					case 'object':
						switch (e.$$typeof) {
							case d7:
							case LP:
								C = !0
						}
				}
			if (C)
				return (
					(C = e),
					(i = i(C)),
					(e = n === '' ? '.' + Xi(C, 0) : n),
					xh(i)
						? ((t = ''),
						  e != null && (t = e.replace(wh, '$&/') + '/'),
						  rr(i, r, t, '', function (h) {
								return h
						  }))
						: i != null &&
						  (eo(i) &&
								(i = _P(
									i,
									t + (!i.key || (C && C.key === i.key) ? '' : ('' + i.key).replace(wh, '$&/') + '/') + e,
								)),
						  r.push(i)),
					1
				)
			if (((C = 0), (n = n === '' ? '.' : n + ':'), xh(e)))
				for (var l = 0; l < e.length; l++) {
					c = e[l]
					var u = n + Xi(c, l)
					C += rr(c, r, t, u, i)
				}
			else if (((u = NP(e)), typeof u == 'function'))
				for (e = u.call(e), l = 0; !(c = e.next()).done; )
					(c = c.value), (u = n + Xi(c, l++)), (C += rr(c, r, t, u, i))
			else if (c === 'object')
				throw (
					((r = String(e)),
					Error(
						'Objects are not valid as a React child (found: ' +
							(r === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : r) +
							'). If you meant to render a collection of children, use an array instead.',
					))
				)
			return C
		}
		function er(e, r, t) {
			if (e == null) return e
			var n = [],
				i = 0
			return (
				rr(e, n, '', '', function (c) {
					return r.call(t, c, i++)
				}),
				n
			)
		}
		function PP(e) {
			if (e._status === -1) {
				var r = e._result
				;(r = r()),
					r.then(
						function (t) {
							;(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = t))
						},
						function (t) {
							;(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = t))
						},
					),
					e._status === -1 && ((e._status = 0), (e._result = r))
			}
			if (e._status === 1) return e._result.default
			throw e._result
		}
		var c3 = { current: null },
			tr = { transition: null },
			AP = { ReactCurrentDispatcher: c3, ReactCurrentBatchConfig: tr, ReactCurrentOwner: $i }
		S2.Children = {
			map: er,
			forEach: function (e, r, t) {
				er(
					e,
					function () {
						r.apply(this, arguments)
					},
					t,
				)
			},
			count: function (e) {
				var r = 0
				return (
					er(e, function () {
						r++
					}),
					r
				)
			},
			toArray: function (e) {
				return (
					er(e, function (r) {
						return r
					}) || []
				)
			},
			only: function (e) {
				if (!eo(e)) throw Error('React.Children.only expected to receive a single React element child.')
				return e
			},
		}
		S2.Component = y8
		S2.Fragment = gP
		S2.Profiler = zP
		S2.PureComponent = Ji
		S2.StrictMode = MP
		S2.Suspense = SP
		S2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = AP
		S2.cloneElement = function (e, r, t) {
			if (e == null)
				throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.')
			var n = _h({}, e.props),
				i = e.key,
				c = e.ref,
				C = e._owner
			if (r != null) {
				if (
					(r.ref !== void 0 && ((c = r.ref), (C = $i.current)),
					r.key !== void 0 && (i = '' + r.key),
					e.type && e.type.defaultProps)
				)
					var l = e.type.defaultProps
				for (u in r)
					Ah.call(r, u) && !Eh.hasOwnProperty(u) && (n[u] = r[u] === void 0 && l !== void 0 ? l[u] : r[u])
			}
			var u = arguments.length - 2
			if (u === 1) n.children = t
			else if (1 < u) {
				l = Array(u)
				for (var h = 0; h < u; h++) l[h] = arguments[h + 2]
				n.children = l
			}
			return { $$typeof: d7, type: e.type, key: i, ref: c, props: n, _owner: C }
		}
		S2.createContext = function (e) {
			return (
				(e = {
					$$typeof: VP,
					_currentValue: e,
					_currentValue2: e,
					_threadCount: 0,
					Provider: null,
					Consumer: null,
					_defaultValue: null,
					_globalName: null,
				}),
				(e.Provider = { $$typeof: HP, _context: e }),
				(e.Consumer = e)
			)
		}
		S2.createElement = Th
		S2.createFactory = function (e) {
			var r = Th.bind(null, e)
			return (r.type = e), r
		}
		S2.createRef = function () {
			return { current: null }
		}
		S2.forwardRef = function (e) {
			return { $$typeof: yP, render: e }
		}
		S2.isValidElement = eo
		S2.lazy = function (e) {
			return { $$typeof: wP, _payload: { _status: -1, _result: e }, _init: PP }
		}
		S2.memo = function (e, r) {
			return { $$typeof: xP, type: e, compare: r === void 0 ? null : r }
		}
		S2.startTransition = function (e) {
			var r = tr.transition
			tr.transition = {}
			try {
				e()
			} finally {
				tr.transition = r
			}
		}
		S2.unstable_act = function () {
			throw Error('act(...) is not supported in production builds of React.')
		}
		S2.useCallback = function (e, r) {
			return c3.current.useCallback(e, r)
		}
		S2.useContext = function (e) {
			return c3.current.useContext(e)
		}
		S2.useDebugValue = function () {}
		S2.useDeferredValue = function (e) {
			return c3.current.useDeferredValue(e)
		}
		S2.useEffect = function (e, r) {
			return c3.current.useEffect(e, r)
		}
		S2.useId = function () {
			return c3.current.useId()
		}
		S2.useImperativeHandle = function (e, r, t) {
			return c3.current.useImperativeHandle(e, r, t)
		}
		S2.useInsertionEffect = function (e, r) {
			return c3.current.useInsertionEffect(e, r)
		}
		S2.useLayoutEffect = function (e, r) {
			return c3.current.useLayoutEffect(e, r)
		}
		S2.useMemo = function (e, r) {
			return c3.current.useMemo(e, r)
		}
		S2.useReducer = function (e, r, t) {
			return c3.current.useReducer(e, r, t)
		}
		S2.useRef = function (e) {
			return c3.current.useRef(e)
		}
		S2.useState = function (e) {
			return c3.current.useState(e)
		}
		S2.useSyncExternalStore = function (e, r, t) {
			return c3.current.useSyncExternalStore(e, r, t)
		}
		S2.useTransition = function () {
			return c3.current.useTransition()
		}
		S2.version = '18.0.0-fc46dba67-20220329'
	})
	var y2 = z((m22, Oh) => {
		'use strict'
		Oh.exports = Rh()
	})
	var bh = z((Dh) => {
		'use strict'
		var S8 = y2()
		function EP(e, r) {
			return (e === r && (e !== 0 || 1 / e === 1 / r)) || (e !== e && r !== r)
		}
		var TP = typeof Object.is == 'function' ? Object.is : EP,
			RP = S8.useState,
			OP = S8.useEffect,
			DP = S8.useLayoutEffect,
			bP = S8.useDebugValue
		function FP(e, r) {
			var t = r(),
				n = RP({ inst: { value: t, getSnapshot: r } }),
				i = n[0].inst,
				c = n[1]
			return (
				DP(
					function () {
						;(i.value = t), (i.getSnapshot = r), ro(i) && c({ inst: i })
					},
					[e, t, r],
				),
				OP(
					function () {
						return (
							ro(i) && c({ inst: i }),
							e(function () {
								ro(i) && c({ inst: i })
							})
						)
					},
					[e],
				),
				bP(t),
				t
			)
		}
		function ro(e) {
			var r = e.getSnapshot
			e = e.value
			try {
				var t = r()
				return !TP(e, t)
			} catch {
				return !0
			}
		}
		function IP(e, r) {
			return r()
		}
		var BP =
			typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u' ? IP : FP
		Dh.useSyncExternalStore = S8.useSyncExternalStore !== void 0 ? S8.useSyncExternalStore : BP
	})
	var to = z((g22, Fh) => {
		'use strict'
		Fh.exports = bh()
	})
	var Bh = z((Ih) => {
		'use strict'
		var nr = y2(),
			qP = to()
		function UP(e, r) {
			return (e === r && (e !== 0 || 1 / e === 1 / r)) || (e !== e && r !== r)
		}
		var jP = typeof Object.is == 'function' ? Object.is : UP,
			GP = qP.useSyncExternalStore,
			WP = nr.useRef,
			YP = nr.useEffect,
			KP = nr.useMemo,
			QP = nr.useDebugValue
		Ih.useSyncExternalStoreWithSelector = function (e, r, t, n, i) {
			var c = WP(null)
			if (c.current === null) {
				var C = { hasValue: !1, value: null }
				c.current = C
			} else C = c.current
			c = KP(
				function () {
					function u(H) {
						if (!h) {
							if (((h = !0), (v = H), (H = n(H)), i !== void 0 && C.hasValue)) {
								var L = C.value
								if (i(L, H)) return (g = L)
							}
							return (g = H)
						}
						if (((L = g), jP(v, H))) return L
						var x = n(H)
						return i !== void 0 && i(L, x) ? L : ((v = H), (g = x))
					}
					var h = !1,
						v,
						g,
						m = t === void 0 ? null : t
					return [
						function () {
							return u(r())
						},
						m === null
							? void 0
							: function () {
									return u(m())
							  },
					]
				},
				[r, t, n, i],
			)
			var l = GP(e, c[0], c[1])
			return (
				YP(
					function () {
						;(C.hasValue = !0), (C.value = l)
					},
					[l],
				),
				QP(l),
				l
			)
		}
	})
	var Uh = z((z22, qh) => {
		'use strict'
		qh.exports = Bh()
	})
	var $h = z((j2) => {
		'use strict'
		function oo(e, r) {
			var t = e.length
			e.push(r)
			e: for (; 0 < t; ) {
				var n = (t - 1) >>> 1,
					i = e[n]
				if (0 < ar(i, r)) (e[n] = r), (e[t] = i), (t = n)
				else break e
			}
		}
		function M4(e) {
			return e.length === 0 ? null : e[0]
		}
		function or(e) {
			if (e.length === 0) return null
			var r = e[0],
				t = e.pop()
			if (t !== r) {
				e[0] = t
				e: for (var n = 0, i = e.length, c = i >>> 1; n < c; ) {
					var C = 2 * (n + 1) - 1,
						l = e[C],
						u = C + 1,
						h = e[u]
					if (0 > ar(l, t))
						u < i && 0 > ar(h, l) ? ((e[n] = h), (e[u] = t), (n = u)) : ((e[n] = l), (e[C] = t), (n = C))
					else if (u < i && 0 > ar(h, t)) (e[n] = h), (e[u] = t), (n = u)
					else break e
				}
			}
			return r
		}
		function ar(e, r) {
			var t = e.sortIndex - r.sortIndex
			return t !== 0 ? t : e.id - r.id
		}
		typeof performance == 'object' && typeof performance.now == 'function'
			? ((jh = performance),
			  (j2.unstable_now = function () {
					return jh.now()
			  }))
			: ((no = Date),
			  (Gh = no.now()),
			  (j2.unstable_now = function () {
					return no.now() - Gh
			  }))
		var jh,
			no,
			Gh,
			q4 = [],
			b6 = [],
			XP = 1,
			$3 = null,
			$1 = 3,
			cr = !1,
			N5 = !1,
			m7 = !1,
			Kh = typeof setTimeout == 'function' ? setTimeout : null,
			Qh = typeof clearTimeout == 'function' ? clearTimeout : null,
			Wh = typeof setImmediate < 'u' ? setImmediate : null
		typeof navigator < 'u' &&
			navigator.scheduling !== void 0 &&
			navigator.scheduling.isInputPending !== void 0 &&
			navigator.scheduling.isInputPending.bind(navigator.scheduling)
		function co(e) {
			for (var r = M4(b6); r !== null; ) {
				if (r.callback === null) or(b6)
				else if (r.startTime <= e) or(b6), (r.sortIndex = r.expirationTime), oo(q4, r)
				else break
				r = M4(b6)
			}
		}
		function Co(e) {
			if (((m7 = !1), co(e), !N5))
				if (M4(q4) !== null) (N5 = !0), lo(so)
				else {
					var r = M4(b6)
					r !== null && fo(Co, r.startTime - e)
				}
		}
		function so(e, r) {
			;(N5 = !1), m7 && ((m7 = !1), Qh(L7), (L7 = -1)), (cr = !0)
			var t = $1
			try {
				for (co(r), $3 = M4(q4); $3 !== null && (!($3.expirationTime > r) || (e && !Zh())); ) {
					var n = $3.callback
					if (typeof n == 'function') {
						;($3.callback = null), ($1 = $3.priorityLevel)
						var i = n($3.expirationTime <= r)
						;(r = j2.unstable_now()), typeof i == 'function' ? ($3.callback = i) : $3 === M4(q4) && or(q4), co(r)
					} else or(q4)
					$3 = M4(q4)
				}
				if ($3 !== null) var c = !0
				else {
					var C = M4(b6)
					C !== null && fo(Co, C.startTime - r), (c = !1)
				}
				return c
			} finally {
				;($3 = null), ($1 = t), (cr = !1)
			}
		}
		var Cr = !1,
			ir = null,
			L7 = -1,
			Xh = 5,
			Jh = -1
		function Zh() {
			return !(j2.unstable_now() - Jh < Xh)
		}
		function ao() {
			if (ir !== null) {
				var e = j2.unstable_now()
				Jh = e
				var r = !0
				try {
					r = ir(!0, e)
				} finally {
					r ? v7() : ((Cr = !1), (ir = null))
				}
			} else Cr = !1
		}
		var v7
		typeof Wh == 'function'
			? (v7 = function () {
					Wh(ao)
			  })
			: typeof MessageChannel < 'u'
			? ((io = new MessageChannel()),
			  (Yh = io.port2),
			  (io.port1.onmessage = ao),
			  (v7 = function () {
					Yh.postMessage(null)
			  }))
			: (v7 = function () {
					Kh(ao, 0)
			  })
		var io, Yh
		function lo(e) {
			;(ir = e), Cr || ((Cr = !0), v7())
		}
		function fo(e, r) {
			L7 = Kh(function () {
				e(j2.unstable_now())
			}, r)
		}
		j2.unstable_IdlePriority = 5
		j2.unstable_ImmediatePriority = 1
		j2.unstable_LowPriority = 4
		j2.unstable_NormalPriority = 3
		j2.unstable_Profiling = null
		j2.unstable_UserBlockingPriority = 2
		j2.unstable_cancelCallback = function (e) {
			e.callback = null
		}
		j2.unstable_continueExecution = function () {
			N5 || cr || ((N5 = !0), lo(so))
		}
		j2.unstable_forceFrameRate = function (e) {
			0 > e || 125 < e
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
				  )
				: (Xh = 0 < e ? Math.floor(1e3 / e) : 5)
		}
		j2.unstable_getCurrentPriorityLevel = function () {
			return $1
		}
		j2.unstable_getFirstCallbackNode = function () {
			return M4(q4)
		}
		j2.unstable_next = function (e) {
			switch ($1) {
				case 1:
				case 2:
				case 3:
					var r = 3
					break
				default:
					r = $1
			}
			var t = $1
			$1 = r
			try {
				return e()
			} finally {
				$1 = t
			}
		}
		j2.unstable_pauseExecution = function () {}
		j2.unstable_requestPaint = function () {}
		j2.unstable_runWithPriority = function (e, r) {
			switch (e) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break
				default:
					e = 3
			}
			var t = $1
			$1 = e
			try {
				return r()
			} finally {
				$1 = t
			}
		}
		j2.unstable_scheduleCallback = function (e, r, t) {
			var n = j2.unstable_now()
			switch (
				(typeof t == 'object' && t !== null
					? ((t = t.delay), (t = typeof t == 'number' && 0 < t ? n + t : n))
					: (t = n),
				e)
			) {
				case 1:
					var i = -1
					break
				case 2:
					i = 250
					break
				case 5:
					i = 1073741823
					break
				case 4:
					i = 1e4
					break
				default:
					i = 5e3
			}
			return (
				(i = t + i),
				(e = { id: XP++, callback: r, priorityLevel: e, startTime: t, expirationTime: i, sortIndex: -1 }),
				t > n
					? ((e.sortIndex = t),
					  oo(b6, e),
					  M4(q4) === null && e === M4(b6) && (m7 ? (Qh(L7), (L7 = -1)) : (m7 = !0), fo(Co, t - n)))
					: ((e.sortIndex = i), oo(q4, e), N5 || cr || ((N5 = !0), lo(so))),
				e
			)
		}
		j2.unstable_shouldYield = Zh
		j2.unstable_wrapCallback = function (e) {
			var r = $1
			return function () {
				var t = $1
				$1 = r
				try {
					return e.apply(this, arguments)
				} finally {
					$1 = t
				}
			}
		}
	})
	var sr = z((V22, ep) => {
		'use strict'
		ep.exports = $h()
	})
	var nm = z((F3) => {
		'use strict'
		var sd = y2(),
			D3 = sr()
		function U(e) {
			for (var r = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, t = 1; t < arguments.length; t++)
				r += '&args[]=' + encodeURIComponent(arguments[t])
			return (
				'Minified React error #' +
				e +
				'; visit ' +
				r +
				' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
			)
		}
		var ld = new Set(),
			I7 = {}
		function I5(e, r) {
			G8(e, r), G8(e + 'Capture', r)
		}
		function G8(e, r) {
			for (I7[e] = r, e = 0; e < r.length; e++) ld.add(r[e])
		}
		var u6 = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
			To = Object.prototype.hasOwnProperty,
			JP =
				/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
			rp = {},
			tp = {}
		function ZP(e) {
			return To.call(tp, e) ? !0 : To.call(rp, e) ? !1 : JP.test(e) ? (tp[e] = !0) : ((rp[e] = !0), !1)
		}
		function $P(e, r, t, n) {
			if (t !== null && t.type === 0) return !1
			switch (typeof r) {
				case 'function':
				case 'symbol':
					return !0
				case 'boolean':
					return n
						? !1
						: t !== null
						? !t.acceptsBooleans
						: ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
				default:
					return !1
			}
		}
		function eA(e, r, t, n) {
			if (r === null || typeof r > 'u' || $P(e, r, t, n)) return !0
			if (n) return !1
			if (t !== null)
				switch (t.type) {
					case 3:
						return !r
					case 4:
						return r === !1
					case 5:
						return isNaN(r)
					case 6:
						return isNaN(r) || 1 > r
				}
			return !1
		}
		function l3(e, r, t, n, i, c, C) {
			;(this.acceptsBooleans = r === 2 || r === 3 || r === 4),
				(this.attributeName = n),
				(this.attributeNamespace = i),
				(this.mustUseProperty = t),
				(this.propertyName = e),
				(this.type = r),
				(this.sanitizeURL = c),
				(this.removeEmptyString = C)
		}
		var U1 = {}
		'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
			.split(' ')
			.forEach(function (e) {
				U1[e] = new l3(e, 0, !1, e, null, !1, !1)
			})
		;[
			['acceptCharset', 'accept-charset'],
			['className', 'class'],
			['htmlFor', 'for'],
			['httpEquiv', 'http-equiv'],
		].forEach(function (e) {
			var r = e[0]
			U1[r] = new l3(r, 1, !1, e[1], null, !1, !1)
		})
		;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
			U1[e] = new l3(e, 2, !1, e.toLowerCase(), null, !1, !1)
		})
		;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
			U1[e] = new l3(e, 2, !1, e, null, !1, !1)
		})
		'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
			.split(' ')
			.forEach(function (e) {
				U1[e] = new l3(e, 3, !1, e.toLowerCase(), null, !1, !1)
			})
		;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
			U1[e] = new l3(e, 3, !0, e, null, !1, !1)
		})
		;['capture', 'download'].forEach(function (e) {
			U1[e] = new l3(e, 4, !1, e, null, !1, !1)
		})
		;['cols', 'rows', 'size', 'span'].forEach(function (e) {
			U1[e] = new l3(e, 6, !1, e, null, !1, !1)
		})
		;['rowSpan', 'start'].forEach(function (e) {
			U1[e] = new l3(e, 5, !1, e.toLowerCase(), null, !1, !1)
		})
		var yc = /[\-:]([a-z])/g
		function Sc(e) {
			return e[1].toUpperCase()
		}
		'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
			.split(' ')
			.forEach(function (e) {
				var r = e.replace(yc, Sc)
				U1[r] = new l3(r, 1, !1, e, null, !1, !1)
			})
		'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
			var r = e.replace(yc, Sc)
			U1[r] = new l3(r, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
		})
		;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
			var r = e.replace(yc, Sc)
			U1[r] = new l3(r, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
		})
		;['tabIndex', 'crossOrigin'].forEach(function (e) {
			U1[e] = new l3(e, 1, !1, e.toLowerCase(), null, !1, !1)
		})
		U1.xlinkHref = new l3('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)
		;['src', 'href', 'action', 'formAction'].forEach(function (e) {
			U1[e] = new l3(e, 1, !1, e.toLowerCase(), null, !0, !0)
		})
		function xc(e, r, t, n) {
			var i = U1.hasOwnProperty(r) ? U1[r] : null
			;(i !== null
				? i.type !== 0
				: n || !(2 < r.length) || (r[0] !== 'o' && r[0] !== 'O') || (r[1] !== 'n' && r[1] !== 'N')) &&
				(eA(r, t, i, n) && (t = null),
				n || i === null
					? ZP(r) && (t === null ? e.removeAttribute(r) : e.setAttribute(r, '' + t))
					: i.mustUseProperty
					? (e[i.propertyName] = t === null ? (i.type === 3 ? !1 : '') : t)
					: ((r = i.attributeName),
					  (n = i.attributeNamespace),
					  t === null
							? e.removeAttribute(r)
							: ((i = i.type),
							  (t = i === 3 || (i === 4 && t === !0) ? '' : '' + t),
							  n ? e.setAttributeNS(n, r, t) : e.setAttribute(r, t))))
		}
		var d6 = sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
			lr = Symbol.for('react.element'),
			N8 = Symbol.for('react.portal'),
			_8 = Symbol.for('react.fragment'),
			wc = Symbol.for('react.strict_mode'),
			Ro = Symbol.for('react.profiler'),
			fd = Symbol.for('react.provider'),
			ud = Symbol.for('react.context'),
			Nc = Symbol.for('react.forward_ref'),
			Oo = Symbol.for('react.suspense'),
			Do = Symbol.for('react.suspense_list'),
			_c = Symbol.for('react.memo'),
			F6 = Symbol.for('react.lazy')
		Symbol.for('react.scope')
		Symbol.for('react.debug_trace_mode')
		var hd = Symbol.for('react.offscreen')
		Symbol.for('react.legacy_hidden')
		Symbol.for('react.cache')
		Symbol.for('react.tracing_marker')
		var np = Symbol.iterator
		function g7(e) {
			return e === null || typeof e != 'object'
				? null
				: ((e = (np && e[np]) || e['@@iterator']), typeof e == 'function' ? e : null)
		}
		var o1 = Object.assign,
			uo
		function N7(e) {
			if (uo === void 0)
				try {
					throw Error()
				} catch (t) {
					var r = t.stack.trim().match(/\n( *(at )?)/)
					uo = (r && r[1]) || ''
				}
			return (
				`
` +
				uo +
				e
			)
		}
		var ho = !1
		function po(e, r) {
			if (!e || ho) return ''
			ho = !0
			var t = Error.prepareStackTrace
			Error.prepareStackTrace = void 0
			try {
				if (r)
					if (
						((r = function () {
							throw Error()
						}),
						Object.defineProperty(r.prototype, 'props', {
							set: function () {
								throw Error()
							},
						}),
						typeof Reflect == 'object' && Reflect.construct)
					) {
						try {
							Reflect.construct(r, [])
						} catch (h) {
							var n = h
						}
						Reflect.construct(e, [], r)
					} else {
						try {
							r.call()
						} catch (h) {
							n = h
						}
						e.call(r.prototype)
					}
				else {
					try {
						throw Error()
					} catch (h) {
						n = h
					}
					e()
				}
			} catch (h) {
				if (h && n && typeof h.stack == 'string') {
					for (
						var i = h.stack.split(`
`),
							c = n.stack.split(`
`),
							C = i.length - 1,
							l = c.length - 1;
						1 <= C && 0 <= l && i[C] !== c[l];

					)
						l--
					for (; 1 <= C && 0 <= l; C--, l--)
						if (i[C] !== c[l]) {
							if (C !== 1 || l !== 1)
								do
									if ((C--, l--, 0 > l || i[C] !== c[l])) {
										var u =
											`
` + i[C].replace(' at new ', ' at ')
										return (
											e.displayName &&
												u.includes('<anonymous>') &&
												(u = u.replace('<anonymous>', e.displayName)),
											u
										)
									}
								while (1 <= C && 0 <= l)
							break
						}
				}
			} finally {
				;(ho = !1), (Error.prepareStackTrace = t)
			}
			return (e = e ? e.displayName || e.name : '') ? N7(e) : ''
		}
		function rA(e) {
			switch (e.tag) {
				case 5:
					return N7(e.type)
				case 16:
					return N7('Lazy')
				case 13:
					return N7('Suspense')
				case 19:
					return N7('SuspenseList')
				case 0:
				case 2:
				case 15:
					return (e = po(e.type, !1)), e
				case 11:
					return (e = po(e.type.render, !1)), e
				case 1:
					return (e = po(e.type, !0)), e
				default:
					return ''
			}
		}
		function bo(e) {
			if (e == null) return null
			if (typeof e == 'function') return e.displayName || e.name || null
			if (typeof e == 'string') return e
			switch (e) {
				case _8:
					return 'Fragment'
				case N8:
					return 'Portal'
				case Ro:
					return 'Profiler'
				case wc:
					return 'StrictMode'
				case Oo:
					return 'Suspense'
				case Do:
					return 'SuspenseList'
			}
			if (typeof e == 'object')
				switch (e.$$typeof) {
					case ud:
						return (e.displayName || 'Context') + '.Consumer'
					case fd:
						return (e._context.displayName || 'Context') + '.Provider'
					case Nc:
						var r = e.render
						return (
							(e = e.displayName),
							e ||
								((e = r.displayName || r.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
							e
						)
					case _c:
						return (r = e.displayName || null), r !== null ? r : bo(e.type) || 'Memo'
					case F6:
						;(r = e._payload), (e = e._init)
						try {
							return bo(e(r))
						} catch {}
				}
			return null
		}
		function tA(e) {
			var r = e.type
			switch (e.tag) {
				case 24:
					return 'Cache'
				case 9:
					return (r.displayName || 'Context') + '.Consumer'
				case 10:
					return (r._context.displayName || 'Context') + '.Provider'
				case 18:
					return 'DehydratedFragment'
				case 11:
					return (
						(e = r.render),
						(e = e.displayName || e.name || ''),
						r.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
					)
				case 7:
					return 'Fragment'
				case 5:
					return r
				case 4:
					return 'Portal'
				case 3:
					return 'Root'
				case 6:
					return 'Text'
				case 16:
					return bo(r)
				case 8:
					return r === wc ? 'StrictMode' : 'Mode'
				case 22:
					return 'Offscreen'
				case 12:
					return 'Profiler'
				case 21:
					return 'Scope'
				case 13:
					return 'Suspense'
				case 19:
					return 'SuspenseList'
				case 25:
					return 'TracingMarker'
				case 1:
				case 0:
				case 17:
				case 2:
				case 14:
				case 15:
					if (typeof r == 'function') return r.displayName || r.name || null
					if (typeof r == 'string') return r
			}
			return null
		}
		function J6(e) {
			switch (typeof e) {
				case 'boolean':
				case 'number':
				case 'string':
				case 'undefined':
					return e
				case 'object':
					return e
				default:
					return ''
			}
		}
		function pd(e) {
			var r = e.type
			return (e = e.nodeName) && e.toLowerCase() === 'input' && (r === 'checkbox' || r === 'radio')
		}
		function nA(e) {
			var r = pd(e) ? 'checked' : 'value',
				t = Object.getOwnPropertyDescriptor(e.constructor.prototype, r),
				n = '' + e[r]
			if (!e.hasOwnProperty(r) && typeof t < 'u' && typeof t.get == 'function' && typeof t.set == 'function') {
				var i = t.get,
					c = t.set
				return (
					Object.defineProperty(e, r, {
						configurable: !0,
						get: function () {
							return i.call(this)
						},
						set: function (C) {
							;(n = '' + C), c.call(this, C)
						},
					}),
					Object.defineProperty(e, r, { enumerable: t.enumerable }),
					{
						getValue: function () {
							return n
						},
						setValue: function (C) {
							n = '' + C
						},
						stopTracking: function () {
							;(e._valueTracker = null), delete e[r]
						},
					}
				)
			}
		}
		function fr(e) {
			e._valueTracker || (e._valueTracker = nA(e))
		}
		function dd(e) {
			if (!e) return !1
			var r = e._valueTracker
			if (!r) return !0
			var t = r.getValue(),
				n = ''
			return e && (n = pd(e) ? (e.checked ? 'true' : 'false') : e.value), (e = n), e !== t ? (r.setValue(e), !0) : !1
		}
		function Br(e) {
			if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null
			try {
				return e.activeElement || e.body
			} catch {
				return e.body
			}
		}
		function Fo(e, r) {
			var t = r.checked
			return o1({}, r, {
				defaultChecked: void 0,
				defaultValue: void 0,
				value: void 0,
				checked: t ?? e._wrapperState.initialChecked,
			})
		}
		function ap(e, r) {
			var t = r.defaultValue == null ? '' : r.defaultValue,
				n = r.checked != null ? r.checked : r.defaultChecked
			;(t = J6(r.value != null ? r.value : t)),
				(e._wrapperState = {
					initialChecked: n,
					initialValue: t,
					controlled: r.type === 'checkbox' || r.type === 'radio' ? r.checked != null : r.value != null,
				})
		}
		function vd(e, r) {
			;(r = r.checked), r != null && xc(e, 'checked', r, !1)
		}
		function Io(e, r) {
			vd(e, r)
			var t = J6(r.value),
				n = r.type
			if (t != null)
				n === 'number'
					? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + t)
					: e.value !== '' + t && (e.value = '' + t)
			else if (n === 'submit' || n === 'reset') {
				e.removeAttribute('value')
				return
			}
			r.hasOwnProperty('value')
				? Bo(e, r.type, t)
				: r.hasOwnProperty('defaultValue') && Bo(e, r.type, J6(r.defaultValue)),
				r.checked == null && r.defaultChecked != null && (e.defaultChecked = !!r.defaultChecked)
		}
		function ip(e, r, t) {
			if (r.hasOwnProperty('value') || r.hasOwnProperty('defaultValue')) {
				var n = r.type
				if (!((n !== 'submit' && n !== 'reset') || (r.value !== void 0 && r.value !== null))) return
				;(r = '' + e._wrapperState.initialValue), t || r === e.value || (e.value = r), (e.defaultValue = r)
			}
			;(t = e.name),
				t !== '' && (e.name = ''),
				(e.defaultChecked = !!e._wrapperState.initialChecked),
				t !== '' && (e.name = t)
		}
		function Bo(e, r, t) {
			;(r !== 'number' || Br(e.ownerDocument) !== e) &&
				(t == null
					? (e.defaultValue = '' + e._wrapperState.initialValue)
					: e.defaultValue !== '' + t && (e.defaultValue = '' + t))
		}
		var _7 = Array.isArray
		function F8(e, r, t, n) {
			if (((e = e.options), r)) {
				r = {}
				for (var i = 0; i < t.length; i++) r['$' + t[i]] = !0
				for (t = 0; t < e.length; t++)
					(i = r.hasOwnProperty('$' + e[t].value)),
						e[t].selected !== i && (e[t].selected = i),
						i && n && (e[t].defaultSelected = !0)
			} else {
				for (t = '' + J6(t), r = null, i = 0; i < e.length; i++) {
					if (e[i].value === t) {
						;(e[i].selected = !0), n && (e[i].defaultSelected = !0)
						return
					}
					r !== null || e[i].disabled || (r = e[i])
				}
				r !== null && (r.selected = !0)
			}
		}
		function qo(e, r) {
			if (r.dangerouslySetInnerHTML != null) throw Error(U(91))
			return o1({}, r, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue })
		}
		function op(e, r) {
			var t = r.value
			if (t == null) {
				if (((t = r.children), (r = r.defaultValue), t != null)) {
					if (r != null) throw Error(U(92))
					if (_7(t)) {
						if (1 < t.length) throw Error(U(93))
						t = t[0]
					}
					r = t
				}
				r == null && (r = ''), (t = r)
			}
			e._wrapperState = { initialValue: J6(t) }
		}
		function md(e, r) {
			var t = J6(r.value),
				n = J6(r.defaultValue)
			t != null &&
				((t = '' + t),
				t !== e.value && (e.value = t),
				r.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
				n != null && (e.defaultValue = '' + n)
		}
		function cp(e) {
			var r = e.textContent
			r === e._wrapperState.initialValue && r !== '' && r !== null && (e.value = r)
		}
		function Ld(e) {
			switch (e) {
				case 'svg':
					return 'http://www.w3.org/2000/svg'
				case 'math':
					return 'http://www.w3.org/1998/Math/MathML'
				default:
					return 'http://www.w3.org/1999/xhtml'
			}
		}
		function Uo(e, r) {
			return e == null || e === 'http://www.w3.org/1999/xhtml'
				? Ld(r)
				: e === 'http://www.w3.org/2000/svg' && r === 'foreignObject'
				? 'http://www.w3.org/1999/xhtml'
				: e
		}
		var ur,
			gd = (function (e) {
				return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
					? function (r, t, n, i) {
							MSApp.execUnsafeLocalFunction(function () {
								return e(r, t, n, i)
							})
					  }
					: e
			})(function (e, r) {
				if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = r
				else {
					for (
						ur = ur || document.createElement('div'),
							ur.innerHTML = '<svg>' + r.valueOf().toString() + '</svg>',
							r = ur.firstChild;
						e.firstChild;

					)
						e.removeChild(e.firstChild)
					for (; r.firstChild; ) e.appendChild(r.firstChild)
				}
			})
		function B7(e, r) {
			if (r) {
				var t = e.firstChild
				if (t && t === e.lastChild && t.nodeType === 3) {
					t.nodeValue = r
					return
				}
			}
			e.textContent = r
		}
		var A7 = {
				animationIterationCount: !0,
				aspectRatio: !0,
				borderImageOutset: !0,
				borderImageSlice: !0,
				borderImageWidth: !0,
				boxFlex: !0,
				boxFlexGroup: !0,
				boxOrdinalGroup: !0,
				columnCount: !0,
				columns: !0,
				flex: !0,
				flexGrow: !0,
				flexPositive: !0,
				flexShrink: !0,
				flexNegative: !0,
				flexOrder: !0,
				gridArea: !0,
				gridRow: !0,
				gridRowEnd: !0,
				gridRowSpan: !0,
				gridRowStart: !0,
				gridColumn: !0,
				gridColumnEnd: !0,
				gridColumnSpan: !0,
				gridColumnStart: !0,
				fontWeight: !0,
				lineClamp: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				tabSize: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0,
				fillOpacity: !0,
				floodOpacity: !0,
				stopOpacity: !0,
				strokeDasharray: !0,
				strokeDashoffset: !0,
				strokeMiterlimit: !0,
				strokeOpacity: !0,
				strokeWidth: !0,
			},
			aA = ['Webkit', 'ms', 'Moz', 'O']
		Object.keys(A7).forEach(function (e) {
			aA.forEach(function (r) {
				;(r = r + e.charAt(0).toUpperCase() + e.substring(1)), (A7[r] = A7[e])
			})
		})
		function Md(e, r, t) {
			return r == null || typeof r == 'boolean' || r === ''
				? ''
				: t || typeof r != 'number' || r === 0 || (A7.hasOwnProperty(e) && A7[e])
				? ('' + r).trim()
				: r + 'px'
		}
		function zd(e, r) {
			e = e.style
			for (var t in r)
				if (r.hasOwnProperty(t)) {
					var n = t.indexOf('--') === 0,
						i = Md(t, r[t], n)
					t === 'float' && (t = 'cssFloat'), n ? e.setProperty(t, i) : (e[t] = i)
				}
		}
		var iA = o1(
			{ menuitem: !0 },
			{
				area: !0,
				base: !0,
				br: !0,
				col: !0,
				embed: !0,
				hr: !0,
				img: !0,
				input: !0,
				keygen: !0,
				link: !0,
				meta: !0,
				param: !0,
				source: !0,
				track: !0,
				wbr: !0,
			},
		)
		function jo(e, r) {
			if (r) {
				if (iA[e] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(U(137, e))
				if (r.dangerouslySetInnerHTML != null) {
					if (r.children != null) throw Error(U(60))
					if (typeof r.dangerouslySetInnerHTML != 'object' || !('__html' in r.dangerouslySetInnerHTML))
						throw Error(U(61))
				}
				if (r.style != null && typeof r.style != 'object') throw Error(U(62))
			}
		}
		function Go(e, r) {
			if (e.indexOf('-') === -1) return typeof r.is == 'string'
			switch (e) {
				case 'annotation-xml':
				case 'color-profile':
				case 'font-face':
				case 'font-face-src':
				case 'font-face-uri':
				case 'font-face-format':
				case 'font-face-name':
				case 'missing-glyph':
					return !1
				default:
					return !0
			}
		}
		var Wo = null
		function kc(e) {
			return (
				(e = e.target || e.srcElement || window),
				e.correspondingUseElement && (e = e.correspondingUseElement),
				e.nodeType === 3 ? e.parentNode : e
			)
		}
		var Yo = null,
			I8 = null,
			B8 = null
		function Cp(e) {
			if ((e = oe(e))) {
				if (typeof Yo != 'function') throw Error(U(280))
				var r = e.stateNode
				r && ((r = vt(r)), Yo(e.stateNode, e.type, r))
			}
		}
		function Hd(e) {
			I8 ? (B8 ? B8.push(e) : (B8 = [e])) : (I8 = e)
		}
		function Vd() {
			if (I8) {
				var e = I8,
					r = B8
				if (((B8 = I8 = null), Cp(e), r)) for (e = 0; e < r.length; e++) Cp(r[e])
			}
		}
		function yd(e, r) {
			return e(r)
		}
		function Sd() {}
		var vo = !1
		function xd(e, r, t) {
			if (vo) return e(r, t)
			vo = !0
			try {
				return yd(e, r, t)
			} finally {
				;(vo = !1), (I8 !== null || B8 !== null) && (Sd(), Vd())
			}
		}
		function q7(e, r) {
			var t = e.stateNode
			if (t === null) return null
			var n = vt(t)
			if (n === null) return null
			t = n[r]
			e: switch (r) {
				case 'onClick':
				case 'onClickCapture':
				case 'onDoubleClick':
				case 'onDoubleClickCapture':
				case 'onMouseDown':
				case 'onMouseDownCapture':
				case 'onMouseMove':
				case 'onMouseMoveCapture':
				case 'onMouseUp':
				case 'onMouseUpCapture':
				case 'onMouseEnter':
					;(n = !n.disabled) ||
						((e = e.type), (n = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
						(e = !n)
					break e
				default:
					e = !1
			}
			if (e) return null
			if (t && typeof t != 'function') throw Error(U(231, r, typeof t))
			return t
		}
		var Ko = !1
		if (u6)
			try {
				;(x8 = {}),
					Object.defineProperty(x8, 'passive', {
						get: function () {
							Ko = !0
						},
					}),
					window.addEventListener('test', x8, x8),
					window.removeEventListener('test', x8, x8)
			} catch {
				Ko = !1
			}
		var x8
		function oA(e, r, t, n, i, c, C, l, u) {
			var h = Array.prototype.slice.call(arguments, 3)
			try {
				r.apply(t, h)
			} catch (v) {
				this.onError(v)
			}
		}
		var E7 = !1,
			qr = null,
			Ur = !1,
			Qo = null,
			cA = {
				onError: function (e) {
					;(E7 = !0), (qr = e)
				},
			}
		function CA(e, r, t, n, i, c, C, l, u) {
			;(E7 = !1), (qr = null), oA.apply(cA, arguments)
		}
		function sA(e, r, t, n, i, c, C, l, u) {
			if ((CA.apply(this, arguments), E7)) {
				if (E7) {
					var h = qr
					;(E7 = !1), (qr = null)
				} else throw Error(U(198))
				Ur || ((Ur = !0), (Qo = h))
			}
		}
		function B5(e) {
			var r = e,
				t = e
			if (e.alternate) for (; r.return; ) r = r.return
			else {
				e = r
				do (r = e), (r.flags & 4098) !== 0 && (t = r.return), (e = r.return)
				while (e)
			}
			return r.tag === 3 ? t : null
		}
		function wd(e) {
			if (e.tag === 13) {
				var r = e.memoizedState
				if ((r === null && ((e = e.alternate), e !== null && (r = e.memoizedState)), r !== null))
					return r.dehydrated
			}
			return null
		}
		function sp(e) {
			if (B5(e) !== e) throw Error(U(188))
		}
		function lA(e) {
			var r = e.alternate
			if (!r) {
				if (((r = B5(e)), r === null)) throw Error(U(188))
				return r !== e ? null : e
			}
			for (var t = e, n = r; ; ) {
				var i = t.return
				if (i === null) break
				var c = i.alternate
				if (c === null) {
					if (((n = i.return), n !== null)) {
						t = n
						continue
					}
					break
				}
				if (i.child === c.child) {
					for (c = i.child; c; ) {
						if (c === t) return sp(i), e
						if (c === n) return sp(i), r
						c = c.sibling
					}
					throw Error(U(188))
				}
				if (t.return !== n.return) (t = i), (n = c)
				else {
					for (var C = !1, l = i.child; l; ) {
						if (l === t) {
							;(C = !0), (t = i), (n = c)
							break
						}
						if (l === n) {
							;(C = !0), (n = i), (t = c)
							break
						}
						l = l.sibling
					}
					if (!C) {
						for (l = c.child; l; ) {
							if (l === t) {
								;(C = !0), (t = c), (n = i)
								break
							}
							if (l === n) {
								;(C = !0), (n = c), (t = i)
								break
							}
							l = l.sibling
						}
						if (!C) throw Error(U(189))
					}
				}
				if (t.alternate !== n) throw Error(U(190))
			}
			if (t.tag !== 3) throw Error(U(188))
			return t.stateNode.current === t ? e : r
		}
		function Nd(e) {
			return (e = lA(e)), e !== null ? _d(e) : null
		}
		function _d(e) {
			if (e.tag === 5 || e.tag === 6) return e
			for (e = e.child; e !== null; ) {
				var r = _d(e)
				if (r !== null) return r
				e = e.sibling
			}
			return null
		}
		var kd = D3.unstable_scheduleCallback,
			lp = D3.unstable_cancelCallback,
			fA = D3.unstable_shouldYield,
			uA = D3.unstable_requestPaint,
			d1 = D3.unstable_now,
			hA = D3.unstable_getCurrentPriorityLevel,
			Pc = D3.unstable_ImmediatePriority,
			Pd = D3.unstable_UserBlockingPriority,
			jr = D3.unstable_NormalPriority,
			pA = D3.unstable_LowPriority,
			Ad = D3.unstable_IdlePriority,
			ut = null,
			G4 = null
		function dA(e) {
			if (G4 && typeof G4.onCommitFiberRoot == 'function')
				try {
					G4.onCommitFiberRoot(ut, e, void 0, (e.current.flags & 128) === 128)
				} catch {}
		}
		var V4 = Math.clz32 ? Math.clz32 : LA,
			vA = Math.log,
			mA = Math.LN2
		function LA(e) {
			return (e >>>= 0), e === 0 ? 32 : (31 - ((vA(e) / mA) | 0)) | 0
		}
		var hr = 64,
			pr = 4194304
		function k7(e) {
			switch (e & -e) {
				case 1:
					return 1
				case 2:
					return 2
				case 4:
					return 4
				case 8:
					return 8
				case 16:
					return 16
				case 32:
					return 32
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
					return e & 4194240
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					return e & 130023424
				case 134217728:
					return 134217728
				case 268435456:
					return 268435456
				case 536870912:
					return 536870912
				case 1073741824:
					return 1073741824
				default:
					return e
			}
		}
		function Gr(e, r) {
			var t = e.pendingLanes
			if (t === 0) return 0
			var n = 0,
				i = e.suspendedLanes,
				c = e.pingedLanes,
				C = t & 268435455
			if (C !== 0) {
				var l = C & ~i
				l !== 0 ? (n = k7(l)) : ((c &= C), c !== 0 && (n = k7(c)))
			} else (C = t & ~i), C !== 0 ? (n = k7(C)) : c !== 0 && (n = k7(c))
			if (n === 0) return 0
			if (
				r !== 0 &&
				r !== n &&
				(r & i) === 0 &&
				((i = n & -n), (c = r & -r), i >= c || (i === 16 && (c & 4194240) !== 0))
			)
				return r
			if (((n & 4) !== 0 && (n |= t & 16), (r = e.entangledLanes), r !== 0))
				for (e = e.entanglements, r &= n; 0 < r; ) (t = 31 - V4(r)), (i = 1 << t), (n |= e[t]), (r &= ~i)
			return n
		}
		function gA(e, r) {
			switch (e) {
				case 1:
				case 2:
				case 4:
					return r + 250
				case 8:
				case 16:
				case 32:
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
					return r + 5e3
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					return -1
				case 134217728:
				case 268435456:
				case 536870912:
				case 1073741824:
					return -1
				default:
					return -1
			}
		}
		function MA(e, r) {
			for (var t = e.suspendedLanes, n = e.pingedLanes, i = e.expirationTimes, c = e.pendingLanes; 0 < c; ) {
				var C = 31 - V4(c),
					l = 1 << C,
					u = i[C]
				u === -1 ? ((l & t) === 0 || (l & n) !== 0) && (i[C] = gA(l, r)) : u <= r && (e.expiredLanes |= l),
					(c &= ~l)
			}
		}
		function Xo(e) {
			return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
		}
		function mo(e) {
			for (var r = [], t = 0; 31 > t; t++) r.push(e)
			return r
		}
		function ae(e, r, t) {
			;(e.pendingLanes |= r),
				r !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
				(e = e.eventTimes),
				(r = 31 - V4(r)),
				(e[r] = t)
		}
		function zA(e, r) {
			var t = e.pendingLanes & ~r
			;(e.pendingLanes = r),
				(e.suspendedLanes = 0),
				(e.pingedLanes = 0),
				(e.expiredLanes &= r),
				(e.mutableReadLanes &= r),
				(e.entangledLanes &= r),
				(r = e.entanglements)
			var n = e.eventTimes
			for (e = e.expirationTimes; 0 < t; ) {
				var i = 31 - V4(t),
					c = 1 << i
				;(r[i] = 0), (n[i] = -1), (e[i] = -1), (t &= ~c)
			}
		}
		function Ac(e, r) {
			var t = (e.entangledLanes |= r)
			for (e = e.entanglements; t; ) {
				var n = 31 - V4(t),
					i = 1 << n
				;(i & r) | (e[n] & r) && (e[n] |= r), (t &= ~i)
			}
		}
		var R2 = 0
		function Ed(e) {
			return (e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
		}
		var Td,
			Ec,
			Rd,
			Od,
			Dd,
			Jo = !1,
			dr = [],
			G6 = null,
			W6 = null,
			Y6 = null,
			U7 = new Map(),
			j7 = new Map(),
			B6 = [],
			HA =
				'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
					' ',
				)
		function fp(e, r) {
			switch (e) {
				case 'focusin':
				case 'focusout':
					G6 = null
					break
				case 'dragenter':
				case 'dragleave':
					W6 = null
					break
				case 'mouseover':
				case 'mouseout':
					Y6 = null
					break
				case 'pointerover':
				case 'pointerout':
					U7.delete(r.pointerId)
					break
				case 'gotpointercapture':
				case 'lostpointercapture':
					j7.delete(r.pointerId)
			}
		}
		function M7(e, r, t, n, i, c) {
			return e === null || e.nativeEvent !== c
				? ((e = { blockedOn: r, domEventName: t, eventSystemFlags: n, nativeEvent: c, targetContainers: [i] }),
				  r !== null && ((r = oe(r)), r !== null && Ec(r)),
				  e)
				: ((e.eventSystemFlags |= n), (r = e.targetContainers), i !== null && r.indexOf(i) === -1 && r.push(i), e)
		}
		function VA(e, r, t, n, i) {
			switch (r) {
				case 'focusin':
					return (G6 = M7(G6, e, r, t, n, i)), !0
				case 'dragenter':
					return (W6 = M7(W6, e, r, t, n, i)), !0
				case 'mouseover':
					return (Y6 = M7(Y6, e, r, t, n, i)), !0
				case 'pointerover':
					var c = i.pointerId
					return U7.set(c, M7(U7.get(c) || null, e, r, t, n, i)), !0
				case 'gotpointercapture':
					return (c = i.pointerId), j7.set(c, M7(j7.get(c) || null, e, r, t, n, i)), !0
			}
			return !1
		}
		function bd(e) {
			var r = P5(e.target)
			if (r !== null) {
				var t = B5(r)
				if (t !== null) {
					if (((r = t.tag), r === 13)) {
						if (((r = wd(t)), r !== null)) {
							;(e.blockedOn = r),
								Dd(e.priority, function () {
									Rd(t)
								})
							return
						}
					} else if (r === 3 && t.stateNode.current.memoizedState.isDehydrated) {
						e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null
						return
					}
				}
			}
			e.blockedOn = null
		}
		function Ar(e) {
			if (e.blockedOn !== null) return !1
			for (var r = e.targetContainers; 0 < r.length; ) {
				var t = Zo(e.domEventName, e.eventSystemFlags, r[0], e.nativeEvent)
				if (t === null) {
					t = e.nativeEvent
					var n = new t.constructor(t.type, t)
					;(Wo = n), t.target.dispatchEvent(n), (Wo = null)
				} else return (r = oe(t)), r !== null && Ec(r), (e.blockedOn = t), !1
				r.shift()
			}
			return !0
		}
		function up(e, r, t) {
			Ar(e) && t.delete(r)
		}
		function yA() {
			;(Jo = !1),
				G6 !== null && Ar(G6) && (G6 = null),
				W6 !== null && Ar(W6) && (W6 = null),
				Y6 !== null && Ar(Y6) && (Y6 = null),
				U7.forEach(up),
				j7.forEach(up)
		}
		function z7(e, r) {
			e.blockedOn === r &&
				((e.blockedOn = null), Jo || ((Jo = !0), D3.unstable_scheduleCallback(D3.unstable_NormalPriority, yA)))
		}
		function G7(e) {
			function r(i) {
				return z7(i, e)
			}
			if (0 < dr.length) {
				z7(dr[0], e)
				for (var t = 1; t < dr.length; t++) {
					var n = dr[t]
					n.blockedOn === e && (n.blockedOn = null)
				}
			}
			for (
				G6 !== null && z7(G6, e),
					W6 !== null && z7(W6, e),
					Y6 !== null && z7(Y6, e),
					U7.forEach(r),
					j7.forEach(r),
					t = 0;
				t < B6.length;
				t++
			)
				(n = B6[t]), n.blockedOn === e && (n.blockedOn = null)
			for (; 0 < B6.length && ((t = B6[0]), t.blockedOn === null); ) bd(t), t.blockedOn === null && B6.shift()
		}
		var q8 = d6.ReactCurrentBatchConfig
		function SA(e, r, t, n) {
			var i = R2,
				c = q8.transition
			q8.transition = null
			try {
				;(R2 = 1), Tc(e, r, t, n)
			} finally {
				;(R2 = i), (q8.transition = c)
			}
		}
		function xA(e, r, t, n) {
			var i = R2,
				c = q8.transition
			q8.transition = null
			try {
				;(R2 = 4), Tc(e, r, t, n)
			} finally {
				;(R2 = i), (q8.transition = c)
			}
		}
		function Tc(e, r, t, n) {
			var i = Zo(e, r, t, n)
			if (i === null) yo(e, r, n, Wr, t), fp(e, n)
			else if (VA(i, e, r, t, n)) n.stopPropagation()
			else if ((fp(e, n), r & 4 && -1 < HA.indexOf(e))) {
				for (; i !== null; ) {
					var c = oe(i)
					if ((c !== null && Td(c), (c = Zo(e, r, t, n)), c === null && yo(e, r, n, Wr, t), c === i)) break
					i = c
				}
				i !== null && n.stopPropagation()
			} else yo(e, r, n, null, t)
		}
		var Wr = null
		function Zo(e, r, t, n) {
			if (((Wr = null), (e = kc(n)), (e = P5(e)), e !== null))
				if (((r = B5(e)), r === null)) e = null
				else if (((t = r.tag), t === 13)) {
					if (((e = wd(r)), e !== null)) return e
					e = null
				} else if (t === 3) {
					if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null
					e = null
				} else r !== e && (e = null)
			return (Wr = e), null
		}
		function Fd(e) {
			switch (e) {
				case 'cancel':
				case 'click':
				case 'close':
				case 'contextmenu':
				case 'copy':
				case 'cut':
				case 'auxclick':
				case 'dblclick':
				case 'dragend':
				case 'dragstart':
				case 'drop':
				case 'focusin':
				case 'focusout':
				case 'input':
				case 'invalid':
				case 'keydown':
				case 'keypress':
				case 'keyup':
				case 'mousedown':
				case 'mouseup':
				case 'paste':
				case 'pause':
				case 'play':
				case 'pointercancel':
				case 'pointerdown':
				case 'pointerup':
				case 'ratechange':
				case 'reset':
				case 'resize':
				case 'seeked':
				case 'submit':
				case 'touchcancel':
				case 'touchend':
				case 'touchstart':
				case 'volumechange':
				case 'change':
				case 'selectionchange':
				case 'textInput':
				case 'compositionstart':
				case 'compositionend':
				case 'compositionupdate':
				case 'beforeblur':
				case 'afterblur':
				case 'beforeinput':
				case 'blur':
				case 'fullscreenchange':
				case 'focus':
				case 'hashchange':
				case 'popstate':
				case 'select':
				case 'selectstart':
					return 1
				case 'drag':
				case 'dragenter':
				case 'dragexit':
				case 'dragleave':
				case 'dragover':
				case 'mousemove':
				case 'mouseout':
				case 'mouseover':
				case 'pointermove':
				case 'pointerout':
				case 'pointerover':
				case 'scroll':
				case 'toggle':
				case 'touchmove':
				case 'wheel':
				case 'mouseenter':
				case 'mouseleave':
				case 'pointerenter':
				case 'pointerleave':
					return 4
				case 'message':
					switch (hA()) {
						case Pc:
							return 1
						case Pd:
							return 4
						case jr:
						case pA:
							return 16
						case Ad:
							return 536870912
						default:
							return 16
					}
				default:
					return 16
			}
		}
		var U6 = null,
			Rc = null,
			Er = null
		function Id() {
			if (Er) return Er
			var e,
				r = Rc,
				t = r.length,
				n,
				i = 'value' in U6 ? U6.value : U6.textContent,
				c = i.length
			for (e = 0; e < t && r[e] === i[e]; e++);
			var C = t - e
			for (n = 1; n <= C && r[t - n] === i[c - n]; n++);
			return (Er = i.slice(e, 1 < n ? 1 - n : void 0))
		}
		function Tr(e) {
			var r = e.keyCode
			return (
				'charCode' in e ? ((e = e.charCode), e === 0 && r === 13 && (e = 13)) : (e = r),
				e === 10 && (e = 13),
				32 <= e || e === 13 ? e : 0
			)
		}
		function vr() {
			return !0
		}
		function hp() {
			return !1
		}
		function b3(e) {
			function r(t, n, i, c, C) {
				;(this._reactName = t),
					(this._targetInst = i),
					(this.type = n),
					(this.nativeEvent = c),
					(this.target = C),
					(this.currentTarget = null)
				for (var l in e) e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(c) : c[l]))
				return (
					(this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1)
						? vr
						: hp),
					(this.isPropagationStopped = hp),
					this
				)
			}
			return (
				o1(r.prototype, {
					preventDefault: function () {
						this.defaultPrevented = !0
						var t = this.nativeEvent
						t &&
							(t.preventDefault ? t.preventDefault() : typeof t.returnValue != 'unknown' && (t.returnValue = !1),
							(this.isDefaultPrevented = vr))
					},
					stopPropagation: function () {
						var t = this.nativeEvent
						t &&
							(t.stopPropagation
								? t.stopPropagation()
								: typeof t.cancelBubble != 'unknown' && (t.cancelBubble = !0),
							(this.isPropagationStopped = vr))
					},
					persist: function () {},
					isPersistent: vr,
				}),
				r
			)
		}
		var $8 = {
				eventPhase: 0,
				bubbles: 0,
				cancelable: 0,
				timeStamp: function (e) {
					return e.timeStamp || Date.now()
				},
				defaultPrevented: 0,
				isTrusted: 0,
			},
			Oc = b3($8),
			ie = o1({}, $8, { view: 0, detail: 0 }),
			wA = b3(ie),
			Lo,
			go,
			H7,
			ht = o1({}, ie, {
				screenX: 0,
				screenY: 0,
				clientX: 0,
				clientY: 0,
				pageX: 0,
				pageY: 0,
				ctrlKey: 0,
				shiftKey: 0,
				altKey: 0,
				metaKey: 0,
				getModifierState: Dc,
				button: 0,
				buttons: 0,
				relatedTarget: function (e) {
					return e.relatedTarget === void 0
						? e.fromElement === e.srcElement
							? e.toElement
							: e.fromElement
						: e.relatedTarget
				},
				movementX: function (e) {
					return 'movementX' in e
						? e.movementX
						: (e !== H7 &&
								(H7 && e.type === 'mousemove'
									? ((Lo = e.screenX - H7.screenX), (go = e.screenY - H7.screenY))
									: (go = Lo = 0),
								(H7 = e)),
						  Lo)
				},
				movementY: function (e) {
					return 'movementY' in e ? e.movementY : go
				},
			}),
			pp = b3(ht),
			NA = o1({}, ht, { dataTransfer: 0 }),
			_A = b3(NA),
			kA = o1({}, ie, { relatedTarget: 0 }),
			Mo = b3(kA),
			PA = o1({}, $8, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
			AA = b3(PA),
			EA = o1({}, $8, {
				clipboardData: function (e) {
					return 'clipboardData' in e ? e.clipboardData : window.clipboardData
				},
			}),
			TA = b3(EA),
			RA = o1({}, $8, { data: 0 }),
			dp = b3(RA),
			OA = {
				Esc: 'Escape',
				Spacebar: ' ',
				Left: 'ArrowLeft',
				Up: 'ArrowUp',
				Right: 'ArrowRight',
				Down: 'ArrowDown',
				Del: 'Delete',
				Win: 'OS',
				Menu: 'ContextMenu',
				Apps: 'ContextMenu',
				Scroll: 'ScrollLock',
				MozPrintableKey: 'Unidentified',
			},
			DA = {
				8: 'Backspace',
				9: 'Tab',
				12: 'Clear',
				13: 'Enter',
				16: 'Shift',
				17: 'Control',
				18: 'Alt',
				19: 'Pause',
				20: 'CapsLock',
				27: 'Escape',
				32: ' ',
				33: 'PageUp',
				34: 'PageDown',
				35: 'End',
				36: 'Home',
				37: 'ArrowLeft',
				38: 'ArrowUp',
				39: 'ArrowRight',
				40: 'ArrowDown',
				45: 'Insert',
				46: 'Delete',
				112: 'F1',
				113: 'F2',
				114: 'F3',
				115: 'F4',
				116: 'F5',
				117: 'F6',
				118: 'F7',
				119: 'F8',
				120: 'F9',
				121: 'F10',
				122: 'F11',
				123: 'F12',
				144: 'NumLock',
				145: 'ScrollLock',
				224: 'Meta',
			},
			bA = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
		function FA(e) {
			var r = this.nativeEvent
			return r.getModifierState ? r.getModifierState(e) : (e = bA[e]) ? !!r[e] : !1
		}
		function Dc() {
			return FA
		}
		var IA = o1({}, ie, {
				key: function (e) {
					if (e.key) {
						var r = OA[e.key] || e.key
						if (r !== 'Unidentified') return r
					}
					return e.type === 'keypress'
						? ((e = Tr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
						: e.type === 'keydown' || e.type === 'keyup'
						? DA[e.keyCode] || 'Unidentified'
						: ''
				},
				code: 0,
				location: 0,
				ctrlKey: 0,
				shiftKey: 0,
				altKey: 0,
				metaKey: 0,
				repeat: 0,
				locale: 0,
				getModifierState: Dc,
				charCode: function (e) {
					return e.type === 'keypress' ? Tr(e) : 0
				},
				keyCode: function (e) {
					return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
				},
				which: function (e) {
					return e.type === 'keypress' ? Tr(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
				},
			}),
			BA = b3(IA),
			qA = o1({}, ht, {
				pointerId: 0,
				width: 0,
				height: 0,
				pressure: 0,
				tangentialPressure: 0,
				tiltX: 0,
				tiltY: 0,
				twist: 0,
				pointerType: 0,
				isPrimary: 0,
			}),
			vp = b3(qA),
			UA = o1({}, ie, {
				touches: 0,
				targetTouches: 0,
				changedTouches: 0,
				altKey: 0,
				metaKey: 0,
				ctrlKey: 0,
				shiftKey: 0,
				getModifierState: Dc,
			}),
			jA = b3(UA),
			GA = o1({}, $8, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
			WA = b3(GA),
			YA = o1({}, ht, {
				deltaX: function (e) {
					return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
				},
				deltaY: function (e) {
					return 'deltaY' in e
						? e.deltaY
						: 'wheelDeltaY' in e
						? -e.wheelDeltaY
						: 'wheelDelta' in e
						? -e.wheelDelta
						: 0
				},
				deltaZ: 0,
				deltaMode: 0,
			}),
			KA = b3(YA),
			QA = [9, 13, 27, 32],
			bc = u6 && 'CompositionEvent' in window,
			T7 = null
		u6 && 'documentMode' in document && (T7 = document.documentMode)
		var XA = u6 && 'TextEvent' in window && !T7,
			Bd = u6 && (!bc || (T7 && 8 < T7 && 11 >= T7)),
			mp = String.fromCharCode(32),
			Lp = !1
		function qd(e, r) {
			switch (e) {
				case 'keyup':
					return QA.indexOf(r.keyCode) !== -1
				case 'keydown':
					return r.keyCode !== 229
				case 'keypress':
				case 'mousedown':
				case 'focusout':
					return !0
				default:
					return !1
			}
		}
		function Ud(e) {
			return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
		}
		var k8 = !1
		function JA(e, r) {
			switch (e) {
				case 'compositionend':
					return Ud(r)
				case 'keypress':
					return r.which !== 32 ? null : ((Lp = !0), mp)
				case 'textInput':
					return (e = r.data), e === mp && Lp ? null : e
				default:
					return null
			}
		}
		function ZA(e, r) {
			if (k8)
				return e === 'compositionend' || (!bc && qd(e, r))
					? ((e = Id()), (Er = Rc = U6 = null), (k8 = !1), e)
					: null
			switch (e) {
				case 'paste':
					return null
				case 'keypress':
					if (!(r.ctrlKey || r.altKey || r.metaKey) || (r.ctrlKey && r.altKey)) {
						if (r.char && 1 < r.char.length) return r.char
						if (r.which) return String.fromCharCode(r.which)
					}
					return null
				case 'compositionend':
					return Bd && r.locale !== 'ko' ? null : r.data
				default:
					return null
			}
		}
		var $A = {
			color: !0,
			date: !0,
			datetime: !0,
			'datetime-local': !0,
			email: !0,
			month: !0,
			number: !0,
			password: !0,
			range: !0,
			search: !0,
			tel: !0,
			text: !0,
			time: !0,
			url: !0,
			week: !0,
		}
		function gp(e) {
			var r = e && e.nodeName && e.nodeName.toLowerCase()
			return r === 'input' ? !!$A[e.type] : r === 'textarea'
		}
		function jd(e, r, t, n) {
			Hd(n),
				(r = Yr(r, 'onChange')),
				0 < r.length && ((t = new Oc('onChange', 'change', null, t, n)), e.push({ event: t, listeners: r }))
		}
		var R7 = null,
			W7 = null
		function eE(e) {
			rv(e, 0)
		}
		function pt(e) {
			var r = E8(e)
			if (dd(r)) return e
		}
		function rE(e, r) {
			if (e === 'change') return r
		}
		var Gd = !1
		u6 &&
			(u6
				? ((Lr = 'oninput' in document),
				  Lr ||
						((zo = document.createElement('div')),
						zo.setAttribute('oninput', 'return;'),
						(Lr = typeof zo.oninput == 'function')),
				  (mr = Lr))
				: (mr = !1),
			(Gd = mr && (!document.documentMode || 9 < document.documentMode)))
		var mr, Lr, zo
		function Mp() {
			R7 && (R7.detachEvent('onpropertychange', Wd), (W7 = R7 = null))
		}
		function Wd(e) {
			if (e.propertyName === 'value' && pt(W7)) {
				var r = []
				jd(r, W7, e, kc(e)), xd(eE, r)
			}
		}
		function tE(e, r, t) {
			e === 'focusin' ? (Mp(), (R7 = r), (W7 = t), R7.attachEvent('onpropertychange', Wd)) : e === 'focusout' && Mp()
		}
		function nE(e) {
			if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return pt(W7)
		}
		function aE(e, r) {
			if (e === 'click') return pt(r)
		}
		function iE(e, r) {
			if (e === 'input' || e === 'change') return pt(r)
		}
		function oE(e, r) {
			return (e === r && (e !== 0 || 1 / e === 1 / r)) || (e !== e && r !== r)
		}
		var Y4 = typeof Object.is == 'function' ? Object.is : oE
		function Y7(e, r) {
			if (Y4(e, r)) return !0
			if (typeof e != 'object' || e === null || typeof r != 'object' || r === null) return !1
			var t = Object.keys(e),
				n = Object.keys(r)
			if (t.length !== n.length) return !1
			for (n = 0; n < t.length; n++) {
				var i = t[n]
				if (!To.call(r, i) || !Y4(e[i], r[i])) return !1
			}
			return !0
		}
		function zp(e) {
			for (; e && e.firstChild; ) e = e.firstChild
			return e
		}
		function Hp(e, r) {
			var t = zp(e)
			e = 0
			for (var n; t; ) {
				if (t.nodeType === 3) {
					if (((n = e + t.textContent.length), e <= r && n >= r)) return { node: t, offset: r - e }
					e = n
				}
				e: {
					for (; t; ) {
						if (t.nextSibling) {
							t = t.nextSibling
							break e
						}
						t = t.parentNode
					}
					t = void 0
				}
				t = zp(t)
			}
		}
		function Yd(e, r) {
			return e && r
				? e === r
					? !0
					: e && e.nodeType === 3
					? !1
					: r && r.nodeType === 3
					? Yd(e, r.parentNode)
					: 'contains' in e
					? e.contains(r)
					: e.compareDocumentPosition
					? !!(e.compareDocumentPosition(r) & 16)
					: !1
				: !1
		}
		function Kd() {
			for (var e = window, r = Br(); r instanceof e.HTMLIFrameElement; ) {
				try {
					var t = typeof r.contentWindow.location.href == 'string'
				} catch {
					t = !1
				}
				if (t) e = r.contentWindow
				else break
				r = Br(e.document)
			}
			return r
		}
		function Fc(e) {
			var r = e && e.nodeName && e.nodeName.toLowerCase()
			return (
				r &&
				((r === 'input' &&
					(e.type === 'text' ||
						e.type === 'search' ||
						e.type === 'tel' ||
						e.type === 'url' ||
						e.type === 'password')) ||
					r === 'textarea' ||
					e.contentEditable === 'true')
			)
		}
		function cE(e) {
			var r = Kd(),
				t = e.focusedElem,
				n = e.selectionRange
			if (r !== t && t && t.ownerDocument && Yd(t.ownerDocument.documentElement, t)) {
				if (n !== null && Fc(t)) {
					if (((r = n.start), (e = n.end), e === void 0 && (e = r), 'selectionStart' in t))
						(t.selectionStart = r), (t.selectionEnd = Math.min(e, t.value.length))
					else if (((e = ((r = t.ownerDocument || document) && r.defaultView) || window), e.getSelection)) {
						e = e.getSelection()
						var i = t.textContent.length,
							c = Math.min(n.start, i)
						;(n = n.end === void 0 ? c : Math.min(n.end, i)),
							!e.extend && c > n && ((i = n), (n = c), (c = i)),
							(i = Hp(t, c))
						var C = Hp(t, n)
						i &&
							C &&
							(e.rangeCount !== 1 ||
								e.anchorNode !== i.node ||
								e.anchorOffset !== i.offset ||
								e.focusNode !== C.node ||
								e.focusOffset !== C.offset) &&
							((r = r.createRange()),
							r.setStart(i.node, i.offset),
							e.removeAllRanges(),
							c > n ? (e.addRange(r), e.extend(C.node, C.offset)) : (r.setEnd(C.node, C.offset), e.addRange(r)))
					}
				}
				for (r = [], e = t; (e = e.parentNode); )
					e.nodeType === 1 && r.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
				for (typeof t.focus == 'function' && t.focus(), t = 0; t < r.length; t++)
					(e = r[t]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
			}
		}
		var CE = u6 && 'documentMode' in document && 11 >= document.documentMode,
			P8 = null,
			$o = null,
			O7 = null,
			ec = !1
		function Vp(e, r, t) {
			var n = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument
			ec ||
				P8 == null ||
				P8 !== Br(n) ||
				((n = P8),
				'selectionStart' in n && Fc(n)
					? (n = { start: n.selectionStart, end: n.selectionEnd })
					: ((n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()),
					  (n = {
							anchorNode: n.anchorNode,
							anchorOffset: n.anchorOffset,
							focusNode: n.focusNode,
							focusOffset: n.focusOffset,
					  })),
				(O7 && Y7(O7, n)) ||
					((O7 = n),
					(n = Yr($o, 'onSelect')),
					0 < n.length &&
						((r = new Oc('onSelect', 'select', null, r, t)),
						e.push({ event: r, listeners: n }),
						(r.target = P8))))
		}
		function gr(e, r) {
			var t = {}
			return (t[e.toLowerCase()] = r.toLowerCase()), (t['Webkit' + e] = 'webkit' + r), (t['Moz' + e] = 'moz' + r), t
		}
		var A8 = {
				animationend: gr('Animation', 'AnimationEnd'),
				animationiteration: gr('Animation', 'AnimationIteration'),
				animationstart: gr('Animation', 'AnimationStart'),
				transitionend: gr('Transition', 'TransitionEnd'),
			},
			Ho = {},
			Qd = {}
		u6 &&
			((Qd = document.createElement('div').style),
			'AnimationEvent' in window ||
				(delete A8.animationend.animation,
				delete A8.animationiteration.animation,
				delete A8.animationstart.animation),
			'TransitionEvent' in window || delete A8.transitionend.transition)
		function dt(e) {
			if (Ho[e]) return Ho[e]
			if (!A8[e]) return e
			var r = A8[e],
				t
			for (t in r) if (r.hasOwnProperty(t) && t in Qd) return (Ho[e] = r[t])
			return e
		}
		var Xd = dt('animationend'),
			Jd = dt('animationiteration'),
			Zd = dt('animationstart'),
			$d = dt('transitionend'),
			ev = new Map(),
			yp =
				'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
					' ',
				)
		function e5(e, r) {
			ev.set(e, r), I5(r, [e])
		}
		for (Mr = 0; Mr < yp.length; Mr++)
			(zr = yp[Mr]), (Sp = zr.toLowerCase()), (xp = zr[0].toUpperCase() + zr.slice(1)), e5(Sp, 'on' + xp)
		var zr, Sp, xp, Mr
		e5(Xd, 'onAnimationEnd')
		e5(Jd, 'onAnimationIteration')
		e5(Zd, 'onAnimationStart')
		e5('dblclick', 'onDoubleClick')
		e5('focusin', 'onFocus')
		e5('focusout', 'onBlur')
		e5($d, 'onTransitionEnd')
		G8('onMouseEnter', ['mouseout', 'mouseover'])
		G8('onMouseLeave', ['mouseout', 'mouseover'])
		G8('onPointerEnter', ['pointerout', 'pointerover'])
		G8('onPointerLeave', ['pointerout', 'pointerover'])
		I5('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '))
		I5('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '))
		I5('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
		I5('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '))
		I5('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '))
		I5('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '))
		var P7 =
				'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
					' ',
				),
			sE = new Set('cancel close invalid load scroll toggle'.split(' ').concat(P7))
		function wp(e, r, t) {
			var n = e.type || 'unknown-event'
			;(e.currentTarget = t), sA(n, r, void 0, e), (e.currentTarget = null)
		}
		function rv(e, r) {
			r = (r & 4) !== 0
			for (var t = 0; t < e.length; t++) {
				var n = e[t],
					i = n.event
				n = n.listeners
				e: {
					var c = void 0
					if (r)
						for (var C = n.length - 1; 0 <= C; C--) {
							var l = n[C],
								u = l.instance,
								h = l.currentTarget
							if (((l = l.listener), u !== c && i.isPropagationStopped())) break e
							wp(i, l, h), (c = u)
						}
					else
						for (C = 0; C < n.length; C++) {
							if (
								((l = n[C]),
								(u = l.instance),
								(h = l.currentTarget),
								(l = l.listener),
								u !== c && i.isPropagationStopped())
							)
								break e
							wp(i, l, h), (c = u)
						}
				}
			}
			if (Ur) throw ((e = Qo), (Ur = !1), (Qo = null), e)
		}
		function X2(e, r) {
			var t = r[ac]
			t === void 0 && (t = r[ac] = new Set())
			var n = e + '__bubble'
			t.has(n) || (tv(r, e, 2, !1), t.add(n))
		}
		function Vo(e, r, t) {
			var n = 0
			r && (n |= 4), tv(t, e, n, r)
		}
		var Hr = '_reactListening' + Math.random().toString(36).slice(2)
		function K7(e) {
			if (!e[Hr]) {
				;(e[Hr] = !0),
					ld.forEach(function (t) {
						t !== 'selectionchange' && (sE.has(t) || Vo(t, !1, e), Vo(t, !0, e))
					})
				var r = e.nodeType === 9 ? e : e.ownerDocument
				r === null || r[Hr] || ((r[Hr] = !0), Vo('selectionchange', !1, r))
			}
		}
		function tv(e, r, t, n) {
			switch (Fd(r)) {
				case 1:
					var i = SA
					break
				case 4:
					i = xA
					break
				default:
					i = Tc
			}
			;(t = i.bind(null, r, t, e)),
				(i = void 0),
				!Ko || (r !== 'touchstart' && r !== 'touchmove' && r !== 'wheel') || (i = !0),
				n
					? i !== void 0
						? e.addEventListener(r, t, { capture: !0, passive: i })
						: e.addEventListener(r, t, !0)
					: i !== void 0
					? e.addEventListener(r, t, { passive: i })
					: e.addEventListener(r, t, !1)
		}
		function yo(e, r, t, n, i) {
			var c = n
			if ((r & 1) === 0 && (r & 2) === 0 && n !== null)
				e: for (;;) {
					if (n === null) return
					var C = n.tag
					if (C === 3 || C === 4) {
						var l = n.stateNode.containerInfo
						if (l === i || (l.nodeType === 8 && l.parentNode === i)) break
						if (C === 4)
							for (C = n.return; C !== null; ) {
								var u = C.tag
								if (
									(u === 3 || u === 4) &&
									((u = C.stateNode.containerInfo), u === i || (u.nodeType === 8 && u.parentNode === i))
								)
									return
								C = C.return
							}
						for (; l !== null; ) {
							if (((C = P5(l)), C === null)) return
							if (((u = C.tag), u === 5 || u === 6)) {
								n = c = C
								continue e
							}
							l = l.parentNode
						}
					}
					n = n.return
				}
			xd(function () {
				var h = c,
					v = kc(t),
					g = []
				e: {
					var m = ev.get(e)
					if (m !== void 0) {
						var H = Oc,
							L = e
						switch (e) {
							case 'keypress':
								if (Tr(t) === 0) break e
							case 'keydown':
							case 'keyup':
								H = BA
								break
							case 'focusin':
								;(L = 'focus'), (H = Mo)
								break
							case 'focusout':
								;(L = 'blur'), (H = Mo)
								break
							case 'beforeblur':
							case 'afterblur':
								H = Mo
								break
							case 'click':
								if (t.button === 2) break e
							case 'auxclick':
							case 'dblclick':
							case 'mousedown':
							case 'mousemove':
							case 'mouseup':
							case 'mouseout':
							case 'mouseover':
							case 'contextmenu':
								H = pp
								break
							case 'drag':
							case 'dragend':
							case 'dragenter':
							case 'dragexit':
							case 'dragleave':
							case 'dragover':
							case 'dragstart':
							case 'drop':
								H = _A
								break
							case 'touchcancel':
							case 'touchend':
							case 'touchmove':
							case 'touchstart':
								H = jA
								break
							case Xd:
							case Jd:
							case Zd:
								H = AA
								break
							case $d:
								H = WA
								break
							case 'scroll':
								H = wA
								break
							case 'wheel':
								H = KA
								break
							case 'copy':
							case 'cut':
							case 'paste':
								H = TA
								break
							case 'gotpointercapture':
							case 'lostpointercapture':
							case 'pointercancel':
							case 'pointerdown':
							case 'pointermove':
							case 'pointerout':
							case 'pointerover':
							case 'pointerup':
								H = vp
						}
						var x = (r & 4) !== 0,
							w = !x && e === 'scroll',
							V = x ? (m !== null ? m + 'Capture' : null) : m
						x = []
						for (var M = h, S; M !== null; ) {
							S = M
							var k = S.stateNode
							if (
								(S.tag === 5 &&
									k !== null &&
									((S = k), V !== null && ((k = q7(M, V)), k != null && x.push(Q7(M, k, S)))),
								w)
							)
								break
							M = M.return
						}
						0 < x.length && ((m = new H(m, L, null, t, v)), g.push({ event: m, listeners: x }))
					}
				}
				if ((r & 7) === 0) {
					e: {
						if (
							((m = e === 'mouseover' || e === 'pointerover'),
							(H = e === 'mouseout' || e === 'pointerout'),
							m && t !== Wo && (L = t.relatedTarget || t.fromElement) && (P5(L) || L[h6]))
						)
							break e
						if (
							(H || m) &&
							((m = v.window === v ? v : (m = v.ownerDocument) ? m.defaultView || m.parentWindow : window),
							H
								? ((L = t.relatedTarget || t.toElement),
								  (H = h),
								  (L = L ? P5(L) : null),
								  L !== null && ((w = B5(L)), L !== w || (L.tag !== 5 && L.tag !== 6)) && (L = null))
								: ((H = null), (L = h)),
							H !== L)
						) {
							if (
								((x = pp),
								(k = 'onMouseLeave'),
								(V = 'onMouseEnter'),
								(M = 'mouse'),
								(e === 'pointerout' || e === 'pointerover') &&
									((x = vp), (k = 'onPointerLeave'), (V = 'onPointerEnter'), (M = 'pointer')),
								(w = H == null ? m : E8(H)),
								(S = L == null ? m : E8(L)),
								(m = new x(k, M + 'leave', H, t, v)),
								(m.target = w),
								(m.relatedTarget = S),
								(k = null),
								P5(v) === h &&
									((x = new x(V, M + 'enter', L, t, v)), (x.target = S), (x.relatedTarget = w), (k = x)),
								(w = k),
								H && L)
							)
								r: {
									for (x = H, V = L, M = 0, S = x; S; S = w8(S)) M++
									for (S = 0, k = V; k; k = w8(k)) S++
									for (; 0 < M - S; ) (x = w8(x)), M--
									for (; 0 < S - M; ) (V = w8(V)), S--
									for (; M--; ) {
										if (x === V || (V !== null && x === V.alternate)) break r
										;(x = w8(x)), (V = w8(V))
									}
									x = null
								}
							else x = null
							H !== null && Np(g, m, H, x, !1), L !== null && w !== null && Np(g, w, L, x, !0)
						}
					}
					e: {
						if (
							((m = h ? E8(h) : window),
							(H = m.nodeName && m.nodeName.toLowerCase()),
							H === 'select' || (H === 'input' && m.type === 'file'))
						)
							var D = rE
						else if (gp(m))
							if (Gd) D = iE
							else {
								D = nE
								var b = tE
							}
						else
							(H = m.nodeName) &&
								H.toLowerCase() === 'input' &&
								(m.type === 'checkbox' || m.type === 'radio') &&
								(D = aE)
						if (D && (D = D(e, h))) {
							jd(g, D, t, v)
							break e
						}
						b && b(e, m, h),
							e === 'focusout' &&
								(b = m._wrapperState) &&
								b.controlled &&
								m.type === 'number' &&
								Bo(m, 'number', m.value)
					}
					switch (((b = h ? E8(h) : window), e)) {
						case 'focusin':
							;(gp(b) || b.contentEditable === 'true') && ((P8 = b), ($o = h), (O7 = null))
							break
						case 'focusout':
							O7 = $o = P8 = null
							break
						case 'mousedown':
							ec = !0
							break
						case 'contextmenu':
						case 'mouseup':
						case 'dragend':
							;(ec = !1), Vp(g, t, v)
							break
						case 'selectionchange':
							if (CE) break
						case 'keydown':
						case 'keyup':
							Vp(g, t, v)
					}
					var I
					if (bc)
						e: {
							switch (e) {
								case 'compositionstart':
									var B = 'onCompositionStart'
									break e
								case 'compositionend':
									B = 'onCompositionEnd'
									break e
								case 'compositionupdate':
									B = 'onCompositionUpdate'
									break e
							}
							B = void 0
						}
					else
						k8
							? qd(e, t) && (B = 'onCompositionEnd')
							: e === 'keydown' && t.keyCode === 229 && (B = 'onCompositionStart')
					B &&
						(Bd &&
							t.locale !== 'ko' &&
							(k8 || B !== 'onCompositionStart'
								? B === 'onCompositionEnd' && k8 && (I = Id())
								: ((U6 = v), (Rc = 'value' in U6 ? U6.value : U6.textContent), (k8 = !0))),
						(b = Yr(h, B)),
						0 < b.length &&
							((B = new dp(B, e, null, t, v)),
							g.push({ event: B, listeners: b }),
							I ? (B.data = I) : ((I = Ud(t)), I !== null && (B.data = I)))),
						(I = XA ? JA(e, t) : ZA(e, t)) &&
							((h = Yr(h, 'onBeforeInput')),
							0 < h.length &&
								((v = new dp('onBeforeInput', 'beforeinput', null, t, v)),
								g.push({ event: v, listeners: h }),
								(v.data = I)))
				}
				rv(g, r)
			})
		}
		function Q7(e, r, t) {
			return { instance: e, listener: r, currentTarget: t }
		}
		function Yr(e, r) {
			for (var t = r + 'Capture', n = []; e !== null; ) {
				var i = e,
					c = i.stateNode
				i.tag === 5 &&
					c !== null &&
					((i = c),
					(c = q7(e, t)),
					c != null && n.unshift(Q7(e, c, i)),
					(c = q7(e, r)),
					c != null && n.push(Q7(e, c, i))),
					(e = e.return)
			}
			return n
		}
		function w8(e) {
			if (e === null) return null
			do e = e.return
			while (e && e.tag !== 5)
			return e || null
		}
		function Np(e, r, t, n, i) {
			for (var c = r._reactName, C = []; t !== null && t !== n; ) {
				var l = t,
					u = l.alternate,
					h = l.stateNode
				if (u !== null && u === n) break
				l.tag === 5 &&
					h !== null &&
					((l = h),
					i
						? ((u = q7(t, c)), u != null && C.unshift(Q7(t, u, l)))
						: i || ((u = q7(t, c)), u != null && C.push(Q7(t, u, l)))),
					(t = t.return)
			}
			C.length !== 0 && e.push({ event: r, listeners: C })
		}
		var lE = /\r\n?/g,
			fE = /\u0000|\uFFFD/g
		function _p(e) {
			return (typeof e == 'string' ? e : '' + e)
				.replace(
					lE,
					`
`,
				)
				.replace(fE, '')
		}
		function Vr(e, r, t) {
			if (((r = _p(r)), _p(e) !== r && t)) throw Error(U(425))
		}
		function Kr() {}
		var rc = null
		function tc(e, r) {
			return (
				e === 'textarea' ||
				e === 'noscript' ||
				typeof r.children == 'string' ||
				typeof r.children == 'number' ||
				(typeof r.dangerouslySetInnerHTML == 'object' &&
					r.dangerouslySetInnerHTML !== null &&
					r.dangerouslySetInnerHTML.__html != null)
			)
		}
		var nc = typeof setTimeout == 'function' ? setTimeout : void 0,
			uE = typeof clearTimeout == 'function' ? clearTimeout : void 0,
			kp = typeof Promise == 'function' ? Promise : void 0,
			hE =
				typeof queueMicrotask == 'function'
					? queueMicrotask
					: typeof kp < 'u'
					? function (e) {
							return kp.resolve(null).then(e).catch(pE)
					  }
					: nc
		function pE(e) {
			setTimeout(function () {
				throw e
			})
		}
		function So(e, r) {
			var t = r,
				n = 0
			do {
				var i = t.nextSibling
				if ((e.removeChild(t), i && i.nodeType === 8))
					if (((t = i.data), t === '/$')) {
						if (n === 0) {
							e.removeChild(i), G7(r)
							return
						}
						n--
					} else (t !== '$' && t !== '$?' && t !== '$!') || n++
				t = i
			} while (t)
			G7(r)
		}
		function C6(e) {
			for (; e != null; e = e.nextSibling) {
				var r = e.nodeType
				if (r === 1 || r === 3) break
				if (r === 8) {
					if (((r = e.data), r === '$' || r === '$!' || r === '$?')) break
					if (r === '/$') return null
				}
			}
			return e
		}
		function Pp(e) {
			e = e.previousSibling
			for (var r = 0; e; ) {
				if (e.nodeType === 8) {
					var t = e.data
					if (t === '$' || t === '$!' || t === '$?') {
						if (r === 0) return e
						r--
					} else t === '/$' && r++
				}
				e = e.previousSibling
			}
			return null
		}
		var e0 = Math.random().toString(36).slice(2),
			U4 = '__reactFiber$' + e0,
			X7 = '__reactProps$' + e0,
			h6 = '__reactContainer$' + e0,
			ac = '__reactEvents$' + e0,
			dE = '__reactListeners$' + e0,
			vE = '__reactHandles$' + e0
		function P5(e) {
			var r = e[U4]
			if (r) return r
			for (var t = e.parentNode; t; ) {
				if ((r = t[h6] || t[U4])) {
					if (((t = r.alternate), r.child !== null || (t !== null && t.child !== null)))
						for (e = Pp(e); e !== null; ) {
							if ((t = e[U4])) return t
							e = Pp(e)
						}
					return r
				}
				;(e = t), (t = e.parentNode)
			}
			return null
		}
		function oe(e) {
			return (e = e[U4] || e[h6]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
		}
		function E8(e) {
			if (e.tag === 5 || e.tag === 6) return e.stateNode
			throw Error(U(33))
		}
		function vt(e) {
			return e[X7] || null
		}
		var ic = [],
			T8 = -1
		function r5(e) {
			return { current: e }
		}
		function J2(e) {
			0 > T8 || ((e.current = ic[T8]), (ic[T8] = null), T8--)
		}
		function G2(e, r) {
			T8++, (ic[T8] = e.current), (e.current = r)
		}
		var Z6 = {},
			n3 = r5(Z6),
			S3 = r5(!1),
			D5 = Z6
		function W8(e, r) {
			var t = e.type.contextTypes
			if (!t) return Z6
			var n = e.stateNode
			if (n && n.__reactInternalMemoizedUnmaskedChildContext === r)
				return n.__reactInternalMemoizedMaskedChildContext
			var i = {},
				c
			for (c in t) i[c] = r[c]
			return (
				n &&
					((e = e.stateNode),
					(e.__reactInternalMemoizedUnmaskedChildContext = r),
					(e.__reactInternalMemoizedMaskedChildContext = i)),
				i
			)
		}
		function x3(e) {
			return (e = e.childContextTypes), e != null
		}
		function Qr() {
			J2(S3), J2(n3)
		}
		function Ap(e, r, t) {
			if (n3.current !== Z6) throw Error(U(168))
			G2(n3, r), G2(S3, t)
		}
		function nv(e, r, t) {
			var n = e.stateNode
			if (((r = r.childContextTypes), typeof n.getChildContext != 'function')) return t
			n = n.getChildContext()
			for (var i in n) if (!(i in r)) throw Error(U(108, tA(e) || 'Unknown', i))
			return o1({}, t, n)
		}
		function Xr(e) {
			return (
				(e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Z6),
				(D5 = n3.current),
				G2(n3, e),
				G2(S3, S3.current),
				!0
			)
		}
		function Ep(e, r, t) {
			var n = e.stateNode
			if (!n) throw Error(U(169))
			t
				? ((e = nv(e, r, D5)), (n.__reactInternalMemoizedMergedChildContext = e), J2(S3), J2(n3), G2(n3, e))
				: J2(S3),
				G2(S3, t)
		}
		var c6 = null,
			mt = !1,
			xo = !1
		function av(e) {
			c6 === null ? (c6 = [e]) : c6.push(e)
		}
		function mE(e) {
			;(mt = !0), av(e)
		}
		function t5() {
			if (!xo && c6 !== null) {
				xo = !0
				var e = 0,
					r = R2
				try {
					var t = c6
					for (R2 = 1; e < t.length; e++) {
						var n = t[e]
						do n = n(!0)
						while (n !== null)
					}
					;(c6 = null), (mt = !1)
				} catch (i) {
					throw (c6 !== null && (c6 = c6.slice(e + 1)), kd(Pc, t5), i)
				} finally {
					;(R2 = r), (xo = !1)
				}
			}
			return null
		}
		var LE = d6.ReactCurrentBatchConfig
		function z4(e, r) {
			if (e && e.defaultProps) {
				;(r = o1({}, r)), (e = e.defaultProps)
				for (var t in e) r[t] === void 0 && (r[t] = e[t])
				return r
			}
			return r
		}
		var Jr = r5(null),
			Zr = null,
			R8 = null,
			Ic = null
		function Bc() {
			Ic = R8 = Zr = null
		}
		function qc(e) {
			var r = Jr.current
			J2(Jr), (e._currentValue = r)
		}
		function oc(e, r, t) {
			for (; e !== null; ) {
				var n = e.alternate
				if (
					((e.childLanes & r) !== r
						? ((e.childLanes |= r), n !== null && (n.childLanes |= r))
						: n !== null && (n.childLanes & r) !== r && (n.childLanes |= r),
					e === t)
				)
					break
				e = e.return
			}
		}
		function U8(e, r) {
			;(Zr = e),
				(Ic = R8 = null),
				(e = e.dependencies),
				e !== null && e.firstContext !== null && ((e.lanes & r) !== 0 && (R3 = !0), (e.firstContext = null))
		}
		function o4(e) {
			var r = e._currentValue
			if (Ic !== e)
				if (((e = { context: e, memoizedValue: r, next: null }), R8 === null)) {
					if (Zr === null) throw Error(U(308))
					;(R8 = e), (Zr.dependencies = { lanes: 0, firstContext: e })
				} else R8 = R8.next = e
			return r
		}
		var j4 = null,
			I6 = !1
		function Uc(e) {
			e.updateQueue = {
				baseState: e.memoizedState,
				firstBaseUpdate: null,
				lastBaseUpdate: null,
				shared: { pending: null, interleaved: null, lanes: 0 },
				effects: null,
			}
		}
		function iv(e, r) {
			;(e = e.updateQueue),
				r.updateQueue === e &&
					(r.updateQueue = {
						baseState: e.baseState,
						firstBaseUpdate: e.firstBaseUpdate,
						lastBaseUpdate: e.lastBaseUpdate,
						shared: e.shared,
						effects: e.effects,
					})
		}
		function f6(e, r) {
			return { eventTime: e, lane: r, tag: 0, payload: null, callback: null, next: null }
		}
		function K6(e, r) {
			var t = e.updateQueue
			t !== null &&
				((t = t.shared),
				M1 !== null && (e.mode & 1) !== 0 && (N2 & 2) === 0
					? ((e = t.interleaved),
					  e === null ? ((r.next = r), j4 === null ? (j4 = [t]) : j4.push(t)) : ((r.next = e.next), (e.next = r)),
					  (t.interleaved = r))
					: ((e = t.pending), e === null ? (r.next = r) : ((r.next = e.next), (e.next = r)), (t.pending = r)))
		}
		function Rr(e, r, t) {
			if (((r = r.updateQueue), r !== null && ((r = r.shared), (t & 4194240) !== 0))) {
				var n = r.lanes
				;(n &= e.pendingLanes), (t |= n), (r.lanes = t), Ac(e, t)
			}
		}
		function Tp(e, r) {
			var t = e.updateQueue,
				n = e.alternate
			if (n !== null && ((n = n.updateQueue), t === n)) {
				var i = null,
					c = null
				if (((t = t.firstBaseUpdate), t !== null)) {
					do {
						var C = {
							eventTime: t.eventTime,
							lane: t.lane,
							tag: t.tag,
							payload: t.payload,
							callback: t.callback,
							next: null,
						}
						c === null ? (i = c = C) : (c = c.next = C), (t = t.next)
					} while (t !== null)
					c === null ? (i = c = r) : (c = c.next = r)
				} else i = c = r
				;(t = {
					baseState: n.baseState,
					firstBaseUpdate: i,
					lastBaseUpdate: c,
					shared: n.shared,
					effects: n.effects,
				}),
					(e.updateQueue = t)
				return
			}
			;(e = t.lastBaseUpdate), e === null ? (t.firstBaseUpdate = r) : (e.next = r), (t.lastBaseUpdate = r)
		}
		function $r(e, r, t, n) {
			var i = e.updateQueue
			I6 = !1
			var c = i.firstBaseUpdate,
				C = i.lastBaseUpdate,
				l = i.shared.pending
			if (l !== null) {
				i.shared.pending = null
				var u = l,
					h = u.next
				;(u.next = null), C === null ? (c = h) : (C.next = h), (C = u)
				var v = e.alternate
				v !== null &&
					((v = v.updateQueue),
					(l = v.lastBaseUpdate),
					l !== C && (l === null ? (v.firstBaseUpdate = h) : (l.next = h), (v.lastBaseUpdate = u)))
			}
			if (c !== null) {
				var g = i.baseState
				;(C = 0), (v = h = u = null), (l = c)
				do {
					var m = l.lane,
						H = l.eventTime
					if ((n & m) === m) {
						v !== null &&
							(v = v.next =
								{ eventTime: H, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null })
						e: {
							var L = e,
								x = l
							switch (((m = r), (H = t), x.tag)) {
								case 1:
									if (((L = x.payload), typeof L == 'function')) {
										g = L.call(H, g, m)
										break e
									}
									g = L
									break e
								case 3:
									L.flags = (L.flags & -65537) | 128
								case 0:
									if (((L = x.payload), (m = typeof L == 'function' ? L.call(H, g, m) : L), m == null)) break e
									g = o1({}, g, m)
									break e
								case 2:
									I6 = !0
							}
						}
						l.callback !== null &&
							l.lane !== 0 &&
							((e.flags |= 64), (m = i.effects), m === null ? (i.effects = [l]) : m.push(l))
					} else
						(H = { eventTime: H, lane: m, tag: l.tag, payload: l.payload, callback: l.callback, next: null }),
							v === null ? ((h = v = H), (u = g)) : (v = v.next = H),
							(C |= m)
					if (((l = l.next), l === null)) {
						if (((l = i.shared.pending), l === null)) break
						;(m = l), (l = m.next), (m.next = null), (i.lastBaseUpdate = m), (i.shared.pending = null)
					}
				} while (1)
				if (
					(v === null && (u = g),
					(i.baseState = u),
					(i.firstBaseUpdate = h),
					(i.lastBaseUpdate = v),
					(r = i.shared.interleaved),
					r !== null)
				) {
					i = r
					do (C |= i.lane), (i = i.next)
					while (i !== r)
				} else c === null && (i.shared.lanes = 0)
				;(J8 |= C), (e.lanes = C), (e.memoizedState = g)
			}
		}
		function Rp(e, r, t) {
			if (((e = r.effects), (r.effects = null), e !== null))
				for (r = 0; r < e.length; r++) {
					var n = e[r],
						i = n.callback
					if (i !== null) {
						if (((n.callback = null), (n = t), typeof i != 'function')) throw Error(U(191, i))
						i.call(n)
					}
				}
		}
		var ov = new sd.Component().refs
		function cc(e, r, t, n) {
			;(r = e.memoizedState),
				(t = t(n, r)),
				(t = t == null ? r : o1({}, r, t)),
				(e.memoizedState = t),
				e.lanes === 0 && (e.updateQueue.baseState = t)
		}
		var Lt = {
			isMounted: function (e) {
				return (e = e._reactInternals) ? B5(e) === e : !1
			},
			enqueueSetState: function (e, r, t) {
				e = e._reactInternals
				var n = s3(),
					i = X6(e),
					c = f6(n, i)
				;(c.payload = r), t != null && (c.callback = t), K6(e, c), (r = i4(e, i, n)), r !== null && Rr(r, e, i)
			},
			enqueueReplaceState: function (e, r, t) {
				e = e._reactInternals
				var n = s3(),
					i = X6(e),
					c = f6(n, i)
				;(c.tag = 1),
					(c.payload = r),
					t != null && (c.callback = t),
					K6(e, c),
					(r = i4(e, i, n)),
					r !== null && Rr(r, e, i)
			},
			enqueueForceUpdate: function (e, r) {
				e = e._reactInternals
				var t = s3(),
					n = X6(e),
					i = f6(t, n)
				;(i.tag = 2), r != null && (i.callback = r), K6(e, i), (r = i4(e, n, t)), r !== null && Rr(r, e, n)
			},
		}
		function Op(e, r, t, n, i, c, C) {
			return (
				(e = e.stateNode),
				typeof e.shouldComponentUpdate == 'function'
					? e.shouldComponentUpdate(n, c, C)
					: r.prototype && r.prototype.isPureReactComponent
					? !Y7(t, n) || !Y7(i, c)
					: !0
			)
		}
		function cv(e, r, t) {
			var n = !1,
				i = Z6,
				c = r.contextType
			return (
				typeof c == 'object' && c !== null
					? (c = o4(c))
					: ((i = x3(r) ? D5 : n3.current), (n = r.contextTypes), (c = (n = n != null) ? W8(e, i) : Z6)),
				(r = new r(t, c)),
				(e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null),
				(r.updater = Lt),
				(e.stateNode = r),
				(r._reactInternals = e),
				n &&
					((e = e.stateNode),
					(e.__reactInternalMemoizedUnmaskedChildContext = i),
					(e.__reactInternalMemoizedMaskedChildContext = c)),
				r
			)
		}
		function Dp(e, r, t, n) {
			;(e = r.state),
				typeof r.componentWillReceiveProps == 'function' && r.componentWillReceiveProps(t, n),
				typeof r.UNSAFE_componentWillReceiveProps == 'function' && r.UNSAFE_componentWillReceiveProps(t, n),
				r.state !== e && Lt.enqueueReplaceState(r, r.state, null)
		}
		function Cc(e, r, t, n) {
			var i = e.stateNode
			;(i.props = t), (i.state = e.memoizedState), (i.refs = ov), Uc(e)
			var c = r.contextType
			typeof c == 'object' && c !== null
				? (i.context = o4(c))
				: ((c = x3(r) ? D5 : n3.current), (i.context = W8(e, c))),
				(i.state = e.memoizedState),
				(c = r.getDerivedStateFromProps),
				typeof c == 'function' && (cc(e, r, c, t), (i.state = e.memoizedState)),
				typeof r.getDerivedStateFromProps == 'function' ||
					typeof i.getSnapshotBeforeUpdate == 'function' ||
					(typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
					((r = i.state),
					typeof i.componentWillMount == 'function' && i.componentWillMount(),
					typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
					r !== i.state && Lt.enqueueReplaceState(i, i.state, null),
					$r(e, t, i, n),
					(i.state = e.memoizedState)),
				typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
		}
		var O8 = [],
			D8 = 0,
			et = null,
			rt = 0,
			e4 = [],
			r4 = 0,
			b5 = null,
			s6 = 1,
			l6 = ''
		function _5(e, r) {
			;(O8[D8++] = rt), (O8[D8++] = et), (et = e), (rt = r)
		}
		function Cv(e, r, t) {
			;(e4[r4++] = s6), (e4[r4++] = l6), (e4[r4++] = b5), (b5 = e)
			var n = s6
			e = l6
			var i = 32 - V4(n) - 1
			;(n &= ~(1 << i)), (t += 1)
			var c = 32 - V4(r) + i
			if (30 < c) {
				var C = i - (i % 5)
				;(c = (n & ((1 << C) - 1)).toString(32)),
					(n >>= C),
					(i -= C),
					(s6 = (1 << (32 - V4(r) + i)) | (t << i) | n),
					(l6 = c + e)
			} else (s6 = (1 << c) | (t << i) | n), (l6 = e)
		}
		function jc(e) {
			e.return !== null && (_5(e, 1), Cv(e, 1, 0))
		}
		function Gc(e) {
			for (; e === et; ) (et = O8[--D8]), (O8[D8] = null), (rt = O8[--D8]), (O8[D8] = null)
			for (; e === b5; )
				(b5 = e4[--r4]), (e4[r4] = null), (l6 = e4[--r4]), (e4[r4] = null), (s6 = e4[--r4]), (e4[r4] = null)
		}
		var O3 = null,
			V3 = null,
			e1 = !1,
			H4 = null
		function sv(e, r) {
			var t = t4(5, null, null, 0)
			;(t.elementType = 'DELETED'),
				(t.stateNode = r),
				(t.return = e),
				(r = e.deletions),
				r === null ? ((e.deletions = [t]), (e.flags |= 16)) : r.push(t)
		}
		function bp(e, r) {
			switch (e.tag) {
				case 5:
					var t = e.type
					return (
						(r = r.nodeType !== 1 || t.toLowerCase() !== r.nodeName.toLowerCase() ? null : r),
						r !== null ? ((e.stateNode = r), (O3 = e), (V3 = C6(r.firstChild)), !0) : !1
					)
				case 6:
					return (
						(r = e.pendingProps === '' || r.nodeType !== 3 ? null : r),
						r !== null ? ((e.stateNode = r), (O3 = e), (V3 = null), !0) : !1
					)
				case 13:
					return (
						(r = r.nodeType !== 8 ? null : r),
						r !== null
							? ((t = b5 !== null ? { id: s6, overflow: l6 } : null),
							  (e.memoizedState = { dehydrated: r, treeContext: t, retryLane: 1073741824 }),
							  (t = t4(18, null, null, 0)),
							  (t.stateNode = r),
							  (t.return = e),
							  (e.child = t),
							  (O3 = e),
							  (V3 = null),
							  !0)
							: !1
					)
				default:
					return !1
			}
		}
		function sc(e) {
			return (e.mode & 1) !== 0 && (e.flags & 128) === 0
		}
		function lc(e) {
			if (e1) {
				var r = V3
				if (r) {
					var t = r
					if (!bp(e, r)) {
						if (sc(e)) throw Error(U(418))
						r = C6(t.nextSibling)
						var n = O3
						r && bp(e, r) ? sv(n, t) : ((e.flags = (e.flags & -4097) | 2), (e1 = !1), (O3 = e))
					}
				} else {
					if (sc(e)) throw Error(U(418))
					;(e.flags = (e.flags & -4097) | 2), (e1 = !1), (O3 = e)
				}
			}
		}
		function Fp(e) {
			for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return
			O3 = e
		}
		function V7(e) {
			if (e !== O3) return !1
			if (!e1) return Fp(e), (e1 = !0), !1
			var r
			if (
				((r = e.tag !== 3) &&
					!(r = e.tag !== 5) &&
					((r = e.type), (r = r !== 'head' && r !== 'body' && !tc(e.type, e.memoizedProps))),
				r && (r = V3))
			) {
				if (sc(e)) {
					for (e = V3; e; ) e = C6(e.nextSibling)
					throw Error(U(418))
				}
				for (; r; ) sv(e, r), (r = C6(r.nextSibling))
			}
			if ((Fp(e), e.tag === 13)) {
				if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(U(317))
				e: {
					for (e = e.nextSibling, r = 0; e; ) {
						if (e.nodeType === 8) {
							var t = e.data
							if (t === '/$') {
								if (r === 0) {
									V3 = C6(e.nextSibling)
									break e
								}
								r--
							} else (t !== '$' && t !== '$!' && t !== '$?') || r++
						}
						e = e.nextSibling
					}
					V3 = null
				}
			} else V3 = O3 ? C6(e.stateNode.nextSibling) : null
			return !0
		}
		function Y8() {
			;(V3 = O3 = null), (e1 = !1)
		}
		function Wc(e) {
			H4 === null ? (H4 = [e]) : H4.push(e)
		}
		function y7(e, r, t) {
			if (((e = t.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
				if (t._owner) {
					if (((t = t._owner), t)) {
						if (t.tag !== 1) throw Error(U(309))
						var n = t.stateNode
					}
					if (!n) throw Error(U(147, e))
					var i = n,
						c = '' + e
					return r !== null && r.ref !== null && typeof r.ref == 'function' && r.ref._stringRef === c
						? r.ref
						: ((r = function (C) {
								var l = i.refs
								l === ov && (l = i.refs = {}), C === null ? delete l[c] : (l[c] = C)
						  }),
						  (r._stringRef = c),
						  r)
				}
				if (typeof e != 'string') throw Error(U(284))
				if (!t._owner) throw Error(U(290, e))
			}
			return e
		}
		function yr(e, r) {
			throw (
				((e = Object.prototype.toString.call(r)),
				Error(U(31, e === '[object Object]' ? 'object with keys {' + Object.keys(r).join(', ') + '}' : e)))
			)
		}
		function Ip(e) {
			var r = e._init
			return r(e._payload)
		}
		function lv(e) {
			function r(V, M) {
				if (e) {
					var S = V.deletions
					S === null ? ((V.deletions = [M]), (V.flags |= 16)) : S.push(M)
				}
			}
			function t(V, M) {
				if (!e) return null
				for (; M !== null; ) r(V, M), (M = M.sibling)
				return null
			}
			function n(V, M) {
				for (V = new Map(); M !== null; ) M.key !== null ? V.set(M.key, M) : V.set(M.index, M), (M = M.sibling)
				return V
			}
			function i(V, M) {
				return (V = $6(V, M)), (V.index = 0), (V.sibling = null), V
			}
			function c(V, M, S) {
				return (
					(V.index = S),
					e
						? ((S = V.alternate),
						  S !== null ? ((S = S.index), S < M ? ((V.flags |= 2), M) : S) : ((V.flags |= 2), M))
						: ((V.flags |= 1048576), M)
				)
			}
			function C(V) {
				return e && V.alternate === null && (V.flags |= 2), V
			}
			function l(V, M, S, k) {
				return M === null || M.tag !== 6
					? ((M = Ao(S, V.mode, k)), (M.return = V), M)
					: ((M = i(M, S)), (M.return = V), M)
			}
			function u(V, M, S, k) {
				var D = S.type
				return D === _8
					? v(V, M, S.props.children, k, S.key)
					: M !== null &&
					  (M.elementType === D || (typeof D == 'object' && D !== null && D.$$typeof === F6 && Ip(D) === M.type))
					? ((k = i(M, S.props)), (k.ref = y7(V, M, S)), (k.return = V), k)
					: ((k = Ir(S.type, S.key, S.props, null, V.mode, k)), (k.ref = y7(V, M, S)), (k.return = V), k)
			}
			function h(V, M, S, k) {
				return M === null ||
					M.tag !== 4 ||
					M.stateNode.containerInfo !== S.containerInfo ||
					M.stateNode.implementation !== S.implementation
					? ((M = Eo(S, V.mode, k)), (M.return = V), M)
					: ((M = i(M, S.children || [])), (M.return = V), M)
			}
			function v(V, M, S, k, D) {
				return M === null || M.tag !== 7
					? ((M = O5(S, V.mode, k, D)), (M.return = V), M)
					: ((M = i(M, S)), (M.return = V), M)
			}
			function g(V, M, S) {
				if ((typeof M == 'string' && M !== '') || typeof M == 'number')
					return (M = Ao('' + M, V.mode, S)), (M.return = V), M
				if (typeof M == 'object' && M !== null) {
					switch (M.$$typeof) {
						case lr:
							return (
								(S = Ir(M.type, M.key, M.props, null, V.mode, S)), (S.ref = y7(V, null, M)), (S.return = V), S
							)
						case N8:
							return (M = Eo(M, V.mode, S)), (M.return = V), M
						case F6:
							var k = M._init
							return g(V, k(M._payload), S)
					}
					if (_7(M) || g7(M)) return (M = O5(M, V.mode, S, null)), (M.return = V), M
					yr(V, M)
				}
				return null
			}
			function m(V, M, S, k) {
				var D = M !== null ? M.key : null
				if ((typeof S == 'string' && S !== '') || typeof S == 'number')
					return D !== null ? null : l(V, M, '' + S, k)
				if (typeof S == 'object' && S !== null) {
					switch (S.$$typeof) {
						case lr:
							return S.key === D ? u(V, M, S, k) : null
						case N8:
							return S.key === D ? h(V, M, S, k) : null
						case F6:
							return (D = S._init), m(V, M, D(S._payload), k)
					}
					if (_7(S) || g7(S)) return D !== null ? null : v(V, M, S, k, null)
					yr(V, S)
				}
				return null
			}
			function H(V, M, S, k, D) {
				if ((typeof k == 'string' && k !== '') || typeof k == 'number')
					return (V = V.get(S) || null), l(M, V, '' + k, D)
				if (typeof k == 'object' && k !== null) {
					switch (k.$$typeof) {
						case lr:
							return (V = V.get(k.key === null ? S : k.key) || null), u(M, V, k, D)
						case N8:
							return (V = V.get(k.key === null ? S : k.key) || null), h(M, V, k, D)
						case F6:
							var b = k._init
							return H(V, M, S, b(k._payload), D)
					}
					if (_7(k) || g7(k)) return (V = V.get(S) || null), v(M, V, k, D, null)
					yr(M, k)
				}
				return null
			}
			function L(V, M, S, k) {
				for (var D = null, b = null, I = M, B = (M = 0), s2 = null; I !== null && B < S.length; B++) {
					I.index > B ? ((s2 = I), (I = null)) : (s2 = I.sibling)
					var Y = m(V, I, S[B], k)
					if (Y === null) {
						I === null && (I = s2)
						break
					}
					e && I && Y.alternate === null && r(V, I),
						(M = c(Y, M, B)),
						b === null ? (D = Y) : (b.sibling = Y),
						(b = Y),
						(I = s2)
				}
				if (B === S.length) return t(V, I), e1 && _5(V, B), D
				if (I === null) {
					for (; B < S.length; B++)
						(I = g(V, S[B], k)), I !== null && ((M = c(I, M, B)), b === null ? (D = I) : (b.sibling = I), (b = I))
					return e1 && _5(V, B), D
				}
				for (I = n(V, I); B < S.length; B++)
					(s2 = H(I, V, B, S[B], k)),
						s2 !== null &&
							(e && s2.alternate !== null && I.delete(s2.key === null ? B : s2.key),
							(M = c(s2, M, B)),
							b === null ? (D = s2) : (b.sibling = s2),
							(b = s2))
				return (
					e &&
						I.forEach(function (d2) {
							return r(V, d2)
						}),
					e1 && _5(V, B),
					D
				)
			}
			function x(V, M, S, k) {
				var D = g7(S)
				if (typeof D != 'function') throw Error(U(150))
				if (((S = D.call(S)), S == null)) throw Error(U(151))
				for (
					var b = (D = null), I = M, B = (M = 0), s2 = null, Y = S.next();
					I !== null && !Y.done;
					B++, Y = S.next()
				) {
					I.index > B ? ((s2 = I), (I = null)) : (s2 = I.sibling)
					var d2 = m(V, I, Y.value, k)
					if (d2 === null) {
						I === null && (I = s2)
						break
					}
					e && I && d2.alternate === null && r(V, I),
						(M = c(d2, M, B)),
						b === null ? (D = d2) : (b.sibling = d2),
						(b = d2),
						(I = s2)
				}
				if (Y.done) return t(V, I), e1 && _5(V, B), D
				if (I === null) {
					for (; !Y.done; B++, Y = S.next())
						(Y = g(V, Y.value, k)),
							Y !== null && ((M = c(Y, M, B)), b === null ? (D = Y) : (b.sibling = Y), (b = Y))
					return e1 && _5(V, B), D
				}
				for (I = n(V, I); !Y.done; B++, Y = S.next())
					(Y = H(I, V, B, Y.value, k)),
						Y !== null &&
							(e && Y.alternate !== null && I.delete(Y.key === null ? B : Y.key),
							(M = c(Y, M, B)),
							b === null ? (D = Y) : (b.sibling = Y),
							(b = Y))
				return (
					e &&
						I.forEach(function (_2) {
							return r(V, _2)
						}),
					e1 && _5(V, B),
					D
				)
			}
			function w(V, M, S, k) {
				if (
					(typeof S == 'object' && S !== null && S.type === _8 && S.key === null && (S = S.props.children),
					typeof S == 'object' && S !== null)
				) {
					switch (S.$$typeof) {
						case lr:
							e: {
								for (var D = S.key, b = M; b !== null; ) {
									if (b.key === D) {
										if (((D = S.type), D === _8)) {
											if (b.tag === 7) {
												t(V, b.sibling), (M = i(b, S.props.children)), (M.return = V), (V = M)
												break e
											}
										} else if (
											b.elementType === D ||
											(typeof D == 'object' && D !== null && D.$$typeof === F6 && Ip(D) === b.type)
										) {
											t(V, b.sibling), (M = i(b, S.props)), (M.ref = y7(V, b, S)), (M.return = V), (V = M)
											break e
										}
										t(V, b)
										break
									} else r(V, b)
									b = b.sibling
								}
								S.type === _8
									? ((M = O5(S.props.children, V.mode, k, S.key)), (M.return = V), (V = M))
									: ((k = Ir(S.type, S.key, S.props, null, V.mode, k)),
									  (k.ref = y7(V, M, S)),
									  (k.return = V),
									  (V = k))
							}
							return C(V)
						case N8:
							e: {
								for (b = S.key; M !== null; ) {
									if (M.key === b)
										if (
											M.tag === 4 &&
											M.stateNode.containerInfo === S.containerInfo &&
											M.stateNode.implementation === S.implementation
										) {
											t(V, M.sibling), (M = i(M, S.children || [])), (M.return = V), (V = M)
											break e
										} else {
											t(V, M)
											break
										}
									else r(V, M)
									M = M.sibling
								}
								;(M = Eo(S, V.mode, k)), (M.return = V), (V = M)
							}
							return C(V)
						case F6:
							return (b = S._init), w(V, M, b(S._payload), k)
					}
					if (_7(S)) return L(V, M, S, k)
					if (g7(S)) return x(V, M, S, k)
					yr(V, S)
				}
				return (typeof S == 'string' && S !== '') || typeof S == 'number'
					? ((S = '' + S),
					  M !== null && M.tag === 6
							? (t(V, M.sibling), (M = i(M, S)), (M.return = V), (V = M))
							: (t(V, M), (M = Ao(S, V.mode, k)), (M.return = V), (V = M)),
					  C(V))
					: t(V, M)
			}
			return w
		}
		var K8 = lv(!0),
			fv = lv(!1),
			ce = {},
			W4 = r5(ce),
			J7 = r5(ce),
			Z7 = r5(ce)
		function A5(e) {
			if (e === ce) throw Error(U(174))
			return e
		}
		function Yc(e, r) {
			switch ((G2(Z7, r), G2(J7, e), G2(W4, ce), (e = r.nodeType), e)) {
				case 9:
				case 11:
					r = (r = r.documentElement) ? r.namespaceURI : Uo(null, '')
					break
				default:
					;(e = e === 8 ? r.parentNode : r), (r = e.namespaceURI || null), (e = e.tagName), (r = Uo(r, e))
			}
			J2(W4), G2(W4, r)
		}
		function Q8() {
			J2(W4), J2(J7), J2(Z7)
		}
		function uv(e) {
			A5(Z7.current)
			var r = A5(W4.current),
				t = Uo(r, e.type)
			r !== t && (G2(J7, e), G2(W4, t))
		}
		function Kc(e) {
			J7.current === e && (J2(W4), J2(J7))
		}
		var i1 = r5(0)
		function tt(e) {
			for (var r = e; r !== null; ) {
				if (r.tag === 13) {
					var t = r.memoizedState
					if (t !== null && ((t = t.dehydrated), t === null || t.data === '$?' || t.data === '$!')) return r
				} else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
					if ((r.flags & 128) !== 0) return r
				} else if (r.child !== null) {
					;(r.child.return = r), (r = r.child)
					continue
				}
				if (r === e) break
				for (; r.sibling === null; ) {
					if (r.return === null || r.return === e) return null
					r = r.return
				}
				;(r.sibling.return = r.return), (r = r.sibling)
			}
			return null
		}
		var wo = []
		function Qc() {
			for (var e = 0; e < wo.length; e++) wo[e]._workInProgressVersionPrimary = null
			wo.length = 0
		}
		var Or = d6.ReactCurrentDispatcher,
			n4 = d6.ReactCurrentBatchConfig,
			X8 = 0,
			f1 = null,
			t3 = null,
			R1 = null,
			nt = !1,
			D7 = !1,
			$7 = 0,
			gE = 0
		function e3() {
			throw Error(U(321))
		}
		function Xc(e, r) {
			if (r === null) return !1
			for (var t = 0; t < r.length && t < e.length; t++) if (!Y4(e[t], r[t])) return !1
			return !0
		}
		function Jc(e, r, t, n, i, c) {
			if (
				((X8 = c),
				(f1 = r),
				(r.memoizedState = null),
				(r.updateQueue = null),
				(r.lanes = 0),
				(Or.current = e === null || e.memoizedState === null ? VE : yE),
				(e = t(n, i)),
				D7)
			) {
				c = 0
				do {
					if (((D7 = !1), ($7 = 0), 25 <= c)) throw Error(U(301))
					;(c += 1), (R1 = t3 = null), (r.updateQueue = null), (Or.current = SE), (e = t(n, i))
				} while (D7)
			}
			if (((Or.current = at), (r = t3 !== null && t3.next !== null), (X8 = 0), (R1 = t3 = f1 = null), (nt = !1), r))
				throw Error(U(300))
			return e
		}
		function Zc() {
			var e = $7 !== 0
			return ($7 = 0), e
		}
		function o6() {
			var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
			return R1 === null ? (f1.memoizedState = R1 = e) : (R1 = R1.next = e), R1
		}
		function K4() {
			if (t3 === null) {
				var e = f1.alternate
				e = e !== null ? e.memoizedState : null
			} else e = t3.next
			var r = R1 === null ? f1.memoizedState : R1.next
			if (r !== null) (R1 = r), (t3 = e)
			else {
				if (e === null) throw Error(U(310))
				;(t3 = e),
					(e = {
						memoizedState: t3.memoizedState,
						baseState: t3.baseState,
						baseQueue: t3.baseQueue,
						queue: t3.queue,
						next: null,
					}),
					R1 === null ? (f1.memoizedState = R1 = e) : (R1 = R1.next = e)
			}
			return R1
		}
		function T5(e, r) {
			return typeof r == 'function' ? r(e) : r
		}
		function Sr(e) {
			var r = K4(),
				t = r.queue
			if (t === null) throw Error(U(311))
			t.lastRenderedReducer = e
			var n = t3,
				i = n.baseQueue,
				c = t.pending
			if (c !== null) {
				if (i !== null) {
					var C = i.next
					;(i.next = c.next), (c.next = C)
				}
				;(n.baseQueue = i = c), (t.pending = null)
			}
			if (i !== null) {
				;(c = i.next), (n = n.baseState)
				var l = (C = null),
					u = null,
					h = c
				do {
					var v = h.lane
					if ((X8 & v) === v)
						u !== null &&
							(u = u.next =
								{
									lane: 0,
									action: h.action,
									hasEagerState: h.hasEagerState,
									eagerState: h.eagerState,
									next: null,
								}),
							(n = h.hasEagerState ? h.eagerState : e(n, h.action))
					else {
						var g = {
							lane: v,
							action: h.action,
							hasEagerState: h.hasEagerState,
							eagerState: h.eagerState,
							next: null,
						}
						u === null ? ((l = u = g), (C = n)) : (u = u.next = g), (f1.lanes |= v), (J8 |= v)
					}
					h = h.next
				} while (h !== null && h !== c)
				u === null ? (C = n) : (u.next = l),
					Y4(n, r.memoizedState) || (R3 = !0),
					(r.memoizedState = n),
					(r.baseState = C),
					(r.baseQueue = u),
					(t.lastRenderedState = n)
			}
			if (((e = t.interleaved), e !== null)) {
				i = e
				do (c = i.lane), (f1.lanes |= c), (J8 |= c), (i = i.next)
				while (i !== e)
			} else i === null && (t.lanes = 0)
			return [r.memoizedState, t.dispatch]
		}
		function xr(e) {
			var r = K4(),
				t = r.queue
			if (t === null) throw Error(U(311))
			t.lastRenderedReducer = e
			var n = t.dispatch,
				i = t.pending,
				c = r.memoizedState
			if (i !== null) {
				t.pending = null
				var C = (i = i.next)
				do (c = e(c, C.action)), (C = C.next)
				while (C !== i)
				Y4(c, r.memoizedState) || (R3 = !0),
					(r.memoizedState = c),
					r.baseQueue === null && (r.baseState = c),
					(t.lastRenderedState = c)
			}
			return [c, n]
		}
		function hv() {}
		function pv(e, r) {
			var t = f1,
				n = K4(),
				i = r(),
				c = !Y4(n.memoizedState, i)
			if (
				(c && ((n.memoizedState = i), (R3 = !0)),
				(n = n.queue),
				re(mv.bind(null, t, n, e), [e]),
				n.getSnapshot !== r || c || (R1 !== null && R1.memoizedState.tag & 1))
			) {
				if (((t.flags |= 2048), ee(9, vv.bind(null, t, n, i, r), void 0, null), M1 === null)) throw Error(U(349))
				;(X8 & 30) !== 0 || dv(t, r, i)
			}
			return i
		}
		function dv(e, r, t) {
			;(e.flags |= 16384),
				(e = { getSnapshot: r, value: t }),
				(r = f1.updateQueue),
				r === null
					? ((r = { lastEffect: null, stores: null }), (f1.updateQueue = r), (r.stores = [e]))
					: ((t = r.stores), t === null ? (r.stores = [e]) : t.push(e))
		}
		function vv(e, r, t, n) {
			;(r.value = t), (r.getSnapshot = n), Lv(r) && i4(e, 1, -1)
		}
		function mv(e, r, t) {
			return t(function () {
				Lv(r) && i4(e, 1, -1)
			})
		}
		function Lv(e) {
			var r = e.getSnapshot
			e = e.value
			try {
				var t = r()
				return !Y4(e, t)
			} catch {
				return !0
			}
		}
		function No(e) {
			var r = o6()
			return (
				typeof e == 'function' && (e = e()),
				(r.memoizedState = r.baseState = e),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: T5,
					lastRenderedState: e,
				}),
				(r.queue = e),
				(e = e.dispatch = HE.bind(null, f1, e)),
				[r.memoizedState, e]
			)
		}
		function ee(e, r, t, n) {
			return (
				(e = { tag: e, create: r, destroy: t, deps: n, next: null }),
				(r = f1.updateQueue),
				r === null
					? ((r = { lastEffect: null, stores: null }), (f1.updateQueue = r), (r.lastEffect = e.next = e))
					: ((t = r.lastEffect),
					  t === null
							? (r.lastEffect = e.next = e)
							: ((n = t.next), (t.next = e), (e.next = n), (r.lastEffect = e))),
				e
			)
		}
		function gv() {
			return K4().memoizedState
		}
		function Dr(e, r, t, n) {
			var i = o6()
			;(f1.flags |= e), (i.memoizedState = ee(1 | r, t, void 0, n === void 0 ? null : n))
		}
		function gt(e, r, t, n) {
			var i = K4()
			n = n === void 0 ? null : n
			var c = void 0
			if (t3 !== null) {
				var C = t3.memoizedState
				if (((c = C.destroy), n !== null && Xc(n, C.deps))) {
					i.memoizedState = ee(r, t, c, n)
					return
				}
			}
			;(f1.flags |= e), (i.memoizedState = ee(1 | r, t, c, n))
		}
		function _o(e, r) {
			return Dr(8390656, 8, e, r)
		}
		function re(e, r) {
			return gt(2048, 8, e, r)
		}
		function Mv(e, r) {
			return gt(4, 2, e, r)
		}
		function zv(e, r) {
			return gt(4, 4, e, r)
		}
		function Hv(e, r) {
			if (typeof r == 'function')
				return (
					(e = e()),
					r(e),
					function () {
						r(null)
					}
				)
			if (r != null)
				return (
					(e = e()),
					(r.current = e),
					function () {
						r.current = null
					}
				)
		}
		function Vv(e, r, t) {
			return (t = t != null ? t.concat([e]) : null), gt(4, 4, Hv.bind(null, r, e), t)
		}
		function $c() {}
		function yv(e, r) {
			var t = K4()
			r = r === void 0 ? null : r
			var n = t.memoizedState
			return n !== null && r !== null && Xc(r, n[1]) ? n[0] : ((t.memoizedState = [e, r]), e)
		}
		function Sv(e, r) {
			var t = K4()
			r = r === void 0 ? null : r
			var n = t.memoizedState
			return n !== null && r !== null && Xc(r, n[1]) ? n[0] : ((e = e()), (t.memoizedState = [e, r]), e)
		}
		function ME(e, r) {
			var t = R2
			;(R2 = t !== 0 && 4 > t ? t : 4), e(!0)
			var n = n4.transition
			n4.transition = {}
			try {
				e(!1), r()
			} finally {
				;(R2 = t), (n4.transition = n)
			}
		}
		function xv() {
			return K4().memoizedState
		}
		function zE(e, r, t) {
			var n = X6(e)
			;(t = { lane: n, action: t, hasEagerState: !1, eagerState: null, next: null }),
				wv(e) ? Nv(r, t) : (_v(e, r, t), (t = s3()), (e = i4(e, n, t)), e !== null && kv(e, r, n))
		}
		function HE(e, r, t) {
			var n = X6(e),
				i = { lane: n, action: t, hasEagerState: !1, eagerState: null, next: null }
			if (wv(e)) Nv(r, i)
			else {
				_v(e, r, i)
				var c = e.alternate
				if (e.lanes === 0 && (c === null || c.lanes === 0) && ((c = r.lastRenderedReducer), c !== null))
					try {
						var C = r.lastRenderedState,
							l = c(C, t)
						if (((i.hasEagerState = !0), (i.eagerState = l), Y4(l, C))) return
					} catch {
					} finally {
					}
				;(t = s3()), (e = i4(e, n, t)), e !== null && kv(e, r, n)
			}
		}
		function wv(e) {
			var r = e.alternate
			return e === f1 || (r !== null && r === f1)
		}
		function Nv(e, r) {
			D7 = nt = !0
			var t = e.pending
			t === null ? (r.next = r) : ((r.next = t.next), (t.next = r)), (e.pending = r)
		}
		function _v(e, r, t) {
			M1 !== null && (e.mode & 1) !== 0 && (N2 & 2) === 0
				? ((e = r.interleaved),
				  e === null ? ((t.next = t), j4 === null ? (j4 = [r]) : j4.push(r)) : ((t.next = e.next), (e.next = t)),
				  (r.interleaved = t))
				: ((e = r.pending), e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)), (r.pending = t))
		}
		function kv(e, r, t) {
			if ((t & 4194240) !== 0) {
				var n = r.lanes
				;(n &= e.pendingLanes), (t |= n), (r.lanes = t), Ac(e, t)
			}
		}
		var at = {
				readContext: o4,
				useCallback: e3,
				useContext: e3,
				useEffect: e3,
				useImperativeHandle: e3,
				useInsertionEffect: e3,
				useLayoutEffect: e3,
				useMemo: e3,
				useReducer: e3,
				useRef: e3,
				useState: e3,
				useDebugValue: e3,
				useDeferredValue: e3,
				useTransition: e3,
				useMutableSource: e3,
				useSyncExternalStore: e3,
				useId: e3,
				unstable_isNewReconciler: !1,
			},
			VE = {
				readContext: o4,
				useCallback: function (e, r) {
					return (o6().memoizedState = [e, r === void 0 ? null : r]), e
				},
				useContext: o4,
				useEffect: _o,
				useImperativeHandle: function (e, r, t) {
					return (t = t != null ? t.concat([e]) : null), Dr(4194308, 4, Hv.bind(null, r, e), t)
				},
				useLayoutEffect: function (e, r) {
					return Dr(4194308, 4, e, r)
				},
				useInsertionEffect: function (e, r) {
					return Dr(4, 2, e, r)
				},
				useMemo: function (e, r) {
					var t = o6()
					return (r = r === void 0 ? null : r), (e = e()), (t.memoizedState = [e, r]), e
				},
				useReducer: function (e, r, t) {
					var n = o6()
					return (
						(r = t !== void 0 ? t(r) : r),
						(n.memoizedState = n.baseState = r),
						(e = {
							pending: null,
							interleaved: null,
							lanes: 0,
							dispatch: null,
							lastRenderedReducer: e,
							lastRenderedState: r,
						}),
						(n.queue = e),
						(e = e.dispatch = zE.bind(null, f1, e)),
						[n.memoizedState, e]
					)
				},
				useRef: function (e) {
					var r = o6()
					return (e = { current: e }), (r.memoizedState = e)
				},
				useState: No,
				useDebugValue: $c,
				useDeferredValue: function (e) {
					var r = No(e),
						t = r[0],
						n = r[1]
					return (
						_o(
							function () {
								var i = n4.transition
								n4.transition = {}
								try {
									n(e)
								} finally {
									n4.transition = i
								}
							},
							[e],
						),
						t
					)
				},
				useTransition: function () {
					var e = No(!1),
						r = e[0]
					return (e = ME.bind(null, e[1])), (o6().memoizedState = e), [r, e]
				},
				useMutableSource: function () {},
				useSyncExternalStore: function (e, r, t) {
					var n = f1,
						i = o6()
					if (e1) {
						if (t === void 0) throw Error(U(407))
						t = t()
					} else {
						if (((t = r()), M1 === null)) throw Error(U(349))
						;(X8 & 30) !== 0 || dv(n, r, t)
					}
					i.memoizedState = t
					var c = { value: t, getSnapshot: r }
					return (
						(i.queue = c),
						_o(mv.bind(null, n, c, e), [e]),
						(n.flags |= 2048),
						ee(9, vv.bind(null, n, c, t, r), void 0, null),
						t
					)
				},
				useId: function () {
					var e = o6(),
						r = M1.identifierPrefix
					if (e1) {
						var t = l6,
							n = s6
						;(t = (n & ~(1 << (32 - V4(n) - 1))).toString(32) + t),
							(r = ':' + r + 'R' + t),
							(t = $7++),
							0 < t && (r += 'H' + t.toString(32)),
							(r += ':')
					} else (t = gE++), (r = ':' + r + 'r' + t.toString(32) + ':')
					return (e.memoizedState = r)
				},
				unstable_isNewReconciler: !1,
			},
			yE = {
				readContext: o4,
				useCallback: yv,
				useContext: o4,
				useEffect: re,
				useImperativeHandle: Vv,
				useInsertionEffect: Mv,
				useLayoutEffect: zv,
				useMemo: Sv,
				useReducer: Sr,
				useRef: gv,
				useState: function () {
					return Sr(T5)
				},
				useDebugValue: $c,
				useDeferredValue: function (e) {
					var r = Sr(T5),
						t = r[0],
						n = r[1]
					return (
						re(
							function () {
								var i = n4.transition
								n4.transition = {}
								try {
									n(e)
								} finally {
									n4.transition = i
								}
							},
							[e],
						),
						t
					)
				},
				useTransition: function () {
					var e = Sr(T5)[0],
						r = K4().memoizedState
					return [e, r]
				},
				useMutableSource: hv,
				useSyncExternalStore: pv,
				useId: xv,
				unstable_isNewReconciler: !1,
			},
			SE = {
				readContext: o4,
				useCallback: yv,
				useContext: o4,
				useEffect: re,
				useImperativeHandle: Vv,
				useInsertionEffect: Mv,
				useLayoutEffect: zv,
				useMemo: Sv,
				useReducer: xr,
				useRef: gv,
				useState: function () {
					return xr(T5)
				},
				useDebugValue: $c,
				useDeferredValue: function (e) {
					var r = xr(T5),
						t = r[0],
						n = r[1]
					return (
						re(
							function () {
								var i = n4.transition
								n4.transition = {}
								try {
									n(e)
								} finally {
									n4.transition = i
								}
							},
							[e],
						),
						t
					)
				},
				useTransition: function () {
					var e = xr(T5)[0],
						r = K4().memoizedState
					return [e, r]
				},
				useMutableSource: hv,
				useSyncExternalStore: pv,
				useId: xv,
				unstable_isNewReconciler: !1,
			}
		function eC(e, r) {
			try {
				var t = '',
					n = r
				do (t += rA(n)), (n = n.return)
				while (n)
				var i = t
			} catch (c) {
				i =
					`
Error generating stack: ` +
					c.message +
					`
` +
					c.stack
			}
			return { value: e, source: r, stack: i }
		}
		function fc(e, r) {
			try {
				console.error(r.value)
			} catch (t) {
				setTimeout(function () {
					throw t
				})
			}
		}
		var xE = typeof WeakMap == 'function' ? WeakMap : Map
		function Pv(e, r, t) {
			;(t = f6(-1, t)), (t.tag = 3), (t.payload = { element: null })
			var n = r.value
			return (
				(t.callback = function () {
					ct || ((ct = !0), (Mc = n)), fc(e, r)
				}),
				t
			)
		}
		function Av(e, r, t) {
			;(t = f6(-1, t)), (t.tag = 3)
			var n = e.type.getDerivedStateFromError
			if (typeof n == 'function') {
				var i = r.value
				;(t.payload = function () {
					return n(i)
				}),
					(t.callback = function () {
						fc(e, r)
					})
			}
			var c = e.stateNode
			return (
				c !== null &&
					typeof c.componentDidCatch == 'function' &&
					(t.callback = function () {
						fc(e, r), typeof n != 'function' && (Q6 === null ? (Q6 = new Set([this])) : Q6.add(this))
						var C = r.stack
						this.componentDidCatch(r.value, { componentStack: C !== null ? C : '' })
					}),
				t
			)
		}
		function Bp(e, r, t) {
			var n = e.pingCache
			if (n === null) {
				n = e.pingCache = new xE()
				var i = new Set()
				n.set(r, i)
			} else (i = n.get(r)), i === void 0 && ((i = new Set()), n.set(r, i))
			i.has(t) || (i.add(t), (e = IE.bind(null, e, r, t)), r.then(e, e))
		}
		function qp(e) {
			do {
				var r
				if (((r = e.tag === 13) && ((r = e.memoizedState), (r = r !== null ? r.dehydrated !== null : !0)), r))
					return e
				e = e.return
			} while (e !== null)
			return null
		}
		function Up(e, r, t, n, i) {
			return (e.mode & 1) === 0
				? (e === r
						? (e.flags |= 65536)
						: ((e.flags |= 128),
						  (t.flags |= 131072),
						  (t.flags &= -52805),
						  t.tag === 1 && (t.alternate === null ? (t.tag = 17) : ((r = f6(-1, 1)), (r.tag = 2), K6(t, r))),
						  (t.lanes |= 1)),
				  e)
				: ((e.flags |= 65536), (e.lanes = i), e)
		}
		var Ev, uc, Tv, Rv
		Ev = function (e, r) {
			for (var t = r.child; t !== null; ) {
				if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode)
				else if (t.tag !== 4 && t.child !== null) {
					;(t.child.return = t), (t = t.child)
					continue
				}
				if (t === r) break
				for (; t.sibling === null; ) {
					if (t.return === null || t.return === r) return
					t = t.return
				}
				;(t.sibling.return = t.return), (t = t.sibling)
			}
		}
		uc = function () {}
		Tv = function (e, r, t, n) {
			var i = e.memoizedProps
			if (i !== n) {
				;(e = r.stateNode), A5(W4.current)
				var c = null
				switch (t) {
					case 'input':
						;(i = Fo(e, i)), (n = Fo(e, n)), (c = [])
						break
					case 'select':
						;(i = o1({}, i, { value: void 0 })), (n = o1({}, n, { value: void 0 })), (c = [])
						break
					case 'textarea':
						;(i = qo(e, i)), (n = qo(e, n)), (c = [])
						break
					default:
						typeof i.onClick != 'function' && typeof n.onClick == 'function' && (e.onclick = Kr)
				}
				jo(t, n)
				var C
				t = null
				for (h in i)
					if (!n.hasOwnProperty(h) && i.hasOwnProperty(h) && i[h] != null)
						if (h === 'style') {
							var l = i[h]
							for (C in l) l.hasOwnProperty(C) && (t || (t = {}), (t[C] = ''))
						} else
							h !== 'dangerouslySetInnerHTML' &&
								h !== 'children' &&
								h !== 'suppressContentEditableWarning' &&
								h !== 'suppressHydrationWarning' &&
								h !== 'autoFocus' &&
								(I7.hasOwnProperty(h) ? c || (c = []) : (c = c || []).push(h, null))
				for (h in n) {
					var u = n[h]
					if (((l = i?.[h]), n.hasOwnProperty(h) && u !== l && (u != null || l != null)))
						if (h === 'style')
							if (l) {
								for (C in l) !l.hasOwnProperty(C) || (u && u.hasOwnProperty(C)) || (t || (t = {}), (t[C] = ''))
								for (C in u) u.hasOwnProperty(C) && l[C] !== u[C] && (t || (t = {}), (t[C] = u[C]))
							} else t || (c || (c = []), c.push(h, t)), (t = u)
						else
							h === 'dangerouslySetInnerHTML'
								? ((u = u ? u.__html : void 0),
								  (l = l ? l.__html : void 0),
								  u != null && l !== u && (c = c || []).push(h, u))
								: h === 'children'
								? (typeof u != 'string' && typeof u != 'number') || (c = c || []).push(h, '' + u)
								: h !== 'suppressContentEditableWarning' &&
								  h !== 'suppressHydrationWarning' &&
								  (I7.hasOwnProperty(h)
										? (u != null && h === 'onScroll' && X2('scroll', e), c || l === u || (c = []))
										: (c = c || []).push(h, u))
				}
				t && (c = c || []).push('style', t)
				var h = c
				;(r.updateQueue = h) && (r.flags |= 4)
			}
		}
		Rv = function (e, r, t, n) {
			t !== n && (r.flags |= 4)
		}
		function S7(e, r) {
			if (!e1)
				switch (e.tailMode) {
					case 'hidden':
						r = e.tail
						for (var t = null; r !== null; ) r.alternate !== null && (t = r), (r = r.sibling)
						t === null ? (e.tail = null) : (t.sibling = null)
						break
					case 'collapsed':
						t = e.tail
						for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling)
						n === null ? (r || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (n.sibling = null)
				}
		}
		function r3(e) {
			var r = e.alternate !== null && e.alternate.child === e.child,
				t = 0,
				n = 0
			if (r)
				for (var i = e.child; i !== null; )
					(t |= i.lanes | i.childLanes),
						(n |= i.subtreeFlags & 14680064),
						(n |= i.flags & 14680064),
						(i.return = e),
						(i = i.sibling)
			else
				for (i = e.child; i !== null; )
					(t |= i.lanes | i.childLanes), (n |= i.subtreeFlags), (n |= i.flags), (i.return = e), (i = i.sibling)
			return (e.subtreeFlags |= n), (e.childLanes = t), r
		}
		function wE(e, r, t) {
			var n = r.pendingProps
			switch ((Gc(r), r.tag)) {
				case 2:
				case 16:
				case 15:
				case 0:
				case 11:
				case 7:
				case 8:
				case 12:
				case 9:
				case 14:
					return r3(r), null
				case 1:
					return x3(r.type) && Qr(), r3(r), null
				case 3:
					return (
						(n = r.stateNode),
						Q8(),
						J2(S3),
						J2(n3),
						Qc(),
						n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
						(e === null || e.child === null) &&
							(V7(r)
								? (r.flags |= 4)
								: e === null ||
								  (e.memoizedState.isDehydrated && (r.flags & 256) === 0) ||
								  ((r.flags |= 1024), H4 !== null && (Vc(H4), (H4 = null)))),
						uc(e, r),
						r3(r),
						null
					)
				case 5:
					Kc(r)
					var i = A5(Z7.current)
					if (((t = r.type), e !== null && r.stateNode != null))
						Tv(e, r, t, n, i), e.ref !== r.ref && ((r.flags |= 512), (r.flags |= 2097152))
					else {
						if (!n) {
							if (r.stateNode === null) throw Error(U(166))
							return r3(r), null
						}
						if (((e = A5(W4.current)), V7(r))) {
							;(n = r.stateNode), (t = r.type)
							var c = r.memoizedProps
							switch (((n[U4] = r), (n[X7] = c), (e = (r.mode & 1) !== 0), t)) {
								case 'dialog':
									X2('cancel', n), X2('close', n)
									break
								case 'iframe':
								case 'object':
								case 'embed':
									X2('load', n)
									break
								case 'video':
								case 'audio':
									for (i = 0; i < P7.length; i++) X2(P7[i], n)
									break
								case 'source':
									X2('error', n)
									break
								case 'img':
								case 'image':
								case 'link':
									X2('error', n), X2('load', n)
									break
								case 'details':
									X2('toggle', n)
									break
								case 'input':
									ap(n, c), X2('invalid', n)
									break
								case 'select':
									;(n._wrapperState = { wasMultiple: !!c.multiple }), X2('invalid', n)
									break
								case 'textarea':
									op(n, c), X2('invalid', n)
							}
							jo(t, c), (i = null)
							for (var C in c)
								if (c.hasOwnProperty(C)) {
									var l = c[C]
									C === 'children'
										? typeof l == 'string'
											? n.textContent !== l && (Vr(n.textContent, l, e), (i = ['children', l]))
											: typeof l == 'number' &&
											  n.textContent !== '' + l &&
											  (Vr(n.textContent, l, e), (i = ['children', '' + l]))
										: I7.hasOwnProperty(C) && l != null && C === 'onScroll' && X2('scroll', n)
								}
							switch (t) {
								case 'input':
									fr(n), ip(n, c, !0)
									break
								case 'textarea':
									fr(n), cp(n)
									break
								case 'select':
								case 'option':
									break
								default:
									typeof c.onClick == 'function' && (n.onclick = Kr)
							}
							;(n = i), (r.updateQueue = n), n !== null && (r.flags |= 4)
						} else {
							;(C = i.nodeType === 9 ? i : i.ownerDocument),
								e === 'http://www.w3.org/1999/xhtml' && (e = Ld(t)),
								e === 'http://www.w3.org/1999/xhtml'
									? t === 'script'
										? ((e = C.createElement('div')),
										  (e.innerHTML = '<script></script>'),
										  (e = e.removeChild(e.firstChild)))
										: typeof n.is == 'string'
										? (e = C.createElement(t, { is: n.is }))
										: ((e = C.createElement(t)),
										  t === 'select' &&
												((C = e), n.multiple ? (C.multiple = !0) : n.size && (C.size = n.size)))
									: (e = C.createElementNS(e, t)),
								(e[U4] = r),
								(e[X7] = n),
								Ev(e, r, !1, !1),
								(r.stateNode = e)
							e: {
								switch (((C = Go(t, n)), t)) {
									case 'dialog':
										X2('cancel', e), X2('close', e), (i = n)
										break
									case 'iframe':
									case 'object':
									case 'embed':
										X2('load', e), (i = n)
										break
									case 'video':
									case 'audio':
										for (i = 0; i < P7.length; i++) X2(P7[i], e)
										i = n
										break
									case 'source':
										X2('error', e), (i = n)
										break
									case 'img':
									case 'image':
									case 'link':
										X2('error', e), X2('load', e), (i = n)
										break
									case 'details':
										X2('toggle', e), (i = n)
										break
									case 'input':
										ap(e, n), (i = Fo(e, n)), X2('invalid', e)
										break
									case 'option':
										i = n
										break
									case 'select':
										;(e._wrapperState = { wasMultiple: !!n.multiple }),
											(i = o1({}, n, { value: void 0 })),
											X2('invalid', e)
										break
									case 'textarea':
										op(e, n), (i = qo(e, n)), X2('invalid', e)
										break
									default:
										i = n
								}
								jo(t, i), (l = i)
								for (c in l)
									if (l.hasOwnProperty(c)) {
										var u = l[c]
										c === 'style'
											? zd(e, u)
											: c === 'dangerouslySetInnerHTML'
											? ((u = u ? u.__html : void 0), u != null && gd(e, u))
											: c === 'children'
											? typeof u == 'string'
												? (t !== 'textarea' || u !== '') && B7(e, u)
												: typeof u == 'number' && B7(e, '' + u)
											: c !== 'suppressContentEditableWarning' &&
											  c !== 'suppressHydrationWarning' &&
											  c !== 'autoFocus' &&
											  (I7.hasOwnProperty(c)
													? u != null && c === 'onScroll' && X2('scroll', e)
													: u != null && xc(e, c, u, C))
									}
								switch (t) {
									case 'input':
										fr(e), ip(e, n, !1)
										break
									case 'textarea':
										fr(e), cp(e)
										break
									case 'option':
										n.value != null && e.setAttribute('value', '' + J6(n.value))
										break
									case 'select':
										;(e.multiple = !!n.multiple),
											(c = n.value),
											c != null
												? F8(e, !!n.multiple, c, !1)
												: n.defaultValue != null && F8(e, !!n.multiple, n.defaultValue, !0)
										break
									default:
										typeof i.onClick == 'function' && (e.onclick = Kr)
								}
								switch (t) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										n = !!n.autoFocus
										break e
									case 'img':
										n = !0
										break e
									default:
										n = !1
								}
							}
							n && (r.flags |= 4)
						}
						r.ref !== null && ((r.flags |= 512), (r.flags |= 2097152))
					}
					return r3(r), null
				case 6:
					if (e && r.stateNode != null) Rv(e, r, e.memoizedProps, n)
					else {
						if (typeof n != 'string' && r.stateNode === null) throw Error(U(166))
						if (((t = A5(Z7.current)), A5(W4.current), V7(r))) {
							if (
								((n = r.stateNode),
								(t = r.memoizedProps),
								(n[U4] = r),
								(c = n.nodeValue !== t) && ((e = O3), e !== null))
							)
								switch (((C = (e.mode & 1) !== 0), e.tag)) {
									case 3:
										Vr(n.nodeValue, t, C)
										break
									case 5:
										e.memoizedProps[void 0] !== !0 && Vr(n.nodeValue, t, C)
								}
							c && (r.flags |= 4)
						} else
							(n = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(n)), (n[U4] = r), (r.stateNode = n)
					}
					return r3(r), null
				case 13:
					if ((J2(i1), (n = r.memoizedState), e1 && V3 !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0)) {
						for (n = V3; n; ) n = C6(n.nextSibling)
						return Y8(), (r.flags |= 98560), r
					}
					if (n !== null && n.dehydrated !== null) {
						if (((n = V7(r)), e === null)) {
							if (!n) throw Error(U(318))
							if (((n = r.memoizedState), (n = n !== null ? n.dehydrated : null), !n)) throw Error(U(317))
							n[U4] = r
						} else Y8(), (r.flags & 128) === 0 && (r.memoizedState = null), (r.flags |= 4)
						return r3(r), null
					}
					return (
						H4 !== null && (Vc(H4), (H4 = null)),
						(r.flags & 128) !== 0
							? ((r.lanes = t), r)
							: ((n = n !== null),
							  (t = !1),
							  e === null ? V7(r) : (t = e.memoizedState !== null),
							  n &&
									!t &&
									((r.child.flags |= 8192),
									(r.mode & 1) !== 0 && (e === null || (i1.current & 1) !== 0 ? y1 === 0 && (y1 = 3) : oC())),
							  r.updateQueue !== null && (r.flags |= 4),
							  r3(r),
							  null)
					)
				case 4:
					return Q8(), uc(e, r), e === null && K7(r.stateNode.containerInfo), r3(r), null
				case 10:
					return qc(r.type._context), r3(r), null
				case 17:
					return x3(r.type) && Qr(), r3(r), null
				case 19:
					if ((J2(i1), (c = r.memoizedState), c === null)) return r3(r), null
					if (((n = (r.flags & 128) !== 0), (C = c.rendering), C === null))
						if (n) S7(c, !1)
						else {
							if (y1 !== 0 || (e !== null && (e.flags & 128) !== 0))
								for (e = r.child; e !== null; ) {
									if (((C = tt(e)), C !== null)) {
										for (
											r.flags |= 128,
												S7(c, !1),
												n = C.updateQueue,
												n !== null && ((r.updateQueue = n), (r.flags |= 4)),
												r.subtreeFlags = 0,
												n = t,
												t = r.child;
											t !== null;

										)
											(c = t),
												(e = n),
												(c.flags &= 14680066),
												(C = c.alternate),
												C === null
													? ((c.childLanes = 0),
													  (c.lanes = e),
													  (c.child = null),
													  (c.subtreeFlags = 0),
													  (c.memoizedProps = null),
													  (c.memoizedState = null),
													  (c.updateQueue = null),
													  (c.dependencies = null),
													  (c.stateNode = null))
													: ((c.childLanes = C.childLanes),
													  (c.lanes = C.lanes),
													  (c.child = C.child),
													  (c.subtreeFlags = 0),
													  (c.deletions = null),
													  (c.memoizedProps = C.memoizedProps),
													  (c.memoizedState = C.memoizedState),
													  (c.updateQueue = C.updateQueue),
													  (c.type = C.type),
													  (e = C.dependencies),
													  (c.dependencies =
															e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
												(t = t.sibling)
										return G2(i1, (i1.current & 1) | 2), r.child
									}
									e = e.sibling
								}
							c.tail !== null && d1() > Z8 && ((r.flags |= 128), (n = !0), S7(c, !1), (r.lanes = 4194304))
						}
					else {
						if (!n)
							if (((e = tt(C)), e !== null)) {
								if (
									((r.flags |= 128),
									(n = !0),
									(t = e.updateQueue),
									t !== null && ((r.updateQueue = t), (r.flags |= 4)),
									S7(c, !0),
									c.tail === null && c.tailMode === 'hidden' && !C.alternate && !e1)
								)
									return r3(r), null
							} else
								2 * d1() - c.renderingStartTime > Z8 &&
									t !== 1073741824 &&
									((r.flags |= 128), (n = !0), S7(c, !1), (r.lanes = 4194304))
						c.isBackwards
							? ((C.sibling = r.child), (r.child = C))
							: ((t = c.last), t !== null ? (t.sibling = C) : (r.child = C), (c.last = C))
					}
					return c.tail !== null
						? ((r = c.tail),
						  (c.rendering = r),
						  (c.tail = r.sibling),
						  (c.renderingStartTime = d1()),
						  (r.sibling = null),
						  (t = i1.current),
						  G2(i1, n ? (t & 1) | 2 : t & 1),
						  r)
						: (r3(r), null)
				case 22:
				case 23:
					return (
						iC(),
						(n = r.memoizedState !== null),
						e !== null && (e.memoizedState !== null) !== n && (r.flags |= 8192),
						n && (r.mode & 1) !== 0
							? (T3 & 1073741824) !== 0 && (r3(r), r.subtreeFlags & 6 && (r.flags |= 8192))
							: r3(r),
						null
					)
				case 24:
					return null
				case 25:
					return null
			}
			throw Error(U(156, r.tag))
		}
		var NE = d6.ReactCurrentOwner,
			R3 = !1
		function C3(e, r, t, n) {
			r.child = e === null ? fv(r, null, t, n) : K8(r, e.child, t, n)
		}
		function jp(e, r, t, n, i) {
			t = t.render
			var c = r.ref
			return (
				U8(r, i),
				(n = Jc(e, r, t, n, c, i)),
				(t = Zc()),
				e !== null && !R3
					? ((r.updateQueue = e.updateQueue), (r.flags &= -2053), (e.lanes &= ~i), p6(e, r, i))
					: (e1 && t && jc(r), (r.flags |= 1), C3(e, r, n, i), r.child)
			)
		}
		function Gp(e, r, t, n, i) {
			if (e === null) {
				var c = t.type
				return typeof c == 'function' &&
					!cC(c) &&
					c.defaultProps === void 0 &&
					t.compare === null &&
					t.defaultProps === void 0
					? ((r.tag = 15), (r.type = c), Ov(e, r, c, n, i))
					: ((e = Ir(t.type, null, n, r, r.mode, i)), (e.ref = r.ref), (e.return = r), (r.child = e))
			}
			if (((c = e.child), (e.lanes & i) === 0)) {
				var C = c.memoizedProps
				if (((t = t.compare), (t = t !== null ? t : Y7), t(C, n) && e.ref === r.ref)) return p6(e, r, i)
			}
			return (r.flags |= 1), (e = $6(c, n)), (e.ref = r.ref), (e.return = r), (r.child = e)
		}
		function Ov(e, r, t, n, i) {
			if (e !== null && Y7(e.memoizedProps, n) && e.ref === r.ref)
				if (((R3 = !1), (e.lanes & i) !== 0)) (e.flags & 131072) !== 0 && (R3 = !0)
				else return (r.lanes = e.lanes), p6(e, r, i)
			return hc(e, r, t, n, i)
		}
		function Dv(e, r, t) {
			var n = r.pendingProps,
				i = n.children,
				c = e !== null ? e.memoizedState : null
			if (n.mode === 'hidden')
				if ((r.mode & 1) === 0) (r.memoizedState = { baseLanes: 0, cachePool: null }), G2(b8, T3), (T3 |= t)
				else if ((t & 1073741824) !== 0)
					(r.memoizedState = { baseLanes: 0, cachePool: null }),
						(n = c !== null ? c.baseLanes : t),
						G2(b8, T3),
						(T3 |= n)
				else
					return (
						(e = c !== null ? c.baseLanes | t : t),
						(r.lanes = r.childLanes = 1073741824),
						(r.memoizedState = { baseLanes: e, cachePool: null }),
						(r.updateQueue = null),
						G2(b8, T3),
						(T3 |= e),
						null
					)
			else c !== null ? ((n = c.baseLanes | t), (r.memoizedState = null)) : (n = t), G2(b8, T3), (T3 |= n)
			return C3(e, r, i, t), r.child
		}
		function bv(e, r) {
			var t = r.ref
			;((e === null && t !== null) || (e !== null && e.ref !== t)) && ((r.flags |= 512), (r.flags |= 2097152))
		}
		function hc(e, r, t, n, i) {
			var c = x3(t) ? D5 : n3.current
			return (
				(c = W8(r, c)),
				U8(r, i),
				(t = Jc(e, r, t, n, c, i)),
				(n = Zc()),
				e !== null && !R3
					? ((r.updateQueue = e.updateQueue), (r.flags &= -2053), (e.lanes &= ~i), p6(e, r, i))
					: (e1 && n && jc(r), (r.flags |= 1), C3(e, r, t, i), r.child)
			)
		}
		function Wp(e, r, t, n, i) {
			if (x3(t)) {
				var c = !0
				Xr(r)
			} else c = !1
			if ((U8(r, i), r.stateNode === null))
				e !== null && ((e.alternate = null), (r.alternate = null), (r.flags |= 2)),
					cv(r, t, n),
					Cc(r, t, n, i),
					(n = !0)
			else if (e === null) {
				var C = r.stateNode,
					l = r.memoizedProps
				C.props = l
				var u = C.context,
					h = t.contextType
				typeof h == 'object' && h !== null ? (h = o4(h)) : ((h = x3(t) ? D5 : n3.current), (h = W8(r, h)))
				var v = t.getDerivedStateFromProps,
					g = typeof v == 'function' || typeof C.getSnapshotBeforeUpdate == 'function'
				g ||
					(typeof C.UNSAFE_componentWillReceiveProps != 'function' &&
						typeof C.componentWillReceiveProps != 'function') ||
					((l !== n || u !== h) && Dp(r, C, n, h)),
					(I6 = !1)
				var m = r.memoizedState
				;(C.state = m),
					$r(r, n, C, i),
					(u = r.memoizedState),
					l !== n || m !== u || S3.current || I6
						? (typeof v == 'function' && (cc(r, t, v, n), (u = r.memoizedState)),
						  (l = I6 || Op(r, t, l, n, m, u, h))
								? (g ||
										(typeof C.UNSAFE_componentWillMount != 'function' &&
											typeof C.componentWillMount != 'function') ||
										(typeof C.componentWillMount == 'function' && C.componentWillMount(),
										typeof C.UNSAFE_componentWillMount == 'function' && C.UNSAFE_componentWillMount()),
								  typeof C.componentDidMount == 'function' && (r.flags |= 4194308))
								: (typeof C.componentDidMount == 'function' && (r.flags |= 4194308),
								  (r.memoizedProps = n),
								  (r.memoizedState = u)),
						  (C.props = n),
						  (C.state = u),
						  (C.context = h),
						  (n = l))
						: (typeof C.componentDidMount == 'function' && (r.flags |= 4194308), (n = !1))
			} else {
				;(C = r.stateNode),
					iv(e, r),
					(l = r.memoizedProps),
					(h = r.type === r.elementType ? l : z4(r.type, l)),
					(C.props = h),
					(g = r.pendingProps),
					(m = C.context),
					(u = t.contextType),
					typeof u == 'object' && u !== null ? (u = o4(u)) : ((u = x3(t) ? D5 : n3.current), (u = W8(r, u)))
				var H = t.getDerivedStateFromProps
				;(v = typeof H == 'function' || typeof C.getSnapshotBeforeUpdate == 'function') ||
					(typeof C.UNSAFE_componentWillReceiveProps != 'function' &&
						typeof C.componentWillReceiveProps != 'function') ||
					((l !== g || m !== u) && Dp(r, C, n, u)),
					(I6 = !1),
					(m = r.memoizedState),
					(C.state = m),
					$r(r, n, C, i)
				var L = r.memoizedState
				l !== g || m !== L || S3.current || I6
					? (typeof H == 'function' && (cc(r, t, H, n), (L = r.memoizedState)),
					  (h = I6 || Op(r, t, h, n, m, L, u) || !1)
							? (v ||
									(typeof C.UNSAFE_componentWillUpdate != 'function' &&
										typeof C.componentWillUpdate != 'function') ||
									(typeof C.componentWillUpdate == 'function' && C.componentWillUpdate(n, L, u),
									typeof C.UNSAFE_componentWillUpdate == 'function' && C.UNSAFE_componentWillUpdate(n, L, u)),
							  typeof C.componentDidUpdate == 'function' && (r.flags |= 4),
							  typeof C.getSnapshotBeforeUpdate == 'function' && (r.flags |= 1024))
							: (typeof C.componentDidUpdate != 'function' ||
									(l === e.memoizedProps && m === e.memoizedState) ||
									(r.flags |= 4),
							  typeof C.getSnapshotBeforeUpdate != 'function' ||
									(l === e.memoizedProps && m === e.memoizedState) ||
									(r.flags |= 1024),
							  (r.memoizedProps = n),
							  (r.memoizedState = L)),
					  (C.props = n),
					  (C.state = L),
					  (C.context = u),
					  (n = h))
					: (typeof C.componentDidUpdate != 'function' ||
							(l === e.memoizedProps && m === e.memoizedState) ||
							(r.flags |= 4),
					  typeof C.getSnapshotBeforeUpdate != 'function' ||
							(l === e.memoizedProps && m === e.memoizedState) ||
							(r.flags |= 1024),
					  (n = !1))
			}
			return pc(e, r, t, n, c, i)
		}
		function pc(e, r, t, n, i, c) {
			bv(e, r)
			var C = (r.flags & 128) !== 0
			if (!n && !C) return i && Ep(r, t, !1), p6(e, r, c)
			;(n = r.stateNode), (NE.current = r)
			var l = C && typeof t.getDerivedStateFromError != 'function' ? null : n.render()
			return (
				(r.flags |= 1),
				e !== null && C ? ((r.child = K8(r, e.child, null, c)), (r.child = K8(r, null, l, c))) : C3(e, r, l, c),
				(r.memoizedState = n.state),
				i && Ep(r, t, !0),
				r.child
			)
		}
		function Fv(e) {
			var r = e.stateNode
			r.pendingContext ? Ap(e, r.pendingContext, r.pendingContext !== r.context) : r.context && Ap(e, r.context, !1),
				Yc(e, r.containerInfo)
		}
		function Yp(e, r, t, n, i) {
			return Y8(), Wc(i), (r.flags |= 256), C3(e, r, t, n), r.child
		}
		var wr = { dehydrated: null, treeContext: null, retryLane: 0 }
		function Nr(e) {
			return { baseLanes: e, cachePool: null }
		}
		function Iv(e, r, t) {
			var n = r.pendingProps,
				i = i1.current,
				c = !1,
				C = (r.flags & 128) !== 0,
				l
			if (
				((l = C) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
				l ? ((c = !0), (r.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
				G2(i1, i & 1),
				e === null)
			)
				return (
					lc(r),
					(e = r.memoizedState),
					e !== null && ((e = e.dehydrated), e !== null)
						? ((r.mode & 1) === 0 ? (r.lanes = 1) : e.data === '$!' ? (r.lanes = 8) : (r.lanes = 1073741824),
						  null)
						: ((i = n.children),
						  (e = n.fallback),
						  c
								? ((n = r.mode),
								  (c = r.child),
								  (i = { mode: 'hidden', children: i }),
								  (n & 1) === 0 && c !== null
										? ((c.childLanes = 0), (c.pendingProps = i))
										: (c = lt(i, n, 0, null)),
								  (e = O5(e, n, t, null)),
								  (c.return = r),
								  (e.return = r),
								  (c.sibling = e),
								  (r.child = c),
								  (r.child.memoizedState = Nr(t)),
								  (r.memoizedState = wr),
								  e)
								: dc(r, i))
				)
			if (((i = e.memoizedState), i !== null)) {
				if (((l = i.dehydrated), l !== null)) {
					if (C)
						return r.flags & 256
							? ((r.flags &= -257), _r(e, r, t, Error(U(422))))
							: r.memoizedState !== null
							? ((r.child = e.child), (r.flags |= 128), null)
							: ((c = n.fallback),
							  (i = r.mode),
							  (n = lt({ mode: 'visible', children: n.children }, i, 0, null)),
							  (c = O5(c, i, t, null)),
							  (c.flags |= 2),
							  (n.return = r),
							  (c.return = r),
							  (n.sibling = c),
							  (r.child = n),
							  (r.mode & 1) !== 0 && K8(r, e.child, null, t),
							  (r.child.memoizedState = Nr(t)),
							  (r.memoizedState = wr),
							  c)
					if ((r.mode & 1) === 0) r = _r(e, r, t, null)
					else if (l.data === '$!') r = _r(e, r, t, Error(U(419)))
					else if (((n = (t & e.childLanes) !== 0), R3 || n)) {
						if (((n = M1), n !== null)) {
							switch (t & -t) {
								case 4:
									c = 2
									break
								case 16:
									c = 8
									break
								case 64:
								case 128:
								case 256:
								case 512:
								case 1024:
								case 2048:
								case 4096:
								case 8192:
								case 16384:
								case 32768:
								case 65536:
								case 131072:
								case 262144:
								case 524288:
								case 1048576:
								case 2097152:
								case 4194304:
								case 8388608:
								case 16777216:
								case 33554432:
								case 67108864:
									c = 32
									break
								case 536870912:
									c = 268435456
									break
								default:
									c = 0
							}
							;(n = (c & (n.suspendedLanes | t)) !== 0 ? 0 : c),
								n !== 0 && n !== i.retryLane && ((i.retryLane = n), i4(e, n, -1))
						}
						oC(), (r = _r(e, r, t, Error(U(421))))
					} else
						l.data === '$?'
							? ((r.flags |= 128), (r.child = e.child), (r = BE.bind(null, e)), (l._reactRetry = r), (r = null))
							: ((t = i.treeContext),
							  (V3 = C6(l.nextSibling)),
							  (O3 = r),
							  (e1 = !0),
							  (H4 = null),
							  t !== null &&
									((e4[r4++] = s6),
									(e4[r4++] = l6),
									(e4[r4++] = b5),
									(s6 = t.id),
									(l6 = t.overflow),
									(b5 = r)),
							  (r = dc(r, r.pendingProps.children)),
							  (r.flags |= 4096))
					return r
				}
				return c
					? ((n = Qp(e, r, n.children, n.fallback, t)),
					  (c = r.child),
					  (i = e.child.memoizedState),
					  (c.memoizedState = i === null ? Nr(t) : { baseLanes: i.baseLanes | t, cachePool: null }),
					  (c.childLanes = e.childLanes & ~t),
					  (r.memoizedState = wr),
					  n)
					: ((t = Kp(e, r, n.children, t)), (r.memoizedState = null), t)
			}
			return c
				? ((n = Qp(e, r, n.children, n.fallback, t)),
				  (c = r.child),
				  (i = e.child.memoizedState),
				  (c.memoizedState = i === null ? Nr(t) : { baseLanes: i.baseLanes | t, cachePool: null }),
				  (c.childLanes = e.childLanes & ~t),
				  (r.memoizedState = wr),
				  n)
				: ((t = Kp(e, r, n.children, t)), (r.memoizedState = null), t)
		}
		function dc(e, r) {
			return (r = lt({ mode: 'visible', children: r }, e.mode, 0, null)), (r.return = e), (e.child = r)
		}
		function Kp(e, r, t, n) {
			var i = e.child
			return (
				(e = i.sibling),
				(t = $6(i, { mode: 'visible', children: t })),
				(r.mode & 1) === 0 && (t.lanes = n),
				(t.return = r),
				(t.sibling = null),
				e !== null && ((n = r.deletions), n === null ? ((r.deletions = [e]), (r.flags |= 16)) : n.push(e)),
				(r.child = t)
			)
		}
		function Qp(e, r, t, n, i) {
			var c = r.mode
			e = e.child
			var C = e.sibling,
				l = { mode: 'hidden', children: t }
			return (
				(c & 1) === 0 && r.child !== e
					? ((t = r.child), (t.childLanes = 0), (t.pendingProps = l), (r.deletions = null))
					: ((t = $6(e, l)), (t.subtreeFlags = e.subtreeFlags & 14680064)),
				C !== null ? (n = $6(C, n)) : ((n = O5(n, c, i, null)), (n.flags |= 2)),
				(n.return = r),
				(t.return = r),
				(t.sibling = n),
				(r.child = t),
				n
			)
		}
		function _r(e, r, t, n) {
			return (
				n !== null && Wc(n),
				K8(r, e.child, null, t),
				(e = dc(r, r.pendingProps.children)),
				(e.flags |= 2),
				(r.memoizedState = null),
				e
			)
		}
		function Xp(e, r, t) {
			e.lanes |= r
			var n = e.alternate
			n !== null && (n.lanes |= r), oc(e.return, r, t)
		}
		function ko(e, r, t, n, i) {
			var c = e.memoizedState
			c === null
				? (e.memoizedState = {
						isBackwards: r,
						rendering: null,
						renderingStartTime: 0,
						last: n,
						tail: t,
						tailMode: i,
				  })
				: ((c.isBackwards = r),
				  (c.rendering = null),
				  (c.renderingStartTime = 0),
				  (c.last = n),
				  (c.tail = t),
				  (c.tailMode = i))
		}
		function Bv(e, r, t) {
			var n = r.pendingProps,
				i = n.revealOrder,
				c = n.tail
			if ((C3(e, r, n.children, t), (n = i1.current), (n & 2) !== 0)) (n = (n & 1) | 2), (r.flags |= 128)
			else {
				if (e !== null && (e.flags & 128) !== 0)
					e: for (e = r.child; e !== null; ) {
						if (e.tag === 13) e.memoizedState !== null && Xp(e, t, r)
						else if (e.tag === 19) Xp(e, t, r)
						else if (e.child !== null) {
							;(e.child.return = e), (e = e.child)
							continue
						}
						if (e === r) break e
						for (; e.sibling === null; ) {
							if (e.return === null || e.return === r) break e
							e = e.return
						}
						;(e.sibling.return = e.return), (e = e.sibling)
					}
				n &= 1
			}
			if ((G2(i1, n), (r.mode & 1) === 0)) r.memoizedState = null
			else
				switch (i) {
					case 'forwards':
						for (t = r.child, i = null; t !== null; )
							(e = t.alternate), e !== null && tt(e) === null && (i = t), (t = t.sibling)
						;(t = i),
							t === null ? ((i = r.child), (r.child = null)) : ((i = t.sibling), (t.sibling = null)),
							ko(r, !1, i, t, c)
						break
					case 'backwards':
						for (t = null, i = r.child, r.child = null; i !== null; ) {
							if (((e = i.alternate), e !== null && tt(e) === null)) {
								r.child = i
								break
							}
							;(e = i.sibling), (i.sibling = t), (t = i), (i = e)
						}
						ko(r, !0, t, null, c)
						break
					case 'together':
						ko(r, !1, null, null, void 0)
						break
					default:
						r.memoizedState = null
				}
			return r.child
		}
		function p6(e, r, t) {
			if ((e !== null && (r.dependencies = e.dependencies), (J8 |= r.lanes), (t & r.childLanes) === 0)) return null
			if (e !== null && r.child !== e.child) throw Error(U(153))
			if (r.child !== null) {
				for (e = r.child, t = $6(e, e.pendingProps), r.child = t, t.return = r; e.sibling !== null; )
					(e = e.sibling), (t = t.sibling = $6(e, e.pendingProps)), (t.return = r)
				t.sibling = null
			}
			return r.child
		}
		function _E(e, r, t) {
			switch (r.tag) {
				case 3:
					Fv(r), Y8()
					break
				case 5:
					uv(r)
					break
				case 1:
					x3(r.type) && Xr(r)
					break
				case 4:
					Yc(r, r.stateNode.containerInfo)
					break
				case 10:
					var n = r.type._context,
						i = r.memoizedProps.value
					G2(Jr, n._currentValue), (n._currentValue = i)
					break
				case 13:
					if (((n = r.memoizedState), n !== null))
						return n.dehydrated !== null
							? (G2(i1, i1.current & 1), (r.flags |= 128), null)
							: (t & r.child.childLanes) !== 0
							? Iv(e, r, t)
							: (G2(i1, i1.current & 1), (e = p6(e, r, t)), e !== null ? e.sibling : null)
					G2(i1, i1.current & 1)
					break
				case 19:
					if (((n = (t & r.childLanes) !== 0), (e.flags & 128) !== 0)) {
						if (n) return Bv(e, r, t)
						r.flags |= 128
					}
					if (
						((i = r.memoizedState),
						i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
						G2(i1, i1.current),
						n)
					)
						break
					return null
				case 22:
				case 23:
					return (r.lanes = 0), Dv(e, r, t)
			}
			return p6(e, r, t)
		}
		function kE(e, r) {
			switch ((Gc(r), r.tag)) {
				case 1:
					return x3(r.type) && Qr(), (e = r.flags), e & 65536 ? ((r.flags = (e & -65537) | 128), r) : null
				case 3:
					return (
						Q8(),
						J2(S3),
						J2(n3),
						Qc(),
						(e = r.flags),
						(e & 65536) !== 0 && (e & 128) === 0 ? ((r.flags = (e & -65537) | 128), r) : null
					)
				case 5:
					return Kc(r), null
				case 13:
					if ((J2(i1), (e = r.memoizedState), e !== null && e.dehydrated !== null)) {
						if (r.alternate === null) throw Error(U(340))
						Y8()
					}
					return (e = r.flags), e & 65536 ? ((r.flags = (e & -65537) | 128), r) : null
				case 19:
					return J2(i1), null
				case 4:
					return Q8(), null
				case 10:
					return qc(r.type._context), null
				case 22:
				case 23:
					return iC(), null
				case 24:
					return null
				default:
					return null
			}
		}
		var kr = !1,
			E5 = !1,
			PE = typeof WeakSet == 'function' ? WeakSet : Set,
			J = null
		function it(e, r) {
			var t = e.ref
			if (t !== null)
				if (typeof t == 'function')
					try {
						t(null)
					} catch (n) {
						y3(e, r, n)
					}
				else t.current = null
		}
		function vc(e, r, t) {
			try {
				t()
			} catch (n) {
				y3(e, r, n)
			}
		}
		var Jp = !1
		function AE(e, r) {
			if (((e = Kd()), Fc(e))) {
				if ('selectionStart' in e) var t = { start: e.selectionStart, end: e.selectionEnd }
				else
					e: {
						t = ((t = e.ownerDocument) && t.defaultView) || window
						var n = t.getSelection && t.getSelection()
						if (n && n.rangeCount !== 0) {
							t = n.anchorNode
							var i = n.anchorOffset,
								c = n.focusNode
							n = n.focusOffset
							try {
								t.nodeType, c.nodeType
							} catch {
								t = null
								break e
							}
							var C = 0,
								l = -1,
								u = -1,
								h = 0,
								v = 0,
								g = e,
								m = null
							r: for (;;) {
								for (
									var H;
									g !== t || (i !== 0 && g.nodeType !== 3) || (l = C + i),
										g !== c || (n !== 0 && g.nodeType !== 3) || (u = C + n),
										g.nodeType === 3 && (C += g.nodeValue.length),
										(H = g.firstChild) !== null;

								)
									(m = g), (g = H)
								for (;;) {
									if (g === e) break r
									if (
										(m === t && ++h === i && (l = C),
										m === c && ++v === n && (u = C),
										(H = g.nextSibling) !== null)
									)
										break
									;(g = m), (m = g.parentNode)
								}
								g = H
							}
							t = l === -1 || u === -1 ? null : { start: l, end: u }
						} else t = null
					}
				t = t || { start: 0, end: 0 }
			} else t = null
			for (rc = { focusedElem: e, selectionRange: t }, J = r; J !== null; )
				if (((r = J), (e = r.child), (r.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = r), (J = e)
				else
					for (; J !== null; ) {
						r = J
						try {
							var L = r.alternate
							if ((r.flags & 1024) !== 0)
								switch (r.tag) {
									case 0:
									case 11:
									case 15:
										break
									case 1:
										if (L !== null) {
											var x = L.memoizedProps,
												w = L.memoizedState,
												V = r.stateNode,
												M = V.getSnapshotBeforeUpdate(r.elementType === r.type ? x : z4(r.type, x), w)
											V.__reactInternalSnapshotBeforeUpdate = M
										}
										break
									case 3:
										var S = r.stateNode.containerInfo
										if (S.nodeType === 1) S.textContent = ''
										else if (S.nodeType === 9) {
											var k = S.body
											k != null && (k.textContent = '')
										}
										break
									case 5:
									case 6:
									case 4:
									case 17:
										break
									default:
										throw Error(U(163))
								}
						} catch (D) {
							y3(r, r.return, D)
						}
						if (((e = r.sibling), e !== null)) {
							;(e.return = r.return), (J = e)
							break
						}
						J = r.return
					}
			return (L = Jp), (Jp = !1), L
		}
		function te(e, r, t) {
			var n = r.updateQueue
			if (((n = n !== null ? n.lastEffect : null), n !== null)) {
				var i = (n = n.next)
				do {
					if ((i.tag & e) === e) {
						var c = i.destroy
						;(i.destroy = void 0), c !== void 0 && vc(r, t, c)
					}
					i = i.next
				} while (i !== n)
			}
		}
		function Mt(e, r) {
			if (((r = r.updateQueue), (r = r !== null ? r.lastEffect : null), r !== null)) {
				var t = (r = r.next)
				do {
					if ((t.tag & e) === e) {
						var n = t.create
						t.destroy = n()
					}
					t = t.next
				} while (t !== r)
			}
		}
		function mc(e) {
			var r = e.ref
			if (r !== null) {
				var t = e.stateNode
				switch (e.tag) {
					case 5:
						e = t
						break
					default:
						e = t
				}
				typeof r == 'function' ? r(e) : (r.current = e)
			}
		}
		function Zp(e, r, t) {
			if (G4 && typeof G4.onCommitFiberUnmount == 'function')
				try {
					G4.onCommitFiberUnmount(ut, r)
				} catch {}
			switch (r.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					if (((e = r.updateQueue), e !== null && ((e = e.lastEffect), e !== null))) {
						var n = (e = e.next)
						do {
							var i = n,
								c = i.destroy
							;(i = i.tag), c !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && vc(r, t, c), (n = n.next)
						} while (n !== e)
					}
					break
				case 1:
					if ((it(r, t), (e = r.stateNode), typeof e.componentWillUnmount == 'function'))
						try {
							;(e.props = r.memoizedProps), (e.state = r.memoizedState), e.componentWillUnmount()
						} catch (C) {
							y3(r, t, C)
						}
					break
				case 5:
					it(r, t)
					break
				case 4:
					jv(e, r, t)
			}
		}
		function qv(e) {
			var r = e.alternate
			r !== null && ((e.alternate = null), qv(r)),
				(e.child = null),
				(e.deletions = null),
				(e.sibling = null),
				e.tag === 5 &&
					((r = e.stateNode),
					r !== null && (delete r[U4], delete r[X7], delete r[ac], delete r[dE], delete r[vE])),
				(e.stateNode = null),
				(e.return = null),
				(e.dependencies = null),
				(e.memoizedProps = null),
				(e.memoizedState = null),
				(e.pendingProps = null),
				(e.stateNode = null),
				(e.updateQueue = null)
		}
		function Uv(e) {
			return e.tag === 5 || e.tag === 3 || e.tag === 4
		}
		function $p(e) {
			e: for (;;) {
				for (; e.sibling === null; ) {
					if (e.return === null || Uv(e.return)) return null
					e = e.return
				}
				for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
					if (e.flags & 2 || e.child === null || e.tag === 4) continue e
					;(e.child.return = e), (e = e.child)
				}
				if (!(e.flags & 2)) return e.stateNode
			}
		}
		function ed(e) {
			e: {
				for (var r = e.return; r !== null; ) {
					if (Uv(r)) break e
					r = r.return
				}
				throw Error(U(160))
			}
			var t = r
			switch (t.tag) {
				case 5:
					;(r = t.stateNode), t.flags & 32 && (B7(r, ''), (t.flags &= -33)), (t = $p(e)), gc(e, t, r)
					break
				case 3:
				case 4:
					;(r = t.stateNode.containerInfo), (t = $p(e)), Lc(e, t, r)
					break
				default:
					throw Error(U(161))
			}
		}
		function Lc(e, r, t) {
			var n = e.tag
			if (n === 5 || n === 6)
				(e = e.stateNode),
					r
						? t.nodeType === 8
							? t.parentNode.insertBefore(e, r)
							: t.insertBefore(e, r)
						: (t.nodeType === 8 ? ((r = t.parentNode), r.insertBefore(e, t)) : ((r = t), r.appendChild(e)),
						  (t = t._reactRootContainer),
						  t != null || r.onclick !== null || (r.onclick = Kr))
			else if (n !== 4 && ((e = e.child), e !== null))
				for (Lc(e, r, t), e = e.sibling; e !== null; ) Lc(e, r, t), (e = e.sibling)
		}
		function gc(e, r, t) {
			var n = e.tag
			if (n === 5 || n === 6) (e = e.stateNode), r ? t.insertBefore(e, r) : t.appendChild(e)
			else if (n !== 4 && ((e = e.child), e !== null))
				for (gc(e, r, t), e = e.sibling; e !== null; ) gc(e, r, t), (e = e.sibling)
		}
		function jv(e, r, t) {
			for (var n = r, i = !1, c, C; ; ) {
				if (!i) {
					i = n.return
					e: for (;;) {
						if (i === null) throw Error(U(160))
						switch (((c = i.stateNode), i.tag)) {
							case 5:
								C = !1
								break e
							case 3:
								;(c = c.containerInfo), (C = !0)
								break e
							case 4:
								;(c = c.containerInfo), (C = !0)
								break e
						}
						i = i.return
					}
					i = !0
				}
				if (n.tag === 5 || n.tag === 6) {
					e: for (var l = e, u = n, h = t, v = u; ; )
						if ((Zp(l, v, h), v.child !== null && v.tag !== 4)) (v.child.return = v), (v = v.child)
						else {
							if (v === u) break e
							for (; v.sibling === null; ) {
								if (v.return === null || v.return === u) break e
								v = v.return
							}
							;(v.sibling.return = v.return), (v = v.sibling)
						}
					C
						? ((l = c), (u = n.stateNode), l.nodeType === 8 ? l.parentNode.removeChild(u) : l.removeChild(u))
						: c.removeChild(n.stateNode)
				} else if (n.tag === 18)
					C
						? ((l = c),
						  (u = n.stateNode),
						  l.nodeType === 8 ? So(l.parentNode, u) : l.nodeType === 1 && So(l, u),
						  G7(l))
						: So(c, n.stateNode)
				else if (n.tag === 4) {
					if (n.child !== null) {
						;(c = n.stateNode.containerInfo), (C = !0), (n.child.return = n), (n = n.child)
						continue
					}
				} else if ((Zp(e, n, t), n.child !== null)) {
					;(n.child.return = n), (n = n.child)
					continue
				}
				if (n === r) break
				for (; n.sibling === null; ) {
					if (n.return === null || n.return === r) return
					;(n = n.return), n.tag === 4 && (i = !1)
				}
				;(n.sibling.return = n.return), (n = n.sibling)
			}
		}
		function Po(e, r) {
			switch (r.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					te(3, r, r.return), Mt(3, r), te(5, r, r.return)
					return
				case 1:
					return
				case 5:
					var t = r.stateNode
					if (t != null) {
						var n = r.memoizedProps,
							i = e !== null ? e.memoizedProps : n
						e = r.type
						var c = r.updateQueue
						if (((r.updateQueue = null), c !== null)) {
							for (
								e === 'input' && n.type === 'radio' && n.name != null && vd(t, n),
									Go(e, i),
									r = Go(e, n),
									i = 0;
								i < c.length;
								i += 2
							) {
								var C = c[i],
									l = c[i + 1]
								C === 'style'
									? zd(t, l)
									: C === 'dangerouslySetInnerHTML'
									? gd(t, l)
									: C === 'children'
									? B7(t, l)
									: xc(t, C, l, r)
							}
							switch (e) {
								case 'input':
									Io(t, n)
									break
								case 'textarea':
									md(t, n)
									break
								case 'select':
									;(e = t._wrapperState.wasMultiple),
										(t._wrapperState.wasMultiple = !!n.multiple),
										(c = n.value),
										c != null
											? F8(t, !!n.multiple, c, !1)
											: e !== !!n.multiple &&
											  (n.defaultValue != null
													? F8(t, !!n.multiple, n.defaultValue, !0)
													: F8(t, !!n.multiple, n.multiple ? [] : '', !1))
							}
							t[X7] = n
						}
					}
					return
				case 6:
					if (r.stateNode === null) throw Error(U(162))
					r.stateNode.nodeValue = r.memoizedProps
					return
				case 3:
					e !== null && e.memoizedState.isDehydrated && G7(r.stateNode.containerInfo)
					return
				case 12:
					return
				case 13:
					rd(r)
					return
				case 19:
					rd(r)
					return
				case 17:
					return
			}
			throw Error(U(163))
		}
		function rd(e) {
			var r = e.updateQueue
			if (r !== null) {
				e.updateQueue = null
				var t = e.stateNode
				t === null && (t = e.stateNode = new PE()),
					r.forEach(function (n) {
						var i = qE.bind(null, e, n)
						t.has(n) || (t.add(n), n.then(i, i))
					})
			}
		}
		function EE(e, r) {
			for (J = r; J !== null; ) {
				r = J
				var t = r.deletions
				if (t !== null)
					for (var n = 0; n < t.length; n++) {
						var i = t[n]
						try {
							jv(e, i, r)
							var c = i.alternate
							c !== null && (c.return = null), (i.return = null)
						} catch (B) {
							y3(i, r, B)
						}
					}
				if (((t = r.child), (r.subtreeFlags & 12854) !== 0 && t !== null)) (t.return = r), (J = t)
				else
					for (; J !== null; ) {
						r = J
						try {
							var C = r.flags
							if ((C & 32 && B7(r.stateNode, ''), C & 512)) {
								var l = r.alternate
								if (l !== null) {
									var u = l.ref
									u !== null && (typeof u == 'function' ? u(null) : (u.current = null))
								}
							}
							if (C & 8192)
								switch (r.tag) {
									case 13:
										if (r.memoizedState !== null) {
											var h = r.alternate
											;(h === null || h.memoizedState === null) && (nC = d1())
										}
										break
									case 22:
										var v = r.memoizedState !== null,
											g = r.alternate,
											m = g !== null && g.memoizedState !== null
										t = r
										e: {
											;(n = t), (i = v)
											for (var H = null, L = n; ; ) {
												if (L.tag === 5) {
													if (H === null) {
														H = L
														var x = L.stateNode
														if (i) {
															var w = x.style
															typeof w.setProperty == 'function'
																? w.setProperty('display', 'none', 'important')
																: (w.display = 'none')
														} else {
															var V = L.stateNode,
																M = L.memoizedProps.style,
																S = M != null && M.hasOwnProperty('display') ? M.display : null
															V.style.display = Md('display', S)
														}
													}
												} else if (L.tag === 6)
													H === null && (L.stateNode.nodeValue = i ? '' : L.memoizedProps)
												else if (
													((L.tag !== 22 && L.tag !== 23) || L.memoizedState === null || L === n) &&
													L.child !== null
												) {
													;(L.child.return = L), (L = L.child)
													continue
												}
												if (L === n) break
												for (; L.sibling === null; ) {
													if (L.return === null || L.return === n) break e
													H === L && (H = null), (L = L.return)
												}
												H === L && (H = null), (L.sibling.return = L.return), (L = L.sibling)
											}
										}
										if (v && !m && (t.mode & 1) !== 0) {
											J = t
											for (var k = t.child; k !== null; ) {
												for (t = J = k; J !== null; ) {
													n = J
													var D = n.child
													switch (n.tag) {
														case 0:
														case 11:
														case 14:
														case 15:
															te(4, n, n.return)
															break
														case 1:
															it(n, n.return)
															var b = n.stateNode
															if (typeof b.componentWillUnmount == 'function') {
																var I = n.return
																try {
																	;(b.props = n.memoizedProps),
																		(b.state = n.memoizedState),
																		b.componentWillUnmount()
																} catch (B) {
																	y3(n, I, B)
																}
															}
															break
														case 5:
															it(n, n.return)
															break
														case 22:
															if (n.memoizedState !== null) {
																nd(t)
																continue
															}
													}
													D !== null ? ((D.return = n), (J = D)) : nd(t)
												}
												k = k.sibling
											}
										}
								}
							switch (C & 4102) {
								case 2:
									ed(r), (r.flags &= -3)
									break
								case 6:
									ed(r), (r.flags &= -3), Po(r.alternate, r)
									break
								case 4096:
									r.flags &= -4097
									break
								case 4100:
									;(r.flags &= -4097), Po(r.alternate, r)
									break
								case 4:
									Po(r.alternate, r)
							}
						} catch (B) {
							y3(r, r.return, B)
						}
						if (((t = r.sibling), t !== null)) {
							;(t.return = r.return), (J = t)
							break
						}
						J = r.return
					}
			}
		}
		function TE(e, r, t) {
			;(J = e), Gv(e, r, t)
		}
		function Gv(e, r, t) {
			for (var n = (e.mode & 1) !== 0; J !== null; ) {
				var i = J,
					c = i.child
				if (i.tag === 22 && n) {
					var C = i.memoizedState !== null || kr
					if (!C) {
						var l = i.alternate,
							u = (l !== null && l.memoizedState !== null) || E5
						l = kr
						var h = E5
						if (((kr = C), (E5 = u) && !h))
							for (J = i; J !== null; )
								(C = J),
									(u = C.child),
									C.tag === 22 && C.memoizedState !== null
										? ad(i)
										: u !== null
										? ((u.return = C), (J = u))
										: ad(i)
						for (; c !== null; ) (J = c), Gv(c, r, t), (c = c.sibling)
						;(J = i), (kr = l), (E5 = h)
					}
					td(e, r, t)
				} else (i.subtreeFlags & 8772) !== 0 && c !== null ? ((c.return = i), (J = c)) : td(e, r, t)
			}
		}
		function td(e) {
			for (; J !== null; ) {
				var r = J
				if ((r.flags & 8772) !== 0) {
					var t = r.alternate
					try {
						if ((r.flags & 8772) !== 0)
							switch (r.tag) {
								case 0:
								case 11:
								case 15:
									E5 || Mt(5, r)
									break
								case 1:
									var n = r.stateNode
									if (r.flags & 4 && !E5)
										if (t === null) n.componentDidMount()
										else {
											var i = r.elementType === r.type ? t.memoizedProps : z4(r.type, t.memoizedProps)
											n.componentDidUpdate(i, t.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
										}
									var c = r.updateQueue
									c !== null && Rp(r, c, n)
									break
								case 3:
									var C = r.updateQueue
									if (C !== null) {
										if (((t = null), r.child !== null))
											switch (r.child.tag) {
												case 5:
													t = r.child.stateNode
													break
												case 1:
													t = r.child.stateNode
											}
										Rp(r, C, t)
									}
									break
								case 5:
									var l = r.stateNode
									if (t === null && r.flags & 4) {
										t = l
										var u = r.memoizedProps
										switch (r.type) {
											case 'button':
											case 'input':
											case 'select':
											case 'textarea':
												u.autoFocus && t.focus()
												break
											case 'img':
												u.src && (t.src = u.src)
										}
									}
									break
								case 6:
									break
								case 4:
									break
								case 12:
									break
								case 13:
									if (r.memoizedState === null) {
										var h = r.alternate
										if (h !== null) {
											var v = h.memoizedState
											if (v !== null) {
												var g = v.dehydrated
												g !== null && G7(g)
											}
										}
									}
									break
								case 19:
								case 17:
								case 21:
								case 22:
								case 23:
									break
								default:
									throw Error(U(163))
							}
						E5 || (r.flags & 512 && mc(r))
					} catch (m) {
						y3(r, r.return, m)
					}
				}
				if (r === e) {
					J = null
					break
				}
				if (((t = r.sibling), t !== null)) {
					;(t.return = r.return), (J = t)
					break
				}
				J = r.return
			}
		}
		function nd(e) {
			for (; J !== null; ) {
				var r = J
				if (r === e) {
					J = null
					break
				}
				var t = r.sibling
				if (t !== null) {
					;(t.return = r.return), (J = t)
					break
				}
				J = r.return
			}
		}
		function ad(e) {
			for (; J !== null; ) {
				var r = J
				try {
					switch (r.tag) {
						case 0:
						case 11:
						case 15:
							var t = r.return
							try {
								Mt(4, r)
							} catch (u) {
								y3(r, t, u)
							}
							break
						case 1:
							var n = r.stateNode
							if (typeof n.componentDidMount == 'function') {
								var i = r.return
								try {
									n.componentDidMount()
								} catch (u) {
									y3(r, i, u)
								}
							}
							var c = r.return
							try {
								mc(r)
							} catch (u) {
								y3(r, c, u)
							}
							break
						case 5:
							var C = r.return
							try {
								mc(r)
							} catch (u) {
								y3(r, C, u)
							}
					}
				} catch (u) {
					y3(r, r.return, u)
				}
				if (r === e) {
					J = null
					break
				}
				var l = r.sibling
				if (l !== null) {
					;(l.return = r.return), (J = l)
					break
				}
				J = r.return
			}
		}
		var RE = Math.ceil,
			ot = d6.ReactCurrentDispatcher,
			rC = d6.ReactCurrentOwner,
			a4 = d6.ReactCurrentBatchConfig,
			N2 = 0,
			M1 = null,
			g1 = null,
			q1 = 0,
			T3 = 0,
			b8 = r5(0),
			y1 = 0,
			ne = null,
			J8 = 0,
			zt = 0,
			tC = 0,
			b7 = null,
			H3 = null,
			nC = 0,
			Z8 = 1 / 0,
			ct = !1,
			Mc = null,
			Q6 = null,
			Pr = !1,
			j6 = null,
			Ct = 0,
			F7 = 0,
			zc = null,
			br = -1,
			Fr = 0
		function s3() {
			return (N2 & 6) !== 0 ? d1() : br !== -1 ? br : (br = d1())
		}
		function X6(e) {
			return (e.mode & 1) === 0
				? 1
				: (N2 & 2) !== 0 && q1 !== 0
				? q1 & -q1
				: LE.transition !== null
				? (Fr === 0 && ((e = hr), (hr <<= 1), (hr & 4194240) === 0 && (hr = 64), (Fr = e)), Fr)
				: ((e = R2), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Fd(e.type))), e)
		}
		function i4(e, r, t) {
			if (50 < F7) throw ((F7 = 0), (zc = null), Error(U(185)))
			var n = Ht(e, r)
			return n === null
				? null
				: (ae(n, r, t),
				  ((N2 & 2) === 0 || n !== M1) &&
						(n === M1 && ((N2 & 2) === 0 && (zt |= r), y1 === 4 && q6(n, q1)),
						w3(n, t),
						r === 1 && N2 === 0 && (e.mode & 1) === 0 && ((Z8 = d1() + 500), mt && t5())),
				  n)
		}
		function Ht(e, r) {
			e.lanes |= r
			var t = e.alternate
			for (t !== null && (t.lanes |= r), t = e, e = e.return; e !== null; )
				(e.childLanes |= r), (t = e.alternate), t !== null && (t.childLanes |= r), (t = e), (e = e.return)
			return t.tag === 3 ? t.stateNode : null
		}
		function w3(e, r) {
			var t = e.callbackNode
			MA(e, r)
			var n = Gr(e, e === M1 ? q1 : 0)
			if (n === 0) t !== null && lp(t), (e.callbackNode = null), (e.callbackPriority = 0)
			else if (((r = n & -n), e.callbackPriority !== r)) {
				if ((t != null && lp(t), r === 1))
					e.tag === 0 ? mE(id.bind(null, e)) : av(id.bind(null, e)),
						hE(function () {
							N2 === 0 && t5()
						}),
						(t = null)
				else {
					switch (Ed(n)) {
						case 1:
							t = Pc
							break
						case 4:
							t = Pd
							break
						case 16:
							t = jr
							break
						case 536870912:
							t = Ad
							break
						default:
							t = jr
					}
					t = $v(t, Wv.bind(null, e))
				}
				;(e.callbackPriority = r), (e.callbackNode = t)
			}
		}
		function Wv(e, r) {
			if (((br = -1), (Fr = 0), (N2 & 6) !== 0)) throw Error(U(327))
			var t = e.callbackNode
			if (j8() && e.callbackNode !== t) return null
			var n = Gr(e, e === M1 ? q1 : 0)
			if (n === 0) return null
			if ((n & 30) !== 0 || (n & e.expiredLanes) !== 0 || r) r = st(e, n)
			else {
				r = n
				var i = N2
				N2 |= 2
				var c = Kv()
				;(M1 !== e || q1 !== r) && ((Z8 = d1() + 500), R5(e, r))
				do
					try {
						bE()
						break
					} catch (l) {
						Yv(e, l)
					}
				while (1)
				Bc(), (ot.current = c), (N2 = i), g1 !== null ? (r = 0) : ((M1 = null), (q1 = 0), (r = y1))
			}
			if (r !== 0) {
				if ((r === 2 && ((i = Xo(e)), i !== 0 && ((n = i), (r = Hc(e, i)))), r === 1))
					throw ((t = ne), R5(e, 0), q6(e, n), w3(e, d1()), t)
				if (r === 6) q6(e, n)
				else {
					if (
						((i = e.current.alternate),
						(n & 30) === 0 &&
							!OE(i) &&
							((r = st(e, n)), r === 2 && ((c = Xo(e)), c !== 0 && ((n = c), (r = Hc(e, c)))), r === 1))
					)
						throw ((t = ne), R5(e, 0), q6(e, n), w3(e, d1()), t)
					switch (((e.finishedWork = i), (e.finishedLanes = n), r)) {
						case 0:
						case 1:
							throw Error(U(345))
						case 2:
							k5(e, H3)
							break
						case 3:
							if ((q6(e, n), (n & 130023424) === n && ((r = nC + 500 - d1()), 10 < r))) {
								if (Gr(e, 0) !== 0) break
								if (((i = e.suspendedLanes), (i & n) !== n)) {
									s3(), (e.pingedLanes |= e.suspendedLanes & i)
									break
								}
								e.timeoutHandle = nc(k5.bind(null, e, H3), r)
								break
							}
							k5(e, H3)
							break
						case 4:
							if ((q6(e, n), (n & 4194240) === n)) break
							for (r = e.eventTimes, i = -1; 0 < n; ) {
								var C = 31 - V4(n)
								;(c = 1 << C), (C = r[C]), C > i && (i = C), (n &= ~c)
							}
							if (
								((n = i),
								(n = d1() - n),
								(n =
									(120 > n
										? 120
										: 480 > n
										? 480
										: 1080 > n
										? 1080
										: 1920 > n
										? 1920
										: 3e3 > n
										? 3e3
										: 4320 > n
										? 4320
										: 1960 * RE(n / 1960)) - n),
								10 < n)
							) {
								e.timeoutHandle = nc(k5.bind(null, e, H3), n)
								break
							}
							k5(e, H3)
							break
						case 5:
							k5(e, H3)
							break
						default:
							throw Error(U(329))
					}
				}
			}
			return w3(e, d1()), e.callbackNode === t ? Wv.bind(null, e) : null
		}
		function Hc(e, r) {
			var t = b7
			return (
				e.current.memoizedState.isDehydrated && (R5(e, r).flags |= 256),
				(e = st(e, r)),
				e !== 2 && ((r = H3), (H3 = t), r !== null && Vc(r)),
				e
			)
		}
		function Vc(e) {
			H3 === null ? (H3 = e) : H3.push.apply(H3, e)
		}
		function OE(e) {
			for (var r = e; ; ) {
				if (r.flags & 16384) {
					var t = r.updateQueue
					if (t !== null && ((t = t.stores), t !== null))
						for (var n = 0; n < t.length; n++) {
							var i = t[n],
								c = i.getSnapshot
							i = i.value
							try {
								if (!Y4(c(), i)) return !1
							} catch {
								return !1
							}
						}
				}
				if (((t = r.child), r.subtreeFlags & 16384 && t !== null)) (t.return = r), (r = t)
				else {
					if (r === e) break
					for (; r.sibling === null; ) {
						if (r.return === null || r.return === e) return !0
						r = r.return
					}
					;(r.sibling.return = r.return), (r = r.sibling)
				}
			}
			return !0
		}
		function q6(e, r) {
			for (r &= ~tC, r &= ~zt, e.suspendedLanes |= r, e.pingedLanes &= ~r, e = e.expirationTimes; 0 < r; ) {
				var t = 31 - V4(r),
					n = 1 << t
				;(e[t] = -1), (r &= ~n)
			}
		}
		function id(e) {
			if ((N2 & 6) !== 0) throw Error(U(327))
			j8()
			var r = Gr(e, 0)
			if ((r & 1) === 0) return w3(e, d1()), null
			var t = st(e, r)
			if (e.tag !== 0 && t === 2) {
				var n = Xo(e)
				n !== 0 && ((r = n), (t = Hc(e, n)))
			}
			if (t === 1) throw ((t = ne), R5(e, 0), q6(e, r), w3(e, d1()), t)
			if (t === 6) throw Error(U(345))
			return (e.finishedWork = e.current.alternate), (e.finishedLanes = r), k5(e, H3), w3(e, d1()), null
		}
		function aC(e, r) {
			var t = N2
			N2 |= 1
			try {
				return e(r)
			} finally {
				;(N2 = t), N2 === 0 && ((Z8 = d1() + 500), mt && t5())
			}
		}
		function F5(e) {
			j6 !== null && j6.tag === 0 && (N2 & 6) === 0 && j8()
			var r = N2
			N2 |= 1
			var t = a4.transition,
				n = R2
			try {
				if (((a4.transition = null), (R2 = 1), e)) return e()
			} finally {
				;(R2 = n), (a4.transition = t), (N2 = r), (N2 & 6) === 0 && t5()
			}
		}
		function iC() {
			;(T3 = b8.current), J2(b8)
		}
		function R5(e, r) {
			;(e.finishedWork = null), (e.finishedLanes = 0)
			var t = e.timeoutHandle
			if ((t !== -1 && ((e.timeoutHandle = -1), uE(t)), g1 !== null))
				for (t = g1.return; t !== null; ) {
					var n = t
					switch ((Gc(n), n.tag)) {
						case 1:
							;(n = n.type.childContextTypes), n != null && Qr()
							break
						case 3:
							Q8(), J2(S3), J2(n3), Qc()
							break
						case 5:
							Kc(n)
							break
						case 4:
							Q8()
							break
						case 13:
							J2(i1)
							break
						case 19:
							J2(i1)
							break
						case 10:
							qc(n.type._context)
							break
						case 22:
						case 23:
							iC()
					}
					t = t.return
				}
			if (
				((M1 = e),
				(g1 = e = $6(e.current, null)),
				(q1 = T3 = r),
				(y1 = 0),
				(ne = null),
				(tC = zt = J8 = 0),
				(H3 = b7 = null),
				j4 !== null)
			) {
				for (r = 0; r < j4.length; r++)
					if (((t = j4[r]), (n = t.interleaved), n !== null)) {
						t.interleaved = null
						var i = n.next,
							c = t.pending
						if (c !== null) {
							var C = c.next
							;(c.next = i), (n.next = C)
						}
						t.pending = n
					}
				j4 = null
			}
			return e
		}
		function Yv(e, r) {
			do {
				var t = g1
				try {
					if ((Bc(), (Or.current = at), nt)) {
						for (var n = f1.memoizedState; n !== null; ) {
							var i = n.queue
							i !== null && (i.pending = null), (n = n.next)
						}
						nt = !1
					}
					if (
						((X8 = 0),
						(R1 = t3 = f1 = null),
						(D7 = !1),
						($7 = 0),
						(rC.current = null),
						t === null || t.return === null)
					) {
						;(y1 = 1), (ne = r), (g1 = null)
						break
					}
					e: {
						var c = e,
							C = t.return,
							l = t,
							u = r
						if (
							((r = q1), (l.flags |= 32768), u !== null && typeof u == 'object' && typeof u.then == 'function')
						) {
							var h = u,
								v = l,
								g = v.tag
							if ((v.mode & 1) === 0 && (g === 0 || g === 11 || g === 15)) {
								var m = v.alternate
								m
									? ((v.updateQueue = m.updateQueue), (v.memoizedState = m.memoizedState), (v.lanes = m.lanes))
									: ((v.updateQueue = null), (v.memoizedState = null))
							}
							var H = qp(C)
							if (H !== null) {
								;(H.flags &= -257), Up(H, C, l, c, r), H.mode & 1 && Bp(c, h, r), (r = H), (u = h)
								var L = r.updateQueue
								if (L === null) {
									var x = new Set()
									x.add(u), (r.updateQueue = x)
								} else L.add(u)
								break e
							} else {
								if ((r & 1) === 0) {
									Bp(c, h, r), oC()
									break e
								}
								u = Error(U(426))
							}
						} else if (e1 && l.mode & 1) {
							var w = qp(C)
							if (w !== null) {
								;(w.flags & 65536) === 0 && (w.flags |= 256), Up(w, C, l, c, r), Wc(u)
								break e
							}
						}
						;(c = u), y1 !== 4 && (y1 = 2), b7 === null ? (b7 = [c]) : b7.push(c), (u = eC(u, l)), (l = C)
						do {
							switch (l.tag) {
								case 3:
									;(l.flags |= 65536), (r &= -r), (l.lanes |= r)
									var V = Pv(l, u, r)
									Tp(l, V)
									break e
								case 1:
									c = u
									var M = l.type,
										S = l.stateNode
									if (
										(l.flags & 128) === 0 &&
										(typeof M.getDerivedStateFromError == 'function' ||
											(S !== null &&
												typeof S.componentDidCatch == 'function' &&
												(Q6 === null || !Q6.has(S))))
									) {
										;(l.flags |= 65536), (r &= -r), (l.lanes |= r)
										var k = Av(l, c, r)
										Tp(l, k)
										break e
									}
							}
							l = l.return
						} while (l !== null)
					}
					Xv(t)
				} catch (D) {
					;(r = D), g1 === t && t !== null && (g1 = t = t.return)
					continue
				}
				break
			} while (1)
		}
		function Kv() {
			var e = ot.current
			return (ot.current = at), e === null ? at : e
		}
		function oC() {
			;(y1 === 0 || y1 === 3 || y1 === 2) && (y1 = 4),
				M1 === null || ((J8 & 268435455) === 0 && (zt & 268435455) === 0) || q6(M1, q1)
		}
		function st(e, r) {
			var t = N2
			N2 |= 2
			var n = Kv()
			;(M1 === e && q1 === r) || R5(e, r)
			do
				try {
					DE()
					break
				} catch (i) {
					Yv(e, i)
				}
			while (1)
			if ((Bc(), (N2 = t), (ot.current = n), g1 !== null)) throw Error(U(261))
			return (M1 = null), (q1 = 0), y1
		}
		function DE() {
			for (; g1 !== null; ) Qv(g1)
		}
		function bE() {
			for (; g1 !== null && !fA(); ) Qv(g1)
		}
		function Qv(e) {
			var r = Zv(e.alternate, e, T3)
			;(e.memoizedProps = e.pendingProps), r === null ? Xv(e) : (g1 = r), (rC.current = null)
		}
		function Xv(e) {
			var r = e
			do {
				var t = r.alternate
				if (((e = r.return), (r.flags & 32768) === 0)) {
					if (((t = wE(t, r, T3)), t !== null)) {
						g1 = t
						return
					}
				} else {
					if (((t = kE(t, r)), t !== null)) {
						;(t.flags &= 32767), (g1 = t)
						return
					}
					if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
					else {
						;(y1 = 6), (g1 = null)
						return
					}
				}
				if (((r = r.sibling), r !== null)) {
					g1 = r
					return
				}
				g1 = r = e
			} while (r !== null)
			y1 === 0 && (y1 = 5)
		}
		function k5(e, r) {
			var t = R2,
				n = a4.transition
			try {
				;(a4.transition = null), (R2 = 1), FE(e, r, t)
			} finally {
				;(a4.transition = n), (R2 = t)
			}
			return null
		}
		function FE(e, r, t) {
			do j8()
			while (j6 !== null)
			if ((N2 & 6) !== 0) throw Error(U(327))
			var n = e.finishedWork,
				i = e.finishedLanes
			if (n === null) return null
			if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(U(177))
			;(e.callbackNode = null), (e.callbackPriority = 0)
			var c = n.lanes | n.childLanes
			if (
				(zA(e, c),
				e === M1 && ((g1 = M1 = null), (q1 = 0)),
				((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
					Pr ||
					((Pr = !0),
					$v(jr, function () {
						return j8(), null
					})),
				(c = (n.flags & 15990) !== 0),
				(n.subtreeFlags & 15990) !== 0 || c)
			) {
				;(c = a4.transition), (a4.transition = null)
				var C = R2
				R2 = 1
				var l = N2
				;(N2 |= 4),
					(rC.current = null),
					AE(e, n),
					EE(e, n, i),
					cE(rc),
					(rc = null),
					(e.current = n),
					TE(n, e, i),
					uA(),
					(N2 = l),
					(R2 = C),
					(a4.transition = c)
			} else e.current = n
			if (
				(Pr && ((Pr = !1), (j6 = e), (Ct = i)),
				(c = e.pendingLanes),
				c === 0 && (Q6 = null),
				dA(n.stateNode, t),
				w3(e, d1()),
				r !== null)
			)
				for (t = e.onRecoverableError, n = 0; n < r.length; n++) t(r[n])
			if (ct) throw ((ct = !1), (e = Mc), (Mc = null), e)
			return (
				(Ct & 1) !== 0 && e.tag !== 0 && j8(),
				(c = e.pendingLanes),
				(c & 1) !== 0 ? (e === zc ? F7++ : ((F7 = 0), (zc = e))) : (F7 = 0),
				t5(),
				null
			)
		}
		function j8() {
			if (j6 !== null) {
				var e = Ed(Ct),
					r = a4.transition,
					t = R2
				try {
					if (((a4.transition = null), (R2 = 16 > e ? 16 : e), j6 === null)) var n = !1
					else {
						if (((e = j6), (j6 = null), (Ct = 0), (N2 & 6) !== 0)) throw Error(U(331))
						var i = N2
						for (N2 |= 4, J = e.current; J !== null; ) {
							var c = J,
								C = c.child
							if ((J.flags & 16) !== 0) {
								var l = c.deletions
								if (l !== null) {
									for (var u = 0; u < l.length; u++) {
										var h = l[u]
										for (J = h; J !== null; ) {
											var v = J
											switch (v.tag) {
												case 0:
												case 11:
												case 15:
													te(8, v, c)
											}
											var g = v.child
											if (g !== null) (g.return = v), (J = g)
											else
												for (; J !== null; ) {
													v = J
													var m = v.sibling,
														H = v.return
													if ((qv(v), v === h)) {
														J = null
														break
													}
													if (m !== null) {
														;(m.return = H), (J = m)
														break
													}
													J = H
												}
										}
									}
									var L = c.alternate
									if (L !== null) {
										var x = L.child
										if (x !== null) {
											L.child = null
											do {
												var w = x.sibling
												;(x.sibling = null), (x = w)
											} while (x !== null)
										}
									}
									J = c
								}
							}
							if ((c.subtreeFlags & 2064) !== 0 && C !== null) (C.return = c), (J = C)
							else
								e: for (; J !== null; ) {
									if (((c = J), (c.flags & 2048) !== 0))
										switch (c.tag) {
											case 0:
											case 11:
											case 15:
												te(9, c, c.return)
										}
									var V = c.sibling
									if (V !== null) {
										;(V.return = c.return), (J = V)
										break e
									}
									J = c.return
								}
						}
						var M = e.current
						for (J = M; J !== null; ) {
							C = J
							var S = C.child
							if ((C.subtreeFlags & 2064) !== 0 && S !== null) (S.return = C), (J = S)
							else
								e: for (C = M; J !== null; ) {
									if (((l = J), (l.flags & 2048) !== 0))
										try {
											switch (l.tag) {
												case 0:
												case 11:
												case 15:
													Mt(9, l)
											}
										} catch (D) {
											y3(l, l.return, D)
										}
									if (l === C) {
										J = null
										break e
									}
									var k = l.sibling
									if (k !== null) {
										;(k.return = l.return), (J = k)
										break e
									}
									J = l.return
								}
						}
						if (((N2 = i), t5(), G4 && typeof G4.onPostCommitFiberRoot == 'function'))
							try {
								G4.onPostCommitFiberRoot(ut, e)
							} catch {}
						n = !0
					}
					return n
				} finally {
					;(R2 = t), (a4.transition = r)
				}
			}
			return !1
		}
		function od(e, r, t) {
			;(r = eC(t, r)), (r = Pv(e, r, 1)), K6(e, r), (r = s3()), (e = Ht(e, 1)), e !== null && (ae(e, 1, r), w3(e, r))
		}
		function y3(e, r, t) {
			if (e.tag === 3) od(e, e, t)
			else
				for (; r !== null; ) {
					if (r.tag === 3) {
						od(r, e, t)
						break
					} else if (r.tag === 1) {
						var n = r.stateNode
						if (
							typeof r.type.getDerivedStateFromError == 'function' ||
							(typeof n.componentDidCatch == 'function' && (Q6 === null || !Q6.has(n)))
						) {
							;(e = eC(t, e)),
								(e = Av(r, e, 1)),
								K6(r, e),
								(e = s3()),
								(r = Ht(r, 1)),
								r !== null && (ae(r, 1, e), w3(r, e))
							break
						}
					}
					r = r.return
				}
		}
		function IE(e, r, t) {
			var n = e.pingCache
			n !== null && n.delete(r),
				(r = s3()),
				(e.pingedLanes |= e.suspendedLanes & t),
				M1 === e &&
					(q1 & t) === t &&
					(y1 === 4 || (y1 === 3 && (q1 & 130023424) === q1 && 500 > d1() - nC) ? R5(e, 0) : (tC |= t)),
				w3(e, r)
		}
		function Jv(e, r) {
			r === 0 && ((e.mode & 1) === 0 ? (r = 1) : ((r = pr), (pr <<= 1), (pr & 130023424) === 0 && (pr = 4194304)))
			var t = s3()
			;(e = Ht(e, r)), e !== null && (ae(e, r, t), w3(e, t))
		}
		function BE(e) {
			var r = e.memoizedState,
				t = 0
			r !== null && (t = r.retryLane), Jv(e, t)
		}
		function qE(e, r) {
			var t = 0
			switch (e.tag) {
				case 13:
					var n = e.stateNode,
						i = e.memoizedState
					i !== null && (t = i.retryLane)
					break
				case 19:
					n = e.stateNode
					break
				default:
					throw Error(U(314))
			}
			n !== null && n.delete(r), Jv(e, t)
		}
		var Zv
		Zv = function (e, r, t) {
			if (e !== null)
				if (e.memoizedProps !== r.pendingProps || S3.current) R3 = !0
				else {
					if ((e.lanes & t) === 0 && (r.flags & 128) === 0) return (R3 = !1), _E(e, r, t)
					R3 = (e.flags & 131072) !== 0
				}
			else (R3 = !1), e1 && (r.flags & 1048576) !== 0 && Cv(r, rt, r.index)
			switch (((r.lanes = 0), r.tag)) {
				case 2:
					var n = r.type
					e !== null && ((e.alternate = null), (r.alternate = null), (r.flags |= 2)), (e = r.pendingProps)
					var i = W8(r, n3.current)
					U8(r, t), (i = Jc(null, r, n, e, i, t))
					var c = Zc()
					return (
						(r.flags |= 1),
						typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0
							? ((r.tag = 1),
							  (r.memoizedState = null),
							  (r.updateQueue = null),
							  x3(n) ? ((c = !0), Xr(r)) : (c = !1),
							  (r.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
							  Uc(r),
							  (i.updater = Lt),
							  (r.stateNode = i),
							  (i._reactInternals = r),
							  Cc(r, n, e, t),
							  (r = pc(null, r, n, !0, c, t)))
							: ((r.tag = 0), e1 && c && jc(r), C3(null, r, i, t), (r = r.child)),
						r
					)
				case 16:
					n = r.elementType
					e: {
						switch (
							(e !== null && ((e.alternate = null), (r.alternate = null), (r.flags |= 2)),
							(e = r.pendingProps),
							(i = n._init),
							(n = i(n._payload)),
							(r.type = n),
							(i = r.tag = jE(n)),
							(e = z4(n, e)),
							i)
						) {
							case 0:
								r = hc(null, r, n, e, t)
								break e
							case 1:
								r = Wp(null, r, n, e, t)
								break e
							case 11:
								r = jp(null, r, n, e, t)
								break e
							case 14:
								r = Gp(null, r, n, z4(n.type, e), t)
								break e
						}
						throw Error(U(306, n, ''))
					}
					return r
				case 0:
					return (n = r.type), (i = r.pendingProps), (i = r.elementType === n ? i : z4(n, i)), hc(e, r, n, i, t)
				case 1:
					return (n = r.type), (i = r.pendingProps), (i = r.elementType === n ? i : z4(n, i)), Wp(e, r, n, i, t)
				case 3:
					e: {
						if ((Fv(r), e === null)) throw Error(U(387))
						;(n = r.pendingProps), (c = r.memoizedState), (i = c.element), iv(e, r), $r(r, n, null, t)
						var C = r.memoizedState
						if (((n = C.element), c.isDehydrated))
							if (
								((c = { element: n, isDehydrated: !1, cache: C.cache, transitions: C.transitions }),
								(r.updateQueue.baseState = c),
								(r.memoizedState = c),
								r.flags & 256)
							) {
								;(i = Error(U(423))), (r = Yp(e, r, n, t, i))
								break e
							} else if (n !== i) {
								;(i = Error(U(424))), (r = Yp(e, r, n, t, i))
								break e
							} else
								for (
									V3 = C6(r.stateNode.containerInfo.firstChild),
										O3 = r,
										e1 = !0,
										H4 = null,
										t = fv(r, null, n, t),
										r.child = t;
									t;

								)
									(t.flags = (t.flags & -3) | 4096), (t = t.sibling)
						else {
							if ((Y8(), n === i)) {
								r = p6(e, r, t)
								break e
							}
							C3(e, r, n, t)
						}
						r = r.child
					}
					return r
				case 5:
					return (
						uv(r),
						e === null && lc(r),
						(n = r.type),
						(i = r.pendingProps),
						(c = e !== null ? e.memoizedProps : null),
						(C = i.children),
						tc(n, i) ? (C = null) : c !== null && tc(n, c) && (r.flags |= 32),
						bv(e, r),
						C3(e, r, C, t),
						r.child
					)
				case 6:
					return e === null && lc(r), null
				case 13:
					return Iv(e, r, t)
				case 4:
					return (
						Yc(r, r.stateNode.containerInfo),
						(n = r.pendingProps),
						e === null ? (r.child = K8(r, null, n, t)) : C3(e, r, n, t),
						r.child
					)
				case 11:
					return (n = r.type), (i = r.pendingProps), (i = r.elementType === n ? i : z4(n, i)), jp(e, r, n, i, t)
				case 7:
					return C3(e, r, r.pendingProps, t), r.child
				case 8:
					return C3(e, r, r.pendingProps.children, t), r.child
				case 12:
					return C3(e, r, r.pendingProps.children, t), r.child
				case 10:
					e: {
						if (
							((n = r.type._context),
							(i = r.pendingProps),
							(c = r.memoizedProps),
							(C = i.value),
							G2(Jr, n._currentValue),
							(n._currentValue = C),
							c !== null)
						)
							if (Y4(c.value, C)) {
								if (c.children === i.children && !S3.current) {
									r = p6(e, r, t)
									break e
								}
							} else
								for (c = r.child, c !== null && (c.return = r); c !== null; ) {
									var l = c.dependencies
									if (l !== null) {
										C = c.child
										for (var u = l.firstContext; u !== null; ) {
											if (u.context === n) {
												if (c.tag === 1) {
													;(u = f6(-1, t & -t)), (u.tag = 2)
													var h = c.updateQueue
													if (h !== null) {
														h = h.shared
														var v = h.pending
														v === null ? (u.next = u) : ((u.next = v.next), (v.next = u)), (h.pending = u)
													}
												}
												;(c.lanes |= t),
													(u = c.alternate),
													u !== null && (u.lanes |= t),
													oc(c.return, t, r),
													(l.lanes |= t)
												break
											}
											u = u.next
										}
									} else if (c.tag === 10) C = c.type === r.type ? null : c.child
									else if (c.tag === 18) {
										if (((C = c.return), C === null)) throw Error(U(341))
										;(C.lanes |= t),
											(l = C.alternate),
											l !== null && (l.lanes |= t),
											oc(C, t, r),
											(C = c.sibling)
									} else C = c.child
									if (C !== null) C.return = c
									else
										for (C = c; C !== null; ) {
											if (C === r) {
												C = null
												break
											}
											if (((c = C.sibling), c !== null)) {
												;(c.return = C.return), (C = c)
												break
											}
											C = C.return
										}
									c = C
								}
						C3(e, r, i.children, t), (r = r.child)
					}
					return r
				case 9:
					return (
						(i = r.type),
						(n = r.pendingProps.children),
						U8(r, t),
						(i = o4(i)),
						(n = n(i)),
						(r.flags |= 1),
						C3(e, r, n, t),
						r.child
					)
				case 14:
					return (n = r.type), (i = z4(n, r.pendingProps)), (i = z4(n.type, i)), Gp(e, r, n, i, t)
				case 15:
					return Ov(e, r, r.type, r.pendingProps, t)
				case 17:
					return (
						(n = r.type),
						(i = r.pendingProps),
						(i = r.elementType === n ? i : z4(n, i)),
						e !== null && ((e.alternate = null), (r.alternate = null), (r.flags |= 2)),
						(r.tag = 1),
						x3(n) ? ((e = !0), Xr(r)) : (e = !1),
						U8(r, t),
						cv(r, n, i),
						Cc(r, n, i, t),
						pc(null, r, n, !0, e, t)
					)
				case 19:
					return Bv(e, r, t)
				case 22:
					return Dv(e, r, t)
			}
			throw Error(U(156, r.tag))
		}
		function $v(e, r) {
			return kd(e, r)
		}
		function UE(e, r, t, n) {
			;(this.tag = e),
				(this.key = t),
				(this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
				(this.index = 0),
				(this.ref = null),
				(this.pendingProps = r),
				(this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
				(this.mode = n),
				(this.subtreeFlags = this.flags = 0),
				(this.deletions = null),
				(this.childLanes = this.lanes = 0),
				(this.alternate = null)
		}
		function t4(e, r, t, n) {
			return new UE(e, r, t, n)
		}
		function cC(e) {
			return (e = e.prototype), !(!e || !e.isReactComponent)
		}
		function jE(e) {
			if (typeof e == 'function') return cC(e) ? 1 : 0
			if (e != null) {
				if (((e = e.$$typeof), e === Nc)) return 11
				if (e === _c) return 14
			}
			return 2
		}
		function $6(e, r) {
			var t = e.alternate
			return (
				t === null
					? ((t = t4(e.tag, r, e.key, e.mode)),
					  (t.elementType = e.elementType),
					  (t.type = e.type),
					  (t.stateNode = e.stateNode),
					  (t.alternate = e),
					  (e.alternate = t))
					: ((t.pendingProps = r), (t.type = e.type), (t.flags = 0), (t.subtreeFlags = 0), (t.deletions = null)),
				(t.flags = e.flags & 14680064),
				(t.childLanes = e.childLanes),
				(t.lanes = e.lanes),
				(t.child = e.child),
				(t.memoizedProps = e.memoizedProps),
				(t.memoizedState = e.memoizedState),
				(t.updateQueue = e.updateQueue),
				(r = e.dependencies),
				(t.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
				(t.sibling = e.sibling),
				(t.index = e.index),
				(t.ref = e.ref),
				t
			)
		}
		function Ir(e, r, t, n, i, c) {
			var C = 2
			if (((n = e), typeof e == 'function')) cC(e) && (C = 1)
			else if (typeof e == 'string') C = 5
			else
				e: switch (e) {
					case _8:
						return O5(t.children, i, c, r)
					case wc:
						;(C = 8), (i |= 8)
						break
					case Ro:
						return (e = t4(12, t, r, i | 2)), (e.elementType = Ro), (e.lanes = c), e
					case Oo:
						return (e = t4(13, t, r, i)), (e.elementType = Oo), (e.lanes = c), e
					case Do:
						return (e = t4(19, t, r, i)), (e.elementType = Do), (e.lanes = c), e
					case hd:
						return lt(t, i, c, r)
					default:
						if (typeof e == 'object' && e !== null)
							switch (e.$$typeof) {
								case fd:
									C = 10
									break e
								case ud:
									C = 9
									break e
								case Nc:
									C = 11
									break e
								case _c:
									C = 14
									break e
								case F6:
									;(C = 16), (n = null)
									break e
							}
						throw Error(U(130, e == null ? e : typeof e, ''))
				}
			return (r = t4(C, t, r, i)), (r.elementType = e), (r.type = n), (r.lanes = c), r
		}
		function O5(e, r, t, n) {
			return (e = t4(7, e, n, r)), (e.lanes = t), e
		}
		function lt(e, r, t, n) {
			return (e = t4(22, e, n, r)), (e.elementType = hd), (e.lanes = t), (e.stateNode = {}), e
		}
		function Ao(e, r, t) {
			return (e = t4(6, e, null, r)), (e.lanes = t), e
		}
		function Eo(e, r, t) {
			return (
				(r = t4(4, e.children !== null ? e.children : [], e.key, r)),
				(r.lanes = t),
				(r.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
				r
			)
		}
		function GE(e, r, t, n, i) {
			;(this.tag = r),
				(this.containerInfo = e),
				(this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
				(this.timeoutHandle = -1),
				(this.callbackNode = this.pendingContext = this.context = null),
				(this.callbackPriority = 0),
				(this.eventTimes = mo(0)),
				(this.expirationTimes = mo(-1)),
				(this.entangledLanes =
					this.finishedLanes =
					this.mutableReadLanes =
					this.expiredLanes =
					this.pingedLanes =
					this.suspendedLanes =
					this.pendingLanes =
						0),
				(this.entanglements = mo(0)),
				(this.identifierPrefix = n),
				(this.onRecoverableError = i),
				(this.mutableSourceEagerHydrationData = null)
		}
		function CC(e, r, t, n, i, c, C, l, u) {
			return (
				(e = new GE(e, r, t, l, u)),
				r === 1 ? ((r = 1), c === !0 && (r |= 8)) : (r = 0),
				(c = t4(3, null, null, r)),
				(e.current = c),
				(c.stateNode = e),
				(c.memoizedState = { element: n, isDehydrated: t, cache: null, transitions: null }),
				Uc(c),
				e
			)
		}
		function WE(e, r, t) {
			var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
			return { $$typeof: N8, key: n == null ? null : '' + n, children: e, containerInfo: r, implementation: t }
		}
		function em(e) {
			if (!e) return Z6
			e = e._reactInternals
			e: {
				if (B5(e) !== e || e.tag !== 1) throw Error(U(170))
				var r = e
				do {
					switch (r.tag) {
						case 3:
							r = r.stateNode.context
							break e
						case 1:
							if (x3(r.type)) {
								r = r.stateNode.__reactInternalMemoizedMergedChildContext
								break e
							}
					}
					r = r.return
				} while (r !== null)
				throw Error(U(171))
			}
			if (e.tag === 1) {
				var t = e.type
				if (x3(t)) return nv(e, t, r)
			}
			return r
		}
		function rm(e, r, t, n, i, c, C, l, u) {
			return (
				(e = CC(t, n, !0, e, i, c, C, l, u)),
				(e.context = em(null)),
				(t = e.current),
				(n = s3()),
				(i = X6(t)),
				(c = f6(n, i)),
				(c.callback = r ?? null),
				K6(t, c),
				(e.current.lanes = i),
				ae(e, i, n),
				w3(e, n),
				e
			)
		}
		function Vt(e, r, t, n) {
			var i = r.current,
				c = s3(),
				C = X6(i)
			return (
				(t = em(t)),
				r.context === null ? (r.context = t) : (r.pendingContext = t),
				(r = f6(c, C)),
				(r.payload = { element: e }),
				(n = n === void 0 ? null : n),
				n !== null && (r.callback = n),
				K6(i, r),
				(e = i4(i, C, c)),
				e !== null && Rr(e, i, C),
				C
			)
		}
		function ft(e) {
			if (((e = e.current), !e.child)) return null
			switch (e.child.tag) {
				case 5:
					return e.child.stateNode
				default:
					return e.child.stateNode
			}
		}
		function cd(e, r) {
			if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
				var t = e.retryLane
				e.retryLane = t !== 0 && t < r ? t : r
			}
		}
		function sC(e, r) {
			cd(e, r), (e = e.alternate) && cd(e, r)
		}
		function YE() {
			return null
		}
		var tm =
			typeof reportError == 'function'
				? reportError
				: function (e) {
						console.error(e)
				  }
		function lC(e) {
			this._internalRoot = e
		}
		yt.prototype.render = lC.prototype.render = function (e) {
			var r = this._internalRoot
			if (r === null) throw Error(U(409))
			Vt(e, r, null, null)
		}
		yt.prototype.unmount = lC.prototype.unmount = function () {
			var e = this._internalRoot
			if (e !== null) {
				this._internalRoot = null
				var r = e.containerInfo
				F5(function () {
					Vt(null, e, null, null)
				}),
					(r[h6] = null)
			}
		}
		function yt(e) {
			this._internalRoot = e
		}
		yt.prototype.unstable_scheduleHydration = function (e) {
			if (e) {
				var r = Od()
				e = { blockedOn: null, target: e, priority: r }
				for (var t = 0; t < B6.length && r !== 0 && r < B6[t].priority; t++);
				B6.splice(t, 0, e), t === 0 && bd(e)
			}
		}
		function fC(e) {
			return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
		}
		function St(e) {
			return !(
				!e ||
				(e.nodeType !== 1 &&
					e.nodeType !== 9 &&
					e.nodeType !== 11 &&
					(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
			)
		}
		function Cd() {}
		function KE(e, r, t, n, i) {
			if (i) {
				if (typeof n == 'function') {
					var c = n
					n = function () {
						var h = ft(C)
						c.call(h)
					}
				}
				var C = rm(r, n, e, 0, null, !1, !1, '', Cd)
				return (e._reactRootContainer = C), (e[h6] = C.current), K7(e.nodeType === 8 ? e.parentNode : e), F5(), C
			}
			for (; (i = e.lastChild); ) e.removeChild(i)
			if (typeof n == 'function') {
				var l = n
				n = function () {
					var h = ft(u)
					l.call(h)
				}
			}
			var u = CC(e, 0, !1, null, null, !1, !1, '', Cd)
			return (
				(e._reactRootContainer = u),
				(e[h6] = u.current),
				K7(e.nodeType === 8 ? e.parentNode : e),
				F5(function () {
					Vt(r, u, t, n)
				}),
				u
			)
		}
		function xt(e, r, t, n, i) {
			var c = t._reactRootContainer
			if (c) {
				var C = c
				if (typeof i == 'function') {
					var l = i
					i = function () {
						var u = ft(C)
						l.call(u)
					}
				}
				Vt(r, C, e, i)
			} else C = KE(t, r, e, i, n)
			return ft(C)
		}
		Td = function (e) {
			switch (e.tag) {
				case 3:
					var r = e.stateNode
					if (r.current.memoizedState.isDehydrated) {
						var t = k7(r.pendingLanes)
						t !== 0 && (Ac(r, t | 1), w3(r, d1()), (N2 & 6) === 0 && ((Z8 = d1() + 500), t5()))
					}
					break
				case 13:
					var n = s3()
					F5(function () {
						return i4(e, 1, n)
					}),
						sC(e, 1)
			}
		}
		Ec = function (e) {
			if (e.tag === 13) {
				var r = s3()
				i4(e, 134217728, r), sC(e, 134217728)
			}
		}
		Rd = function (e) {
			if (e.tag === 13) {
				var r = s3(),
					t = X6(e)
				i4(e, t, r), sC(e, t)
			}
		}
		Od = function () {
			return R2
		}
		Dd = function (e, r) {
			var t = R2
			try {
				return (R2 = e), r()
			} finally {
				R2 = t
			}
		}
		Yo = function (e, r, t) {
			switch (r) {
				case 'input':
					if ((Io(e, t), (r = t.name), t.type === 'radio' && r != null)) {
						for (t = e; t.parentNode; ) t = t.parentNode
						for (
							t = t.querySelectorAll('input[name=' + JSON.stringify('' + r) + '][type="radio"]'), r = 0;
							r < t.length;
							r++
						) {
							var n = t[r]
							if (n !== e && n.form === e.form) {
								var i = vt(n)
								if (!i) throw Error(U(90))
								dd(n), Io(n, i)
							}
						}
					}
					break
				case 'textarea':
					md(e, t)
					break
				case 'select':
					;(r = t.value), r != null && F8(e, !!t.multiple, r, !1)
			}
		}
		yd = aC
		Sd = F5
		var QE = { usingClientEntryPoint: !1, Events: [oe, E8, vt, Hd, Vd, aC] },
			x7 = {
				findFiberByHostInstance: P5,
				bundleType: 0,
				version: '18.0.0-fc46dba67-20220329',
				rendererPackageName: 'react-dom',
			},
			XE = {
				bundleType: x7.bundleType,
				version: x7.version,
				rendererPackageName: x7.rendererPackageName,
				rendererConfig: x7.rendererConfig,
				overrideHookState: null,
				overrideHookStateDeletePath: null,
				overrideHookStateRenamePath: null,
				overrideProps: null,
				overridePropsDeletePath: null,
				overridePropsRenamePath: null,
				setErrorHandler: null,
				setSuspenseHandler: null,
				scheduleUpdate: null,
				currentDispatcherRef: d6.ReactCurrentDispatcher,
				findHostInstanceByFiber: function (e) {
					return (e = Nd(e)), e === null ? null : e.stateNode
				},
				findFiberByHostInstance: x7.findFiberByHostInstance || YE,
				findHostInstancesForRefresh: null,
				scheduleRefresh: null,
				scheduleRoot: null,
				setRefreshHandler: null,
				getCurrentFiber: null,
				reconcilerVersion: '18.0.0-fc46dba67-20220329',
			}
		if (
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
			((w7 = __REACT_DEVTOOLS_GLOBAL_HOOK__), !w7.isDisabled && w7.supportsFiber)
		)
			try {
				;(ut = w7.inject(XE)), (G4 = w7)
			} catch {}
		var w7
		F3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = QE
		F3.createPortal = function (e, r) {
			var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
			if (!fC(r)) throw Error(U(200))
			return WE(e, r, null, t)
		}
		F3.createRoot = function (e, r) {
			if (!fC(e)) throw Error(U(299))
			var t = !1,
				n = '',
				i = tm
			return (
				r != null &&
					(r.unstable_strictMode === !0 && (t = !0),
					r.identifierPrefix !== void 0 && (n = r.identifierPrefix),
					r.onRecoverableError !== void 0 && (i = r.onRecoverableError)),
				(r = CC(e, 1, !1, null, null, t, !1, n, i)),
				(e[h6] = r.current),
				K7(e.nodeType === 8 ? e.parentNode : e),
				new lC(r)
			)
		}
		F3.findDOMNode = function (e) {
			if (e == null) return null
			if (e.nodeType === 1) return e
			var r = e._reactInternals
			if (r === void 0)
				throw typeof e.render == 'function' ? Error(U(188)) : ((e = Object.keys(e).join(',')), Error(U(268, e)))
			return (e = Nd(r)), (e = e === null ? null : e.stateNode), e
		}
		F3.flushSync = function (e) {
			return F5(e)
		}
		F3.hydrate = function (e, r, t) {
			if (!St(r)) throw Error(U(200))
			return xt(null, e, r, !0, t)
		}
		F3.hydrateRoot = function (e, r, t) {
			if (!fC(e)) throw Error(U(405))
			var n = (t != null && t.hydratedSources) || null,
				i = !1,
				c = '',
				C = tm
			if (
				(t != null &&
					(t.unstable_strictMode === !0 && (i = !0),
					t.identifierPrefix !== void 0 && (c = t.identifierPrefix),
					t.onRecoverableError !== void 0 && (C = t.onRecoverableError)),
				(r = rm(r, null, e, 1, t ?? null, i, !1, c, C)),
				(e[h6] = r.current),
				K7(e),
				n)
			)
				for (e = 0; e < n.length; e++)
					(t = n[e]),
						(i = t._getVersion),
						(i = i(t._source)),
						r.mutableSourceEagerHydrationData == null
							? (r.mutableSourceEagerHydrationData = [t, i])
							: r.mutableSourceEagerHydrationData.push(t, i)
			return new yt(r)
		}
		F3.render = function (e, r, t) {
			if (!St(r)) throw Error(U(200))
			return xt(null, e, r, !1, t)
		}
		F3.unmountComponentAtNode = function (e) {
			if (!St(e)) throw Error(U(40))
			return e._reactRootContainer
				? (F5(function () {
						xt(null, null, e, !1, function () {
							;(e._reactRootContainer = null), (e[h6] = null)
						})
				  }),
				  !0)
				: !1
		}
		F3.unstable_batchedUpdates = aC
		F3.unstable_renderSubtreeIntoContainer = function (e, r, t, n) {
			if (!St(t)) throw Error(U(200))
			if (e == null || e._reactInternals === void 0) throw Error(U(38))
			return xt(e, r, t, !1, n)
		}
		F3.version = '18.0.0-fc46dba67-20220329'
	})
	var uC = z((S22, im) => {
		'use strict'
		function am() {
			if (
				!(
					typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
					typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
				)
			)
				try {
					__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(am)
				} catch (e) {
					console.error(e)
				}
		}
		am(), (im.exports = nm())
	})
	var om = z((hC) => {
		'use strict'
		hC.__esModule = !0
		Object.defineProperty(hC, 'unstable_batchedUpdates', {
			enumerable: !0,
			get: function () {
				return JE.unstable_batchedUpdates
			},
		})
		var JE = uC()
	})
	var pC = z((r0) => {
		'use strict'
		r0.__esModule = !0
		r0.getBatch = r0.setBatch = void 0
		function ZE(e) {
			e()
		}
		var cm = ZE,
			$E = (e) => (cm = e)
		r0.setBatch = $E
		var eT = () => cm
		r0.getBatch = eT
	})
	var Q4 = z((N22, Ce) => {
		function rT(e) {
			return e && e.__esModule ? e : { default: e }
		}
		;(Ce.exports = rT), (Ce.exports.__esModule = !0), (Ce.exports.default = Ce.exports)
	})
	var n5 = z((t0) => {
		'use strict'
		var tT = Q4()
		t0.__esModule = !0
		t0.default = t0.ReactReduxContext = void 0
		var nT = tT(y2()),
			Cm = nT.default.createContext(null)
		t0.ReactReduxContext = Cm
		var aT = Cm
		t0.default = aT
	})
	var vC = z((dC) => {
		'use strict'
		dC.__esModule = !0
		dC.useReduxContext = cT
		var iT = y2(),
			oT = n5()
		function cT() {
			return (0, iT.useContext)(oT.ReactReduxContext)
		}
	})
	var mC = z((wt) => {
		'use strict'
		wt.__esModule = !0
		wt.notInitialized = void 0
		var CT = () => {
			throw new Error('uSES not initialized!')
		}
		wt.notInitialized = CT
	})
	var LC = z((q5) => {
		'use strict'
		q5.__esModule = !0
		q5.createSelectorHook = um
		q5.useSelector = q5.initializeUseSelector = void 0
		var sm = y2(),
			sT = vC(),
			lm = n5(),
			lT = mC(),
			fm = lT.notInitialized,
			fT = (e) => {
				fm = e
			}
		q5.initializeUseSelector = fT
		var uT = (e, r) => e === r
		function um(e = lm.ReactReduxContext) {
			let r = e === lm.ReactReduxContext ? sT.useReduxContext : () => (0, sm.useContext)(e)
			return function (n, i = uT) {
				let { store: c, subscription: C, getServerState: l } = r(),
					u = fm(C.addNestedSub, c.getState, l || c.getState, n, i)
				return (0, sm.useDebugValue)(u), u
			}
		}
		var hT = um()
		q5.useSelector = hT
	})
	var MC = z((E22, v6) => {
		function gC() {
			return (
				(v6.exports = gC =
					Object.assign ||
					function (e) {
						for (var r = 1; r < arguments.length; r++) {
							var t = arguments[r]
							for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
						}
						return e
					}),
				(v6.exports.__esModule = !0),
				(v6.exports.default = v6.exports),
				gC.apply(this, arguments)
			)
		}
		;(v6.exports = gC), (v6.exports.__esModule = !0), (v6.exports.default = v6.exports)
	})
	var zC = z((T22, se) => {
		function pT(e, r) {
			if (e == null) return {}
			var t = {},
				n = Object.keys(e),
				i,
				c
			for (c = 0; c < n.length; c++) (i = n[c]), !(r.indexOf(i) >= 0) && (t[i] = e[i])
			return t
		}
		;(se.exports = pT), (se.exports.__esModule = !0), (se.exports.default = se.exports)
	})
	var pm = z((O2) => {
		'use strict'
		var O1 = typeof Symbol == 'function' && Symbol.for,
			HC = O1 ? Symbol.for('react.element') : 60103,
			VC = O1 ? Symbol.for('react.portal') : 60106,
			Nt = O1 ? Symbol.for('react.fragment') : 60107,
			_t = O1 ? Symbol.for('react.strict_mode') : 60108,
			kt = O1 ? Symbol.for('react.profiler') : 60114,
			Pt = O1 ? Symbol.for('react.provider') : 60109,
			At = O1 ? Symbol.for('react.context') : 60110,
			yC = O1 ? Symbol.for('react.async_mode') : 60111,
			Et = O1 ? Symbol.for('react.concurrent_mode') : 60111,
			Tt = O1 ? Symbol.for('react.forward_ref') : 60112,
			Rt = O1 ? Symbol.for('react.suspense') : 60113,
			dT = O1 ? Symbol.for('react.suspense_list') : 60120,
			Ot = O1 ? Symbol.for('react.memo') : 60115,
			Dt = O1 ? Symbol.for('react.lazy') : 60116,
			vT = O1 ? Symbol.for('react.block') : 60121,
			mT = O1 ? Symbol.for('react.fundamental') : 60117,
			LT = O1 ? Symbol.for('react.responder') : 60118,
			gT = O1 ? Symbol.for('react.scope') : 60119
		function I3(e) {
			if (typeof e == 'object' && e !== null) {
				var r = e.$$typeof
				switch (r) {
					case HC:
						switch (((e = e.type), e)) {
							case yC:
							case Et:
							case Nt:
							case kt:
							case _t:
							case Rt:
								return e
							default:
								switch (((e = e && e.$$typeof), e)) {
									case At:
									case Tt:
									case Dt:
									case Ot:
									case Pt:
										return e
									default:
										return r
								}
						}
					case VC:
						return r
				}
			}
		}
		function hm(e) {
			return I3(e) === Et
		}
		O2.AsyncMode = yC
		O2.ConcurrentMode = Et
		O2.ContextConsumer = At
		O2.ContextProvider = Pt
		O2.Element = HC
		O2.ForwardRef = Tt
		O2.Fragment = Nt
		O2.Lazy = Dt
		O2.Memo = Ot
		O2.Portal = VC
		O2.Profiler = kt
		O2.StrictMode = _t
		O2.Suspense = Rt
		O2.isAsyncMode = function (e) {
			return hm(e) || I3(e) === yC
		}
		O2.isConcurrentMode = hm
		O2.isContextConsumer = function (e) {
			return I3(e) === At
		}
		O2.isContextProvider = function (e) {
			return I3(e) === Pt
		}
		O2.isElement = function (e) {
			return typeof e == 'object' && e !== null && e.$$typeof === HC
		}
		O2.isForwardRef = function (e) {
			return I3(e) === Tt
		}
		O2.isFragment = function (e) {
			return I3(e) === Nt
		}
		O2.isLazy = function (e) {
			return I3(e) === Dt
		}
		O2.isMemo = function (e) {
			return I3(e) === Ot
		}
		O2.isPortal = function (e) {
			return I3(e) === VC
		}
		O2.isProfiler = function (e) {
			return I3(e) === kt
		}
		O2.isStrictMode = function (e) {
			return I3(e) === _t
		}
		O2.isSuspense = function (e) {
			return I3(e) === Rt
		}
		O2.isValidElementType = function (e) {
			return (
				typeof e == 'string' ||
				typeof e == 'function' ||
				e === Nt ||
				e === Et ||
				e === kt ||
				e === _t ||
				e === Rt ||
				e === dT ||
				(typeof e == 'object' &&
					e !== null &&
					(e.$$typeof === Dt ||
						e.$$typeof === Ot ||
						e.$$typeof === Pt ||
						e.$$typeof === At ||
						e.$$typeof === Tt ||
						e.$$typeof === mT ||
						e.$$typeof === LT ||
						e.$$typeof === gT ||
						e.$$typeof === vT))
			)
		}
		O2.typeOf = I3
	})
	var vm = z((O22, dm) => {
		'use strict'
		dm.exports = pm()
	})
	var wC = z((D22, Hm) => {
		'use strict'
		var SC = vm(),
			MT = {
				childContextTypes: !0,
				contextType: !0,
				contextTypes: !0,
				defaultProps: !0,
				displayName: !0,
				getDefaultProps: !0,
				getDerivedStateFromError: !0,
				getDerivedStateFromProps: !0,
				mixins: !0,
				propTypes: !0,
				type: !0,
			},
			zT = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
			HT = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
			Mm = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
			xC = {}
		xC[SC.ForwardRef] = HT
		xC[SC.Memo] = Mm
		function mm(e) {
			return SC.isMemo(e) ? Mm : xC[e.$$typeof] || MT
		}
		var VT = Object.defineProperty,
			yT = Object.getOwnPropertyNames,
			Lm = Object.getOwnPropertySymbols,
			ST = Object.getOwnPropertyDescriptor,
			xT = Object.getPrototypeOf,
			gm = Object.prototype
		function zm(e, r, t) {
			if (typeof r != 'string') {
				if (gm) {
					var n = xT(r)
					n && n !== gm && zm(e, n, t)
				}
				var i = yT(r)
				Lm && (i = i.concat(Lm(r)))
				for (var c = mm(e), C = mm(r), l = 0; l < i.length; ++l) {
					var u = i[l]
					if (!zT[u] && !(t && t[u]) && !(C && C[u]) && !(c && c[u])) {
						var h = ST(r, u)
						try {
							VT(e, u, h)
						} catch {}
					}
				}
			}
			return e
		}
		Hm.exports = zm
	})
	var Vm = z((D2) => {
		'use strict'
		var NC = Symbol.for('react.element'),
			_C = Symbol.for('react.portal'),
			bt = Symbol.for('react.fragment'),
			Ft = Symbol.for('react.strict_mode'),
			It = Symbol.for('react.profiler'),
			Bt = Symbol.for('react.provider'),
			qt = Symbol.for('react.context'),
			wT = Symbol.for('react.server_context'),
			Ut = Symbol.for('react.forward_ref'),
			jt = Symbol.for('react.suspense'),
			Gt = Symbol.for('react.suspense_list'),
			Wt = Symbol.for('react.memo'),
			Yt = Symbol.for('react.lazy'),
			NT = Symbol.for('react.offscreen'),
			_T = Symbol.for('react.module.reference')
		function c4(e) {
			if (typeof e == 'object' && e !== null) {
				var r = e.$$typeof
				switch (r) {
					case NC:
						switch (((e = e.type), e)) {
							case bt:
							case It:
							case Ft:
							case jt:
							case Gt:
								return e
							default:
								switch (((e = e && e.$$typeof), e)) {
									case wT:
									case qt:
									case Ut:
									case Yt:
									case Wt:
									case Bt:
										return e
									default:
										return r
								}
						}
					case _C:
						return r
				}
			}
		}
		D2.ContextConsumer = qt
		D2.ContextProvider = Bt
		D2.Element = NC
		D2.ForwardRef = Ut
		D2.Fragment = bt
		D2.Lazy = Yt
		D2.Memo = Wt
		D2.Portal = _C
		D2.Profiler = It
		D2.StrictMode = Ft
		D2.Suspense = jt
		D2.SuspenseList = Gt
		D2.isAsyncMode = function () {
			return !1
		}
		D2.isConcurrentMode = function () {
			return !1
		}
		D2.isContextConsumer = function (e) {
			return c4(e) === qt
		}
		D2.isContextProvider = function (e) {
			return c4(e) === Bt
		}
		D2.isElement = function (e) {
			return typeof e == 'object' && e !== null && e.$$typeof === NC
		}
		D2.isForwardRef = function (e) {
			return c4(e) === Ut
		}
		D2.isFragment = function (e) {
			return c4(e) === bt
		}
		D2.isLazy = function (e) {
			return c4(e) === Yt
		}
		D2.isMemo = function (e) {
			return c4(e) === Wt
		}
		D2.isPortal = function (e) {
			return c4(e) === _C
		}
		D2.isProfiler = function (e) {
			return c4(e) === It
		}
		D2.isStrictMode = function (e) {
			return c4(e) === Ft
		}
		D2.isSuspense = function (e) {
			return c4(e) === jt
		}
		D2.isSuspenseList = function (e) {
			return c4(e) === Gt
		}
		D2.isValidElementType = function (e) {
			return (
				typeof e == 'string' ||
				typeof e == 'function' ||
				e === bt ||
				e === It ||
				e === Ft ||
				e === jt ||
				e === Gt ||
				e === NT ||
				(typeof e == 'object' &&
					e !== null &&
					(e.$$typeof === Yt ||
						e.$$typeof === Wt ||
						e.$$typeof === Bt ||
						e.$$typeof === qt ||
						e.$$typeof === Ut ||
						e.$$typeof === _T ||
						e.getModuleId !== void 0))
			)
		}
		D2.typeOf = c4
	})
	var kC = z((F22, ym) => {
		'use strict'
		ym.exports = Vm()
	})
	var AC = z((PC) => {
		'use strict'
		PC.__esModule = !0
		PC.default = kT
		function kT(e) {
			typeof console < 'u' && typeof console.error == 'function' && console.error(e)
			try {
				throw new Error(e)
			} catch {}
		}
	})
	var Sm = z((TC) => {
		'use strict'
		var PT = Q4()
		TC.__esModule = !0
		TC.default = ET
		var AT = PT(AC())
		function EC(e, r) {
			if (e)
				(r === 'mapStateToProps' || r === 'mapDispatchToProps') &&
					(Object.prototype.hasOwnProperty.call(e, 'dependsOnOwnProps') ||
						(0, AT.default)(`The selector for ${r} of connect did not specify a value for dependsOnOwnProps.`))
			else throw new Error(`Unexpected value for ${r} in connect.`)
		}
		function ET(e, r, t) {
			EC(e, 'mapStateToProps'), EC(r, 'mapDispatchToProps'), EC(t, 'mergeProps')
		}
	})
	var Nm = z((Kt) => {
		'use strict'
		var xm = Q4()
		Kt.__esModule = !0
		Kt.pureFinalPropsSelectorFactory = wm
		Kt.default = OT
		var TT = xm(zC()),
			q22 = xm(Sm()),
			RT = ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']
		function wm(e, r, t, n, { areStatesEqual: i, areOwnPropsEqual: c, areStatePropsEqual: C }) {
			let l = !1,
				u,
				h,
				v,
				g,
				m
			function H(M, S) {
				return (u = M), (h = S), (v = e(u, h)), (g = r(n, h)), (m = t(v, g, h)), (l = !0), m
			}
			function L() {
				return (v = e(u, h)), r.dependsOnOwnProps && (g = r(n, h)), (m = t(v, g, h)), m
			}
			function x() {
				return e.dependsOnOwnProps && (v = e(u, h)), r.dependsOnOwnProps && (g = r(n, h)), (m = t(v, g, h)), m
			}
			function w() {
				let M = e(u, h),
					S = !C(M, v)
				return (v = M), S && (m = t(v, g, h)), m
			}
			function V(M, S) {
				let k = !c(S, h),
					D = !i(M, u)
				return (u = M), (h = S), k && D ? L() : k ? x() : D ? w() : m
			}
			return function (S, k) {
				return l ? V(S, k) : H(S, k)
			}
		}
		function OT(e, r) {
			let { initMapStateToProps: t, initMapDispatchToProps: n, initMergeProps: i } = r,
				c = (0, TT.default)(r, RT),
				C = t(e, c),
				l = n(e, c),
				u = i(e, c)
			return wm(C, l, u, e, c)
		}
	})
	var _m = z((RC) => {
		'use strict'
		RC.__esModule = !0
		RC.default = DT
		function DT(e, r) {
			let t = {}
			for (let n in e) {
				let i = e[n]
				typeof i == 'function' && (t[n] = (...c) => r(i(...c)))
			}
			return t
		}
	})
	var km = z((OC) => {
		'use strict'
		OC.__esModule = !0
		OC.default = bT
		function bT(e) {
			if (typeof e != 'object' || e === null) return !1
			let r = Object.getPrototypeOf(e)
			if (r === null) return !0
			let t = r
			for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t)
			return r === t
		}
	})
	var bC = z((DC) => {
		'use strict'
		var Pm = Q4()
		DC.__esModule = !0
		DC.default = BT
		var FT = Pm(km()),
			IT = Pm(AC())
		function BT(e, r, t) {
			;(0, FT.default)(e) || (0, IT.default)(`${t}() in ${r} must return a plain object. Instead received ${e}.`)
		}
	})
	var IC = z((le) => {
		'use strict'
		var qT = Q4()
		le.__esModule = !0
		le.wrapMapToPropsConstant = UT
		le.getDependsOnOwnProps = FC
		le.wrapMapToPropsFunc = jT
		var Y22 = qT(bC())
		function UT(e) {
			return function (t) {
				let n = e(t)
				function i() {
					return n
				}
				return (i.dependsOnOwnProps = !1), i
			}
		}
		function FC(e) {
			return e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : e.length !== 1
		}
		function jT(e, r) {
			return function (n, { displayName: i }) {
				let c = function (l, u) {
					return c.dependsOnOwnProps ? c.mapToProps(l, u) : c.mapToProps(l, void 0)
				}
				return (
					(c.dependsOnOwnProps = !0),
					(c.mapToProps = function (l, u) {
						;(c.mapToProps = e), (c.dependsOnOwnProps = FC(e))
						let h = c(l, u)
						return typeof h == 'function' && ((c.mapToProps = h), (c.dependsOnOwnProps = FC(h)), (h = c(l, u))), h
					}),
					c
				)
			}
		}
	})
	var Qt = z((BC) => {
		'use strict'
		BC.__esModule = !0
		BC.createInvalidArgFactory = GT
		function GT(e, r) {
			return (t, n) => {
				throw new Error(
					`Invalid value of type ${typeof e} for ${r} argument when connecting component ${
						n.wrappedComponentName
					}.`,
				)
			}
		}
	})
	var Am = z((UC) => {
		'use strict'
		var WT = Q4()
		UC.__esModule = !0
		UC.mapDispatchToPropsFactory = QT
		var YT = WT(_m()),
			qC = IC(),
			KT = Qt()
		function QT(e) {
			return e && typeof e == 'object'
				? (0, qC.wrapMapToPropsConstant)((r) => (0, YT.default)(e, r))
				: e
				? typeof e == 'function'
					? (0, qC.wrapMapToPropsFunc)(e, 'mapDispatchToProps')
					: (0, KT.createInvalidArgFactory)(e, 'mapDispatchToProps')
				: (0, qC.wrapMapToPropsConstant)((r) => ({ dispatch: r }))
		}
	})
	var Tm = z((jC) => {
		'use strict'
		jC.__esModule = !0
		jC.mapStateToPropsFactory = JT
		var Em = IC(),
			XT = Qt()
		function JT(e) {
			return e
				? typeof e == 'function'
					? (0, Em.wrapMapToPropsFunc)(e, 'mapStateToProps')
					: (0, XT.createInvalidArgFactory)(e, 'mapStateToProps')
				: (0, Em.wrapMapToPropsConstant)(() => ({}))
		}
	})
	var bm = z((fe) => {
		'use strict'
		var Rm = Q4()
		fe.__esModule = !0
		fe.defaultMergeProps = Om
		fe.wrapMergePropsFunc = Dm
		fe.mergePropsFactory = eR
		var ZT = Rm(MC()),
			Z22 = Rm(bC()),
			$T = Qt()
		function Om(e, r, t) {
			return (0, ZT.default)({}, t, e, r)
		}
		function Dm(e) {
			return function (t, { displayName: n, areMergedPropsEqual: i }) {
				let c = !1,
					C
				return function (u, h, v) {
					let g = e(u, h, v)
					return c ? i(g, C) || (C = g) : ((c = !0), (C = g)), C
				}
			}
		}
		function eR(e) {
			return e ? (typeof e == 'function' ? Dm(e) : (0, $T.createInvalidArgFactory)(e, 'mergeProps')) : () => Om
		}
	})
	var WC = z((GC) => {
		'use strict'
		GC.__esModule = !0
		GC.createSubscription = nR
		var rR = pC()
		function tR() {
			let e = (0, rR.getBatch)(),
				r = null,
				t = null
			return {
				clear() {
					;(r = null), (t = null)
				},
				notify() {
					e(() => {
						let n = r
						for (; n; ) n.callback(), (n = n.next)
					})
				},
				get() {
					let n = [],
						i = r
					for (; i; ) n.push(i), (i = i.next)
					return n
				},
				subscribe(n) {
					let i = !0,
						c = (t = { callback: n, next: null, prev: t })
					return (
						c.prev ? (c.prev.next = c) : (r = c),
						function () {
							!i ||
								r === null ||
								((i = !1),
								c.next ? (c.next.prev = c.prev) : (t = c.prev),
								c.prev ? (c.prev.next = c.next) : (r = c.next))
						}
					)
				},
			}
		}
		var Fm = { notify() {}, get: () => [] }
		function nR(e, r) {
			let t,
				n = Fm
			function i(g) {
				return u(), n.subscribe(g)
			}
			function c() {
				n.notify()
			}
			function C() {
				v.onStateChange && v.onStateChange()
			}
			function l() {
				return Boolean(t)
			}
			function u() {
				t || ((t = r ? r.addNestedSub(C) : e.subscribe(C)), (n = tR()))
			}
			function h() {
				t && (t(), (t = void 0), n.clear(), (n = Fm))
			}
			let v = {
				addNestedSub: i,
				notifyNestedSubs: c,
				handleChangeWrapper: C,
				isSubscribed: l,
				trySubscribe: u,
				tryUnsubscribe: h,
				getListeners: () => n,
			}
			return v
		}
	})
	var YC = z((n0) => {
		'use strict'
		n0.__esModule = !0
		n0.useIsomorphicLayoutEffect = n0.canUseDOM = void 0
		var Im = y2(),
			Bm = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u'
		n0.canUseDOM = Bm
		var aR = Bm ? Im.useLayoutEffect : Im.useEffect
		n0.useIsomorphicLayoutEffect = aR
	})
	var QC = z((KC) => {
		'use strict'
		KC.__esModule = !0
		KC.default = iR
		function qm(e, r) {
			return e === r ? e !== 0 || r !== 0 || 1 / e === 1 / r : e !== e && r !== r
		}
		function iR(e, r) {
			if (qm(e, r)) return !0
			if (typeof e != 'object' || e === null || typeof r != 'object' || r === null) return !1
			let t = Object.keys(e),
				n = Object.keys(r)
			if (t.length !== n.length) return !1
			for (let i = 0; i < t.length; i++)
				if (!Object.prototype.hasOwnProperty.call(r, t[i]) || !qm(e[t[i]], r[t[i]])) return !1
			return !0
		}
	})
	var $C = z((a0) => {
		'use strict'
		var ue = Q4()
		a0.__esModule = !0
		a0.default = a0.initializeConnect = void 0
		var XC = ue(MC()),
			oR = ue(zC()),
			Um = ue(wC()),
			c1 = vR(y2()),
			cR = kC(),
			CR = ue(Nm()),
			sR = Am(),
			lR = Tm(),
			fR = bm(),
			uR = WC(),
			ZC = YC(),
			JC = ue(QC()),
			hR = n5(),
			pR = mC(),
			dR = ['reactReduxForwardedRef']
		function jm(e) {
			if (typeof WeakMap != 'function') return null
			var r = new WeakMap(),
				t = new WeakMap()
			return (jm = function (n) {
				return n ? t : r
			})(e)
		}
		function vR(e, r) {
			if (!r && e && e.__esModule) return e
			if (e === null || (typeof e != 'object' && typeof e != 'function')) return { default: e }
			var t = jm(r)
			if (t && t.has(e)) return t.get(e)
			var n = {},
				i = Object.defineProperty && Object.getOwnPropertyDescriptor
			for (var c in e)
				if (c !== 'default' && Object.prototype.hasOwnProperty.call(e, c)) {
					var C = i ? Object.getOwnPropertyDescriptor(e, c) : null
					C && (C.get || C.set) ? Object.defineProperty(n, c, C) : (n[c] = e[c])
				}
			return (n.default = e), t && t.set(e, n), n
		}
		var Gm = pR.notInitialized,
			mR = (e) => {
				Gm = e
			}
		a0.initializeConnect = mR
		var LR = [null, null]
		function gR(e, r, t) {
			;(0, ZC.useIsomorphicLayoutEffect)(() => e(...r), t)
		}
		function MR(e, r, t, n, i, c) {
			;(e.current = n), (t.current = !1), i.current && ((i.current = null), c())
		}
		function zR(e, r, t, n, i, c, C, l, u, h, v) {
			if (!e) return () => {}
			let g = !1,
				m = null,
				H = () => {
					if (g || !l.current) return
					let x = r.getState(),
						w,
						V
					try {
						w = n(x, i.current)
					} catch (M) {
						;(V = M), (m = M)
					}
					V || (m = null),
						w === c.current ? C.current || h() : ((c.current = w), (u.current = w), (C.current = !0), v())
				}
			return (
				(t.onStateChange = H),
				t.trySubscribe(),
				H(),
				() => {
					if (((g = !0), t.tryUnsubscribe(), (t.onStateChange = null), m)) throw m
				}
			)
		}
		function HR(e, r) {
			return e === r
		}
		function VR(
			e,
			r,
			t,
			{
				pure: n,
				areStatesEqual: i = HR,
				areOwnPropsEqual: c = JC.default,
				areStatePropsEqual: C = JC.default,
				areMergedPropsEqual: l = JC.default,
				forwardRef: u = !1,
				context: h = hR.ReactReduxContext,
			} = {},
		) {
			let v = h,
				g = (0, lR.mapStateToPropsFactory)(e),
				m = (0, sR.mapDispatchToPropsFactory)(r),
				H = (0, fR.mergePropsFactory)(t),
				L = Boolean(e)
			return (w) => {
				let V = w.displayName || w.name || 'Component',
					M = `Connect(${V})`,
					S = {
						shouldHandleStateChanges: L,
						displayName: M,
						wrappedComponentName: V,
						WrappedComponent: w,
						initMapStateToProps: g,
						initMapDispatchToProps: m,
						initMergeProps: H,
						areStatesEqual: i,
						areStatePropsEqual: C,
						areOwnPropsEqual: c,
						areMergedPropsEqual: l,
					}
				function k(I) {
					let [B, s2, Y] = (0, c1.useMemo)(() => {
							let { reactReduxForwardedRef: u2 } = I,
								Y2 = (0, oR.default)(I, dR)
							return [I.context, u2, Y2]
						}, [I]),
						d2 = (0, c1.useMemo)(
							() =>
								B && B.Consumer && (0, cR.isContextConsumer)(c1.default.createElement(B.Consumer, null))
									? B
									: v,
							[B, v],
						),
						_2 = (0, c1.useContext)(d2),
						T2 = Boolean(I.store) && Boolean(I.store.getState) && Boolean(I.store.dispatch),
						N1 = Boolean(_2) && Boolean(_2.store),
						F2 = T2 ? I.store : _2.store,
						t1 = N1 ? _2.getServerState : F2.getState,
						C1 = (0, c1.useMemo)(() => (0, CR.default)(F2.dispatch, S), [F2]),
						[s1, p2] = (0, c1.useMemo)(() => {
							if (!L) return LR
							let u2 = (0, uR.createSubscription)(F2, T2 ? void 0 : _2.subscription),
								Y2 = u2.notifyNestedSubs.bind(u2)
							return [u2, Y2]
						}, [F2, T2, _2]),
						a2 = (0, c1.useMemo)(() => (T2 ? _2 : (0, XC.default)({}, _2, { subscription: s1 })), [T2, _2, s1]),
						v2 = (0, c1.useRef)(),
						H2 = (0, c1.useRef)(Y),
						A = (0, c1.useRef)(),
						w2 = (0, c1.useRef)(!1),
						O = (0, c1.useRef)(!1),
						j = (0, c1.useRef)(!1),
						q = (0, c1.useRef)()
					;(0, ZC.useIsomorphicLayoutEffect)(
						() => (
							(j.current = !0),
							() => {
								j.current = !1
							}
						),
						[],
					)
					let e2 = (0, c1.useMemo)(
							() => () => A.current && Y === H2.current ? A.current : C1(F2.getState(), Y),
							[F2, Y],
						),
						c2 = (0, c1.useMemo)(() => (Y2) => s1 ? zR(L, F2, s1, C1, H2, v2, w2, j, A, p2, Y2) : () => {}, [s1])
					gR(MR, [H2, v2, w2, Y, A, p2])
					let f2
					try {
						f2 = Gm(c2, e2, t1 ? () => C1(t1(), Y) : e2)
					} catch (u2) {
						throw (
							(q.current &&
								(u2.message += `
The error may be correlated with this previous error:
${q.current.stack}

`),
							u2)
						)
					}
					;(0, ZC.useIsomorphicLayoutEffect)(() => {
						;(q.current = void 0), (A.current = void 0), (v2.current = f2)
					})
					let Z = (0, c1.useMemo)(
						() => c1.default.createElement(w, (0, XC.default)({}, f2, { ref: s2 })),
						[s2, w, f2],
					)
					return (0, c1.useMemo)(
						() => (L ? c1.default.createElement(d2.Provider, { value: a2 }, Z) : Z),
						[d2, Z, a2],
					)
				}
				let b = c1.default.memo(k)
				if (((b.WrappedComponent = w), (b.displayName = k.displayName = M), u)) {
					let B = c1.default.forwardRef(function (Y, d2) {
						return c1.default.createElement(b, (0, XC.default)({}, Y, { reactReduxForwardedRef: d2 }))
					})
					return (B.displayName = M), (B.WrappedComponent = w), (0, Um.default)(B, w)
				}
				return (0, Um.default)(b, w)
			}
		}
		var yR = VR
		a0.default = yR
	})
	var Ym = z((Xt) => {
		'use strict'
		Xt.__esModule = !0
		Xt.default = void 0
		var es = NR(y2()),
			SR = n5(),
			xR = WC(),
			wR = YC()
		function Wm(e) {
			if (typeof WeakMap != 'function') return null
			var r = new WeakMap(),
				t = new WeakMap()
			return (Wm = function (n) {
				return n ? t : r
			})(e)
		}
		function NR(e, r) {
			if (!r && e && e.__esModule) return e
			if (e === null || (typeof e != 'object' && typeof e != 'function')) return { default: e }
			var t = Wm(r)
			if (t && t.has(e)) return t.get(e)
			var n = {},
				i = Object.defineProperty && Object.getOwnPropertyDescriptor
			for (var c in e)
				if (c !== 'default' && Object.prototype.hasOwnProperty.call(e, c)) {
					var C = i ? Object.getOwnPropertyDescriptor(e, c) : null
					C && (C.get || C.set) ? Object.defineProperty(n, c, C) : (n[c] = e[c])
				}
			return (n.default = e), t && t.set(e, n), n
		}
		function _R({ store: e, context: r, children: t, serverState: n }) {
			let i = (0, es.useMemo)(() => {
					let l = (0, xR.createSubscription)(e)
					return { store: e, subscription: l, getServerState: n ? () => n : void 0 }
				}, [e, n]),
				c = (0, es.useMemo)(() => e.getState(), [e])
			;(0, wR.useIsomorphicLayoutEffect)(() => {
				let { subscription: l } = i
				return (
					(l.onStateChange = l.notifyNestedSubs),
					l.trySubscribe(),
					c !== e.getState() && l.notifyNestedSubs(),
					() => {
						l.tryUnsubscribe(), (l.onStateChange = void 0)
					}
				)
			}, [i, c])
			let C = r || SR.ReactReduxContext
			return es.default.createElement(C.Provider, { value: i }, t)
		}
		var kR = _R
		Xt.default = kR
	})
	var rs = z((he) => {
		'use strict'
		he.__esModule = !0
		he.createStoreHook = Qm
		he.useStore = void 0
		var PR = y2(),
			Km = n5(),
			AR = vC()
		function Qm(e = Km.ReactReduxContext) {
			let r = e === Km.ReactReduxContext ? AR.useReduxContext : () => (0, PR.useContext)(e)
			return function () {
				let { store: n } = r()
				return n
			}
		}
		var ER = Qm()
		he.useStore = ER
	})
	var $m = z((pe) => {
		'use strict'
		pe.__esModule = !0
		pe.createDispatchHook = Zm
		pe.useDispatch = void 0
		var Xm = n5(),
			Jm = rs()
		function Zm(e = Xm.ReactReduxContext) {
			let r = e === Xm.ReactReduxContext ? Jm.useStore : (0, Jm.createStoreHook)(e)
			return function () {
				return r().dispatch
			}
		}
		var TR = Zm()
		pe.useDispatch = TR
	})
	var eL = z(() => {
		'use strict'
	})
	var aL = z((f3) => {
		'use strict'
		var ns = Q4()
		f3.__esModule = !0
		var RR = {
			Provider: !0,
			connect: !0,
			ReactReduxContext: !0,
			useDispatch: !0,
			createDispatchHook: !0,
			useSelector: !0,
			createSelectorHook: !0,
			useStore: !0,
			createStoreHook: !0,
			shallowEqual: !0,
		}
		Object.defineProperty(f3, 'Provider', {
			enumerable: !0,
			get: function () {
				return OR.default
			},
		})
		Object.defineProperty(f3, 'connect', {
			enumerable: !0,
			get: function () {
				return DR.default
			},
		})
		Object.defineProperty(f3, 'ReactReduxContext', {
			enumerable: !0,
			get: function () {
				return bR.ReactReduxContext
			},
		})
		Object.defineProperty(f3, 'useDispatch', {
			enumerable: !0,
			get: function () {
				return rL.useDispatch
			},
		})
		Object.defineProperty(f3, 'createDispatchHook', {
			enumerable: !0,
			get: function () {
				return rL.createDispatchHook
			},
		})
		Object.defineProperty(f3, 'useSelector', {
			enumerable: !0,
			get: function () {
				return tL.useSelector
			},
		})
		Object.defineProperty(f3, 'createSelectorHook', {
			enumerable: !0,
			get: function () {
				return tL.createSelectorHook
			},
		})
		Object.defineProperty(f3, 'useStore', {
			enumerable: !0,
			get: function () {
				return nL.useStore
			},
		})
		Object.defineProperty(f3, 'createStoreHook', {
			enumerable: !0,
			get: function () {
				return nL.createStoreHook
			},
		})
		Object.defineProperty(f3, 'shallowEqual', {
			enumerable: !0,
			get: function () {
				return FR.default
			},
		})
		var OR = ns(Ym()),
			DR = ns($C()),
			bR = n5(),
			rL = $m(),
			tL = LC(),
			nL = rs(),
			FR = ns(QC()),
			ts = eL()
		Object.keys(ts).forEach(function (e) {
			e === 'default' ||
				e === '__esModule' ||
				Object.prototype.hasOwnProperty.call(RR, e) ||
				(e in f3 && f3[e] === ts[e]) ||
				Object.defineProperty(f3, e, {
					enumerable: !0,
					get: function () {
						return ts[e]
					},
				})
		})
	})
	var m6 = z((i0) => {
		'use strict'
		i0.__esModule = !0
		var IR = { batch: !0 }
		Object.defineProperty(i0, 'batch', {
			enumerable: !0,
			get: function () {
				return iL.unstable_batchedUpdates
			},
		})
		var BR = to(),
			qR = Uh(),
			iL = om(),
			UR = pC(),
			jR = LC(),
			GR = $C(),
			as = aL()
		Object.keys(as).forEach(function (e) {
			e === 'default' ||
				e === '__esModule' ||
				Object.prototype.hasOwnProperty.call(IR, e) ||
				(e in i0 && i0[e] === as[e]) ||
				Object.defineProperty(i0, e, {
					enumerable: !0,
					get: function () {
						return as[e]
					},
				})
		})
		;(0, jR.initializeUseSelector)(qR.useSyncExternalStoreWithSelector)
		;(0, GR.initializeConnect)(BR.useSyncExternalStore)
		;(0, UR.setBatch)(iL.unstable_batchedUpdates)
	})
	var cL = z((is) => {
		'use strict'
		var oL = uC()
		;(is.createRoot = oL.createRoot), (is.hydrateRoot = oL.hydrateRoot)
		var f12
	})
	var CL = z((h12, de) => {
		function WR(e, r, t) {
			return (
				r in e
					? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
					: (e[r] = t),
				e
			)
		}
		;(de.exports = WR), (de.exports.__esModule = !0), (de.exports.default = de.exports)
	})
	var lL = z((p12, ve) => {
		var YR = CL()
		function sL(e, r) {
			var t = Object.keys(e)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(e)
				r &&
					(n = n.filter(function (i) {
						return Object.getOwnPropertyDescriptor(e, i).enumerable
					})),
					t.push.apply(t, n)
			}
			return t
		}
		function KR(e) {
			for (var r = 1; r < arguments.length; r++) {
				var t = arguments[r] != null ? arguments[r] : {}
				r % 2
					? sL(Object(t), !0).forEach(function (n) {
							YR(e, n, t[n])
					  })
					: Object.getOwnPropertyDescriptors
					? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
					: sL(Object(t)).forEach(function (n) {
							Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
					  })
			}
			return e
		}
		;(ve.exports = KR), (ve.exports.__esModule = !0), (ve.exports.default = ve.exports)
	})
	var Cs = z((L6) => {
		'use strict'
		Object.defineProperty(L6, '__esModule', { value: !0 })
		var QR = lL()
		function XR(e) {
			return e && typeof e == 'object' && 'default' in e ? e : { default: e }
		}
		var fL = XR(QR)
		function j1(e) {
			return (
				'Minified Redux error #' +
				e +
				'; visit https://redux.js.org/Errors?code=' +
				e +
				' for the full message or use the non-minified dev environment for full errors. '
			)
		}
		var uL = (function () {
				return (typeof Symbol == 'function' && Symbol.observable) || '@@observable'
			})(),
			os = function () {
				return Math.random().toString(36).substring(7).split('').join('.')
			},
			me = {
				INIT: '@@redux/INIT' + os(),
				REPLACE: '@@redux/REPLACE' + os(),
				PROBE_UNKNOWN_ACTION: function () {
					return '@@redux/PROBE_UNKNOWN_ACTION' + os()
				},
			}
		function JR(e) {
			if (typeof e != 'object' || e === null) return !1
			for (var r = e; Object.getPrototypeOf(r) !== null; ) r = Object.getPrototypeOf(r)
			return Object.getPrototypeOf(e) === r
		}
		function cs(e, r, t) {
			var n
			if (
				(typeof r == 'function' && typeof t == 'function') ||
				(typeof t == 'function' && typeof arguments[3] == 'function')
			)
				throw new Error(j1(0))
			if ((typeof r == 'function' && typeof t > 'u' && ((t = r), (r = void 0)), typeof t < 'u')) {
				if (typeof t != 'function') throw new Error(j1(1))
				return t(cs)(e, r)
			}
			if (typeof e != 'function') throw new Error(j1(2))
			var i = e,
				c = r,
				C = [],
				l = C,
				u = !1
			function h() {
				l === C && (l = C.slice())
			}
			function v() {
				if (u) throw new Error(j1(3))
				return c
			}
			function g(x) {
				if (typeof x != 'function') throw new Error(j1(4))
				if (u) throw new Error(j1(5))
				var w = !0
				return (
					h(),
					l.push(x),
					function () {
						if (!!w) {
							if (u) throw new Error(j1(6))
							;(w = !1), h()
							var M = l.indexOf(x)
							l.splice(M, 1), (C = null)
						}
					}
				)
			}
			function m(x) {
				if (!JR(x)) throw new Error(j1(7))
				if (typeof x.type > 'u') throw new Error(j1(8))
				if (u) throw new Error(j1(9))
				try {
					;(u = !0), (c = i(c, x))
				} finally {
					u = !1
				}
				for (var w = (C = l), V = 0; V < w.length; V++) {
					var M = w[V]
					M()
				}
				return x
			}
			function H(x) {
				if (typeof x != 'function') throw new Error(j1(10))
				;(i = x), m({ type: me.REPLACE })
			}
			function L() {
				var x,
					w = g
				return (
					(x = {
						subscribe: function (M) {
							if (typeof M != 'object' || M === null) throw new Error(j1(11))
							function S() {
								M.next && M.next(v())
							}
							S()
							var k = w(S)
							return { unsubscribe: k }
						},
					}),
					(x[uL] = function () {
						return this
					}),
					x
				)
			}
			return (
				m({ type: me.INIT }), (n = { dispatch: m, subscribe: g, getState: v, replaceReducer: H }), (n[uL] = L), n
			)
		}
		var ZR = cs
		function $R(e) {
			Object.keys(e).forEach(function (r) {
				var t = e[r],
					n = t(void 0, { type: me.INIT })
				if (typeof n > 'u') throw new Error(j1(12))
				if (typeof t(void 0, { type: me.PROBE_UNKNOWN_ACTION() }) > 'u') throw new Error(j1(13))
			})
		}
		function eO(e) {
			for (var r = Object.keys(e), t = {}, n = 0; n < r.length; n++) {
				var i = r[n]
				typeof e[i] == 'function' && (t[i] = e[i])
			}
			var c = Object.keys(t),
				C,
				l
			try {
				$R(t)
			} catch (u) {
				l = u
			}
			return function (h, v) {
				if ((h === void 0 && (h = {}), l)) throw l
				if (!1) var g
				for (var m = !1, H = {}, L = 0; L < c.length; L++) {
					var x = c[L],
						w = t[x],
						V = h[x],
						M = w(V, v)
					if (typeof M > 'u') {
						var S = v && v.type
						throw new Error(j1(14))
					}
					;(H[x] = M), (m = m || M !== V)
				}
				return (m = m || c.length !== Object.keys(h).length), m ? H : h
			}
		}
		function hL(e, r) {
			return function () {
				return r(e.apply(this, arguments))
			}
		}
		function rO(e, r) {
			if (typeof e == 'function') return hL(e, r)
			if (typeof e != 'object' || e === null) throw new Error(j1(16))
			var t = {}
			for (var n in e) {
				var i = e[n]
				typeof i == 'function' && (t[n] = hL(i, r))
			}
			return t
		}
		function pL() {
			for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t]
			return r.length === 0
				? function (n) {
						return n
				  }
				: r.length === 1
				? r[0]
				: r.reduce(function (n, i) {
						return function () {
							return n(i.apply(void 0, arguments))
						}
				  })
		}
		function tO() {
			for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t]
			return function (n) {
				return function () {
					var i = n.apply(void 0, arguments),
						c = function () {
							throw new Error(j1(15))
						},
						C = {
							getState: i.getState,
							dispatch: function () {
								return c.apply(void 0, arguments)
							},
						},
						l = r.map(function (u) {
							return u(C)
						})
					return (c = pL.apply(void 0, l)(i.dispatch)), fL.default(fL.default({}, i), {}, { dispatch: c })
				}
			}
		}
		L6.__DO_NOT_USE__ActionTypes = me
		L6.applyMiddleware = tO
		L6.bindActionCreators = rO
		L6.combineReducers = eO
		L6.compose = pL
		L6.createStore = cs
		L6.legacy_createStore = ZR
	})
	var LL = z((m12, mL) => {
		'use strict'
		var nO = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
		mL.exports = nO
	})
	var HL = z((L12, zL) => {
		'use strict'
		var aO = LL()
		function gL() {}
		function ML() {}
		ML.resetWarningCache = gL
		zL.exports = function () {
			function e(n, i, c, C, l, u) {
				if (u !== aO) {
					var h = new Error(
						'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
					)
					throw ((h.name = 'Invariant Violation'), h)
				}
			}
			e.isRequired = e
			function r() {
				return e
			}
			var t = {
				array: e,
				bigint: e,
				bool: e,
				func: e,
				number: e,
				object: e,
				string: e,
				symbol: e,
				any: e,
				arrayOf: r,
				element: e,
				elementType: e,
				instanceOf: r,
				node: e,
				objectOf: r,
				oneOf: r,
				oneOfType: r,
				shape: r,
				exact: r,
				checkPropTypes: ML,
				resetWarningCache: gL,
			}
			return (t.PropTypes = t), t
		}
	})
	var S1 = z((z12, VL) => {
		VL.exports = HL()()
		var g12, M12
	})
	var yL = {}
	Vh(yL, { Konva: () => i2, _registerNode: () => G1, glob: () => a5 })
	function oO() {
		return (
			typeof window < 'u' &&
			({}.toString.call(window) === '[object Window]' || {}.toString.call(window) === '[object global]')
		)
	}
	var iO,
		a5,
		i2,
		G1,
		u1 = V1(() => {
			iO = Math.PI / 180
			;(a5 =
				typeof global < 'u' ? global : typeof window < 'u' ? window : typeof WorkerGlobalScope < 'u' ? self : {}),
				(i2 = {
					_global: a5,
					version: '8.3.5',
					isBrowser: oO(),
					isUnminified: /param/.test(function (e) {}.toString()),
					dblClickWindow: 400,
					getAngle(e) {
						return i2.angleDeg ? e * iO : e
					},
					enableTrace: !1,
					pointerEventsEnabled: !0,
					autoDrawEnabled: !0,
					hitOnDragEnabled: !1,
					capturePointerEventsEnabled: !1,
					_mouseListenClick: !1,
					_touchListenClick: !1,
					_pointerListenClick: !1,
					_mouseInDblClickWindow: !1,
					_touchInDblClickWindow: !1,
					_pointerInDblClickWindow: !1,
					_mouseDblClickPointerId: null,
					_touchDblClickPointerId: null,
					_pointerDblClickPointerId: null,
					pixelRatio: (typeof window < 'u' && window.devicePixelRatio) || 1,
					dragDistance: 3,
					angleDeg: !0,
					showWarnings: !0,
					dragButtons: [0, 1],
					isDragging() {
						return i2.DD.isDragging
					},
					isDragReady() {
						return !!i2.DD.node
					},
					document: a5.document,
					_injectGlobal(e) {
						a5.Konva = e
					},
				}),
				(G1 = (e) => {
					i2[e.prototype.getClassName()] = e
				})
			i2._injectGlobal(i2)
		})
	var B3,
		cO,
		CO,
		sO,
		lO,
		fO,
		uO,
		ss,
		hO,
		pO,
		dO,
		SL,
		vO,
		ls,
		mO,
		Jt,
		LO,
		E,
		a3 = V1(() => {
			u1()
			;(B3 = class {
				constructor(r = [1, 0, 0, 1, 0, 0]) {
					;(this.dirty = !1), (this.m = (r && r.slice()) || [1, 0, 0, 1, 0, 0])
				}
				reset() {
					;(this.m[0] = 1), (this.m[1] = 0), (this.m[2] = 0), (this.m[3] = 1), (this.m[4] = 0), (this.m[5] = 0)
				}
				copy() {
					return new B3(this.m)
				}
				copyInto(r) {
					;(r.m[0] = this.m[0]),
						(r.m[1] = this.m[1]),
						(r.m[2] = this.m[2]),
						(r.m[3] = this.m[3]),
						(r.m[4] = this.m[4]),
						(r.m[5] = this.m[5])
				}
				point(r) {
					var t = this.m
					return { x: t[0] * r.x + t[2] * r.y + t[4], y: t[1] * r.x + t[3] * r.y + t[5] }
				}
				translate(r, t) {
					return (this.m[4] += this.m[0] * r + this.m[2] * t), (this.m[5] += this.m[1] * r + this.m[3] * t), this
				}
				scale(r, t) {
					return (this.m[0] *= r), (this.m[1] *= r), (this.m[2] *= t), (this.m[3] *= t), this
				}
				rotate(r) {
					var t = Math.cos(r),
						n = Math.sin(r),
						i = this.m[0] * t + this.m[2] * n,
						c = this.m[1] * t + this.m[3] * n,
						C = this.m[0] * -n + this.m[2] * t,
						l = this.m[1] * -n + this.m[3] * t
					return (this.m[0] = i), (this.m[1] = c), (this.m[2] = C), (this.m[3] = l), this
				}
				getTranslation() {
					return { x: this.m[4], y: this.m[5] }
				}
				skew(r, t) {
					var n = this.m[0] + this.m[2] * t,
						i = this.m[1] + this.m[3] * t,
						c = this.m[2] + this.m[0] * r,
						C = this.m[3] + this.m[1] * r
					return (this.m[0] = n), (this.m[1] = i), (this.m[2] = c), (this.m[3] = C), this
				}
				multiply(r) {
					var t = this.m[0] * r.m[0] + this.m[2] * r.m[1],
						n = this.m[1] * r.m[0] + this.m[3] * r.m[1],
						i = this.m[0] * r.m[2] + this.m[2] * r.m[3],
						c = this.m[1] * r.m[2] + this.m[3] * r.m[3],
						C = this.m[0] * r.m[4] + this.m[2] * r.m[5] + this.m[4],
						l = this.m[1] * r.m[4] + this.m[3] * r.m[5] + this.m[5]
					return (
						(this.m[0] = t),
						(this.m[1] = n),
						(this.m[2] = i),
						(this.m[3] = c),
						(this.m[4] = C),
						(this.m[5] = l),
						this
					)
				}
				invert() {
					var r = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]),
						t = this.m[3] * r,
						n = -this.m[1] * r,
						i = -this.m[2] * r,
						c = this.m[0] * r,
						C = r * (this.m[2] * this.m[5] - this.m[3] * this.m[4]),
						l = r * (this.m[1] * this.m[4] - this.m[0] * this.m[5])
					return (
						(this.m[0] = t),
						(this.m[1] = n),
						(this.m[2] = i),
						(this.m[3] = c),
						(this.m[4] = C),
						(this.m[5] = l),
						this
					)
				}
				getMatrix() {
					return this.m
				}
				setAbsolutePosition(r, t) {
					var n = this.m[0],
						i = this.m[1],
						c = this.m[2],
						C = this.m[3],
						l = this.m[4],
						u = this.m[5],
						h = (n * (t - u) - i * (r - l)) / (n * C - i * c),
						v = (r - l - c * h) / n
					return this.translate(v, h)
				}
				decompose() {
					var r = this.m[0],
						t = this.m[1],
						n = this.m[2],
						i = this.m[3],
						c = this.m[4],
						C = this.m[5],
						l = r * i - t * n
					let u = { x: c, y: C, rotation: 0, scaleX: 0, scaleY: 0, skewX: 0, skewY: 0 }
					if (r != 0 || t != 0) {
						var h = Math.sqrt(r * r + t * t)
						;(u.rotation = t > 0 ? Math.acos(r / h) : -Math.acos(r / h)),
							(u.scaleX = h),
							(u.scaleY = l / h),
							(u.skewX = (r * n + t * i) / l),
							(u.skewY = 0)
					} else if (n != 0 || i != 0) {
						var v = Math.sqrt(n * n + i * i)
						;(u.rotation = Math.PI / 2 - (i > 0 ? Math.acos(-n / v) : -Math.acos(n / v))),
							(u.scaleX = l / v),
							(u.scaleY = v),
							(u.skewX = 0),
							(u.skewY = (r * n + t * i) / l)
					}
					return (u.rotation = E._getRotation(u.rotation)), u
				}
			}),
				(cO = '[object Array]'),
				(CO = '[object Number]'),
				(sO = '[object String]'),
				(lO = '[object Boolean]'),
				(fO = Math.PI / 180),
				(uO = 180 / Math.PI),
				(ss = '#'),
				(hO = ''),
				(pO = '0'),
				(dO = 'Konva warning: '),
				(SL = 'Konva error: '),
				(vO = 'rgb('),
				(ls = {
					aliceblue: [240, 248, 255],
					antiquewhite: [250, 235, 215],
					aqua: [0, 255, 255],
					aquamarine: [127, 255, 212],
					azure: [240, 255, 255],
					beige: [245, 245, 220],
					bisque: [255, 228, 196],
					black: [0, 0, 0],
					blanchedalmond: [255, 235, 205],
					blue: [0, 0, 255],
					blueviolet: [138, 43, 226],
					brown: [165, 42, 42],
					burlywood: [222, 184, 135],
					cadetblue: [95, 158, 160],
					chartreuse: [127, 255, 0],
					chocolate: [210, 105, 30],
					coral: [255, 127, 80],
					cornflowerblue: [100, 149, 237],
					cornsilk: [255, 248, 220],
					crimson: [220, 20, 60],
					cyan: [0, 255, 255],
					darkblue: [0, 0, 139],
					darkcyan: [0, 139, 139],
					darkgoldenrod: [184, 132, 11],
					darkgray: [169, 169, 169],
					darkgreen: [0, 100, 0],
					darkgrey: [169, 169, 169],
					darkkhaki: [189, 183, 107],
					darkmagenta: [139, 0, 139],
					darkolivegreen: [85, 107, 47],
					darkorange: [255, 140, 0],
					darkorchid: [153, 50, 204],
					darkred: [139, 0, 0],
					darksalmon: [233, 150, 122],
					darkseagreen: [143, 188, 143],
					darkslateblue: [72, 61, 139],
					darkslategray: [47, 79, 79],
					darkslategrey: [47, 79, 79],
					darkturquoise: [0, 206, 209],
					darkviolet: [148, 0, 211],
					deeppink: [255, 20, 147],
					deepskyblue: [0, 191, 255],
					dimgray: [105, 105, 105],
					dimgrey: [105, 105, 105],
					dodgerblue: [30, 144, 255],
					firebrick: [178, 34, 34],
					floralwhite: [255, 255, 240],
					forestgreen: [34, 139, 34],
					fuchsia: [255, 0, 255],
					gainsboro: [220, 220, 220],
					ghostwhite: [248, 248, 255],
					gold: [255, 215, 0],
					goldenrod: [218, 165, 32],
					gray: [128, 128, 128],
					green: [0, 128, 0],
					greenyellow: [173, 255, 47],
					grey: [128, 128, 128],
					honeydew: [240, 255, 240],
					hotpink: [255, 105, 180],
					indianred: [205, 92, 92],
					indigo: [75, 0, 130],
					ivory: [255, 255, 240],
					khaki: [240, 230, 140],
					lavender: [230, 230, 250],
					lavenderblush: [255, 240, 245],
					lawngreen: [124, 252, 0],
					lemonchiffon: [255, 250, 205],
					lightblue: [173, 216, 230],
					lightcoral: [240, 128, 128],
					lightcyan: [224, 255, 255],
					lightgoldenrodyellow: [250, 250, 210],
					lightgray: [211, 211, 211],
					lightgreen: [144, 238, 144],
					lightgrey: [211, 211, 211],
					lightpink: [255, 182, 193],
					lightsalmon: [255, 160, 122],
					lightseagreen: [32, 178, 170],
					lightskyblue: [135, 206, 250],
					lightslategray: [119, 136, 153],
					lightslategrey: [119, 136, 153],
					lightsteelblue: [176, 196, 222],
					lightyellow: [255, 255, 224],
					lime: [0, 255, 0],
					limegreen: [50, 205, 50],
					linen: [250, 240, 230],
					magenta: [255, 0, 255],
					maroon: [128, 0, 0],
					mediumaquamarine: [102, 205, 170],
					mediumblue: [0, 0, 205],
					mediumorchid: [186, 85, 211],
					mediumpurple: [147, 112, 219],
					mediumseagreen: [60, 179, 113],
					mediumslateblue: [123, 104, 238],
					mediumspringgreen: [0, 250, 154],
					mediumturquoise: [72, 209, 204],
					mediumvioletred: [199, 21, 133],
					midnightblue: [25, 25, 112],
					mintcream: [245, 255, 250],
					mistyrose: [255, 228, 225],
					moccasin: [255, 228, 181],
					navajowhite: [255, 222, 173],
					navy: [0, 0, 128],
					oldlace: [253, 245, 230],
					olive: [128, 128, 0],
					olivedrab: [107, 142, 35],
					orange: [255, 165, 0],
					orangered: [255, 69, 0],
					orchid: [218, 112, 214],
					palegoldenrod: [238, 232, 170],
					palegreen: [152, 251, 152],
					paleturquoise: [175, 238, 238],
					palevioletred: [219, 112, 147],
					papayawhip: [255, 239, 213],
					peachpuff: [255, 218, 185],
					peru: [205, 133, 63],
					pink: [255, 192, 203],
					plum: [221, 160, 203],
					powderblue: [176, 224, 230],
					purple: [128, 0, 128],
					rebeccapurple: [102, 51, 153],
					red: [255, 0, 0],
					rosybrown: [188, 143, 143],
					royalblue: [65, 105, 225],
					saddlebrown: [139, 69, 19],
					salmon: [250, 128, 114],
					sandybrown: [244, 164, 96],
					seagreen: [46, 139, 87],
					seashell: [255, 245, 238],
					sienna: [160, 82, 45],
					silver: [192, 192, 192],
					skyblue: [135, 206, 235],
					slateblue: [106, 90, 205],
					slategray: [119, 128, 144],
					slategrey: [119, 128, 144],
					snow: [255, 255, 250],
					springgreen: [0, 255, 127],
					steelblue: [70, 130, 180],
					tan: [210, 180, 140],
					teal: [0, 128, 128],
					thistle: [216, 191, 216],
					transparent: [255, 255, 255, 0],
					tomato: [255, 99, 71],
					turquoise: [64, 224, 208],
					violet: [238, 130, 238],
					wheat: [245, 222, 179],
					white: [255, 255, 255],
					whitesmoke: [245, 245, 245],
					yellow: [255, 255, 0],
					yellowgreen: [154, 205, 5],
				}),
				(mO = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/),
				(Jt = []),
				(LO =
					(typeof requestAnimationFrame < 'u' && requestAnimationFrame) ||
					function (e) {
						setTimeout(e, 60)
					}),
				(E = {
					_isElement(e) {
						return !!(e && e.nodeType == 1)
					},
					_isFunction(e) {
						return !!(e && e.constructor && e.call && e.apply)
					},
					_isPlainObject(e) {
						return !!e && e.constructor === Object
					},
					_isArray(e) {
						return Object.prototype.toString.call(e) === cO
					},
					_isNumber(e) {
						return Object.prototype.toString.call(e) === CO && !isNaN(e) && isFinite(e)
					},
					_isString(e) {
						return Object.prototype.toString.call(e) === sO
					},
					_isBoolean(e) {
						return Object.prototype.toString.call(e) === lO
					},
					isObject(e) {
						return e instanceof Object
					},
					isValidSelector(e) {
						if (typeof e != 'string') return !1
						var r = e[0]
						return r === '#' || r === '.' || r === r.toUpperCase()
					},
					_sign(e) {
						return e === 0 || e > 0 ? 1 : -1
					},
					requestAnimFrame(e) {
						Jt.push(e),
							Jt.length === 1 &&
								LO(function () {
									let r = Jt
									;(Jt = []),
										r.forEach(function (t) {
											t()
										})
								})
					},
					createCanvasElement() {
						var e = document.createElement('canvas')
						try {
							e.style = e.style || {}
						} catch {}
						return e
					},
					createImageElement() {
						return document.createElement('img')
					},
					_isInDocument(e) {
						for (; (e = e.parentNode); ) if (e == document) return !0
						return !1
					},
					_urlToImage(e, r) {
						var t = E.createImageElement()
						;(t.onload = function () {
							r(t)
						}),
							(t.src = e)
					},
					_rgbToHex(e, r, t) {
						return ((1 << 24) + (e << 16) + (r << 8) + t).toString(16).slice(1)
					},
					_hexToRgb(e) {
						e = e.replace(ss, hO)
						var r = parseInt(e, 16)
						return { r: (r >> 16) & 255, g: (r >> 8) & 255, b: r & 255 }
					},
					getRandomColor() {
						for (var e = ((Math.random() * 16777215) << 0).toString(16); e.length < 6; ) e = pO + e
						return ss + e
					},
					getRGB(e) {
						var r
						return e in ls
							? ((r = ls[e]), { r: r[0], g: r[1], b: r[2] })
							: e[0] === ss
							? this._hexToRgb(e.substring(1))
							: e.substr(0, 4) === vO
							? ((r = mO.exec(e.replace(/ /g, ''))),
							  { r: parseInt(r[1], 10), g: parseInt(r[2], 10), b: parseInt(r[3], 10) })
							: { r: 0, g: 0, b: 0 }
					},
					colorToRGBA(e) {
						return (
							(e = e || 'black'),
							E._namedColorToRBA(e) ||
								E._hex3ColorToRGBA(e) ||
								E._hex6ColorToRGBA(e) ||
								E._rgbColorToRGBA(e) ||
								E._rgbaColorToRGBA(e) ||
								E._hslColorToRGBA(e)
						)
					},
					_namedColorToRBA(e) {
						var r = ls[e.toLowerCase()]
						return r ? { r: r[0], g: r[1], b: r[2], a: 1 } : null
					},
					_rgbColorToRGBA(e) {
						if (e.indexOf('rgb(') === 0) {
							e = e.match(/rgb\(([^)]+)\)/)[1]
							var r = e.split(/ *, */).map(Number)
							return { r: r[0], g: r[1], b: r[2], a: 1 }
						}
					},
					_rgbaColorToRGBA(e) {
						if (e.indexOf('rgba(') === 0) {
							e = e.match(/rgba\(([^)]+)\)/)[1]
							var r = e
								.split(/ *, */)
								.map((t, n) =>
									t.slice(-1) === '%' ? (n === 3 ? parseInt(t) / 100 : (parseInt(t) / 100) * 255) : Number(t),
								)
							return { r: r[0], g: r[1], b: r[2], a: r[3] }
						}
					},
					_hex6ColorToRGBA(e) {
						if (e[0] === '#' && e.length === 7)
							return {
								r: parseInt(e.slice(1, 3), 16),
								g: parseInt(e.slice(3, 5), 16),
								b: parseInt(e.slice(5, 7), 16),
								a: 1,
							}
					},
					_hex3ColorToRGBA(e) {
						if (e[0] === '#' && e.length === 4)
							return {
								r: parseInt(e[1] + e[1], 16),
								g: parseInt(e[2] + e[2], 16),
								b: parseInt(e[3] + e[3], 16),
								a: 1,
							}
					},
					_hslColorToRGBA(e) {
						if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(e)) {
							let [r, ...t] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e),
								n = Number(t[0]) / 360,
								i = Number(t[1]) / 100,
								c = Number(t[2]) / 100,
								C,
								l,
								u
							if (i === 0) return (u = c * 255), { r: Math.round(u), g: Math.round(u), b: Math.round(u), a: 1 }
							c < 0.5 ? (C = c * (1 + i)) : (C = c + i - c * i)
							let h = 2 * c - C,
								v = [0, 0, 0]
							for (let g = 0; g < 3; g++)
								(l = n + (1 / 3) * -(g - 1)),
									l < 0 && l++,
									l > 1 && l--,
									6 * l < 1
										? (u = h + (C - h) * 6 * l)
										: 2 * l < 1
										? (u = C)
										: 3 * l < 2
										? (u = h + (C - h) * (2 / 3 - l) * 6)
										: (u = h),
									(v[g] = u * 255)
							return { r: Math.round(v[0]), g: Math.round(v[1]), b: Math.round(v[2]), a: 1 }
						}
					},
					haveIntersection(e, r) {
						return !(r.x > e.x + e.width || r.x + r.width < e.x || r.y > e.y + e.height || r.y + r.height < e.y)
					},
					cloneObject(e) {
						var r = {}
						for (var t in e)
							this._isPlainObject(e[t])
								? (r[t] = this.cloneObject(e[t]))
								: this._isArray(e[t])
								? (r[t] = this.cloneArray(e[t]))
								: (r[t] = e[t])
						return r
					},
					cloneArray(e) {
						return e.slice(0)
					},
					degToRad(e) {
						return e * fO
					},
					radToDeg(e) {
						return e * uO
					},
					_degToRad(e) {
						return E.warn('Util._degToRad is removed. Please use public Util.degToRad instead.'), E.degToRad(e)
					},
					_radToDeg(e) {
						return E.warn('Util._radToDeg is removed. Please use public Util.radToDeg instead.'), E.radToDeg(e)
					},
					_getRotation(e) {
						return i2.angleDeg ? E.radToDeg(e) : e
					},
					_capitalize(e) {
						return e.charAt(0).toUpperCase() + e.slice(1)
					},
					throw(e) {
						throw new Error(SL + e)
					},
					error(e) {
						console.error(SL + e)
					},
					warn(e) {
						!i2.showWarnings || console.warn(dO + e)
					},
					each(e, r) {
						for (var t in e) r(t, e[t])
					},
					_inRange(e, r, t) {
						return r <= e && e < t
					},
					_getProjectionToSegment(e, r, t, n, i, c) {
						var C,
							l,
							u,
							h = (e - t) * (e - t) + (r - n) * (r - n)
						if (h == 0) (C = e), (l = r), (u = (i - t) * (i - t) + (c - n) * (c - n))
						else {
							var v = ((i - e) * (t - e) + (c - r) * (n - r)) / h
							v < 0
								? ((C = e), (l = r), (u = (e - i) * (e - i) + (r - c) * (r - c)))
								: v > 1
								? ((C = t), (l = n), (u = (t - i) * (t - i) + (n - c) * (n - c)))
								: ((C = e + v * (t - e)), (l = r + v * (n - r)), (u = (C - i) * (C - i) + (l - c) * (l - c)))
						}
						return [C, l, u]
					},
					_getProjectionToLine(e, r, t) {
						var n = E.cloneObject(e),
							i = Number.MAX_VALUE
						return (
							r.forEach(function (c, C) {
								if (!(!t && C === r.length - 1)) {
									var l = r[(C + 1) % r.length],
										u = E._getProjectionToSegment(c.x, c.y, l.x, l.y, e.x, e.y),
										h = u[0],
										v = u[1],
										g = u[2]
									g < i && ((n.x = h), (n.y = v), (i = g))
								}
							}),
							n
						)
					},
					_prepareArrayForTween(e, r, t) {
						var n,
							i = [],
							c = []
						if (e.length > r.length) {
							var C = r
							;(r = e), (e = C)
						}
						for (n = 0; n < e.length; n += 2) i.push({ x: e[n], y: e[n + 1] })
						for (n = 0; n < r.length; n += 2) c.push({ x: r[n], y: r[n + 1] })
						var l = []
						return (
							c.forEach(function (u) {
								var h = E._getProjectionToLine(u, i, t)
								l.push(h.x), l.push(h.y)
							}),
							l
						)
					},
					_prepareToStringify(e) {
						var r
						e.visitedByCircularReferenceRemoval = !0
						for (var t in e)
							if (!!(e.hasOwnProperty(t) && e[t] && typeof e[t] == 'object')) {
								if (
									((r = Object.getOwnPropertyDescriptor(e, t)),
									e[t].visitedByCircularReferenceRemoval || E._isElement(e[t]))
								)
									if (r.configurable) delete e[t]
									else return null
								else if (E._prepareToStringify(e[t]) === null)
									if (r.configurable) delete e[t]
									else return null
							}
						return delete e.visitedByCircularReferenceRemoval, e
					},
					_assign(e, r) {
						for (var t in r) e[t] = r[t]
						return e
					},
					_getFirstPointerId(e) {
						return e.touches ? e.changedTouches[0].identifier : e.pointerId || 999
					},
				})
		})
	function U5(e) {
		return E._isString(e)
			? '"' + e + '"'
			: Object.prototype.toString.call(e) === '[object Number]' || E._isBoolean(e)
			? e
			: Object.prototype.toString.call(e)
	}
	function M2() {
		if (i2.isUnminified)
			return function (e, r) {
				return (
					E._isNumber(e) ||
						E.warn(U5(e) + ' is a not valid value for "' + r + '" attribute. The value should be a number.'),
					e
				)
			}
	}
	function xL() {
		if (i2.isUnminified)
			return function (e, r) {
				var t = E._isNumber(e),
					n = e === 'auto'
				return (
					t ||
						n ||
						E.warn(
							U5(e) + ' is a not valid value for "' + r + '" attribute. The value should be a number or "auto".',
						),
					e
				)
			}
	}
	function j5() {
		if (i2.isUnminified)
			return function (e, r) {
				return (
					E._isString(e) ||
						E.warn(U5(e) + ' is a not valid value for "' + r + '" attribute. The value should be a string.'),
					e
				)
			}
	}
	function fs() {
		if (i2.isUnminified)
			return function (e, r) {
				let t = E._isString(e),
					n = Object.prototype.toString.call(e) === '[object CanvasGradient]' || (e && e.addColorStop)
				return (
					t ||
						n ||
						E.warn(
							U5(e) +
								' is a not valid value for "' +
								r +
								'" attribute. The value should be a string or a native gradient.',
						),
					e
				)
			}
	}
	function wL() {
		if (i2.isUnminified)
			return function (e, r) {
				return (
					E._isArray(e)
						? e.forEach(function (t) {
								E._isNumber(t) ||
									E.warn(
										'"' +
											r +
											'" attribute has non numeric element ' +
											t +
											'. Make sure that all elements are numbers.',
									)
						  })
						: E.warn(
								U5(e) +
									' is a not valid value for "' +
									r +
									'" attribute. The value should be a array of numbers.',
						  ),
					e
				)
			}
	}
	function y4() {
		if (i2.isUnminified)
			return function (e, r) {
				var t = e === !0 || e === !1
				return (
					t || E.warn(U5(e) + ' is a not valid value for "' + r + '" attribute. The value should be a boolean.'), e
				)
			}
	}
	function NL(e) {
		if (i2.isUnminified)
			return function (r, t) {
				return (
					E.isObject(r) ||
						E.warn(
							U5(r) +
								' is a not valid value for "' +
								t +
								'" attribute. The value should be an object with properties ' +
								e,
						),
					r
				)
			}
	}
	var g6 = V1(() => {
		u1()
		a3()
	})
	var Le,
		ge,
		F,
		X4 = V1(() => {
			a3()
			g6()
			;(Le = 'get'),
				(ge = 'set'),
				(F = {
					addGetterSetter(e, r, t, n, i) {
						F.addGetter(e, r, t), F.addSetter(e, r, n, i), F.addOverloadedGetterSetter(e, r)
					},
					addGetter(e, r, t) {
						var n = Le + E._capitalize(r)
						e.prototype[n] =
							e.prototype[n] ||
							function () {
								var i = this.attrs[r]
								return i === void 0 ? t : i
							}
					},
					addSetter(e, r, t, n) {
						var i = ge + E._capitalize(r)
						e.prototype[i] || F.overWriteSetter(e, r, t, n)
					},
					overWriteSetter(e, r, t, n) {
						var i = ge + E._capitalize(r)
						e.prototype[i] = function (c) {
							return (
								t && c !== void 0 && c !== null && (c = t.call(this, c, r)),
								this._setAttr(r, c),
								n && n.call(this),
								this
							)
						}
					},
					addComponentsGetterSetter(e, r, t, n, i) {
						var c = t.length,
							C = E._capitalize,
							l = Le + C(r),
							u = ge + C(r),
							h,
							v
						e.prototype[l] = function () {
							var m = {}
							for (h = 0; h < c; h++) (v = t[h]), (m[v] = this.getAttr(r + C(v)))
							return m
						}
						var g = NL(t)
						;(e.prototype[u] = function (m) {
							var H = this.attrs[r],
								L
							n && (m = n.call(this, m)), g && g.call(this, m, r)
							for (L in m) !m.hasOwnProperty(L) || this._setAttr(r + C(L), m[L])
							return this._fireChangeEvent(r, H, m), i && i.call(this), this
						}),
							F.addOverloadedGetterSetter(e, r)
					},
					addOverloadedGetterSetter(e, r) {
						var t = E._capitalize(r),
							n = ge + t,
							i = Le + t
						e.prototype[r] = function () {
							return arguments.length ? (this[n](arguments[0]), this) : this[i]()
						}
					},
					addDeprecatedGetterSetter(e, r, t, n) {
						E.error('Adding deprecated ' + r)
						var i = Le + E._capitalize(r),
							c =
								r +
								' property is deprecated and will be removed soon. Look at Konva change log for more information.'
						;(e.prototype[i] = function () {
							E.error(c)
							var C = this.attrs[r]
							return C === void 0 ? t : C
						}),
							F.addSetter(e, r, n, function () {
								E.error(c)
							}),
							F.addOverloadedGetterSetter(e, r)
					},
					backCompat(e, r) {
						E.each(r, function (t, n) {
							var i = e.prototype[n],
								c = Le + E._capitalize(t),
								C = ge + E._capitalize(t)
							function l() {
								i.apply(this, arguments),
									E.error(
										'"' + t + '" method is deprecated and will be removed soon. Use ""' + n + '" instead.',
									)
							}
							;(e.prototype[t] = l), (e.prototype[c] = l), (e.prototype[C] = l)
						})
					},
					afterSetFilter() {
						this._filterUpToDate = !1
					},
				})
		})
	function gO(e) {
		var r = [],
			t = e.length,
			n = E,
			i,
			c
		for (i = 0; i < t; i++)
			(c = e[i]), n._isNumber(c) ? (c = Math.round(c * 1e3) / 1e3) : n._isString(c) || (c = c + ''), r.push(c)
		return r
	}
	var _L,
		MO,
		zO,
		HO,
		VO,
		yO,
		SO,
		xO,
		kL,
		wO,
		NO,
		G5,
		Zt,
		$t,
		us = V1(() => {
			a3()
			u1()
			;(_L = ','),
				(MO = '('),
				(zO = ')'),
				(HO = '(['),
				(VO = '])'),
				(yO = ';'),
				(SO = '()'),
				(xO = '='),
				(kL = [
					'arc',
					'arcTo',
					'beginPath',
					'bezierCurveTo',
					'clearRect',
					'clip',
					'closePath',
					'createLinearGradient',
					'createPattern',
					'createRadialGradient',
					'drawImage',
					'ellipse',
					'fill',
					'fillText',
					'getImageData',
					'createImageData',
					'lineTo',
					'moveTo',
					'putImageData',
					'quadraticCurveTo',
					'rect',
					'restore',
					'rotate',
					'save',
					'scale',
					'setLineDash',
					'setTransform',
					'stroke',
					'strokeText',
					'transform',
					'translate',
				]),
				(wO = [
					'fillStyle',
					'strokeStyle',
					'shadowColor',
					'shadowBlur',
					'shadowOffsetX',
					'shadowOffsetY',
					'lineCap',
					'lineDashOffset',
					'lineJoin',
					'lineWidth',
					'miterLimit',
					'font',
					'textAlign',
					'textBaseline',
					'globalAlpha',
					'globalCompositeOperation',
					'imageSmoothingEnabled',
				]),
				(NO = 100),
				(G5 = class {
					constructor(r) {
						;(this.canvas = r),
							(this._context = r._canvas.getContext('2d')),
							i2.enableTrace && ((this.traceArr = []), this._enableTrace())
					}
					fillShape(r) {
						r.fillEnabled() && this._fill(r)
					}
					_fill(r) {}
					strokeShape(r) {
						r.hasStroke() && this._stroke(r)
					}
					_stroke(r) {}
					fillStrokeShape(r) {
						r.attrs.fillAfterStrokeEnabled
							? (this.strokeShape(r), this.fillShape(r))
							: (this.fillShape(r), this.strokeShape(r))
					}
					getTrace(r, t) {
						var n = this.traceArr,
							i = n.length,
							c = '',
							C,
							l,
							u,
							h
						for (C = 0; C < i; C++)
							(l = n[C]),
								(u = l.method),
								u
									? ((h = l.args),
									  (c += u),
									  r
											? (c += SO)
											: E._isArray(h[0])
											? (c += HO + h.join(_L) + VO)
											: (t && (h = h.map((v) => (typeof v == 'number' ? Math.floor(v) : v))),
											  (c += MO + h.join(_L) + zO)))
									: ((c += l.property), r || (c += xO + l.val)),
								(c += yO)
						return c
					}
					clearTrace() {
						this.traceArr = []
					}
					_trace(r) {
						var t = this.traceArr,
							n
						t.push(r), (n = t.length), n >= NO && t.shift()
					}
					reset() {
						var r = this.getCanvas().getPixelRatio()
						this.setTransform(1 * r, 0, 0, 1 * r, 0, 0)
					}
					getCanvas() {
						return this.canvas
					}
					clear(r) {
						var t = this.getCanvas()
						r
							? this.clearRect(r.x || 0, r.y || 0, r.width || 0, r.height || 0)
							: this.clearRect(0, 0, t.getWidth() / t.pixelRatio, t.getHeight() / t.pixelRatio)
					}
					_applyLineCap(r) {
						var t = r.getLineCap()
						t && this.setAttr('lineCap', t)
					}
					_applyOpacity(r) {
						var t = r.getAbsoluteOpacity()
						t !== 1 && this.setAttr('globalAlpha', t)
					}
					_applyLineJoin(r) {
						var t = r.attrs.lineJoin
						t && this.setAttr('lineJoin', t)
					}
					setAttr(r, t) {
						this._context[r] = t
					}
					arc(r, t, n, i, c, C) {
						this._context.arc(r, t, n, i, c, C)
					}
					arcTo(r, t, n, i, c) {
						this._context.arcTo(r, t, n, i, c)
					}
					beginPath() {
						this._context.beginPath()
					}
					bezierCurveTo(r, t, n, i, c, C) {
						this._context.bezierCurveTo(r, t, n, i, c, C)
					}
					clearRect(r, t, n, i) {
						this._context.clearRect(r, t, n, i)
					}
					clip() {
						this._context.clip()
					}
					closePath() {
						this._context.closePath()
					}
					createImageData(r, t) {
						var n = arguments
						if (n.length === 2) return this._context.createImageData(r, t)
						if (n.length === 1) return this._context.createImageData(r)
					}
					createLinearGradient(r, t, n, i) {
						return this._context.createLinearGradient(r, t, n, i)
					}
					createPattern(r, t) {
						return this._context.createPattern(r, t)
					}
					createRadialGradient(r, t, n, i, c, C) {
						return this._context.createRadialGradient(r, t, n, i, c, C)
					}
					drawImage(r, t, n, i, c, C, l, u, h) {
						var v = arguments,
							g = this._context
						v.length === 3
							? g.drawImage(r, t, n)
							: v.length === 5
							? g.drawImage(r, t, n, i, c)
							: v.length === 9 && g.drawImage(r, t, n, i, c, C, l, u, h)
					}
					ellipse(r, t, n, i, c, C, l, u) {
						this._context.ellipse(r, t, n, i, c, C, l, u)
					}
					isPointInPath(r, t) {
						return this._context.isPointInPath(r, t)
					}
					fill(r) {
						r ? this._context.fill(r) : this._context.fill()
					}
					fillRect(r, t, n, i) {
						this._context.fillRect(r, t, n, i)
					}
					strokeRect(r, t, n, i) {
						this._context.strokeRect(r, t, n, i)
					}
					fillText(r, t, n, i) {
						i ? this._context.fillText(r, t, n, i) : this._context.fillText(r, t, n)
					}
					measureText(r) {
						return this._context.measureText(r)
					}
					getImageData(r, t, n, i) {
						return this._context.getImageData(r, t, n, i)
					}
					lineTo(r, t) {
						this._context.lineTo(r, t)
					}
					moveTo(r, t) {
						this._context.moveTo(r, t)
					}
					rect(r, t, n, i) {
						this._context.rect(r, t, n, i)
					}
					putImageData(r, t, n) {
						this._context.putImageData(r, t, n)
					}
					quadraticCurveTo(r, t, n, i) {
						this._context.quadraticCurveTo(r, t, n, i)
					}
					restore() {
						this._context.restore()
					}
					rotate(r) {
						this._context.rotate(r)
					}
					save() {
						this._context.save()
					}
					scale(r, t) {
						this._context.scale(r, t)
					}
					setLineDash(r) {
						this._context.setLineDash
							? this._context.setLineDash(r)
							: 'mozDash' in this._context
							? (this._context.mozDash = r)
							: 'webkitLineDash' in this._context && (this._context.webkitLineDash = r)
					}
					getLineDash() {
						return this._context.getLineDash()
					}
					setTransform(r, t, n, i, c, C) {
						this._context.setTransform(r, t, n, i, c, C)
					}
					stroke(r) {
						r ? this._context.stroke(r) : this._context.stroke()
					}
					strokeText(r, t, n, i) {
						this._context.strokeText(r, t, n, i)
					}
					transform(r, t, n, i, c, C) {
						this._context.transform(r, t, n, i, c, C)
					}
					translate(r, t) {
						this._context.translate(r, t)
					}
					_enableTrace() {
						var r = this,
							t = kL.length,
							n = this.setAttr,
							i,
							c,
							C = function (l) {
								var u = r[l],
									h
								r[l] = function () {
									return (
										(c = gO(Array.prototype.slice.call(arguments, 0))),
										(h = u.apply(r, arguments)),
										r._trace({ method: l, args: c }),
										h
									)
								}
							}
						for (i = 0; i < t; i++) C(kL[i])
						r.setAttr = function () {
							n.apply(r, arguments)
							var l = arguments[0],
								u = arguments[1]
							;(l === 'shadowOffsetX' || l === 'shadowOffsetY' || l === 'shadowBlur') &&
								(u = u / this.canvas.getPixelRatio()),
								r._trace({ property: l, val: u })
						}
					}
					_applyGlobalCompositeOperation(r) {
						let t = r.attrs.globalCompositeOperation
						var n = !t || t === 'source-over'
						n || this.setAttr('globalCompositeOperation', t)
					}
				})
			wO.forEach(function (e) {
				Object.defineProperty(G5.prototype, e, {
					get() {
						return this._context[e]
					},
					set(r) {
						this._context[e] = r
					},
				})
			})
			;(Zt = class extends G5 {
				_fillColor(r) {
					var t = r.fill()
					this.setAttr('fillStyle', t), r._fillFunc(this)
				}
				_fillPattern(r) {
					this.setAttr('fillStyle', r._getFillPattern()), r._fillFunc(this)
				}
				_fillLinearGradient(r) {
					var t = r._getLinearGradient()
					t && (this.setAttr('fillStyle', t), r._fillFunc(this))
				}
				_fillRadialGradient(r) {
					var t = r._getRadialGradient()
					t && (this.setAttr('fillStyle', t), r._fillFunc(this))
				}
				_fill(r) {
					var t = r.fill(),
						n = r.getFillPriority()
					if (t && n === 'color') {
						this._fillColor(r)
						return
					}
					var i = r.getFillPatternImage()
					if (i && n === 'pattern') {
						this._fillPattern(r)
						return
					}
					var c = r.getFillLinearGradientColorStops()
					if (c && n === 'linear-gradient') {
						this._fillLinearGradient(r)
						return
					}
					var C = r.getFillRadialGradientColorStops()
					if (C && n === 'radial-gradient') {
						this._fillRadialGradient(r)
						return
					}
					t
						? this._fillColor(r)
						: i
						? this._fillPattern(r)
						: c
						? this._fillLinearGradient(r)
						: C && this._fillRadialGradient(r)
				}
				_strokeLinearGradient(r) {
					var t = r.getStrokeLinearGradientStartPoint(),
						n = r.getStrokeLinearGradientEndPoint(),
						i = r.getStrokeLinearGradientColorStops(),
						c = this.createLinearGradient(t.x, t.y, n.x, n.y)
					if (i) {
						for (var C = 0; C < i.length; C += 2) c.addColorStop(i[C], i[C + 1])
						this.setAttr('strokeStyle', c)
					}
				}
				_stroke(r) {
					var t = r.dash(),
						n = r.getStrokeScaleEnabled()
					if (r.hasStroke()) {
						if (!n) {
							this.save()
							var i = this.getCanvas().getPixelRatio()
							this.setTransform(i, 0, 0, i, 0, 0)
						}
						this._applyLineCap(r),
							t && r.dashEnabled() && (this.setLineDash(t), this.setAttr('lineDashOffset', r.dashOffset())),
							this.setAttr('lineWidth', r.strokeWidth()),
							r.getShadowForStrokeEnabled() || this.setAttr('shadowColor', 'rgba(0,0,0,0)')
						var c = r.getStrokeLinearGradientColorStops()
						c ? this._strokeLinearGradient(r) : this.setAttr('strokeStyle', r.stroke()),
							r._strokeFunc(this),
							n || this.restore()
					}
				}
				_applyShadow(r) {
					var t,
						n,
						i,
						c = (t = r.getShadowRGBA()) !== null && t !== void 0 ? t : 'black',
						C = (n = r.getShadowBlur()) !== null && n !== void 0 ? n : 5,
						l = (i = r.getShadowOffset()) !== null && i !== void 0 ? i : { x: 0, y: 0 },
						u = r.getAbsoluteScale(),
						h = this.canvas.getPixelRatio(),
						v = u.x * h,
						g = u.y * h
					this.setAttr('shadowColor', c),
						this.setAttr('shadowBlur', C * Math.min(Math.abs(v), Math.abs(g))),
						this.setAttr('shadowOffsetX', l.x * v),
						this.setAttr('shadowOffsetY', l.y * g)
				}
			}),
				($t = class extends G5 {
					_fill(r) {
						this.save(), this.setAttr('fillStyle', r.colorKey), r._fillFuncHit(this), this.restore()
					}
					strokeShape(r) {
						r.hasHitStroke() && this._stroke(r)
					}
					_stroke(r) {
						if (r.hasHitStroke()) {
							var t = r.getStrokeScaleEnabled()
							if (!t) {
								this.save()
								var n = this.getCanvas().getPixelRatio()
								this.setTransform(n, 0, 0, n, 0, 0)
							}
							this._applyLineCap(r)
							var i = r.hitStrokeWidth(),
								c = i === 'auto' ? r.strokeWidth() : i
							this.setAttr('lineWidth', c),
								this.setAttr('strokeStyle', r.colorKey),
								r._strokeFuncHit(this),
								t || this.restore()
						}
					}
				})
		})
	function _O() {
		if (en) return en
		var e = E.createCanvasElement(),
			r = e.getContext('2d')
		return (
			(en = (function () {
				var t = i2._global.devicePixelRatio || 1,
					n =
						r.webkitBackingStorePixelRatio ||
						r.mozBackingStorePixelRatio ||
						r.msBackingStorePixelRatio ||
						r.oBackingStorePixelRatio ||
						r.backingStorePixelRatio ||
						1
				return t / n
			})()),
			en
		)
	}
	var en,
		W5,
		S4,
		i5,
		Me = V1(() => {
			a3()
			us()
			u1()
			X4()
			g6()
			W5 = class {
				constructor(r) {
					;(this.pixelRatio = 1), (this.width = 0), (this.height = 0), (this.isCache = !1)
					var t = r || {},
						n = t.pixelRatio || i2.pixelRatio || _O()
					;(this.pixelRatio = n),
						(this._canvas = E.createCanvasElement()),
						(this._canvas.style.padding = '0'),
						(this._canvas.style.margin = '0'),
						(this._canvas.style.border = '0'),
						(this._canvas.style.background = 'transparent'),
						(this._canvas.style.position = 'absolute'),
						(this._canvas.style.top = '0'),
						(this._canvas.style.left = '0')
				}
				getContext() {
					return this.context
				}
				getPixelRatio() {
					return this.pixelRatio
				}
				setPixelRatio(r) {
					var t = this.pixelRatio
					;(this.pixelRatio = r), this.setSize(this.getWidth() / t, this.getHeight() / t)
				}
				setWidth(r) {
					;(this.width = this._canvas.width = r * this.pixelRatio), (this._canvas.style.width = r + 'px')
					var t = this.pixelRatio,
						n = this.getContext()._context
					n.scale(t, t)
				}
				setHeight(r) {
					;(this.height = this._canvas.height = r * this.pixelRatio), (this._canvas.style.height = r + 'px')
					var t = this.pixelRatio,
						n = this.getContext()._context
					n.scale(t, t)
				}
				getWidth() {
					return this.width
				}
				getHeight() {
					return this.height
				}
				setSize(r, t) {
					this.setWidth(r || 0), this.setHeight(t || 0)
				}
				toDataURL(r, t) {
					try {
						return this._canvas.toDataURL(r, t)
					} catch {
						try {
							return this._canvas.toDataURL()
						} catch (i) {
							return (
								E.error(
									'Unable to get data URL. ' +
										i.message +
										' For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html.',
								),
								''
							)
						}
					}
				}
			}
			F.addGetterSetter(W5, 'pixelRatio', void 0, M2())
			;(S4 = class extends W5 {
				constructor(r = { width: 0, height: 0 }) {
					super(r), (this.context = new Zt(this)), this.setSize(r.width, r.height)
				}
			}),
				(i5 = class extends W5 {
					constructor(r = { width: 0, height: 0 }) {
						super(r), (this.hitCanvas = !0), (this.context = new $t(this)), this.setSize(r.width, r.height)
					}
				})
		})
	var x2,
		rn = V1(() => {
			u1()
			a3()
			x2 = {
				get isDragging() {
					var e = !1
					return (
						x2._dragElements.forEach((r) => {
							r.dragStatus === 'dragging' && (e = !0)
						}),
						e
					)
				},
				justDragged: !1,
				get node() {
					var e
					return (
						x2._dragElements.forEach((r) => {
							e = r.node
						}),
						e
					)
				},
				_dragElements: new Map(),
				_drag(e) {
					let r = []
					x2._dragElements.forEach((t, n) => {
						let { node: i } = t,
							c = i.getStage()
						c.setPointersPositions(e), t.pointerId === void 0 && (t.pointerId = E._getFirstPointerId(e))
						let C = c._changedPointerPositions.find((h) => h.id === t.pointerId)
						if (!!C) {
							if (t.dragStatus !== 'dragging') {
								var l = i.dragDistance(),
									u = Math.max(Math.abs(C.x - t.startPointerPos.x), Math.abs(C.y - t.startPointerPos.y))
								if (u < l || (i.startDrag({ evt: e }), !i.isDragging())) return
							}
							i._setDragPosition(e, t), r.push(i)
						}
					}),
						r.forEach((t) => {
							t.fire('dragmove', { type: 'dragmove', target: t, evt: e }, !0)
						})
				},
				_endDragBefore(e) {
					x2._dragElements.forEach((r) => {
						let { node: t } = r,
							n = t.getStage()
						if ((e && n.setPointersPositions(e), !n._changedPointerPositions.find((C) => C.id === r.pointerId)))
							return
						;(r.dragStatus === 'dragging' || r.dragStatus === 'stopped') &&
							((x2.justDragged = !0),
							(i2._mouseListenClick = !1),
							(i2._touchListenClick = !1),
							(i2._pointerListenClick = !1),
							(r.dragStatus = 'stopped'))
						let c = r.node.getLayer() || (r.node instanceof i2.Stage && r.node)
						c && c.batchDraw()
					})
				},
				_endDragAfter(e) {
					x2._dragElements.forEach((r, t) => {
						r.dragStatus === 'stopped' && r.node.fire('dragend', { type: 'dragend', target: r.node, evt: e }, !0),
							r.dragStatus !== 'dragging' && x2._dragElements.delete(t)
					})
				},
			}
			i2.isBrowser &&
				(window.addEventListener('mouseup', x2._endDragBefore, !0),
				window.addEventListener('touchend', x2._endDragBefore, !0),
				window.addEventListener('mousemove', x2._drag),
				window.addEventListener('touchmove', x2._drag),
				window.addEventListener('mouseup', x2._endDragAfter, !1),
				window.addEventListener('touchend', x2._endDragAfter, !1))
		})
	var nn,
		tn,
		M6,
		PL,
		ze,
		kO,
		PO,
		AO,
		hs,
		AL,
		EL,
		TL,
		RL,
		an,
		OL,
		o5,
		EO,
		ps,
		TO,
		RO,
		t2,
		q2,
		o0 = V1(() => {
			a3()
			X4()
			Me()
			u1()
			rn()
			g6()
			;(nn = 'absoluteOpacity'),
				(tn = 'allEventListeners'),
				(M6 = 'absoluteTransform'),
				(PL = 'absoluteScale'),
				(ze = 'canvas'),
				(kO = 'Change'),
				(PO = 'children'),
				(AO = 'konva'),
				(hs = 'listening'),
				(AL = 'mouseenter'),
				(EL = 'mouseleave'),
				(TL = 'set'),
				(RL = 'Shape'),
				(an = ' '),
				(OL = 'stage'),
				(o5 = 'transform'),
				(EO = 'Stage'),
				(ps = 'visible'),
				(TO = [
					'xChange.konva',
					'yChange.konva',
					'scaleXChange.konva',
					'scaleYChange.konva',
					'skewXChange.konva',
					'skewYChange.konva',
					'rotationChange.konva',
					'offsetXChange.konva',
					'offsetYChange.konva',
					'transformsEnabledChange.konva',
				].join(an)),
				(RO = 1),
				(t2 = class {
					constructor(r) {
						;(this._id = RO++),
							(this.eventListeners = {}),
							(this.attrs = {}),
							(this.index = 0),
							(this._allEventListeners = null),
							(this.parent = null),
							(this._cache = new Map()),
							(this._attachedDepsListeners = new Map()),
							(this._lastPos = null),
							(this._batchingTransformChange = !1),
							(this._needClearTransformCache = !1),
							(this._filterUpToDate = !1),
							(this._isUnderCache = !1),
							(this._dragEventId = null),
							(this._shouldFireChangeEvents = !1),
							this.setAttrs(r),
							(this._shouldFireChangeEvents = !0)
					}
					hasChildren() {
						return !1
					}
					_clearCache(r) {
						;(r === o5 || r === M6) && this._cache.get(r)
							? (this._cache.get(r).dirty = !0)
							: r
							? this._cache.delete(r)
							: this._cache.clear()
					}
					_getCache(r, t) {
						var n = this._cache.get(r),
							i = r === o5 || r === M6,
							c = n === void 0 || (i && n.dirty === !0)
						return c && ((n = t.call(this)), this._cache.set(r, n)), n
					}
					_calculate(r, t, n) {
						if (!this._attachedDepsListeners.get(r)) {
							let i = t.map((c) => c + 'Change.konva').join(an)
							this.on(i, () => {
								this._clearCache(r)
							}),
								this._attachedDepsListeners.set(r, !0)
						}
						return this._getCache(r, n)
					}
					_getCanvasCache() {
						return this._cache.get(ze)
					}
					_clearSelfAndDescendantCache(r) {
						this._clearCache(r), r === M6 && this.fire('absoluteTransformChange')
					}
					clearCache() {
						return this._cache.delete(ze), this._clearSelfAndDescendantCache(), this._requestDraw(), this
					}
					cache(r) {
						var t = r || {},
							n = {}
						;(t.x === void 0 || t.y === void 0 || t.width === void 0 || t.height === void 0) &&
							(n = this.getClientRect({ skipTransform: !0, relativeTo: this.getParent() }))
						var i = Math.ceil(t.width || n.width),
							c = Math.ceil(t.height || n.height),
							C = t.pixelRatio,
							l = t.x === void 0 ? Math.floor(n.x) : t.x,
							u = t.y === void 0 ? Math.floor(n.y) : t.y,
							h = t.offset || 0,
							v = t.drawBorder || !1,
							g = t.hitCanvasPixelRatio || 1
						if (!i || !c) {
							E.error('Can not cache the node. Width or height of the node equals 0. Caching is skipped.')
							return
						}
						;(i += h * 2 + 1), (c += h * 2 + 1), (l -= h), (u -= h)
						var m = new S4({ pixelRatio: C, width: i, height: c }),
							H = new S4({ pixelRatio: C, width: 0, height: 0 }),
							L = new i5({ pixelRatio: g, width: i, height: c }),
							x = m.getContext(),
							w = L.getContext()
						return (
							(L.isCache = !0),
							(m.isCache = !0),
							this._cache.delete(ze),
							(this._filterUpToDate = !1),
							t.imageSmoothingEnabled === !1 &&
								((m.getContext()._context.imageSmoothingEnabled = !1),
								(H.getContext()._context.imageSmoothingEnabled = !1)),
							x.save(),
							w.save(),
							x.translate(-l, -u),
							w.translate(-l, -u),
							(this._isUnderCache = !0),
							this._clearSelfAndDescendantCache(nn),
							this._clearSelfAndDescendantCache(PL),
							this.drawScene(m, this),
							this.drawHit(L, this),
							(this._isUnderCache = !1),
							x.restore(),
							w.restore(),
							v &&
								(x.save(),
								x.beginPath(),
								x.rect(0, 0, i, c),
								x.closePath(),
								x.setAttr('strokeStyle', 'red'),
								x.setAttr('lineWidth', 5),
								x.stroke(),
								x.restore()),
							this._cache.set(ze, { scene: m, filter: H, hit: L, x: l, y: u }),
							this._requestDraw(),
							this
						)
					}
					isCached() {
						return this._cache.has(ze)
					}
					getClientRect(r) {
						throw new Error('abstract "getClientRect" method call')
					}
					_transformedRect(r, t) {
						var n = [
								{ x: r.x, y: r.y },
								{ x: r.x + r.width, y: r.y },
								{ x: r.x + r.width, y: r.y + r.height },
								{ x: r.x, y: r.y + r.height },
							],
							i,
							c,
							C,
							l,
							u = this.getAbsoluteTransform(t)
						return (
							n.forEach(function (h) {
								var v = u.point(h)
								i === void 0 && ((i = C = v.x), (c = l = v.y)),
									(i = Math.min(i, v.x)),
									(c = Math.min(c, v.y)),
									(C = Math.max(C, v.x)),
									(l = Math.max(l, v.y))
							}),
							{ x: i, y: c, width: C - i, height: l - c }
						)
					}
					_drawCachedSceneCanvas(r) {
						r.save(), r._applyOpacity(this), r._applyGlobalCompositeOperation(this)
						let t = this._getCanvasCache()
						r.translate(t.x, t.y)
						var n = this._getCachedSceneCanvas(),
							i = n.pixelRatio
						r.drawImage(n._canvas, 0, 0, n.width / i, n.height / i), r.restore()
					}
					_drawCachedHitCanvas(r) {
						var t = this._getCanvasCache(),
							n = t.hit
						r.save(),
							r.translate(t.x, t.y),
							r.drawImage(n._canvas, 0, 0, n.width / n.pixelRatio, n.height / n.pixelRatio),
							r.restore()
					}
					_getCachedSceneCanvas() {
						var r = this.filters(),
							t = this._getCanvasCache(),
							n = t.scene,
							i = t.filter,
							c = i.getContext(),
							C,
							l,
							u,
							h
						if (r) {
							if (!this._filterUpToDate) {
								var v = n.pixelRatio
								i.setSize(n.width / n.pixelRatio, n.height / n.pixelRatio)
								try {
									for (
										C = r.length,
											c.clear(),
											c.drawImage(n._canvas, 0, 0, n.getWidth() / v, n.getHeight() / v),
											l = c.getImageData(0, 0, i.getWidth(), i.getHeight()),
											u = 0;
										u < C;
										u++
									) {
										if (((h = r[u]), typeof h != 'function')) {
											E.error(
												'Filter should be type of function, but got ' +
													typeof h +
													' instead. Please check correct filters',
											)
											continue
										}
										h.call(this, l), c.putImageData(l, 0, 0)
									}
								} catch (g) {
									E.error(
										'Unable to apply filter. ' +
											g.message +
											' This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.',
									)
								}
								this._filterUpToDate = !0
							}
							return i
						}
						return n
					}
					on(r, t) {
						if ((this._cache && this._cache.delete(tn), arguments.length === 3))
							return this._delegate.apply(this, arguments)
						var n = r.split(an),
							i = n.length,
							c,
							C,
							l,
							u,
							h
						for (c = 0; c < i; c++)
							(C = n[c]),
								(l = C.split('.')),
								(u = l[0]),
								(h = l[1] || ''),
								this.eventListeners[u] || (this.eventListeners[u] = []),
								this.eventListeners[u].push({ name: h, handler: t })
						return this
					}
					off(r, t) {
						var n = (r || '').split(an),
							i = n.length,
							c,
							C,
							l,
							u,
							h,
							v
						if ((this._cache && this._cache.delete(tn), !r)) for (C in this.eventListeners) this._off(C)
						for (c = 0; c < i; c++)
							if (((l = n[c]), (u = l.split('.')), (h = u[0]), (v = u[1]), h))
								this.eventListeners[h] && this._off(h, v, t)
							else for (C in this.eventListeners) this._off(C, v, t)
						return this
					}
					dispatchEvent(r) {
						var t = { target: this, type: r.type, evt: r }
						return this.fire(r.type, t), this
					}
					addEventListener(r, t) {
						return (
							this.on(r, function (n) {
								t.call(this, n.evt)
							}),
							this
						)
					}
					removeEventListener(r) {
						return this.off(r), this
					}
					_delegate(r, t, n) {
						var i = this
						this.on(r, function (c) {
							for (var C = c.target.findAncestors(t, !0, i), l = 0; l < C.length; l++)
								(c = E.cloneObject(c)), (c.currentTarget = C[l]), n.call(C[l], c)
						})
					}
					remove() {
						return this.isDragging() && this.stopDrag(), x2._dragElements.delete(this._id), this._remove(), this
					}
					_clearCaches() {
						this._clearSelfAndDescendantCache(M6),
							this._clearSelfAndDescendantCache(nn),
							this._clearSelfAndDescendantCache(PL),
							this._clearSelfAndDescendantCache(OL),
							this._clearSelfAndDescendantCache(ps),
							this._clearSelfAndDescendantCache(hs)
					}
					_remove() {
						this._clearCaches()
						var r = this.getParent()
						r && r.children && (r.children.splice(this.index, 1), r._setChildrenIndices(), (this.parent = null))
					}
					destroy() {
						return this.remove(), this
					}
					getAttr(r) {
						var t = 'get' + E._capitalize(r)
						return E._isFunction(this[t]) ? this[t]() : this.attrs[r]
					}
					getAncestors() {
						for (var r = this.getParent(), t = []; r; ) t.push(r), (r = r.getParent())
						return t
					}
					getAttrs() {
						return this.attrs || {}
					}
					setAttrs(r) {
						return (
							this._batchTransformChanges(() => {
								var t, n
								if (!r) return this
								for (t in r)
									t !== PO &&
										((n = TL + E._capitalize(t)),
										E._isFunction(this[n]) ? this[n](r[t]) : this._setAttr(t, r[t]))
							}),
							this
						)
					}
					isListening() {
						return this._getCache(hs, this._isListening)
					}
					_isListening(r) {
						if (!this.listening()) return !1
						let n = this.getParent()
						return n && n !== r && this !== r ? n._isListening(r) : !0
					}
					isVisible() {
						return this._getCache(ps, this._isVisible)
					}
					_isVisible(r) {
						if (!this.visible()) return !1
						let n = this.getParent()
						return n && n !== r && this !== r ? n._isVisible(r) : !0
					}
					shouldDrawHit(r, t = !1) {
						if (r) return this._isVisible(r) && this._isListening(r)
						var n = this.getLayer(),
							i = !1
						x2._dragElements.forEach((C) => {
							C.dragStatus === 'dragging' && (C.node.nodeType === 'Stage' || C.node.getLayer() === n) && (i = !0)
						})
						var c = !t && !i2.hitOnDragEnabled && i
						return this.isListening() && this.isVisible() && !c
					}
					show() {
						return this.visible(!0), this
					}
					hide() {
						return this.visible(!1), this
					}
					getZIndex() {
						return this.index || 0
					}
					getAbsoluteZIndex() {
						var r = this.getDepth(),
							t = this,
							n = 0,
							i,
							c,
							C,
							l
						function u(h) {
							for (i = [], c = h.length, C = 0; C < c; C++)
								(l = h[C]),
									n++,
									l.nodeType !== RL && (i = i.concat(l.getChildren().slice())),
									l._id === t._id && (C = c)
							i.length > 0 && i[0].getDepth() <= r && u(i)
						}
						return t.nodeType !== EO && u(t.getStage().getChildren()), n
					}
					getDepth() {
						for (var r = 0, t = this.parent; t; ) r++, (t = t.parent)
						return r
					}
					_batchTransformChanges(r) {
						;(this._batchingTransformChange = !0),
							r(),
							(this._batchingTransformChange = !1),
							this._needClearTransformCache && (this._clearCache(o5), this._clearSelfAndDescendantCache(M6)),
							(this._needClearTransformCache = !1)
					}
					setPosition(r) {
						return (
							this._batchTransformChanges(() => {
								this.x(r.x), this.y(r.y)
							}),
							this
						)
					}
					getPosition() {
						return { x: this.x(), y: this.y() }
					}
					getRelativePointerPosition() {
						if (!this.getStage()) return null
						var r = this.getStage().getPointerPosition()
						if (!r) return null
						var t = this.getAbsoluteTransform().copy()
						return t.invert(), t.point(r)
					}
					getAbsolutePosition(r) {
						let t = !1,
							n = this.parent
						for (; n; ) {
							if (n.isCached()) {
								t = !0
								break
							}
							n = n.parent
						}
						t && !r && (r = !0)
						var i = this.getAbsoluteTransform(r).getMatrix(),
							c = new B3(),
							C = this.offset()
						return (c.m = i.slice()), c.translate(C.x, C.y), c.getTranslation()
					}
					setAbsolutePosition(r) {
						var t = this._clearTransform()
						;(this.attrs.x = t.x), (this.attrs.y = t.y), delete t.x, delete t.y, this._clearCache(o5)
						var n = this._getAbsoluteTransform().copy()
						return (
							n.invert(),
							n.translate(r.x, r.y),
							(r = { x: this.attrs.x + n.getTranslation().x, y: this.attrs.y + n.getTranslation().y }),
							this._setTransform(t),
							this.setPosition({ x: r.x, y: r.y }),
							this._clearCache(o5),
							this._clearSelfAndDescendantCache(M6),
							this
						)
					}
					_setTransform(r) {
						var t
						for (t in r) this.attrs[t] = r[t]
					}
					_clearTransform() {
						var r = {
							x: this.x(),
							y: this.y(),
							rotation: this.rotation(),
							scaleX: this.scaleX(),
							scaleY: this.scaleY(),
							offsetX: this.offsetX(),
							offsetY: this.offsetY(),
							skewX: this.skewX(),
							skewY: this.skewY(),
						}
						return (
							(this.attrs.x = 0),
							(this.attrs.y = 0),
							(this.attrs.rotation = 0),
							(this.attrs.scaleX = 1),
							(this.attrs.scaleY = 1),
							(this.attrs.offsetX = 0),
							(this.attrs.offsetY = 0),
							(this.attrs.skewX = 0),
							(this.attrs.skewY = 0),
							r
						)
					}
					move(r) {
						var t = r.x,
							n = r.y,
							i = this.x(),
							c = this.y()
						return t !== void 0 && (i += t), n !== void 0 && (c += n), this.setPosition({ x: i, y: c }), this
					}
					_eachAncestorReverse(r, t) {
						var n = [],
							i = this.getParent(),
							c,
							C
						if (!(t && t._id === this._id)) {
							for (n.unshift(this); i && (!t || i._id !== t._id); ) n.unshift(i), (i = i.parent)
							for (c = n.length, C = 0; C < c; C++) r(n[C])
						}
					}
					rotate(r) {
						return this.rotation(this.rotation() + r), this
					}
					moveToTop() {
						if (!this.parent) return E.warn('Node has no parent. moveToTop function is ignored.'), !1
						var r = this.index,
							t = this.parent.getChildren().length
						return r < t - 1
							? (this.parent.children.splice(r, 1),
							  this.parent.children.push(this),
							  this.parent._setChildrenIndices(),
							  !0)
							: !1
					}
					moveUp() {
						if (!this.parent) return E.warn('Node has no parent. moveUp function is ignored.'), !1
						var r = this.index,
							t = this.parent.getChildren().length
						return r < t - 1
							? (this.parent.children.splice(r, 1),
							  this.parent.children.splice(r + 1, 0, this),
							  this.parent._setChildrenIndices(),
							  !0)
							: !1
					}
					moveDown() {
						if (!this.parent) return E.warn('Node has no parent. moveDown function is ignored.'), !1
						var r = this.index
						return r > 0
							? (this.parent.children.splice(r, 1),
							  this.parent.children.splice(r - 1, 0, this),
							  this.parent._setChildrenIndices(),
							  !0)
							: !1
					}
					moveToBottom() {
						if (!this.parent) return E.warn('Node has no parent. moveToBottom function is ignored.'), !1
						var r = this.index
						return r > 0
							? (this.parent.children.splice(r, 1),
							  this.parent.children.unshift(this),
							  this.parent._setChildrenIndices(),
							  !0)
							: !1
					}
					setZIndex(r) {
						if (!this.parent) return E.warn('Node has no parent. zIndex parameter is ignored.'), this
						;(r < 0 || r >= this.parent.children.length) &&
							E.warn(
								'Unexpected value ' +
									r +
									' for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to ' +
									(this.parent.children.length - 1) +
									'.',
							)
						var t = this.index
						return (
							this.parent.children.splice(t, 1),
							this.parent.children.splice(r, 0, this),
							this.parent._setChildrenIndices(),
							this
						)
					}
					getAbsoluteOpacity() {
						return this._getCache(nn, this._getAbsoluteOpacity)
					}
					_getAbsoluteOpacity() {
						var r = this.opacity(),
							t = this.getParent()
						return t && !t._isUnderCache && (r *= t.getAbsoluteOpacity()), r
					}
					moveTo(r) {
						return this.getParent() !== r && (this._remove(), r.add(this)), this
					}
					toObject() {
						var r = {},
							t = this.getAttrs(),
							n,
							i,
							c,
							C,
							l
						r.attrs = {}
						for (n in t)
							(i = t[n]),
								(l = E.isObject(i) && !E._isPlainObject(i) && !E._isArray(i)),
								!l &&
									((c = typeof this[n] == 'function' && this[n]),
									delete t[n],
									(C = c ? c.call(this) : null),
									(t[n] = i),
									C !== i && (r.attrs[n] = i))
						return (r.className = this.getClassName()), E._prepareToStringify(r)
					}
					toJSON() {
						return JSON.stringify(this.toObject())
					}
					getParent() {
						return this.parent
					}
					findAncestors(r, t, n) {
						var i = []
						t && this._isMatch(r) && i.push(this)
						for (var c = this.parent; c; ) {
							if (c === n) return i
							c._isMatch(r) && i.push(c), (c = c.parent)
						}
						return i
					}
					isAncestorOf(r) {
						return !1
					}
					findAncestor(r, t, n) {
						return this.findAncestors(r, t, n)[0]
					}
					_isMatch(r) {
						if (!r) return !1
						if (typeof r == 'function') return r(this)
						var t = r.replace(/ /g, '').split(','),
							n = t.length,
							i,
							c
						for (i = 0; i < n; i++)
							if (
								((c = t[i]),
								E.isValidSelector(c) ||
									(E.warn(
										'Selector "' +
											c +
											'" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".',
									),
									E.warn(
										'If you have a custom shape with such className, please change it to start with upper letter like "Triangle".',
									),
									E.warn('Konva is awesome, right?')),
								c.charAt(0) === '#')
							) {
								if (this.id() === c.slice(1)) return !0
							} else if (c.charAt(0) === '.') {
								if (this.hasName(c.slice(1))) return !0
							} else if (this.className === c || this.nodeType === c) return !0
						return !1
					}
					getLayer() {
						var r = this.getParent()
						return r ? r.getLayer() : null
					}
					getStage() {
						return this._getCache(OL, this._getStage)
					}
					_getStage() {
						var r = this.getParent()
						if (r) return r.getStage()
					}
					fire(r, t = {}, n) {
						return (t.target = t.target || this), n ? this._fireAndBubble(r, t) : this._fire(r, t), this
					}
					getAbsoluteTransform(r) {
						return r ? this._getAbsoluteTransform(r) : this._getCache(M6, this._getAbsoluteTransform)
					}
					_getAbsoluteTransform(r) {
						var t
						if (r)
							return (
								(t = new B3()),
								this._eachAncestorReverse(function (i) {
									var c = i.transformsEnabled()
									c === 'all'
										? t.multiply(i.getTransform())
										: c === 'position' && t.translate(i.x() - i.offsetX(), i.y() - i.offsetY())
								}, r),
								t
							)
						;(t = this._cache.get(M6) || new B3()),
							this.parent ? this.parent.getAbsoluteTransform().copyInto(t) : t.reset()
						var n = this.transformsEnabled()
						if (n === 'all') t.multiply(this.getTransform())
						else if (n === 'position') {
							let i = this.attrs.x || 0,
								c = this.attrs.y || 0,
								C = this.attrs.offsetX || 0,
								l = this.attrs.offsetY || 0
							t.translate(i - C, c - l)
						}
						return (t.dirty = !1), t
					}
					getAbsoluteScale(r) {
						for (var t = this; t; ) t._isUnderCache && (r = t), (t = t.getParent())
						let i = this.getAbsoluteTransform(r).decompose()
						return { x: i.scaleX, y: i.scaleY }
					}
					getAbsoluteRotation() {
						return this.getAbsoluteTransform().decompose().rotation
					}
					getTransform() {
						return this._getCache(o5, this._getTransform)
					}
					_getTransform() {
						var r,
							t,
							n = this._cache.get(o5) || new B3()
						n.reset()
						var i = this.x(),
							c = this.y(),
							C = i2.getAngle(this.rotation()),
							l = (r = this.attrs.scaleX) !== null && r !== void 0 ? r : 1,
							u = (t = this.attrs.scaleY) !== null && t !== void 0 ? t : 1,
							h = this.attrs.skewX || 0,
							v = this.attrs.skewY || 0,
							g = this.attrs.offsetX || 0,
							m = this.attrs.offsetY || 0
						return (
							(i !== 0 || c !== 0) && n.translate(i, c),
							C !== 0 && n.rotate(C),
							(h !== 0 || v !== 0) && n.skew(h, v),
							(l !== 1 || u !== 1) && n.scale(l, u),
							(g !== 0 || m !== 0) && n.translate(-1 * g, -1 * m),
							(n.dirty = !1),
							n
						)
					}
					clone(r) {
						var t = E.cloneObject(this.attrs),
							n,
							i,
							c,
							C,
							l
						for (n in r) t[n] = r[n]
						var u = new this.constructor(t)
						for (n in this.eventListeners)
							for (i = this.eventListeners[n], c = i.length, C = 0; C < c; C++)
								(l = i[C]),
									l.name.indexOf(AO) < 0 &&
										(u.eventListeners[n] || (u.eventListeners[n] = []), u.eventListeners[n].push(l))
						return u
					}
					_toKonvaCanvas(r) {
						r = r || {}
						var t = this.getClientRect(),
							n = this.getStage(),
							i = r.x !== void 0 ? r.x : Math.floor(t.x),
							c = r.y !== void 0 ? r.y : Math.floor(t.y),
							C = r.pixelRatio || 1,
							l = new S4({
								width: r.width || Math.ceil(t.width) || (n ? n.width() : 0),
								height: r.height || Math.ceil(t.height) || (n ? n.height() : 0),
								pixelRatio: C,
							}),
							u = l.getContext()
						return u.save(), (i || c) && u.translate(-1 * i, -1 * c), this.drawScene(l), u.restore(), l
					}
					toCanvas(r) {
						return this._toKonvaCanvas(r)._canvas
					}
					toDataURL(r) {
						r = r || {}
						var t = r.mimeType || null,
							n = r.quality || null,
							i = this._toKonvaCanvas(r).toDataURL(t, n)
						return r.callback && r.callback(i), i
					}
					toImage(r) {
						if (!r || !r.callback) throw 'callback required for toImage method config argument'
						var t = r.callback
						delete r.callback,
							E._urlToImage(this.toDataURL(r), function (n) {
								t(n)
							})
					}
					setSize(r) {
						return this.width(r.width), this.height(r.height), this
					}
					getSize() {
						return { width: this.width(), height: this.height() }
					}
					getClassName() {
						return this.className || this.nodeType
					}
					getType() {
						return this.nodeType
					}
					getDragDistance() {
						return this.attrs.dragDistance !== void 0
							? this.attrs.dragDistance
							: this.parent
							? this.parent.getDragDistance()
							: i2.dragDistance
					}
					_off(r, t, n) {
						var i = this.eventListeners[r],
							c,
							C,
							l
						for (c = 0; c < i.length; c++)
							if (
								((C = i[c].name),
								(l = i[c].handler),
								(C !== 'konva' || t === 'konva') && (!t || C === t) && (!n || n === l))
							) {
								if ((i.splice(c, 1), i.length === 0)) {
									delete this.eventListeners[r]
									break
								}
								c--
							}
					}
					_fireChangeEvent(r, t, n) {
						this._fire(r + kO, { oldVal: t, newVal: n })
					}
					addName(r) {
						if (!this.hasName(r)) {
							var t = this.name(),
								n = t ? t + ' ' + r : r
							this.name(n)
						}
						return this
					}
					hasName(r) {
						if (!r) return !1
						let t = this.name()
						if (!t) return !1
						var n = (t || '').split(/\s/g)
						return n.indexOf(r) !== -1
					}
					removeName(r) {
						var t = (this.name() || '').split(/\s/g),
							n = t.indexOf(r)
						return n !== -1 && (t.splice(n, 1), this.name(t.join(' '))), this
					}
					setAttr(r, t) {
						var n = this[TL + E._capitalize(r)]
						return E._isFunction(n) ? n.call(this, t) : this._setAttr(r, t), this
					}
					_requestDraw() {
						if (i2.autoDrawEnabled) {
							let r = this.getLayer() || this.getStage()
							r?.batchDraw()
						}
					}
					_setAttr(r, t) {
						var n = this.attrs[r]
						;(n === t && !E.isObject(t)) ||
							(t == null ? delete this.attrs[r] : (this.attrs[r] = t),
							this._shouldFireChangeEvents && this._fireChangeEvent(r, n, t),
							this._requestDraw())
					}
					_setComponentAttr(r, t, n) {
						var i
						n !== void 0 &&
							((i = this.attrs[r]),
							i || (this.attrs[r] = this.getAttr(r)),
							(this.attrs[r][t] = n),
							this._fireChangeEvent(r, i, n))
					}
					_fireAndBubble(r, t, n) {
						t && this.nodeType === RL && (t.target = this)
						var i =
							(r === AL || r === EL) &&
							((n && (this === n || (this.isAncestorOf && this.isAncestorOf(n)))) ||
								(this.nodeType === 'Stage' && !n))
						if (!i) {
							this._fire(r, t)
							var c =
								(r === AL || r === EL) &&
								n &&
								n.isAncestorOf &&
								n.isAncestorOf(this) &&
								!n.isAncestorOf(this.parent)
							;((t && !t.cancelBubble) || !t) &&
								this.parent &&
								this.parent.isListening() &&
								!c &&
								(n && n.parent
									? this._fireAndBubble.call(this.parent, r, t, n)
									: this._fireAndBubble.call(this.parent, r, t))
						}
					}
					_getProtoListeners(r) {
						let t = this._cache.get(tn)
						if (!t) {
							t = {}
							let i = Object.getPrototypeOf(this)
							for (; i; ) {
								if (!i.eventListeners) {
									i = Object.getPrototypeOf(i)
									continue
								}
								for (var n in i.eventListeners) {
									let c = i.eventListeners[n],
										C = t[n] || []
									t[n] = c.concat(C)
								}
								i = Object.getPrototypeOf(i)
							}
							this._cache.set(tn, t)
						}
						return t[r]
					}
					_fire(r, t) {
						;(t = t || {}), (t.currentTarget = this), (t.type = r)
						let n = this._getProtoListeners(r)
						if (n) for (var i = 0; i < n.length; i++) n[i].handler.call(this, t)
						let c = this.eventListeners[r]
						if (c) for (var i = 0; i < c.length; i++) c[i].handler.call(this, t)
					}
					draw() {
						return this.drawScene(), this.drawHit(), this
					}
					_createDragElement(r) {
						var t = r ? r.pointerId : void 0,
							n = this.getStage(),
							i = this.getAbsolutePosition(),
							c = n._getPointerById(t) || n._changedPointerPositions[0] || i
						x2._dragElements.set(this._id, {
							node: this,
							startPointerPos: c,
							offset: { x: c.x - i.x, y: c.y - i.y },
							dragStatus: 'ready',
							pointerId: t,
						})
					}
					startDrag(r, t = !0) {
						x2._dragElements.has(this._id) || this._createDragElement(r)
						let n = x2._dragElements.get(this._id)
						;(n.dragStatus = 'dragging'),
							this.fire('dragstart', { type: 'dragstart', target: this, evt: r && r.evt }, t)
					}
					_setDragPosition(r, t) {
						let n = this.getStage()._getPointerById(t.pointerId)
						if (!!n) {
							var i = { x: n.x - t.offset.x, y: n.y - t.offset.y },
								c = this.dragBoundFunc()
							if (c !== void 0) {
								let C = c.call(this, i, r)
								C
									? (i = C)
									: E.warn(
											'dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.',
									  )
							}
							;(!this._lastPos || this._lastPos.x !== i.x || this._lastPos.y !== i.y) &&
								(this.setAbsolutePosition(i), this._requestDraw()),
								(this._lastPos = i)
						}
					}
					stopDrag(r) {
						let t = x2._dragElements.get(this._id)
						t && (t.dragStatus = 'stopped'), x2._endDragBefore(r), x2._endDragAfter(r)
					}
					setDraggable(r) {
						this._setAttr('draggable', r), this._dragChange()
					}
					isDragging() {
						let r = x2._dragElements.get(this._id)
						return r ? r.dragStatus === 'dragging' : !1
					}
					_listenDrag() {
						this._dragCleanup(),
							this.on('mousedown.konva touchstart.konva', function (r) {
								var t = r.evt.button !== void 0,
									n = !t || i2.dragButtons.indexOf(r.evt.button) >= 0
								if (!!n && !this.isDragging()) {
									var i = !1
									x2._dragElements.forEach((c) => {
										this.isAncestorOf(c.node) && (i = !0)
									}),
										i || this._createDragElement(r)
								}
							})
					}
					_dragChange() {
						if (this.attrs.draggable) this._listenDrag()
						else {
							this._dragCleanup()
							var r = this.getStage()
							if (!r) return
							let t = x2._dragElements.get(this._id),
								n = t && t.dragStatus === 'dragging',
								i = t && t.dragStatus === 'ready'
							n ? this.stopDrag() : i && x2._dragElements.delete(this._id)
						}
					}
					_dragCleanup() {
						this.off('mousedown.konva'), this.off('touchstart.konva')
					}
					isClientRectOnScreen(r = { x: 0, y: 0 }) {
						let t = this.getStage()
						if (!t) return !1
						let n = { x: -r.x, y: -r.y, width: t.width() + 2 * r.x, height: t.height() + 2 * r.y }
						return E.haveIntersection(n, this.getClientRect())
					}
					static create(r, t) {
						return E._isString(r) && (r = JSON.parse(r)), this._createNode(r, t)
					}
					static _createNode(r, t) {
						var n = t2.prototype.getClassName.call(r),
							i = r.children,
							c,
							C,
							l
						t && (r.attrs.container = t),
							i2[n] ||
								(E.warn('Can not find a node with class name "' + n + '". Fallback to "Shape".'), (n = 'Shape'))
						let u = i2[n]
						if (((c = new u(r.attrs)), i)) for (C = i.length, l = 0; l < C; l++) c.add(t2._createNode(i[l]))
						return c
					}
				})
			t2.prototype.nodeType = 'Node'
			t2.prototype._attrsAffectingSize = []
			t2.prototype.eventListeners = {}
			t2.prototype.on.call(t2.prototype, TO, function () {
				if (this._batchingTransformChange) {
					this._needClearTransformCache = !0
					return
				}
				this._clearCache(o5), this._clearSelfAndDescendantCache(M6)
			})
			t2.prototype.on.call(t2.prototype, 'visibleChange.konva', function () {
				this._clearSelfAndDescendantCache(ps)
			})
			t2.prototype.on.call(t2.prototype, 'listeningChange.konva', function () {
				this._clearSelfAndDescendantCache(hs)
			})
			t2.prototype.on.call(t2.prototype, 'opacityChange.konva', function () {
				this._clearSelfAndDescendantCache(nn)
			})
			q2 = F.addGetterSetter
			q2(t2, 'zIndex')
			q2(t2, 'absolutePosition')
			q2(t2, 'position')
			q2(t2, 'x', 0, M2())
			q2(t2, 'y', 0, M2())
			q2(t2, 'globalCompositeOperation', 'source-over', j5())
			q2(t2, 'opacity', 1, M2())
			q2(t2, 'name', '', j5())
			q2(t2, 'id', '', j5())
			q2(t2, 'rotation', 0, M2())
			F.addComponentsGetterSetter(t2, 'scale', ['x', 'y'])
			q2(t2, 'scaleX', 1, M2())
			q2(t2, 'scaleY', 1, M2())
			F.addComponentsGetterSetter(t2, 'skew', ['x', 'y'])
			q2(t2, 'skewX', 0, M2())
			q2(t2, 'skewY', 0, M2())
			F.addComponentsGetterSetter(t2, 'offset', ['x', 'y'])
			q2(t2, 'offsetX', 0, M2())
			q2(t2, 'offsetY', 0, M2())
			q2(t2, 'dragDistance', null, M2())
			q2(t2, 'width', 0, M2())
			q2(t2, 'height', 0, M2())
			q2(t2, 'listening', !0, y4())
			q2(t2, 'preventDefault', !0, y4())
			q2(t2, 'filters', null, function (e) {
				return (this._filterUpToDate = !1), e
			})
			q2(t2, 'visible', !0, y4())
			q2(t2, 'transformsEnabled', 'all', j5())
			q2(t2, 'size')
			q2(t2, 'dragBoundFunc')
			q2(t2, 'draggable', !1, y4())
			F.backCompat(t2, { rotateDeg: 'rotate', setRotationDeg: 'setRotation', getRotationDeg: 'getRotation' })
		})
	var x1,
		He = V1(() => {
			X4()
			o0()
			g6()
			x1 = class extends t2 {
				constructor() {
					super(...arguments), (this.children = [])
				}
				getChildren(r) {
					if (!r) return this.children || []
					let t = this.children || []
					var n = []
					return (
						t.forEach(function (i) {
							r(i) && n.push(i)
						}),
						n
					)
				}
				hasChildren() {
					return this.getChildren().length > 0
				}
				removeChildren() {
					return (
						this.getChildren().forEach((r) => {
							;(r.parent = null), (r.index = 0), r.remove()
						}),
						(this.children = []),
						this._requestDraw(),
						this
					)
				}
				destroyChildren() {
					return (
						this.getChildren().forEach((r) => {
							;(r.parent = null), (r.index = 0), r.destroy()
						}),
						(this.children = []),
						this._requestDraw(),
						this
					)
				}
				add(...r) {
					if (arguments.length > 1) {
						for (var t = 0; t < arguments.length; t++) this.add(arguments[t])
						return this
					}
					var n = r[0]
					return n.getParent()
						? (n.moveTo(this), this)
						: (this._validateAdd(n),
						  (n.index = this.getChildren().length),
						  (n.parent = this),
						  n._clearCaches(),
						  this.getChildren().push(n),
						  this._fire('add', { child: n }),
						  this._requestDraw(),
						  this)
				}
				destroy() {
					return this.hasChildren() && this.destroyChildren(), super.destroy(), this
				}
				find(r) {
					return this._generalFind(r, !1)
				}
				findOne(r) {
					var t = this._generalFind(r, !0)
					return t.length > 0 ? t[0] : void 0
				}
				_generalFind(r, t) {
					var n = []
					return (
						this._descendants((i) => {
							let c = i._isMatch(r)
							return c && n.push(i), !!(c && t)
						}),
						n
					)
				}
				_descendants(r) {
					let t = !1,
						n = this.getChildren()
					for (let i of n) {
						if (((t = r(i)), t)) return !0
						if (!!i.hasChildren() && ((t = i._descendants(r)), t)) return !0
					}
					return !1
				}
				toObject() {
					var r = t2.prototype.toObject.call(this)
					return (
						(r.children = []),
						this.getChildren().forEach((t) => {
							r.children.push(t.toObject())
						}),
						r
					)
				}
				isAncestorOf(r) {
					for (var t = r.getParent(); t; ) {
						if (t._id === this._id) return !0
						t = t.getParent()
					}
					return !1
				}
				clone(r) {
					var t = t2.prototype.clone.call(this, r)
					return (
						this.getChildren().forEach(function (n) {
							t.add(n.clone())
						}),
						t
					)
				}
				getAllIntersections(r) {
					var t = []
					return (
						this.find('Shape').forEach(function (n) {
							n.isVisible() && n.intersects(r) && t.push(n)
						}),
						t
					)
				}
				_clearSelfAndDescendantCache(r) {
					var t
					super._clearSelfAndDescendantCache(r),
						!this.isCached() &&
							((t = this.children) === null ||
								t === void 0 ||
								t.forEach(function (n) {
									n._clearSelfAndDescendantCache(r)
								}))
				}
				_setChildrenIndices() {
					var r
					;(r = this.children) === null ||
						r === void 0 ||
						r.forEach(function (t, n) {
							t.index = n
						}),
						this._requestDraw()
				}
				drawScene(r, t) {
					var n = this.getLayer(),
						i = r || (n && n.getCanvas()),
						c = i && i.getContext(),
						C = this._getCanvasCache(),
						l = C && C.scene,
						u = i && i.isCache
					if (!this.isVisible() && !u) return this
					if (l) {
						c.save()
						var h = this.getAbsoluteTransform(t).getMatrix()
						c.transform(h[0], h[1], h[2], h[3], h[4], h[5]), this._drawCachedSceneCanvas(c), c.restore()
					} else this._drawChildren('drawScene', i, t)
					return this
				}
				drawHit(r, t) {
					if (!this.shouldDrawHit(t)) return this
					var n = this.getLayer(),
						i = r || (n && n.hitCanvas),
						c = i && i.getContext(),
						C = this._getCanvasCache(),
						l = C && C.hit
					if (l) {
						c.save()
						var u = this.getAbsoluteTransform(t).getMatrix()
						c.transform(u[0], u[1], u[2], u[3], u[4], u[5]), this._drawCachedHitCanvas(c), c.restore()
					} else this._drawChildren('drawHit', i, t)
					return this
				}
				_drawChildren(r, t, n) {
					var i,
						c = t && t.getContext(),
						C = this.clipWidth(),
						l = this.clipHeight(),
						u = this.clipFunc(),
						h = (C && l) || u
					let v = n === this
					if (h) {
						c.save()
						var g = this.getAbsoluteTransform(n),
							m = g.getMatrix()
						if ((c.transform(m[0], m[1], m[2], m[3], m[4], m[5]), c.beginPath(), u)) u.call(this, c, this)
						else {
							var H = this.clipX(),
								L = this.clipY()
							c.rect(H, L, C, l)
						}
						c.clip(), (m = g.copy().invert().getMatrix()), c.transform(m[0], m[1], m[2], m[3], m[4], m[5])
					}
					var x = !v && this.globalCompositeOperation() !== 'source-over' && r === 'drawScene'
					x && (c.save(), c._applyGlobalCompositeOperation(this)),
						(i = this.children) === null ||
							i === void 0 ||
							i.forEach(function (w) {
								w[r](t, n)
							}),
						x && c.restore(),
						h && c.restore()
				}
				getClientRect(r) {
					var t
					r = r || {}
					var n = r.skipTransform,
						i = r.relativeTo,
						c,
						C,
						l,
						u,
						h = { x: 1 / 0, y: 1 / 0, width: 0, height: 0 },
						v = this
					;(t = this.children) === null ||
						t === void 0 ||
						t.forEach(function (x) {
							if (!!x.visible()) {
								var w = x.getClientRect({ relativeTo: v, skipShadow: r.skipShadow, skipStroke: r.skipStroke })
								;(w.width === 0 && w.height === 0) ||
									(c === void 0
										? ((c = w.x), (C = w.y), (l = w.x + w.width), (u = w.y + w.height))
										: ((c = Math.min(c, w.x)),
										  (C = Math.min(C, w.y)),
										  (l = Math.max(l, w.x + w.width)),
										  (u = Math.max(u, w.y + w.height))))
							}
						})
					for (var g = this.find('Shape'), m = !1, H = 0; H < g.length; H++) {
						var L = g[H]
						if (L._isVisible(this)) {
							m = !0
							break
						}
					}
					return (
						m && c !== void 0
							? (h = { x: c, y: C, width: l - c, height: u - C })
							: (h = { x: 0, y: 0, width: 0, height: 0 }),
						n ? h : this._transformedRect(h, i)
					)
				}
			}
			F.addComponentsGetterSetter(x1, 'clip', ['x', 'y', 'width', 'height'])
			F.addGetterSetter(x1, 'clipX', void 0, M2())
			F.addGetterSetter(x1, 'clipY', void 0, M2())
			F.addGetterSetter(x1, 'clipWidth', void 0, M2())
			F.addGetterSetter(x1, 'clipHeight', void 0, M2())
			F.addGetterSetter(x1, 'clipFunc')
		})
	function on(e) {
		return Ve.get(e)
	}
	function cn(e) {
		return { evt: e, pointerId: e.pointerId }
	}
	function Cn(e, r) {
		return Ve.get(e) === r
	}
	function sn(e, r) {
		Y5(e),
			r.getStage() && (Ve.set(e, r), DL && r._fire('gotpointercapture', cn(new PointerEvent('gotpointercapture'))))
	}
	function Y5(e, r) {
		let t = Ve.get(e)
		if (!t) return
		let n = t.getStage()
		n && n.content, Ve.delete(e), DL && t._fire('lostpointercapture', cn(new PointerEvent('lostpointercapture')))
	}
	var Ve,
		DL,
		ds = V1(() => {
			u1()
			;(Ve = new Map()), (DL = i2._global.PointerEvent !== void 0)
		})
	function IL(e = {}) {
		return (
			(e.clipFunc || e.clipWidth || e.clipHeight) &&
				E.warn('Stage does not support clipping. Please use clip for Layers or Groups.'),
			e
		)
	}
	var OO,
		DO,
		FL,
		bO,
		BL,
		qL,
		UL,
		jL,
		GL,
		WL,
		ye,
		Se,
		C0,
		xe,
		FO,
		ln,
		fn,
		un,
		hn,
		ms,
		YL,
		KL,
		QL,
		XL,
		Ls,
		IO,
		BO,
		vs,
		we,
		c0,
		qO,
		Ne,
		K5,
		JL = V1(() => {
			a3()
			X4()
			He()
			u1()
			Me()
			rn()
			u1()
			ds()
			;(OO = 'Stage'),
				(DO = 'string'),
				(FL = 'px'),
				(bO = 'mouseout'),
				(BL = 'mouseleave'),
				(qL = 'mouseover'),
				(UL = 'mouseenter'),
				(jL = 'mousemove'),
				(GL = 'mousedown'),
				(WL = 'mouseup'),
				(ye = 'pointermove'),
				(Se = 'pointerdown'),
				(C0 = 'pointerup'),
				(xe = 'pointercancel'),
				(FO = 'lostpointercapture'),
				(ln = 'pointerout'),
				(fn = 'pointerleave'),
				(un = 'pointerover'),
				(hn = 'pointerenter'),
				(ms = 'contextmenu'),
				(YL = 'touchstart'),
				(KL = 'touchend'),
				(QL = 'touchmove'),
				(XL = 'touchcancel'),
				(Ls = 'wheel'),
				(IO = 5),
				(BO = [
					[UL, '_pointerenter'],
					[GL, '_pointerdown'],
					[jL, '_pointermove'],
					[WL, '_pointerup'],
					[BL, '_pointerleave'],
					[YL, '_pointerdown'],
					[QL, '_pointermove'],
					[KL, '_pointerup'],
					[XL, '_pointercancel'],
					[qL, '_pointerover'],
					[Ls, '_wheel'],
					[ms, '_contextmenu'],
					[Se, '_pointerdown'],
					[ye, '_pointermove'],
					[C0, '_pointerup'],
					[xe, '_pointercancel'],
					[FO, '_lostpointercapture'],
				]),
				(vs = {
					mouse: {
						[ln]: bO,
						[fn]: BL,
						[un]: qL,
						[hn]: UL,
						[ye]: jL,
						[Se]: GL,
						[C0]: WL,
						[xe]: 'mousecancel',
						pointerclick: 'click',
						pointerdblclick: 'dblclick',
					},
					touch: {
						[ln]: 'touchout',
						[fn]: 'touchleave',
						[un]: 'touchover',
						[hn]: 'touchenter',
						[ye]: QL,
						[Se]: YL,
						[C0]: KL,
						[xe]: XL,
						pointerclick: 'tap',
						pointerdblclick: 'dbltap',
					},
					pointer: {
						[ln]: ln,
						[fn]: fn,
						[un]: un,
						[hn]: hn,
						[ye]: ye,
						[Se]: Se,
						[C0]: C0,
						[xe]: xe,
						pointerclick: 'pointerclick',
						pointerdblclick: 'pointerdblclick',
					},
				}),
				(we = (e) => (e.indexOf('pointer') >= 0 ? 'pointer' : e.indexOf('touch') >= 0 ? 'touch' : 'mouse')),
				(c0 = (e) => {
					let r = we(e)
					if (r === 'pointer') return i2.pointerEventsEnabled && vs.pointer
					if (r === 'touch') return vs.touch
					if (r === 'mouse') return vs.mouse
				})
			;(qO =
				'Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);'),
				(Ne = []),
				(K5 = class extends x1 {
					constructor(r) {
						super(IL(r)),
							(this._pointerPositions = []),
							(this._changedPointerPositions = []),
							this._buildDOM(),
							this._bindContentEvents(),
							Ne.push(this),
							this.on('widthChange.konva heightChange.konva', this._resizeDOM),
							this.on('visibleChange.konva', this._checkVisibility),
							this.on('clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva', () => {
								IL(this.attrs)
							}),
							this._checkVisibility()
					}
					_validateAdd(r) {
						let t = r.getType() === 'Layer',
							n = r.getType() === 'FastLayer'
						t || n || E.throw('You may only add layers to the stage.')
					}
					_checkVisibility() {
						if (!this.content) return
						let r = this.visible() ? '' : 'none'
						this.content.style.display = r
					}
					setContainer(r) {
						if (typeof r === DO) {
							if (r.charAt(0) === '.') {
								var t = r.slice(1)
								r = document.getElementsByClassName(t)[0]
							} else {
								var n
								r.charAt(0) !== '#' ? (n = r) : (n = r.slice(1)), (r = document.getElementById(n))
							}
							if (!r) throw 'Can not find container in document with id ' + n
						}
						return (
							this._setAttr('container', r),
							this.content &&
								(this.content.parentElement && this.content.parentElement.removeChild(this.content),
								r.appendChild(this.content)),
							this
						)
					}
					shouldDrawHit() {
						return !0
					}
					clear() {
						var r = this.children,
							t = r.length,
							n
						for (n = 0; n < t; n++) r[n].clear()
						return this
					}
					clone(r) {
						return (
							r || (r = {}),
							(r.container = typeof document < 'u' && document.createElement('div')),
							x1.prototype.clone.call(this, r)
						)
					}
					destroy() {
						super.destroy()
						var r = this.content
						r && E._isInDocument(r) && this.container().removeChild(r)
						var t = Ne.indexOf(this)
						return t > -1 && Ne.splice(t, 1), this
					}
					getPointerPosition() {
						let r = this._pointerPositions[0] || this._changedPointerPositions[0]
						return r ? { x: r.x, y: r.y } : (E.warn(qO), null)
					}
					_getPointerById(r) {
						return this._pointerPositions.find((t) => t.id === r)
					}
					getPointersPositions() {
						return this._pointerPositions
					}
					getStage() {
						return this
					}
					getContent() {
						return this.content
					}
					_toKonvaCanvas(r) {
						;(r = r || {}),
							(r.x = r.x || 0),
							(r.y = r.y || 0),
							(r.width = r.width || this.width()),
							(r.height = r.height || this.height())
						var t = new S4({ width: r.width, height: r.height, pixelRatio: r.pixelRatio || 1 }),
							n = t.getContext()._context,
							i = this.children
						return (
							(r.x || r.y) && n.translate(-1 * r.x, -1 * r.y),
							i.forEach(function (c) {
								if (!!c.isVisible()) {
									var C = c._toKonvaCanvas(r)
									n.drawImage(
										C._canvas,
										r.x,
										r.y,
										C.getWidth() / C.getPixelRatio(),
										C.getHeight() / C.getPixelRatio(),
									)
								}
							}),
							t
						)
					}
					getIntersection(r) {
						if (!r) return null
						var t = this.children,
							n = t.length,
							i = n - 1,
							c
						for (c = i; c >= 0; c--) {
							let C = t[c].getIntersection(r)
							if (C) return C
						}
						return null
					}
					_resizeDOM() {
						var r = this.width(),
							t = this.height()
						this.content && ((this.content.style.width = r + FL), (this.content.style.height = t + FL)),
							this.bufferCanvas.setSize(r, t),
							this.bufferHitCanvas.setSize(r, t),
							this.children.forEach((n) => {
								n.setSize({ width: r, height: t }), n.draw()
							})
					}
					add(r, ...t) {
						if (arguments.length > 1) {
							for (var n = 0; n < arguments.length; n++) this.add(arguments[n])
							return this
						}
						super.add(r)
						var i = this.children.length
						return (
							i > IO &&
								E.warn(
									'The stage has ' +
										i +
										' layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group.',
								),
							r.setSize({ width: this.width(), height: this.height() }),
							r.draw(),
							i2.isBrowser && this.content.appendChild(r.canvas._canvas),
							this
						)
					}
					getParent() {
						return null
					}
					getLayer() {
						return null
					}
					hasPointerCapture(r) {
						return Cn(r, this)
					}
					setPointerCapture(r) {
						sn(r, this)
					}
					releaseCapture(r) {
						Y5(r, this)
					}
					getLayers() {
						return this.children
					}
					_bindContentEvents() {
						!i2.isBrowser ||
							BO.forEach(([r, t]) => {
								this.content.addEventListener(r, (n) => {
									this[t](n)
								})
							})
					}
					_pointerenter(r) {
						this.setPointersPositions(r)
						let t = c0(r.type)
						this._fire(t.pointerenter, { evt: r, target: this, currentTarget: this })
					}
					_pointerover(r) {
						this.setPointersPositions(r)
						let t = c0(r.type)
						this._fire(t.pointerover, { evt: r, target: this, currentTarget: this })
					}
					_getTargetShape(r) {
						let t = this[r + 'targetShape']
						return t && !t.getStage() && (t = null), t
					}
					_pointerleave(r) {
						let t = c0(r.type),
							n = we(r.type)
						if (!!t) {
							this.setPointersPositions(r)
							var i = this._getTargetShape(n),
								c = !x2.isDragging || i2.hitOnDragEnabled
							i && c
								? (i._fireAndBubble(t.pointerout, { evt: r }),
								  i._fireAndBubble(t.pointerleave, { evt: r }),
								  this._fire(t.pointerleave, { evt: r, target: this, currentTarget: this }),
								  (this[n + 'targetShape'] = null))
								: c &&
								  (this._fire(t.pointerleave, { evt: r, target: this, currentTarget: this }),
								  this._fire(t.pointerout, { evt: r, target: this, currentTarget: this })),
								(this.pointerPos = void 0),
								(this._pointerPositions = [])
						}
					}
					_pointerdown(r) {
						let t = c0(r.type),
							n = we(r.type)
						if (!!t) {
							this.setPointersPositions(r)
							var i = !1
							this._changedPointerPositions.forEach((c) => {
								var C = this.getIntersection(c)
								if (((x2.justDragged = !1), (i2['_' + n + 'ListenClick'] = !0), !(C && C.isListening()))) return
								i2.capturePointerEventsEnabled && C.setPointerCapture(c.id),
									(this[n + 'ClickStartShape'] = C),
									C._fireAndBubble(t.pointerdown, { evt: r, pointerId: c.id }),
									(i = !0)
								let u = r.type.indexOf('touch') >= 0
								C.preventDefault() && r.cancelable && u && r.preventDefault()
							}),
								i ||
									this._fire(t.pointerdown, {
										evt: r,
										target: this,
										currentTarget: this,
										pointerId: this._pointerPositions[0].id,
									})
						}
					}
					_pointermove(r) {
						let t = c0(r.type),
							n = we(r.type)
						if (!t) return
						x2.isDragging && x2.node.preventDefault() && r.cancelable && r.preventDefault(),
							this.setPointersPositions(r)
						var i = !x2.isDragging || i2.hitOnDragEnabled
						if (!i) return
						var c = {}
						let C = !1
						var l = this._getTargetShape(n)
						this._changedPointerPositions.forEach((u) => {
							let h = on(u.id) || this.getIntersection(u),
								v = u.id,
								g = { evt: r, pointerId: v }
							var m = l !== h
							if (
								(m &&
									l &&
									(l._fireAndBubble(t.pointerout, Object.assign({}, g), h),
									l._fireAndBubble(t.pointerleave, Object.assign({}, g), h)),
								h)
							) {
								if (c[h._id]) return
								c[h._id] = !0
							}
							h && h.isListening()
								? ((C = !0),
								  m &&
										(h._fireAndBubble(t.pointerover, Object.assign({}, g), l),
										h._fireAndBubble(t.pointerenter, Object.assign({}, g), l),
										(this[n + 'targetShape'] = h)),
								  h._fireAndBubble(t.pointermove, Object.assign({}, g)))
								: l &&
								  (this._fire(t.pointerover, { evt: r, target: this, currentTarget: this, pointerId: v }),
								  (this[n + 'targetShape'] = null))
						}),
							C ||
								this._fire(t.pointermove, {
									evt: r,
									target: this,
									currentTarget: this,
									pointerId: this._changedPointerPositions[0].id,
								})
					}
					_pointerup(r) {
						let t = c0(r.type),
							n = we(r.type)
						if (!t) return
						this.setPointersPositions(r)
						let i = this[n + 'ClickStartShape'],
							c = this[n + 'ClickEndShape']
						var C = {}
						let l = !1
						this._changedPointerPositions.forEach((u) => {
							let h = on(u.id) || this.getIntersection(u)
							if (h) {
								if ((h.releaseCapture(u.id), C[h._id])) return
								C[h._id] = !0
							}
							let v = u.id,
								g = { evt: r, pointerId: v },
								m = !1
							i2['_' + n + 'InDblClickWindow']
								? ((m = !0), clearTimeout(this[n + 'DblTimeout']))
								: x2.justDragged ||
								  ((i2['_' + n + 'InDblClickWindow'] = !0), clearTimeout(this[n + 'DblTimeout'])),
								(this[n + 'DblTimeout'] = setTimeout(function () {
									i2['_' + n + 'InDblClickWindow'] = !1
								}, i2.dblClickWindow)),
								h && h.isListening()
									? ((l = !0),
									  (this[n + 'ClickEndShape'] = h),
									  h._fireAndBubble(t.pointerup, Object.assign({}, g)),
									  i2['_' + n + 'ListenClick'] &&
											i &&
											i === h &&
											(h._fireAndBubble(t.pointerclick, Object.assign({}, g)),
											m && c && c === h && h._fireAndBubble(t.pointerdblclick, Object.assign({}, g))))
									: ((this[n + 'ClickEndShape'] = null),
									  i2['_' + n + 'ListenClick'] &&
											this._fire(t.pointerclick, {
												evt: r,
												target: this,
												currentTarget: this,
												pointerId: v,
											}),
									  m &&
											this._fire(t.pointerdblclick, {
												evt: r,
												target: this,
												currentTarget: this,
												pointerId: v,
											}))
						}),
							l ||
								this._fire(t.pointerup, {
									evt: r,
									target: this,
									currentTarget: this,
									pointerId: this._changedPointerPositions[0].id,
								}),
							(i2['_' + n + 'ListenClick'] = !1),
							r.cancelable && r.preventDefault()
					}
					_contextmenu(r) {
						this.setPointersPositions(r)
						var t = this.getIntersection(this.getPointerPosition())
						t && t.isListening()
							? t._fireAndBubble(ms, { evt: r })
							: this._fire(ms, { evt: r, target: this, currentTarget: this })
					}
					_wheel(r) {
						this.setPointersPositions(r)
						var t = this.getIntersection(this.getPointerPosition())
						t && t.isListening()
							? t._fireAndBubble(Ls, { evt: r })
							: this._fire(Ls, { evt: r, target: this, currentTarget: this })
					}
					_pointercancel(r) {
						this.setPointersPositions(r)
						let t = on(r.pointerId) || this.getIntersection(this.getPointerPosition())
						t && t._fireAndBubble(C0, cn(r)), Y5(r.pointerId)
					}
					_lostpointercapture(r) {
						Y5(r.pointerId)
					}
					setPointersPositions(r) {
						var t = this._getContentPosition(),
							n = null,
							i = null
						;(r = r || window.event),
							r.touches !== void 0
								? ((this._pointerPositions = []),
								  (this._changedPointerPositions = []),
								  Array.prototype.forEach.call(r.touches, (c) => {
										this._pointerPositions.push({
											id: c.identifier,
											x: (c.clientX - t.left) / t.scaleX,
											y: (c.clientY - t.top) / t.scaleY,
										})
								  }),
								  Array.prototype.forEach.call(r.changedTouches || r.touches, (c) => {
										this._changedPointerPositions.push({
											id: c.identifier,
											x: (c.clientX - t.left) / t.scaleX,
											y: (c.clientY - t.top) / t.scaleY,
										})
								  }))
								: ((n = (r.clientX - t.left) / t.scaleX),
								  (i = (r.clientY - t.top) / t.scaleY),
								  (this.pointerPos = { x: n, y: i }),
								  (this._pointerPositions = [{ x: n, y: i, id: E._getFirstPointerId(r) }]),
								  (this._changedPointerPositions = [{ x: n, y: i, id: E._getFirstPointerId(r) }]))
					}
					_setPointerPosition(r) {
						E.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'),
							this.setPointersPositions(r)
					}
					_getContentPosition() {
						if (!this.content || !this.content.getBoundingClientRect)
							return { top: 0, left: 0, scaleX: 1, scaleY: 1 }
						var r = this.content.getBoundingClientRect()
						return {
							top: r.top,
							left: r.left,
							scaleX: r.width / this.content.clientWidth || 1,
							scaleY: r.height / this.content.clientHeight || 1,
						}
					}
					_buildDOM() {
						if (
							((this.bufferCanvas = new S4({ width: this.width(), height: this.height() })),
							(this.bufferHitCanvas = new i5({ pixelRatio: 1, width: this.width(), height: this.height() })),
							!!i2.isBrowser)
						) {
							var r = this.container()
							if (!r) throw 'Stage has no container. A container is required.'
							;(r.innerHTML = ''),
								(this.content = document.createElement('div')),
								(this.content.style.position = 'relative'),
								(this.content.style.userSelect = 'none'),
								(this.content.className = 'konvajs-content'),
								this.content.setAttribute('role', 'presentation'),
								r.appendChild(this.content),
								this._resizeDOM()
						}
					}
					cache() {
						return (
							E.warn(
								'Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.',
							),
							this
						)
					}
					clearCache() {
						return this
					}
					batchDraw() {
						return (
							this.getChildren().forEach(function (r) {
								r.batchDraw()
							}),
							this
						)
					}
				})
			K5.prototype.nodeType = OO
			G1(K5)
			F.addGetterSetter(K5, 'container')
		})
	function gs() {
		return pn || ((pn = E.createCanvasElement().getContext('2d')), pn)
	}
	function UO(e) {
		e.fill()
	}
	function jO(e) {
		e.stroke()
	}
	function GO(e) {
		e.fill()
	}
	function WO(e) {
		e.stroke()
	}
	function YO() {
		this._clearCache(ZL)
	}
	function KO() {
		this._clearCache($L)
	}
	function QO() {
		this._clearCache(eg)
	}
	function XO() {
		this._clearCache(rg)
	}
	function JO() {
		this._clearCache(tg)
	}
	var ZL,
		$L,
		eg,
		rg,
		tg,
		pn,
		Q5,
		G,
		s0 = V1(() => {
			u1()
			a3()
			X4()
			o0()
			g6()
			u1()
			ds()
			;(ZL = 'hasShadow'),
				($L = 'shadowRGBA'),
				(eg = 'patternImage'),
				(rg = 'linearGradient'),
				(tg = 'radialGradient')
			Q5 = {}
			G = class extends t2 {
				constructor(r) {
					super(r)
					let t
					for (; (t = E.getRandomColor()), !(t && !(t in Q5)); );
					;(this.colorKey = t), (Q5[t] = this)
				}
				getContext() {
					return (
						E.warn('shape.getContext() method is deprecated. Please do not use it.'), this.getLayer().getContext()
					)
				}
				getCanvas() {
					return (
						E.warn('shape.getCanvas() method is deprecated. Please do not use it.'), this.getLayer().getCanvas()
					)
				}
				getSceneFunc() {
					return this.attrs.sceneFunc || this._sceneFunc
				}
				getHitFunc() {
					return this.attrs.hitFunc || this._hitFunc
				}
				hasShadow() {
					return this._getCache(ZL, this._hasShadow)
				}
				_hasShadow() {
					return (
						this.shadowEnabled() &&
						this.shadowOpacity() !== 0 &&
						!!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY())
					)
				}
				_getFillPattern() {
					return this._getCache(eg, this.__getFillPattern)
				}
				__getFillPattern() {
					if (this.fillPatternImage()) {
						var r = gs()
						let t = r.createPattern(this.fillPatternImage(), this.fillPatternRepeat() || 'repeat')
						if (t && t.setTransform) {
							let n = new B3()
							n.translate(this.fillPatternX(), this.fillPatternY()),
								n.rotate(i2.getAngle(this.fillPatternRotation())),
								n.scale(this.fillPatternScaleX(), this.fillPatternScaleY()),
								n.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY())
							let i = n.getMatrix(),
								c =
									typeof DOMMatrix > 'u'
										? { a: i[0], b: i[1], c: i[2], d: i[3], e: i[4], f: i[5] }
										: new DOMMatrix(i)
							t.setTransform(c)
						}
						return t
					}
				}
				_getLinearGradient() {
					return this._getCache(rg, this.__getLinearGradient)
				}
				__getLinearGradient() {
					var r = this.fillLinearGradientColorStops()
					if (r) {
						for (
							var t = gs(),
								n = this.fillLinearGradientStartPoint(),
								i = this.fillLinearGradientEndPoint(),
								c = t.createLinearGradient(n.x, n.y, i.x, i.y),
								C = 0;
							C < r.length;
							C += 2
						)
							c.addColorStop(r[C], r[C + 1])
						return c
					}
				}
				_getRadialGradient() {
					return this._getCache(tg, this.__getRadialGradient)
				}
				__getRadialGradient() {
					var r = this.fillRadialGradientColorStops()
					if (r) {
						for (
							var t = gs(),
								n = this.fillRadialGradientStartPoint(),
								i = this.fillRadialGradientEndPoint(),
								c = t.createRadialGradient(
									n.x,
									n.y,
									this.fillRadialGradientStartRadius(),
									i.x,
									i.y,
									this.fillRadialGradientEndRadius(),
								),
								C = 0;
							C < r.length;
							C += 2
						)
							c.addColorStop(r[C], r[C + 1])
						return c
					}
				}
				getShadowRGBA() {
					return this._getCache($L, this._getShadowRGBA)
				}
				_getShadowRGBA() {
					if (this.hasShadow()) {
						var r = E.colorToRGBA(this.shadowColor())
						return 'rgba(' + r.r + ',' + r.g + ',' + r.b + ',' + r.a * (this.shadowOpacity() || 1) + ')'
					}
				}
				hasFill() {
					return this._calculate(
						'hasFill',
						[
							'fillEnabled',
							'fill',
							'fillPatternImage',
							'fillLinearGradientColorStops',
							'fillRadialGradientColorStops',
						],
						() =>
							this.fillEnabled() &&
							!!(
								this.fill() ||
								this.fillPatternImage() ||
								this.fillLinearGradientColorStops() ||
								this.fillRadialGradientColorStops()
							),
					)
				}
				hasStroke() {
					return this._calculate(
						'hasStroke',
						['strokeEnabled', 'strokeWidth', 'stroke', 'strokeLinearGradientColorStops'],
						() =>
							this.strokeEnabled() &&
							this.strokeWidth() &&
							!!(this.stroke() || this.strokeLinearGradientColorStops()),
					)
				}
				hasHitStroke() {
					let r = this.hitStrokeWidth()
					return r === 'auto' ? this.hasStroke() : this.strokeEnabled() && !!r
				}
				intersects(r) {
					var t = this.getStage(),
						n = t.bufferHitCanvas,
						i
					return (
						n.getContext().clear(),
						this.drawHit(n, null, !0),
						(i = n.context.getImageData(Math.round(r.x), Math.round(r.y), 1, 1).data),
						i[3] > 0
					)
				}
				destroy() {
					return t2.prototype.destroy.call(this), delete Q5[this.colorKey], delete this.colorKey, this
				}
				_useBufferCanvas(r) {
					var t
					if (!this.getStage() || !((t = this.attrs.perfectDrawEnabled) !== null && t !== void 0 ? t : !0))
						return !1
					let i = r || this.hasFill(),
						c = this.hasStroke(),
						C = this.getAbsoluteOpacity() !== 1
					if (i && c && C) return !0
					let l = this.hasShadow(),
						u = this.shadowForStrokeEnabled()
					return !!(i && c && l && u)
				}
				setStrokeHitEnabled(r) {
					E.warn('strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead.'),
						r ? this.hitStrokeWidth('auto') : this.hitStrokeWidth(0)
				}
				getStrokeHitEnabled() {
					return this.hitStrokeWidth() !== 0
				}
				getSelfRect() {
					var r = this.size()
					return {
						x: this._centroid ? -r.width / 2 : 0,
						y: this._centroid ? -r.height / 2 : 0,
						width: r.width,
						height: r.height,
					}
				}
				getClientRect(r = {}) {
					let t = r.skipTransform,
						n = r.relativeTo,
						i = this.getSelfRect(),
						C = (!r.skipStroke && this.hasStroke() && this.strokeWidth()) || 0,
						l = i.width + C,
						u = i.height + C,
						h = !r.skipShadow && this.hasShadow(),
						v = h ? this.shadowOffsetX() : 0,
						g = h ? this.shadowOffsetY() : 0,
						m = l + Math.abs(v),
						H = u + Math.abs(g),
						L = (h && this.shadowBlur()) || 0,
						x = m + L * 2,
						w = H + L * 2,
						V = {
							width: x,
							height: w,
							x: -(C / 2 + L) + Math.min(v, 0) + i.x,
							y: -(C / 2 + L) + Math.min(g, 0) + i.y,
						}
					return t ? V : this._transformedRect(V, n)
				}
				drawScene(r, t) {
					var n = this.getLayer(),
						i = r || n.getCanvas(),
						c = i.getContext(),
						C = this._getCanvasCache(),
						l = this.getSceneFunc(),
						u = this.hasShadow(),
						h,
						v,
						g,
						m = i.isCache,
						H = t === this
					if (!this.isVisible() && !H) return this
					if (C) {
						c.save()
						var L = this.getAbsoluteTransform(t).getMatrix()
						return (
							c.transform(L[0], L[1], L[2], L[3], L[4], L[5]), this._drawCachedSceneCanvas(c), c.restore(), this
						)
					}
					if (!l) return this
					if ((c.save(), this._useBufferCanvas() && !m)) {
						;(h = this.getStage()),
							(v = h.bufferCanvas),
							(g = v.getContext()),
							g.clear(),
							g.save(),
							g._applyLineJoin(this)
						var x = this.getAbsoluteTransform(t).getMatrix()
						g.transform(x[0], x[1], x[2], x[3], x[4], x[5]), l.call(this, g, this), g.restore()
						var w = v.pixelRatio
						u && c._applyShadow(this),
							c._applyOpacity(this),
							c._applyGlobalCompositeOperation(this),
							c.drawImage(v._canvas, 0, 0, v.width / w, v.height / w)
					} else {
						if ((c._applyLineJoin(this), !H)) {
							var x = this.getAbsoluteTransform(t).getMatrix()
							c.transform(x[0], x[1], x[2], x[3], x[4], x[5]),
								c._applyOpacity(this),
								c._applyGlobalCompositeOperation(this)
						}
						u && c._applyShadow(this), l.call(this, c, this)
					}
					return c.restore(), this
				}
				drawHit(r, t, n = !1) {
					if (!this.shouldDrawHit(t, n)) return this
					var i = this.getLayer(),
						c = r || i.hitCanvas,
						C = c && c.getContext(),
						l = this.hitFunc() || this.sceneFunc(),
						u = this._getCanvasCache(),
						h = u && u.hit
					if (
						(this.colorKey ||
							E.warn(
								'Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()',
							),
						h)
					) {
						C.save()
						var v = this.getAbsoluteTransform(t).getMatrix()
						return (
							C.transform(v[0], v[1], v[2], v[3], v[4], v[5]), this._drawCachedHitCanvas(C), C.restore(), this
						)
					}
					if (!l) return this
					if ((C.save(), C._applyLineJoin(this), !(this === t))) {
						var m = this.getAbsoluteTransform(t).getMatrix()
						C.transform(m[0], m[1], m[2], m[3], m[4], m[5])
					}
					return l.call(this, C, this), C.restore(), this
				}
				drawHitFromCache(r = 0) {
					var t = this._getCanvasCache(),
						n = this._getCachedSceneCanvas(),
						i = t.hit,
						c = i.getContext(),
						C = i.getWidth(),
						l = i.getHeight(),
						u,
						h,
						v,
						g,
						m,
						H
					c.clear(), c.drawImage(n._canvas, 0, 0, C, l)
					try {
						for (
							u = c.getImageData(0, 0, C, l), h = u.data, v = h.length, g = E._hexToRgb(this.colorKey), m = 0;
							m < v;
							m += 4
						)
							(H = h[m + 3]),
								H > r ? ((h[m] = g.r), (h[m + 1] = g.g), (h[m + 2] = g.b), (h[m + 3] = 255)) : (h[m + 3] = 0)
						c.putImageData(u, 0, 0)
					} catch (L) {
						E.error('Unable to draw hit graph from cached scene canvas. ' + L.message)
					}
					return this
				}
				hasPointerCapture(r) {
					return Cn(r, this)
				}
				setPointerCapture(r) {
					sn(r, this)
				}
				releaseCapture(r) {
					Y5(r, this)
				}
			}
			G.prototype._fillFunc = UO
			G.prototype._strokeFunc = jO
			G.prototype._fillFuncHit = GO
			G.prototype._strokeFuncHit = WO
			G.prototype._centroid = !1
			G.prototype.nodeType = 'Shape'
			G1(G)
			G.prototype.eventListeners = {}
			G.prototype.on.call(
				G.prototype,
				'shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva',
				YO,
			)
			G.prototype.on.call(
				G.prototype,
				'shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva',
				KO,
			)
			G.prototype.on.call(
				G.prototype,
				'fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva',
				QO,
			)
			G.prototype.on.call(
				G.prototype,
				'fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva',
				XO,
			)
			G.prototype.on.call(
				G.prototype,
				'fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva',
				JO,
			)
			F.addGetterSetter(G, 'stroke', void 0, fs())
			F.addGetterSetter(G, 'strokeWidth', 2, M2())
			F.addGetterSetter(G, 'fillAfterStrokeEnabled', !1)
			F.addGetterSetter(G, 'hitStrokeWidth', 'auto', xL())
			F.addGetterSetter(G, 'strokeHitEnabled', !0, y4())
			F.addGetterSetter(G, 'perfectDrawEnabled', !0, y4())
			F.addGetterSetter(G, 'shadowForStrokeEnabled', !0, y4())
			F.addGetterSetter(G, 'lineJoin')
			F.addGetterSetter(G, 'lineCap')
			F.addGetterSetter(G, 'sceneFunc')
			F.addGetterSetter(G, 'hitFunc')
			F.addGetterSetter(G, 'dash')
			F.addGetterSetter(G, 'dashOffset', 0, M2())
			F.addGetterSetter(G, 'shadowColor', void 0, j5())
			F.addGetterSetter(G, 'shadowBlur', 0, M2())
			F.addGetterSetter(G, 'shadowOpacity', 1, M2())
			F.addComponentsGetterSetter(G, 'shadowOffset', ['x', 'y'])
			F.addGetterSetter(G, 'shadowOffsetX', 0, M2())
			F.addGetterSetter(G, 'shadowOffsetY', 0, M2())
			F.addGetterSetter(G, 'fillPatternImage')
			F.addGetterSetter(G, 'fill', void 0, fs())
			F.addGetterSetter(G, 'fillPatternX', 0, M2())
			F.addGetterSetter(G, 'fillPatternY', 0, M2())
			F.addGetterSetter(G, 'fillLinearGradientColorStops')
			F.addGetterSetter(G, 'strokeLinearGradientColorStops')
			F.addGetterSetter(G, 'fillRadialGradientStartRadius', 0)
			F.addGetterSetter(G, 'fillRadialGradientEndRadius', 0)
			F.addGetterSetter(G, 'fillRadialGradientColorStops')
			F.addGetterSetter(G, 'fillPatternRepeat', 'repeat')
			F.addGetterSetter(G, 'fillEnabled', !0)
			F.addGetterSetter(G, 'strokeEnabled', !0)
			F.addGetterSetter(G, 'shadowEnabled', !0)
			F.addGetterSetter(G, 'dashEnabled', !0)
			F.addGetterSetter(G, 'strokeScaleEnabled', !0)
			F.addGetterSetter(G, 'fillPriority', 'color')
			F.addComponentsGetterSetter(G, 'fillPatternOffset', ['x', 'y'])
			F.addGetterSetter(G, 'fillPatternOffsetX', 0, M2())
			F.addGetterSetter(G, 'fillPatternOffsetY', 0, M2())
			F.addComponentsGetterSetter(G, 'fillPatternScale', ['x', 'y'])
			F.addGetterSetter(G, 'fillPatternScaleX', 1, M2())
			F.addGetterSetter(G, 'fillPatternScaleY', 1, M2())
			F.addComponentsGetterSetter(G, 'fillLinearGradientStartPoint', ['x', 'y'])
			F.addComponentsGetterSetter(G, 'strokeLinearGradientStartPoint', ['x', 'y'])
			F.addGetterSetter(G, 'fillLinearGradientStartPointX', 0)
			F.addGetterSetter(G, 'strokeLinearGradientStartPointX', 0)
			F.addGetterSetter(G, 'fillLinearGradientStartPointY', 0)
			F.addGetterSetter(G, 'strokeLinearGradientStartPointY', 0)
			F.addComponentsGetterSetter(G, 'fillLinearGradientEndPoint', ['x', 'y'])
			F.addComponentsGetterSetter(G, 'strokeLinearGradientEndPoint', ['x', 'y'])
			F.addGetterSetter(G, 'fillLinearGradientEndPointX', 0)
			F.addGetterSetter(G, 'strokeLinearGradientEndPointX', 0)
			F.addGetterSetter(G, 'fillLinearGradientEndPointY', 0)
			F.addGetterSetter(G, 'strokeLinearGradientEndPointY', 0)
			F.addComponentsGetterSetter(G, 'fillRadialGradientStartPoint', ['x', 'y'])
			F.addGetterSetter(G, 'fillRadialGradientStartPointX', 0)
			F.addGetterSetter(G, 'fillRadialGradientStartPointY', 0)
			F.addComponentsGetterSetter(G, 'fillRadialGradientEndPoint', ['x', 'y'])
			F.addGetterSetter(G, 'fillRadialGradientEndPointX', 0)
			F.addGetterSetter(G, 'fillRadialGradientEndPointY', 0)
			F.addGetterSetter(G, 'fillPatternRotation', 0)
			F.backCompat(G, {
				dashArray: 'dash',
				getDashArray: 'getDash',
				setDashArray: 'getDash',
				drawFunc: 'sceneFunc',
				getDrawFunc: 'getSceneFunc',
				setDrawFunc: 'setSceneFunc',
				drawHitFunc: 'hitFunc',
				getDrawHitFunc: 'getHitFunc',
				setDrawHitFunc: 'setHitFunc',
			})
		})
	var ZO,
		$O,
		eD,
		ng,
		rD,
		x4,
		Ms = V1(() => {
			a3()
			He()
			o0()
			X4()
			Me()
			g6()
			s0()
			u1()
			;(ZO = '#'),
				($O = 'beforeDraw'),
				(eD = 'draw'),
				(ng = [
					{ x: 0, y: 0 },
					{ x: -1, y: -1 },
					{ x: 1, y: -1 },
					{ x: 1, y: 1 },
					{ x: -1, y: 1 },
				]),
				(rD = ng.length),
				(x4 = class extends x1 {
					constructor(r) {
						super(r),
							(this.canvas = new S4()),
							(this.hitCanvas = new i5({ pixelRatio: 1 })),
							(this._waitingForDraw = !1),
							this.on('visibleChange.konva', this._checkVisibility),
							this._checkVisibility(),
							this.on('imageSmoothingEnabledChange.konva', this._setSmoothEnabled),
							this._setSmoothEnabled()
					}
					createPNGStream() {
						return this.canvas._canvas.createPNGStream()
					}
					getCanvas() {
						return this.canvas
					}
					getNativeCanvasElement() {
						return this.canvas._canvas
					}
					getHitCanvas() {
						return this.hitCanvas
					}
					getContext() {
						return this.getCanvas().getContext()
					}
					clear(r) {
						return this.getContext().clear(r), this.getHitCanvas().getContext().clear(r), this
					}
					setZIndex(r) {
						super.setZIndex(r)
						var t = this.getStage()
						return (
							t &&
								t.content &&
								(t.content.removeChild(this.getNativeCanvasElement()),
								r < t.children.length - 1
									? t.content.insertBefore(
											this.getNativeCanvasElement(),
											t.children[r + 1].getCanvas()._canvas,
									  )
									: t.content.appendChild(this.getNativeCanvasElement())),
							this
						)
					}
					moveToTop() {
						t2.prototype.moveToTop.call(this)
						var r = this.getStage()
						return (
							r &&
								r.content &&
								(r.content.removeChild(this.getNativeCanvasElement()),
								r.content.appendChild(this.getNativeCanvasElement())),
							!0
						)
					}
					moveUp() {
						var r = t2.prototype.moveUp.call(this)
						if (!r) return !1
						var t = this.getStage()
						return !t || !t.content
							? !1
							: (t.content.removeChild(this.getNativeCanvasElement()),
							  this.index < t.children.length - 1
									? t.content.insertBefore(
											this.getNativeCanvasElement(),
											t.children[this.index + 1].getCanvas()._canvas,
									  )
									: t.content.appendChild(this.getNativeCanvasElement()),
							  !0)
					}
					moveDown() {
						if (t2.prototype.moveDown.call(this)) {
							var r = this.getStage()
							if (r) {
								var t = r.children
								r.content &&
									(r.content.removeChild(this.getNativeCanvasElement()),
									r.content.insertBefore(this.getNativeCanvasElement(), t[this.index + 1].getCanvas()._canvas))
							}
							return !0
						}
						return !1
					}
					moveToBottom() {
						if (t2.prototype.moveToBottom.call(this)) {
							var r = this.getStage()
							if (r) {
								var t = r.children
								r.content &&
									(r.content.removeChild(this.getNativeCanvasElement()),
									r.content.insertBefore(this.getNativeCanvasElement(), t[1].getCanvas()._canvas))
							}
							return !0
						}
						return !1
					}
					getLayer() {
						return this
					}
					remove() {
						var r = this.getNativeCanvasElement()
						return (
							t2.prototype.remove.call(this),
							r && r.parentNode && E._isInDocument(r) && r.parentNode.removeChild(r),
							this
						)
					}
					getStage() {
						return this.parent
					}
					setSize({ width: r, height: t }) {
						return this.canvas.setSize(r, t), this.hitCanvas.setSize(r, t), this._setSmoothEnabled(), this
					}
					_validateAdd(r) {
						var t = r.getType()
						t !== 'Group' && t !== 'Shape' && E.throw('You may only add groups and shapes to a layer.')
					}
					_toKonvaCanvas(r) {
						return (
							(r = r || {}),
							(r.width = r.width || this.getWidth()),
							(r.height = r.height || this.getHeight()),
							(r.x = r.x !== void 0 ? r.x : this.x()),
							(r.y = r.y !== void 0 ? r.y : this.y()),
							t2.prototype._toKonvaCanvas.call(this, r)
						)
					}
					_checkVisibility() {
						this.visible()
							? (this.canvas._canvas.style.display = 'block')
							: (this.canvas._canvas.style.display = 'none')
					}
					_setSmoothEnabled() {
						this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled()
					}
					getWidth() {
						if (this.parent) return this.parent.width()
					}
					setWidth() {
						E.warn('Can not change width of layer. Use "stage.width(value)" function instead.')
					}
					getHeight() {
						if (this.parent) return this.parent.height()
					}
					setHeight() {
						E.warn('Can not change height of layer. Use "stage.height(value)" function instead.')
					}
					batchDraw() {
						return (
							this._waitingForDraw ||
								((this._waitingForDraw = !0),
								E.requestAnimFrame(() => {
									this.draw(), (this._waitingForDraw = !1)
								})),
							this
						)
					}
					getIntersection(r) {
						if (!this.isListening() || !this.isVisible()) return null
						for (var t = 1, n = !1; ; ) {
							for (let i = 0; i < rD; i++) {
								let c = ng[i],
									C = this._getIntersection({ x: r.x + c.x * t, y: r.y + c.y * t }),
									l = C.shape
								if (l) return l
								if (((n = !!C.antialiased), !C.antialiased)) break
							}
							if (n) t += 1
							else return null
						}
					}
					_getIntersection(r) {
						let t = this.hitCanvas.pixelRatio,
							n = this.hitCanvas.context.getImageData(Math.round(r.x * t), Math.round(r.y * t), 1, 1).data,
							i = n[3]
						if (i === 255) {
							let c = E._rgbToHex(n[0], n[1], n[2]),
								C = Q5[ZO + c]
							return C ? { shape: C } : { antialiased: !0 }
						} else if (i > 0) return { antialiased: !0 }
						return {}
					}
					drawScene(r, t) {
						var n = this.getLayer(),
							i = r || (n && n.getCanvas())
						return (
							this._fire($O, { node: this }),
							this.clearBeforeDraw() && i.getContext().clear(),
							x1.prototype.drawScene.call(this, i, t),
							this._fire(eD, { node: this }),
							this
						)
					}
					drawHit(r, t) {
						var n = this.getLayer(),
							i = r || (n && n.hitCanvas)
						return (
							n && n.clearBeforeDraw() && n.getHitCanvas().getContext().clear(),
							x1.prototype.drawHit.call(this, i, t),
							this
						)
					}
					enableHitGraph() {
						return this.hitGraphEnabled(!0), this
					}
					disableHitGraph() {
						return this.hitGraphEnabled(!1), this
					}
					setHitGraphEnabled(r) {
						E.warn('hitGraphEnabled method is deprecated. Please use layer.listening() instead.'),
							this.listening(r)
					}
					getHitGraphEnabled(r) {
						return (
							E.warn('hitGraphEnabled method is deprecated. Please use layer.listening() instead.'),
							this.listening()
						)
					}
					toggleHitCanvas() {
						if (!(!this.parent || !this.parent.content)) {
							var r = this.parent,
								t = !!this.hitCanvas._canvas.parentNode
							t ? r.content.removeChild(this.hitCanvas._canvas) : r.content.appendChild(this.hitCanvas._canvas)
						}
					}
				})
			x4.prototype.nodeType = 'Layer'
			G1(x4)
			F.addGetterSetter(x4, 'imageSmoothingEnabled', !0)
			F.addGetterSetter(x4, 'clearBeforeDraw', !0)
			F.addGetterSetter(x4, 'hitGraphEnabled', !0, y4())
		})
	var l0,
		ag = V1(() => {
			a3()
			Ms()
			u1()
			l0 = class extends x4 {
				constructor(r) {
					super(r),
						this.listening(!1),
						E.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.')
				}
			}
			l0.prototype.nodeType = 'FastLayer'
			G1(l0)
		})
	var f0,
		ig = V1(() => {
			a3()
			He()
			u1()
			f0 = class extends x1 {
				_validateAdd(r) {
					var t = r.getType()
					t !== 'Group' && t !== 'Shape' && E.throw('You may only add groups and shapes to groups.')
				}
			}
			f0.prototype.nodeType = 'Group'
			G1(f0)
		})
	var zs,
		u3,
		Hs = V1(() => {
			u1()
			a3()
			;(zs = (function () {
				return a5.performance && a5.performance.now
					? function () {
							return a5.performance.now()
					  }
					: function () {
							return new Date().getTime()
					  }
			})()),
				(u3 = class {
					constructor(r, t) {
						;(this.id = u3.animIdCounter++),
							(this.frame = { time: 0, timeDiff: 0, lastTime: zs(), frameRate: 0 }),
							(this.func = r),
							this.setLayers(t)
					}
					setLayers(r) {
						var t = []
						return r ? (r.length > 0 ? (t = r) : (t = [r])) : (t = []), (this.layers = t), this
					}
					getLayers() {
						return this.layers
					}
					addLayer(r) {
						var t = this.layers,
							n = t.length,
							i
						for (i = 0; i < n; i++) if (t[i]._id === r._id) return !1
						return this.layers.push(r), !0
					}
					isRunning() {
						var r = u3,
							t = r.animations,
							n = t.length,
							i
						for (i = 0; i < n; i++) if (t[i].id === this.id) return !0
						return !1
					}
					start() {
						return (
							this.stop(), (this.frame.timeDiff = 0), (this.frame.lastTime = zs()), u3._addAnimation(this), this
						)
					}
					stop() {
						return u3._removeAnimation(this), this
					}
					_updateFrameObject(r) {
						;(this.frame.timeDiff = r - this.frame.lastTime),
							(this.frame.lastTime = r),
							(this.frame.time += this.frame.timeDiff),
							(this.frame.frameRate = 1e3 / this.frame.timeDiff)
					}
					static _addAnimation(r) {
						this.animations.push(r), this._handleAnimation()
					}
					static _removeAnimation(r) {
						var t = r.id,
							n = this.animations,
							i = n.length,
							c
						for (c = 0; c < i; c++)
							if (n[c].id === t) {
								this.animations.splice(c, 1)
								break
							}
					}
					static _runFrames() {
						var r = {},
							t = this.animations,
							n,
							i,
							c,
							C,
							l,
							u,
							h,
							v,
							g
						for (C = 0; C < t.length; C++)
							if (
								((n = t[C]),
								(i = n.layers),
								(c = n.func),
								n._updateFrameObject(zs()),
								(u = i.length),
								c ? (g = c.call(n, n.frame) !== !1) : (g = !0),
								!!g)
							)
								for (l = 0; l < u; l++) (h = i[l]), h._id !== void 0 && (r[h._id] = h)
						for (v in r) !r.hasOwnProperty(v) || r[v].batchDraw()
					}
					static _animationLoop() {
						var r = u3
						r.animations.length ? (r._runFrames(), E.requestAnimFrame(r._animationLoop)) : (r.animRunning = !1)
					}
					static _handleAnimation() {
						this.animRunning || ((this.animRunning = !0), E.requestAnimFrame(this._animationLoop))
					}
				})
			u3.animations = []
			u3.animIdCounter = 0
			u3.animRunning = !1
		})
	var tD,
		nD,
		og,
		cg,
		aD,
		Cg,
		Vs,
		r1,
		u0,
		sg = V1(() => {
			a3()
			Hs()
			o0()
			u1()
			;(tD = { node: 1, duration: 1, easing: 1, onFinish: 1, yoyo: 1 }),
				(nD = 1),
				(og = 2),
				(cg = 3),
				(aD = 0),
				(Cg = ['fill', 'stroke', 'shadowColor']),
				(Vs = class {
					constructor(r, t, n, i, c, C, l) {
						;(this.prop = r),
							(this.propFunc = t),
							(this.begin = i),
							(this._pos = i),
							(this.duration = C),
							(this._change = 0),
							(this.prevPos = 0),
							(this.yoyo = l),
							(this._time = 0),
							(this._position = 0),
							(this._startTime = 0),
							(this._finish = 0),
							(this.func = n),
							(this._change = c - this.begin),
							this.pause()
					}
					fire(r) {
						var t = this[r]
						t && t()
					}
					setTime(r) {
						r > this.duration
							? this.yoyo
								? ((this._time = this.duration), this.reverse())
								: this.finish()
							: r < 0
							? this.yoyo
								? ((this._time = 0), this.play())
								: this.reset()
							: ((this._time = r), this.update())
					}
					getTime() {
						return this._time
					}
					setPosition(r) {
						;(this.prevPos = this._pos), this.propFunc(r), (this._pos = r)
					}
					getPosition(r) {
						return r === void 0 && (r = this._time), this.func(r, this.begin, this._change, this.duration)
					}
					play() {
						;(this.state = og),
							(this._startTime = this.getTimer() - this._time),
							this.onEnterFrame(),
							this.fire('onPlay')
					}
					reverse() {
						;(this.state = cg),
							(this._time = this.duration - this._time),
							(this._startTime = this.getTimer() - this._time),
							this.onEnterFrame(),
							this.fire('onReverse')
					}
					seek(r) {
						this.pause(), (this._time = r), this.update(), this.fire('onSeek')
					}
					reset() {
						this.pause(), (this._time = 0), this.update(), this.fire('onReset')
					}
					finish() {
						this.pause(), (this._time = this.duration), this.update(), this.fire('onFinish')
					}
					update() {
						this.setPosition(this.getPosition(this._time)), this.fire('onUpdate')
					}
					onEnterFrame() {
						var r = this.getTimer() - this._startTime
						this.state === og ? this.setTime(r) : this.state === cg && this.setTime(this.duration - r)
					}
					pause() {
						;(this.state = nD), this.fire('onPause')
					}
					getTimer() {
						return new Date().getTime()
					}
				}),
				(r1 = class {
					constructor(r) {
						var t = this,
							n = r.node,
							i = n._id,
							c,
							C = r.easing || u0.Linear,
							l = !!r.yoyo,
							u
						typeof r.duration > 'u' ? (c = 0.3) : r.duration === 0 ? (c = 0.001) : (c = r.duration),
							(this.node = n),
							(this._id = aD++)
						var h = n.getLayer() || (n instanceof i2.Stage ? n.getLayers() : null)
						h ||
							E.error('Tween constructor have `node` that is not in a layer. Please add node into layer first.'),
							(this.anim = new u3(function () {
								t.tween.onEnterFrame()
							}, h)),
							(this.tween = new Vs(
								u,
								function (v) {
									t._tweenFunc(v)
								},
								C,
								0,
								1,
								c * 1e3,
								l,
							)),
							this._addListeners(),
							r1.attrs[i] || (r1.attrs[i] = {}),
							r1.attrs[i][this._id] || (r1.attrs[i][this._id] = {}),
							r1.tweens[i] || (r1.tweens[i] = {})
						for (u in r) tD[u] === void 0 && this._addAttr(u, r[u])
						this.reset(), (this.onFinish = r.onFinish), (this.onReset = r.onReset), (this.onUpdate = r.onUpdate)
					}
					_addAttr(r, t) {
						var n = this.node,
							i = n._id,
							c,
							C,
							l,
							u,
							h,
							v,
							g,
							m
						if (((l = r1.tweens[i][r]), l && delete r1.attrs[i][l][r], (c = n.getAttr(r)), E._isArray(t)))
							if (
								((C = []),
								(h = Math.max(t.length, c.length)),
								r === 'points' &&
									t.length !== c.length &&
									(t.length > c.length
										? ((g = c), (c = E._prepareArrayForTween(c, t, n.closed())))
										: ((v = t), (t = E._prepareArrayForTween(t, c, n.closed())))),
								r.indexOf('fill') === 0)
							)
								for (u = 0; u < h; u++)
									if (u % 2 === 0) C.push(t[u] - c[u])
									else {
										var H = E.colorToRGBA(c[u])
										;(m = E.colorToRGBA(t[u])),
											(c[u] = H),
											C.push({ r: m.r - H.r, g: m.g - H.g, b: m.b - H.b, a: m.a - H.a })
									}
							else for (u = 0; u < h; u++) C.push(t[u] - c[u])
						else
							Cg.indexOf(r) !== -1
								? ((c = E.colorToRGBA(c)),
								  (m = E.colorToRGBA(t)),
								  (C = { r: m.r - c.r, g: m.g - c.g, b: m.b - c.b, a: m.a - c.a }))
								: (C = t - c)
						;(r1.attrs[i][this._id][r] = { start: c, diff: C, end: t, trueEnd: v, trueStart: g }),
							(r1.tweens[i][r] = this._id)
					}
					_tweenFunc(r) {
						var t = this.node,
							n = r1.attrs[t._id][this._id],
							i,
							c,
							C,
							l,
							u,
							h,
							v,
							g
						for (i in n) {
							if (((c = n[i]), (C = c.start), (l = c.diff), (g = c.end), E._isArray(C)))
								if (((u = []), (v = Math.max(C.length, g.length)), i.indexOf('fill') === 0))
									for (h = 0; h < v; h++)
										h % 2 === 0
											? u.push((C[h] || 0) + l[h] * r)
											: u.push(
													'rgba(' +
														Math.round(C[h].r + l[h].r * r) +
														',' +
														Math.round(C[h].g + l[h].g * r) +
														',' +
														Math.round(C[h].b + l[h].b * r) +
														',' +
														(C[h].a + l[h].a * r) +
														')',
											  )
								else for (h = 0; h < v; h++) u.push((C[h] || 0) + l[h] * r)
							else
								Cg.indexOf(i) !== -1
									? (u =
											'rgba(' +
											Math.round(C.r + l.r * r) +
											',' +
											Math.round(C.g + l.g * r) +
											',' +
											Math.round(C.b + l.b * r) +
											',' +
											(C.a + l.a * r) +
											')')
									: (u = C + l * r)
							t.setAttr(i, u)
						}
					}
					_addListeners() {
						;(this.tween.onPlay = () => {
							this.anim.start()
						}),
							(this.tween.onReverse = () => {
								this.anim.start()
							}),
							(this.tween.onPause = () => {
								this.anim.stop()
							}),
							(this.tween.onFinish = () => {
								var r = this.node,
									t = r1.attrs[r._id][this._id]
								t.points && t.points.trueEnd && r.setAttr('points', t.points.trueEnd),
									this.onFinish && this.onFinish.call(this)
							}),
							(this.tween.onReset = () => {
								var r = this.node,
									t = r1.attrs[r._id][this._id]
								t.points && t.points.trueStart && r.points(t.points.trueStart), this.onReset && this.onReset()
							}),
							(this.tween.onUpdate = () => {
								this.onUpdate && this.onUpdate.call(this)
							})
					}
					play() {
						return this.tween.play(), this
					}
					reverse() {
						return this.tween.reverse(), this
					}
					reset() {
						return this.tween.reset(), this
					}
					seek(r) {
						return this.tween.seek(r * 1e3), this
					}
					pause() {
						return this.tween.pause(), this
					}
					finish() {
						return this.tween.finish(), this
					}
					destroy() {
						var r = this.node._id,
							t = this._id,
							n = r1.tweens[r],
							i
						this.pause()
						for (i in n) delete r1.tweens[r][i]
						delete r1.attrs[r][t]
					}
				})
			r1.attrs = {}
			r1.tweens = {}
			t2.prototype.to = function (e) {
				var r = e.onFinish
				;(e.node = this),
					(e.onFinish = function () {
						this.destroy(), r && r()
					})
				var t = new r1(e)
				t.play()
			}
			u0 = {
				BackEaseIn(e, r, t, n) {
					var i = 1.70158
					return t * (e /= n) * e * ((i + 1) * e - i) + r
				},
				BackEaseOut(e, r, t, n) {
					var i = 1.70158
					return t * ((e = e / n - 1) * e * ((i + 1) * e + i) + 1) + r
				},
				BackEaseInOut(e, r, t, n) {
					var i = 1.70158
					return (e /= n / 2) < 1
						? (t / 2) * (e * e * (((i *= 1.525) + 1) * e - i)) + r
						: (t / 2) * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + r
				},
				ElasticEaseIn(e, r, t, n, i, c) {
					var C = 0
					return e === 0
						? r
						: (e /= n) === 1
						? r + t
						: (c || (c = n * 0.3),
						  !i || i < Math.abs(t) ? ((i = t), (C = c / 4)) : (C = (c / (2 * Math.PI)) * Math.asin(t / i)),
						  -(i * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e * n - C) * (2 * Math.PI)) / c)) + r)
				},
				ElasticEaseOut(e, r, t, n, i, c) {
					var C = 0
					return e === 0
						? r
						: (e /= n) === 1
						? r + t
						: (c || (c = n * 0.3),
						  !i || i < Math.abs(t) ? ((i = t), (C = c / 4)) : (C = (c / (2 * Math.PI)) * Math.asin(t / i)),
						  i * Math.pow(2, -10 * e) * Math.sin(((e * n - C) * (2 * Math.PI)) / c) + t + r)
				},
				ElasticEaseInOut(e, r, t, n, i, c) {
					var C = 0
					return e === 0
						? r
						: (e /= n / 2) === 2
						? r + t
						: (c || (c = n * (0.3 * 1.5)),
						  !i || i < Math.abs(t) ? ((i = t), (C = c / 4)) : (C = (c / (2 * Math.PI)) * Math.asin(t / i)),
						  e < 1
								? -0.5 * (i * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e * n - C) * (2 * Math.PI)) / c)) + r
								: i * Math.pow(2, -10 * (e -= 1)) * Math.sin(((e * n - C) * (2 * Math.PI)) / c) * 0.5 + t + r)
				},
				BounceEaseOut(e, r, t, n) {
					return (e /= n) < 1 / 2.75
						? t * (7.5625 * e * e) + r
						: e < 2 / 2.75
						? t * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + r
						: e < 2.5 / 2.75
						? t * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + r
						: t * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + r
				},
				BounceEaseIn(e, r, t, n) {
					return t - u0.BounceEaseOut(n - e, 0, t, n) + r
				},
				BounceEaseInOut(e, r, t, n) {
					return e < n / 2
						? u0.BounceEaseIn(e * 2, 0, t, n) * 0.5 + r
						: u0.BounceEaseOut(e * 2 - n, 0, t, n) * 0.5 + t * 0.5 + r
				},
				EaseIn(e, r, t, n) {
					return t * (e /= n) * e + r
				},
				EaseOut(e, r, t, n) {
					return -t * (e /= n) * (e - 2) + r
				},
				EaseInOut(e, r, t, n) {
					return (e /= n / 2) < 1 ? (t / 2) * e * e + r : (-t / 2) * (--e * (e - 2) - 1) + r
				},
				StrongEaseIn(e, r, t, n) {
					return t * (e /= n) * e * e * e * e + r
				},
				StrongEaseOut(e, r, t, n) {
					return t * ((e = e / n - 1) * e * e * e * e + 1) + r
				},
				StrongEaseInOut(e, r, t, n) {
					return (e /= n / 2) < 1 ? (t / 2) * e * e * e * e * e + r : (t / 2) * ((e -= 2) * e * e * e * e + 2) + r
				},
				Linear(e, r, t, n) {
					return (t * e) / n + r
				},
			}
		})
	var dn,
		ys = V1(() => {
			u1()
			a3()
			o0()
			He()
			JL()
			Ms()
			ag()
			ig()
			rn()
			s0()
			Hs()
			sg()
			us()
			Me()
			dn = E._assign(i2, {
				Util: E,
				Transform: B3,
				Node: t2,
				Container: x1,
				Stage: K5,
				stages: Ne,
				Layer: x4,
				FastLayer: l0,
				Group: f0,
				DD: x2,
				Shape: G,
				shapes: Q5,
				Animation: u3,
				Tween: r1,
				Easings: u0,
				Context: G5,
				Canvas: W5,
			})
		})
	var Ss = {}
	Vh(Ss, { Konva: () => dn, default: () => iD })
	var iD,
		xs = V1(() => {
			ys()
			ys()
			iD = dn
		})
	var fg = z((n42, lg) => {
		lg.exports = function (r) {
			var t = {},
				n = y2(),
				i = sr(),
				c = Object.assign
			function C(a) {
				for (var o = 'https://reactjs.org/docs/error-decoder.html?invariant=' + a, s = 1; s < arguments.length; s++)
					o += '&args[]=' + encodeURIComponent(arguments[s])
				return (
					'Minified React error #' +
					a +
					'; visit ' +
					o +
					' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
				)
			}
			var l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
				u = Symbol.for('react.element'),
				h = Symbol.for('react.portal'),
				v = Symbol.for('react.fragment'),
				g = Symbol.for('react.strict_mode'),
				m = Symbol.for('react.profiler'),
				H = Symbol.for('react.provider'),
				L = Symbol.for('react.context'),
				x = Symbol.for('react.forward_ref'),
				w = Symbol.for('react.suspense'),
				V = Symbol.for('react.suspense_list'),
				M = Symbol.for('react.memo'),
				S = Symbol.for('react.lazy')
			Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode')
			var k = Symbol.for('react.offscreen')
			Symbol.for('react.legacy_hidden'), Symbol.for('react.cache'), Symbol.for('react.tracing_marker')
			var D = Symbol.iterator
			function b(a) {
				return a === null || typeof a != 'object'
					? null
					: ((a = (D && a[D]) || a['@@iterator']), typeof a == 'function' ? a : null)
			}
			function I(a) {
				if (a == null) return null
				if (typeof a == 'function') return a.displayName || a.name || null
				if (typeof a == 'string') return a
				switch (a) {
					case v:
						return 'Fragment'
					case h:
						return 'Portal'
					case m:
						return 'Profiler'
					case g:
						return 'StrictMode'
					case w:
						return 'Suspense'
					case V:
						return 'SuspenseList'
				}
				if (typeof a == 'object')
					switch (a.$$typeof) {
						case L:
							return (a.displayName || 'Context') + '.Consumer'
						case H:
							return (a._context.displayName || 'Context') + '.Provider'
						case x:
							var o = a.render
							return (
								(a = a.displayName),
								a ||
									((a = o.displayName || o.name || ''),
									(a = a !== '' ? 'ForwardRef(' + a + ')' : 'ForwardRef')),
								a
							)
						case M:
							return (o = a.displayName || null), o !== null ? o : I(a.type) || 'Memo'
						case S:
							;(o = a._payload), (a = a._init)
							try {
								return I(a(o))
							} catch {}
					}
				return null
			}
			function B(a) {
				var o = a.type
				switch (a.tag) {
					case 24:
						return 'Cache'
					case 9:
						return (o.displayName || 'Context') + '.Consumer'
					case 10:
						return (o._context.displayName || 'Context') + '.Provider'
					case 18:
						return 'DehydratedFragment'
					case 11:
						return (
							(a = o.render),
							(a = a.displayName || a.name || ''),
							o.displayName || (a !== '' ? 'ForwardRef(' + a + ')' : 'ForwardRef')
						)
					case 7:
						return 'Fragment'
					case 5:
						return o
					case 4:
						return 'Portal'
					case 3:
						return 'Root'
					case 6:
						return 'Text'
					case 16:
						return I(o)
					case 8:
						return o === g ? 'StrictMode' : 'Mode'
					case 22:
						return 'Offscreen'
					case 12:
						return 'Profiler'
					case 21:
						return 'Scope'
					case 13:
						return 'Suspense'
					case 19:
						return 'SuspenseList'
					case 25:
						return 'TracingMarker'
					case 1:
					case 0:
					case 17:
					case 2:
					case 14:
					case 15:
						if (typeof o == 'function') return o.displayName || o.name || null
						if (typeof o == 'string') return o
				}
				return null
			}
			function s2(a) {
				var o = a,
					s = a
				if (a.alternate) for (; o.return; ) o = o.return
				else {
					a = o
					do (o = a), (o.flags & 4098) !== 0 && (s = o.return), (a = o.return)
					while (a)
				}
				return o.tag === 3 ? s : null
			}
			function Y(a) {
				if (s2(a) !== a) throw Error(C(188))
			}
			function d2(a) {
				var o = a.alternate
				if (!o) {
					if (((o = s2(a)), o === null)) throw Error(C(188))
					return o !== a ? null : a
				}
				for (var s = a, f = o; ; ) {
					var p = s.return
					if (p === null) break
					var d = p.alternate
					if (d === null) {
						if (((f = p.return), f !== null)) {
							s = f
							continue
						}
						break
					}
					if (p.child === d.child) {
						for (d = p.child; d; ) {
							if (d === s) return Y(p), a
							if (d === f) return Y(p), o
							d = d.sibling
						}
						throw Error(C(188))
					}
					if (s.return !== f.return) (s = p), (f = d)
					else {
						for (var y = !1, N = p.child; N; ) {
							if (N === s) {
								;(y = !0), (s = p), (f = d)
								break
							}
							if (N === f) {
								;(y = !0), (f = p), (s = d)
								break
							}
							N = N.sibling
						}
						if (!y) {
							for (N = d.child; N; ) {
								if (N === s) {
									;(y = !0), (s = d), (f = p)
									break
								}
								if (N === f) {
									;(y = !0), (f = d), (s = p)
									break
								}
								N = N.sibling
							}
							if (!y) throw Error(C(189))
						}
					}
					if (s.alternate !== f) throw Error(C(190))
				}
				if (s.tag !== 3) throw Error(C(188))
				return s.stateNode.current === s ? a : o
			}
			function _2(a) {
				return (a = d2(a)), a !== null ? T2(a) : null
			}
			function T2(a) {
				if (a.tag === 5 || a.tag === 6) return a
				for (a = a.child; a !== null; ) {
					var o = T2(a)
					if (o !== null) return o
					a = a.sibling
				}
				return null
			}
			function N1(a) {
				if (a.tag === 5 || a.tag === 6) return a
				for (a = a.child; a !== null; ) {
					if (a.tag !== 4) {
						var o = N1(a)
						if (o !== null) return o
					}
					a = a.sibling
				}
				return null
			}
			var F2 = Array.isArray,
				t1 = r.getPublicInstance,
				C1 = r.getRootHostContext,
				s1 = r.getChildHostContext,
				p2 = r.prepareForCommit,
				a2 = r.resetAfterCommit,
				v2 = r.createInstance,
				H2 = r.appendInitialChild,
				A = r.finalizeInitialChildren,
				w2 = r.prepareUpdate,
				O = r.shouldSetTextContent,
				j = r.createTextInstance,
				q = r.scheduleTimeout,
				e2 = r.cancelTimeout,
				c2 = r.noTimeout,
				f2 = r.isPrimaryRenderer,
				Z = r.supportsMutation,
				l2 = r.supportsPersistence,
				u2 = r.supportsHydration,
				Y2 = r.getInstanceFromNode,
				z1 = r.preparePortalMount,
				K2 = r.getCurrentEventPriority,
				_3 = r.detachDeletedInstance,
				h1 = r.supportsMicrotasks,
				$4 = r.scheduleMicrotask,
				T4 = r.supportsTestSelectors,
				_1 = r.findFiberRoot,
				k2 = r.getBoundingRect,
				k1 = r.getTextContent,
				v4 = r.isHiddenSubtree,
				P1 = r.matchAccessibilityRole,
				s8 = r.setFocusIfFocusable,
				m5 = r.setupIntersectionObserver,
				m2 = r.appendChild,
				n1 = r.appendChildToContainer,
				W0 = r.commitTextUpdate,
				Y0 = r.commitMount,
				G_ = r.commitUpdate,
				W_ = r.insertBefore,
				Y_ = r.insertInContainerBefore,
				K_ = r.removeChild,
				Q_ = r.removeChildFromContainer,
				Rf = r.resetTextContent,
				X_ = r.hideInstance,
				J_ = r.hideTextInstance,
				Z_ = r.unhideInstance,
				$_ = r.unhideTextInstance,
				ek = r.clearContainer,
				rk = r.cloneInstance,
				Of = r.createContainerChildSet,
				Df = r.appendChildToContainerChildSet,
				tk = r.finalizeContainerChildren,
				bf = r.replaceContainerChildren,
				Ff = r.cloneHiddenInstance,
				If = r.cloneHiddenTextInstance,
				nk = r.canHydrateInstance,
				ak = r.canHydrateTextInstance,
				ik = r.canHydrateSuspenseInstance,
				Bf = r.isSuspenseInstancePending,
				Ia = r.isSuspenseInstanceFallback,
				ok = r.registerSuspenseInstanceRetry,
				K0 = r.getNextHydratableSibling,
				ck = r.getFirstHydratableChild,
				Ck = r.getFirstHydratableChildWithinContainer,
				sk = r.getFirstHydratableChildWithinSuspenseInstance,
				lk = r.hydrateInstance,
				fk = r.hydrateTextInstance,
				uk = r.hydrateSuspenseInstance,
				hk = r.getNextHydratableInstanceAfterSuspenseInstance,
				qf = r.commitHydratedContainer,
				pk = r.commitHydratedSuspenseInstance,
				dk = r.clearSuspenseBoundary,
				vk = r.clearSuspenseBoundaryFromContainer,
				mk = r.shouldDeleteUnhydratedTailInstances,
				Lk = r.didNotMatchHydratedContainerTextInstance,
				gk = r.didNotMatchHydratedTextInstance,
				Ba
			function Q0(a) {
				if (Ba === void 0)
					try {
						throw Error()
					} catch (s) {
						var o = s.stack.trim().match(/\n( *(at )?)/)
						Ba = (o && o[1]) || ''
					}
				return (
					`
` +
					Ba +
					a
				)
			}
			var qa = !1
			function Ua(a, o) {
				if (!a || qa) return ''
				qa = !0
				var s = Error.prepareStackTrace
				Error.prepareStackTrace = void 0
				try {
					if (o)
						if (
							((o = function () {
								throw Error()
							}),
							Object.defineProperty(o.prototype, 'props', {
								set: function () {
									throw Error()
								},
							}),
							typeof Reflect == 'object' && Reflect.construct)
						) {
							try {
								Reflect.construct(o, [])
							} catch (W) {
								var f = W
							}
							Reflect.construct(a, [], o)
						} else {
							try {
								o.call()
							} catch (W) {
								f = W
							}
							a.call(o.prototype)
						}
					else {
						try {
							throw Error()
						} catch (W) {
							f = W
						}
						a()
					}
				} catch (W) {
					if (W && f && typeof W.stack == 'string') {
						for (
							var p = W.stack.split(`
`),
								d = f.stack.split(`
`),
								y = p.length - 1,
								N = d.length - 1;
							1 <= y && 0 <= N && p[y] !== d[N];

						)
							N--
						for (; 1 <= y && 0 <= N; y--, N--)
							if (p[y] !== d[N]) {
								if (y !== 1 || N !== 1)
									do
										if ((y--, N--, 0 > N || p[y] !== d[N])) {
											var R =
												`
` + p[y].replace(' at new ', ' at ')
											return (
												a.displayName &&
													R.includes('<anonymous>') &&
													(R = R.replace('<anonymous>', a.displayName)),
												R
											)
										}
									while (1 <= y && 0 <= N)
								break
							}
					}
				} finally {
					;(qa = !1), (Error.prepareStackTrace = s)
				}
				return (a = a ? a.displayName || a.name : '') ? Q0(a) : ''
			}
			var Mk = Object.prototype.hasOwnProperty,
				ja = [],
				l8 = -1
			function N6(a) {
				return { current: a }
			}
			function Q2(a) {
				0 > l8 || ((a.current = ja[l8]), (ja[l8] = null), l8--)
			}
			function U2(a, o) {
				l8++, (ja[l8] = a.current), (a.current = o)
			}
			var _6 = {},
				K1 = N6(_6),
				m3 = N6(!1),
				L5 = _6
			function f8(a, o) {
				var s = a.type.contextTypes
				if (!s) return _6
				var f = a.stateNode
				if (f && f.__reactInternalMemoizedUnmaskedChildContext === o)
					return f.__reactInternalMemoizedMaskedChildContext
				var p = {},
					d
				for (d in s) p[d] = o[d]
				return (
					f &&
						((a = a.stateNode),
						(a.__reactInternalMemoizedUnmaskedChildContext = o),
						(a.__reactInternalMemoizedMaskedChildContext = p)),
					p
				)
			}
			function L3(a) {
				return (a = a.childContextTypes), a != null
			}
			function i9() {
				Q2(m3), Q2(K1)
			}
			function Uf(a, o, s) {
				if (K1.current !== _6) throw Error(C(168))
				U2(K1, o), U2(m3, s)
			}
			function jf(a, o, s) {
				var f = a.stateNode
				if (((o = o.childContextTypes), typeof f.getChildContext != 'function')) return s
				f = f.getChildContext()
				for (var p in f) if (!(p in o)) throw Error(C(108, B(a) || 'Unknown', p))
				return c({}, s, f)
			}
			function o9(a) {
				return (
					(a = ((a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext) || _6),
					(L5 = K1.current),
					U2(K1, a),
					U2(m3, m3.current),
					!0
				)
			}
			function Gf(a, o, s) {
				var f = a.stateNode
				if (!f) throw Error(C(169))
				s
					? ((a = jf(a, o, L5)), (f.__reactInternalMemoizedMergedChildContext = a), Q2(m3), Q2(K1), U2(K1, a))
					: Q2(m3),
					U2(m3, s)
			}
			var m4 = Math.clz32 ? Math.clz32 : Vk,
				zk = Math.log,
				Hk = Math.LN2
			function Vk(a) {
				return (a >>>= 0), a === 0 ? 32 : (31 - ((zk(a) / Hk) | 0)) | 0
			}
			var c9 = 64,
				C9 = 4194304
			function X0(a) {
				switch (a & -a) {
					case 1:
						return 1
					case 2:
						return 2
					case 4:
						return 4
					case 8:
						return 8
					case 16:
						return 16
					case 32:
						return 32
					case 64:
					case 128:
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152:
						return a & 4194240
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432:
					case 67108864:
						return a & 130023424
					case 134217728:
						return 134217728
					case 268435456:
						return 268435456
					case 536870912:
						return 536870912
					case 1073741824:
						return 1073741824
					default:
						return a
				}
			}
			function s9(a, o) {
				var s = a.pendingLanes
				if (s === 0) return 0
				var f = 0,
					p = a.suspendedLanes,
					d = a.pingedLanes,
					y = s & 268435455
				if (y !== 0) {
					var N = y & ~p
					N !== 0 ? (f = X0(N)) : ((d &= y), d !== 0 && (f = X0(d)))
				} else (y = s & ~p), y !== 0 ? (f = X0(y)) : d !== 0 && (f = X0(d))
				if (f === 0) return 0
				if (
					o !== 0 &&
					o !== f &&
					(o & p) === 0 &&
					((p = f & -f), (d = o & -o), p >= d || (p === 16 && (d & 4194240) !== 0))
				)
					return o
				if (((f & 4) !== 0 && (f |= s & 16), (o = a.entangledLanes), o !== 0))
					for (a = a.entanglements, o &= f; 0 < o; ) (s = 31 - m4(o)), (p = 1 << s), (f |= a[s]), (o &= ~p)
				return f
			}
			function yk(a, o) {
				switch (a) {
					case 1:
					case 2:
					case 4:
						return o + 250
					case 8:
					case 16:
					case 32:
					case 64:
					case 128:
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152:
						return o + 5e3
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432:
					case 67108864:
						return -1
					case 134217728:
					case 268435456:
					case 536870912:
					case 1073741824:
						return -1
					default:
						return -1
				}
			}
			function Sk(a, o) {
				for (var s = a.suspendedLanes, f = a.pingedLanes, p = a.expirationTimes, d = a.pendingLanes; 0 < d; ) {
					var y = 31 - m4(d),
						N = 1 << y,
						R = p[y]
					R === -1 ? ((N & s) === 0 || (N & f) !== 0) && (p[y] = yk(N, o)) : R <= o && (a.expiredLanes |= N),
						(d &= ~N)
				}
			}
			function Ga(a) {
				return (a = a.pendingLanes & -1073741825), a !== 0 ? a : a & 1073741824 ? 1073741824 : 0
			}
			function Wa(a) {
				for (var o = [], s = 0; 31 > s; s++) o.push(a)
				return o
			}
			function J0(a, o, s) {
				;(a.pendingLanes |= o),
					o !== 536870912 && ((a.suspendedLanes = 0), (a.pingedLanes = 0)),
					(a = a.eventTimes),
					(o = 31 - m4(o)),
					(a[o] = s)
			}
			function xk(a, o) {
				var s = a.pendingLanes & ~o
				;(a.pendingLanes = o),
					(a.suspendedLanes = 0),
					(a.pingedLanes = 0),
					(a.expiredLanes &= o),
					(a.mutableReadLanes &= o),
					(a.entangledLanes &= o),
					(o = a.entanglements)
				var f = a.eventTimes
				for (a = a.expirationTimes; 0 < s; ) {
					var p = 31 - m4(s),
						d = 1 << p
					;(o[p] = 0), (f[p] = -1), (a[p] = -1), (s &= ~d)
				}
			}
			function Ya(a, o) {
				var s = (a.entangledLanes |= o)
				for (a = a.entanglements; s; ) {
					var f = 31 - m4(s),
						p = 1 << f
					;(p & o) | (a[f] & o) && (a[f] |= o), (s &= ~p)
				}
			}
			var P2 = 0
			function Wf(a) {
				return (a &= -a), 1 < a ? (4 < a ? ((a & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
			}
			var Ka = i.unstable_scheduleCallback,
				Yf = i.unstable_cancelCallback,
				wk = i.unstable_shouldYield,
				Nk = i.unstable_requestPaint,
				A1 = i.unstable_now,
				Qa = i.unstable_ImmediatePriority,
				_k = i.unstable_UserBlockingPriority,
				Xa = i.unstable_NormalPriority,
				kk = i.unstable_IdlePriority,
				l9 = null,
				R4 = null
			function Pk(a) {
				if (R4 && typeof R4.onCommitFiberRoot == 'function')
					try {
						R4.onCommitFiberRoot(l9, a, void 0, (a.current.flags & 128) === 128)
					} catch {}
			}
			function Ak(a, o) {
				return (a === o && (a !== 0 || 1 / a === 1 / o)) || (a !== a && o !== o)
			}
			var O4 = typeof Object.is == 'function' ? Object.is : Ak,
				e6 = null,
				f9 = !1,
				Ja = !1
			function Kf(a) {
				e6 === null ? (e6 = [a]) : e6.push(a)
			}
			function Ek(a) {
				;(f9 = !0), Kf(a)
			}
			function D4() {
				if (!Ja && e6 !== null) {
					Ja = !0
					var a = 0,
						o = P2
					try {
						var s = e6
						for (P2 = 1; a < s.length; a++) {
							var f = s[a]
							do f = f(!0)
							while (f !== null)
						}
						;(e6 = null), (f9 = !1)
					} catch (p) {
						throw (e6 !== null && (e6 = e6.slice(a + 1)), Ka(Qa, D4), p)
					} finally {
						;(P2 = o), (Ja = !1)
					}
				}
				return null
			}
			var Tk = l.ReactCurrentBatchConfig
			function u9(a, o) {
				if (O4(a, o)) return !0
				if (typeof a != 'object' || a === null || typeof o != 'object' || o === null) return !1
				var s = Object.keys(a),
					f = Object.keys(o)
				if (s.length !== f.length) return !1
				for (f = 0; f < s.length; f++) {
					var p = s[f]
					if (!Mk.call(o, p) || !O4(a[p], o[p])) return !1
				}
				return !0
			}
			function Rk(a) {
				switch (a.tag) {
					case 5:
						return Q0(a.type)
					case 16:
						return Q0('Lazy')
					case 13:
						return Q0('Suspense')
					case 19:
						return Q0('SuspenseList')
					case 0:
					case 2:
					case 15:
						return (a = Ua(a.type, !1)), a
					case 11:
						return (a = Ua(a.type.render, !1)), a
					case 1:
						return (a = Ua(a.type, !0)), a
					default:
						return ''
				}
			}
			function L4(a, o) {
				if (a && a.defaultProps) {
					;(o = c({}, o)), (a = a.defaultProps)
					for (var s in a) o[s] === void 0 && (o[s] = a[s])
					return o
				}
				return o
			}
			var h9 = N6(null),
				p9 = null,
				u8 = null,
				Za = null
			function $a() {
				Za = u8 = p9 = null
			}
			function Qf(a, o, s) {
				f2 ? (U2(h9, o._currentValue), (o._currentValue = s)) : (U2(h9, o._currentValue2), (o._currentValue2 = s))
			}
			function ei(a) {
				var o = h9.current
				Q2(h9), f2 ? (a._currentValue = o) : (a._currentValue2 = o)
			}
			function ri(a, o, s) {
				for (; a !== null; ) {
					var f = a.alternate
					if (
						((a.childLanes & o) !== o
							? ((a.childLanes |= o), f !== null && (f.childLanes |= o))
							: f !== null && (f.childLanes & o) !== o && (f.childLanes |= o),
						a === s)
					)
						break
					a = a.return
				}
			}
			function h8(a, o) {
				;(p9 = a),
					(Za = u8 = null),
					(a = a.dependencies),
					a !== null && a.firstContext !== null && ((a.lanes & o) !== 0 && (A3 = !0), (a.firstContext = null))
			}
			function G3(a) {
				var o = f2 ? a._currentValue : a._currentValue2
				if (Za !== a)
					if (((a = { context: a, memoizedValue: o, next: null }), u8 === null)) {
						if (p9 === null) throw Error(C(308))
						;(u8 = a), (p9.dependencies = { lanes: 0, firstContext: a })
					} else u8 = u8.next = a
				return o
			}
			var b4 = null,
				k6 = !1
			function ti(a) {
				a.updateQueue = {
					baseState: a.memoizedState,
					firstBaseUpdate: null,
					lastBaseUpdate: null,
					shared: { pending: null, interleaved: null, lanes: 0 },
					effects: null,
				}
			}
			function Xf(a, o) {
				;(a = a.updateQueue),
					o.updateQueue === a &&
						(o.updateQueue = {
							baseState: a.baseState,
							firstBaseUpdate: a.firstBaseUpdate,
							lastBaseUpdate: a.lastBaseUpdate,
							shared: a.shared,
							effects: a.effects,
						})
			}
			function r6(a, o) {
				return { eventTime: a, lane: o, tag: 0, payload: null, callback: null, next: null }
			}
			function P6(a, o) {
				var s = a.updateQueue
				s !== null &&
					((s = s.shared),
					m1 !== null && (a.mode & 1) !== 0 && (V2 & 2) === 0
						? ((a = s.interleaved),
						  a === null
								? ((o.next = o), b4 === null ? (b4 = [s]) : b4.push(s))
								: ((o.next = a.next), (a.next = o)),
						  (s.interleaved = o))
						: ((a = s.pending), a === null ? (o.next = o) : ((o.next = a.next), (a.next = o)), (s.pending = o)))
			}
			function d9(a, o, s) {
				if (((o = o.updateQueue), o !== null && ((o = o.shared), (s & 4194240) !== 0))) {
					var f = o.lanes
					;(f &= a.pendingLanes), (s |= f), (o.lanes = s), Ya(a, s)
				}
			}
			function Jf(a, o) {
				var s = a.updateQueue,
					f = a.alternate
				if (f !== null && ((f = f.updateQueue), s === f)) {
					var p = null,
						d = null
					if (((s = s.firstBaseUpdate), s !== null)) {
						do {
							var y = {
								eventTime: s.eventTime,
								lane: s.lane,
								tag: s.tag,
								payload: s.payload,
								callback: s.callback,
								next: null,
							}
							d === null ? (p = d = y) : (d = d.next = y), (s = s.next)
						} while (s !== null)
						d === null ? (p = d = o) : (d = d.next = o)
					} else p = d = o
					;(s = {
						baseState: f.baseState,
						firstBaseUpdate: p,
						lastBaseUpdate: d,
						shared: f.shared,
						effects: f.effects,
					}),
						(a.updateQueue = s)
					return
				}
				;(a = s.lastBaseUpdate), a === null ? (s.firstBaseUpdate = o) : (a.next = o), (s.lastBaseUpdate = o)
			}
			function v9(a, o, s, f) {
				var p = a.updateQueue
				k6 = !1
				var d = p.firstBaseUpdate,
					y = p.lastBaseUpdate,
					N = p.shared.pending
				if (N !== null) {
					p.shared.pending = null
					var R = N,
						W = R.next
					;(R.next = null), y === null ? (d = W) : (y.next = W), (y = R)
					var r2 = a.alternate
					r2 !== null &&
						((r2 = r2.updateQueue),
						(N = r2.lastBaseUpdate),
						N !== y && (N === null ? (r2.firstBaseUpdate = W) : (N.next = W), (r2.lastBaseUpdate = R)))
				}
				if (d !== null) {
					var L2 = p.baseState
					;(y = 0), (r2 = W = R = null), (N = d)
					do {
						var h2 = N.lane,
							B2 = N.eventTime
						if ((f & h2) === h2) {
							r2 !== null &&
								(r2 = r2.next =
									{ eventTime: B2, lane: 0, tag: N.tag, payload: N.payload, callback: N.callback, next: null })
							e: {
								var C2 = a,
									Z1 = N
								switch (((h2 = o), (B2 = s), Z1.tag)) {
									case 1:
										if (((C2 = Z1.payload), typeof C2 == 'function')) {
											L2 = C2.call(B2, L2, h2)
											break e
										}
										L2 = C2
										break e
									case 3:
										C2.flags = (C2.flags & -65537) | 128
									case 0:
										if (
											((C2 = Z1.payload),
											(h2 = typeof C2 == 'function' ? C2.call(B2, L2, h2) : C2),
											h2 == null)
										)
											break e
										L2 = c({}, L2, h2)
										break e
									case 2:
										k6 = !0
								}
							}
							N.callback !== null &&
								N.lane !== 0 &&
								((a.flags |= 64), (h2 = p.effects), h2 === null ? (p.effects = [N]) : h2.push(N))
						} else
							(B2 = {
								eventTime: B2,
								lane: h2,
								tag: N.tag,
								payload: N.payload,
								callback: N.callback,
								next: null,
							}),
								r2 === null ? ((W = r2 = B2), (R = L2)) : (r2 = r2.next = B2),
								(y |= h2)
						if (((N = N.next), N === null)) {
							if (((N = p.shared.pending), N === null)) break
							;(h2 = N), (N = h2.next), (h2.next = null), (p.lastBaseUpdate = h2), (p.shared.pending = null)
						}
					} while (1)
					if (
						(r2 === null && (R = L2),
						(p.baseState = R),
						(p.firstBaseUpdate = W),
						(p.lastBaseUpdate = r2),
						(o = p.shared.interleaved),
						o !== null)
					) {
						p = o
						do (y |= p.lane), (p = p.next)
						while (p !== o)
					} else d === null && (p.shared.lanes = 0)
					;(H8 |= y), (a.lanes = y), (a.memoizedState = L2)
				}
			}
			function Zf(a, o, s) {
				if (((a = o.effects), (o.effects = null), a !== null))
					for (o = 0; o < a.length; o++) {
						var f = a[o],
							p = f.callback
						if (p !== null) {
							if (((f.callback = null), (f = s), typeof p != 'function')) throw Error(C(191, p))
							p.call(f)
						}
					}
			}
			var $f = new n.Component().refs
			function ni(a, o, s, f) {
				;(o = a.memoizedState),
					(s = s(f, o)),
					(s = s == null ? o : c({}, o, s)),
					(a.memoizedState = s),
					a.lanes === 0 && (a.updateQueue.baseState = s)
			}
			var m9 = {
				isMounted: function (a) {
					return (a = a._reactInternals) ? s2(a) === a : !1
				},
				enqueueSetState: function (a, o, s) {
					a = a._reactInternals
					var f = o3(),
						p = T6(a),
						d = r6(f, p)
					;(d.payload = o), s != null && (d.callback = s), P6(a, d), (o = X3(a, p, f)), o !== null && d9(o, a, p)
				},
				enqueueReplaceState: function (a, o, s) {
					a = a._reactInternals
					var f = o3(),
						p = T6(a),
						d = r6(f, p)
					;(d.tag = 1),
						(d.payload = o),
						s != null && (d.callback = s),
						P6(a, d),
						(o = X3(a, p, f)),
						o !== null && d9(o, a, p)
				},
				enqueueForceUpdate: function (a, o) {
					a = a._reactInternals
					var s = o3(),
						f = T6(a),
						p = r6(s, f)
					;(p.tag = 2), o != null && (p.callback = o), P6(a, p), (o = X3(a, f, s)), o !== null && d9(o, a, f)
				},
			}
			function eu(a, o, s, f, p, d, y) {
				return (
					(a = a.stateNode),
					typeof a.shouldComponentUpdate == 'function'
						? a.shouldComponentUpdate(f, d, y)
						: o.prototype && o.prototype.isPureReactComponent
						? !u9(s, f) || !u9(p, d)
						: !0
				)
			}
			function ru(a, o, s) {
				var f = !1,
					p = _6,
					d = o.contextType
				return (
					typeof d == 'object' && d !== null
						? (d = G3(d))
						: ((p = L3(o) ? L5 : K1.current), (f = o.contextTypes), (d = (f = f != null) ? f8(a, p) : _6)),
					(o = new o(s, d)),
					(a.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
					(o.updater = m9),
					(a.stateNode = o),
					(o._reactInternals = a),
					f &&
						((a = a.stateNode),
						(a.__reactInternalMemoizedUnmaskedChildContext = p),
						(a.__reactInternalMemoizedMaskedChildContext = d)),
					o
				)
			}
			function tu(a, o, s, f) {
				;(a = o.state),
					typeof o.componentWillReceiveProps == 'function' && o.componentWillReceiveProps(s, f),
					typeof o.UNSAFE_componentWillReceiveProps == 'function' && o.UNSAFE_componentWillReceiveProps(s, f),
					o.state !== a && m9.enqueueReplaceState(o, o.state, null)
			}
			function ai(a, o, s, f) {
				var p = a.stateNode
				;(p.props = s), (p.state = a.memoizedState), (p.refs = $f), ti(a)
				var d = o.contextType
				typeof d == 'object' && d !== null
					? (p.context = G3(d))
					: ((d = L3(o) ? L5 : K1.current), (p.context = f8(a, d))),
					(p.state = a.memoizedState),
					(d = o.getDerivedStateFromProps),
					typeof d == 'function' && (ni(a, o, d, s), (p.state = a.memoizedState)),
					typeof o.getDerivedStateFromProps == 'function' ||
						typeof p.getSnapshotBeforeUpdate == 'function' ||
						(typeof p.UNSAFE_componentWillMount != 'function' && typeof p.componentWillMount != 'function') ||
						((o = p.state),
						typeof p.componentWillMount == 'function' && p.componentWillMount(),
						typeof p.UNSAFE_componentWillMount == 'function' && p.UNSAFE_componentWillMount(),
						o !== p.state && m9.enqueueReplaceState(p, p.state, null),
						v9(a, s, p, f),
						(p.state = a.memoizedState)),
					typeof p.componentDidMount == 'function' && (a.flags |= 4194308)
			}
			var p8 = [],
				d8 = 0,
				L9 = null,
				g9 = 0,
				W3 = [],
				Y3 = 0,
				g5 = null,
				t6 = 1,
				n6 = ''
			function M5(a, o) {
				;(p8[d8++] = g9), (p8[d8++] = L9), (L9 = a), (g9 = o)
			}
			function nu(a, o, s) {
				;(W3[Y3++] = t6), (W3[Y3++] = n6), (W3[Y3++] = g5), (g5 = a)
				var f = t6
				a = n6
				var p = 32 - m4(f) - 1
				;(f &= ~(1 << p)), (s += 1)
				var d = 32 - m4(o) + p
				if (30 < d) {
					var y = p - (p % 5)
					;(d = (f & ((1 << y) - 1)).toString(32)),
						(f >>= y),
						(p -= y),
						(t6 = (1 << (32 - m4(o) + p)) | (s << p) | f),
						(n6 = d + a)
				} else (t6 = (1 << d) | (s << p) | f), (n6 = a)
			}
			function ii(a) {
				a.return !== null && (M5(a, 1), nu(a, 1, 0))
			}
			function oi(a) {
				for (; a === L9; ) (L9 = p8[--d8]), (p8[d8] = null), (g9 = p8[--d8]), (p8[d8] = null)
				for (; a === g5; )
					(g5 = W3[--Y3]), (W3[Y3] = null), (n6 = W3[--Y3]), (W3[Y3] = null), (t6 = W3[--Y3]), (W3[Y3] = null)
			}
			var k3 = null,
				P3 = null,
				$2 = !1,
				Z0 = !1,
				g4 = null
			function au(a, o) {
				var s = J3(5, null, null, 0)
				;(s.elementType = 'DELETED'),
					(s.stateNode = o),
					(s.return = a),
					(o = a.deletions),
					o === null ? ((a.deletions = [s]), (a.flags |= 16)) : o.push(s)
			}
			function iu(a, o) {
				switch (a.tag) {
					case 5:
						return (
							(o = nk(o, a.type, a.pendingProps)),
							o !== null ? ((a.stateNode = o), (k3 = a), (P3 = ck(o)), !0) : !1
						)
					case 6:
						return (o = ak(o, a.pendingProps)), o !== null ? ((a.stateNode = o), (k3 = a), (P3 = null), !0) : !1
					case 13:
						if (((o = ik(o)), o !== null)) {
							var s = g5 !== null ? { id: t6, overflow: n6 } : null
							return (
								(a.memoizedState = { dehydrated: o, treeContext: s, retryLane: 1073741824 }),
								(s = J3(18, null, null, 0)),
								(s.stateNode = o),
								(s.return = a),
								(a.child = s),
								(k3 = a),
								(P3 = null),
								!0
							)
						}
						return !1
					default:
						return !1
				}
			}
			function ci(a) {
				return (a.mode & 1) !== 0 && (a.flags & 128) === 0
			}
			function Ci(a) {
				if ($2) {
					var o = P3
					if (o) {
						var s = o
						if (!iu(a, o)) {
							if (ci(a)) throw Error(C(418))
							o = K0(s)
							var f = k3
							o && iu(a, o) ? au(f, s) : ((a.flags = (a.flags & -4097) | 2), ($2 = !1), (k3 = a))
						}
					} else {
						if (ci(a)) throw Error(C(418))
						;(a.flags = (a.flags & -4097) | 2), ($2 = !1), (k3 = a)
					}
				}
			}
			function ou(a) {
				for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; ) a = a.return
				k3 = a
			}
			function $0(a) {
				if (!u2 || a !== k3) return !1
				if (!$2) return ou(a), ($2 = !0), !1
				if (a.tag !== 3 && (a.tag !== 5 || (mk(a.type) && !O(a.type, a.memoizedProps)))) {
					var o = P3
					if (o) {
						if (ci(a)) {
							for (a = P3; a; ) a = K0(a)
							throw Error(C(418))
						}
						for (; o; ) au(a, o), (o = K0(o))
					}
				}
				if ((ou(a), a.tag === 13)) {
					if (!u2) throw Error(C(316))
					if (((a = a.memoizedState), (a = a !== null ? a.dehydrated : null), !a)) throw Error(C(317))
					P3 = hk(a)
				} else P3 = k3 ? K0(a.stateNode) : null
				return !0
			}
			function v8() {
				u2 && ((P3 = k3 = null), (Z0 = $2 = !1))
			}
			function si(a) {
				g4 === null ? (g4 = [a]) : g4.push(a)
			}
			function e7(a, o, s) {
				if (((a = s.ref), a !== null && typeof a != 'function' && typeof a != 'object')) {
					if (s._owner) {
						if (((s = s._owner), s)) {
							if (s.tag !== 1) throw Error(C(309))
							var f = s.stateNode
						}
						if (!f) throw Error(C(147, a))
						var p = f,
							d = '' + a
						return o !== null && o.ref !== null && typeof o.ref == 'function' && o.ref._stringRef === d
							? o.ref
							: ((o = function (y) {
									var N = p.refs
									N === $f && (N = p.refs = {}), y === null ? delete N[d] : (N[d] = y)
							  }),
							  (o._stringRef = d),
							  o)
					}
					if (typeof a != 'string') throw Error(C(284))
					if (!s._owner) throw Error(C(290, a))
				}
				return a
			}
			function M9(a, o) {
				throw (
					((a = Object.prototype.toString.call(o)),
					Error(C(31, a === '[object Object]' ? 'object with keys {' + Object.keys(o).join(', ') + '}' : a)))
				)
			}
			function cu(a) {
				var o = a._init
				return o(a._payload)
			}
			function Cu(a) {
				function o(P, _) {
					if (a) {
						var T = P.deletions
						T === null ? ((P.deletions = [_]), (P.flags |= 16)) : T.push(_)
					}
				}
				function s(P, _) {
					if (!a) return null
					for (; _ !== null; ) o(P, _), (_ = _.sibling)
					return null
				}
				function f(P, _) {
					for (P = new Map(); _ !== null; ) _.key !== null ? P.set(_.key, _) : P.set(_.index, _), (_ = _.sibling)
					return P
				}
				function p(P, _) {
					return (P = O6(P, _)), (P.index = 0), (P.sibling = null), P
				}
				function d(P, _, T) {
					return (
						(P.index = T),
						a
							? ((T = P.alternate),
							  T !== null ? ((T = T.index), T < _ ? ((P.flags |= 2), _) : T) : ((P.flags |= 2), _))
							: ((P.flags |= 1048576), _)
					)
				}
				function y(P) {
					return a && P.alternate === null && (P.flags |= 2), P
				}
				function N(P, _, T, $) {
					return _ === null || _.tag !== 6
						? ((_ = Wi(T, P.mode, $)), (_.return = P), _)
						: ((_ = p(_, T)), (_.return = P), _)
				}
				function R(P, _, T, $) {
					var o2 = T.type
					return o2 === v
						? r2(P, _, T.props.children, $, T.key)
						: _ !== null &&
						  (_.elementType === o2 ||
								(typeof o2 == 'object' && o2 !== null && o2.$$typeof === S && cu(o2) === _.type))
						? (($ = p(_, T.props)), ($.ref = e7(P, _, T)), ($.return = P), $)
						: (($ = J9(T.type, T.key, T.props, null, P.mode, $)), ($.ref = e7(P, _, T)), ($.return = P), $)
				}
				function W(P, _, T, $) {
					return _ === null ||
						_.tag !== 4 ||
						_.stateNode.containerInfo !== T.containerInfo ||
						_.stateNode.implementation !== T.implementation
						? ((_ = Yi(T, P.mode, $)), (_.return = P), _)
						: ((_ = p(_, T.children || [])), (_.return = P), _)
				}
				function r2(P, _, T, $, o2) {
					return _ === null || _.tag !== 7
						? ((_ = w5(T, P.mode, $, o2)), (_.return = P), _)
						: ((_ = p(_, T)), (_.return = P), _)
				}
				function L2(P, _, T) {
					if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number')
						return (_ = Wi('' + _, P.mode, T)), (_.return = P), _
					if (typeof _ == 'object' && _ !== null) {
						switch (_.$$typeof) {
							case u:
								return (
									(T = J9(_.type, _.key, _.props, null, P.mode, T)),
									(T.ref = e7(P, null, _)),
									(T.return = P),
									T
								)
							case h:
								return (_ = Yi(_, P.mode, T)), (_.return = P), _
							case S:
								var $ = _._init
								return L2(P, $(_._payload), T)
						}
						if (F2(_) || b(_)) return (_ = w5(_, P.mode, T, null)), (_.return = P), _
						M9(P, _)
					}
					return null
				}
				function h2(P, _, T, $) {
					var o2 = _ !== null ? _.key : null
					if ((typeof T == 'string' && T !== '') || typeof T == 'number')
						return o2 !== null ? null : N(P, _, '' + T, $)
					if (typeof T == 'object' && T !== null) {
						switch (T.$$typeof) {
							case u:
								return T.key === o2 ? R(P, _, T, $) : null
							case h:
								return T.key === o2 ? W(P, _, T, $) : null
							case S:
								return (o2 = T._init), h2(P, _, o2(T._payload), $)
						}
						if (F2(T) || b(T)) return o2 !== null ? null : r2(P, _, T, $, null)
						M9(P, T)
					}
					return null
				}
				function B2(P, _, T, $, o2) {
					if ((typeof $ == 'string' && $ !== '') || typeof $ == 'number')
						return (P = P.get(T) || null), N(_, P, '' + $, o2)
					if (typeof $ == 'object' && $ !== null) {
						switch ($.$$typeof) {
							case u:
								return (P = P.get($.key === null ? T : $.key) || null), R(_, P, $, o2)
							case h:
								return (P = P.get($.key === null ? T : $.key) || null), W(_, P, $, o2)
							case S:
								var z2 = $._init
								return B2(P, _, T, z2($._payload), o2)
						}
						if (F2($) || b($)) return (P = P.get(T) || null), r2(_, P, $, o2, null)
						M9(_, $)
					}
					return null
				}
				function C2(P, _, T, $) {
					for (var o2 = null, z2 = null, g2 = _, A2 = (_ = 0), T1 = null; g2 !== null && A2 < T.length; A2++) {
						g2.index > A2 ? ((T1 = g2), (g2 = null)) : (T1 = g2.sibling)
						var E2 = h2(P, g2, T[A2], $)
						if (E2 === null) {
							g2 === null && (g2 = T1)
							break
						}
						a && g2 && E2.alternate === null && o(P, g2),
							(_ = d(E2, _, A2)),
							z2 === null ? (o2 = E2) : (z2.sibling = E2),
							(z2 = E2),
							(g2 = T1)
					}
					if (A2 === T.length) return s(P, g2), $2 && M5(P, A2), o2
					if (g2 === null) {
						for (; A2 < T.length; A2++)
							(g2 = L2(P, T[A2], $)),
								g2 !== null && ((_ = d(g2, _, A2)), z2 === null ? (o2 = g2) : (z2.sibling = g2), (z2 = g2))
						return $2 && M5(P, A2), o2
					}
					for (g2 = f(P, g2); A2 < T.length; A2++)
						(T1 = B2(g2, P, A2, T[A2], $)),
							T1 !== null &&
								(a && T1.alternate !== null && g2.delete(T1.key === null ? A2 : T1.key),
								(_ = d(T1, _, A2)),
								z2 === null ? (o2 = T1) : (z2.sibling = T1),
								(z2 = T1))
					return (
						a &&
							g2.forEach(function (D6) {
								return o(P, D6)
							}),
						$2 && M5(P, A2),
						o2
					)
				}
				function Z1(P, _, T, $) {
					var o2 = b(T)
					if (typeof o2 != 'function') throw Error(C(150))
					if (((T = o2.call(T)), T == null)) throw Error(C(151))
					for (
						var z2 = (o2 = null), g2 = _, A2 = (_ = 0), T1 = null, E2 = T.next();
						g2 !== null && !E2.done;
						A2++, E2 = T.next()
					) {
						g2.index > A2 ? ((T1 = g2), (g2 = null)) : (T1 = g2.sibling)
						var D6 = h2(P, g2, E2.value, $)
						if (D6 === null) {
							g2 === null && (g2 = T1)
							break
						}
						a && g2 && D6.alternate === null && o(P, g2),
							(_ = d(D6, _, A2)),
							z2 === null ? (o2 = D6) : (z2.sibling = D6),
							(z2 = D6),
							(g2 = T1)
					}
					if (E2.done) return s(P, g2), $2 && M5(P, A2), o2
					if (g2 === null) {
						for (; !E2.done; A2++, E2 = T.next())
							(E2 = L2(P, E2.value, $)),
								E2 !== null && ((_ = d(E2, _, A2)), z2 === null ? (o2 = E2) : (z2.sibling = E2), (z2 = E2))
						return $2 && M5(P, A2), o2
					}
					for (g2 = f(P, g2); !E2.done; A2++, E2 = T.next())
						(E2 = B2(g2, P, A2, E2.value, $)),
							E2 !== null &&
								(a && E2.alternate !== null && g2.delete(E2.key === null ? A2 : E2.key),
								(_ = d(E2, _, A2)),
								z2 === null ? (o2 = E2) : (z2.sibling = E2),
								(z2 = E2))
					return (
						a &&
							g2.forEach(function (fP) {
								return o(P, fP)
							}),
						$2 && M5(P, A2),
						o2
					)
				}
				function Z3(P, _, T, $) {
					if (
						(typeof T == 'object' && T !== null && T.type === v && T.key === null && (T = T.props.children),
						typeof T == 'object' && T !== null)
					) {
						switch (T.$$typeof) {
							case u:
								e: {
									for (var o2 = T.key, z2 = _; z2 !== null; ) {
										if (z2.key === o2) {
											if (((o2 = T.type), o2 === v)) {
												if (z2.tag === 7) {
													s(P, z2.sibling), (_ = p(z2, T.props.children)), (_.return = P), (P = _)
													break e
												}
											} else if (
												z2.elementType === o2 ||
												(typeof o2 == 'object' && o2 !== null && o2.$$typeof === S && cu(o2) === z2.type)
											) {
												s(P, z2.sibling),
													(_ = p(z2, T.props)),
													(_.ref = e7(P, z2, T)),
													(_.return = P),
													(P = _)
												break e
											}
											s(P, z2)
											break
										} else o(P, z2)
										z2 = z2.sibling
									}
									T.type === v
										? ((_ = w5(T.props.children, P.mode, $, T.key)), (_.return = P), (P = _))
										: (($ = J9(T.type, T.key, T.props, null, P.mode, $)),
										  ($.ref = e7(P, _, T)),
										  ($.return = P),
										  (P = $))
								}
								return y(P)
							case h:
								e: {
									for (z2 = T.key; _ !== null; ) {
										if (_.key === z2)
											if (
												_.tag === 4 &&
												_.stateNode.containerInfo === T.containerInfo &&
												_.stateNode.implementation === T.implementation
											) {
												s(P, _.sibling), (_ = p(_, T.children || [])), (_.return = P), (P = _)
												break e
											} else {
												s(P, _)
												break
											}
										else o(P, _)
										_ = _.sibling
									}
									;(_ = Yi(T, P.mode, $)), (_.return = P), (P = _)
								}
								return y(P)
							case S:
								return (z2 = T._init), Z3(P, _, z2(T._payload), $)
						}
						if (F2(T)) return C2(P, _, T, $)
						if (b(T)) return Z1(P, _, T, $)
						M9(P, T)
					}
					return (typeof T == 'string' && T !== '') || typeof T == 'number'
						? ((T = '' + T),
						  _ !== null && _.tag === 6
								? (s(P, _.sibling), (_ = p(_, T)), (_.return = P), (P = _))
								: (s(P, _), (_ = Wi(T, P.mode, $)), (_.return = P), (P = _)),
						  y(P))
						: s(P, _)
				}
				return Z3
			}
			var m8 = Cu(!0),
				su = Cu(!1),
				r7 = {},
				K3 = N6(r7),
				t7 = N6(r7),
				L8 = N6(r7)
			function F4(a) {
				if (a === r7) throw Error(C(174))
				return a
			}
			function li(a, o) {
				U2(L8, o), U2(t7, a), U2(K3, r7), (a = C1(o)), Q2(K3), U2(K3, a)
			}
			function g8() {
				Q2(K3), Q2(t7), Q2(L8)
			}
			function lu(a) {
				var o = F4(L8.current),
					s = F4(K3.current)
				;(o = s1(s, a.type, o)), s !== o && (U2(t7, a), U2(K3, o))
			}
			function fi(a) {
				t7.current === a && (Q2(K3), Q2(t7))
			}
			var a1 = N6(0)
			function z9(a) {
				for (var o = a; o !== null; ) {
					if (o.tag === 13) {
						var s = o.memoizedState
						if (s !== null && ((s = s.dehydrated), s === null || Bf(s) || Ia(s))) return o
					} else if (o.tag === 19 && o.memoizedProps.revealOrder !== void 0) {
						if ((o.flags & 128) !== 0) return o
					} else if (o.child !== null) {
						;(o.child.return = o), (o = o.child)
						continue
					}
					if (o === a) break
					for (; o.sibling === null; ) {
						if (o.return === null || o.return === a) return null
						o = o.return
					}
					;(o.sibling.return = o.return), (o = o.sibling)
				}
				return null
			}
			var ui = []
			function hi() {
				for (var a = 0; a < ui.length; a++) {
					var o = ui[a]
					f2 ? (o._workInProgressVersionPrimary = null) : (o._workInProgressVersionSecondary = null)
				}
				ui.length = 0
			}
			var H9 = l.ReactCurrentDispatcher,
				Q3 = l.ReactCurrentBatchConfig,
				M8 = 0,
				l1 = null,
				Q1 = null,
				E1 = null,
				V9 = !1,
				n7 = !1,
				a7 = 0,
				Ok = 0
			function X1() {
				throw Error(C(321))
			}
			function pi(a, o) {
				if (o === null) return !1
				for (var s = 0; s < o.length && s < a.length; s++) if (!O4(a[s], o[s])) return !1
				return !0
			}
			function di(a, o, s, f, p, d) {
				if (
					((M8 = d),
					(l1 = o),
					(o.memoizedState = null),
					(o.updateQueue = null),
					(o.lanes = 0),
					(H9.current = a === null || a.memoizedState === null ? Ik : Bk),
					(a = s(f, p)),
					n7)
				) {
					d = 0
					do {
						if (((n7 = !1), (a7 = 0), 25 <= d)) throw Error(C(301))
						;(d += 1), (E1 = Q1 = null), (o.updateQueue = null), (H9.current = qk), (a = s(f, p))
					} while (n7)
				}
				if (
					((H9.current = N9), (o = Q1 !== null && Q1.next !== null), (M8 = 0), (E1 = Q1 = l1 = null), (V9 = !1), o)
				)
					throw Error(C(300))
				return a
			}
			function vi() {
				var a = a7 !== 0
				return (a7 = 0), a
			}
			function a6() {
				var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
				return E1 === null ? (l1.memoizedState = E1 = a) : (E1 = E1.next = a), E1
			}
			function I4() {
				if (Q1 === null) {
					var a = l1.alternate
					a = a !== null ? a.memoizedState : null
				} else a = Q1.next
				var o = E1 === null ? l1.memoizedState : E1.next
				if (o !== null) (E1 = o), (Q1 = a)
				else {
					if (a === null) throw Error(C(310))
					;(Q1 = a),
						(a = {
							memoizedState: Q1.memoizedState,
							baseState: Q1.baseState,
							baseQueue: Q1.baseQueue,
							queue: Q1.queue,
							next: null,
						}),
						E1 === null ? (l1.memoizedState = E1 = a) : (E1 = E1.next = a)
				}
				return E1
			}
			function z5(a, o) {
				return typeof o == 'function' ? o(a) : o
			}
			function y9(a) {
				var o = I4(),
					s = o.queue
				if (s === null) throw Error(C(311))
				s.lastRenderedReducer = a
				var f = Q1,
					p = f.baseQueue,
					d = s.pending
				if (d !== null) {
					if (p !== null) {
						var y = p.next
						;(p.next = d.next), (d.next = y)
					}
					;(f.baseQueue = p = d), (s.pending = null)
				}
				if (p !== null) {
					;(d = p.next), (f = f.baseState)
					var N = (y = null),
						R = null,
						W = d
					do {
						var r2 = W.lane
						if ((M8 & r2) === r2)
							R !== null &&
								(R = R.next =
									{
										lane: 0,
										action: W.action,
										hasEagerState: W.hasEagerState,
										eagerState: W.eagerState,
										next: null,
									}),
								(f = W.hasEagerState ? W.eagerState : a(f, W.action))
						else {
							var L2 = {
								lane: r2,
								action: W.action,
								hasEagerState: W.hasEagerState,
								eagerState: W.eagerState,
								next: null,
							}
							R === null ? ((N = R = L2), (y = f)) : (R = R.next = L2), (l1.lanes |= r2), (H8 |= r2)
						}
						W = W.next
					} while (W !== null && W !== d)
					R === null ? (y = f) : (R.next = N),
						O4(f, o.memoizedState) || (A3 = !0),
						(o.memoizedState = f),
						(o.baseState = y),
						(o.baseQueue = R),
						(s.lastRenderedState = f)
				}
				if (((a = s.interleaved), a !== null)) {
					p = a
					do (d = p.lane), (l1.lanes |= d), (H8 |= d), (p = p.next)
					while (p !== a)
				} else p === null && (s.lanes = 0)
				return [o.memoizedState, s.dispatch]
			}
			function S9(a) {
				var o = I4(),
					s = o.queue
				if (s === null) throw Error(C(311))
				s.lastRenderedReducer = a
				var f = s.dispatch,
					p = s.pending,
					d = o.memoizedState
				if (p !== null) {
					s.pending = null
					var y = (p = p.next)
					do (d = a(d, y.action)), (y = y.next)
					while (y !== p)
					O4(d, o.memoizedState) || (A3 = !0),
						(o.memoizedState = d),
						o.baseQueue === null && (o.baseState = d),
						(s.lastRenderedState = d)
				}
				return [d, f]
			}
			function fu() {}
			function uu(a, o) {
				var s = l1,
					f = I4(),
					p = o(),
					d = !O4(f.memoizedState, p)
				if (
					(d && ((f.memoizedState = p), (A3 = !0)),
					(f = f.queue),
					o7(du.bind(null, s, f, a), [a]),
					f.getSnapshot !== o || d || (E1 !== null && E1.memoizedState.tag & 1))
				) {
					if (((s.flags |= 2048), i7(9, pu.bind(null, s, f, p, o), void 0, null), m1 === null)) throw Error(C(349))
					;(M8 & 30) !== 0 || hu(s, o, p)
				}
				return p
			}
			function hu(a, o, s) {
				;(a.flags |= 16384),
					(a = { getSnapshot: o, value: s }),
					(o = l1.updateQueue),
					o === null
						? ((o = { lastEffect: null, stores: null }), (l1.updateQueue = o), (o.stores = [a]))
						: ((s = o.stores), s === null ? (o.stores = [a]) : s.push(a))
			}
			function pu(a, o, s, f) {
				;(o.value = s), (o.getSnapshot = f), vu(o) && X3(a, 1, -1)
			}
			function du(a, o, s) {
				return s(function () {
					vu(o) && X3(a, 1, -1)
				})
			}
			function vu(a) {
				var o = a.getSnapshot
				a = a.value
				try {
					var s = o()
					return !O4(a, s)
				} catch {
					return !0
				}
			}
			function mi(a) {
				var o = a6()
				return (
					typeof a == 'function' && (a = a()),
					(o.memoizedState = o.baseState = a),
					(a = {
						pending: null,
						interleaved: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: z5,
						lastRenderedState: a,
					}),
					(o.queue = a),
					(a = a.dispatch = Fk.bind(null, l1, a)),
					[o.memoizedState, a]
				)
			}
			function i7(a, o, s, f) {
				return (
					(a = { tag: a, create: o, destroy: s, deps: f, next: null }),
					(o = l1.updateQueue),
					o === null
						? ((o = { lastEffect: null, stores: null }), (l1.updateQueue = o), (o.lastEffect = a.next = a))
						: ((s = o.lastEffect),
						  s === null
								? (o.lastEffect = a.next = a)
								: ((f = s.next), (s.next = a), (a.next = f), (o.lastEffect = a))),
					a
				)
			}
			function mu() {
				return I4().memoizedState
			}
			function x9(a, o, s, f) {
				var p = a6()
				;(l1.flags |= a), (p.memoizedState = i7(1 | o, s, void 0, f === void 0 ? null : f))
			}
			function w9(a, o, s, f) {
				var p = I4()
				f = f === void 0 ? null : f
				var d = void 0
				if (Q1 !== null) {
					var y = Q1.memoizedState
					if (((d = y.destroy), f !== null && pi(f, y.deps))) {
						p.memoizedState = i7(o, s, d, f)
						return
					}
				}
				;(l1.flags |= a), (p.memoizedState = i7(1 | o, s, d, f))
			}
			function Li(a, o) {
				return x9(8390656, 8, a, o)
			}
			function o7(a, o) {
				return w9(2048, 8, a, o)
			}
			function Lu(a, o) {
				return w9(4, 2, a, o)
			}
			function gu(a, o) {
				return w9(4, 4, a, o)
			}
			function Mu(a, o) {
				if (typeof o == 'function')
					return (
						(a = a()),
						o(a),
						function () {
							o(null)
						}
					)
				if (o != null)
					return (
						(a = a()),
						(o.current = a),
						function () {
							o.current = null
						}
					)
			}
			function zu(a, o, s) {
				return (s = s != null ? s.concat([a]) : null), w9(4, 4, Mu.bind(null, o, a), s)
			}
			function gi() {}
			function Hu(a, o) {
				var s = I4()
				o = o === void 0 ? null : o
				var f = s.memoizedState
				return f !== null && o !== null && pi(o, f[1]) ? f[0] : ((s.memoizedState = [a, o]), a)
			}
			function Vu(a, o) {
				var s = I4()
				o = o === void 0 ? null : o
				var f = s.memoizedState
				return f !== null && o !== null && pi(o, f[1]) ? f[0] : ((a = a()), (s.memoizedState = [a, o]), a)
			}
			function Dk(a, o) {
				var s = P2
				;(P2 = s !== 0 && 4 > s ? s : 4), a(!0)
				var f = Q3.transition
				Q3.transition = {}
				try {
					a(!1), o()
				} finally {
					;(P2 = s), (Q3.transition = f)
				}
			}
			function yu() {
				return I4().memoizedState
			}
			function bk(a, o, s) {
				var f = T6(a)
				;(s = { lane: f, action: s, hasEagerState: !1, eagerState: null, next: null }),
					Su(a) ? xu(o, s) : (wu(a, o, s), (s = o3()), (a = X3(a, f, s)), a !== null && Nu(a, o, f))
			}
			function Fk(a, o, s) {
				var f = T6(a),
					p = { lane: f, action: s, hasEagerState: !1, eagerState: null, next: null }
				if (Su(a)) xu(o, p)
				else {
					wu(a, o, p)
					var d = a.alternate
					if (a.lanes === 0 && (d === null || d.lanes === 0) && ((d = o.lastRenderedReducer), d !== null))
						try {
							var y = o.lastRenderedState,
								N = d(y, s)
							if (((p.hasEagerState = !0), (p.eagerState = N), O4(N, y))) return
						} catch {
						} finally {
						}
					;(s = o3()), (a = X3(a, f, s)), a !== null && Nu(a, o, f)
				}
			}
			function Su(a) {
				var o = a.alternate
				return a === l1 || (o !== null && o === l1)
			}
			function xu(a, o) {
				n7 = V9 = !0
				var s = a.pending
				s === null ? (o.next = o) : ((o.next = s.next), (s.next = o)), (a.pending = o)
			}
			function wu(a, o, s) {
				m1 !== null && (a.mode & 1) !== 0 && (V2 & 2) === 0
					? ((a = o.interleaved),
					  a === null ? ((s.next = s), b4 === null ? (b4 = [o]) : b4.push(o)) : ((s.next = a.next), (a.next = s)),
					  (o.interleaved = s))
					: ((a = o.pending), a === null ? (s.next = s) : ((s.next = a.next), (a.next = s)), (o.pending = s))
			}
			function Nu(a, o, s) {
				if ((s & 4194240) !== 0) {
					var f = o.lanes
					;(f &= a.pendingLanes), (s |= f), (o.lanes = s), Ya(a, s)
				}
			}
			var N9 = {
					readContext: G3,
					useCallback: X1,
					useContext: X1,
					useEffect: X1,
					useImperativeHandle: X1,
					useInsertionEffect: X1,
					useLayoutEffect: X1,
					useMemo: X1,
					useReducer: X1,
					useRef: X1,
					useState: X1,
					useDebugValue: X1,
					useDeferredValue: X1,
					useTransition: X1,
					useMutableSource: X1,
					useSyncExternalStore: X1,
					useId: X1,
					unstable_isNewReconciler: !1,
				},
				Ik = {
					readContext: G3,
					useCallback: function (a, o) {
						return (a6().memoizedState = [a, o === void 0 ? null : o]), a
					},
					useContext: G3,
					useEffect: Li,
					useImperativeHandle: function (a, o, s) {
						return (s = s != null ? s.concat([a]) : null), x9(4194308, 4, Mu.bind(null, o, a), s)
					},
					useLayoutEffect: function (a, o) {
						return x9(4194308, 4, a, o)
					},
					useInsertionEffect: function (a, o) {
						return x9(4, 2, a, o)
					},
					useMemo: function (a, o) {
						var s = a6()
						return (o = o === void 0 ? null : o), (a = a()), (s.memoizedState = [a, o]), a
					},
					useReducer: function (a, o, s) {
						var f = a6()
						return (
							(o = s !== void 0 ? s(o) : o),
							(f.memoizedState = f.baseState = o),
							(a = {
								pending: null,
								interleaved: null,
								lanes: 0,
								dispatch: null,
								lastRenderedReducer: a,
								lastRenderedState: o,
							}),
							(f.queue = a),
							(a = a.dispatch = bk.bind(null, l1, a)),
							[f.memoizedState, a]
						)
					},
					useRef: function (a) {
						var o = a6()
						return (a = { current: a }), (o.memoizedState = a)
					},
					useState: mi,
					useDebugValue: gi,
					useDeferredValue: function (a) {
						var o = mi(a),
							s = o[0],
							f = o[1]
						return (
							Li(
								function () {
									var p = Q3.transition
									Q3.transition = {}
									try {
										f(a)
									} finally {
										Q3.transition = p
									}
								},
								[a],
							),
							s
						)
					},
					useTransition: function () {
						var a = mi(!1),
							o = a[0]
						return (a = Dk.bind(null, a[1])), (a6().memoizedState = a), [o, a]
					},
					useMutableSource: function () {},
					useSyncExternalStore: function (a, o, s) {
						var f = l1,
							p = a6()
						if ($2) {
							if (s === void 0) throw Error(C(407))
							s = s()
						} else {
							if (((s = o()), m1 === null)) throw Error(C(349))
							;(M8 & 30) !== 0 || hu(f, o, s)
						}
						p.memoizedState = s
						var d = { value: s, getSnapshot: o }
						return (
							(p.queue = d),
							Li(du.bind(null, f, d, a), [a]),
							(f.flags |= 2048),
							i7(9, pu.bind(null, f, d, s, o), void 0, null),
							s
						)
					},
					useId: function () {
						var a = a6(),
							o = m1.identifierPrefix
						if ($2) {
							var s = n6,
								f = t6
							;(s = (f & ~(1 << (32 - m4(f) - 1))).toString(32) + s),
								(o = ':' + o + 'R' + s),
								(s = a7++),
								0 < s && (o += 'H' + s.toString(32)),
								(o += ':')
						} else (s = Ok++), (o = ':' + o + 'r' + s.toString(32) + ':')
						return (a.memoizedState = o)
					},
					unstable_isNewReconciler: !1,
				},
				Bk = {
					readContext: G3,
					useCallback: Hu,
					useContext: G3,
					useEffect: o7,
					useImperativeHandle: zu,
					useInsertionEffect: Lu,
					useLayoutEffect: gu,
					useMemo: Vu,
					useReducer: y9,
					useRef: mu,
					useState: function () {
						return y9(z5)
					},
					useDebugValue: gi,
					useDeferredValue: function (a) {
						var o = y9(z5),
							s = o[0],
							f = o[1]
						return (
							o7(
								function () {
									var p = Q3.transition
									Q3.transition = {}
									try {
										f(a)
									} finally {
										Q3.transition = p
									}
								},
								[a],
							),
							s
						)
					},
					useTransition: function () {
						var a = y9(z5)[0],
							o = I4().memoizedState
						return [a, o]
					},
					useMutableSource: fu,
					useSyncExternalStore: uu,
					useId: yu,
					unstable_isNewReconciler: !1,
				},
				qk = {
					readContext: G3,
					useCallback: Hu,
					useContext: G3,
					useEffect: o7,
					useImperativeHandle: zu,
					useInsertionEffect: Lu,
					useLayoutEffect: gu,
					useMemo: Vu,
					useReducer: S9,
					useRef: mu,
					useState: function () {
						return S9(z5)
					},
					useDebugValue: gi,
					useDeferredValue: function (a) {
						var o = S9(z5),
							s = o[0],
							f = o[1]
						return (
							o7(
								function () {
									var p = Q3.transition
									Q3.transition = {}
									try {
										f(a)
									} finally {
										Q3.transition = p
									}
								},
								[a],
							),
							s
						)
					},
					useTransition: function () {
						var a = S9(z5)[0],
							o = I4().memoizedState
						return [a, o]
					},
					useMutableSource: fu,
					useSyncExternalStore: uu,
					useId: yu,
					unstable_isNewReconciler: !1,
				}
			function Mi(a, o) {
				try {
					var s = '',
						f = o
					do (s += Rk(f)), (f = f.return)
					while (f)
					var p = s
				} catch (d) {
					p =
						`
Error generating stack: ` +
						d.message +
						`
` +
						d.stack
				}
				return { value: a, source: o, stack: p }
			}
			function zi(a, o) {
				try {
					console.error(o.value)
				} catch (s) {
					setTimeout(function () {
						throw s
					})
				}
			}
			var Uk = typeof WeakMap == 'function' ? WeakMap : Map
			function _u(a, o, s) {
				;(s = r6(-1, s)), (s.tag = 3), (s.payload = { element: null })
				var f = o.value
				return (
					(s.callback = function () {
						j9 || ((j9 = !0), (Fi = f)), zi(a, o)
					}),
					s
				)
			}
			function ku(a, o, s) {
				;(s = r6(-1, s)), (s.tag = 3)
				var f = a.type.getDerivedStateFromError
				if (typeof f == 'function') {
					var p = o.value
					;(s.payload = function () {
						return f(p)
					}),
						(s.callback = function () {
							zi(a, o)
						})
				}
				var d = a.stateNode
				return (
					d !== null &&
						typeof d.componentDidCatch == 'function' &&
						(s.callback = function () {
							zi(a, o), typeof f != 'function' && (A6 === null ? (A6 = new Set([this])) : A6.add(this))
							var y = o.stack
							this.componentDidCatch(o.value, { componentStack: y !== null ? y : '' })
						}),
					s
				)
			}
			function Pu(a, o, s) {
				var f = a.pingCache
				if (f === null) {
					f = a.pingCache = new Uk()
					var p = new Set()
					f.set(o, p)
				} else (p = f.get(o)), p === void 0 && ((p = new Set()), f.set(o, p))
				p.has(s) || (p.add(s), (a = nP.bind(null, a, o, s)), o.then(a, a))
			}
			function Au(a) {
				do {
					var o
					if (((o = a.tag === 13) && ((o = a.memoizedState), (o = o !== null ? o.dehydrated !== null : !0)), o))
						return a
					a = a.return
				} while (a !== null)
				return null
			}
			function Eu(a, o, s, f, p) {
				return (a.mode & 1) === 0
					? (a === o
							? (a.flags |= 65536)
							: ((a.flags |= 128),
							  (s.flags |= 131072),
							  (s.flags &= -52805),
							  s.tag === 1 && (s.alternate === null ? (s.tag = 17) : ((o = r6(-1, 1)), (o.tag = 2), P6(s, o))),
							  (s.lanes |= 1)),
					  a)
					: ((a.flags |= 65536), (a.lanes = p), a)
			}
			function B4(a) {
				a.flags |= 4
			}
			function Tu(a, o) {
				if (a !== null && a.child === o.child) return !0
				if ((o.flags & 16) !== 0) return !1
				for (a = o.child; a !== null; ) {
					if ((a.flags & 12854) !== 0 || (a.subtreeFlags & 12854) !== 0) return !1
					a = a.sibling
				}
				return !0
			}
			var c7, C7, _9, k9
			if (Z)
				(c7 = function (a, o) {
					for (var s = o.child; s !== null; ) {
						if (s.tag === 5 || s.tag === 6) H2(a, s.stateNode)
						else if (s.tag !== 4 && s.child !== null) {
							;(s.child.return = s), (s = s.child)
							continue
						}
						if (s === o) break
						for (; s.sibling === null; ) {
							if (s.return === null || s.return === o) return
							s = s.return
						}
						;(s.sibling.return = s.return), (s = s.sibling)
					}
				}),
					(C7 = function () {}),
					(_9 = function (a, o, s, f, p) {
						if (((a = a.memoizedProps), a !== f)) {
							var d = o.stateNode,
								y = F4(K3.current)
							;(s = w2(d, s, a, f, p, y)), (o.updateQueue = s) && B4(o)
						}
					}),
					(k9 = function (a, o, s, f) {
						s !== f && B4(o)
					})
			else if (l2) {
				c7 = function (a, o, s, f) {
					for (var p = o.child; p !== null; ) {
						if (p.tag === 5) {
							var d = p.stateNode
							s && f && (d = Ff(d, p.type, p.memoizedProps, p)), H2(a, d)
						} else if (p.tag === 6) (d = p.stateNode), s && f && (d = If(d, p.memoizedProps, p)), H2(a, d)
						else if (p.tag !== 4) {
							if (p.tag === 22 && p.memoizedState !== null)
								(d = p.child), d !== null && (d.return = p), c7(a, p, !0, !0)
							else if (p.child !== null) {
								;(p.child.return = p), (p = p.child)
								continue
							}
						}
						if (p === o) break
						for (; p.sibling === null; ) {
							if (p.return === null || p.return === o) return
							p = p.return
						}
						;(p.sibling.return = p.return), (p = p.sibling)
					}
				}
				var Ru = function (a, o, s, f) {
					for (var p = o.child; p !== null; ) {
						if (p.tag === 5) {
							var d = p.stateNode
							s && f && (d = Ff(d, p.type, p.memoizedProps, p)), Df(a, d)
						} else if (p.tag === 6) (d = p.stateNode), s && f && (d = If(d, p.memoizedProps, p)), Df(a, d)
						else if (p.tag !== 4) {
							if (p.tag === 22 && p.memoizedState !== null)
								(d = p.child), d !== null && (d.return = p), Ru(a, p, !0, !0)
							else if (p.child !== null) {
								;(p.child.return = p), (p = p.child)
								continue
							}
						}
						if (p === o) break
						for (; p.sibling === null; ) {
							if (p.return === null || p.return === o) return
							p = p.return
						}
						;(p.sibling.return = p.return), (p = p.sibling)
					}
				}
				;(C7 = function (a, o) {
					var s = o.stateNode
					if (!Tu(a, o)) {
						a = s.containerInfo
						var f = Of(a)
						Ru(f, o, !1, !1), (s.pendingChildren = f), B4(o), tk(a, f)
					}
				}),
					(_9 = function (a, o, s, f, p) {
						var d = a.stateNode,
							y = a.memoizedProps
						if ((a = Tu(a, o)) && y === f) o.stateNode = d
						else {
							var N = o.stateNode,
								R = F4(K3.current),
								W = null
							y !== f && (W = w2(N, s, y, f, p, R)),
								a && W === null
									? (o.stateNode = d)
									: ((d = rk(d, W, s, y, f, o, a, N)),
									  A(d, s, f, p, R) && B4(o),
									  (o.stateNode = d),
									  a ? B4(o) : c7(d, o, !1, !1))
						}
					}),
					(k9 = function (a, o, s, f) {
						s !== f
							? ((a = F4(L8.current)), (s = F4(K3.current)), (o.stateNode = j(f, a, s, o)), B4(o))
							: (o.stateNode = a.stateNode)
					})
			} else (C7 = function () {}), (_9 = function () {}), (k9 = function () {})
			function s7(a, o) {
				if (!$2)
					switch (a.tailMode) {
						case 'hidden':
							o = a.tail
							for (var s = null; o !== null; ) o.alternate !== null && (s = o), (o = o.sibling)
							s === null ? (a.tail = null) : (s.sibling = null)
							break
						case 'collapsed':
							s = a.tail
							for (var f = null; s !== null; ) s.alternate !== null && (f = s), (s = s.sibling)
							f === null
								? o || a.tail === null
									? (a.tail = null)
									: (a.tail.sibling = null)
								: (f.sibling = null)
					}
			}
			function J1(a) {
				var o = a.alternate !== null && a.alternate.child === a.child,
					s = 0,
					f = 0
				if (o)
					for (var p = a.child; p !== null; )
						(s |= p.lanes | p.childLanes),
							(f |= p.subtreeFlags & 14680064),
							(f |= p.flags & 14680064),
							(p.return = a),
							(p = p.sibling)
				else
					for (p = a.child; p !== null; )
						(s |= p.lanes | p.childLanes), (f |= p.subtreeFlags), (f |= p.flags), (p.return = a), (p = p.sibling)
				return (a.subtreeFlags |= f), (a.childLanes = s), o
			}
			function jk(a, o, s) {
				var f = o.pendingProps
				switch ((oi(o), o.tag)) {
					case 2:
					case 16:
					case 15:
					case 0:
					case 11:
					case 7:
					case 8:
					case 12:
					case 9:
					case 14:
						return J1(o), null
					case 1:
						return L3(o.type) && i9(), J1(o), null
					case 3:
						return (
							(f = o.stateNode),
							g8(),
							Q2(m3),
							Q2(K1),
							hi(),
							f.pendingContext && ((f.context = f.pendingContext), (f.pendingContext = null)),
							(a === null || a.child === null) &&
								($0(o)
									? B4(o)
									: a === null ||
									  (a.memoizedState.isDehydrated && (o.flags & 256) === 0) ||
									  ((o.flags |= 1024), g4 !== null && (qi(g4), (g4 = null)))),
							C7(a, o),
							J1(o),
							null
						)
					case 5:
						fi(o), (s = F4(L8.current))
						var p = o.type
						if (a !== null && o.stateNode != null)
							_9(a, o, p, f, s), a.ref !== o.ref && ((o.flags |= 512), (o.flags |= 2097152))
						else {
							if (!f) {
								if (o.stateNode === null) throw Error(C(166))
								return J1(o), null
							}
							if (((a = F4(K3.current)), $0(o))) {
								if (!u2) throw Error(C(175))
								;(a = lk(o.stateNode, o.type, o.memoizedProps, s, a, o, !Z0)),
									(o.updateQueue = a),
									a !== null && B4(o)
							} else {
								var d = v2(p, f, s, a, o)
								c7(d, o, !1, !1), (o.stateNode = d), A(d, p, f, s, a) && B4(o)
							}
							o.ref !== null && ((o.flags |= 512), (o.flags |= 2097152))
						}
						return J1(o), null
					case 6:
						if (a && o.stateNode != null) k9(a, o, a.memoizedProps, f)
						else {
							if (typeof f != 'string' && o.stateNode === null) throw Error(C(166))
							if (((a = F4(L8.current)), (s = F4(K3.current)), $0(o))) {
								if (!u2) throw Error(C(176))
								if (
									((a = o.stateNode), (f = o.memoizedProps), (s = fk(a, f, o, !Z0)) && ((p = k3), p !== null))
								)
									switch (((d = (p.mode & 1) !== 0), p.tag)) {
										case 3:
											Lk(p.stateNode.containerInfo, a, f, d)
											break
										case 5:
											gk(p.type, p.memoizedProps, p.stateNode, a, f, d)
									}
								s && B4(o)
							} else o.stateNode = j(f, a, s, o)
						}
						return J1(o), null
					case 13:
						if (
							(Q2(a1), (f = o.memoizedState), $2 && P3 !== null && (o.mode & 1) !== 0 && (o.flags & 128) === 0)
						) {
							for (a = P3; a; ) a = K0(a)
							return v8(), (o.flags |= 98560), o
						}
						if (f !== null && f.dehydrated !== null) {
							if (((f = $0(o)), a === null)) {
								if (!f) throw Error(C(318))
								if (!u2) throw Error(C(344))
								if (((a = o.memoizedState), (a = a !== null ? a.dehydrated : null), !a)) throw Error(C(317))
								uk(a, o)
							} else v8(), (o.flags & 128) === 0 && (o.memoizedState = null), (o.flags |= 4)
							return J1(o), null
						}
						return (
							g4 !== null && (qi(g4), (g4 = null)),
							(o.flags & 128) !== 0
								? ((o.lanes = s), o)
								: ((f = f !== null),
								  (s = !1),
								  a === null ? $0(o) : (s = a.memoizedState !== null),
								  f &&
										!s &&
										((o.child.flags |= 8192),
										(o.mode & 1) !== 0 &&
											(a === null || (a1.current & 1) !== 0 ? H1 === 0 && (H1 = 3) : ji())),
								  o.updateQueue !== null && (o.flags |= 4),
								  J1(o),
								  null)
						)
					case 4:
						return g8(), C7(a, o), a === null && z1(o.stateNode.containerInfo), J1(o), null
					case 10:
						return ei(o.type._context), J1(o), null
					case 17:
						return L3(o.type) && i9(), J1(o), null
					case 19:
						if ((Q2(a1), (p = o.memoizedState), p === null)) return J1(o), null
						if (((f = (o.flags & 128) !== 0), (d = p.rendering), d === null))
							if (f) s7(p, !1)
							else {
								if (H1 !== 0 || (a !== null && (a.flags & 128) !== 0))
									for (a = o.child; a !== null; ) {
										if (((d = z9(a)), d !== null)) {
											for (
												o.flags |= 128,
													s7(p, !1),
													a = d.updateQueue,
													a !== null && ((o.updateQueue = a), (o.flags |= 4)),
													o.subtreeFlags = 0,
													a = s,
													f = o.child;
												f !== null;

											)
												(s = f),
													(p = a),
													(s.flags &= 14680066),
													(d = s.alternate),
													d === null
														? ((s.childLanes = 0),
														  (s.lanes = p),
														  (s.child = null),
														  (s.subtreeFlags = 0),
														  (s.memoizedProps = null),
														  (s.memoizedState = null),
														  (s.updateQueue = null),
														  (s.dependencies = null),
														  (s.stateNode = null))
														: ((s.childLanes = d.childLanes),
														  (s.lanes = d.lanes),
														  (s.child = d.child),
														  (s.subtreeFlags = 0),
														  (s.deletions = null),
														  (s.memoizedProps = d.memoizedProps),
														  (s.memoizedState = d.memoizedState),
														  (s.updateQueue = d.updateQueue),
														  (s.type = d.type),
														  (p = d.dependencies),
														  (s.dependencies =
																p === null ? null : { lanes: p.lanes, firstContext: p.firstContext })),
													(f = f.sibling)
											return U2(a1, (a1.current & 1) | 2), o.child
										}
										a = a.sibling
									}
								p.tail !== null && A1() > bi && ((o.flags |= 128), (f = !0), s7(p, !1), (o.lanes = 4194304))
							}
						else {
							if (!f)
								if (((a = z9(d)), a !== null)) {
									if (
										((o.flags |= 128),
										(f = !0),
										(a = a.updateQueue),
										a !== null && ((o.updateQueue = a), (o.flags |= 4)),
										s7(p, !0),
										p.tail === null && p.tailMode === 'hidden' && !d.alternate && !$2)
									)
										return J1(o), null
								} else
									2 * A1() - p.renderingStartTime > bi &&
										s !== 1073741824 &&
										((o.flags |= 128), (f = !0), s7(p, !1), (o.lanes = 4194304))
							p.isBackwards
								? ((d.sibling = o.child), (o.child = d))
								: ((a = p.last), a !== null ? (a.sibling = d) : (o.child = d), (p.last = d))
						}
						return p.tail !== null
							? ((o = p.tail),
							  (p.rendering = o),
							  (p.tail = o.sibling),
							  (p.renderingStartTime = A1()),
							  (o.sibling = null),
							  (a = a1.current),
							  U2(a1, f ? (a & 1) | 2 : a & 1),
							  o)
							: (J1(o), null)
					case 22:
					case 23:
						return (
							Ui(),
							(f = o.memoizedState !== null),
							a !== null && (a.memoizedState !== null) !== f && (o.flags |= 8192),
							f && (o.mode & 1) !== 0
								? (E3 & 1073741824) !== 0 && (J1(o), Z && o.subtreeFlags & 6 && (o.flags |= 8192))
								: J1(o),
							null
						)
					case 24:
						return null
					case 25:
						return null
				}
				throw Error(C(156, o.tag))
			}
			var Gk = l.ReactCurrentOwner,
				A3 = !1
			function i3(a, o, s, f) {
				o.child = a === null ? su(o, null, s, f) : m8(o, a.child, s, f)
			}
			function Ou(a, o, s, f, p) {
				s = s.render
				var d = o.ref
				return (
					h8(o, p),
					(f = di(a, o, s, f, d, p)),
					(s = vi()),
					a !== null && !A3
						? ((o.updateQueue = a.updateQueue), (o.flags &= -2053), (a.lanes &= ~p), i6(a, o, p))
						: ($2 && s && ii(o), (o.flags |= 1), i3(a, o, f, p), o.child)
				)
			}
			function Du(a, o, s, f, p) {
				if (a === null) {
					var d = s.type
					return typeof d == 'function' &&
						!Gi(d) &&
						d.defaultProps === void 0 &&
						s.compare === null &&
						s.defaultProps === void 0
						? ((o.tag = 15), (o.type = d), bu(a, o, d, f, p))
						: ((a = J9(s.type, null, f, o, o.mode, p)), (a.ref = o.ref), (a.return = o), (o.child = a))
				}
				if (((d = a.child), (a.lanes & p) === 0)) {
					var y = d.memoizedProps
					if (((s = s.compare), (s = s !== null ? s : u9), s(y, f) && a.ref === o.ref)) return i6(a, o, p)
				}
				return (o.flags |= 1), (a = O6(d, f)), (a.ref = o.ref), (a.return = o), (o.child = a)
			}
			function bu(a, o, s, f, p) {
				if (a !== null && u9(a.memoizedProps, f) && a.ref === o.ref)
					if (((A3 = !1), (a.lanes & p) !== 0)) (a.flags & 131072) !== 0 && (A3 = !0)
					else return (o.lanes = a.lanes), i6(a, o, p)
				return Hi(a, o, s, f, p)
			}
			function Fu(a, o, s) {
				var f = o.pendingProps,
					p = f.children,
					d = a !== null ? a.memoizedState : null
				if (f.mode === 'hidden')
					if ((o.mode & 1) === 0) (o.memoizedState = { baseLanes: 0, cachePool: null }), U2(z8, E3), (E3 |= s)
					else if ((s & 1073741824) !== 0)
						(o.memoizedState = { baseLanes: 0, cachePool: null }),
							(f = d !== null ? d.baseLanes : s),
							U2(z8, E3),
							(E3 |= f)
					else
						return (
							(a = d !== null ? d.baseLanes | s : s),
							(o.lanes = o.childLanes = 1073741824),
							(o.memoizedState = { baseLanes: a, cachePool: null }),
							(o.updateQueue = null),
							U2(z8, E3),
							(E3 |= a),
							null
						)
				else d !== null ? ((f = d.baseLanes | s), (o.memoizedState = null)) : (f = s), U2(z8, E3), (E3 |= f)
				return i3(a, o, p, s), o.child
			}
			function Iu(a, o) {
				var s = o.ref
				;((a === null && s !== null) || (a !== null && a.ref !== s)) && ((o.flags |= 512), (o.flags |= 2097152))
			}
			function Hi(a, o, s, f, p) {
				var d = L3(s) ? L5 : K1.current
				return (
					(d = f8(o, d)),
					h8(o, p),
					(s = di(a, o, s, f, d, p)),
					(f = vi()),
					a !== null && !A3
						? ((o.updateQueue = a.updateQueue), (o.flags &= -2053), (a.lanes &= ~p), i6(a, o, p))
						: ($2 && f && ii(o), (o.flags |= 1), i3(a, o, s, p), o.child)
				)
			}
			function Bu(a, o, s, f, p) {
				if (L3(s)) {
					var d = !0
					o9(o)
				} else d = !1
				if ((h8(o, p), o.stateNode === null))
					a !== null && ((a.alternate = null), (o.alternate = null), (o.flags |= 2)),
						ru(o, s, f),
						ai(o, s, f, p),
						(f = !0)
				else if (a === null) {
					var y = o.stateNode,
						N = o.memoizedProps
					y.props = N
					var R = y.context,
						W = s.contextType
					typeof W == 'object' && W !== null ? (W = G3(W)) : ((W = L3(s) ? L5 : K1.current), (W = f8(o, W)))
					var r2 = s.getDerivedStateFromProps,
						L2 = typeof r2 == 'function' || typeof y.getSnapshotBeforeUpdate == 'function'
					L2 ||
						(typeof y.UNSAFE_componentWillReceiveProps != 'function' &&
							typeof y.componentWillReceiveProps != 'function') ||
						((N !== f || R !== W) && tu(o, y, f, W)),
						(k6 = !1)
					var h2 = o.memoizedState
					;(y.state = h2),
						v9(o, f, y, p),
						(R = o.memoizedState),
						N !== f || h2 !== R || m3.current || k6
							? (typeof r2 == 'function' && (ni(o, s, r2, f), (R = o.memoizedState)),
							  (N = k6 || eu(o, s, N, f, h2, R, W))
									? (L2 ||
											(typeof y.UNSAFE_componentWillMount != 'function' &&
												typeof y.componentWillMount != 'function') ||
											(typeof y.componentWillMount == 'function' && y.componentWillMount(),
											typeof y.UNSAFE_componentWillMount == 'function' && y.UNSAFE_componentWillMount()),
									  typeof y.componentDidMount == 'function' && (o.flags |= 4194308))
									: (typeof y.componentDidMount == 'function' && (o.flags |= 4194308),
									  (o.memoizedProps = f),
									  (o.memoizedState = R)),
							  (y.props = f),
							  (y.state = R),
							  (y.context = W),
							  (f = N))
							: (typeof y.componentDidMount == 'function' && (o.flags |= 4194308), (f = !1))
				} else {
					;(y = o.stateNode),
						Xf(a, o),
						(N = o.memoizedProps),
						(W = o.type === o.elementType ? N : L4(o.type, N)),
						(y.props = W),
						(L2 = o.pendingProps),
						(h2 = y.context),
						(R = s.contextType),
						typeof R == 'object' && R !== null ? (R = G3(R)) : ((R = L3(s) ? L5 : K1.current), (R = f8(o, R)))
					var B2 = s.getDerivedStateFromProps
					;(r2 = typeof B2 == 'function' || typeof y.getSnapshotBeforeUpdate == 'function') ||
						(typeof y.UNSAFE_componentWillReceiveProps != 'function' &&
							typeof y.componentWillReceiveProps != 'function') ||
						((N !== L2 || h2 !== R) && tu(o, y, f, R)),
						(k6 = !1),
						(h2 = o.memoizedState),
						(y.state = h2),
						v9(o, f, y, p)
					var C2 = o.memoizedState
					N !== L2 || h2 !== C2 || m3.current || k6
						? (typeof B2 == 'function' && (ni(o, s, B2, f), (C2 = o.memoizedState)),
						  (W = k6 || eu(o, s, W, f, h2, C2, R) || !1)
								? (r2 ||
										(typeof y.UNSAFE_componentWillUpdate != 'function' &&
											typeof y.componentWillUpdate != 'function') ||
										(typeof y.componentWillUpdate == 'function' && y.componentWillUpdate(f, C2, R),
										typeof y.UNSAFE_componentWillUpdate == 'function' &&
											y.UNSAFE_componentWillUpdate(f, C2, R)),
								  typeof y.componentDidUpdate == 'function' && (o.flags |= 4),
								  typeof y.getSnapshotBeforeUpdate == 'function' && (o.flags |= 1024))
								: (typeof y.componentDidUpdate != 'function' ||
										(N === a.memoizedProps && h2 === a.memoizedState) ||
										(o.flags |= 4),
								  typeof y.getSnapshotBeforeUpdate != 'function' ||
										(N === a.memoizedProps && h2 === a.memoizedState) ||
										(o.flags |= 1024),
								  (o.memoizedProps = f),
								  (o.memoizedState = C2)),
						  (y.props = f),
						  (y.state = C2),
						  (y.context = R),
						  (f = W))
						: (typeof y.componentDidUpdate != 'function' ||
								(N === a.memoizedProps && h2 === a.memoizedState) ||
								(o.flags |= 4),
						  typeof y.getSnapshotBeforeUpdate != 'function' ||
								(N === a.memoizedProps && h2 === a.memoizedState) ||
								(o.flags |= 1024),
						  (f = !1))
				}
				return Vi(a, o, s, f, d, p)
			}
			function Vi(a, o, s, f, p, d) {
				Iu(a, o)
				var y = (o.flags & 128) !== 0
				if (!f && !y) return p && Gf(o, s, !1), i6(a, o, d)
				;(f = o.stateNode), (Gk.current = o)
				var N = y && typeof s.getDerivedStateFromError != 'function' ? null : f.render()
				return (
					(o.flags |= 1),
					a !== null && y ? ((o.child = m8(o, a.child, null, d)), (o.child = m8(o, null, N, d))) : i3(a, o, N, d),
					(o.memoizedState = f.state),
					p && Gf(o, s, !0),
					o.child
				)
			}
			function qu(a) {
				var o = a.stateNode
				o.pendingContext
					? Uf(a, o.pendingContext, o.pendingContext !== o.context)
					: o.context && Uf(a, o.context, !1),
					li(a, o.containerInfo)
			}
			function Uu(a, o, s, f, p) {
				return v8(), si(p), (o.flags |= 256), i3(a, o, s, f), o.child
			}
			var P9 = { dehydrated: null, treeContext: null, retryLane: 0 }
			function A9(a) {
				return { baseLanes: a, cachePool: null }
			}
			function ju(a, o, s) {
				var f = o.pendingProps,
					p = a1.current,
					d = !1,
					y = (o.flags & 128) !== 0,
					N
				if (
					((N = y) || (N = a !== null && a.memoizedState === null ? !1 : (p & 2) !== 0),
					N ? ((d = !0), (o.flags &= -129)) : (a === null || a.memoizedState !== null) && (p |= 1),
					U2(a1, p & 1),
					a === null)
				)
					return (
						Ci(o),
						(a = o.memoizedState),
						a !== null && ((a = a.dehydrated), a !== null)
							? ((o.mode & 1) === 0 ? (o.lanes = 1) : Ia(a) ? (o.lanes = 8) : (o.lanes = 1073741824), null)
							: ((p = f.children),
							  (a = f.fallback),
							  d
									? ((f = o.mode),
									  (d = o.child),
									  (p = { mode: 'hidden', children: p }),
									  (f & 1) === 0 && d !== null
											? ((d.childLanes = 0), (d.pendingProps = p))
											: (d = Z9(p, f, 0, null)),
									  (a = w5(a, f, s, null)),
									  (d.return = o),
									  (a.return = o),
									  (d.sibling = a),
									  (o.child = d),
									  (o.child.memoizedState = A9(s)),
									  (o.memoizedState = P9),
									  a)
									: yi(o, p))
					)
				if (((p = a.memoizedState), p !== null)) {
					if (((N = p.dehydrated), N !== null)) {
						if (y)
							return o.flags & 256
								? ((o.flags &= -257), E9(a, o, s, Error(C(422))))
								: o.memoizedState !== null
								? ((o.child = a.child), (o.flags |= 128), null)
								: ((d = f.fallback),
								  (p = o.mode),
								  (f = Z9({ mode: 'visible', children: f.children }, p, 0, null)),
								  (d = w5(d, p, s, null)),
								  (d.flags |= 2),
								  (f.return = o),
								  (d.return = o),
								  (f.sibling = d),
								  (o.child = f),
								  (o.mode & 1) !== 0 && m8(o, a.child, null, s),
								  (o.child.memoizedState = A9(s)),
								  (o.memoizedState = P9),
								  d)
						if ((o.mode & 1) === 0) o = E9(a, o, s, null)
						else if (Ia(N)) o = E9(a, o, s, Error(C(419)))
						else if (((f = (s & a.childLanes) !== 0), A3 || f)) {
							if (((f = m1), f !== null)) {
								switch (s & -s) {
									case 4:
										d = 2
										break
									case 16:
										d = 8
										break
									case 64:
									case 128:
									case 256:
									case 512:
									case 1024:
									case 2048:
									case 4096:
									case 8192:
									case 16384:
									case 32768:
									case 65536:
									case 131072:
									case 262144:
									case 524288:
									case 1048576:
									case 2097152:
									case 4194304:
									case 8388608:
									case 16777216:
									case 33554432:
									case 67108864:
										d = 32
										break
									case 536870912:
										d = 268435456
										break
									default:
										d = 0
								}
								;(f = (d & (f.suspendedLanes | s)) !== 0 ? 0 : d),
									f !== 0 && f !== p.retryLane && ((p.retryLane = f), X3(a, f, -1))
							}
							ji(), (o = E9(a, o, s, Error(C(421))))
						} else
							Bf(N)
								? ((o.flags |= 128), (o.child = a.child), (o = aP.bind(null, a)), ok(N, o), (o = null))
								: ((s = p.treeContext),
								  u2 &&
										((P3 = sk(N)),
										(k3 = o),
										($2 = !0),
										(g4 = null),
										(Z0 = !1),
										s !== null &&
											((W3[Y3++] = t6),
											(W3[Y3++] = n6),
											(W3[Y3++] = g5),
											(t6 = s.id),
											(n6 = s.overflow),
											(g5 = o))),
								  (o = yi(o, o.pendingProps.children)),
								  (o.flags |= 4096))
						return o
					}
					return d
						? ((f = Wu(a, o, f.children, f.fallback, s)),
						  (d = o.child),
						  (p = a.child.memoizedState),
						  (d.memoizedState = p === null ? A9(s) : { baseLanes: p.baseLanes | s, cachePool: null }),
						  (d.childLanes = a.childLanes & ~s),
						  (o.memoizedState = P9),
						  f)
						: ((s = Gu(a, o, f.children, s)), (o.memoizedState = null), s)
				}
				return d
					? ((f = Wu(a, o, f.children, f.fallback, s)),
					  (d = o.child),
					  (p = a.child.memoizedState),
					  (d.memoizedState = p === null ? A9(s) : { baseLanes: p.baseLanes | s, cachePool: null }),
					  (d.childLanes = a.childLanes & ~s),
					  (o.memoizedState = P9),
					  f)
					: ((s = Gu(a, o, f.children, s)), (o.memoizedState = null), s)
			}
			function yi(a, o) {
				return (o = Z9({ mode: 'visible', children: o }, a.mode, 0, null)), (o.return = a), (a.child = o)
			}
			function Gu(a, o, s, f) {
				var p = a.child
				return (
					(a = p.sibling),
					(s = O6(p, { mode: 'visible', children: s })),
					(o.mode & 1) === 0 && (s.lanes = f),
					(s.return = o),
					(s.sibling = null),
					a !== null && ((f = o.deletions), f === null ? ((o.deletions = [a]), (o.flags |= 16)) : f.push(a)),
					(o.child = s)
				)
			}
			function Wu(a, o, s, f, p) {
				var d = o.mode
				a = a.child
				var y = a.sibling,
					N = { mode: 'hidden', children: s }
				return (
					(d & 1) === 0 && o.child !== a
						? ((s = o.child), (s.childLanes = 0), (s.pendingProps = N), (o.deletions = null))
						: ((s = O6(a, N)), (s.subtreeFlags = a.subtreeFlags & 14680064)),
					y !== null ? (f = O6(y, f)) : ((f = w5(f, d, p, null)), (f.flags |= 2)),
					(f.return = o),
					(s.return = o),
					(s.sibling = f),
					(o.child = s),
					f
				)
			}
			function E9(a, o, s, f) {
				return (
					f !== null && si(f),
					m8(o, a.child, null, s),
					(a = yi(o, o.pendingProps.children)),
					(a.flags |= 2),
					(o.memoizedState = null),
					a
				)
			}
			function Yu(a, o, s) {
				a.lanes |= o
				var f = a.alternate
				f !== null && (f.lanes |= o), ri(a.return, o, s)
			}
			function Si(a, o, s, f, p) {
				var d = a.memoizedState
				d === null
					? (a.memoizedState = {
							isBackwards: o,
							rendering: null,
							renderingStartTime: 0,
							last: f,
							tail: s,
							tailMode: p,
					  })
					: ((d.isBackwards = o),
					  (d.rendering = null),
					  (d.renderingStartTime = 0),
					  (d.last = f),
					  (d.tail = s),
					  (d.tailMode = p))
			}
			function Ku(a, o, s) {
				var f = o.pendingProps,
					p = f.revealOrder,
					d = f.tail
				if ((i3(a, o, f.children, s), (f = a1.current), (f & 2) !== 0)) (f = (f & 1) | 2), (o.flags |= 128)
				else {
					if (a !== null && (a.flags & 128) !== 0)
						e: for (a = o.child; a !== null; ) {
							if (a.tag === 13) a.memoizedState !== null && Yu(a, s, o)
							else if (a.tag === 19) Yu(a, s, o)
							else if (a.child !== null) {
								;(a.child.return = a), (a = a.child)
								continue
							}
							if (a === o) break e
							for (; a.sibling === null; ) {
								if (a.return === null || a.return === o) break e
								a = a.return
							}
							;(a.sibling.return = a.return), (a = a.sibling)
						}
					f &= 1
				}
				if ((U2(a1, f), (o.mode & 1) === 0)) o.memoizedState = null
				else
					switch (p) {
						case 'forwards':
							for (s = o.child, p = null; s !== null; )
								(a = s.alternate), a !== null && z9(a) === null && (p = s), (s = s.sibling)
							;(s = p),
								s === null ? ((p = o.child), (o.child = null)) : ((p = s.sibling), (s.sibling = null)),
								Si(o, !1, p, s, d)
							break
						case 'backwards':
							for (s = null, p = o.child, o.child = null; p !== null; ) {
								if (((a = p.alternate), a !== null && z9(a) === null)) {
									o.child = p
									break
								}
								;(a = p.sibling), (p.sibling = s), (s = p), (p = a)
							}
							Si(o, !0, s, null, d)
							break
						case 'together':
							Si(o, !1, null, null, void 0)
							break
						default:
							o.memoizedState = null
					}
				return o.child
			}
			function i6(a, o, s) {
				if ((a !== null && (o.dependencies = a.dependencies), (H8 |= o.lanes), (s & o.childLanes) === 0))
					return null
				if (a !== null && o.child !== a.child) throw Error(C(153))
				if (o.child !== null) {
					for (a = o.child, s = O6(a, a.pendingProps), o.child = s, s.return = o; a.sibling !== null; )
						(a = a.sibling), (s = s.sibling = O6(a, a.pendingProps)), (s.return = o)
					s.sibling = null
				}
				return o.child
			}
			function Wk(a, o, s) {
				switch (o.tag) {
					case 3:
						qu(o), v8()
						break
					case 5:
						lu(o)
						break
					case 1:
						L3(o.type) && o9(o)
						break
					case 4:
						li(o, o.stateNode.containerInfo)
						break
					case 10:
						Qf(o, o.type._context, o.memoizedProps.value)
						break
					case 13:
						var f = o.memoizedState
						if (f !== null)
							return f.dehydrated !== null
								? (U2(a1, a1.current & 1), (o.flags |= 128), null)
								: (s & o.child.childLanes) !== 0
								? ju(a, o, s)
								: (U2(a1, a1.current & 1), (a = i6(a, o, s)), a !== null ? a.sibling : null)
						U2(a1, a1.current & 1)
						break
					case 19:
						if (((f = (s & o.childLanes) !== 0), (a.flags & 128) !== 0)) {
							if (f) return Ku(a, o, s)
							o.flags |= 128
						}
						var p = o.memoizedState
						if (
							(p !== null && ((p.rendering = null), (p.tail = null), (p.lastEffect = null)),
							U2(a1, a1.current),
							f)
						)
							break
						return null
					case 22:
					case 23:
						return (o.lanes = 0), Fu(a, o, s)
				}
				return i6(a, o, s)
			}
			function Yk(a, o) {
				switch ((oi(o), o.tag)) {
					case 1:
						return L3(o.type) && i9(), (a = o.flags), a & 65536 ? ((o.flags = (a & -65537) | 128), o) : null
					case 3:
						return (
							g8(),
							Q2(m3),
							Q2(K1),
							hi(),
							(a = o.flags),
							(a & 65536) !== 0 && (a & 128) === 0 ? ((o.flags = (a & -65537) | 128), o) : null
						)
					case 5:
						return fi(o), null
					case 13:
						if ((Q2(a1), (a = o.memoizedState), a !== null && a.dehydrated !== null)) {
							if (o.alternate === null) throw Error(C(340))
							v8()
						}
						return (a = o.flags), a & 65536 ? ((o.flags = (a & -65537) | 128), o) : null
					case 19:
						return Q2(a1), null
					case 4:
						return g8(), null
					case 10:
						return ei(o.type._context), null
					case 22:
					case 23:
						return Ui(), null
					case 24:
						return null
					default:
						return null
				}
			}
			var T9 = !1,
				H5 = !1,
				Kk = typeof WeakSet == 'function' ? WeakSet : Set,
				X = null
			function R9(a, o) {
				var s = a.ref
				if (s !== null)
					if (typeof s == 'function')
						try {
							s(null)
						} catch (f) {
							z3(a, o, f)
						}
					else s.current = null
			}
			function xi(a, o, s) {
				try {
					s()
				} catch (f) {
					z3(a, o, f)
				}
			}
			var Qu = !1
			function Qk(a, o) {
				for (p2(a.containerInfo), X = o; X !== null; )
					if (((a = X), (o = a.child), (a.subtreeFlags & 1028) !== 0 && o !== null)) (o.return = a), (X = o)
					else
						for (; X !== null; ) {
							a = X
							try {
								var s = a.alternate
								if ((a.flags & 1024) !== 0)
									switch (a.tag) {
										case 0:
										case 11:
										case 15:
											break
										case 1:
											if (s !== null) {
												var f = s.memoizedProps,
													p = s.memoizedState,
													d = a.stateNode,
													y = d.getSnapshotBeforeUpdate(a.elementType === a.type ? f : L4(a.type, f), p)
												d.__reactInternalSnapshotBeforeUpdate = y
											}
											break
										case 3:
											Z && ek(a.stateNode.containerInfo)
											break
										case 5:
										case 6:
										case 4:
										case 17:
											break
										default:
											throw Error(C(163))
									}
							} catch (N) {
								z3(a, a.return, N)
							}
							if (((o = a.sibling), o !== null)) {
								;(o.return = a.return), (X = o)
								break
							}
							X = a.return
						}
				return (s = Qu), (Qu = !1), s
			}
			function V5(a, o, s) {
				var f = o.updateQueue
				if (((f = f !== null ? f.lastEffect : null), f !== null)) {
					var p = (f = f.next)
					do {
						if ((p.tag & a) === a) {
							var d = p.destroy
							;(p.destroy = void 0), d !== void 0 && xi(o, s, d)
						}
						p = p.next
					} while (p !== f)
				}
			}
			function l7(a, o) {
				if (((o = o.updateQueue), (o = o !== null ? o.lastEffect : null), o !== null)) {
					var s = (o = o.next)
					do {
						if ((s.tag & a) === a) {
							var f = s.create
							s.destroy = f()
						}
						s = s.next
					} while (s !== o)
				}
			}
			function wi(a) {
				var o = a.ref
				if (o !== null) {
					var s = a.stateNode
					switch (a.tag) {
						case 5:
							a = t1(s)
							break
						default:
							a = s
					}
					typeof o == 'function' ? o(a) : (o.current = a)
				}
			}
			function Xu(a, o, s) {
				if (R4 && typeof R4.onCommitFiberUnmount == 'function')
					try {
						R4.onCommitFiberUnmount(l9, o)
					} catch {}
				switch (o.tag) {
					case 0:
					case 11:
					case 14:
					case 15:
						if (((a = o.updateQueue), a !== null && ((a = a.lastEffect), a !== null))) {
							var f = (a = a.next)
							do {
								var p = f,
									d = p.destroy
								;(p = p.tag), d !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && xi(o, s, d), (f = f.next)
							} while (f !== a)
						}
						break
					case 1:
						if ((R9(o, s), (a = o.stateNode), typeof a.componentWillUnmount == 'function'))
							try {
								;(a.props = o.memoizedProps), (a.state = o.memoizedState), a.componentWillUnmount()
							} catch (y) {
								z3(o, s, y)
							}
						break
					case 5:
						R9(o, s)
						break
					case 4:
						Z ? th(a, o, s) : l2 && l2 && ((o = o.stateNode.containerInfo), (s = Of(o)), bf(o, s))
				}
			}
			function Ju(a, o, s) {
				for (var f = o; ; )
					if ((Xu(a, f, s), f.child === null || (Z && f.tag === 4))) {
						if (f === o) break
						for (; f.sibling === null; ) {
							if (f.return === null || f.return === o) return
							f = f.return
						}
						;(f.sibling.return = f.return), (f = f.sibling)
					} else (f.child.return = f), (f = f.child)
			}
			function Zu(a) {
				var o = a.alternate
				o !== null && ((a.alternate = null), Zu(o)),
					(a.child = null),
					(a.deletions = null),
					(a.sibling = null),
					a.tag === 5 && ((o = a.stateNode), o !== null && _3(o)),
					(a.stateNode = null),
					(a.return = null),
					(a.dependencies = null),
					(a.memoizedProps = null),
					(a.memoizedState = null),
					(a.pendingProps = null),
					(a.stateNode = null),
					(a.updateQueue = null)
			}
			function $u(a) {
				return a.tag === 5 || a.tag === 3 || a.tag === 4
			}
			function eh(a) {
				e: for (;;) {
					for (; a.sibling === null; ) {
						if (a.return === null || $u(a.return)) return null
						a = a.return
					}
					for (a.sibling.return = a.return, a = a.sibling; a.tag !== 5 && a.tag !== 6 && a.tag !== 18; ) {
						if (a.flags & 2 || a.child === null || a.tag === 4) continue e
						;(a.child.return = a), (a = a.child)
					}
					if (!(a.flags & 2)) return a.stateNode
				}
			}
			function rh(a) {
				if (Z) {
					e: {
						for (var o = a.return; o !== null; ) {
							if ($u(o)) break e
							o = o.return
						}
						throw Error(C(160))
					}
					var s = o
					switch (s.tag) {
						case 5:
							;(o = s.stateNode), s.flags & 32 && (Rf(o), (s.flags &= -33)), (s = eh(a)), _i(a, s, o)
							break
						case 3:
						case 4:
							;(o = s.stateNode.containerInfo), (s = eh(a)), Ni(a, s, o)
							break
						default:
							throw Error(C(161))
					}
				}
			}
			function Ni(a, o, s) {
				var f = a.tag
				if (f === 5 || f === 6) (a = a.stateNode), o ? Y_(s, a, o) : n1(s, a)
				else if (f !== 4 && ((a = a.child), a !== null))
					for (Ni(a, o, s), a = a.sibling; a !== null; ) Ni(a, o, s), (a = a.sibling)
			}
			function _i(a, o, s) {
				var f = a.tag
				if (f === 5 || f === 6) (a = a.stateNode), o ? W_(s, a, o) : m2(s, a)
				else if (f !== 4 && ((a = a.child), a !== null))
					for (_i(a, o, s), a = a.sibling; a !== null; ) _i(a, o, s), (a = a.sibling)
			}
			function th(a, o, s) {
				for (var f = o, p = !1, d, y; ; ) {
					if (!p) {
						p = f.return
						e: for (;;) {
							if (p === null) throw Error(C(160))
							switch (((d = p.stateNode), p.tag)) {
								case 5:
									y = !1
									break e
								case 3:
									;(d = d.containerInfo), (y = !0)
									break e
								case 4:
									;(d = d.containerInfo), (y = !0)
									break e
							}
							p = p.return
						}
						p = !0
					}
					if (f.tag === 5 || f.tag === 6) Ju(a, f, s), y ? Q_(d, f.stateNode) : K_(d, f.stateNode)
					else if (f.tag === 18) y ? vk(d, f.stateNode) : dk(d, f.stateNode)
					else if (f.tag === 4) {
						if (f.child !== null) {
							;(d = f.stateNode.containerInfo), (y = !0), (f.child.return = f), (f = f.child)
							continue
						}
					} else if ((Xu(a, f, s), f.child !== null)) {
						;(f.child.return = f), (f = f.child)
						continue
					}
					if (f === o) break
					for (; f.sibling === null; ) {
						if (f.return === null || f.return === o) return
						;(f = f.return), f.tag === 4 && (p = !1)
					}
					;(f.sibling.return = f.return), (f = f.sibling)
				}
			}
			function ki(a, o) {
				if (Z) {
					switch (o.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							V5(3, o, o.return), l7(3, o), V5(5, o, o.return)
							return
						case 1:
							return
						case 5:
							var s = o.stateNode
							if (s != null) {
								var f = o.memoizedProps
								a = a !== null ? a.memoizedProps : f
								var p = o.type,
									d = o.updateQueue
								;(o.updateQueue = null), d !== null && G_(s, d, p, a, f, o)
							}
							return
						case 6:
							if (o.stateNode === null) throw Error(C(162))
							;(s = o.memoizedProps), W0(o.stateNode, a !== null ? a.memoizedProps : s, s)
							return
						case 3:
							u2 && a !== null && a.memoizedState.isDehydrated && qf(o.stateNode.containerInfo)
							return
						case 12:
							return
						case 13:
							O9(o)
							return
						case 19:
							O9(o)
							return
						case 17:
							return
					}
					throw Error(C(163))
				}
				switch (o.tag) {
					case 0:
					case 11:
					case 14:
					case 15:
						V5(3, o, o.return), l7(3, o), V5(5, o, o.return)
						return
					case 12:
						return
					case 13:
						O9(o)
						return
					case 19:
						O9(o)
						return
					case 3:
						u2 && a !== null && a.memoizedState.isDehydrated && qf(o.stateNode.containerInfo)
						break
					case 22:
					case 23:
						return
				}
				e: if (l2) {
					switch (o.tag) {
						case 1:
						case 5:
						case 6:
							break e
						case 3:
						case 4:
							;(o = o.stateNode), bf(o.containerInfo, o.pendingChildren)
							break e
					}
					throw Error(C(163))
				}
			}
			function O9(a) {
				var o = a.updateQueue
				if (o !== null) {
					a.updateQueue = null
					var s = a.stateNode
					s === null && (s = a.stateNode = new Kk()),
						o.forEach(function (f) {
							var p = iP.bind(null, a, f)
							s.has(f) || (s.add(f), f.then(p, p))
						})
				}
			}
			function Xk(a, o) {
				for (X = o; X !== null; ) {
					o = X
					var s = o.deletions
					if (s !== null)
						for (var f = 0; f < s.length; f++) {
							var p = s[f]
							try {
								var d = a
								Z ? th(d, p, o) : Ju(d, p, o)
								var y = p.alternate
								y !== null && (y.return = null), (p.return = null)
							} catch (o2) {
								z3(p, o, o2)
							}
						}
					if (((s = o.child), (o.subtreeFlags & 12854) !== 0 && s !== null)) (s.return = o), (X = s)
					else
						for (; X !== null; ) {
							o = X
							try {
								var N = o.flags
								if ((N & 32 && Z && Rf(o.stateNode), N & 512)) {
									var R = o.alternate
									if (R !== null) {
										var W = R.ref
										W !== null && (typeof W == 'function' ? W(null) : (W.current = null))
									}
								}
								if (N & 8192)
									switch (o.tag) {
										case 13:
											if (o.memoizedState !== null) {
												var r2 = o.alternate
												;(r2 === null || r2.memoizedState === null) && (Di = A1())
											}
											break
										case 22:
											var L2 = o.memoizedState !== null,
												h2 = o.alternate,
												B2 = h2 !== null && h2.memoizedState !== null
											if (((s = o), Z)) {
												e: if (((f = s), (p = L2), (d = null), Z))
													for (var C2 = f; ; ) {
														if (C2.tag === 5) {
															if (d === null) {
																d = C2
																var Z1 = C2.stateNode
																p ? X_(Z1) : Z_(C2.stateNode, C2.memoizedProps)
															}
														} else if (C2.tag === 6) {
															if (d === null) {
																var Z3 = C2.stateNode
																p ? J_(Z3) : $_(Z3, C2.memoizedProps)
															}
														} else if (
															((C2.tag !== 22 && C2.tag !== 23) ||
																C2.memoizedState === null ||
																C2 === f) &&
															C2.child !== null
														) {
															;(C2.child.return = C2), (C2 = C2.child)
															continue
														}
														if (C2 === f) break
														for (; C2.sibling === null; ) {
															if (C2.return === null || C2.return === f) break e
															d === C2 && (d = null), (C2 = C2.return)
														}
														d === C2 && (d = null), (C2.sibling.return = C2.return), (C2 = C2.sibling)
													}
											}
											if (L2 && !B2 && (s.mode & 1) !== 0) {
												X = s
												for (var P = s.child; P !== null; ) {
													for (s = X = P; X !== null; ) {
														f = X
														var _ = f.child
														switch (f.tag) {
															case 0:
															case 11:
															case 14:
															case 15:
																V5(4, f, f.return)
																break
															case 1:
																R9(f, f.return)
																var T = f.stateNode
																if (typeof T.componentWillUnmount == 'function') {
																	var $ = f.return
																	try {
																		;(T.props = f.memoizedProps),
																			(T.state = f.memoizedState),
																			T.componentWillUnmount()
																	} catch (o2) {
																		z3(f, $, o2)
																	}
																}
																break
															case 5:
																R9(f, f.return)
																break
															case 22:
																if (f.memoizedState !== null) {
																	ih(s)
																	continue
																}
														}
														_ !== null ? ((_.return = f), (X = _)) : ih(s)
													}
													P = P.sibling
												}
											}
									}
								switch (N & 4102) {
									case 2:
										rh(o), (o.flags &= -3)
										break
									case 6:
										rh(o), (o.flags &= -3), ki(o.alternate, o)
										break
									case 4096:
										o.flags &= -4097
										break
									case 4100:
										;(o.flags &= -4097), ki(o.alternate, o)
										break
									case 4:
										ki(o.alternate, o)
								}
							} catch (o2) {
								z3(o, o.return, o2)
							}
							if (((s = o.sibling), s !== null)) {
								;(s.return = o.return), (X = s)
								break
							}
							X = o.return
						}
				}
			}
			function Jk(a, o, s) {
				;(X = a), nh(a, o, s)
			}
			function nh(a, o, s) {
				for (var f = (a.mode & 1) !== 0; X !== null; ) {
					var p = X,
						d = p.child
					if (p.tag === 22 && f) {
						var y = p.memoizedState !== null || T9
						if (!y) {
							var N = p.alternate,
								R = (N !== null && N.memoizedState !== null) || H5
							N = T9
							var W = H5
							if (((T9 = y), (H5 = R) && !W))
								for (X = p; X !== null; )
									(y = X),
										(R = y.child),
										y.tag === 22 && y.memoizedState !== null
											? oh(p)
											: R !== null
											? ((R.return = y), (X = R))
											: oh(p)
							for (; d !== null; ) (X = d), nh(d, o, s), (d = d.sibling)
							;(X = p), (T9 = N), (H5 = W)
						}
						ah(a, o, s)
					} else (p.subtreeFlags & 8772) !== 0 && d !== null ? ((d.return = p), (X = d)) : ah(a, o, s)
				}
			}
			function ah(a) {
				for (; X !== null; ) {
					var o = X
					if ((o.flags & 8772) !== 0) {
						var s = o.alternate
						try {
							if ((o.flags & 8772) !== 0)
								switch (o.tag) {
									case 0:
									case 11:
									case 15:
										H5 || l7(5, o)
										break
									case 1:
										var f = o.stateNode
										if (o.flags & 4 && !H5)
											if (s === null) f.componentDidMount()
											else {
												var p = o.elementType === o.type ? s.memoizedProps : L4(o.type, s.memoizedProps)
												f.componentDidUpdate(p, s.memoizedState, f.__reactInternalSnapshotBeforeUpdate)
											}
										var d = o.updateQueue
										d !== null && Zf(o, d, f)
										break
									case 3:
										var y = o.updateQueue
										if (y !== null) {
											if (((s = null), o.child !== null))
												switch (o.child.tag) {
													case 5:
														s = t1(o.child.stateNode)
														break
													case 1:
														s = o.child.stateNode
												}
											Zf(o, y, s)
										}
										break
									case 5:
										var N = o.stateNode
										s === null && o.flags & 4 && Y0(N, o.type, o.memoizedProps, o)
										break
									case 6:
										break
									case 4:
										break
									case 12:
										break
									case 13:
										if (u2 && o.memoizedState === null) {
											var R = o.alternate
											if (R !== null) {
												var W = R.memoizedState
												if (W !== null) {
													var r2 = W.dehydrated
													r2 !== null && pk(r2)
												}
											}
										}
										break
									case 19:
									case 17:
									case 21:
									case 22:
									case 23:
										break
									default:
										throw Error(C(163))
								}
							H5 || (o.flags & 512 && wi(o))
						} catch (L2) {
							z3(o, o.return, L2)
						}
					}
					if (o === a) {
						X = null
						break
					}
					if (((s = o.sibling), s !== null)) {
						;(s.return = o.return), (X = s)
						break
					}
					X = o.return
				}
			}
			function ih(a) {
				for (; X !== null; ) {
					var o = X
					if (o === a) {
						X = null
						break
					}
					var s = o.sibling
					if (s !== null) {
						;(s.return = o.return), (X = s)
						break
					}
					X = o.return
				}
			}
			function oh(a) {
				for (; X !== null; ) {
					var o = X
					try {
						switch (o.tag) {
							case 0:
							case 11:
							case 15:
								var s = o.return
								try {
									l7(4, o)
								} catch (R) {
									z3(o, s, R)
								}
								break
							case 1:
								var f = o.stateNode
								if (typeof f.componentDidMount == 'function') {
									var p = o.return
									try {
										f.componentDidMount()
									} catch (R) {
										z3(o, p, R)
									}
								}
								var d = o.return
								try {
									wi(o)
								} catch (R) {
									z3(o, d, R)
								}
								break
							case 5:
								var y = o.return
								try {
									wi(o)
								} catch (R) {
									z3(o, y, R)
								}
						}
					} catch (R) {
						z3(o, o.return, R)
					}
					if (o === a) {
						X = null
						break
					}
					var N = o.sibling
					if (N !== null) {
						;(N.return = o.return), (X = N)
						break
					}
					X = o.return
				}
			}
			var D9 = 0,
				b9 = 1,
				F9 = 2,
				I9 = 3,
				B9 = 4
			if (typeof Symbol == 'function' && Symbol.for) {
				var f7 = Symbol.for
				;(D9 = f7('selector.component')),
					(b9 = f7('selector.has_pseudo_class')),
					(F9 = f7('selector.role')),
					(I9 = f7('selector.test_id')),
					(B9 = f7('selector.text'))
			}
			function Pi(a) {
				var o = Y2(a)
				if (o != null) {
					if (typeof o.memoizedProps['data-testname'] != 'string') throw Error(C(364))
					return o
				}
				if (((a = _1(a)), a === null)) throw Error(C(362))
				return a.stateNode.current
			}
			function Ai(a, o) {
				switch (o.$$typeof) {
					case D9:
						if (a.type === o.value) return !0
						break
					case b9:
						e: {
							;(o = o.value), (a = [a, 0])
							for (var s = 0; s < a.length; ) {
								var f = a[s++],
									p = a[s++],
									d = o[p]
								if (f.tag !== 5 || !v4(f)) {
									for (; d != null && Ai(f, d); ) p++, (d = o[p])
									if (p === o.length) {
										o = !0
										break e
									} else for (f = f.child; f !== null; ) a.push(f, p), (f = f.sibling)
								}
							}
							o = !1
						}
						return o
					case F9:
						if (a.tag === 5 && P1(a.stateNode, o.value)) return !0
						break
					case B9:
						if ((a.tag === 5 || a.tag === 6) && ((a = k1(a)), a !== null && 0 <= a.indexOf(o.value))) return !0
						break
					case I9:
						if (
							a.tag === 5 &&
							((a = a.memoizedProps['data-testname']),
							typeof a == 'string' && a.toLowerCase() === o.value.toLowerCase())
						)
							return !0
						break
					default:
						throw Error(C(365))
				}
				return !1
			}
			function Ei(a) {
				switch (a.$$typeof) {
					case D9:
						return '<' + (I(a.value) || 'Unknown') + '>'
					case b9:
						return ':has(' + (Ei(a) || '') + ')'
					case F9:
						return '[role="' + a.value + '"]'
					case B9:
						return '"' + a.value + '"'
					case I9:
						return '[data-testname="' + a.value + '"]'
					default:
						throw Error(C(365))
				}
			}
			function ch(a, o) {
				var s = []
				a = [a, 0]
				for (var f = 0; f < a.length; ) {
					var p = a[f++],
						d = a[f++],
						y = o[d]
					if (p.tag !== 5 || !v4(p)) {
						for (; y != null && Ai(p, y); ) d++, (y = o[d])
						if (d === o.length) s.push(p)
						else for (p = p.child; p !== null; ) a.push(p, d), (p = p.sibling)
					}
				}
				return s
			}
			function Ti(a, o) {
				if (!T4) throw Error(C(363))
				;(a = Pi(a)), (a = ch(a, o)), (o = []), (a = Array.from(a))
				for (var s = 0; s < a.length; ) {
					var f = a[s++]
					if (f.tag === 5) v4(f) || o.push(f.stateNode)
					else for (f = f.child; f !== null; ) a.push(f), (f = f.sibling)
				}
				return o
			}
			var Zk = Math.ceil,
				q9 = l.ReactCurrentDispatcher,
				Ri = l.ReactCurrentOwner,
				p1 = l.ReactCurrentBatchConfig,
				V2 = 0,
				m1 = null,
				L1 = null,
				B1 = 0,
				E3 = 0,
				z8 = N6(0),
				H1 = 0,
				u7 = null,
				H8 = 0,
				U9 = 0,
				Oi = 0,
				h7 = null,
				g3 = null,
				Di = 0,
				bi = 1 / 0
			function V8() {
				bi = A1() + 500
			}
			var j9 = !1,
				Fi = null,
				A6 = null,
				G9 = !1,
				E6 = null,
				W9 = 0,
				p7 = 0,
				Ii = null,
				Y9 = -1,
				K9 = 0
			function o3() {
				return (V2 & 6) !== 0 ? A1() : Y9 !== -1 ? Y9 : (Y9 = A1())
			}
			function T6(a) {
				return (a.mode & 1) === 0
					? 1
					: (V2 & 2) !== 0 && B1 !== 0
					? B1 & -B1
					: Tk.transition !== null
					? (K9 === 0 && ((a = c9), (c9 <<= 1), (c9 & 4194240) === 0 && (c9 = 64), (K9 = a)), K9)
					: ((a = P2), a !== 0 ? a : K2())
			}
			function X3(a, o, s) {
				if (50 < p7) throw ((p7 = 0), (Ii = null), Error(C(185)))
				var f = Q9(a, o)
				return f === null
					? null
					: (J0(f, o, s),
					  ((V2 & 2) === 0 || f !== m1) &&
							(f === m1 && ((V2 & 2) === 0 && (U9 |= o), H1 === 4 && R6(f, B1)),
							M3(f, s),
							o === 1 && V2 === 0 && (a.mode & 1) === 0 && (V8(), f9 && D4())),
					  f)
			}
			function Q9(a, o) {
				a.lanes |= o
				var s = a.alternate
				for (s !== null && (s.lanes |= o), s = a, a = a.return; a !== null; )
					(a.childLanes |= o), (s = a.alternate), s !== null && (s.childLanes |= o), (s = a), (a = a.return)
				return s.tag === 3 ? s.stateNode : null
			}
			function M3(a, o) {
				var s = a.callbackNode
				Sk(a, o)
				var f = s9(a, a === m1 ? B1 : 0)
				if (f === 0) s !== null && Yf(s), (a.callbackNode = null), (a.callbackPriority = 0)
				else if (((o = f & -f), a.callbackPriority !== o)) {
					if ((s != null && Yf(s), o === 1))
						a.tag === 0 ? Ek(sh.bind(null, a)) : Kf(sh.bind(null, a)),
							h1
								? $4(function () {
										V2 === 0 && D4()
								  })
								: Ka(Qa, D4),
							(s = null)
					else {
						switch (Wf(f)) {
							case 1:
								s = Qa
								break
							case 4:
								s = _k
								break
							case 16:
								s = Xa
								break
							case 536870912:
								s = kk
								break
							default:
								s = Xa
						}
						s = Lh(s, Ch.bind(null, a))
					}
					;(a.callbackPriority = o), (a.callbackNode = s)
				}
			}
			function Ch(a, o) {
				if (((Y9 = -1), (K9 = 0), (V2 & 6) !== 0)) throw Error(C(327))
				var s = a.callbackNode
				if (x5() && a.callbackNode !== s) return null
				var f = s9(a, a === m1 ? B1 : 0)
				if (f === 0) return null
				if ((f & 30) !== 0 || (f & a.expiredLanes) !== 0 || o) o = X9(a, f)
				else {
					o = f
					var p = V2
					V2 |= 2
					var d = uh()
					;(m1 !== a || B1 !== o) && (V8(), y5(a, o))
					do
						try {
							rP()
							break
						} catch (N) {
							fh(a, N)
						}
					while (1)
					$a(), (q9.current = d), (V2 = p), L1 !== null ? (o = 0) : ((m1 = null), (B1 = 0), (o = H1))
				}
				if (o !== 0) {
					if ((o === 2 && ((p = Ga(a)), p !== 0 && ((f = p), (o = Bi(a, p)))), o === 1))
						throw ((s = u7), y5(a, 0), R6(a, f), M3(a, A1()), s)
					if (o === 6) R6(a, f)
					else {
						if (
							((p = a.current.alternate),
							(f & 30) === 0 &&
								!$k(p) &&
								((o = X9(a, f)), o === 2 && ((d = Ga(a)), d !== 0 && ((f = d), (o = Bi(a, d)))), o === 1))
						)
							throw ((s = u7), y5(a, 0), R6(a, f), M3(a, A1()), s)
						switch (((a.finishedWork = p), (a.finishedLanes = f), o)) {
							case 0:
							case 1:
								throw Error(C(345))
							case 2:
								S5(a, g3)
								break
							case 3:
								if ((R6(a, f), (f & 130023424) === f && ((o = Di + 500 - A1()), 10 < o))) {
									if (s9(a, 0) !== 0) break
									if (((p = a.suspendedLanes), (p & f) !== f)) {
										o3(), (a.pingedLanes |= a.suspendedLanes & p)
										break
									}
									a.timeoutHandle = q(S5.bind(null, a, g3), o)
									break
								}
								S5(a, g3)
								break
							case 4:
								if ((R6(a, f), (f & 4194240) === f)) break
								for (o = a.eventTimes, p = -1; 0 < f; ) {
									var y = 31 - m4(f)
									;(d = 1 << y), (y = o[y]), y > p && (p = y), (f &= ~d)
								}
								if (
									((f = p),
									(f = A1() - f),
									(f =
										(120 > f
											? 120
											: 480 > f
											? 480
											: 1080 > f
											? 1080
											: 1920 > f
											? 1920
											: 3e3 > f
											? 3e3
											: 4320 > f
											? 4320
											: 1960 * Zk(f / 1960)) - f),
									10 < f)
								) {
									a.timeoutHandle = q(S5.bind(null, a, g3), f)
									break
								}
								S5(a, g3)
								break
							case 5:
								S5(a, g3)
								break
							default:
								throw Error(C(329))
						}
					}
				}
				return M3(a, A1()), a.callbackNode === s ? Ch.bind(null, a) : null
			}
			function Bi(a, o) {
				var s = h7
				return (
					a.current.memoizedState.isDehydrated && (y5(a, o).flags |= 256),
					(a = X9(a, o)),
					a !== 2 && ((o = g3), (g3 = s), o !== null && qi(o)),
					a
				)
			}
			function qi(a) {
				g3 === null ? (g3 = a) : g3.push.apply(g3, a)
			}
			function $k(a) {
				for (var o = a; ; ) {
					if (o.flags & 16384) {
						var s = o.updateQueue
						if (s !== null && ((s = s.stores), s !== null))
							for (var f = 0; f < s.length; f++) {
								var p = s[f],
									d = p.getSnapshot
								p = p.value
								try {
									if (!O4(d(), p)) return !1
								} catch {
									return !1
								}
							}
					}
					if (((s = o.child), o.subtreeFlags & 16384 && s !== null)) (s.return = o), (o = s)
					else {
						if (o === a) break
						for (; o.sibling === null; ) {
							if (o.return === null || o.return === a) return !0
							o = o.return
						}
						;(o.sibling.return = o.return), (o = o.sibling)
					}
				}
				return !0
			}
			function R6(a, o) {
				for (o &= ~Oi, o &= ~U9, a.suspendedLanes |= o, a.pingedLanes &= ~o, a = a.expirationTimes; 0 < o; ) {
					var s = 31 - m4(o),
						f = 1 << s
					;(a[s] = -1), (o &= ~f)
				}
			}
			function sh(a) {
				if ((V2 & 6) !== 0) throw Error(C(327))
				x5()
				var o = s9(a, 0)
				if ((o & 1) === 0) return M3(a, A1()), null
				var s = X9(a, o)
				if (a.tag !== 0 && s === 2) {
					var f = Ga(a)
					f !== 0 && ((o = f), (s = Bi(a, f)))
				}
				if (s === 1) throw ((s = u7), y5(a, 0), R6(a, o), M3(a, A1()), s)
				if (s === 6) throw Error(C(345))
				return (a.finishedWork = a.current.alternate), (a.finishedLanes = o), S5(a, g3), M3(a, A1()), null
			}
			function lh(a) {
				E6 !== null && E6.tag === 0 && (V2 & 6) === 0 && x5()
				var o = V2
				V2 |= 1
				var s = p1.transition,
					f = P2
				try {
					if (((p1.transition = null), (P2 = 1), a)) return a()
				} finally {
					;(P2 = f), (p1.transition = s), (V2 = o), (V2 & 6) === 0 && D4()
				}
			}
			function Ui() {
				;(E3 = z8.current), Q2(z8)
			}
			function y5(a, o) {
				;(a.finishedWork = null), (a.finishedLanes = 0)
				var s = a.timeoutHandle
				if ((s !== c2 && ((a.timeoutHandle = c2), e2(s)), L1 !== null))
					for (s = L1.return; s !== null; ) {
						var f = s
						switch ((oi(f), f.tag)) {
							case 1:
								;(f = f.type.childContextTypes), f != null && i9()
								break
							case 3:
								g8(), Q2(m3), Q2(K1), hi()
								break
							case 5:
								fi(f)
								break
							case 4:
								g8()
								break
							case 13:
								Q2(a1)
								break
							case 19:
								Q2(a1)
								break
							case 10:
								ei(f.type._context)
								break
							case 22:
							case 23:
								Ui()
						}
						s = s.return
					}
				if (
					((m1 = a),
					(L1 = a = O6(a.current, null)),
					(B1 = E3 = o),
					(H1 = 0),
					(u7 = null),
					(Oi = U9 = H8 = 0),
					(g3 = h7 = null),
					b4 !== null)
				) {
					for (o = 0; o < b4.length; o++)
						if (((s = b4[o]), (f = s.interleaved), f !== null)) {
							s.interleaved = null
							var p = f.next,
								d = s.pending
							if (d !== null) {
								var y = d.next
								;(d.next = p), (f.next = y)
							}
							s.pending = f
						}
					b4 = null
				}
				return a
			}
			function fh(a, o) {
				do {
					var s = L1
					try {
						if (($a(), (H9.current = N9), V9)) {
							for (var f = l1.memoizedState; f !== null; ) {
								var p = f.queue
								p !== null && (p.pending = null), (f = f.next)
							}
							V9 = !1
						}
						if (
							((M8 = 0),
							(E1 = Q1 = l1 = null),
							(n7 = !1),
							(a7 = 0),
							(Ri.current = null),
							s === null || s.return === null)
						) {
							;(H1 = 1), (u7 = o), (L1 = null)
							break
						}
						e: {
							var d = a,
								y = s.return,
								N = s,
								R = o
							if (
								((o = B1),
								(N.flags |= 32768),
								R !== null && typeof R == 'object' && typeof R.then == 'function')
							) {
								var W = R,
									r2 = N,
									L2 = r2.tag
								if ((r2.mode & 1) === 0 && (L2 === 0 || L2 === 11 || L2 === 15)) {
									var h2 = r2.alternate
									h2
										? ((r2.updateQueue = h2.updateQueue),
										  (r2.memoizedState = h2.memoizedState),
										  (r2.lanes = h2.lanes))
										: ((r2.updateQueue = null), (r2.memoizedState = null))
								}
								var B2 = Au(y)
								if (B2 !== null) {
									;(B2.flags &= -257), Eu(B2, y, N, d, o), B2.mode & 1 && Pu(d, W, o), (o = B2), (R = W)
									var C2 = o.updateQueue
									if (C2 === null) {
										var Z1 = new Set()
										Z1.add(R), (o.updateQueue = Z1)
									} else C2.add(R)
									break e
								} else {
									if ((o & 1) === 0) {
										Pu(d, W, o), ji()
										break e
									}
									R = Error(C(426))
								}
							} else if ($2 && N.mode & 1) {
								var Z3 = Au(y)
								if (Z3 !== null) {
									;(Z3.flags & 65536) === 0 && (Z3.flags |= 256), Eu(Z3, y, N, d, o), si(R)
									break e
								}
							}
							;(d = R), H1 !== 4 && (H1 = 2), h7 === null ? (h7 = [d]) : h7.push(d), (R = Mi(R, N)), (N = y)
							do {
								switch (N.tag) {
									case 3:
										;(N.flags |= 65536), (o &= -o), (N.lanes |= o)
										var P = _u(N, R, o)
										Jf(N, P)
										break e
									case 1:
										d = R
										var _ = N.type,
											T = N.stateNode
										if (
											(N.flags & 128) === 0 &&
											(typeof _.getDerivedStateFromError == 'function' ||
												(T !== null &&
													typeof T.componentDidCatch == 'function' &&
													(A6 === null || !A6.has(T))))
										) {
											;(N.flags |= 65536), (o &= -o), (N.lanes |= o)
											var $ = ku(N, d, o)
											Jf(N, $)
											break e
										}
								}
								N = N.return
							} while (N !== null)
						}
						ph(s)
					} catch (o2) {
						;(o = o2), L1 === s && s !== null && (L1 = s = s.return)
						continue
					}
					break
				} while (1)
			}
			function uh() {
				var a = q9.current
				return (q9.current = N9), a === null ? N9 : a
			}
			function ji() {
				;(H1 === 0 || H1 === 3 || H1 === 2) && (H1 = 4),
					m1 === null || ((H8 & 268435455) === 0 && (U9 & 268435455) === 0) || R6(m1, B1)
			}
			function X9(a, o) {
				var s = V2
				V2 |= 2
				var f = uh()
				;(m1 === a && B1 === o) || y5(a, o)
				do
					try {
						eP()
						break
					} catch (p) {
						fh(a, p)
					}
				while (1)
				if (($a(), (V2 = s), (q9.current = f), L1 !== null)) throw Error(C(261))
				return (m1 = null), (B1 = 0), H1
			}
			function eP() {
				for (; L1 !== null; ) hh(L1)
			}
			function rP() {
				for (; L1 !== null && !wk(); ) hh(L1)
			}
			function hh(a) {
				var o = mh(a.alternate, a, E3)
				;(a.memoizedProps = a.pendingProps), o === null ? ph(a) : (L1 = o), (Ri.current = null)
			}
			function ph(a) {
				var o = a
				do {
					var s = o.alternate
					if (((a = o.return), (o.flags & 32768) === 0)) {
						if (((s = jk(s, o, E3)), s !== null)) {
							L1 = s
							return
						}
					} else {
						if (((s = Yk(s, o)), s !== null)) {
							;(s.flags &= 32767), (L1 = s)
							return
						}
						if (a !== null) (a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)
						else {
							;(H1 = 6), (L1 = null)
							return
						}
					}
					if (((o = o.sibling), o !== null)) {
						L1 = o
						return
					}
					L1 = o = a
				} while (o !== null)
				H1 === 0 && (H1 = 5)
			}
			function S5(a, o) {
				var s = P2,
					f = p1.transition
				try {
					;(p1.transition = null), (P2 = 1), tP(a, o, s)
				} finally {
					;(p1.transition = f), (P2 = s)
				}
				return null
			}
			function tP(a, o, s) {
				do x5()
				while (E6 !== null)
				if ((V2 & 6) !== 0) throw Error(C(327))
				var f = a.finishedWork,
					p = a.finishedLanes
				if (f === null) return null
				if (((a.finishedWork = null), (a.finishedLanes = 0), f === a.current)) throw Error(C(177))
				;(a.callbackNode = null), (a.callbackPriority = 0)
				var d = f.lanes | f.childLanes
				if (
					(xk(a, d),
					a === m1 && ((L1 = m1 = null), (B1 = 0)),
					((f.subtreeFlags & 2064) === 0 && (f.flags & 2064) === 0) ||
						G9 ||
						((G9 = !0),
						Lh(Xa, function () {
							return x5(), null
						})),
					(d = (f.flags & 15990) !== 0),
					(f.subtreeFlags & 15990) !== 0 || d)
				) {
					;(d = p1.transition), (p1.transition = null)
					var y = P2
					P2 = 1
					var N = V2
					;(V2 |= 4),
						(Ri.current = null),
						Qk(a, f),
						Xk(a, f, p),
						a2(a.containerInfo),
						(a.current = f),
						Jk(f, a, p),
						Nk(),
						(V2 = N),
						(P2 = y),
						(p1.transition = d)
				} else a.current = f
				if (
					(G9 && ((G9 = !1), (E6 = a), (W9 = p)),
					(d = a.pendingLanes),
					d === 0 && (A6 = null),
					Pk(f.stateNode, s),
					M3(a, A1()),
					o !== null)
				)
					for (s = a.onRecoverableError, f = 0; f < o.length; f++) s(o[f])
				if (j9) throw ((j9 = !1), (a = Fi), (Fi = null), a)
				return (
					(W9 & 1) !== 0 && a.tag !== 0 && x5(),
					(d = a.pendingLanes),
					(d & 1) !== 0 ? (a === Ii ? p7++ : ((p7 = 0), (Ii = a))) : (p7 = 0),
					D4(),
					null
				)
			}
			function x5() {
				if (E6 !== null) {
					var a = Wf(W9),
						o = p1.transition,
						s = P2
					try {
						if (((p1.transition = null), (P2 = 16 > a ? 16 : a), E6 === null)) var f = !1
						else {
							if (((a = E6), (E6 = null), (W9 = 0), (V2 & 6) !== 0)) throw Error(C(331))
							var p = V2
							for (V2 |= 4, X = a.current; X !== null; ) {
								var d = X,
									y = d.child
								if ((X.flags & 16) !== 0) {
									var N = d.deletions
									if (N !== null) {
										for (var R = 0; R < N.length; R++) {
											var W = N[R]
											for (X = W; X !== null; ) {
												var r2 = X
												switch (r2.tag) {
													case 0:
													case 11:
													case 15:
														V5(8, r2, d)
												}
												var L2 = r2.child
												if (L2 !== null) (L2.return = r2), (X = L2)
												else
													for (; X !== null; ) {
														r2 = X
														var h2 = r2.sibling,
															B2 = r2.return
														if ((Zu(r2), r2 === W)) {
															X = null
															break
														}
														if (h2 !== null) {
															;(h2.return = B2), (X = h2)
															break
														}
														X = B2
													}
											}
										}
										var C2 = d.alternate
										if (C2 !== null) {
											var Z1 = C2.child
											if (Z1 !== null) {
												C2.child = null
												do {
													var Z3 = Z1.sibling
													;(Z1.sibling = null), (Z1 = Z3)
												} while (Z1 !== null)
											}
										}
										X = d
									}
								}
								if ((d.subtreeFlags & 2064) !== 0 && y !== null) (y.return = d), (X = y)
								else
									e: for (; X !== null; ) {
										if (((d = X), (d.flags & 2048) !== 0))
											switch (d.tag) {
												case 0:
												case 11:
												case 15:
													V5(9, d, d.return)
											}
										var P = d.sibling
										if (P !== null) {
											;(P.return = d.return), (X = P)
											break e
										}
										X = d.return
									}
							}
							var _ = a.current
							for (X = _; X !== null; ) {
								y = X
								var T = y.child
								if ((y.subtreeFlags & 2064) !== 0 && T !== null) (T.return = y), (X = T)
								else
									e: for (y = _; X !== null; ) {
										if (((N = X), (N.flags & 2048) !== 0))
											try {
												switch (N.tag) {
													case 0:
													case 11:
													case 15:
														l7(9, N)
												}
											} catch (o2) {
												z3(N, N.return, o2)
											}
										if (N === y) {
											X = null
											break e
										}
										var $ = N.sibling
										if ($ !== null) {
											;($.return = N.return), (X = $)
											break e
										}
										X = N.return
									}
							}
							if (((V2 = p), D4(), R4 && typeof R4.onPostCommitFiberRoot == 'function'))
								try {
									R4.onPostCommitFiberRoot(l9, a)
								} catch {}
							f = !0
						}
						return f
					} finally {
						;(P2 = s), (p1.transition = o)
					}
				}
				return !1
			}
			function dh(a, o, s) {
				;(o = Mi(s, o)),
					(o = _u(a, o, 1)),
					P6(a, o),
					(o = o3()),
					(a = Q9(a, 1)),
					a !== null && (J0(a, 1, o), M3(a, o))
			}
			function z3(a, o, s) {
				if (a.tag === 3) dh(a, a, s)
				else
					for (; o !== null; ) {
						if (o.tag === 3) {
							dh(o, a, s)
							break
						} else if (o.tag === 1) {
							var f = o.stateNode
							if (
								typeof o.type.getDerivedStateFromError == 'function' ||
								(typeof f.componentDidCatch == 'function' && (A6 === null || !A6.has(f)))
							) {
								;(a = Mi(s, a)),
									(a = ku(o, a, 1)),
									P6(o, a),
									(a = o3()),
									(o = Q9(o, 1)),
									o !== null && (J0(o, 1, a), M3(o, a))
								break
							}
						}
						o = o.return
					}
			}
			function nP(a, o, s) {
				var f = a.pingCache
				f !== null && f.delete(o),
					(o = o3()),
					(a.pingedLanes |= a.suspendedLanes & s),
					m1 === a &&
						(B1 & s) === s &&
						(H1 === 4 || (H1 === 3 && (B1 & 130023424) === B1 && 500 > A1() - Di) ? y5(a, 0) : (Oi |= s)),
					M3(a, o)
			}
			function vh(a, o) {
				o === 0 && ((a.mode & 1) === 0 ? (o = 1) : ((o = C9), (C9 <<= 1), (C9 & 130023424) === 0 && (C9 = 4194304)))
				var s = o3()
				;(a = Q9(a, o)), a !== null && (J0(a, o, s), M3(a, s))
			}
			function aP(a) {
				var o = a.memoizedState,
					s = 0
				o !== null && (s = o.retryLane), vh(a, s)
			}
			function iP(a, o) {
				var s = 0
				switch (a.tag) {
					case 13:
						var f = a.stateNode,
							p = a.memoizedState
						p !== null && (s = p.retryLane)
						break
					case 19:
						f = a.stateNode
						break
					default:
						throw Error(C(314))
				}
				f !== null && f.delete(o), vh(a, s)
			}
			var mh
			mh = function (a, o, s) {
				if (a !== null)
					if (a.memoizedProps !== o.pendingProps || m3.current) A3 = !0
					else {
						if ((a.lanes & s) === 0 && (o.flags & 128) === 0) return (A3 = !1), Wk(a, o, s)
						A3 = (a.flags & 131072) !== 0
					}
				else (A3 = !1), $2 && (o.flags & 1048576) !== 0 && nu(o, g9, o.index)
				switch (((o.lanes = 0), o.tag)) {
					case 2:
						var f = o.type
						a !== null && ((a.alternate = null), (o.alternate = null), (o.flags |= 2)), (a = o.pendingProps)
						var p = f8(o, K1.current)
						h8(o, s), (p = di(null, o, f, a, p, s))
						var d = vi()
						return (
							(o.flags |= 1),
							typeof p == 'object' && p !== null && typeof p.render == 'function' && p.$$typeof === void 0
								? ((o.tag = 1),
								  (o.memoizedState = null),
								  (o.updateQueue = null),
								  L3(f) ? ((d = !0), o9(o)) : (d = !1),
								  (o.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null),
								  ti(o),
								  (p.updater = m9),
								  (o.stateNode = p),
								  (p._reactInternals = o),
								  ai(o, f, a, s),
								  (o = Vi(null, o, f, !0, d, s)))
								: ((o.tag = 0), $2 && d && ii(o), i3(null, o, p, s), (o = o.child)),
							o
						)
					case 16:
						f = o.elementType
						e: {
							switch (
								(a !== null && ((a.alternate = null), (o.alternate = null), (o.flags |= 2)),
								(a = o.pendingProps),
								(p = f._init),
								(f = p(f._payload)),
								(o.type = f),
								(p = o.tag = cP(f)),
								(a = L4(f, a)),
								p)
							) {
								case 0:
									o = Hi(null, o, f, a, s)
									break e
								case 1:
									o = Bu(null, o, f, a, s)
									break e
								case 11:
									o = Ou(null, o, f, a, s)
									break e
								case 14:
									o = Du(null, o, f, L4(f.type, a), s)
									break e
							}
							throw Error(C(306, f, ''))
						}
						return o
					case 0:
						return (f = o.type), (p = o.pendingProps), (p = o.elementType === f ? p : L4(f, p)), Hi(a, o, f, p, s)
					case 1:
						return (f = o.type), (p = o.pendingProps), (p = o.elementType === f ? p : L4(f, p)), Bu(a, o, f, p, s)
					case 3:
						e: {
							if ((qu(o), a === null)) throw Error(C(387))
							;(f = o.pendingProps), (d = o.memoizedState), (p = d.element), Xf(a, o), v9(o, f, null, s)
							var y = o.memoizedState
							if (((f = y.element), u2 && d.isDehydrated))
								if (
									((d = { element: f, isDehydrated: !1, cache: y.cache, transitions: y.transitions }),
									(o.updateQueue.baseState = d),
									(o.memoizedState = d),
									o.flags & 256)
								) {
									;(p = Error(C(423))), (o = Uu(a, o, f, s, p))
									break e
								} else if (f !== p) {
									;(p = Error(C(424))), (o = Uu(a, o, f, s, p))
									break e
								} else
									for (
										u2 && ((P3 = Ck(o.stateNode.containerInfo)), (k3 = o), ($2 = !0), (g4 = null), (Z0 = !1)),
											s = su(o, null, f, s),
											o.child = s;
										s;

									)
										(s.flags = (s.flags & -3) | 4096), (s = s.sibling)
							else {
								if ((v8(), f === p)) {
									o = i6(a, o, s)
									break e
								}
								i3(a, o, f, s)
							}
							o = o.child
						}
						return o
					case 5:
						return (
							lu(o),
							a === null && Ci(o),
							(f = o.type),
							(p = o.pendingProps),
							(d = a !== null ? a.memoizedProps : null),
							(y = p.children),
							O(f, p) ? (y = null) : d !== null && O(f, d) && (o.flags |= 32),
							Iu(a, o),
							i3(a, o, y, s),
							o.child
						)
					case 6:
						return a === null && Ci(o), null
					case 13:
						return ju(a, o, s)
					case 4:
						return (
							li(o, o.stateNode.containerInfo),
							(f = o.pendingProps),
							a === null ? (o.child = m8(o, null, f, s)) : i3(a, o, f, s),
							o.child
						)
					case 11:
						return (f = o.type), (p = o.pendingProps), (p = o.elementType === f ? p : L4(f, p)), Ou(a, o, f, p, s)
					case 7:
						return i3(a, o, o.pendingProps, s), o.child
					case 8:
						return i3(a, o, o.pendingProps.children, s), o.child
					case 12:
						return i3(a, o, o.pendingProps.children, s), o.child
					case 10:
						e: {
							if (
								((f = o.type._context),
								(p = o.pendingProps),
								(d = o.memoizedProps),
								(y = p.value),
								Qf(o, f, y),
								d !== null)
							)
								if (O4(d.value, y)) {
									if (d.children === p.children && !m3.current) {
										o = i6(a, o, s)
										break e
									}
								} else
									for (d = o.child, d !== null && (d.return = o); d !== null; ) {
										var N = d.dependencies
										if (N !== null) {
											y = d.child
											for (var R = N.firstContext; R !== null; ) {
												if (R.context === f) {
													if (d.tag === 1) {
														;(R = r6(-1, s & -s)), (R.tag = 2)
														var W = d.updateQueue
														if (W !== null) {
															W = W.shared
															var r2 = W.pending
															r2 === null ? (R.next = R) : ((R.next = r2.next), (r2.next = R)),
																(W.pending = R)
														}
													}
													;(d.lanes |= s),
														(R = d.alternate),
														R !== null && (R.lanes |= s),
														ri(d.return, s, o),
														(N.lanes |= s)
													break
												}
												R = R.next
											}
										} else if (d.tag === 10) y = d.type === o.type ? null : d.child
										else if (d.tag === 18) {
											if (((y = d.return), y === null)) throw Error(C(341))
											;(y.lanes |= s),
												(N = y.alternate),
												N !== null && (N.lanes |= s),
												ri(y, s, o),
												(y = d.sibling)
										} else y = d.child
										if (y !== null) y.return = d
										else
											for (y = d; y !== null; ) {
												if (y === o) {
													y = null
													break
												}
												if (((d = y.sibling), d !== null)) {
													;(d.return = y.return), (y = d)
													break
												}
												y = y.return
											}
										d = y
									}
							i3(a, o, p.children, s), (o = o.child)
						}
						return o
					case 9:
						return (
							(p = o.type),
							(f = o.pendingProps.children),
							h8(o, s),
							(p = G3(p)),
							(f = f(p)),
							(o.flags |= 1),
							i3(a, o, f, s),
							o.child
						)
					case 14:
						return (f = o.type), (p = L4(f, o.pendingProps)), (p = L4(f.type, p)), Du(a, o, f, p, s)
					case 15:
						return bu(a, o, o.type, o.pendingProps, s)
					case 17:
						return (
							(f = o.type),
							(p = o.pendingProps),
							(p = o.elementType === f ? p : L4(f, p)),
							a !== null && ((a.alternate = null), (o.alternate = null), (o.flags |= 2)),
							(o.tag = 1),
							L3(f) ? ((a = !0), o9(o)) : (a = !1),
							h8(o, s),
							ru(o, f, p),
							ai(o, f, p, s),
							Vi(null, o, f, !0, a, s)
						)
					case 19:
						return Ku(a, o, s)
					case 22:
						return Fu(a, o, s)
				}
				throw Error(C(156, o.tag))
			}
			function Lh(a, o) {
				return Ka(a, o)
			}
			function oP(a, o, s, f) {
				;(this.tag = a),
					(this.key = s),
					(this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
					(this.index = 0),
					(this.ref = null),
					(this.pendingProps = o),
					(this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
					(this.mode = f),
					(this.subtreeFlags = this.flags = 0),
					(this.deletions = null),
					(this.childLanes = this.lanes = 0),
					(this.alternate = null)
			}
			function J3(a, o, s, f) {
				return new oP(a, o, s, f)
			}
			function Gi(a) {
				return (a = a.prototype), !(!a || !a.isReactComponent)
			}
			function cP(a) {
				if (typeof a == 'function') return Gi(a) ? 1 : 0
				if (a != null) {
					if (((a = a.$$typeof), a === x)) return 11
					if (a === M) return 14
				}
				return 2
			}
			function O6(a, o) {
				var s = a.alternate
				return (
					s === null
						? ((s = J3(a.tag, o, a.key, a.mode)),
						  (s.elementType = a.elementType),
						  (s.type = a.type),
						  (s.stateNode = a.stateNode),
						  (s.alternate = a),
						  (a.alternate = s))
						: ((s.pendingProps = o),
						  (s.type = a.type),
						  (s.flags = 0),
						  (s.subtreeFlags = 0),
						  (s.deletions = null)),
					(s.flags = a.flags & 14680064),
					(s.childLanes = a.childLanes),
					(s.lanes = a.lanes),
					(s.child = a.child),
					(s.memoizedProps = a.memoizedProps),
					(s.memoizedState = a.memoizedState),
					(s.updateQueue = a.updateQueue),
					(o = a.dependencies),
					(s.dependencies = o === null ? null : { lanes: o.lanes, firstContext: o.firstContext }),
					(s.sibling = a.sibling),
					(s.index = a.index),
					(s.ref = a.ref),
					s
				)
			}
			function J9(a, o, s, f, p, d) {
				var y = 2
				if (((f = a), typeof a == 'function')) Gi(a) && (y = 1)
				else if (typeof a == 'string') y = 5
				else
					e: switch (a) {
						case v:
							return w5(s.children, p, d, o)
						case g:
							;(y = 8), (p |= 8)
							break
						case m:
							return (a = J3(12, s, o, p | 2)), (a.elementType = m), (a.lanes = d), a
						case w:
							return (a = J3(13, s, o, p)), (a.elementType = w), (a.lanes = d), a
						case V:
							return (a = J3(19, s, o, p)), (a.elementType = V), (a.lanes = d), a
						case k:
							return Z9(s, p, d, o)
						default:
							if (typeof a == 'object' && a !== null)
								switch (a.$$typeof) {
									case H:
										y = 10
										break e
									case L:
										y = 9
										break e
									case x:
										y = 11
										break e
									case M:
										y = 14
										break e
									case S:
										;(y = 16), (f = null)
										break e
								}
							throw Error(C(130, a == null ? a : typeof a, ''))
					}
				return (o = J3(y, s, o, p)), (o.elementType = a), (o.type = f), (o.lanes = d), o
			}
			function w5(a, o, s, f) {
				return (a = J3(7, a, f, o)), (a.lanes = s), a
			}
			function Z9(a, o, s, f) {
				return (a = J3(22, a, f, o)), (a.elementType = k), (a.lanes = s), (a.stateNode = {}), a
			}
			function Wi(a, o, s) {
				return (a = J3(6, a, null, o)), (a.lanes = s), a
			}
			function Yi(a, o, s) {
				return (
					(o = J3(4, a.children !== null ? a.children : [], a.key, o)),
					(o.lanes = s),
					(o.stateNode = {
						containerInfo: a.containerInfo,
						pendingChildren: null,
						implementation: a.implementation,
					}),
					o
				)
			}
			function CP(a, o, s, f, p) {
				;(this.tag = o),
					(this.containerInfo = a),
					(this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
					(this.timeoutHandle = c2),
					(this.callbackNode = this.pendingContext = this.context = null),
					(this.callbackPriority = 0),
					(this.eventTimes = Wa(0)),
					(this.expirationTimes = Wa(-1)),
					(this.entangledLanes =
						this.finishedLanes =
						this.mutableReadLanes =
						this.expiredLanes =
						this.pingedLanes =
						this.suspendedLanes =
						this.pendingLanes =
							0),
					(this.entanglements = Wa(0)),
					(this.identifierPrefix = f),
					(this.onRecoverableError = p),
					u2 && (this.mutableSourceEagerHydrationData = null)
			}
			function gh(a, o, s, f, p, d, y, N, R) {
				return (
					(a = new CP(a, o, s, N, R)),
					o === 1 ? ((o = 1), d === !0 && (o |= 8)) : (o = 0),
					(d = J3(3, null, null, o)),
					(a.current = d),
					(d.stateNode = a),
					(d.memoizedState = { element: f, isDehydrated: s, cache: null, transitions: null }),
					ti(d),
					a
				)
			}
			function Mh(a) {
				if (!a) return _6
				a = a._reactInternals
				e: {
					if (s2(a) !== a || a.tag !== 1) throw Error(C(170))
					var o = a
					do {
						switch (o.tag) {
							case 3:
								o = o.stateNode.context
								break e
							case 1:
								if (L3(o.type)) {
									o = o.stateNode.__reactInternalMemoizedMergedChildContext
									break e
								}
						}
						o = o.return
					} while (o !== null)
					throw Error(C(171))
				}
				if (a.tag === 1) {
					var s = a.type
					if (L3(s)) return jf(a, s, o)
				}
				return o
			}
			function zh(a) {
				var o = a._reactInternals
				if (o === void 0)
					throw typeof a.render == 'function' ? Error(C(188)) : ((a = Object.keys(a).join(',')), Error(C(268, a)))
				return (a = _2(o)), a === null ? null : a.stateNode
			}
			function Hh(a, o) {
				if (((a = a.memoizedState), a !== null && a.dehydrated !== null)) {
					var s = a.retryLane
					a.retryLane = s !== 0 && s < o ? s : o
				}
			}
			function Ki(a, o) {
				Hh(a, o), (a = a.alternate) && Hh(a, o)
			}
			function sP(a) {
				return (a = _2(a)), a === null ? null : a.stateNode
			}
			function lP() {
				return null
			}
			return (
				(t.attemptContinuousHydration = function (a) {
					if (a.tag === 13) {
						var o = o3()
						X3(a, 134217728, o), Ki(a, 134217728)
					}
				}),
				(t.attemptHydrationAtCurrentPriority = function (a) {
					if (a.tag === 13) {
						var o = o3(),
							s = T6(a)
						X3(a, s, o), Ki(a, s)
					}
				}),
				(t.attemptSynchronousHydration = function (a) {
					switch (a.tag) {
						case 3:
							var o = a.stateNode
							if (o.current.memoizedState.isDehydrated) {
								var s = X0(o.pendingLanes)
								s !== 0 && (Ya(o, s | 1), M3(o, A1()), (V2 & 6) === 0 && (V8(), D4()))
							}
							break
						case 13:
							var f = o3()
							lh(function () {
								return X3(a, 1, f)
							}),
								Ki(a, 1)
					}
				}),
				(t.batchedUpdates = function (a, o) {
					var s = V2
					V2 |= 1
					try {
						return a(o)
					} finally {
						;(V2 = s), V2 === 0 && (V8(), f9 && D4())
					}
				}),
				(t.createComponentSelector = function (a) {
					return { $$typeof: D9, value: a }
				}),
				(t.createContainer = function (a, o, s, f, p, d, y) {
					return gh(a, o, !1, null, s, f, p, d, y)
				}),
				(t.createHasPseudoClassSelector = function (a) {
					return { $$typeof: b9, value: a }
				}),
				(t.createHydrationContainer = function (a, o, s, f, p, d, y, N, R) {
					return (
						(a = gh(s, f, !0, a, p, d, y, N, R)),
						(a.context = Mh(null)),
						(s = a.current),
						(f = o3()),
						(p = T6(s)),
						(d = r6(f, p)),
						(d.callback = o ?? null),
						P6(s, d),
						(a.current.lanes = p),
						J0(a, p, f),
						M3(a, f),
						a
					)
				}),
				(t.createPortal = function (a, o, s) {
					var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
					return { $$typeof: h, key: f == null ? null : '' + f, children: a, containerInfo: o, implementation: s }
				}),
				(t.createRoleSelector = function (a) {
					return { $$typeof: F9, value: a }
				}),
				(t.createTestNameSelector = function (a) {
					return { $$typeof: I9, value: a }
				}),
				(t.createTextSelector = function (a) {
					return { $$typeof: B9, value: a }
				}),
				(t.deferredUpdates = function (a) {
					var o = P2,
						s = p1.transition
					try {
						return (p1.transition = null), (P2 = 16), a()
					} finally {
						;(P2 = o), (p1.transition = s)
					}
				}),
				(t.discreteUpdates = function (a, o, s, f, p) {
					var d = P2,
						y = p1.transition
					try {
						return (p1.transition = null), (P2 = 1), a(o, s, f, p)
					} finally {
						;(P2 = d), (p1.transition = y), V2 === 0 && V8()
					}
				}),
				(t.findAllNodes = Ti),
				(t.findBoundingRects = function (a, o) {
					if (!T4) throw Error(C(363))
					;(o = Ti(a, o)), (a = [])
					for (var s = 0; s < o.length; s++) a.push(k2(o[s]))
					for (o = a.length - 1; 0 < o; o--) {
						s = a[o]
						for (var f = s.x, p = f + s.width, d = s.y, y = d + s.height, N = o - 1; 0 <= N; N--)
							if (o !== N) {
								var R = a[N],
									W = R.x,
									r2 = W + R.width,
									L2 = R.y,
									h2 = L2 + R.height
								if (f >= W && d >= L2 && p <= r2 && y <= h2) {
									a.splice(o, 1)
									break
								} else if (f !== W || s.width !== R.width || h2 < d || L2 > y) {
									if (!(d !== L2 || s.height !== R.height || r2 < f || W > p)) {
										W > f && ((R.width += W - f), (R.x = f)), r2 < p && (R.width = p - W), a.splice(o, 1)
										break
									}
								} else {
									L2 > d && ((R.height += L2 - d), (R.y = d)), h2 < y && (R.height = y - L2), a.splice(o, 1)
									break
								}
							}
					}
					return a
				}),
				(t.findHostInstance = zh),
				(t.findHostInstanceWithNoPortals = function (a) {
					return (a = d2(a)), (a = a !== null ? N1(a) : null), a === null ? null : a.stateNode
				}),
				(t.findHostInstanceWithWarning = function (a) {
					return zh(a)
				}),
				(t.flushControlled = function (a) {
					var o = V2
					V2 |= 1
					var s = p1.transition,
						f = P2
					try {
						;(p1.transition = null), (P2 = 1), a()
					} finally {
						;(P2 = f), (p1.transition = s), (V2 = o), V2 === 0 && (V8(), D4())
					}
				}),
				(t.flushPassiveEffects = x5),
				(t.flushSync = lh),
				(t.focusWithin = function (a, o) {
					if (!T4) throw Error(C(363))
					for (a = Pi(a), o = ch(a, o), o = Array.from(o), a = 0; a < o.length; ) {
						var s = o[a++]
						if (!v4(s)) {
							if (s.tag === 5 && s8(s.stateNode)) return !0
							for (s = s.child; s !== null; ) o.push(s), (s = s.sibling)
						}
					}
					return !1
				}),
				(t.getCurrentUpdatePriority = function () {
					return P2
				}),
				(t.getFindAllNodesFailureDescription = function (a, o) {
					if (!T4) throw Error(C(363))
					var s = 0,
						f = []
					a = [Pi(a), 0]
					for (var p = 0; p < a.length; ) {
						var d = a[p++],
							y = a[p++],
							N = o[y]
						if ((d.tag !== 5 || !v4(d)) && (Ai(d, N) && (f.push(Ei(N)), y++, y > s && (s = y)), y < o.length))
							for (d = d.child; d !== null; ) a.push(d, y), (d = d.sibling)
					}
					if (s < o.length) {
						for (a = []; s < o.length; s++) a.push(Ei(o[s]))
						return (
							`findAllNodes was able to match part of the selector:
  ` +
							(f.join(' > ') +
								`

No matching component was found for:
  `) +
							a.join(' > ')
						)
					}
					return null
				}),
				(t.getPublicRootInstance = function (a) {
					if (((a = a.current), !a.child)) return null
					switch (a.child.tag) {
						case 5:
							return t1(a.child.stateNode)
						default:
							return a.child.stateNode
					}
				}),
				(t.injectIntoDevTools = function (a) {
					if (
						((a = {
							bundleType: a.bundleType,
							version: a.version,
							rendererPackageName: a.rendererPackageName,
							rendererConfig: a.rendererConfig,
							overrideHookState: null,
							overrideHookStateDeletePath: null,
							overrideHookStateRenamePath: null,
							overrideProps: null,
							overridePropsDeletePath: null,
							overridePropsRenamePath: null,
							setErrorHandler: null,
							setSuspenseHandler: null,
							scheduleUpdate: null,
							currentDispatcherRef: l.ReactCurrentDispatcher,
							findHostInstanceByFiber: sP,
							findFiberByHostInstance: a.findFiberByHostInstance || lP,
							findHostInstancesForRefresh: null,
							scheduleRefresh: null,
							scheduleRoot: null,
							setRefreshHandler: null,
							getCurrentFiber: null,
							reconcilerVersion: '18.0.0-fc46dba67-20220329',
						}),
						typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u')
					)
						a = !1
					else {
						var o = __REACT_DEVTOOLS_GLOBAL_HOOK__
						if (o.isDisabled || !o.supportsFiber) a = !0
						else {
							try {
								;(l9 = o.inject(a)), (R4 = o)
							} catch {}
							a = !!o.checkDCE
						}
					}
					return a
				}),
				(t.isAlreadyRendering = function () {
					return !1
				}),
				(t.observeVisibleRects = function (a, o, s, f) {
					if (!T4) throw Error(C(363))
					a = Ti(a, o)
					var p = m5(a, s, f).disconnect
					return {
						disconnect: function () {
							p()
						},
					}
				}),
				(t.registerMutableSourceForHydration = function (a, o) {
					var s = o._getVersion
					;(s = s(o._source)),
						a.mutableSourceEagerHydrationData == null
							? (a.mutableSourceEagerHydrationData = [o, s])
							: a.mutableSourceEagerHydrationData.push(o, s)
				}),
				(t.runWithPriority = function (a, o) {
					var s = P2
					try {
						return (P2 = a), o()
					} finally {
						P2 = s
					}
				}),
				(t.shouldError = function () {
					return null
				}),
				(t.shouldSuspend = function () {
					return !1
				}),
				(t.updateContainer = function (a, o, s, f) {
					var p = o.current,
						d = o3(),
						y = T6(p)
					return (
						(s = Mh(s)),
						o.context === null ? (o.context = s) : (o.pendingContext = s),
						(o = r6(d, y)),
						(o.payload = { element: a }),
						(f = f === void 0 ? null : f),
						f !== null && (o.callback = f),
						P6(p, o),
						(a = X3(p, y, d)),
						a !== null && d9(a, p, y),
						y
					)
				}),
				t
			)
		}
	})
	var hg = z((a42, ug) => {
		'use strict'
		ug.exports = fg()
	})
	var pg = z((X5) => {
		'use strict'
		X5.ConcurrentRoot = 1
		X5.ContinuousEventPriority = 4
		X5.DefaultEventPriority = 16
		X5.DiscreteEventPriority = 1
		X5.IdleEventPriority = 536870912
		X5.LegacyRoot = 0
	})
	var ws = z((o42, dg) => {
		'use strict'
		dg.exports = pg()
	})
	var Ns = z((w4) => {
		'use strict'
		Object.defineProperty(w4, '__esModule', { value: !0 })
		w4.updatePicture = w4.applyNodeProps = w4.toggleStrictMode = w4.EVENTS_NAMESPACE = void 0
		var oD = (u1(), Qi(yL)),
			vg = {
				children: !0,
				ref: !0,
				key: !0,
				style: !0,
				forwardedRef: !0,
				unstable_applyCache: !0,
				unstable_applyDrawHitFromCache: !0,
			},
			mg = !1,
			Lg = !1
		w4.EVENTS_NAMESPACE = '.react-konva-event'
		var gg = !1
		function cD(e) {
			gg = e
		}
		w4.toggleStrictMode = cD
		var CD = `ReactKonva: You have a Konva node with draggable = true and position defined but no onDragMove or onDragEnd events are handled.
Position of a node will be changed during drag&drop, so you should update state of the react app as well.
Consider to add onDragMove or onDragEnd events.
For more info see: https://github.com/konvajs/react-konva/issues/256
`,
			sD = `ReactKonva: You are using "zIndex" attribute for a Konva node.
react-konva may get confused with ordering. Just define correct order of elements in your render function of a component.
For more info see: https://github.com/konvajs/react-konva/issues/194
`,
			lD = {}
		function fD(e, r, t = lD) {
			if (
				(r === t && console.error('same props'),
				!mg && 'zIndex' in r && (console.warn(sD), (mg = !0)),
				!Lg && r.draggable)
			) {
				var n = r.x !== void 0 || r.y !== void 0,
					i = r.onDragEnd || r.onDragMove
				n && !i && (console.warn(CD), (Lg = !0))
			}
			for (var c in t)
				if (!vg[c]) {
					var C = c.slice(0, 2) === 'on',
						l = t[c] !== r[c]
					if (C && l) {
						var u = c.substr(2).toLowerCase()
						u.substr(0, 7) === 'content' && (u = 'content' + u.substr(7, 1).toUpperCase() + u.substr(8)),
							e.off(u, t[c])
					}
					var h = !r.hasOwnProperty(c)
					h && e.setAttr(c, void 0)
				}
			var v = gg || r._useStrictMode,
				g = {},
				m = !1
			let H = {}
			for (var c in r)
				if (!vg[c]) {
					var C = c.slice(0, 2) === 'on',
						L = t[c] !== r[c]
					if (C && L) {
						var u = c.substr(2).toLowerCase()
						u.substr(0, 7) === 'content' && (u = 'content' + u.substr(7, 1).toUpperCase() + u.substr(8)),
							r[c] && (H[u] = r[c])
					}
					!C && (r[c] !== t[c] || (v && r[c] !== e.getAttr(c))) && ((m = !0), (g[c] = r[c]))
				}
			m && (e.setAttrs(g), Mg(e))
			for (var u in H) e.on(u + w4.EVENTS_NAMESPACE, H[u])
		}
		w4.applyNodeProps = fD
		function Mg(e) {
			if (!oD.Konva.autoDrawEnabled) {
				var r = e.getLayer() || e.getStage()
				r && r.batchDraw()
			}
		}
		w4.updatePicture = Mg
	})
	var Vg = z((K) => {
		'use strict'
		var uD =
			(K && K.__importDefault) ||
			function (e) {
				return e && e.__esModule ? e : { default: e }
			}
		Object.defineProperty(K, '__esModule', { value: !0 })
		K.getCurrentEventPriority =
			K.detachDeletedInstance =
			K.clearContainer =
			K.unhideTextInstance =
			K.unhideInstance =
			K.hideTextInstance =
			K.hideInstance =
			K.commitUpdate =
			K.commitMount =
			K.commitTextUpdate =
			K.removeChildFromContainer =
			K.removeChild =
			K.insertInContainerBefore =
			K.insertBefore =
			K.appendChildToContainer =
			K.appendChild =
			K.supportsMutation =
			K.warnsIfNotActing =
			K.isPrimaryRenderer =
			K.shouldSetTextContent =
			K.noTimeout =
			K.cancelTimeout =
			K.scheduleTimeout =
			K.getChildHostContext =
			K.getRootHostContext =
			K.shouldDeprioritizeSubtree =
			K.resetTextContent =
			K.resetAfterCommit =
			K.prepareUpdate =
			K.preparePortalMount =
			K.prepareForCommit =
			K.getPublicInstance =
			K.finalizeInitialChildren =
			K.createTextInstance =
			K.createInstance =
			K.appendInitialChild =
			K.run =
			K.idlePriority =
			K.now =
				void 0
		var _s = uD((xs(), Qi(Ss))),
			C4 = Ns(),
			ks = sr()
		Object.defineProperty(K, 'now', {
			enumerable: !0,
			get: function () {
				return ks.unstable_now
			},
		})
		Object.defineProperty(K, 'idlePriority', {
			enumerable: !0,
			get: function () {
				return ks.unstable_IdlePriority
			},
		})
		Object.defineProperty(K, 'run', {
			enumerable: !0,
			get: function () {
				return ks.unstable_runWithPriority
			},
		})
		var hD = ws(),
			zg = {},
			pD = {}
		_s.default.Node.prototype._applyProps = C4.applyNodeProps
		function dD(e, r) {
			if (typeof r == 'string') {
				console.error(`Do not use plain text as child of Konva.Node. You are using text: ${r}`)
				return
			}
			e.add(r), (0, C4.updatePicture)(e)
		}
		K.appendInitialChild = dD
		function vD(e, r, t) {
			let n = _s.default[e]
			n ||
				(console.error(
					`Konva has no node with the type ${e}. Group will be used instead. If you use minimal version of react-konva, just import required nodes into Konva: "import "konva/lib/shapes/${e}"  If you want to render DOM elements as part of canvas tree take a look into this demo: https://konvajs.github.io/docs/react/DOM_Portal.html`,
				),
				(n = _s.default.Group))
			let i = {},
				c = {}
			for (var C in r) {
				var l = C.slice(0, 2) === 'on'
				l ? (c[C] = r[C]) : (i[C] = r[C])
			}
			let u = new n(i)
			return (0, C4.applyNodeProps)(u, c), u
		}
		K.createInstance = vD
		function mD(e, r, t) {
			console.error(`Text components are not supported for now in ReactKonva. Your text is: "${e}"`)
		}
		K.createTextInstance = mD
		function LD(e, r, t) {
			return !1
		}
		K.finalizeInitialChildren = LD
		function gD(e) {
			return e
		}
		K.getPublicInstance = gD
		function MD() {
			return null
		}
		K.prepareForCommit = MD
		function zD() {
			return null
		}
		K.preparePortalMount = zD
		function HD(e, r, t, n) {
			return pD
		}
		K.prepareUpdate = HD
		function VD() {}
		K.resetAfterCommit = VD
		function yD(e) {}
		K.resetTextContent = yD
		function SD(e, r) {
			return !1
		}
		K.shouldDeprioritizeSubtree = SD
		function xD() {
			return zg
		}
		K.getRootHostContext = xD
		function wD() {
			return zg
		}
		K.getChildHostContext = wD
		K.scheduleTimeout = setTimeout
		K.cancelTimeout = clearTimeout
		K.noTimeout = -1
		function ND(e, r) {
			return !1
		}
		K.shouldSetTextContent = ND
		K.isPrimaryRenderer = !1
		K.warnsIfNotActing = !0
		K.supportsMutation = !0
		function _D(e, r) {
			r.parent === e ? r.moveToTop() : e.add(r), (0, C4.updatePicture)(e)
		}
		K.appendChild = _D
		function kD(e, r) {
			r.parent === e ? r.moveToTop() : e.add(r), (0, C4.updatePicture)(e)
		}
		K.appendChildToContainer = kD
		function Hg(e, r, t) {
			r._remove(), e.add(r), r.setZIndex(t.getZIndex()), (0, C4.updatePicture)(e)
		}
		K.insertBefore = Hg
		function PD(e, r, t) {
			Hg(e, r, t)
		}
		K.insertInContainerBefore = PD
		function AD(e, r) {
			r.destroy(), r.off(C4.EVENTS_NAMESPACE), (0, C4.updatePicture)(e)
		}
		K.removeChild = AD
		function ED(e, r) {
			r.destroy(), r.off(C4.EVENTS_NAMESPACE), (0, C4.updatePicture)(e)
		}
		K.removeChildFromContainer = ED
		function TD(e, r, t) {
			console.error(`Text components are not yet supported in ReactKonva. You text is: "${t}"`)
		}
		K.commitTextUpdate = TD
		function RD(e, r, t) {}
		K.commitMount = RD
		function OD(e, r, t, n, i) {
			;(0, C4.applyNodeProps)(e, i, n)
		}
		K.commitUpdate = OD
		function DD(e) {
			e.hide(), (0, C4.updatePicture)(e)
		}
		K.hideInstance = DD
		function bD(e) {}
		K.hideTextInstance = bD
		function FD(e, r) {
			;(r.visible == null || r.visible) && e.show()
		}
		K.unhideInstance = FD
		function ID(e, r) {}
		K.unhideTextInstance = ID
		function BD(e) {}
		K.clearContainer = BD
		function qD() {}
		K.detachDeletedInstance = qD
		var UD = () => hD.DefaultEventPriority
		K.getCurrentEventPriority = UD
	})
	var W1 = z((n2) => {
		'use strict'
		var jD =
				(n2 && n2.__createBinding) ||
				(Object.create
					? function (e, r, t, n) {
							n === void 0 && (n = t)
							var i = Object.getOwnPropertyDescriptor(r, t)
							;(!i || ('get' in i ? !r.__esModule : i.writable || i.configurable)) &&
								(i = {
									enumerable: !0,
									get: function () {
										return r[t]
									},
								}),
								Object.defineProperty(e, n, i)
					  }
					: function (e, r, t, n) {
							n === void 0 && (n = t), (e[n] = r[t])
					  }),
			GD =
				(n2 && n2.__setModuleDefault) ||
				(Object.create
					? function (e, r) {
							Object.defineProperty(e, 'default', { enumerable: !0, value: r })
					  }
					: function (e, r) {
							e.default = r
					  }),
			WD =
				(n2 && n2.__importStar) ||
				function (e) {
					if (e && e.__esModule) return e
					var r = {}
					if (e != null)
						for (var t in e) t !== 'default' && Object.prototype.hasOwnProperty.call(e, t) && jD(r, e, t)
					return GD(r, e), r
				},
			Ps =
				(n2 && n2.__importDefault) ||
				function (e) {
					return e && e.__esModule ? e : { default: e }
				}
		Object.defineProperty(n2, '__esModule', { value: !0 })
		n2.useStrictMode =
			n2.Stage =
			n2.KonvaRenderer =
			n2.Transformer =
			n2.Shape =
			n2.Arrow =
			n2.RegularPolygon =
			n2.Path =
			n2.Tag =
			n2.Arc =
			n2.Ring =
			n2.Star =
			n2.TextPath =
			n2.Text =
			n2.Image =
			n2.Sprite =
			n2.Line =
			n2.Wedge =
			n2.Ellipse =
			n2.Circle =
			n2.Rect =
			n2.Label =
			n2.Group =
			n2.FastLayer =
			n2.Layer =
				void 0
		var N4 = Ps(y2()),
			yg = Ps((xs(), Qi(Ss))),
			YD = Ps(hg()),
			KD = ws(),
			QD = WD(Vg()),
			Sg = Ns()
		function XD(e) {
			let r = N4.default.useRef()
			return (
				N4.default.useLayoutEffect(() => {
					r.current = e
				}),
				r.current
			)
		}
		var JD = (e) => {
			let r = N4.default.useRef(),
				t = N4.default.useRef(),
				n = N4.default.useRef(),
				i = XD(e),
				c = (C) => {
					let { forwardedRef: l } = e
					!l || (typeof l == 'function' ? l(C) : (l.current = C))
				}
			return (
				N4.default.useLayoutEffect(
					() => (
						(t.current = new yg.default.Stage({ width: e.width, height: e.height, container: r.current })),
						c(t.current),
						(n.current = n2.KonvaRenderer.createContainer(t.current, KD.LegacyRoot, !1, null)),
						n2.KonvaRenderer.updateContainer(e.children, n.current),
						() => {
							!yg.default.isBrowser ||
								(c(null), n2.KonvaRenderer.updateContainer(null, n.current, null), t.current.destroy())
						}
					),
					[],
				),
				N4.default.useLayoutEffect(() => {
					c(t.current),
						(0, Sg.applyNodeProps)(t.current, e, i),
						n2.KonvaRenderer.updateContainer(e.children, n.current, null)
				}),
				N4.default.createElement('div', {
					ref: r,
					accessKey: e.accessKey,
					className: e.className,
					role: e.role,
					style: e.style,
					tabIndex: e.tabIndex,
					title: e.title,
				})
			)
		}
		n2.Layer = 'Layer'
		n2.FastLayer = 'FastLayer'
		n2.Group = 'Group'
		n2.Label = 'Label'
		n2.Rect = 'Rect'
		n2.Circle = 'Circle'
		n2.Ellipse = 'Ellipse'
		n2.Wedge = 'Wedge'
		n2.Line = 'Line'
		n2.Sprite = 'Sprite'
		n2.Image = 'Image'
		n2.Text = 'Text'
		n2.TextPath = 'TextPath'
		n2.Star = 'Star'
		n2.Ring = 'Ring'
		n2.Arc = 'Arc'
		n2.Tag = 'Tag'
		n2.Path = 'Path'
		n2.RegularPolygon = 'RegularPolygon'
		n2.Arrow = 'Arrow'
		n2.Shape = 'Shape'
		n2.Transformer = 'Transformer'
		n2.KonvaRenderer = (0, YD.default)(QD)
		n2.KonvaRenderer.injectIntoDevTools({
			findHostInstanceByFiber: () => null,
			bundleType: 0,
			version: N4.default.version,
			rendererPackageName: 'react-konva',
		})
		n2.Stage = N4.default.forwardRef((e, r) => N4.default.createElement(JD, { ...e, forwardedRef: r }))
		n2.useStrictMode = Sg.toggleStrictMode
	})
	var Eg = z((N3) => {
		N3.aliasToReal = {
			each: 'forEach',
			eachRight: 'forEachRight',
			entries: 'toPairs',
			entriesIn: 'toPairsIn',
			extend: 'assignIn',
			extendAll: 'assignInAll',
			extendAllWith: 'assignInAllWith',
			extendWith: 'assignInWith',
			first: 'head',
			conforms: 'conformsTo',
			matches: 'isMatch',
			property: 'get',
			__: 'placeholder',
			F: 'stubFalse',
			T: 'stubTrue',
			all: 'every',
			allPass: 'overEvery',
			always: 'constant',
			any: 'some',
			anyPass: 'overSome',
			apply: 'spread',
			assoc: 'set',
			assocPath: 'set',
			complement: 'negate',
			compose: 'flowRight',
			contains: 'includes',
			dissoc: 'unset',
			dissocPath: 'unset',
			dropLast: 'dropRight',
			dropLastWhile: 'dropRightWhile',
			equals: 'isEqual',
			identical: 'eq',
			indexBy: 'keyBy',
			init: 'initial',
			invertObj: 'invert',
			juxt: 'over',
			omitAll: 'omit',
			nAry: 'ary',
			path: 'get',
			pathEq: 'matchesProperty',
			pathOr: 'getOr',
			paths: 'at',
			pickAll: 'pick',
			pipe: 'flow',
			pluck: 'map',
			prop: 'get',
			propEq: 'matchesProperty',
			propOr: 'getOr',
			props: 'at',
			symmetricDifference: 'xor',
			symmetricDifferenceBy: 'xorBy',
			symmetricDifferenceWith: 'xorWith',
			takeLast: 'takeRight',
			takeLastWhile: 'takeRightWhile',
			unapply: 'rest',
			unnest: 'flatten',
			useWith: 'overArgs',
			where: 'conformsTo',
			whereEq: 'isMatch',
			zipObj: 'zipObject',
		}
		N3.aryMethod = {
			1: [
				'assignAll',
				'assignInAll',
				'attempt',
				'castArray',
				'ceil',
				'create',
				'curry',
				'curryRight',
				'defaultsAll',
				'defaultsDeepAll',
				'floor',
				'flow',
				'flowRight',
				'fromPairs',
				'invert',
				'iteratee',
				'memoize',
				'method',
				'mergeAll',
				'methodOf',
				'mixin',
				'nthArg',
				'over',
				'overEvery',
				'overSome',
				'rest',
				'reverse',
				'round',
				'runInContext',
				'spread',
				'template',
				'trim',
				'trimEnd',
				'trimStart',
				'uniqueId',
				'words',
				'zipAll',
			],
			2: [
				'add',
				'after',
				'ary',
				'assign',
				'assignAllWith',
				'assignIn',
				'assignInAllWith',
				'at',
				'before',
				'bind',
				'bindAll',
				'bindKey',
				'chunk',
				'cloneDeepWith',
				'cloneWith',
				'concat',
				'conformsTo',
				'countBy',
				'curryN',
				'curryRightN',
				'debounce',
				'defaults',
				'defaultsDeep',
				'defaultTo',
				'delay',
				'difference',
				'divide',
				'drop',
				'dropRight',
				'dropRightWhile',
				'dropWhile',
				'endsWith',
				'eq',
				'every',
				'filter',
				'find',
				'findIndex',
				'findKey',
				'findLast',
				'findLastIndex',
				'findLastKey',
				'flatMap',
				'flatMapDeep',
				'flattenDepth',
				'forEach',
				'forEachRight',
				'forIn',
				'forInRight',
				'forOwn',
				'forOwnRight',
				'get',
				'groupBy',
				'gt',
				'gte',
				'has',
				'hasIn',
				'includes',
				'indexOf',
				'intersection',
				'invertBy',
				'invoke',
				'invokeMap',
				'isEqual',
				'isMatch',
				'join',
				'keyBy',
				'lastIndexOf',
				'lt',
				'lte',
				'map',
				'mapKeys',
				'mapValues',
				'matchesProperty',
				'maxBy',
				'meanBy',
				'merge',
				'mergeAllWith',
				'minBy',
				'multiply',
				'nth',
				'omit',
				'omitBy',
				'overArgs',
				'pad',
				'padEnd',
				'padStart',
				'parseInt',
				'partial',
				'partialRight',
				'partition',
				'pick',
				'pickBy',
				'propertyOf',
				'pull',
				'pullAll',
				'pullAt',
				'random',
				'range',
				'rangeRight',
				'rearg',
				'reject',
				'remove',
				'repeat',
				'restFrom',
				'result',
				'sampleSize',
				'some',
				'sortBy',
				'sortedIndex',
				'sortedIndexOf',
				'sortedLastIndex',
				'sortedLastIndexOf',
				'sortedUniqBy',
				'split',
				'spreadFrom',
				'startsWith',
				'subtract',
				'sumBy',
				'take',
				'takeRight',
				'takeRightWhile',
				'takeWhile',
				'tap',
				'throttle',
				'thru',
				'times',
				'trimChars',
				'trimCharsEnd',
				'trimCharsStart',
				'truncate',
				'union',
				'uniqBy',
				'uniqWith',
				'unset',
				'unzipWith',
				'without',
				'wrap',
				'xor',
				'zip',
				'zipObject',
				'zipObjectDeep',
			],
			3: [
				'assignInWith',
				'assignWith',
				'clamp',
				'differenceBy',
				'differenceWith',
				'findFrom',
				'findIndexFrom',
				'findLastFrom',
				'findLastIndexFrom',
				'getOr',
				'includesFrom',
				'indexOfFrom',
				'inRange',
				'intersectionBy',
				'intersectionWith',
				'invokeArgs',
				'invokeArgsMap',
				'isEqualWith',
				'isMatchWith',
				'flatMapDepth',
				'lastIndexOfFrom',
				'mergeWith',
				'orderBy',
				'padChars',
				'padCharsEnd',
				'padCharsStart',
				'pullAllBy',
				'pullAllWith',
				'rangeStep',
				'rangeStepRight',
				'reduce',
				'reduceRight',
				'replace',
				'set',
				'slice',
				'sortedIndexBy',
				'sortedLastIndexBy',
				'transform',
				'unionBy',
				'unionWith',
				'update',
				'xorBy',
				'xorWith',
				'zipWith',
			],
			4: ['fill', 'setWith', 'updateWith'],
		}
		N3.aryRearg = { 2: [1, 0], 3: [2, 0, 1], 4: [3, 2, 0, 1] }
		N3.iterateeAry = {
			dropRightWhile: 1,
			dropWhile: 1,
			every: 1,
			filter: 1,
			find: 1,
			findFrom: 1,
			findIndex: 1,
			findIndexFrom: 1,
			findKey: 1,
			findLast: 1,
			findLastFrom: 1,
			findLastIndex: 1,
			findLastIndexFrom: 1,
			findLastKey: 1,
			flatMap: 1,
			flatMapDeep: 1,
			flatMapDepth: 1,
			forEach: 1,
			forEachRight: 1,
			forIn: 1,
			forInRight: 1,
			forOwn: 1,
			forOwnRight: 1,
			map: 1,
			mapKeys: 1,
			mapValues: 1,
			partition: 1,
			reduce: 2,
			reduceRight: 2,
			reject: 1,
			remove: 1,
			some: 1,
			takeRightWhile: 1,
			takeWhile: 1,
			times: 1,
			transform: 2,
		}
		N3.iterateeRearg = { mapKeys: [1], reduceRight: [1, 0] }
		N3.methodRearg = {
			assignInAllWith: [1, 0],
			assignInWith: [1, 2, 0],
			assignAllWith: [1, 0],
			assignWith: [1, 2, 0],
			differenceBy: [1, 2, 0],
			differenceWith: [1, 2, 0],
			getOr: [2, 1, 0],
			intersectionBy: [1, 2, 0],
			intersectionWith: [1, 2, 0],
			isEqualWith: [1, 2, 0],
			isMatchWith: [2, 1, 0],
			mergeAllWith: [1, 0],
			mergeWith: [1, 2, 0],
			padChars: [2, 1, 0],
			padCharsEnd: [2, 1, 0],
			padCharsStart: [2, 1, 0],
			pullAllBy: [2, 1, 0],
			pullAllWith: [2, 1, 0],
			rangeStep: [1, 2, 0],
			rangeStepRight: [1, 2, 0],
			setWith: [3, 1, 2, 0],
			sortedIndexBy: [2, 1, 0],
			sortedLastIndexBy: [2, 1, 0],
			unionBy: [1, 2, 0],
			unionWith: [1, 2, 0],
			updateWith: [3, 1, 2, 0],
			xorBy: [1, 2, 0],
			xorWith: [1, 2, 0],
			zipWith: [1, 2, 0],
		}
		N3.methodSpread = {
			assignAll: { start: 0 },
			assignAllWith: { start: 0 },
			assignInAll: { start: 0 },
			assignInAllWith: { start: 0 },
			defaultsAll: { start: 0 },
			defaultsDeepAll: { start: 0 },
			invokeArgs: { start: 2 },
			invokeArgsMap: { start: 2 },
			mergeAll: { start: 0 },
			mergeAllWith: { start: 0 },
			partial: { start: 1 },
			partialRight: { start: 1 },
			without: { start: 1 },
			zipAll: { start: 0 },
		}
		N3.mutate = {
			array: {
				fill: !0,
				pull: !0,
				pullAll: !0,
				pullAllBy: !0,
				pullAllWith: !0,
				pullAt: !0,
				remove: !0,
				reverse: !0,
			},
			object: {
				assign: !0,
				assignAll: !0,
				assignAllWith: !0,
				assignIn: !0,
				assignInAll: !0,
				assignInAllWith: !0,
				assignInWith: !0,
				assignWith: !0,
				defaults: !0,
				defaultsAll: !0,
				defaultsDeep: !0,
				defaultsDeepAll: !0,
				merge: !0,
				mergeAll: !0,
				mergeAllWith: !0,
				mergeWith: !0,
			},
			set: { set: !0, setWith: !0, unset: !0, update: !0, updateWith: !0 },
		}
		N3.realToAlias = (function () {
			var e = Object.prototype.hasOwnProperty,
				r = N3.aliasToReal,
				t = {}
			for (var n in r) {
				var i = r[n]
				e.call(t, i) ? t[i].push(n) : (t[i] = [n])
			}
			return t
		})()
		N3.remap = {
			assignAll: 'assign',
			assignAllWith: 'assignWith',
			assignInAll: 'assignIn',
			assignInAllWith: 'assignInWith',
			curryN: 'curry',
			curryRightN: 'curryRight',
			defaultsAll: 'defaults',
			defaultsDeepAll: 'defaultsDeep',
			findFrom: 'find',
			findIndexFrom: 'findIndex',
			findLastFrom: 'findLast',
			findLastIndexFrom: 'findLastIndex',
			getOr: 'get',
			includesFrom: 'includes',
			indexOfFrom: 'indexOf',
			invokeArgs: 'invoke',
			invokeArgsMap: 'invokeMap',
			lastIndexOfFrom: 'lastIndexOf',
			mergeAll: 'merge',
			mergeAllWith: 'mergeWith',
			padChars: 'pad',
			padCharsEnd: 'padEnd',
			padCharsStart: 'padStart',
			propertyOf: 'get',
			rangeStep: 'range',
			rangeStepRight: 'rangeRight',
			restFrom: 'rest',
			spreadFrom: 'spread',
			trimChars: 'trim',
			trimCharsEnd: 'trimEnd',
			trimCharsStart: 'trimStart',
			zipAll: 'zip',
		}
		N3.skipFixed = { castArray: !0, flow: !0, flowRight: !0, iteratee: !0, mixin: !0, rearg: !0, runInContext: !0 }
		N3.skipRearg = {
			add: !0,
			assign: !0,
			assignIn: !0,
			bind: !0,
			bindKey: !0,
			concat: !0,
			difference: !0,
			divide: !0,
			eq: !0,
			gt: !0,
			gte: !0,
			isEqual: !0,
			lt: !0,
			lte: !0,
			matchesProperty: !0,
			merge: !0,
			multiply: !0,
			overArgs: !0,
			partial: !0,
			partialRight: !0,
			propertyOf: !0,
			random: !0,
			range: !0,
			rangeRight: !0,
			subtract: !0,
			zip: !0,
			zipObject: !0,
			zipObjectDeep: !0,
		}
	})
	var _e = z((L42, Tg) => {
		Tg.exports = {}
	})
	var bg = z((g42, Dg) => {
		var w1 = Eg(),
			eb = _e(),
			Rg = Array.prototype.push
		function rb(e, r) {
			return r == 2
				? function (t, n) {
						return e.apply(void 0, arguments)
				  }
				: function (t) {
						return e.apply(void 0, arguments)
				  }
		}
		function As(e, r) {
			return r == 2
				? function (t, n) {
						return e(t, n)
				  }
				: function (t) {
						return e(t)
				  }
		}
		function Og(e) {
			for (var r = e ? e.length : 0, t = Array(r); r--; ) t[r] = e[r]
			return t
		}
		function tb(e) {
			return function (r) {
				return e({}, r)
			}
		}
		function nb(e, r) {
			return function () {
				for (var t = arguments.length, n = t - 1, i = Array(t); t--; ) i[t] = arguments[t]
				var c = i[r],
					C = i.slice(0, r)
				return c && Rg.apply(C, c), r != n && Rg.apply(C, i.slice(r + 1)), e.apply(this, C)
			}
		}
		function Es(e, r) {
			return function () {
				var t = arguments.length
				if (!!t) {
					for (var n = Array(t); t--; ) n[t] = arguments[t]
					var i = (n[0] = r.apply(void 0, n))
					return e.apply(void 0, n), i
				}
			}
		}
		function Ts(e, r, t, n) {
			var i = typeof r == 'function',
				c = r === Object(r)
			if ((c && ((n = t), (t = r), (r = void 0)), t == null)) throw new TypeError()
			n || (n = {})
			var C = {
					cap: 'cap' in n ? n.cap : !0,
					curry: 'curry' in n ? n.curry : !0,
					fixed: 'fixed' in n ? n.fixed : !0,
					immutable: 'immutable' in n ? n.immutable : !0,
					rearg: 'rearg' in n ? n.rearg : !0,
				},
				l = i ? t : eb,
				u = 'curry' in n && n.curry,
				h = 'fixed' in n && n.fixed,
				v = 'rearg' in n && n.rearg,
				g = i ? t.runInContext() : void 0,
				m = i
					? t
					: {
							ary: e.ary,
							assign: e.assign,
							clone: e.clone,
							curry: e.curry,
							forEach: e.forEach,
							isArray: e.isArray,
							isError: e.isError,
							isFunction: e.isFunction,
							isWeakMap: e.isWeakMap,
							iteratee: e.iteratee,
							keys: e.keys,
							rearg: e.rearg,
							toInteger: e.toInteger,
							toPath: e.toPath,
					  },
				H = m.ary,
				L = m.assign,
				x = m.clone,
				w = m.curry,
				V = m.forEach,
				M = m.isArray,
				S = m.isError,
				k = m.isFunction,
				D = m.isWeakMap,
				b = m.keys,
				I = m.rearg,
				B = m.toInteger,
				s2 = m.toPath,
				Y = b(w1.aryMethod),
				d2 = {
					castArray: function (O) {
						return function () {
							var j = arguments[0]
							return M(j) ? O(Og(j)) : O.apply(void 0, arguments)
						}
					},
					iteratee: function (O) {
						return function () {
							var j = arguments[0],
								q = arguments[1],
								e2 = O(j, q),
								c2 = e2.length
							return C.cap && typeof q == 'number'
								? ((q = q > 2 ? q - 2 : 1), c2 && c2 <= q ? e2 : As(e2, q))
								: e2
						}
					},
					mixin: function (O) {
						return function (j) {
							var q = this
							if (!k(q)) return O(q, Object(j))
							var e2 = []
							return (
								V(b(j), function (c2) {
									k(j[c2]) && e2.push([c2, q.prototype[c2]])
								}),
								O(q, Object(j)),
								V(e2, function (c2) {
									var f2 = c2[1]
									k(f2) ? (q.prototype[c2[0]] = f2) : delete q.prototype[c2[0]]
								}),
								q
							)
						}
					},
					nthArg: function (O) {
						return function (j) {
							var q = j < 0 ? 1 : B(j) + 1
							return w(O(j), q)
						}
					},
					rearg: function (O) {
						return function (j, q) {
							var e2 = q ? q.length : 0
							return w(O(j, q), e2)
						}
					},
					runInContext: function (O) {
						return function (j) {
							return Ts(e, O(j), n)
						}
					},
				}
			function _2(O, j) {
				if (C.cap) {
					var q = w1.iterateeRearg[O]
					if (q) return a2(j, q)
					var e2 = !i && w1.iterateeAry[O]
					if (e2) return p2(j, e2)
				}
				return j
			}
			function T2(O, j, q) {
				return u || (C.curry && q > 1) ? w(j, q) : j
			}
			function N1(O, j, q) {
				if (C.fixed && (h || !w1.skipFixed[O])) {
					var e2 = w1.methodSpread[O],
						c2 = e2 && e2.start
					return c2 === void 0 ? H(j, q) : nb(j, c2)
				}
				return j
			}
			function F2(O, j, q) {
				return C.rearg && q > 1 && (v || !w1.skipRearg[O]) ? I(j, w1.methodRearg[O] || w1.aryRearg[q]) : j
			}
			function t1(O, j) {
				j = s2(j)
				for (var q = -1, e2 = j.length, c2 = e2 - 1, f2 = x(Object(O)), Z = f2; Z != null && ++q < e2; ) {
					var l2 = j[q],
						u2 = Z[l2]
					u2 != null && !(k(u2) || S(u2) || D(u2)) && (Z[l2] = x(q == c2 ? u2 : Object(u2))), (Z = Z[l2])
				}
				return f2
			}
			function C1(O) {
				return A.runInContext.convert(O)(void 0)
			}
			function s1(O, j) {
				var q = w1.aliasToReal[O] || O,
					e2 = w1.remap[q] || q,
					c2 = n
				return function (f2) {
					var Z = i ? g : m,
						l2 = i ? g[e2] : j,
						u2 = L(L({}, c2), f2)
					return Ts(Z, q, l2, u2)
				}
			}
			function p2(O, j) {
				return v2(O, function (q) {
					return typeof q == 'function' ? As(q, j) : q
				})
			}
			function a2(O, j) {
				return v2(O, function (q) {
					var e2 = j.length
					return rb(I(As(q, e2), j), e2)
				})
			}
			function v2(O, j) {
				return function () {
					var q = arguments.length
					if (!q) return O()
					for (var e2 = Array(q); q--; ) e2[q] = arguments[q]
					var c2 = C.rearg ? 0 : q - 1
					return (e2[c2] = j(e2[c2])), O.apply(void 0, e2)
				}
			}
			function H2(O, j, q) {
				var e2,
					c2 = w1.aliasToReal[O] || O,
					f2 = j,
					Z = d2[c2]
				return (
					Z
						? (f2 = Z(j))
						: C.immutable &&
						  (w1.mutate.array[c2]
								? (f2 = Es(j, Og))
								: w1.mutate.object[c2]
								? (f2 = Es(j, tb(j)))
								: w1.mutate.set[c2] && (f2 = Es(j, t1))),
					V(Y, function (l2) {
						return (
							V(w1.aryMethod[l2], function (u2) {
								if (c2 == u2) {
									var Y2 = w1.methodSpread[c2],
										z1 = Y2 && Y2.afterRearg
									return (
										(e2 = z1 ? N1(c2, F2(c2, f2, l2), l2) : F2(c2, N1(c2, f2, l2), l2)),
										(e2 = _2(c2, e2)),
										(e2 = T2(c2, e2, l2)),
										!1
									)
								}
							}),
							!e2
						)
					}),
					e2 || (e2 = f2),
					e2 == j &&
						(e2 = u
							? w(e2, 1)
							: function () {
									return j.apply(this, arguments)
							  }),
					(e2.convert = s1(c2, j)),
					(e2.placeholder = j.placeholder = q),
					e2
				)
			}
			if (!c) return H2(r, t, l)
			var A = t,
				w2 = []
			return (
				V(Y, function (O) {
					V(w1.aryMethod[O], function (j) {
						var q = A[w1.remap[j] || j]
						q && w2.push([j, H2(j, q, A)])
					})
				}),
				V(b(A), function (O) {
					var j = A[O]
					if (typeof j == 'function') {
						for (var q = w2.length; q--; ) if (w2[q][0] == O) return
						;(j.convert = s1(O, j)), w2.push([O, j])
					}
				}),
				V(w2, function (O) {
					A[O[0]] = O[1]
				}),
				(A.convert = C1),
				(A.placeholder = A),
				V(b(A), function (O) {
					V(w1.realToAlias[O] || [], function (j) {
						A[j] = A[O]
					})
				}),
				A
			)
		}
		Dg.exports = Ts
	})
	var Ln = z((M42, Fg) => {
		function ab(e) {
			return e
		}
		Fg.exports = ab
	})
	var Rs = z((z42, Ig) => {
		var ib = typeof global == 'object' && global && global.Object === Object && global
		Ig.exports = ib
	})
	var h3 = z((H42, Bg) => {
		var ob = Rs(),
			cb = typeof self == 'object' && self && self.Object === Object && self,
			Cb = ob || cb || Function('return this')()
		Bg.exports = Cb
	})
	var J5 = z((V42, qg) => {
		var sb = h3(),
			lb = sb.Symbol
		qg.exports = lb
	})
	var Wg = z((y42, Gg) => {
		var Ug = J5(),
			jg = Object.prototype,
			fb = jg.hasOwnProperty,
			ub = jg.toString,
			ke = Ug ? Ug.toStringTag : void 0
		function hb(e) {
			var r = fb.call(e, ke),
				t = e[ke]
			try {
				e[ke] = void 0
				var n = !0
			} catch {}
			var i = ub.call(e)
			return n && (r ? (e[ke] = t) : delete e[ke]), i
		}
		Gg.exports = hb
	})
	var Kg = z((S42, Yg) => {
		var pb = Object.prototype,
			db = pb.toString
		function vb(e) {
			return db.call(e)
		}
		Yg.exports = vb
	})
	var C5 = z((x42, Jg) => {
		var Qg = J5(),
			mb = Wg(),
			Lb = Kg(),
			gb = '[object Null]',
			Mb = '[object Undefined]',
			Xg = Qg ? Qg.toStringTag : void 0
		function zb(e) {
			return e == null ? (e === void 0 ? Mb : gb) : Xg && Xg in Object(e) ? mb(e) : Lb(e)
		}
		Jg.exports = zb
	})
	var H6 = z((w42, Zg) => {
		function Hb(e) {
			var r = typeof e
			return e != null && (r == 'object' || r == 'function')
		}
		Zg.exports = Hb
	})
	var gn = z((N42, $g) => {
		var Vb = C5(),
			yb = H6(),
			Sb = '[object AsyncFunction]',
			xb = '[object Function]',
			wb = '[object GeneratorFunction]',
			Nb = '[object Proxy]'
		function _b(e) {
			if (!yb(e)) return !1
			var r = Vb(e)
			return r == xb || r == wb || r == Sb || r == Nb
		}
		$g.exports = _b
	})
	var rM = z((_42, eM) => {
		var kb = h3(),
			Pb = kb['__core-js_shared__']
		eM.exports = Pb
	})
	var aM = z((k42, nM) => {
		var Os = rM(),
			tM = (function () {
				var e = /[^.]+$/.exec((Os && Os.keys && Os.keys.IE_PROTO) || '')
				return e ? 'Symbol(src)_1.' + e : ''
			})()
		function Ab(e) {
			return !!tM && tM in e
		}
		nM.exports = Ab
	})
	var Ds = z((P42, iM) => {
		var Eb = Function.prototype,
			Tb = Eb.toString
		function Rb(e) {
			if (e != null) {
				try {
					return Tb.call(e)
				} catch {}
				try {
					return e + ''
				} catch {}
			}
			return ''
		}
		iM.exports = Rb
	})
	var cM = z((A42, oM) => {
		var Ob = gn(),
			Db = aM(),
			bb = H6(),
			Fb = Ds(),
			Ib = /[\\^$.*+?()[\]{}|]/g,
			Bb = /^\[object .+?Constructor\]$/,
			qb = Function.prototype,
			Ub = Object.prototype,
			jb = qb.toString,
			Gb = Ub.hasOwnProperty,
			Wb = RegExp(
				'^' +
					jb
						.call(Gb)
						.replace(Ib, '\\$&')
						.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
					'$',
			)
		function Yb(e) {
			if (!bb(e) || Db(e)) return !1
			var r = Ob(e) ? Wb : Bb
			return r.test(Fb(e))
		}
		oM.exports = Yb
	})
	var sM = z((E42, CM) => {
		function Kb(e, r) {
			return e?.[r]
		}
		CM.exports = Kb
	})
	var s5 = z((T42, lM) => {
		var Qb = cM(),
			Xb = sM()
		function Jb(e, r) {
			var t = Xb(e, r)
			return Qb(t) ? t : void 0
		}
		lM.exports = Jb
	})
	var bs = z((R42, fM) => {
		var Zb = s5(),
			$b = h3(),
			eF = Zb($b, 'WeakMap')
		fM.exports = eF
	})
	var Fs = z((O42, hM) => {
		var uM = bs(),
			rF = uM && new uM()
		hM.exports = rF
	})
	var Is = z((D42, dM) => {
		var tF = Ln(),
			pM = Fs(),
			nF = pM
				? function (e, r) {
						return pM.set(e, r), e
				  }
				: tF
		dM.exports = nF
	})
	var Pe = z((b42, mM) => {
		var aF = H6(),
			vM = Object.create,
			iF = (function () {
				function e() {}
				return function (r) {
					if (!aF(r)) return {}
					if (vM) return vM(r)
					e.prototype = r
					var t = new e()
					return (e.prototype = void 0), t
				}
			})()
		mM.exports = iF
	})
	var Ae = z((F42, LM) => {
		var oF = Pe(),
			cF = H6()
		function CF(e) {
			return function () {
				var r = arguments
				switch (r.length) {
					case 0:
						return new e()
					case 1:
						return new e(r[0])
					case 2:
						return new e(r[0], r[1])
					case 3:
						return new e(r[0], r[1], r[2])
					case 4:
						return new e(r[0], r[1], r[2], r[3])
					case 5:
						return new e(r[0], r[1], r[2], r[3], r[4])
					case 6:
						return new e(r[0], r[1], r[2], r[3], r[4], r[5])
					case 7:
						return new e(r[0], r[1], r[2], r[3], r[4], r[5], r[6])
				}
				var t = oF(e.prototype),
					n = e.apply(t, r)
				return cF(n) ? n : t
			}
		}
		LM.exports = CF
	})
	var MM = z((I42, gM) => {
		var sF = Ae(),
			lF = h3(),
			fF = 1
		function uF(e, r, t) {
			var n = r & fF,
				i = sF(e)
			function c() {
				var C = this && this !== lF && this instanceof c ? i : e
				return C.apply(n ? t : this, arguments)
			}
			return c
		}
		gM.exports = uF
	})
	var Mn = z((B42, zM) => {
		function hF(e, r, t) {
			switch (t.length) {
				case 0:
					return e.call(r)
				case 1:
					return e.call(r, t[0])
				case 2:
					return e.call(r, t[0], t[1])
				case 3:
					return e.call(r, t[0], t[1], t[2])
			}
			return e.apply(r, t)
		}
		zM.exports = hF
	})
	var Bs = z((q42, HM) => {
		var pF = Math.max
		function dF(e, r, t, n) {
			for (
				var i = -1, c = e.length, C = t.length, l = -1, u = r.length, h = pF(c - C, 0), v = Array(u + h), g = !n;
				++l < u;

			)
				v[l] = r[l]
			for (; ++i < C; ) (g || i < c) && (v[t[i]] = e[i])
			for (; h--; ) v[l++] = e[i++]
			return v
		}
		HM.exports = dF
	})
	var qs = z((U42, VM) => {
		var vF = Math.max
		function mF(e, r, t, n) {
			for (
				var i = -1,
					c = e.length,
					C = -1,
					l = t.length,
					u = -1,
					h = r.length,
					v = vF(c - l, 0),
					g = Array(v + h),
					m = !n;
				++i < v;

			)
				g[i] = e[i]
			for (var H = i; ++u < h; ) g[H + u] = r[u]
			for (; ++C < l; ) (m || i < c) && (g[H + t[C]] = e[i++])
			return g
		}
		VM.exports = mF
	})
	var SM = z((j42, yM) => {
		function LF(e, r) {
			for (var t = e.length, n = 0; t--; ) e[t] === r && ++n
			return n
		}
		yM.exports = LF
	})
	var zn = z((G42, xM) => {
		function gF() {}
		xM.exports = gF
	})
	var Vn = z((W42, wM) => {
		var MF = Pe(),
			zF = zn(),
			HF = 4294967295
		function Hn(e) {
			;(this.__wrapped__ = e),
				(this.__actions__ = []),
				(this.__dir__ = 1),
				(this.__filtered__ = !1),
				(this.__iteratees__ = []),
				(this.__takeCount__ = HF),
				(this.__views__ = [])
		}
		Hn.prototype = MF(zF.prototype)
		Hn.prototype.constructor = Hn
		wM.exports = Hn
	})
	var _M = z((Y42, NM) => {
		function VF() {}
		NM.exports = VF
	})
	var Us = z((K42, PM) => {
		var kM = Fs(),
			yF = _M(),
			SF = kM
				? function (e) {
						return kM.get(e)
				  }
				: yF
		PM.exports = SF
	})
	var EM = z((Q42, AM) => {
		var xF = {}
		AM.exports = xF
	})
	var OM = z((X42, RM) => {
		var TM = EM(),
			wF = Object.prototype,
			NF = wF.hasOwnProperty
		function _F(e) {
			for (var r = e.name + '', t = TM[r], n = NF.call(TM, r) ? t.length : 0; n--; ) {
				var i = t[n],
					c = i.func
				if (c == null || c == e) return i.name
			}
			return r
		}
		RM.exports = _F
	})
	var js = z((J42, DM) => {
		var kF = Pe(),
			PF = zn()
		function yn(e, r) {
			;(this.__wrapped__ = e),
				(this.__actions__ = []),
				(this.__chain__ = !!r),
				(this.__index__ = 0),
				(this.__values__ = void 0)
		}
		yn.prototype = kF(PF.prototype)
		yn.prototype.constructor = yn
		DM.exports = yn
	})
	var p3 = z((Z42, bM) => {
		var AF = Array.isArray
		bM.exports = AF
	})
	var s4 = z(($42, FM) => {
		function EF(e) {
			return e != null && typeof e == 'object'
		}
		FM.exports = EF
	})
	var Ee = z((e62, IM) => {
		function TF(e, r) {
			var t = -1,
				n = e.length
			for (r || (r = Array(n)); ++t < n; ) r[t] = e[t]
			return r
		}
		IM.exports = TF
	})
	var qM = z((r62, BM) => {
		var RF = Vn(),
			OF = js(),
			DF = Ee()
		function bF(e) {
			if (e instanceof RF) return e.clone()
			var r = new OF(e.__wrapped__, e.__chain__)
			return (r.__actions__ = DF(e.__actions__)), (r.__index__ = e.__index__), (r.__values__ = e.__values__), r
		}
		BM.exports = bF
	})
	var GM = z((t62, jM) => {
		var FF = Vn(),
			UM = js(),
			IF = zn(),
			BF = p3(),
			qF = s4(),
			UF = qM(),
			jF = Object.prototype,
			GF = jF.hasOwnProperty
		function Sn(e) {
			if (qF(e) && !BF(e) && !(e instanceof FF)) {
				if (e instanceof UM) return e
				if (GF.call(e, '__wrapped__')) return UF(e)
			}
			return new UM(e)
		}
		Sn.prototype = IF.prototype
		Sn.prototype.constructor = Sn
		jM.exports = Sn
	})
	var YM = z((n62, WM) => {
		var WF = Vn(),
			YF = Us(),
			KF = OM(),
			QF = GM()
		function XF(e) {
			var r = KF(e),
				t = QF[r]
			if (typeof t != 'function' || !(r in WF.prototype)) return !1
			if (e === t) return !0
			var n = YF(t)
			return !!n && e === n[0]
		}
		WM.exports = XF
	})
	var Gs = z((a62, KM) => {
		var JF = 800,
			ZF = 16,
			$F = Date.now
		function eI(e) {
			var r = 0,
				t = 0
			return function () {
				var n = $F(),
					i = ZF - (n - t)
				if (((t = n), i > 0)) {
					if (++r >= JF) return arguments[0]
				} else r = 0
				return e.apply(void 0, arguments)
			}
		}
		KM.exports = eI
	})
	var Ws = z((i62, QM) => {
		var rI = Is(),
			tI = Gs(),
			nI = tI(rI)
		QM.exports = nI
	})
	var JM = z((o62, XM) => {
		var aI = /\{\n\/\* \[wrapped with (.+)\] \*/,
			iI = /,? & /
		function oI(e) {
			var r = e.match(aI)
			return r ? r[1].split(iI) : []
		}
		XM.exports = oI
	})
	var $M = z((c62, ZM) => {
		var cI = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/
		function CI(e, r) {
			var t = r.length
			if (!t) return e
			var n = t - 1
			return (
				(r[n] = (t > 1 ? '& ' : '') + r[n]),
				(r = r.join(t > 2 ? ', ' : ' ')),
				e.replace(
					cI,
					`{
/* [wrapped with ` +
						r +
						`] */
`,
				)
			)
		}
		ZM.exports = CI
	})
	var rz = z((C62, ez) => {
		function sI(e) {
			return function () {
				return e
			}
		}
		ez.exports = sI
	})
	var Ys = z((s62, tz) => {
		var lI = s5(),
			fI = (function () {
				try {
					var e = lI(Object, 'defineProperty')
					return e({}, '', {}), e
				} catch {}
			})()
		tz.exports = fI
	})
	var iz = z((l62, az) => {
		var uI = rz(),
			nz = Ys(),
			hI = Ln(),
			pI = nz
				? function (e, r) {
						return nz(e, 'toString', { configurable: !0, enumerable: !1, value: uI(r), writable: !0 })
				  }
				: hI
		az.exports = pI
	})
	var Ks = z((f62, oz) => {
		var dI = iz(),
			vI = Gs(),
			mI = vI(dI)
		oz.exports = mI
	})
	var xn = z((u62, cz) => {
		function LI(e, r) {
			for (var t = -1, n = e == null ? 0 : e.length; ++t < n && r(e[t], t, e) !== !1; );
			return e
		}
		cz.exports = LI
	})
	var sz = z((h62, Cz) => {
		function gI(e, r, t, n) {
			for (var i = e.length, c = t + (n ? 1 : -1); n ? c-- : ++c < i; ) if (r(e[c], c, e)) return c
			return -1
		}
		Cz.exports = gI
	})
	var fz = z((p62, lz) => {
		function MI(e) {
			return e !== e
		}
		lz.exports = MI
	})
	var hz = z((d62, uz) => {
		function zI(e, r, t) {
			for (var n = t - 1, i = e.length; ++n < i; ) if (e[n] === r) return n
			return -1
		}
		uz.exports = zI
	})
	var dz = z((v62, pz) => {
		var HI = sz(),
			VI = fz(),
			yI = hz()
		function SI(e, r, t) {
			return r === r ? yI(e, r, t) : HI(e, VI, t)
		}
		pz.exports = SI
	})
	var mz = z((m62, vz) => {
		var xI = dz()
		function wI(e, r) {
			var t = e == null ? 0 : e.length
			return !!t && xI(e, r, 0) > -1
		}
		vz.exports = wI
	})
	var gz = z((L62, Lz) => {
		var NI = xn(),
			_I = mz(),
			kI = 1,
			PI = 2,
			AI = 8,
			EI = 16,
			TI = 32,
			RI = 64,
			OI = 128,
			DI = 256,
			bI = 512,
			FI = [
				['ary', OI],
				['bind', kI],
				['bindKey', PI],
				['curry', AI],
				['curryRight', EI],
				['flip', bI],
				['partial', TI],
				['partialRight', RI],
				['rearg', DI],
			]
		function II(e, r) {
			return (
				NI(FI, function (t) {
					var n = '_.' + t[0]
					r & t[1] && !_I(e, n) && e.push(n)
				}),
				e.sort()
			)
		}
		Lz.exports = II
	})
	var Qs = z((g62, Mz) => {
		var BI = JM(),
			qI = $M(),
			UI = Ks(),
			jI = gz()
		function GI(e, r, t) {
			var n = r + ''
			return UI(e, qI(n, jI(BI(n), t)))
		}
		Mz.exports = GI
	})
	var Xs = z((M62, Vz) => {
		var WI = YM(),
			YI = Ws(),
			KI = Qs(),
			QI = 1,
			XI = 2,
			JI = 4,
			ZI = 8,
			zz = 32,
			Hz = 64
		function $I(e, r, t, n, i, c, C, l, u, h) {
			var v = r & ZI,
				g = v ? C : void 0,
				m = v ? void 0 : C,
				H = v ? c : void 0,
				L = v ? void 0 : c
			;(r |= v ? zz : Hz), (r &= ~(v ? Hz : zz)), r & JI || (r &= ~(QI | XI))
			var x = [e, r, i, H, g, L, m, l, u, h],
				w = t.apply(void 0, x)
			return WI(e) && YI(w, x), (w.placeholder = n), KI(w, e, r)
		}
		Vz.exports = $I
	})
	var Js = z((z62, yz) => {
		function eB(e) {
			var r = e
			return r.placeholder
		}
		yz.exports = eB
	})
	var wn = z((H62, Sz) => {
		var rB = 9007199254740991,
			tB = /^(?:0|[1-9]\d*)$/
		function nB(e, r) {
			var t = typeof e
			return (r = r ?? rB), !!r && (t == 'number' || (t != 'symbol' && tB.test(e))) && e > -1 && e % 1 == 0 && e < r
		}
		Sz.exports = nB
	})
	var wz = z((V62, xz) => {
		var aB = Ee(),
			iB = wn(),
			oB = Math.min
		function cB(e, r) {
			for (var t = e.length, n = oB(r.length, t), i = aB(e); n--; ) {
				var c = r[n]
				e[n] = iB(c, t) ? i[c] : void 0
			}
			return e
		}
		xz.exports = cB
	})
	var Nn = z((y62, _z) => {
		var Nz = '__lodash_placeholder__'
		function CB(e, r) {
			for (var t = -1, n = e.length, i = 0, c = []; ++t < n; ) {
				var C = e[t]
				;(C === r || C === Nz) && ((e[t] = Nz), (c[i++] = t))
			}
			return c
		}
		_z.exports = CB
	})
	var Zs = z((S62, Az) => {
		var sB = Bs(),
			lB = qs(),
			fB = SM(),
			kz = Ae(),
			uB = Xs(),
			hB = Js(),
			pB = wz(),
			dB = Nn(),
			vB = h3(),
			mB = 1,
			LB = 2,
			gB = 8,
			MB = 16,
			zB = 128,
			HB = 512
		function Pz(e, r, t, n, i, c, C, l, u, h) {
			var v = r & zB,
				g = r & mB,
				m = r & LB,
				H = r & (gB | MB),
				L = r & HB,
				x = m ? void 0 : kz(e)
			function w() {
				for (var V = arguments.length, M = Array(V), S = V; S--; ) M[S] = arguments[S]
				if (H)
					var k = hB(w),
						D = fB(M, k)
				if ((n && (M = sB(M, n, i, H)), c && (M = lB(M, c, C, H)), (V -= D), H && V < h)) {
					var b = dB(M, k)
					return uB(e, r, Pz, w.placeholder, t, M, b, l, u, h - V)
				}
				var I = g ? t : this,
					B = m ? I[e] : e
				return (
					(V = M.length),
					l ? (M = pB(M, l)) : L && V > 1 && M.reverse(),
					v && u < V && (M.length = u),
					this && this !== vB && this instanceof w && (B = x || kz(B)),
					B.apply(I, M)
				)
			}
			return w
		}
		Az.exports = Pz
	})
	var Tz = z((x62, Ez) => {
		var VB = Mn(),
			yB = Ae(),
			SB = Zs(),
			xB = Xs(),
			wB = Js(),
			NB = Nn(),
			_B = h3()
		function kB(e, r, t) {
			var n = yB(e)
			function i() {
				for (var c = arguments.length, C = Array(c), l = c, u = wB(i); l--; ) C[l] = arguments[l]
				var h = c < 3 && C[0] !== u && C[c - 1] !== u ? [] : NB(C, u)
				if (((c -= h.length), c < t)) return xB(e, r, SB, i.placeholder, void 0, C, h, void 0, void 0, t - c)
				var v = this && this !== _B && this instanceof i ? n : e
				return VB(v, this, C)
			}
			return i
		}
		Ez.exports = kB
	})
	var Oz = z((w62, Rz) => {
		var PB = Mn(),
			AB = Ae(),
			EB = h3(),
			TB = 1
		function RB(e, r, t, n) {
			var i = r & TB,
				c = AB(e)
			function C() {
				for (
					var l = -1,
						u = arguments.length,
						h = -1,
						v = n.length,
						g = Array(v + u),
						m = this && this !== EB && this instanceof C ? c : e;
					++h < v;

				)
					g[h] = n[h]
				for (; u--; ) g[h++] = arguments[++l]
				return PB(m, i ? t : this, g)
			}
			return C
		}
		Rz.exports = RB
	})
	var qz = z((N62, Bz) => {
		var OB = Bs(),
			DB = qs(),
			Dz = Nn(),
			bz = '__lodash_placeholder__',
			$s = 1,
			bB = 2,
			FB = 4,
			Fz = 8,
			Te = 128,
			Iz = 256,
			IB = Math.min
		function BB(e, r) {
			var t = e[1],
				n = r[1],
				i = t | n,
				c = i < ($s | bB | Te),
				C =
					(n == Te && t == Fz) ||
					(n == Te && t == Iz && e[7].length <= r[8]) ||
					(n == (Te | Iz) && r[7].length <= r[8] && t == Fz)
			if (!(c || C)) return e
			n & $s && ((e[2] = r[2]), (i |= t & $s ? 0 : FB))
			var l = r[3]
			if (l) {
				var u = e[3]
				;(e[3] = u ? OB(u, l, r[4]) : l), (e[4] = u ? Dz(e[3], bz) : r[4])
			}
			return (
				(l = r[5]),
				l && ((u = e[5]), (e[5] = u ? DB(u, l, r[6]) : l), (e[6] = u ? Dz(e[5], bz) : r[6])),
				(l = r[7]),
				l && (e[7] = l),
				n & Te && (e[8] = e[8] == null ? r[8] : IB(e[8], r[8])),
				e[9] == null && (e[9] = r[9]),
				(e[0] = r[0]),
				(e[1] = i),
				e
			)
		}
		Bz.exports = BB
	})
	var jz = z((_62, Uz) => {
		var qB = /\s/
		function UB(e) {
			for (var r = e.length; r-- && qB.test(e.charAt(r)); );
			return r
		}
		Uz.exports = UB
	})
	var Wz = z((k62, Gz) => {
		var jB = jz(),
			GB = /^\s+/
		function WB(e) {
			return e && e.slice(0, jB(e) + 1).replace(GB, '')
		}
		Gz.exports = WB
	})
	var p0 = z((P62, Yz) => {
		var YB = C5(),
			KB = s4(),
			QB = '[object Symbol]'
		function XB(e) {
			return typeof e == 'symbol' || (KB(e) && YB(e) == QB)
		}
		Yz.exports = XB
	})
	var Jz = z((A62, Xz) => {
		var JB = Wz(),
			Kz = H6(),
			ZB = p0(),
			Qz = 0 / 0,
			$B = /^[-+]0x[0-9a-f]+$/i,
			eq = /^0b[01]+$/i,
			rq = /^0o[0-7]+$/i,
			tq = parseInt
		function nq(e) {
			if (typeof e == 'number') return e
			if (ZB(e)) return Qz
			if (Kz(e)) {
				var r = typeof e.valueOf == 'function' ? e.valueOf() : e
				e = Kz(r) ? r + '' : r
			}
			if (typeof e != 'string') return e === 0 ? e : +e
			e = JB(e)
			var t = eq.test(e)
			return t || rq.test(e) ? tq(e.slice(2), t ? 2 : 8) : $B.test(e) ? Qz : +e
		}
		Xz.exports = nq
	})
	var eH = z((E62, $z) => {
		var aq = Jz(),
			Zz = 1 / 0,
			iq = 17976931348623157e292
		function oq(e) {
			if (!e) return e === 0 ? e : 0
			if (((e = aq(e)), e === Zz || e === -Zz)) {
				var r = e < 0 ? -1 : 1
				return r * iq
			}
			return e === e ? e : 0
		}
		$z.exports = oq
	})
	var el = z((T62, rH) => {
		var cq = eH()
		function Cq(e) {
			var r = cq(e),
				t = r % 1
			return r === r ? (t ? r - t : r) : 0
		}
		rH.exports = Cq
	})
	var _n = z((R62, oH) => {
		var sq = Is(),
			lq = MM(),
			fq = Tz(),
			uq = Zs(),
			hq = Oz(),
			pq = Us(),
			dq = qz(),
			vq = Ws(),
			mq = Qs(),
			tH = el(),
			Lq = 'Expected a function',
			nH = 1,
			gq = 2,
			rl = 8,
			tl = 16,
			nl = 32,
			aH = 64,
			iH = Math.max
		function Mq(e, r, t, n, i, c, C, l) {
			var u = r & gq
			if (!u && typeof e != 'function') throw new TypeError(Lq)
			var h = n ? n.length : 0
			if (
				(h || ((r &= ~(nl | aH)), (n = i = void 0)),
				(C = C === void 0 ? C : iH(tH(C), 0)),
				(l = l === void 0 ? l : tH(l)),
				(h -= i ? i.length : 0),
				r & aH)
			) {
				var v = n,
					g = i
				n = i = void 0
			}
			var m = u ? void 0 : pq(e),
				H = [e, r, t, n, i, v, g, c, C, l]
			if (
				(m && dq(H, m),
				(e = H[0]),
				(r = H[1]),
				(t = H[2]),
				(n = H[3]),
				(i = H[4]),
				(l = H[9] = H[9] === void 0 ? (u ? 0 : e.length) : iH(H[9] - h, 0)),
				!l && r & (rl | tl) && (r &= ~(rl | tl)),
				!r || r == nH)
			)
				var L = lq(e, r, t)
			else
				r == rl || r == tl
					? (L = fq(e, r, l))
					: (r == nl || r == (nH | nl)) && !i.length
					? (L = hq(e, r, t, n))
					: (L = uq.apply(void 0, H))
			var x = m ? sq : vq
			return mq(x(L, H), e, r)
		}
		oH.exports = Mq
	})
	var CH = z((O62, cH) => {
		var zq = _n(),
			Hq = 128
		function Vq(e, r, t) {
			return (r = t ? void 0 : r), (r = e && r == null ? e.length : r), zq(e, Hq, void 0, void 0, void 0, void 0, r)
		}
		cH.exports = Vq
	})
	var al = z((D62, lH) => {
		var sH = Ys()
		function yq(e, r, t) {
			r == '__proto__' && sH ? sH(e, r, { configurable: !0, enumerable: !0, value: t, writable: !0 }) : (e[r] = t)
		}
		lH.exports = yq
	})
	var kn = z((b62, fH) => {
		function Sq(e, r) {
			return e === r || (e !== e && r !== r)
		}
		fH.exports = Sq
	})
	var il = z((F62, uH) => {
		var xq = al(),
			wq = kn(),
			Nq = Object.prototype,
			_q = Nq.hasOwnProperty
		function kq(e, r, t) {
			var n = e[r]
			;(!(_q.call(e, r) && wq(n, t)) || (t === void 0 && !(r in e))) && xq(e, r, t)
		}
		uH.exports = kq
	})
	var Re = z((I62, hH) => {
		var Pq = il(),
			Aq = al()
		function Eq(e, r, t, n) {
			var i = !t
			t || (t = {})
			for (var c = -1, C = r.length; ++c < C; ) {
				var l = r[c],
					u = n ? n(t[l], e[l], l, t, e) : void 0
				u === void 0 && (u = e[l]), i ? Aq(t, l, u) : Pq(t, l, u)
			}
			return t
		}
		hH.exports = Eq
	})
	var dH = z((B62, pH) => {
		function Tq(e, r) {
			for (var t = -1, n = Array(e); ++t < e; ) n[t] = r(t)
			return n
		}
		pH.exports = Tq
	})
	var mH = z((q62, vH) => {
		var Rq = C5(),
			Oq = s4(),
			Dq = '[object Arguments]'
		function bq(e) {
			return Oq(e) && Rq(e) == Dq
		}
		vH.exports = bq
	})
	var Oe = z((U62, MH) => {
		var LH = mH(),
			Fq = s4(),
			gH = Object.prototype,
			Iq = gH.hasOwnProperty,
			Bq = gH.propertyIsEnumerable,
			qq = LH(
				(function () {
					return arguments
				})(),
			)
				? LH
				: function (e) {
						return Fq(e) && Iq.call(e, 'callee') && !Bq.call(e, 'callee')
				  }
		MH.exports = qq
	})
	var HH = z((j62, zH) => {
		function Uq() {
			return !1
		}
		zH.exports = Uq
	})
	var be = z((De, d0) => {
		var jq = h3(),
			Gq = HH(),
			SH = typeof De == 'object' && De && !De.nodeType && De,
			VH = SH && typeof d0 == 'object' && d0 && !d0.nodeType && d0,
			Wq = VH && VH.exports === SH,
			yH = Wq ? jq.Buffer : void 0,
			Yq = yH ? yH.isBuffer : void 0,
			Kq = Yq || Gq
		d0.exports = Kq
	})
	var Pn = z((G62, xH) => {
		var Qq = 9007199254740991
		function Xq(e) {
			return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= Qq
		}
		xH.exports = Xq
	})
	var NH = z((W62, wH) => {
		var Jq = C5(),
			Zq = Pn(),
			$q = s4(),
			eU = '[object Arguments]',
			rU = '[object Array]',
			tU = '[object Boolean]',
			nU = '[object Date]',
			aU = '[object Error]',
			iU = '[object Function]',
			oU = '[object Map]',
			cU = '[object Number]',
			CU = '[object Object]',
			sU = '[object RegExp]',
			lU = '[object Set]',
			fU = '[object String]',
			uU = '[object WeakMap]',
			hU = '[object ArrayBuffer]',
			pU = '[object DataView]',
			dU = '[object Float32Array]',
			vU = '[object Float64Array]',
			mU = '[object Int8Array]',
			LU = '[object Int16Array]',
			gU = '[object Int32Array]',
			MU = '[object Uint8Array]',
			zU = '[object Uint8ClampedArray]',
			HU = '[object Uint16Array]',
			VU = '[object Uint32Array]',
			Z2 = {}
		Z2[dU] = Z2[vU] = Z2[mU] = Z2[LU] = Z2[gU] = Z2[MU] = Z2[zU] = Z2[HU] = Z2[VU] = !0
		Z2[eU] =
			Z2[rU] =
			Z2[hU] =
			Z2[tU] =
			Z2[pU] =
			Z2[nU] =
			Z2[aU] =
			Z2[iU] =
			Z2[oU] =
			Z2[cU] =
			Z2[CU] =
			Z2[sU] =
			Z2[lU] =
			Z2[fU] =
			Z2[uU] =
				!1
		function yU(e) {
			return $q(e) && Zq(e.length) && !!Z2[Jq(e)]
		}
		wH.exports = yU
	})
	var An = z((Y62, _H) => {
		function SU(e) {
			return function (r) {
				return e(r)
			}
		}
		_H.exports = SU
	})
	var En = z((Fe, v0) => {
		var xU = Rs(),
			kH = typeof Fe == 'object' && Fe && !Fe.nodeType && Fe,
			Ie = kH && typeof v0 == 'object' && v0 && !v0.nodeType && v0,
			wU = Ie && Ie.exports === kH,
			ol = wU && xU.process,
			NU = (function () {
				try {
					var e = Ie && Ie.require && Ie.require('util').types
					return e || (ol && ol.binding && ol.binding('util'))
				} catch {}
			})()
		v0.exports = NU
	})
	var Tn = z((K62, EH) => {
		var _U = NH(),
			kU = An(),
			PH = En(),
			AH = PH && PH.isTypedArray,
			PU = AH ? kU(AH) : _U
		EH.exports = PU
	})
	var cl = z((Q62, TH) => {
		var AU = dH(),
			EU = Oe(),
			TU = p3(),
			RU = be(),
			OU = wn(),
			DU = Tn(),
			bU = Object.prototype,
			FU = bU.hasOwnProperty
		function IU(e, r) {
			var t = TU(e),
				n = !t && EU(e),
				i = !t && !n && RU(e),
				c = !t && !n && !i && DU(e),
				C = t || n || i || c,
				l = C ? AU(e.length, String) : [],
				u = l.length
			for (var h in e)
				(r || FU.call(e, h)) &&
					!(
						C &&
						(h == 'length' ||
							(i && (h == 'offset' || h == 'parent')) ||
							(c && (h == 'buffer' || h == 'byteLength' || h == 'byteOffset')) ||
							OU(h, u))
					) &&
					l.push(h)
			return l
		}
		TH.exports = IU
	})
	var Be = z((X62, RH) => {
		var BU = Object.prototype
		function qU(e) {
			var r = e && e.constructor,
				t = (typeof r == 'function' && r.prototype) || BU
			return e === t
		}
		RH.exports = qU
	})
	var Cl = z((J62, OH) => {
		function UU(e, r) {
			return function (t) {
				return e(r(t))
			}
		}
		OH.exports = UU
	})
	var bH = z((Z62, DH) => {
		var jU = Cl(),
			GU = jU(Object.keys, Object)
		DH.exports = GU
	})
	var Rn = z(($62, FH) => {
		var WU = Be(),
			YU = bH(),
			KU = Object.prototype,
			QU = KU.hasOwnProperty
		function XU(e) {
			if (!WU(e)) return YU(e)
			var r = []
			for (var t in Object(e)) QU.call(e, t) && t != 'constructor' && r.push(t)
			return r
		}
		FH.exports = XU
	})
	var On = z((e52, IH) => {
		var JU = gn(),
			ZU = Pn()
		function $U(e) {
			return e != null && ZU(e.length) && !JU(e)
		}
		IH.exports = $U
	})
	var qe = z((r52, BH) => {
		var ej = cl(),
			rj = Rn(),
			tj = On()
		function nj(e) {
			return tj(e) ? ej(e) : rj(e)
		}
		BH.exports = nj
	})
	var sl = z((t52, qH) => {
		var aj = Re(),
			ij = qe()
		function oj(e, r) {
			return e && aj(r, ij(r), e)
		}
		qH.exports = oj
	})
	var jH = z((n52, UH) => {
		function cj() {
			;(this.__data__ = []), (this.size = 0)
		}
		UH.exports = cj
	})
	var Ue = z((a52, GH) => {
		var Cj = kn()
		function sj(e, r) {
			for (var t = e.length; t--; ) if (Cj(e[t][0], r)) return t
			return -1
		}
		GH.exports = sj
	})
	var YH = z((i52, WH) => {
		var lj = Ue(),
			fj = Array.prototype,
			uj = fj.splice
		function hj(e) {
			var r = this.__data__,
				t = lj(r, e)
			if (t < 0) return !1
			var n = r.length - 1
			return t == n ? r.pop() : uj.call(r, t, 1), --this.size, !0
		}
		WH.exports = hj
	})
	var QH = z((o52, KH) => {
		var pj = Ue()
		function dj(e) {
			var r = this.__data__,
				t = pj(r, e)
			return t < 0 ? void 0 : r[t][1]
		}
		KH.exports = dj
	})
	var JH = z((c52, XH) => {
		var vj = Ue()
		function mj(e) {
			return vj(this.__data__, e) > -1
		}
		XH.exports = mj
	})
	var $H = z((C52, ZH) => {
		var Lj = Ue()
		function gj(e, r) {
			var t = this.__data__,
				n = Lj(t, e)
			return n < 0 ? (++this.size, t.push([e, r])) : (t[n][1] = r), this
		}
		ZH.exports = gj
	})
	var je = z((s52, eV) => {
		var Mj = jH(),
			zj = YH(),
			Hj = QH(),
			Vj = JH(),
			yj = $H()
		function m0(e) {
			var r = -1,
				t = e == null ? 0 : e.length
			for (this.clear(); ++r < t; ) {
				var n = e[r]
				this.set(n[0], n[1])
			}
		}
		m0.prototype.clear = Mj
		m0.prototype.delete = zj
		m0.prototype.get = Hj
		m0.prototype.has = Vj
		m0.prototype.set = yj
		eV.exports = m0
	})
	var tV = z((l52, rV) => {
		var Sj = je()
		function xj() {
			;(this.__data__ = new Sj()), (this.size = 0)
		}
		rV.exports = xj
	})
	var aV = z((f52, nV) => {
		function wj(e) {
			var r = this.__data__,
				t = r.delete(e)
			return (this.size = r.size), t
		}
		nV.exports = wj
	})
	var oV = z((u52, iV) => {
		function Nj(e) {
			return this.__data__.get(e)
		}
		iV.exports = Nj
	})
	var CV = z((h52, cV) => {
		function _j(e) {
			return this.__data__.has(e)
		}
		cV.exports = _j
	})
	var Dn = z((p52, sV) => {
		var kj = s5(),
			Pj = h3(),
			Aj = kj(Pj, 'Map')
		sV.exports = Aj
	})
	var Ge = z((d52, lV) => {
		var Ej = s5(),
			Tj = Ej(Object, 'create')
		lV.exports = Tj
	})
	var hV = z((v52, uV) => {
		var fV = Ge()
		function Rj() {
			;(this.__data__ = fV ? fV(null) : {}), (this.size = 0)
		}
		uV.exports = Rj
	})
	var dV = z((m52, pV) => {
		function Oj(e) {
			var r = this.has(e) && delete this.__data__[e]
			return (this.size -= r ? 1 : 0), r
		}
		pV.exports = Oj
	})
	var mV = z((L52, vV) => {
		var Dj = Ge(),
			bj = '__lodash_hash_undefined__',
			Fj = Object.prototype,
			Ij = Fj.hasOwnProperty
		function Bj(e) {
			var r = this.__data__
			if (Dj) {
				var t = r[e]
				return t === bj ? void 0 : t
			}
			return Ij.call(r, e) ? r[e] : void 0
		}
		vV.exports = Bj
	})
	var gV = z((g52, LV) => {
		var qj = Ge(),
			Uj = Object.prototype,
			jj = Uj.hasOwnProperty
		function Gj(e) {
			var r = this.__data__
			return qj ? r[e] !== void 0 : jj.call(r, e)
		}
		LV.exports = Gj
	})
	var zV = z((M52, MV) => {
		var Wj = Ge(),
			Yj = '__lodash_hash_undefined__'
		function Kj(e, r) {
			var t = this.__data__
			return (this.size += this.has(e) ? 0 : 1), (t[e] = Wj && r === void 0 ? Yj : r), this
		}
		MV.exports = Kj
	})
	var VV = z((z52, HV) => {
		var Qj = hV(),
			Xj = dV(),
			Jj = mV(),
			Zj = gV(),
			$j = zV()
		function L0(e) {
			var r = -1,
				t = e == null ? 0 : e.length
			for (this.clear(); ++r < t; ) {
				var n = e[r]
				this.set(n[0], n[1])
			}
		}
		L0.prototype.clear = Qj
		L0.prototype.delete = Xj
		L0.prototype.get = Jj
		L0.prototype.has = Zj
		L0.prototype.set = $j
		HV.exports = L0
	})
	var xV = z((H52, SV) => {
		var yV = VV(),
			eG = je(),
			rG = Dn()
		function tG() {
			;(this.size = 0), (this.__data__ = { hash: new yV(), map: new (rG || eG)(), string: new yV() })
		}
		SV.exports = tG
	})
	var NV = z((V52, wV) => {
		function nG(e) {
			var r = typeof e
			return r == 'string' || r == 'number' || r == 'symbol' || r == 'boolean' ? e !== '__proto__' : e === null
		}
		wV.exports = nG
	})
	var We = z((y52, _V) => {
		var aG = NV()
		function iG(e, r) {
			var t = e.__data__
			return aG(r) ? t[typeof r == 'string' ? 'string' : 'hash'] : t.map
		}
		_V.exports = iG
	})
	var PV = z((S52, kV) => {
		var oG = We()
		function cG(e) {
			var r = oG(this, e).delete(e)
			return (this.size -= r ? 1 : 0), r
		}
		kV.exports = cG
	})
	var EV = z((x52, AV) => {
		var CG = We()
		function sG(e) {
			return CG(this, e).get(e)
		}
		AV.exports = sG
	})
	var RV = z((w52, TV) => {
		var lG = We()
		function fG(e) {
			return lG(this, e).has(e)
		}
		TV.exports = fG
	})
	var DV = z((N52, OV) => {
		var uG = We()
		function hG(e, r) {
			var t = uG(this, e),
				n = t.size
			return t.set(e, r), (this.size += t.size == n ? 0 : 1), this
		}
		OV.exports = hG
	})
	var bn = z((_52, bV) => {
		var pG = xV(),
			dG = PV(),
			vG = EV(),
			mG = RV(),
			LG = DV()
		function g0(e) {
			var r = -1,
				t = e == null ? 0 : e.length
			for (this.clear(); ++r < t; ) {
				var n = e[r]
				this.set(n[0], n[1])
			}
		}
		g0.prototype.clear = pG
		g0.prototype.delete = dG
		g0.prototype.get = vG
		g0.prototype.has = mG
		g0.prototype.set = LG
		bV.exports = g0
	})
	var IV = z((k52, FV) => {
		var gG = je(),
			MG = Dn(),
			zG = bn(),
			HG = 200
		function VG(e, r) {
			var t = this.__data__
			if (t instanceof gG) {
				var n = t.__data__
				if (!MG || n.length < HG - 1) return n.push([e, r]), (this.size = ++t.size), this
				t = this.__data__ = new zG(n)
			}
			return t.set(e, r), (this.size = t.size), this
		}
		FV.exports = VG
	})
	var Fn = z((P52, BV) => {
		var yG = je(),
			SG = tV(),
			xG = aV(),
			wG = oV(),
			NG = CV(),
			_G = IV()
		function M0(e) {
			var r = (this.__data__ = new yG(e))
			this.size = r.size
		}
		M0.prototype.clear = SG
		M0.prototype.delete = xG
		M0.prototype.get = wG
		M0.prototype.has = NG
		M0.prototype.set = _G
		BV.exports = M0
	})
	var UV = z((A52, qV) => {
		function kG(e) {
			var r = []
			if (e != null) for (var t in Object(e)) r.push(t)
			return r
		}
		qV.exports = kG
	})
	var GV = z((E52, jV) => {
		var PG = H6(),
			AG = Be(),
			EG = UV(),
			TG = Object.prototype,
			RG = TG.hasOwnProperty
		function OG(e) {
			if (!PG(e)) return EG(e)
			var r = AG(e),
				t = []
			for (var n in e) (n == 'constructor' && (r || !RG.call(e, n))) || t.push(n)
			return t
		}
		jV.exports = OG
	})
	var In = z((T52, WV) => {
		var DG = cl(),
			bG = GV(),
			FG = On()
		function IG(e) {
			return FG(e) ? DG(e, !0) : bG(e)
		}
		WV.exports = IG
	})
	var KV = z((R52, YV) => {
		var BG = Re(),
			qG = In()
		function UG(e, r) {
			return e && BG(r, qG(r), e)
		}
		YV.exports = UG
	})
	var $V = z((Ye, z0) => {
		var jG = h3(),
			ZV = typeof Ye == 'object' && Ye && !Ye.nodeType && Ye,
			QV = ZV && typeof z0 == 'object' && z0 && !z0.nodeType && z0,
			GG = QV && QV.exports === ZV,
			XV = GG ? jG.Buffer : void 0,
			JV = XV ? XV.allocUnsafe : void 0
		function WG(e, r) {
			if (r) return e.slice()
			var t = e.length,
				n = JV ? JV(t) : new e.constructor(t)
			return e.copy(n), n
		}
		z0.exports = WG
	})
	var ry = z((O52, ey) => {
		function YG(e, r) {
			for (var t = -1, n = e == null ? 0 : e.length, i = 0, c = []; ++t < n; ) {
				var C = e[t]
				r(C, t, e) && (c[i++] = C)
			}
			return c
		}
		ey.exports = YG
	})
	var ll = z((D52, ty) => {
		function KG() {
			return []
		}
		ty.exports = KG
	})
	var Bn = z((b52, ay) => {
		var QG = ry(),
			XG = ll(),
			JG = Object.prototype,
			ZG = JG.propertyIsEnumerable,
			ny = Object.getOwnPropertySymbols,
			$G = ny
				? function (e) {
						return e == null
							? []
							: ((e = Object(e)),
							  QG(ny(e), function (r) {
									return ZG.call(e, r)
							  }))
				  }
				: XG
		ay.exports = $G
	})
	var oy = z((F52, iy) => {
		var eW = Re(),
			rW = Bn()
		function tW(e, r) {
			return eW(e, rW(e), r)
		}
		iy.exports = tW
	})
	var qn = z((I52, cy) => {
		function nW(e, r) {
			for (var t = -1, n = r.length, i = e.length; ++t < n; ) e[i + t] = r[t]
			return e
		}
		cy.exports = nW
	})
	var Un = z((B52, Cy) => {
		var aW = Cl(),
			iW = aW(Object.getPrototypeOf, Object)
		Cy.exports = iW
	})
	var fl = z((q52, sy) => {
		var oW = qn(),
			cW = Un(),
			CW = Bn(),
			sW = ll(),
			lW = Object.getOwnPropertySymbols,
			fW = lW
				? function (e) {
						for (var r = []; e; ) oW(r, CW(e)), (e = cW(e))
						return r
				  }
				: sW
		sy.exports = fW
	})
	var fy = z((U52, ly) => {
		var uW = Re(),
			hW = fl()
		function pW(e, r) {
			return uW(e, hW(e), r)
		}
		ly.exports = pW
	})
	var ul = z((j52, uy) => {
		var dW = qn(),
			vW = p3()
		function mW(e, r, t) {
			var n = r(e)
			return vW(e) ? n : dW(n, t(e))
		}
		uy.exports = mW
	})
	var hl = z((G52, hy) => {
		var LW = ul(),
			gW = Bn(),
			MW = qe()
		function zW(e) {
			return LW(e, MW, gW)
		}
		hy.exports = zW
	})
	var dy = z((W52, py) => {
		var HW = ul(),
			VW = fl(),
			yW = In()
		function SW(e) {
			return HW(e, yW, VW)
		}
		py.exports = SW
	})
	var my = z((Y52, vy) => {
		var xW = s5(),
			wW = h3(),
			NW = xW(wW, 'DataView')
		vy.exports = NW
	})
	var gy = z((K52, Ly) => {
		var _W = s5(),
			kW = h3(),
			PW = _W(kW, 'Promise')
		Ly.exports = PW
	})
	var zy = z((Q52, My) => {
		var AW = s5(),
			EW = h3(),
			TW = AW(EW, 'Set')
		My.exports = TW
	})
	var $5 = z((X52, Ny) => {
		var pl = my(),
			dl = Dn(),
			vl = gy(),
			ml = zy(),
			Ll = bs(),
			wy = C5(),
			H0 = Ds(),
			Hy = '[object Map]',
			RW = '[object Object]',
			Vy = '[object Promise]',
			yy = '[object Set]',
			Sy = '[object WeakMap]',
			xy = '[object DataView]',
			OW = H0(pl),
			DW = H0(dl),
			bW = H0(vl),
			FW = H0(ml),
			IW = H0(Ll),
			Z5 = wy
		;((pl && Z5(new pl(new ArrayBuffer(1))) != xy) ||
			(dl && Z5(new dl()) != Hy) ||
			(vl && Z5(vl.resolve()) != Vy) ||
			(ml && Z5(new ml()) != yy) ||
			(Ll && Z5(new Ll()) != Sy)) &&
			(Z5 = function (e) {
				var r = wy(e),
					t = r == RW ? e.constructor : void 0,
					n = t ? H0(t) : ''
				if (n)
					switch (n) {
						case OW:
							return xy
						case DW:
							return Hy
						case bW:
							return Vy
						case FW:
							return yy
						case IW:
							return Sy
					}
				return r
			})
		Ny.exports = Z5
	})
	var ky = z((J52, _y) => {
		var BW = Object.prototype,
			qW = BW.hasOwnProperty
		function UW(e) {
			var r = e.length,
				t = new e.constructor(r)
			return r && typeof e[0] == 'string' && qW.call(e, 'index') && ((t.index = e.index), (t.input = e.input)), t
		}
		_y.exports = UW
	})
	var gl = z((Z52, Py) => {
		var jW = h3(),
			GW = jW.Uint8Array
		Py.exports = GW
	})
	var jn = z(($52, Ey) => {
		var Ay = gl()
		function WW(e) {
			var r = new e.constructor(e.byteLength)
			return new Ay(r).set(new Ay(e)), r
		}
		Ey.exports = WW
	})
	var Ry = z((e82, Ty) => {
		var YW = jn()
		function KW(e, r) {
			var t = r ? YW(e.buffer) : e.buffer
			return new e.constructor(t, e.byteOffset, e.byteLength)
		}
		Ty.exports = KW
	})
	var Dy = z((r82, Oy) => {
		var QW = /\w*$/
		function XW(e) {
			var r = new e.constructor(e.source, QW.exec(e))
			return (r.lastIndex = e.lastIndex), r
		}
		Oy.exports = XW
	})
	var qy = z((t82, By) => {
		var by = J5(),
			Fy = by ? by.prototype : void 0,
			Iy = Fy ? Fy.valueOf : void 0
		function JW(e) {
			return Iy ? Object(Iy.call(e)) : {}
		}
		By.exports = JW
	})
	var jy = z((n82, Uy) => {
		var ZW = jn()
		function $W(e, r) {
			var t = r ? ZW(e.buffer) : e.buffer
			return new e.constructor(t, e.byteOffset, e.length)
		}
		Uy.exports = $W
	})
	var Wy = z((a82, Gy) => {
		var eY = jn(),
			rY = Ry(),
			tY = Dy(),
			nY = qy(),
			aY = jy(),
			iY = '[object Boolean]',
			oY = '[object Date]',
			cY = '[object Map]',
			CY = '[object Number]',
			sY = '[object RegExp]',
			lY = '[object Set]',
			fY = '[object String]',
			uY = '[object Symbol]',
			hY = '[object ArrayBuffer]',
			pY = '[object DataView]',
			dY = '[object Float32Array]',
			vY = '[object Float64Array]',
			mY = '[object Int8Array]',
			LY = '[object Int16Array]',
			gY = '[object Int32Array]',
			MY = '[object Uint8Array]',
			zY = '[object Uint8ClampedArray]',
			HY = '[object Uint16Array]',
			VY = '[object Uint32Array]'
		function yY(e, r, t) {
			var n = e.constructor
			switch (r) {
				case hY:
					return eY(e)
				case iY:
				case oY:
					return new n(+e)
				case pY:
					return rY(e, t)
				case dY:
				case vY:
				case mY:
				case LY:
				case gY:
				case MY:
				case zY:
				case HY:
				case VY:
					return aY(e, t)
				case cY:
					return new n()
				case CY:
				case fY:
					return new n(e)
				case sY:
					return tY(e)
				case lY:
					return new n()
				case uY:
					return nY(e)
			}
		}
		Gy.exports = yY
	})
	var Ky = z((i82, Yy) => {
		var SY = Pe(),
			xY = Un(),
			wY = Be()
		function NY(e) {
			return typeof e.constructor == 'function' && !wY(e) ? SY(xY(e)) : {}
		}
		Yy.exports = NY
	})
	var Xy = z((o82, Qy) => {
		var _Y = $5(),
			kY = s4(),
			PY = '[object Map]'
		function AY(e) {
			return kY(e) && _Y(e) == PY
		}
		Qy.exports = AY
	})
	var eS = z((c82, $y) => {
		var EY = Xy(),
			TY = An(),
			Jy = En(),
			Zy = Jy && Jy.isMap,
			RY = Zy ? TY(Zy) : EY
		$y.exports = RY
	})
	var tS = z((C82, rS) => {
		var OY = $5(),
			DY = s4(),
			bY = '[object Set]'
		function FY(e) {
			return DY(e) && OY(e) == bY
		}
		rS.exports = FY
	})
	var oS = z((s82, iS) => {
		var IY = tS(),
			BY = An(),
			nS = En(),
			aS = nS && nS.isSet,
			qY = aS ? BY(aS) : IY
		iS.exports = qY
	})
	var Ml = z((l82, lS) => {
		var UY = Fn(),
			jY = xn(),
			GY = il(),
			WY = sl(),
			YY = KV(),
			KY = $V(),
			QY = Ee(),
			XY = oy(),
			JY = fy(),
			ZY = hl(),
			$Y = dy(),
			eK = $5(),
			rK = ky(),
			tK = Wy(),
			nK = Ky(),
			aK = p3(),
			iK = be(),
			oK = eS(),
			cK = H6(),
			CK = oS(),
			sK = qe(),
			lK = In(),
			fK = 1,
			uK = 2,
			hK = 4,
			cS = '[object Arguments]',
			pK = '[object Array]',
			dK = '[object Boolean]',
			vK = '[object Date]',
			mK = '[object Error]',
			CS = '[object Function]',
			LK = '[object GeneratorFunction]',
			gK = '[object Map]',
			MK = '[object Number]',
			sS = '[object Object]',
			zK = '[object RegExp]',
			HK = '[object Set]',
			VK = '[object String]',
			yK = '[object Symbol]',
			SK = '[object WeakMap]',
			xK = '[object ArrayBuffer]',
			wK = '[object DataView]',
			NK = '[object Float32Array]',
			_K = '[object Float64Array]',
			kK = '[object Int8Array]',
			PK = '[object Int16Array]',
			AK = '[object Int32Array]',
			EK = '[object Uint8Array]',
			TK = '[object Uint8ClampedArray]',
			RK = '[object Uint16Array]',
			OK = '[object Uint32Array]',
			W2 = {}
		W2[cS] =
			W2[pK] =
			W2[xK] =
			W2[wK] =
			W2[dK] =
			W2[vK] =
			W2[NK] =
			W2[_K] =
			W2[kK] =
			W2[PK] =
			W2[AK] =
			W2[gK] =
			W2[MK] =
			W2[sS] =
			W2[zK] =
			W2[HK] =
			W2[VK] =
			W2[yK] =
			W2[EK] =
			W2[TK] =
			W2[RK] =
			W2[OK] =
				!0
		W2[mK] = W2[CS] = W2[SK] = !1
		function Gn(e, r, t, n, i, c) {
			var C,
				l = r & fK,
				u = r & uK,
				h = r & hK
			if ((t && (C = i ? t(e, n, i, c) : t(e)), C !== void 0)) return C
			if (!cK(e)) return e
			var v = aK(e)
			if (v) {
				if (((C = rK(e)), !l)) return QY(e, C)
			} else {
				var g = eK(e),
					m = g == CS || g == LK
				if (iK(e)) return KY(e, l)
				if (g == sS || g == cS || (m && !i)) {
					if (((C = u || m ? {} : nK(e)), !l)) return u ? JY(e, YY(C, e)) : XY(e, WY(C, e))
				} else {
					if (!W2[g]) return i ? e : {}
					C = tK(e, g, l)
				}
			}
			c || (c = new UY())
			var H = c.get(e)
			if (H) return H
			c.set(e, C),
				CK(e)
					? e.forEach(function (w) {
							C.add(Gn(w, r, t, w, e, c))
					  })
					: oK(e) &&
					  e.forEach(function (w, V) {
							C.set(V, Gn(w, r, t, V, e, c))
					  })
			var L = h ? (u ? $Y : ZY) : u ? lK : sK,
				x = v ? void 0 : L(e)
			return (
				jY(x || e, function (w, V) {
					x && ((V = w), (w = e[V])), GY(C, V, Gn(w, r, t, V, e, c))
				}),
				C
			)
		}
		lS.exports = Gn
	})
	var uS = z((f82, fS) => {
		var DK = Ml(),
			bK = 4
		function FK(e) {
			return DK(e, bK)
		}
		fS.exports = FK
	})
	var pS = z((u82, hS) => {
		var IK = _n(),
			BK = 8
		function zl(e, r, t) {
			r = t ? void 0 : r
			var n = IK(e, BK, void 0, void 0, void 0, void 0, void 0, r)
			return (n.placeholder = zl.placeholder), n
		}
		zl.placeholder = {}
		hS.exports = zl
	})
	var mS = z((h82, vS) => {
		var qK = C5(),
			UK = Un(),
			jK = s4(),
			GK = '[object Object]',
			WK = Function.prototype,
			YK = Object.prototype,
			dS = WK.toString,
			KK = YK.hasOwnProperty,
			QK = dS.call(Object)
		function XK(e) {
			if (!jK(e) || qK(e) != GK) return !1
			var r = UK(e)
			if (r === null) return !0
			var t = KK.call(r, 'constructor') && r.constructor
			return typeof t == 'function' && t instanceof t && dS.call(t) == QK
		}
		vS.exports = XK
	})
	var gS = z((p82, LS) => {
		var JK = C5(),
			ZK = s4(),
			$K = mS(),
			eQ = '[object DOMException]',
			rQ = '[object Error]'
		function tQ(e) {
			if (!ZK(e)) return !1
			var r = JK(e)
			return r == rQ || r == eQ || (typeof e.message == 'string' && typeof e.name == 'string' && !$K(e))
		}
		LS.exports = tQ
	})
	var zS = z((d82, MS) => {
		var nQ = $5(),
			aQ = s4(),
			iQ = '[object WeakMap]'
		function oQ(e) {
			return aQ(e) && nQ(e) == iQ
		}
		MS.exports = oQ
	})
	var VS = z((v82, HS) => {
		var cQ = '__lodash_hash_undefined__'
		function CQ(e) {
			return this.__data__.set(e, cQ), this
		}
		HS.exports = CQ
	})
	var SS = z((m82, yS) => {
		function sQ(e) {
			return this.__data__.has(e)
		}
		yS.exports = sQ
	})
	var wS = z((L82, xS) => {
		var lQ = bn(),
			fQ = VS(),
			uQ = SS()
		function Wn(e) {
			var r = -1,
				t = e == null ? 0 : e.length
			for (this.__data__ = new lQ(); ++r < t; ) this.add(e[r])
		}
		Wn.prototype.add = Wn.prototype.push = fQ
		Wn.prototype.has = uQ
		xS.exports = Wn
	})
	var _S = z((g82, NS) => {
		function hQ(e, r) {
			for (var t = -1, n = e == null ? 0 : e.length; ++t < n; ) if (r(e[t], t, e)) return !0
			return !1
		}
		NS.exports = hQ
	})
	var PS = z((M82, kS) => {
		function pQ(e, r) {
			return e.has(r)
		}
		kS.exports = pQ
	})
	var Hl = z((z82, AS) => {
		var dQ = wS(),
			vQ = _S(),
			mQ = PS(),
			LQ = 1,
			gQ = 2
		function MQ(e, r, t, n, i, c) {
			var C = t & LQ,
				l = e.length,
				u = r.length
			if (l != u && !(C && u > l)) return !1
			var h = c.get(e),
				v = c.get(r)
			if (h && v) return h == r && v == e
			var g = -1,
				m = !0,
				H = t & gQ ? new dQ() : void 0
			for (c.set(e, r), c.set(r, e); ++g < l; ) {
				var L = e[g],
					x = r[g]
				if (n) var w = C ? n(x, L, g, r, e, c) : n(L, x, g, e, r, c)
				if (w !== void 0) {
					if (w) continue
					m = !1
					break
				}
				if (H) {
					if (
						!vQ(r, function (V, M) {
							if (!mQ(H, M) && (L === V || i(L, V, t, n, c))) return H.push(M)
						})
					) {
						m = !1
						break
					}
				} else if (!(L === x || i(L, x, t, n, c))) {
					m = !1
					break
				}
			}
			return c.delete(e), c.delete(r), m
		}
		AS.exports = MQ
	})
	var TS = z((H82, ES) => {
		function zQ(e) {
			var r = -1,
				t = Array(e.size)
			return (
				e.forEach(function (n, i) {
					t[++r] = [i, n]
				}),
				t
			)
		}
		ES.exports = zQ
	})
	var OS = z((V82, RS) => {
		function HQ(e) {
			var r = -1,
				t = Array(e.size)
			return (
				e.forEach(function (n) {
					t[++r] = n
				}),
				t
			)
		}
		RS.exports = HQ
	})
	var BS = z((y82, IS) => {
		var DS = J5(),
			bS = gl(),
			VQ = kn(),
			yQ = Hl(),
			SQ = TS(),
			xQ = OS(),
			wQ = 1,
			NQ = 2,
			_Q = '[object Boolean]',
			kQ = '[object Date]',
			PQ = '[object Error]',
			AQ = '[object Map]',
			EQ = '[object Number]',
			TQ = '[object RegExp]',
			RQ = '[object Set]',
			OQ = '[object String]',
			DQ = '[object Symbol]',
			bQ = '[object ArrayBuffer]',
			FQ = '[object DataView]',
			FS = DS ? DS.prototype : void 0,
			Vl = FS ? FS.valueOf : void 0
		function IQ(e, r, t, n, i, c, C) {
			switch (t) {
				case FQ:
					if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset) return !1
					;(e = e.buffer), (r = r.buffer)
				case bQ:
					return !(e.byteLength != r.byteLength || !c(new bS(e), new bS(r)))
				case _Q:
				case kQ:
				case EQ:
					return VQ(+e, +r)
				case PQ:
					return e.name == r.name && e.message == r.message
				case TQ:
				case OQ:
					return e == r + ''
				case AQ:
					var l = SQ
				case RQ:
					var u = n & wQ
					if ((l || (l = xQ), e.size != r.size && !u)) return !1
					var h = C.get(e)
					if (h) return h == r
					;(n |= NQ), C.set(e, r)
					var v = yQ(l(e), l(r), n, i, c, C)
					return C.delete(e), v
				case DQ:
					if (Vl) return Vl.call(e) == Vl.call(r)
			}
			return !1
		}
		IS.exports = IQ
	})
	var jS = z((S82, US) => {
		var qS = hl(),
			BQ = 1,
			qQ = Object.prototype,
			UQ = qQ.hasOwnProperty
		function jQ(e, r, t, n, i, c) {
			var C = t & BQ,
				l = qS(e),
				u = l.length,
				h = qS(r),
				v = h.length
			if (u != v && !C) return !1
			for (var g = u; g--; ) {
				var m = l[g]
				if (!(C ? m in r : UQ.call(r, m))) return !1
			}
			var H = c.get(e),
				L = c.get(r)
			if (H && L) return H == r && L == e
			var x = !0
			c.set(e, r), c.set(r, e)
			for (var w = C; ++g < u; ) {
				m = l[g]
				var V = e[m],
					M = r[m]
				if (n) var S = C ? n(M, V, m, r, e, c) : n(V, M, m, e, r, c)
				if (!(S === void 0 ? V === M || i(V, M, t, n, c) : S)) {
					x = !1
					break
				}
				w || (w = m == 'constructor')
			}
			if (x && !w) {
				var k = e.constructor,
					D = r.constructor
				k != D &&
					'constructor' in e &&
					'constructor' in r &&
					!(typeof k == 'function' && k instanceof k && typeof D == 'function' && D instanceof D) &&
					(x = !1)
			}
			return c.delete(e), c.delete(r), x
		}
		US.exports = jQ
	})
	var ZS = z((x82, JS) => {
		var yl = Fn(),
			GQ = Hl(),
			WQ = BS(),
			YQ = jS(),
			GS = $5(),
			WS = p3(),
			YS = be(),
			KQ = Tn(),
			QQ = 1,
			KS = '[object Arguments]',
			QS = '[object Array]',
			Yn = '[object Object]',
			XQ = Object.prototype,
			XS = XQ.hasOwnProperty
		function JQ(e, r, t, n, i, c) {
			var C = WS(e),
				l = WS(r),
				u = C ? QS : GS(e),
				h = l ? QS : GS(r)
			;(u = u == KS ? Yn : u), (h = h == KS ? Yn : h)
			var v = u == Yn,
				g = h == Yn,
				m = u == h
			if (m && YS(e)) {
				if (!YS(r)) return !1
				;(C = !0), (v = !1)
			}
			if (m && !v) return c || (c = new yl()), C || KQ(e) ? GQ(e, r, t, n, i, c) : WQ(e, r, u, t, n, i, c)
			if (!(t & QQ)) {
				var H = v && XS.call(e, '__wrapped__'),
					L = g && XS.call(r, '__wrapped__')
				if (H || L) {
					var x = H ? e.value() : e,
						w = L ? r.value() : r
					return c || (c = new yl()), i(x, w, t, n, c)
				}
			}
			return m ? (c || (c = new yl()), YQ(e, r, t, n, i, c)) : !1
		}
		JS.exports = JQ
	})
	var Sl = z((w82, rx) => {
		var ZQ = ZS(),
			$S = s4()
		function ex(e, r, t, n, i) {
			return e === r ? !0 : e == null || r == null || (!$S(e) && !$S(r)) ? e !== e && r !== r : ZQ(e, r, t, n, ex, i)
		}
		rx.exports = ex
	})
	var nx = z((N82, tx) => {
		var $Q = Fn(),
			eX = Sl(),
			rX = 1,
			tX = 2
		function nX(e, r, t, n) {
			var i = t.length,
				c = i,
				C = !n
			if (e == null) return !c
			for (e = Object(e); i--; ) {
				var l = t[i]
				if (C && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1
			}
			for (; ++i < c; ) {
				l = t[i]
				var u = l[0],
					h = e[u],
					v = l[1]
				if (C && l[2]) {
					if (h === void 0 && !(u in e)) return !1
				} else {
					var g = new $Q()
					if (n) var m = n(h, v, u, e, r, g)
					if (!(m === void 0 ? eX(v, h, rX | tX, n, g) : m)) return !1
				}
			}
			return !0
		}
		tx.exports = nX
	})
	var xl = z((_82, ax) => {
		var aX = H6()
		function iX(e) {
			return e === e && !aX(e)
		}
		ax.exports = iX
	})
	var ox = z((k82, ix) => {
		var oX = xl(),
			cX = qe()
		function CX(e) {
			for (var r = cX(e), t = r.length; t--; ) {
				var n = r[t],
					i = e[n]
				r[t] = [n, i, oX(i)]
			}
			return r
		}
		ix.exports = CX
	})
	var wl = z((P82, cx) => {
		function sX(e, r) {
			return function (t) {
				return t == null ? !1 : t[e] === r && (r !== void 0 || e in Object(t))
			}
		}
		cx.exports = sX
	})
	var sx = z((A82, Cx) => {
		var lX = nx(),
			fX = ox(),
			uX = wl()
		function hX(e) {
			var r = fX(e)
			return r.length == 1 && r[0][2]
				? uX(r[0][0], r[0][1])
				: function (t) {
						return t === e || lX(t, e, r)
				  }
		}
		Cx.exports = hX
	})
	var Kn = z((E82, lx) => {
		var pX = p3(),
			dX = p0(),
			vX = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
			mX = /^\w*$/
		function LX(e, r) {
			if (pX(e)) return !1
			var t = typeof e
			return t == 'number' || t == 'symbol' || t == 'boolean' || e == null || dX(e)
				? !0
				: mX.test(e) || !vX.test(e) || (r != null && e in Object(r))
		}
		lx.exports = LX
	})
	var hx = z((T82, ux) => {
		var fx = bn(),
			gX = 'Expected a function'
		function Nl(e, r) {
			if (typeof e != 'function' || (r != null && typeof r != 'function')) throw new TypeError(gX)
			var t = function () {
				var n = arguments,
					i = r ? r.apply(this, n) : n[0],
					c = t.cache
				if (c.has(i)) return c.get(i)
				var C = e.apply(this, n)
				return (t.cache = c.set(i, C) || c), C
			}
			return (t.cache = new (Nl.Cache || fx)()), t
		}
		Nl.Cache = fx
		ux.exports = Nl
	})
	var dx = z((R82, px) => {
		var MX = hx(),
			zX = 500
		function HX(e) {
			var r = MX(e, function (n) {
					return t.size === zX && t.clear(), n
				}),
				t = r.cache
			return r
		}
		px.exports = HX
	})
	var _l = z((O82, vx) => {
		var VX = dx(),
			yX = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
			SX = /\\(\\)?/g,
			xX = VX(function (e) {
				var r = []
				return (
					e.charCodeAt(0) === 46 && r.push(''),
					e.replace(yX, function (t, n, i, c) {
						r.push(i ? c.replace(SX, '$1') : n || t)
					}),
					r
				)
			})
		vx.exports = xX
	})
	var kl = z((D82, mx) => {
		function wX(e, r) {
			for (var t = -1, n = e == null ? 0 : e.length, i = Array(n); ++t < n; ) i[t] = r(e[t], t, e)
			return i
		}
		mx.exports = wX
	})
	var Vx = z((b82, Hx) => {
		var Lx = J5(),
			NX = kl(),
			_X = p3(),
			kX = p0(),
			PX = 1 / 0,
			gx = Lx ? Lx.prototype : void 0,
			Mx = gx ? gx.toString : void 0
		function zx(e) {
			if (typeof e == 'string') return e
			if (_X(e)) return NX(e, zx) + ''
			if (kX(e)) return Mx ? Mx.call(e) : ''
			var r = e + ''
			return r == '0' && 1 / e == -PX ? '-0' : r
		}
		Hx.exports = zx
	})
	var Pl = z((F82, yx) => {
		var AX = Vx()
		function EX(e) {
			return e == null ? '' : AX(e)
		}
		yx.exports = EX
	})
	var Al = z((I82, Sx) => {
		var TX = p3(),
			RX = Kn(),
			OX = _l(),
			DX = Pl()
		function bX(e, r) {
			return TX(e) ? e : RX(e, r) ? [e] : OX(DX(e))
		}
		Sx.exports = bX
	})
	var V0 = z((B82, xx) => {
		var FX = p0(),
			IX = 1 / 0
		function BX(e) {
			if (typeof e == 'string' || FX(e)) return e
			var r = e + ''
			return r == '0' && 1 / e == -IX ? '-0' : r
		}
		xx.exports = BX
	})
	var El = z((q82, wx) => {
		var qX = Al(),
			UX = V0()
		function jX(e, r) {
			r = qX(r, e)
			for (var t = 0, n = r.length; e != null && t < n; ) e = e[UX(r[t++])]
			return t && t == n ? e : void 0
		}
		wx.exports = jX
	})
	var Qn = z((U82, Nx) => {
		var GX = El()
		function WX(e, r, t) {
			var n = e == null ? void 0 : GX(e, r)
			return n === void 0 ? t : n
		}
		Nx.exports = WX
	})
	var kx = z((j82, _x) => {
		function YX(e, r) {
			return e != null && r in Object(e)
		}
		_x.exports = YX
	})
	var Ax = z((G82, Px) => {
		var KX = Al(),
			QX = Oe(),
			XX = p3(),
			JX = wn(),
			ZX = Pn(),
			$X = V0()
		function eJ(e, r, t) {
			r = KX(r, e)
			for (var n = -1, i = r.length, c = !1; ++n < i; ) {
				var C = $X(r[n])
				if (!(c = e != null && t(e, C))) break
				e = e[C]
			}
			return c || ++n != i ? c : ((i = e == null ? 0 : e.length), !!i && ZX(i) && JX(C, i) && (XX(e) || QX(e)))
		}
		Px.exports = eJ
	})
	var Tx = z((W82, Ex) => {
		var rJ = kx(),
			tJ = Ax()
		function nJ(e, r) {
			return e != null && tJ(e, r, rJ)
		}
		Ex.exports = nJ
	})
	var Ox = z((Y82, Rx) => {
		var aJ = Sl(),
			iJ = Qn(),
			oJ = Tx(),
			cJ = Kn(),
			CJ = xl(),
			sJ = wl(),
			lJ = V0(),
			fJ = 1,
			uJ = 2
		function hJ(e, r) {
			return cJ(e) && CJ(r)
				? sJ(lJ(e), r)
				: function (t) {
						var n = iJ(t, e)
						return n === void 0 && n === r ? oJ(t, e) : aJ(r, n, fJ | uJ)
				  }
		}
		Rx.exports = hJ
	})
	var bx = z((K82, Dx) => {
		function pJ(e) {
			return function (r) {
				return r?.[e]
			}
		}
		Dx.exports = pJ
	})
	var Ix = z((Q82, Fx) => {
		var dJ = El()
		function vJ(e) {
			return function (r) {
				return dJ(r, e)
			}
		}
		Fx.exports = vJ
	})
	var qx = z((X82, Bx) => {
		var mJ = bx(),
			LJ = Ix(),
			gJ = Kn(),
			MJ = V0()
		function zJ(e) {
			return gJ(e) ? mJ(MJ(e)) : LJ(e)
		}
		Bx.exports = zJ
	})
	var jx = z((J82, Ux) => {
		var HJ = sx(),
			VJ = Ox(),
			yJ = Ln(),
			SJ = p3(),
			xJ = qx()
		function wJ(e) {
			return typeof e == 'function'
				? e
				: e == null
				? yJ
				: typeof e == 'object'
				? SJ(e)
					? VJ(e[0], e[1])
					: HJ(e)
				: xJ(e)
		}
		Ux.exports = wJ
	})
	var Wx = z((Z82, Gx) => {
		var NJ = Ml(),
			_J = jx(),
			kJ = 1
		function PJ(e) {
			return _J(typeof e == 'function' ? e : NJ(e, kJ))
		}
		Gx.exports = PJ
	})
	var Xx = z(($82, Qx) => {
		var Yx = J5(),
			AJ = Oe(),
			EJ = p3(),
			Kx = Yx ? Yx.isConcatSpreadable : void 0
		function TJ(e) {
			return EJ(e) || AJ(e) || !!(Kx && e && e[Kx])
		}
		Qx.exports = TJ
	})
	var $x = z((e02, Zx) => {
		var RJ = qn(),
			OJ = Xx()
		function Jx(e, r, t, n, i) {
			var c = -1,
				C = e.length
			for (t || (t = OJ), i || (i = []); ++c < C; ) {
				var l = e[c]
				r > 0 && t(l) ? (r > 1 ? Jx(l, r - 1, t, n, i) : RJ(i, l)) : n || (i[i.length] = l)
			}
			return i
		}
		Zx.exports = Jx
	})
	var rw = z((r02, ew) => {
		var DJ = $x()
		function bJ(e) {
			var r = e == null ? 0 : e.length
			return r ? DJ(e, 1) : []
		}
		ew.exports = bJ
	})
	var aw = z((t02, nw) => {
		var FJ = Mn(),
			tw = Math.max
		function IJ(e, r, t) {
			return (
				(r = tw(r === void 0 ? e.length - 1 : r, 0)),
				function () {
					for (var n = arguments, i = -1, c = tw(n.length - r, 0), C = Array(c); ++i < c; ) C[i] = n[r + i]
					i = -1
					for (var l = Array(r + 1); ++i < r; ) l[i] = n[i]
					return (l[r] = t(C)), FJ(e, this, l)
				}
			)
		}
		nw.exports = IJ
	})
	var ow = z((n02, iw) => {
		var BJ = rw(),
			qJ = aw(),
			UJ = Ks()
		function jJ(e) {
			return UJ(qJ(e, void 0, BJ), e + '')
		}
		iw.exports = jJ
	})
	var Cw = z((a02, cw) => {
		var GJ = _n(),
			WJ = ow(),
			YJ = 256,
			KJ = WJ(function (e, r) {
				return GJ(e, YJ, void 0, void 0, void 0, r)
			})
		cw.exports = KJ
	})
	var lw = z((i02, sw) => {
		var QJ = kl(),
			XJ = Ee(),
			JJ = p3(),
			ZJ = p0(),
			$J = _l(),
			eZ = V0(),
			rZ = Pl()
		function tZ(e) {
			return JJ(e) ? QJ(e, eZ) : ZJ(e) ? [e] : XJ($J(rZ(e)))
		}
		sw.exports = tZ
	})
	var uw = z((o02, fw) => {
		fw.exports = {
			ary: CH(),
			assign: sl(),
			clone: uS(),
			curry: pS(),
			forEach: xn(),
			isArray: p3(),
			isError: gS(),
			isFunction: gn(),
			isWeakMap: zS(),
			iteratee: Wx(),
			keys: Rn(),
			rearg: Cw(),
			toInteger: el(),
			toPath: lw(),
		}
	})
	var Xn = z((c02, hw) => {
		var nZ = bg(),
			aZ = uw()
		function iZ(e, r, t) {
			return nZ(aZ, e, r, t)
		}
		hw.exports = iZ
	})
	var Jn = z((C02, dw) => {
		var oZ = Xn(),
			pw = oZ('getOr', Qn())
		pw.placeholder = _e()
		dw.exports = pw
	})
	var Lw = z((y0) => {
		'use strict'
		Object.defineProperty(y0, '__esModule', { value: !0 })
		y0.createCacheKeyComparator = mw
		y0.defaultEqualityCheck = void 0
		y0.defaultMemoize = sZ
		var $n = 'NOT_FOUND'
		function cZ(e) {
			var r
			return {
				get: function (n) {
					return r && e(r.key, n) ? r.value : $n
				},
				put: function (n, i) {
					r = { key: n, value: i }
				},
				getEntries: function () {
					return r ? [r] : []
				},
				clear: function () {
					r = void 0
				},
			}
		}
		function CZ(e, r) {
			var t = []
			function n(l) {
				var u = t.findIndex(function (v) {
					return r(l, v.key)
				})
				if (u > -1) {
					var h = t[u]
					return u > 0 && (t.splice(u, 1), t.unshift(h)), h.value
				}
				return $n
			}
			function i(l, u) {
				n(l) === $n && (t.unshift({ key: l, value: u }), t.length > e && t.pop())
			}
			function c() {
				return t
			}
			function C() {
				t = []
			}
			return { get: n, put: i, getEntries: c, clear: C }
		}
		var vw = function (r, t) {
			return r === t
		}
		y0.defaultEqualityCheck = vw
		function mw(e) {
			return function (t, n) {
				if (t === null || n === null || t.length !== n.length) return !1
				for (var i = t.length, c = 0; c < i; c++) if (!e(t[c], n[c])) return !1
				return !0
			}
		}
		function sZ(e, r) {
			var t = typeof r == 'object' ? r : { equalityCheck: r },
				n = t.equalityCheck,
				i = n === void 0 ? vw : n,
				c = t.maxSize,
				C = c === void 0 ? 1 : c,
				l = t.resultEqualityCheck,
				u = mw(i),
				h = C === 1 ? cZ(u) : CZ(C, u)
			function v() {
				var g = h.get(arguments)
				if (g === $n) {
					if (((g = e.apply(null, arguments)), l)) {
						var m = h.getEntries(),
							H = m.find(function (L) {
								return l(L.value, g)
							})
						H && (g = H.value)
					}
					h.put(arguments, g)
				}
				return g
			}
			return (
				(v.clearCache = function () {
					return h.clear()
				}),
				v
			)
		}
	})
	var ea = z((V6) => {
		'use strict'
		Object.defineProperty(V6, '__esModule', { value: !0 })
		V6.createSelector = void 0
		V6.createSelectorCreator = gw
		V6.createStructuredSelector = void 0
		Object.defineProperty(V6, 'defaultEqualityCheck', {
			enumerable: !0,
			get: function () {
				return Tl.defaultEqualityCheck
			},
		})
		Object.defineProperty(V6, 'defaultMemoize', {
			enumerable: !0,
			get: function () {
				return Tl.defaultMemoize
			},
		})
		var Tl = Lw()
		function lZ(e) {
			var r = Array.isArray(e[0]) ? e[0] : e
			if (
				!r.every(function (n) {
					return typeof n == 'function'
				})
			) {
				var t = r
					.map(function (n) {
						return typeof n == 'function' ? 'function ' + (n.name || 'unnamed') + '()' : typeof n
					})
					.join(', ')
				throw new Error(
					'createSelector expects all input-selectors to be functions, but received the following types: [' +
						t +
						']',
				)
			}
			return r
		}
		function gw(e) {
			for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n]
			var i = function () {
				for (var C = arguments.length, l = new Array(C), u = 0; u < C; u++) l[u] = arguments[u]
				var h = 0,
					v,
					g = { memoizeOptions: void 0 },
					m = l.pop()
				if ((typeof m == 'object' && ((g = m), (m = l.pop())), typeof m != 'function'))
					throw new Error(
						'createSelector expects an output function after the inputs, but received: [' + typeof m + ']',
					)
				var H = g,
					L = H.memoizeOptions,
					x = L === void 0 ? t : L,
					w = Array.isArray(x) ? x : [x],
					V = lZ(l),
					M = e.apply(
						void 0,
						[
							function () {
								return h++, m.apply(null, arguments)
							},
						].concat(w),
					),
					S = e(function () {
						for (var k = [], D = V.length, b = 0; b < D; b++) k.push(V[b].apply(null, arguments))
						return (v = M.apply(null, k)), v
					})
				return (
					Object.assign(S, {
						resultFunc: m,
						memoizedResultFunc: M,
						dependencies: V,
						lastResult: function () {
							return v
						},
						recomputations: function () {
							return h
						},
						resetRecomputations: function () {
							return (h = 0)
						},
					}),
					S
				)
			}
			return i
		}
		var Mw = gw(Tl.defaultMemoize)
		V6.createSelector = Mw
		var fZ = function (r, t) {
			if ((t === void 0 && (t = Mw), typeof r != 'object'))
				throw new Error(
					'createStructuredSelector expects first argument to be an object ' +
						('where each property is a selector, instead received a ' + typeof r),
				)
			var n = Object.keys(r),
				i = t(
					n.map(function (c) {
						return r[c]
					}),
					function () {
						for (var c = arguments.length, C = new Array(c), l = 0; l < c; l++) C[l] = arguments[l]
						return C.reduce(function (u, h, v) {
							return (u[n[v]] = h), u
						}, {})
					},
				)
			return i
		}
		V6.createStructuredSelector = fZ
	})
	var Ol = z((p02, yw) => {
		var pZ = Xn(),
			Vw = pZ('get', Qn())
		Vw.placeholder = _e()
		yw.exports = Vw
	})
	var rf = z((E0) => {
		'use strict'
		Object.defineProperty(E0, '__esModule', { value: !0 })
		E0.ActionCreators = E0.ActionTypes = void 0
		var o8 = {
			UNDO: '@@redux-undo/UNDO',
			REDO: '@@redux-undo/REDO',
			JUMP_TO_FUTURE: '@@redux-undo/JUMP_TO_FUTURE',
			JUMP_TO_PAST: '@@redux-undo/JUMP_TO_PAST',
			JUMP: '@@redux-undo/JUMP',
			CLEAR_HISTORY: '@@redux-undo/CLEAR_HISTORY',
		}
		E0.ActionTypes = o8
		var VZ = {
			undo: function () {
				return { type: o8.UNDO }
			},
			redo: function () {
				return { type: o8.REDO }
			},
			jumpToFuture: function (r) {
				return { type: o8.JUMP_TO_FUTURE, index: r }
			},
			jumpToPast: function (r) {
				return { type: o8.JUMP_TO_PAST, index: r }
			},
			jump: function (r) {
				return { type: o8.JUMP, index: r }
			},
			clearHistory: function () {
				return { type: o8.CLEAR_HISTORY }
			},
		}
		E0.ActionCreators = VZ
	})
	var tf = z((w6) => {
		'use strict'
		Object.defineProperty(w6, '__esModule', { value: !0 })
		w6.parseActions = La
		w6.isHistory = yZ
		w6.includeAction = SZ
		w6.excludeAction = xZ
		w6.combineFilters = wZ
		w6.groupByActionTypes = NZ
		w6.newHistory = _Z
		function La(e) {
			var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []
			return Array.isArray(e) ? e : typeof e == 'string' ? [e] : r
		}
		function yZ(e) {
			return (
				typeof e.present < 'u' &&
				typeof e.future < 'u' &&
				typeof e.past < 'u' &&
				Array.isArray(e.future) &&
				Array.isArray(e.past)
			)
		}
		function SZ(e) {
			var r = La(e)
			return function (t) {
				return r.indexOf(t.type) >= 0
			}
		}
		function xZ(e) {
			var r = La(e)
			return function (t) {
				return r.indexOf(t.type) < 0
			}
		}
		function wZ() {
			for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t]
			return r.reduce(
				function (n, i) {
					return function (c, C, l) {
						return n(c, C, l) && i(c, C, l)
					}
				},
				function () {
					return !0
				},
			)
		}
		function NZ(e) {
			var r = La(e)
			return function (t) {
				return r.indexOf(t.type) >= 0 ? t.type : null
			}
		}
		function _Z(e, r, t) {
			var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null
			return {
				past: e,
				present: r,
				future: t,
				group: n,
				_latestUnfiltered: r,
				index: e.length,
				limit: e.length + t.length + 1,
			}
		}
	})
	var Zw = z((T0) => {
		'use strict'
		Object.defineProperty(T0, '__esModule', { value: !0 })
		T0.set = bZ
		T0.start = RZ
		T0.end = OZ
		T0.log = DZ
		function J4(e) {
			return AZ(e) || PZ(e) || kZ()
		}
		function kZ() {
			throw new TypeError('Invalid attempt to spread non-iterable instance')
		}
		function PZ(e) {
			if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === '[object Arguments]')
				return Array.from(e)
		}
		function AZ(e) {
			if (Array.isArray(e)) {
				for (var r = 0, t = new Array(e.length); r < e.length; r++) t[r] = e[r]
				return t
			}
		}
		var ga,
			u4,
			nf = { prevState: '#9E9E9E', action: '#03A9F4', nextState: '#4CAF50' }
		function EZ() {
			u4 = { header: [], prev: [], action: [], next: [], msgs: [] }
		}
		function TZ() {
			var e = u4,
				r = e.header,
				t = e.prev,
				n = e.next,
				i = e.action,
				c = e.msgs
			if (console.group) {
				var C, l, u, h, v
				;(C = console).groupCollapsed.apply(C, J4(r)),
					(l = console).log.apply(l, J4(t)),
					(u = console).log.apply(u, J4(i)),
					(h = console).log.apply(h, J4(n)),
					(v = console).log.apply(v, J4(c)),
					console.groupEnd()
			} else {
				var g, m, H, L, x
				;(g = console).log.apply(g, J4(r)),
					(m = console).log.apply(m, J4(t)),
					(H = console).log.apply(H, J4(i)),
					(L = console).log.apply(L, J4(n)),
					(x = console).log.apply(x, J4(c))
			}
		}
		function af(e, r, t) {
			return ['%c'.concat(e), 'color: '.concat(r, '; font-weight: bold'), t]
		}
		function RZ(e, r) {
			EZ(),
				ga &&
					(console.group
						? ((u4.header = ['%credux-undo', 'font-style: italic', 'action', e.type]),
						  (u4.action = af('action', nf.action, e)),
						  (u4.prev = af('prev history', nf.prevState, r)))
						: ((u4.header = ['redux-undo action', e.type]),
						  (u4.action = ['action', e]),
						  (u4.prev = ['prev history', r])))
		}
		function OZ(e) {
			ga && (console.group ? (u4.next = af('next history', nf.nextState, e)) : (u4.next = ['next history', e]), TZ())
		}
		function DZ() {
			if (ga) {
				for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t]
				u4.msgs = u4.msgs.concat(
					[].concat(r, [
						`
`,
					]),
				)
			}
		}
		function bZ(e) {
			ga = e
		}
	})
	var aN = z((Cf) => {
		'use strict'
		function Ma(e) {
			return (
				typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
					? (Ma = function (t) {
							return typeof t
					  })
					: (Ma = function (t) {
							return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
								? 'symbol'
								: typeof t
					  }),
				Ma(e)
			)
		}
		Object.defineProperty(Cf, '__esModule', { value: !0 })
		Cf.default = WZ
		var b2 = FZ(Zw()),
			R0 = rf(),
			Z4 = tf()
		function rN() {
			if (typeof WeakMap != 'function') return null
			var e = new WeakMap()
			return (
				(rN = function () {
					return e
				}),
				e
			)
		}
		function FZ(e) {
			if (e && e.__esModule) return e
			if (e === null || (Ma(e) !== 'object' && typeof e != 'function')) return { default: e }
			var r = rN()
			if (r && r.has(e)) return r.get(e)
			var t = {},
				n = Object.defineProperty && Object.getOwnPropertyDescriptor
			for (var i in e)
				if (Object.prototype.hasOwnProperty.call(e, i)) {
					var c = n ? Object.getOwnPropertyDescriptor(e, i) : null
					c && (c.get || c.set) ? Object.defineProperty(t, i, c) : (t[i] = e[i])
				}
			return (t.default = e), r && r.set(e, t), t
		}
		function $w(e, r) {
			var t = Object.keys(e)
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(e)
				r &&
					(n = n.filter(function (i) {
						return Object.getOwnPropertyDescriptor(e, i).enumerable
					})),
					t.push.apply(t, n)
			}
			return t
		}
		function eN(e) {
			for (var r = 1; r < arguments.length; r++) {
				var t = arguments[r] != null ? arguments[r] : {}
				r % 2
					? $w(Object(t), !0).forEach(function (n) {
							IZ(e, n, t[n])
					  })
					: Object.getOwnPropertyDescriptors
					? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
					: $w(Object(t)).forEach(function (n) {
							Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
					  })
			}
			return e
		}
		function IZ(e, r, t) {
			return (
				r in e
					? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
					: (e[r] = t),
				e
			)
		}
		function Ze(e) {
			return UZ(e) || qZ(e) || BZ()
		}
		function BZ() {
			throw new TypeError('Invalid attempt to spread non-iterable instance')
		}
		function qZ(e) {
			if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === '[object Arguments]')
				return Array.from(e)
		}
		function UZ(e) {
			if (Array.isArray(e)) {
				for (var r = 0, t = new Array(e.length); r < e.length; r++) t[r] = e[r]
				return t
			}
		}
		function of(e, r) {
			var t = (0, Z4.newHistory)([], e, [])
			return r && (t._latestUnfiltered = null), t
		}
		function jZ(e, r, t, n) {
			var i = e.past.length + 1
			b2.log('inserting', r), b2.log('new free: ', t - i)
			var c = e.past,
				C = e._latestUnfiltered,
				l = t && t <= i,
				u = c.slice(l ? 1 : 0),
				h = C != null ? [].concat(Ze(u), [C]) : u
			return (0, Z4.newHistory)(h, r, [], n)
		}
		function tN(e, r) {
			if (r < 0 || r >= e.future.length) return e
			var t = e.past,
				n = e.future,
				i = e._latestUnfiltered,
				c = [].concat(Ze(t), [i], Ze(n.slice(0, r))),
				C = n[r],
				l = n.slice(r + 1)
			return (0, Z4.newHistory)(c, C, l)
		}
		function nN(e, r) {
			if (r < 0 || r >= e.past.length) return e
			var t = e.past,
				n = e.future,
				i = e._latestUnfiltered,
				c = t.slice(0, r),
				C = [].concat(Ze(t.slice(r + 1)), [i], Ze(n)),
				l = t[r]
			return (0, Z4.newHistory)(c, l, C)
		}
		function cf(e, r) {
			return r > 0 ? tN(e, r - 1) : r < 0 ? nN(e, e.past.length + r) : e
		}
		function GZ(e, r) {
			return r.indexOf(e) > -1 ? e : !e
		}
		function WZ(e) {
			var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
			b2.set(r.debug)
			var t = eN(
					{
						limit: void 0,
						filter: function () {
							return !0
						},
						groupBy: function () {
							return null
						},
						undoType: R0.ActionTypes.UNDO,
						redoType: R0.ActionTypes.REDO,
						jumpToPastType: R0.ActionTypes.JUMP_TO_PAST,
						jumpToFutureType: R0.ActionTypes.JUMP_TO_FUTURE,
						jumpType: R0.ActionTypes.JUMP,
						neverSkipReducer: !1,
						ignoreInitialState: !1,
						syncFilter: !1,
					},
					r,
					{
						initTypes: (0, Z4.parseActions)(r.initTypes, ['@@redux-undo/INIT']),
						clearHistoryType: (0, Z4.parseActions)(r.clearHistoryType, [R0.ActionTypes.CLEAR_HISTORY]),
					},
				),
				n = t.neverSkipReducer
					? function (c, C) {
							for (var l = arguments.length, u = new Array(l > 2 ? l - 2 : 0), h = 2; h < l; h++)
								u[h - 2] = arguments[h]
							return eN({}, c, { present: e.apply(void 0, [c.present, C].concat(u)) })
					  }
					: function (c) {
							return c
					  },
				i
			return function () {
				var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : i,
					C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
				b2.start(C, c)
				for (var l = c, u = arguments.length, h = new Array(u > 2 ? u - 2 : 0), v = 2; v < u; v++)
					h[v - 2] = arguments[v]
				if (!i)
					if ((b2.log('history is uninitialized'), c === void 0)) {
						var g = { type: '@@redux-undo/CREATE_HISTORY' },
							m = e.apply(void 0, [c, g].concat(h))
						return (
							(l = of(m, t.ignoreInitialState)), b2.log('do not set initialState on probe actions'), b2.end(l), l
						)
					} else
						(0, Z4.isHistory)(c)
							? ((l = i = t.ignoreInitialState ? c : (0, Z4.newHistory)(c.past, c.present, c.future)),
							  b2.log('initialHistory initialized: initialState is a history', i))
							: ((l = i = of(c, t.ignoreInitialState)),
							  b2.log('initialHistory initialized: initialState is not a history', i))
				var H
				switch (C.type) {
					case void 0:
						return l
					case t.undoType:
						return (H = cf(l, -1)), b2.log('perform undo'), b2.end(H), n.apply(void 0, [H, C].concat(h))
					case t.redoType:
						return (H = cf(l, 1)), b2.log('perform redo'), b2.end(H), n.apply(void 0, [H, C].concat(h))
					case t.jumpToPastType:
						return (
							(H = nN(l, C.index)),
							b2.log('perform jumpToPast to '.concat(C.index)),
							b2.end(H),
							n.apply(void 0, [H, C].concat(h))
						)
					case t.jumpToFutureType:
						return (
							(H = tN(l, C.index)),
							b2.log('perform jumpToFuture to '.concat(C.index)),
							b2.end(H),
							n.apply(void 0, [H, C].concat(h))
						)
					case t.jumpType:
						return (
							(H = cf(l, C.index)),
							b2.log('perform jump to '.concat(C.index)),
							b2.end(H),
							n.apply(void 0, [H, C].concat(h))
						)
					case GZ(C.type, t.clearHistoryType):
						return (
							(H = of(l.present, t.ignoreInitialState)),
							b2.log('perform clearHistory'),
							b2.end(H),
							n.apply(void 0, [H, C].concat(h))
						)
					default:
						if (
							((H = e.apply(void 0, [l.present, C].concat(h))),
							t.initTypes.some(function (M) {
								return M === C.type
							}))
						)
							return b2.log('reset history due to init action'), b2.end(i), i
						if (l._latestUnfiltered === H) return l
						var L = typeof t.filter == 'function' && !t.filter(C, H, l)
						if (L) {
							var x = (0, Z4.newHistory)(l.past, H, l.future, l.group)
							return (
								t.syncFilter || (x._latestUnfiltered = l._latestUnfiltered),
								b2.log('filter ignored action, not storing it in past'),
								b2.end(x),
								x
							)
						}
						var w = t.groupBy(C, H, l)
						if (w != null && w === l.group) {
							var V = (0, Z4.newHistory)(l.past, H, l.future, l.group)
							return b2.log('groupBy grouped the action with the previous action'), b2.end(V), V
						}
						return (l = jZ(l, H, t.limit, w)), b2.log('inserted new state into history'), b2.end(l), l
				}
			}
		}
	})
	var sf = z((h4) => {
		'use strict'
		Object.defineProperty(h4, '__esModule', { value: !0 })
		Object.defineProperty(h4, 'ActionTypes', {
			enumerable: !0,
			get: function () {
				return iN.ActionTypes
			},
		})
		Object.defineProperty(h4, 'ActionCreators', {
			enumerable: !0,
			get: function () {
				return iN.ActionCreators
			},
		})
		Object.defineProperty(h4, 'parseActions', {
			enumerable: !0,
			get: function () {
				return c8.parseActions
			},
		})
		Object.defineProperty(h4, 'isHistory', {
			enumerable: !0,
			get: function () {
				return c8.isHistory
			},
		})
		Object.defineProperty(h4, 'includeAction', {
			enumerable: !0,
			get: function () {
				return c8.includeAction
			},
		})
		Object.defineProperty(h4, 'excludeAction', {
			enumerable: !0,
			get: function () {
				return c8.excludeAction
			},
		})
		Object.defineProperty(h4, 'combineFilters', {
			enumerable: !0,
			get: function () {
				return c8.combineFilters
			},
		})
		Object.defineProperty(h4, 'groupByActionTypes', {
			enumerable: !0,
			get: function () {
				return c8.groupByActionTypes
			},
		})
		Object.defineProperty(h4, 'newHistory', {
			enumerable: !0,
			get: function () {
				return c8.newHistory
			},
		})
		Object.defineProperty(h4, 'default', {
			enumerable: !0,
			get: function () {
				return YZ.default
			},
		})
		var iN = rf(),
			c8 = tf(),
			YZ = KZ(aN())
		function KZ(e) {
			return e && e.__esModule ? e : { default: e }
		}
	})
	var SN = z((we2, yN) => {
		var r$ = Rn(),
			t$ = $5(),
			n$ = Oe(),
			a$ = p3(),
			i$ = On(),
			o$ = be(),
			c$ = Be(),
			C$ = Tn(),
			s$ = '[object Map]',
			l$ = '[object Set]',
			f$ = Object.prototype,
			u$ = f$.hasOwnProperty
		function h$(e) {
			if (e == null) return !0
			if (i$(e) && (a$(e) || typeof e == 'string' || typeof e.splice == 'function' || o$(e) || C$(e) || n$(e)))
				return !e.length
			var r = t$(e)
			if (r == s$ || r == l$) return !e.size
			if (c$(e)) return !r$(e).length
			for (var t in e) if (u$.call(e, t)) return !1
			return !0
		}
		yN.exports = h$
	})
	var wN = z((Ne2, xN) => {
		xN.exports = { cap: !1, curry: !1, fixed: !1, immutable: !1, rearg: !1 }
	})
	var kN = z((_e2, _N) => {
		var p$ = Xn(),
			NN = p$('isEmpty', SN(), wN())
		NN.placeholder = _e()
		_N.exports = NN
	})
	var GN = z((a92, jN) => {
		jN.exports = function (r, t, n, i) {
			var c = n ? n.call(i, r, t) : void 0
			if (c !== void 0) return !!c
			if (r === t) return !0
			if (typeof r != 'object' || !r || typeof t != 'object' || !t) return !1
			var C = Object.keys(r),
				l = Object.keys(t)
			if (C.length !== l.length) return !1
			for (var u = Object.prototype.hasOwnProperty.bind(t), h = 0; h < C.length; h++) {
				var v = C[h]
				if (!u(v)) return !1
				var g = r[v],
					m = t[v]
				if (((c = n ? n.call(i, g, m, v) : void 0), c === !1 || (c === void 0 && g !== m))) return !1
			}
			return !0
		}
	})
	var WN = z((df) => {
		'use strict'
		function L$(e) {
			function r(p2, a2, v2) {
				var H2 = a2.trim().split(L)
				a2 = H2
				var A = H2.length,
					w2 = p2.length
				switch (w2) {
					case 0:
					case 1:
						var O = 0
						for (p2 = w2 === 0 ? '' : p2[0] + ' '; O < A; ++O) a2[O] = t(p2, a2[O], v2).trim()
						break
					default:
						var j = (O = 0)
						for (a2 = []; O < A; ++O) for (var q = 0; q < w2; ++q) a2[j++] = t(p2[q] + ' ', H2[O], v2).trim()
				}
				return a2
			}
			function t(p2, a2, v2) {
				var H2 = a2.charCodeAt(0)
				switch ((33 > H2 && (H2 = (a2 = a2.trim()).charCodeAt(0)), H2)) {
					case 38:
						return a2.replace(x, '$1' + p2.trim())
					case 58:
						return p2.trim() + a2.replace(x, '$1' + p2.trim())
					default:
						if (0 < 1 * v2 && 0 < a2.indexOf('\f'))
							return a2.replace(x, (p2.charCodeAt(0) === 58 ? '' : '$1') + p2.trim())
				}
				return p2 + a2
			}
			function n(p2, a2, v2, H2) {
				var A = p2 + ';',
					w2 = 2 * a2 + 3 * v2 + 4 * H2
				if (w2 === 944) {
					p2 = A.indexOf(':', 9) + 1
					var O = A.substring(p2, A.length - 1).trim()
					return (
						(O = A.substring(0, p2).trim() + O + ';'), T2 === 1 || (T2 === 2 && i(O, 1)) ? '-webkit-' + O + O : O
					)
				}
				if (T2 === 0 || (T2 === 2 && !i(A, 1))) return A
				switch (w2) {
					case 1015:
						return A.charCodeAt(10) === 97 ? '-webkit-' + A + A : A
					case 951:
						return A.charCodeAt(3) === 116 ? '-webkit-' + A + A : A
					case 963:
						return A.charCodeAt(5) === 110 ? '-webkit-' + A + A : A
					case 1009:
						if (A.charCodeAt(4) !== 100) break
					case 969:
					case 942:
						return '-webkit-' + A + A
					case 978:
						return '-webkit-' + A + '-moz-' + A + A
					case 1019:
					case 983:
						return '-webkit-' + A + '-moz-' + A + '-ms-' + A + A
					case 883:
						if (A.charCodeAt(8) === 45) return '-webkit-' + A + A
						if (0 < A.indexOf('image-set(', 11)) return A.replace(s2, '$1-webkit-$2') + A
						break
					case 932:
						if (A.charCodeAt(4) === 45)
							switch (A.charCodeAt(5)) {
								case 103:
									return (
										'-webkit-box-' +
										A.replace('-grow', '') +
										'-webkit-' +
										A +
										'-ms-' +
										A.replace('grow', 'positive') +
										A
									)
								case 115:
									return '-webkit-' + A + '-ms-' + A.replace('shrink', 'negative') + A
								case 98:
									return '-webkit-' + A + '-ms-' + A.replace('basis', 'preferred-size') + A
							}
						return '-webkit-' + A + '-ms-' + A + A
					case 964:
						return '-webkit-' + A + '-ms-flex-' + A + A
					case 1023:
						if (A.charCodeAt(8) !== 99) break
						return (
							'-webkit-box-pack' +
							(O = A.substring(A.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify')) +
							'-webkit-' +
							A +
							'-ms-flex-pack' +
							O +
							A
						)
					case 1005:
						return m.test(A) ? A.replace(g, ':-webkit-') + A.replace(g, ':-moz-') + A : A
					case 1e3:
						switch (((a2 = (O = A.substring(13).trim()).indexOf('-') + 1), O.charCodeAt(0) + O.charCodeAt(a2))) {
							case 226:
								O = A.replace(S, 'tb')
								break
							case 232:
								O = A.replace(S, 'tb-rl')
								break
							case 220:
								O = A.replace(S, 'lr')
								break
							default:
								return A
						}
						return '-webkit-' + A + '-ms-' + O + A
					case 1017:
						if (A.indexOf('sticky', 9) === -1) break
					case 975:
						switch (
							((a2 = (A = p2).length - 10),
							(w2 =
								(O = (A.charCodeAt(a2) === 33 ? A.substring(0, a2) : A)
									.substring(p2.indexOf(':', 7) + 1)
									.trim()).charCodeAt(0) +
								(0 | O.charCodeAt(7))))
						) {
							case 203:
								if (111 > O.charCodeAt(8)) break
							case 115:
								A = A.replace(O, '-webkit-' + O) + ';' + A
								break
							case 207:
							case 102:
								A =
									A.replace(O, '-webkit-' + (102 < w2 ? 'inline-' : '') + 'box') +
									';' +
									A.replace(O, '-webkit-' + O) +
									';' +
									A.replace(O, '-ms-' + O + 'box') +
									';' +
									A
						}
						return A + ';'
					case 938:
						if (A.charCodeAt(5) === 45)
							switch (A.charCodeAt(6)) {
								case 105:
									return (
										(O = A.replace('-items', '')), '-webkit-' + A + '-webkit-box-' + O + '-ms-flex-' + O + A
									)
								case 115:
									return '-webkit-' + A + '-ms-flex-item-' + A.replace(b, '') + A
								default:
									return (
										'-webkit-' + A + '-ms-flex-line-pack' + A.replace('align-content', '').replace(b, '') + A
									)
							}
						break
					case 973:
					case 989:
						if (A.charCodeAt(3) !== 45 || A.charCodeAt(4) === 122) break
					case 931:
					case 953:
						if (B.test(p2) === !0)
							return (O = p2.substring(p2.indexOf(':') + 1)).charCodeAt(0) === 115
								? n(p2.replace('stretch', 'fill-available'), a2, v2, H2).replace(':fill-available', ':stretch')
								: A.replace(O, '-webkit-' + O) + A.replace(O, '-moz-' + O.replace('fill-', '')) + A
						break
					case 962:
						if (
							((A = '-webkit-' + A + (A.charCodeAt(5) === 102 ? '-ms-' + A : '') + A),
							v2 + H2 === 211 && A.charCodeAt(13) === 105 && 0 < A.indexOf('transform', 10))
						)
							return A.substring(0, A.indexOf(';', 27) + 1).replace(H, '$1-webkit-$2') + A
				}
				return A
			}
			function i(p2, a2) {
				var v2 = p2.indexOf(a2 === 1 ? ':' : '{'),
					H2 = p2.substring(0, a2 !== 3 ? v2 : 10)
				return (v2 = p2.substring(v2 + 1, p2.length - 1)), C1(a2 !== 2 ? H2 : H2.replace(I, '$1'), v2, a2)
			}
			function c(p2, a2) {
				var v2 = n(a2, a2.charCodeAt(0), a2.charCodeAt(1), a2.charCodeAt(2))
				return v2 !== a2 + ';' ? v2.replace(D, ' or ($1)').substring(4) : '(' + a2 + ')'
			}
			function C(p2, a2, v2, H2, A, w2, O, j, q, e2) {
				for (var c2, f2 = 0, Z = a2; f2 < t1; ++f2)
					switch ((c2 = F2[f2].call(u, p2, Z, v2, H2, A, w2, O, j, q, e2))) {
						case void 0:
						case !1:
						case !0:
						case null:
							break
						default:
							Z = c2
					}
				if (Z !== a2) return Z
			}
			function l(p2) {
				return (
					(p2 = p2.prefix) !== void 0 &&
						((C1 = null), p2 ? (typeof p2 != 'function' ? (T2 = 1) : ((T2 = 2), (C1 = p2))) : (T2 = 0)),
					l
				)
			}
			function u(p2, a2) {
				var v2 = p2
				if ((33 > v2.charCodeAt(0) && (v2 = v2.trim()), (v2 = [v2]), 0 < t1)) {
					var H2 = C(-1, a2, v2, v2, d2, Y, 0, 0, 0, 0)
					H2 !== void 0 && typeof H2 == 'string' && (a2 = H2)
				}
				var A = (function w2(O, j, q, e2, c2) {
					for (
						var f2,
							Z,
							l2,
							u2,
							Y2,
							z1 = 0,
							K2 = 0,
							_3 = 0,
							h1 = 0,
							$4 = 0,
							T4 = 0,
							_1 = (l2 = f2 = 0),
							k2 = 0,
							k1 = 0,
							v4 = 0,
							P1 = 0,
							s8 = q.length,
							m5 = s8 - 1,
							m2 = '',
							n1 = '',
							W0 = '',
							Y0 = '';
						k2 < s8;

					) {
						if (
							((Z = q.charCodeAt(k2)),
							k2 === m5 &&
								K2 + h1 + _3 + z1 !== 0 &&
								(K2 !== 0 && (Z = K2 === 47 ? 10 : 47), (h1 = _3 = z1 = 0), s8++, m5++),
							K2 + h1 + _3 + z1 === 0)
						) {
							if (k2 === m5 && (0 < k1 && (m2 = m2.replace(v, '')), 0 < m2.trim().length)) {
								switch (Z) {
									case 32:
									case 9:
									case 59:
									case 13:
									case 10:
										break
									default:
										m2 += q.charAt(k2)
								}
								Z = 59
							}
							switch (Z) {
								case 123:
									for (f2 = (m2 = m2.trim()).charCodeAt(0), l2 = 1, P1 = ++k2; k2 < s8; ) {
										switch ((Z = q.charCodeAt(k2))) {
											case 123:
												l2++
												break
											case 125:
												l2--
												break
											case 47:
												switch ((Z = q.charCodeAt(k2 + 1))) {
													case 42:
													case 47:
														e: {
															for (_1 = k2 + 1; _1 < m5; ++_1)
																switch (q.charCodeAt(_1)) {
																	case 47:
																		if (Z === 42 && q.charCodeAt(_1 - 1) === 42 && k2 + 2 !== _1) {
																			k2 = _1 + 1
																			break e
																		}
																		break
																	case 10:
																		if (Z === 47) {
																			k2 = _1 + 1
																			break e
																		}
																}
															k2 = _1
														}
												}
												break
											case 91:
												Z++
											case 40:
												Z++
											case 34:
											case 39:
												for (; k2++ < m5 && q.charCodeAt(k2) !== Z; );
										}
										if (l2 === 0) break
										k2++
									}
									switch (
										((l2 = q.substring(P1, k2)),
										f2 === 0 && (f2 = (m2 = m2.replace(h, '').trim()).charCodeAt(0)),
										f2)
									) {
										case 64:
											switch ((0 < k1 && (m2 = m2.replace(v, '')), (Z = m2.charCodeAt(1)))) {
												case 100:
												case 109:
												case 115:
												case 45:
													k1 = j
													break
												default:
													k1 = N1
											}
											if (
												((P1 = (l2 = w2(j, k1, l2, Z, c2 + 1)).length),
												0 < t1 &&
													((Y2 = C(3, l2, (k1 = r(N1, m2, v4)), j, d2, Y, P1, Z, c2, e2)),
													(m2 = k1.join('')),
													Y2 !== void 0 && (P1 = (l2 = Y2.trim()).length) === 0 && ((Z = 0), (l2 = ''))),
												0 < P1)
											)
												switch (Z) {
													case 115:
														m2 = m2.replace(k, c)
													case 100:
													case 109:
													case 45:
														l2 = m2 + '{' + l2 + '}'
														break
													case 107:
														;(l2 = (m2 = m2.replace(w, '$1 $2')) + '{' + l2 + '}'),
															(l2 =
																T2 === 1 || (T2 === 2 && i('@' + l2, 3))
																	? '@-webkit-' + l2 + '@' + l2
																	: '@' + l2)
														break
													default:
														;(l2 = m2 + l2), e2 === 112 && ((n1 += l2), (l2 = ''))
												}
											else l2 = ''
											break
										default:
											l2 = w2(j, r(j, m2, v4), l2, e2, c2 + 1)
									}
									;(W0 += l2), (l2 = v4 = k1 = _1 = f2 = 0), (m2 = ''), (Z = q.charCodeAt(++k2))
									break
								case 125:
								case 59:
									if (1 < (P1 = (m2 = (0 < k1 ? m2.replace(v, '') : m2).trim()).length))
										switch (
											(_1 === 0 &&
												((f2 = m2.charCodeAt(0)), f2 === 45 || (96 < f2 && 123 > f2)) &&
												(P1 = (m2 = m2.replace(' ', ':')).length),
											0 < t1 &&
												(Y2 = C(1, m2, j, O, d2, Y, n1.length, e2, c2, e2)) !== void 0 &&
												(P1 = (m2 = Y2.trim()).length) === 0 &&
												(m2 = '\0\0'),
											(f2 = m2.charCodeAt(0)),
											(Z = m2.charCodeAt(1)),
											f2)
										) {
											case 0:
												break
											case 64:
												if (Z === 105 || Z === 99) {
													Y0 += m2 + q.charAt(k2)
													break
												}
											default:
												m2.charCodeAt(P1 - 1) !== 58 && (n1 += n(m2, f2, Z, m2.charCodeAt(2)))
										}
									;(v4 = k1 = _1 = f2 = 0), (m2 = ''), (Z = q.charCodeAt(++k2))
							}
						}
						switch (Z) {
							case 13:
							case 10:
								K2 === 47 ? (K2 = 0) : 1 + f2 === 0 && e2 !== 107 && 0 < m2.length && ((k1 = 1), (m2 += '\0')),
									0 < t1 * s1 && C(0, m2, j, O, d2, Y, n1.length, e2, c2, e2),
									(Y = 1),
									d2++
								break
							case 59:
							case 125:
								if (K2 + h1 + _3 + z1 === 0) {
									Y++
									break
								}
							default:
								switch ((Y++, (u2 = q.charAt(k2)), Z)) {
									case 9:
									case 32:
										if (h1 + z1 + K2 === 0)
											switch ($4) {
												case 44:
												case 58:
												case 9:
												case 32:
													u2 = ''
													break
												default:
													Z !== 32 && (u2 = ' ')
											}
										break
									case 0:
										u2 = '\\0'
										break
									case 12:
										u2 = '\\f'
										break
									case 11:
										u2 = '\\v'
										break
									case 38:
										h1 + K2 + z1 === 0 && ((k1 = v4 = 1), (u2 = '\f' + u2))
										break
									case 108:
										if (h1 + K2 + z1 + _2 === 0 && 0 < _1)
											switch (k2 - _1) {
												case 2:
													$4 === 112 && q.charCodeAt(k2 - 3) === 58 && (_2 = $4)
												case 8:
													T4 === 111 && (_2 = T4)
											}
										break
									case 58:
										h1 + K2 + z1 === 0 && (_1 = k2)
										break
									case 44:
										K2 + _3 + h1 + z1 === 0 && ((k1 = 1), (u2 += '\r'))
										break
									case 34:
									case 39:
										K2 === 0 && (h1 = h1 === Z ? 0 : h1 === 0 ? Z : h1)
										break
									case 91:
										h1 + K2 + _3 === 0 && z1++
										break
									case 93:
										h1 + K2 + _3 === 0 && z1--
										break
									case 41:
										h1 + K2 + z1 === 0 && _3--
										break
									case 40:
										if (h1 + K2 + z1 === 0) {
											if (f2 === 0)
												switch (2 * $4 + 3 * T4) {
													case 533:
														break
													default:
														f2 = 1
												}
											_3++
										}
										break
									case 64:
										K2 + _3 + h1 + z1 + _1 + l2 === 0 && (l2 = 1)
										break
									case 42:
									case 47:
										if (!(0 < h1 + z1 + _3))
											switch (K2) {
												case 0:
													switch (2 * Z + 3 * q.charCodeAt(k2 + 1)) {
														case 235:
															K2 = 47
															break
														case 220:
															;(P1 = k2), (K2 = 42)
													}
													break
												case 42:
													Z === 47 &&
														$4 === 42 &&
														P1 + 2 !== k2 &&
														(q.charCodeAt(P1 + 2) === 33 && (n1 += q.substring(P1, k2 + 1)),
														(u2 = ''),
														(K2 = 0))
											}
								}
								K2 === 0 && (m2 += u2)
						}
						;(T4 = $4), ($4 = Z), k2++
					}
					if (0 < (P1 = n1.length)) {
						if (
							((k1 = j),
							0 < t1 && (Y2 = C(2, n1, k1, O, d2, Y, P1, e2, c2, e2)) !== void 0 && (n1 = Y2).length === 0)
						)
							return Y0 + n1 + W0
						if (((n1 = k1.join(',') + '{' + n1 + '}'), T2 * _2 != 0)) {
							switch ((T2 !== 2 || i(n1, 2) || (_2 = 0), _2)) {
								case 111:
									n1 = n1.replace(M, ':-moz-$1') + n1
									break
								case 112:
									n1 =
										n1.replace(V, '::-webkit-input-$1') +
										n1.replace(V, '::-moz-$1') +
										n1.replace(V, ':-ms-input-$1') +
										n1
							}
							_2 = 0
						}
					}
					return Y0 + n1 + W0
				})(N1, v2, a2, 0, 0)
				return (
					0 < t1 && (H2 = C(-2, A, v2, v2, d2, Y, A.length, 0, 0, 0)) !== void 0 && (A = H2),
					(_2 = 0),
					(Y = d2 = 1),
					A
				)
			}
			var h = /^\0+/g,
				v = /[\0\r\f]/g,
				g = /: */g,
				m = /zoo|gra/,
				H = /([,: ])(transform)/g,
				L = /,\r+?/g,
				x = /([\t\r\n ])*\f?&/g,
				w = /@(k\w+)\s*(\S*)\s*/,
				V = /::(place)/g,
				M = /:(read-only)/g,
				S = /[svh]\w+-[tblr]{2}/,
				k = /\(\s*(.*)\s*\)/g,
				D = /([\s\S]*?);/g,
				b = /-self|flex-/g,
				I = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
				B = /stretch|:\s*\w+\-(?:conte|avail)/,
				s2 = /([^-])(image-set\()/,
				Y = 1,
				d2 = 1,
				_2 = 0,
				T2 = 1,
				N1 = [],
				F2 = [],
				t1 = 0,
				C1 = null,
				s1 = 0
			return (
				(u.use = function p2(a2) {
					switch (a2) {
						case void 0:
						case null:
							t1 = F2.length = 0
							break
						default:
							if (typeof a2 == 'function') F2[t1++] = a2
							else if (typeof a2 == 'object') for (var v2 = 0, H2 = a2.length; v2 < H2; ++v2) p2(a2[v2])
							else s1 = 0 | !!a2
					}
					return p2
				}),
				(u.set = l),
				e !== void 0 && l(e),
				u
			)
		}
		Object.defineProperty(df, '__esModule', { value: !0 }), (df.default = L$)
	})
	var KN = z((o92, YN) => {
		'use strict'
		YN.exports = WN()
	})
	var QN = z((vf) => {
		'use strict'
		Object.defineProperty(vf, '__esModule', { value: !0 })
		var g$ = {
			animationIterationCount: 1,
			borderImageOutset: 1,
			borderImageSlice: 1,
			borderImageWidth: 1,
			boxFlex: 1,
			boxFlexGroup: 1,
			boxOrdinalGroup: 1,
			columnCount: 1,
			columns: 1,
			flex: 1,
			flexGrow: 1,
			flexPositive: 1,
			flexShrink: 1,
			flexNegative: 1,
			flexOrder: 1,
			gridRow: 1,
			gridRowEnd: 1,
			gridRowSpan: 1,
			gridRowStart: 1,
			gridColumn: 1,
			gridColumnEnd: 1,
			gridColumnSpan: 1,
			gridColumnStart: 1,
			msGridRow: 1,
			msGridRowSpan: 1,
			msGridColumn: 1,
			msGridColumnSpan: 1,
			fontWeight: 1,
			lineHeight: 1,
			opacity: 1,
			order: 1,
			orphans: 1,
			tabSize: 1,
			widows: 1,
			zIndex: 1,
			zoom: 1,
			WebkitLineClamp: 1,
			fillOpacity: 1,
			floodOpacity: 1,
			stopOpacity: 1,
			strokeDasharray: 1,
			strokeDashoffset: 1,
			strokeMiterlimit: 1,
			strokeOpacity: 1,
			strokeWidth: 1,
		}
		vf.default = g$
	})
	var JN = z((C92, XN) => {
		'use strict'
		XN.exports = QN()
	})
	var ZN = z((mf) => {
		'use strict'
		function M$(e) {
			var r = Object.create(null)
			return function (t) {
				return r[t] === void 0 && (r[t] = e(t)), r[t]
			}
		}
		Object.defineProperty(mf, '__esModule', { value: !0 }), (mf.default = M$)
	})
	var e_ = z((l92, $N) => {
		'use strict'
		$N.exports = ZN()
	})
	var r_ = z((Lf) => {
		'use strict'
		Object.defineProperty(Lf, '__esModule', { value: !0 })
		var z$ = e_()
		function H$(e) {
			return e && e.__esModule ? e : { default: e }
		}
		var V$ = H$(z$),
			y$ =
				/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
			S$ = V$.default(function (e) {
				return y$.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
			})
		Lf.default = S$
	})
	var n_ = z((u92, t_) => {
		'use strict'
		t_.exports = r_()
	})
	var V_ = z((I1) => {
		'use strict'
		function U0(e) {
			return e && typeof e == 'object' && 'default' in e ? e.default : e
		}
		Object.defineProperty(I1, '__esModule', { value: !0 })
		var f_ = kC(),
			v3 = y2(),
			d4 = U0(v3),
			x$ = U0(GN()),
			w$ = U0(KN()),
			N$ = U0(JN()),
			a_ = U0(n_()),
			u_ = U0(wC())
		function j3() {
			return (j3 =
				Object.assign ||
				function (e) {
					for (var r = 1; r < arguments.length; r++) {
						var t = arguments[r]
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					}
					return e
				}).apply(this, arguments)
		}
		var i_ = function (e, r) {
				for (var t = [e[0]], n = 0, i = r.length; n < i; n += 1) t.push(r[n], e[n + 1])
				return t
			},
			zf = function (e) {
				return (
					e !== null &&
					typeof e == 'object' &&
					(e.toString ? e.toString() : Object.prototype.toString.call(e)) === '[object Object]' &&
					!f_.typeOf(e)
				)
			},
			Pa = Object.freeze([]),
			d5 = Object.freeze({})
		function B0(e) {
			return typeof e == 'function'
		}
		function Hf(e) {
			return e.displayName || e.name || 'Component'
		}
		function Ea(e) {
			return e && typeof e.styledComponentId == 'string'
		}
		var v5 = (typeof process < 'u' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) || 'data-styled',
			Ta = typeof window < 'u' && 'HTMLElement' in window,
			_$ = Boolean(
				typeof SC_DISABLE_SPEEDY == 'boolean'
					? SC_DISABLE_SPEEDY
					: typeof process < 'u' &&
					  process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
					  process.env.REACT_APP_SC_DISABLE_SPEEDY !== ''
					? process.env.REACT_APP_SC_DISABLE_SPEEDY !== 'false' && process.env.REACT_APP_SC_DISABLE_SPEEDY
					: typeof process < 'u' &&
					  process.env.SC_DISABLE_SPEEDY !== void 0 &&
					  process.env.SC_DISABLE_SPEEDY !== ''
					? process.env.SC_DISABLE_SPEEDY !== 'false' && process.env.SC_DISABLE_SPEEDY
					: !1,
			),
			k$ = {}
		function p4(e) {
			for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n]
			throw new Error(
				'An error occurred. See https://git.io/JUIaE#' +
					e +
					' for more information.' +
					(t.length > 0 ? ' Args: ' + t.join(', ') : ''),
			)
		}
		var P$ = (function () {
				function e(t) {
					;(this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = t)
				}
				var r = e.prototype
				return (
					(r.indexOfGroup = function (t) {
						for (var n = 0, i = 0; i < t; i++) n += this.groupSizes[i]
						return n
					}),
					(r.insertRules = function (t, n) {
						if (t >= this.groupSizes.length) {
							for (var i = this.groupSizes, c = i.length, C = c; t >= C; ) (C <<= 1) < 0 && p4(16, '' + t)
							;(this.groupSizes = new Uint32Array(C)), this.groupSizes.set(i), (this.length = C)
							for (var l = c; l < C; l++) this.groupSizes[l] = 0
						}
						for (var u = this.indexOfGroup(t + 1), h = 0, v = n.length; h < v; h++)
							this.tag.insertRule(u, n[h]) && (this.groupSizes[t]++, u++)
					}),
					(r.clearGroup = function (t) {
						if (t < this.length) {
							var n = this.groupSizes[t],
								i = this.indexOfGroup(t),
								c = i + n
							this.groupSizes[t] = 0
							for (var C = i; C < c; C++) this.tag.deleteRule(i)
						}
					}),
					(r.getGroup = function (t) {
						var n = ''
						if (t >= this.length || this.groupSizes[t] === 0) return n
						for (var i = this.groupSizes[t], c = this.indexOfGroup(t), C = c + i, l = c; l < C; l++)
							n +=
								this.tag.getRule(l) +
								`/*!sc*/
`
						return n
					}),
					e
				)
			})(),
			_a = new Map(),
			Aa = new Map(),
			t9 = 1,
			wa = function (e) {
				if (_a.has(e)) return _a.get(e)
				for (; Aa.has(t9); ) t9++
				var r = t9++
				return _a.set(e, r), Aa.set(r, e), r
			},
			A$ = function (e) {
				return Aa.get(e)
			},
			E$ = function (e, r) {
				r >= t9 && (t9 = r + 1), _a.set(e, r), Aa.set(r, e)
			},
			T$ = 'style[' + v5 + '][data-styled-version="5.3.5"]',
			R$ = new RegExp('^' + v5 + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
			O$ = function (e, r, t) {
				for (var n, i = t.split(','), c = 0, C = i.length; c < C; c++) (n = i[c]) && e.registerName(r, n)
			},
			D$ = function (e, r) {
				for (
					var t = (r.textContent || '').split(`/*!sc*/
`),
						n = [],
						i = 0,
						c = t.length;
					i < c;
					i++
				) {
					var C = t[i].trim()
					if (C) {
						var l = C.match(R$)
						if (l) {
							var u = 0 | parseInt(l[1], 10),
								h = l[2]
							u !== 0 && (E$(h, u), O$(e, h, l[3]), e.getTag().insertRules(u, n)), (n.length = 0)
						} else n.push(C)
					}
				}
			},
			Vf = function () {
				return typeof window < 'u' && window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null
			},
			h_ = function (e) {
				var r = document.head,
					t = e || r,
					n = document.createElement('style'),
					i = (function (l) {
						for (var u = l.childNodes, h = u.length; h >= 0; h--) {
							var v = u[h]
							if (v && v.nodeType === 1 && v.hasAttribute(v5)) return v
						}
					})(t),
					c = i !== void 0 ? i.nextSibling : null
				n.setAttribute(v5, 'active'), n.setAttribute('data-styled-version', '5.3.5')
				var C = Vf()
				return C && n.setAttribute('nonce', C), t.insertBefore(n, c), n
			},
			b$ = (function () {
				function e(t) {
					var n = (this.element = h_(t))
					n.appendChild(document.createTextNode('')),
						(this.sheet = (function (i) {
							if (i.sheet) return i.sheet
							for (var c = document.styleSheets, C = 0, l = c.length; C < l; C++) {
								var u = c[C]
								if (u.ownerNode === i) return u
							}
							p4(17)
						})(n)),
						(this.length = 0)
				}
				var r = e.prototype
				return (
					(r.insertRule = function (t, n) {
						try {
							return this.sheet.insertRule(n, t), this.length++, !0
						} catch {
							return !1
						}
					}),
					(r.deleteRule = function (t) {
						this.sheet.deleteRule(t), this.length--
					}),
					(r.getRule = function (t) {
						var n = this.sheet.cssRules[t]
						return n !== void 0 && typeof n.cssText == 'string' ? n.cssText : ''
					}),
					e
				)
			})(),
			F$ = (function () {
				function e(t) {
					var n = (this.element = h_(t))
					;(this.nodes = n.childNodes), (this.length = 0)
				}
				var r = e.prototype
				return (
					(r.insertRule = function (t, n) {
						if (t <= this.length && t >= 0) {
							var i = document.createTextNode(n),
								c = this.nodes[t]
							return this.element.insertBefore(i, c || null), this.length++, !0
						}
						return !1
					}),
					(r.deleteRule = function (t) {
						this.element.removeChild(this.nodes[t]), this.length--
					}),
					(r.getRule = function (t) {
						return t < this.length ? this.nodes[t].textContent : ''
					}),
					e
				)
			})(),
			I$ = (function () {
				function e(t) {
					;(this.rules = []), (this.length = 0)
				}
				var r = e.prototype
				return (
					(r.insertRule = function (t, n) {
						return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
					}),
					(r.deleteRule = function (t) {
						this.rules.splice(t, 1), this.length--
					}),
					(r.getRule = function (t) {
						return t < this.length ? this.rules[t] : ''
					}),
					e
				)
			})(),
			o_ = Ta,
			B$ = { isServer: !Ta, useCSSOMInjection: !_$ },
			q0 = (function () {
				function e(t, n, i) {
					t === void 0 && (t = d5),
						n === void 0 && (n = {}),
						(this.options = j3({}, B$, {}, t)),
						(this.gs = n),
						(this.names = new Map(i)),
						(this.server = !!t.isServer),
						!this.server &&
							Ta &&
							o_ &&
							((o_ = !1),
							(function (c) {
								for (var C = document.querySelectorAll(T$), l = 0, u = C.length; l < u; l++) {
									var h = C[l]
									h &&
										h.getAttribute(v5) !== 'active' &&
										(D$(c, h), h.parentNode && h.parentNode.removeChild(h))
								}
							})(this))
				}
				e.registerId = function (t) {
					return wa(t)
				}
				var r = e.prototype
				return (
					(r.reconstructWithOptions = function (t, n) {
						return (
							n === void 0 && (n = !0), new e(j3({}, this.options, {}, t), this.gs, (n && this.names) || void 0)
						)
					}),
					(r.allocateGSInstance = function (t) {
						return (this.gs[t] = (this.gs[t] || 0) + 1)
					}),
					(r.getTag = function () {
						return (
							this.tag ||
							(this.tag =
								((i = (n = this.options).isServer),
								(c = n.useCSSOMInjection),
								(C = n.target),
								(t = i ? new I$(C) : c ? new b$(C) : new F$(C)),
								new P$(t)))
						)
						var t, n, i, c, C
					}),
					(r.hasNameForId = function (t, n) {
						return this.names.has(t) && this.names.get(t).has(n)
					}),
					(r.registerName = function (t, n) {
						if ((wa(t), this.names.has(t))) this.names.get(t).add(n)
						else {
							var i = new Set()
							i.add(n), this.names.set(t, i)
						}
					}),
					(r.insertRules = function (t, n, i) {
						this.registerName(t, n), this.getTag().insertRules(wa(t), i)
					}),
					(r.clearNames = function (t) {
						this.names.has(t) && this.names.get(t).clear()
					}),
					(r.clearRules = function (t) {
						this.getTag().clearGroup(wa(t)), this.clearNames(t)
					}),
					(r.clearTag = function () {
						this.tag = void 0
					}),
					(r.toString = function () {
						return (function (t) {
							for (var n = t.getTag(), i = n.length, c = '', C = 0; C < i; C++) {
								var l = A$(C)
								if (l !== void 0) {
									var u = t.names.get(l),
										h = n.getGroup(C)
									if (u && h && u.size) {
										var v = v5 + '.g' + C + '[id="' + l + '"]',
											g = ''
										u !== void 0 &&
											u.forEach(function (m) {
												m.length > 0 && (g += m + ',')
											}),
											(c +=
												'' +
												h +
												v +
												'{content:"' +
												g +
												`"}/*!sc*/
`)
									}
								}
							}
							return c
						})(this)
					}),
					e
				)
			})(),
			q$ = /(a)(d)/gi,
			c_ = function (e) {
				return String.fromCharCode(e + (e > 25 ? 39 : 97))
			}
		function yf(e) {
			var r,
				t = ''
			for (r = Math.abs(e); r > 52; r = (r / 52) | 0) t = c_(r % 52) + t
			return (c_(r % 52) + t).replace(q$, '$1-$2')
		}
		var I0 = function (e, r) {
				for (var t = r.length; t; ) e = (33 * e) ^ r.charCodeAt(--t)
				return e
			},
			p_ = function (e) {
				return I0(5381, e)
			}
		function d_(e) {
			for (var r = 0; r < e.length; r += 1) {
				var t = e[r]
				if (B0(t) && !Ea(t)) return !1
			}
			return !0
		}
		var U$ = p_('5.3.5'),
			j$ = (function () {
				function e(r, t, n) {
					;(this.rules = r),
						(this.staticRulesId = ''),
						(this.isStatic = (n === void 0 || n.isStatic) && d_(r)),
						(this.componentId = t),
						(this.baseHash = I0(U$, t)),
						(this.baseStyle = n),
						q0.registerId(t)
				}
				return (
					(e.prototype.generateAndInjectStyles = function (r, t, n) {
						var i = this.componentId,
							c = []
						if (
							(this.baseStyle && c.push(this.baseStyle.generateAndInjectStyles(r, t, n)),
							this.isStatic && !n.hash)
						)
							if (this.staticRulesId && t.hasNameForId(i, this.staticRulesId)) c.push(this.staticRulesId)
							else {
								var C = C8(this.rules, r, t, n).join(''),
									l = yf(I0(this.baseHash, C) >>> 0)
								if (!t.hasNameForId(i, l)) {
									var u = n(C, '.' + l, void 0, i)
									t.insertRules(i, l, u)
								}
								c.push(l), (this.staticRulesId = l)
							}
						else {
							for (var h = this.rules.length, v = I0(this.baseHash, n.hash), g = '', m = 0; m < h; m++) {
								var H = this.rules[m]
								if (typeof H == 'string') g += H
								else if (H) {
									var L = C8(H, r, t, n),
										x = Array.isArray(L) ? L.join('') : L
									;(v = I0(v, x + m)), (g += x)
								}
							}
							if (g) {
								var w = yf(v >>> 0)
								if (!t.hasNameForId(i, w)) {
									var V = n(g, '.' + w, void 0, i)
									t.insertRules(i, w, V)
								}
								c.push(w)
							}
						}
						return c.join(' ')
					}),
					e
				)
			})(),
			G$ = /^\s*\/\/.*$/gm,
			W$ = [':', '[', '.', '#']
		function v_(e) {
			var r,
				t,
				n,
				i,
				c = e === void 0 ? d5 : e,
				C = c.options,
				l = C === void 0 ? d5 : C,
				u = c.plugins,
				h = u === void 0 ? Pa : u,
				v = new w$(l),
				g = [],
				m = (function (x) {
					function w(V) {
						if (V)
							try {
								x(V + '}')
							} catch {}
					}
					return function (V, M, S, k, D, b, I, B, s2, Y) {
						switch (V) {
							case 1:
								if (s2 === 0 && M.charCodeAt(0) === 64) return x(M + ';'), ''
								break
							case 2:
								if (B === 0) return M + '/*|*/'
								break
							case 3:
								switch (B) {
									case 102:
									case 112:
										return x(S[0] + M), ''
									default:
										return M + (Y === 0 ? '/*|*/' : '')
								}
							case -2:
								M.split('/*|*/}').forEach(w)
						}
					}
				})(function (x) {
					g.push(x)
				}),
				H = function (x, w, V) {
					return (w === 0 && W$.indexOf(V[t.length]) !== -1) || V.match(i) ? x : '.' + r
				}
			function L(x, w, V, M) {
				M === void 0 && (M = '&')
				var S = x.replace(G$, ''),
					k = w && V ? V + ' ' + w + ' { ' + S + ' }' : S
				return (
					(r = M),
					(t = w),
					(n = new RegExp('\\' + t + '\\b', 'g')),
					(i = new RegExp('(\\' + t + '\\b){2,}')),
					v(V || !w ? '' : w, k)
				)
			}
			return (
				v.use(
					[].concat(h, [
						function (x, w, V) {
							x === 2 && V.length && V[0].lastIndexOf(t) > 0 && (V[0] = V[0].replace(n, H))
						},
						m,
						function (x) {
							if (x === -2) {
								var w = g
								return (g = []), w
							}
						},
					]),
				),
				(L.hash = h.length
					? h
							.reduce(function (x, w) {
								return w.name || p4(15), I0(x, w.name)
							}, 5381)
							.toString()
					: ''),
				L
			)
		}
		var Ra = d4.createContext(),
			Y$ = Ra.Consumer,
			kf = d4.createContext(),
			m_ = (kf.Consumer, new q0()),
			Sf = v_()
		function Pf() {
			return v3.useContext(Ra) || m_
		}
		function L_() {
			return v3.useContext(kf) || Sf
		}
		function g_(e) {
			var r = v3.useState(e.stylisPlugins),
				t = r[0],
				n = r[1],
				i = Pf(),
				c = v3.useMemo(
					function () {
						var l = i
						return (
							e.sheet ? (l = e.sheet) : e.target && (l = l.reconstructWithOptions({ target: e.target }, !1)),
							e.disableCSSOMInjection && (l = l.reconstructWithOptions({ useCSSOMInjection: !1 })),
							l
						)
					},
					[e.disableCSSOMInjection, e.sheet, e.target],
				),
				C = v3.useMemo(
					function () {
						return v_({ options: { prefix: !e.disableVendorPrefixes }, plugins: t })
					},
					[e.disableVendorPrefixes, t],
				)
			return (
				v3.useEffect(
					function () {
						x$(t, e.stylisPlugins) || n(e.stylisPlugins)
					},
					[e.stylisPlugins],
				),
				d4.createElement(Ra.Provider, { value: c }, d4.createElement(kf.Provider, { value: C }, e.children))
			)
		}
		var M_ = (function () {
				function e(r, t) {
					var n = this
					;(this.inject = function (i, c) {
						c === void 0 && (c = Sf)
						var C = n.name + c.hash
						i.hasNameForId(n.id, C) || i.insertRules(n.id, C, c(n.rules, C, '@keyframes'))
					}),
						(this.toString = function () {
							return p4(12, String(n.name))
						}),
						(this.name = r),
						(this.id = 'sc-keyframes-' + r),
						(this.rules = t)
				}
				return (
					(e.prototype.getName = function (r) {
						return r === void 0 && (r = Sf), this.name + r.hash
					}),
					e
				)
			})(),
			K$ = /([A-Z])/,
			Q$ = /([A-Z])/g,
			X$ = /^ms-/,
			J$ = function (e) {
				return '-' + e.toLowerCase()
			}
		function C_(e) {
			return K$.test(e) ? e.replace(Q$, J$).replace(X$, '-ms-') : e
		}
		var s_ = function (e) {
			return e == null || e === !1 || e === ''
		}
		function C8(e, r, t, n) {
			if (Array.isArray(e)) {
				for (var i, c = [], C = 0, l = e.length; C < l; C += 1)
					(i = C8(e[C], r, t, n)) !== '' && (Array.isArray(i) ? c.push.apply(c, i) : c.push(i))
				return c
			}
			if (s_(e)) return ''
			if (Ea(e)) return '.' + e.styledComponentId
			if (B0(e)) {
				if (typeof (h = e) != 'function' || (h.prototype && h.prototype.isReactComponent) || !r) return e
				var u = e(r)
				return C8(u, r, t, n)
			}
			var h
			return e instanceof M_
				? t
					? (e.inject(t, n), e.getName(n))
					: e
				: zf(e)
				? (function v(g, m) {
						var H,
							L,
							x = []
						for (var w in g)
							g.hasOwnProperty(w) &&
								!s_(g[w]) &&
								((Array.isArray(g[w]) && g[w].isCss) || B0(g[w])
									? x.push(C_(w) + ':', g[w], ';')
									: zf(g[w])
									? x.push.apply(x, v(g[w], w))
									: x.push(
											C_(w) +
												': ' +
												((H = w),
												(L = g[w]) == null || typeof L == 'boolean' || L === ''
													? ''
													: typeof L != 'number' || L === 0 || H in N$
													? String(L).trim()
													: L + 'px') +
												';',
									  ))
						return m ? [m + ' {'].concat(x, ['}']) : x
				  })(e)
				: e.toString()
		}
		var l_ = function (e) {
			return Array.isArray(e) && (e.isCss = !0), e
		}
		function ka(e) {
			for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n]
			return B0(e) || zf(e)
				? l_(C8(i_(Pa, [e].concat(t))))
				: t.length === 0 && e.length === 1 && typeof e[0] == 'string'
				? e
				: l_(C8(i_(e, t)))
		}
		var xf = function (e, r, t) {
				return t === void 0 && (t = d5), (e.theme !== t.theme && e.theme) || r || t.theme
			},
			Z$ = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
			$$ = /(^-|-$)/g
		function gf(e) {
			return e.replace(Z$, '-').replace($$, '')
		}
		var wf = function (e) {
			return yf(p_(e) >>> 0)
		}
		function Na(e) {
			return typeof e == 'string' && !0
		}
		var Nf = function (e) {
				return typeof e == 'function' || (typeof e == 'object' && e !== null && !Array.isArray(e))
			},
			e22 = function (e) {
				return e !== '__proto__' && e !== 'constructor' && e !== 'prototype'
			}
		function r22(e, r, t) {
			var n = e[t]
			Nf(r) && Nf(n) ? z_(n, r) : (e[t] = r)
		}
		function z_(e) {
			for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n]
			for (var i = 0, c = t; i < c.length; i++) {
				var C = c[i]
				if (Nf(C)) for (var l in C) e22(l) && r22(e, C[l], l)
			}
			return e
		}
		var p5 = d4.createContext(),
			t22 = p5.Consumer,
			Mf = {}
		function H_(e, r, t) {
			var n = Ea(e),
				i = !Na(e),
				c = r.attrs,
				C = c === void 0 ? Pa : c,
				l = r.componentId,
				u =
					l === void 0
						? (function (M, S) {
								var k = typeof M != 'string' ? 'sc' : gf(M)
								Mf[k] = (Mf[k] || 0) + 1
								var D = k + '-' + wf('5.3.5' + k + Mf[k])
								return S ? S + '-' + D : D
						  })(r.displayName, r.parentComponentId)
						: l,
				h = r.displayName,
				v =
					h === void 0
						? (function (M) {
								return Na(M) ? 'styled.' + M : 'Styled(' + Hf(M) + ')'
						  })(e)
						: h,
				g = r.displayName && r.componentId ? gf(r.displayName) + '-' + r.componentId : r.componentId || u,
				m = n && e.attrs ? Array.prototype.concat(e.attrs, C).filter(Boolean) : C,
				H = r.shouldForwardProp
			n &&
				e.shouldForwardProp &&
				(H = r.shouldForwardProp
					? function (M, S, k) {
							return e.shouldForwardProp(M, S, k) && r.shouldForwardProp(M, S, k)
					  }
					: e.shouldForwardProp)
			var L,
				x = new j$(t, g, n ? e.componentStyle : void 0),
				w = x.isStatic && C.length === 0,
				V = function (M, S) {
					return (function (k, D, b, I) {
						var B = k.attrs,
							s2 = k.componentStyle,
							Y = k.defaultProps,
							d2 = k.foldedComponentIds,
							_2 = k.shouldForwardProp,
							T2 = k.styledComponentId,
							N1 = k.target,
							F2 = (function (O, j, q) {
								O === void 0 && (O = d5)
								var e2 = j3({}, j, { theme: O }),
									c2 = {}
								return (
									q.forEach(function (f2) {
										var Z,
											l2,
											u2,
											Y2 = f2
										for (Z in (B0(Y2) && (Y2 = Y2(e2)), Y2))
											e2[Z] = c2[Z] =
												Z === 'className'
													? ((l2 = c2[Z]), (u2 = Y2[Z]), l2 && u2 ? l2 + ' ' + u2 : l2 || u2)
													: Y2[Z]
									}),
									[e2, c2]
								)
							})(xf(D, v3.useContext(p5), Y) || d5, D, B),
							t1 = F2[0],
							C1 = F2[1],
							s1 = (function (O, j, q, e2) {
								var c2 = Pf(),
									f2 = L_(),
									Z = j ? O.generateAndInjectStyles(d5, c2, f2) : O.generateAndInjectStyles(q, c2, f2)
								return Z
							})(s2, I, t1, void 0),
							p2 = b,
							a2 = C1.$as || D.$as || C1.as || D.as || N1,
							v2 = Na(a2),
							H2 = C1 !== D ? j3({}, D, {}, C1) : D,
							A = {}
						for (var w2 in H2)
							w2[0] !== '$' &&
								w2 !== 'as' &&
								(w2 === 'forwardedAs'
									? (A.as = H2[w2])
									: (_2 ? _2(w2, a_, a2) : !v2 || a_(w2)) && (A[w2] = H2[w2]))
						return (
							D.style && C1.style !== D.style && (A.style = j3({}, D.style, {}, C1.style)),
							(A.className = Array.prototype
								.concat(d2, T2, s1 !== T2 ? s1 : null, D.className, C1.className)
								.filter(Boolean)
								.join(' ')),
							(A.ref = p2),
							v3.createElement(a2, A)
						)
					})(L, M, S, w)
				}
			return (
				(V.displayName = v),
				((L = d4.forwardRef(V)).attrs = m),
				(L.componentStyle = x),
				(L.displayName = v),
				(L.shouldForwardProp = H),
				(L.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Pa),
				(L.styledComponentId = g),
				(L.target = n ? e.target : e),
				(L.withComponent = function (M) {
					var S = r.componentId,
						k = (function (b, I) {
							if (b == null) return {}
							var B,
								s2,
								Y = {},
								d2 = Object.keys(b)
							for (s2 = 0; s2 < d2.length; s2++) (B = d2[s2]), I.indexOf(B) >= 0 || (Y[B] = b[B])
							return Y
						})(r, ['componentId']),
						D = S && S + '-' + (Na(M) ? M : gf(Hf(M)))
					return H_(M, j3({}, k, { attrs: m, componentId: D }), t)
				}),
				Object.defineProperty(L, 'defaultProps', {
					get: function () {
						return this._foldedDefaultProps
					},
					set: function (M) {
						this._foldedDefaultProps = n ? z_({}, e.defaultProps, M) : M
					},
				}),
				(L.toString = function () {
					return '.' + L.styledComponentId
				}),
				i &&
					u_(L, e, {
						attrs: !0,
						componentStyle: !0,
						displayName: !0,
						foldedComponentIds: !0,
						shouldForwardProp: !0,
						styledComponentId: !0,
						target: !0,
						withComponent: !0,
					}),
				L
			)
		}
		var _f = function (e) {
			return (function r(t, n, i) {
				if ((i === void 0 && (i = d5), !f_.isValidElementType(n))) return p4(1, String(n))
				var c = function () {
					return t(n, i, ka.apply(void 0, arguments))
				}
				return (
					(c.withConfig = function (C) {
						return r(t, n, j3({}, i, {}, C))
					}),
					(c.attrs = function (C) {
						return r(t, n, j3({}, i, { attrs: Array.prototype.concat(i.attrs, C).filter(Boolean) }))
					}),
					c
				)
			})(H_, e)
		}
		;[
			'a',
			'abbr',
			'address',
			'area',
			'article',
			'aside',
			'audio',
			'b',
			'base',
			'bdi',
			'bdo',
			'big',
			'blockquote',
			'body',
			'br',
			'button',
			'canvas',
			'caption',
			'cite',
			'code',
			'col',
			'colgroup',
			'data',
			'datalist',
			'dd',
			'del',
			'details',
			'dfn',
			'dialog',
			'div',
			'dl',
			'dt',
			'em',
			'embed',
			'fieldset',
			'figcaption',
			'figure',
			'footer',
			'form',
			'h1',
			'h2',
			'h3',
			'h4',
			'h5',
			'h6',
			'head',
			'header',
			'hgroup',
			'hr',
			'html',
			'i',
			'iframe',
			'img',
			'input',
			'ins',
			'kbd',
			'keygen',
			'label',
			'legend',
			'li',
			'link',
			'main',
			'map',
			'mark',
			'marquee',
			'menu',
			'menuitem',
			'meta',
			'meter',
			'nav',
			'noscript',
			'object',
			'ol',
			'optgroup',
			'option',
			'output',
			'p',
			'param',
			'picture',
			'pre',
			'progress',
			'q',
			'rp',
			'rt',
			'ruby',
			's',
			'samp',
			'script',
			'section',
			'select',
			'small',
			'source',
			'span',
			'strong',
			'style',
			'sub',
			'summary',
			'sup',
			'table',
			'tbody',
			'td',
			'textarea',
			'tfoot',
			'th',
			'thead',
			'time',
			'title',
			'tr',
			'track',
			'u',
			'ul',
			'var',
			'video',
			'wbr',
			'circle',
			'clipPath',
			'defs',
			'ellipse',
			'foreignObject',
			'g',
			'image',
			'line',
			'linearGradient',
			'marker',
			'mask',
			'path',
			'pattern',
			'polygon',
			'polyline',
			'radialGradient',
			'rect',
			'stop',
			'svg',
			'text',
			'textPath',
			'tspan',
		].forEach(function (e) {
			_f[e] = _f(e)
		})
		var n22 = (function () {
				function e(t, n) {
					;(this.rules = t), (this.componentId = n), (this.isStatic = d_(t)), q0.registerId(this.componentId + 1)
				}
				var r = e.prototype
				return (
					(r.createStyles = function (t, n, i, c) {
						var C = c(C8(this.rules, n, i, c).join(''), ''),
							l = this.componentId + t
						i.insertRules(l, l, C)
					}),
					(r.removeStyles = function (t, n) {
						n.clearRules(this.componentId + t)
					}),
					(r.renderStyles = function (t, n, i, c) {
						t > 2 && q0.registerId(this.componentId + t), this.removeStyles(t, i), this.createStyles(t, n, i, c)
					}),
					e
				)
			})(),
			a22 = /^\s*<\/[a-z]/i,
			i22 = (function () {
				function e() {
					var t = this
					;(this._emitSheetCSS = function () {
						var n = t.instance.toString()
						if (!n) return ''
						var i = Vf()
						return (
							'<style ' +
							[i && 'nonce="' + i + '"', v5 + '="true"', 'data-styled-version="5.3.5"']
								.filter(Boolean)
								.join(' ') +
							'>' +
							n +
							'</style>'
						)
					}),
						(this.getStyleTags = function () {
							return t.sealed ? p4(2) : t._emitSheetCSS()
						}),
						(this.getStyleElement = function () {
							var n
							if (t.sealed) return p4(2)
							var i =
									(((n = {})[v5] = ''),
									(n['data-styled-version'] = '5.3.5'),
									(n.dangerouslySetInnerHTML = { __html: t.instance.toString() }),
									n),
								c = Vf()
							return c && (i.nonce = c), [d4.createElement('style', j3({}, i, { key: 'sc-0-0' }))]
						}),
						(this.seal = function () {
							t.sealed = !0
						}),
						(this.instance = new q0({ isServer: !0 })),
						(this.sealed = !1)
				}
				var r = e.prototype
				return (
					(r.collectStyles = function (t) {
						return this.sealed ? p4(2) : d4.createElement(g_, { sheet: this.instance }, t)
					}),
					(r.interleaveWithNodeStream = function (t) {
						if (Ta) return p4(3)
						if (this.sealed) return p4(2)
						this.seal()
						var n = mP('stream'),
							i = (n.Readable, n.Transform),
							c = t,
							C = this.instance,
							l = this._emitSheetCSS,
							u = new i({
								transform: function (h, v, g) {
									var m = h.toString(),
										H = l()
									if ((C.clearTag(), a22.test(m))) {
										var L = m.indexOf('>') + 1,
											x = m.slice(0, L),
											w = m.slice(L)
										this.push(x + H + w)
									} else this.push(H + m)
									g()
								},
							})
						return (
							c.on('error', function (h) {
								u.emit('error', h)
							}),
							c.pipe(u)
						)
					}),
					e
				)
			})(),
			o22 = { StyleSheet: q0, masterSheet: m_ }
		;(I1.ServerStyleSheet = i22),
			(I1.StyleSheetConsumer = Y$),
			(I1.StyleSheetContext = Ra),
			(I1.StyleSheetManager = g_),
			(I1.ThemeConsumer = t22),
			(I1.ThemeContext = p5),
			(I1.ThemeProvider = function (e) {
				var r = v3.useContext(p5),
					t = v3.useMemo(
						function () {
							return (function (n, i) {
								if (!n) return p4(14)
								if (B0(n)) {
									var c = n(i)
									return c
								}
								return Array.isArray(n) || typeof n != 'object' ? p4(8) : i ? j3({}, i, {}, n) : n
							})(e.theme, r)
						},
						[e.theme, r],
					)
				return e.children ? d4.createElement(p5.Provider, { value: t }, e.children) : null
			}),
			(I1.__PRIVATE__ = o22),
			(I1.createGlobalStyle = function (e) {
				for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n]
				var i = ka.apply(void 0, [e].concat(t)),
					c = 'sc-global-' + wf(JSON.stringify(i)),
					C = new n22(i, c)
				function l(h) {
					var v = Pf(),
						g = L_(),
						m = v3.useContext(p5),
						H = v3.useRef(v.allocateGSInstance(c)).current
					return v.server && u(H, h, v, m, g), null
				}
				function u(h, v, g, m, H) {
					if (C.isStatic) C.renderStyles(h, k$, g, H)
					else {
						var L = j3({}, v, { theme: xf(v, m, l.defaultProps) })
						C.renderStyles(h, L, g, H)
					}
				}
				return d4.memo(l)
			}),
			(I1.css = ka),
			(I1.default = _f),
			(I1.isStyledComponent = Ea),
			(I1.keyframes = function (e) {
				for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n]
				var i = ka.apply(void 0, [e].concat(t)).join(''),
					c = wf(i)
				return new M_(c, i)
			}),
			(I1.useTheme = function () {
				return v3.useContext(p5)
			}),
			(I1.version = '5.3.5'),
			(I1.withTheme = function (e) {
				var r = d4.forwardRef(function (t, n) {
					var i = v3.useContext(p5),
						c = e.defaultProps,
						C = xf(t, i, c)
					return d4.createElement(e, j3({}, t, { theme: C, ref: n }))
				})
				return u_(r, e), (r.displayName = 'WithTheme(' + Hf(e) + ')'), r
			})
	})
	var Tf = Q(y2()),
		q_ = Q(m6()),
		U_ = Q(cL()),
		Fa = Q(Cs())
	var dL = () => {
			try {
				let e = localStorage.getItem('state')
				return e === null ? void 0 : JSON.parse(e)
			} catch {
				return
			}
		},
		vL = ({ backside: e, score: r, ui: t }) => {
			try {
				let n = JSON.stringify({ backside: e, score: r, ui: { playerNames: t.playerNames } })
				localStorage.setItem('state', n)
			} catch {}
		}
	var Oa = Q(y2()),
		__ = Q(S1()),
		k_ = Q(m6())
	var e9 = Q(y2()),
		dN = Q(S1()),
		vN = Q(m6()),
		mN = Q(W1())
	var _g = Q(y2()),
		kg = Q(S1())
	var xg = Q(y2()),
		q3 = 'global',
		_4 = 'player1',
		k4 = 'player2',
		h0 = xg.default.createContext()
	var vn = Q(y2()),
		c5 = () => {
			let [e, r] = (0, vn.useState)({ width: void 0, height: void 0 })
			return (
				(0, vn.useEffect)(() => {
					function t() {
						r({ width: window.innerWidth, height: window.innerHeight })
					}
					return window.addEventListener('resize', t), t(), () => window.removeEventListener('resize', t)
				}, []),
				e
			)
		}
	var ZD = (e, r) => (r === k4 ? 100 - e / 2 : e / 2),
		$D = (e, r) => (r === k4 ? e : 100 - e),
		wg =
			(e, { centerX: r, centerY: t }) =>
			({ x: n, y: i }) => ({
				x: (n - r) * Math.cos(e) - (i - t) * Math.sin(e) + r,
				y: (n - r) * Math.sin(e) + (i - t) * Math.cos(e) + t,
			}),
		Ng =
			(e, { width: r, height: t }) =>
			({ x: n, y: i }) =>
				e ? { x: ((n - r / 2) / t) * r + r / 2, y: ((i - t / 2) / r) * t + t / 2 } : { x: n, y: i },
		Pg = ({ children: e }) => {
			let { width: r, height: t } = c5(),
				n = Math.min(r, t) / 1e4,
				i = r / 2,
				c = t / 2,
				C = r < t ? 0 : Math.PI / 2,
				l = r < t ? 0 : 90,
				u = wg(C, { centerX: i, centerY: c }),
				h = wg(-C, { centerX: i, centerY: c }),
				v = Ng(r > t, { width: r, height: t }),
				g = Ng(r > t, { height: t, width: r }),
				m = (H) => ({
					width: r,
					height: t,
					getPoint: (w, V) => {
						let M = H === q3 ? w : $D(w, H),
							S = H === q3 ? V : ZD(V, H)
						return v(u({ x: (r / 100) * M, y: (t / 100) * S }))
					},
					getPointReverse: (w, V) => {
						let { x: M, y: S } = g(h({ x: w, y: V }))
						return { x: (M * 100) / r, y: (S * 100) / t }
					},
					rotation: (H === _4 ? 1 : 0) * Math.PI + C,
					rotationDeg: (H === _4 ? 180 : 0) + l,
					iconScale: { x: n, y: n },
				})
			return r == null
				? null
				: _g.default.createElement(h0.Provider, { value: { [_4]: m(_4), [k4]: m(k4), [q3]: m(q3) } }, e)
		}
	Pg.propTypes = { children: kg.default.node.isRequired }
	var mn = Pg
	var d3 = Q(y2()),
		Q72 = Q(S1()),
		b0 = Q(m6()),
		Va = Q(W1())
	var P4 = Q(S1()),
		z6 = P4.default.shape({ x: P4.default.number.isRequired, y: P4.default.number.isRequired }),
		Ag = P4.default.shape({
			thousand: P4.default.number.isRequired,
			fivehundred: P4.default.number.isRequired,
			hundred: P4.default.number.isRequired,
			fifty: P4.default.number.isRequired,
			twenty: P4.default.number.isRequired,
			one: P4.default.number.isRequired,
		})
	var e8 = Q(Jn())
	var D1 = 'player1',
		b1 = 'player2',
		Zn = 'all'
	var l5 = Q(ea()),
		Rl = (0, e8.default)({}, 'score'),
		ra = (0, l5.createSelector)(Rl, (0, e8.default)({}, 'present')),
		f02 = (0, l5.createSelector)(ra, (0, e8.default)({}, `${D1}`)),
		u02 = (0, l5.createSelector)(ra, (0, e8.default)({}, `${b1}`)),
		uZ = (0, l5.createSelector)(Rl, (0, e8.default)([], 'past')),
		hZ = (0, l5.createSelector)(Rl, (0, e8.default)([], 'future')),
		zw = (0, l5.createSelector)(uZ, (e) => e.length),
		Hw = (0, l5.createSelector)(hZ, (e) => e.length)
	var Dl = Q(Ol()),
		bl = Q(Jn()),
		ta = Q(ea()),
		Fl = (0, bl.default)({}, 'ui'),
		Sw = (0, ta.createSelector)(Fl, (0, Dl.default)('keyboardOpenFor')),
		xw = (0, ta.createSelector)(Fl, (0, Dl.default)('playerNames')),
		ww = (0, ta.createSelector)(Fl, (0, bl.default)(!1, 'isBoardFlipped'))
	var S0 = 'ADD_HUNDRED',
		x0 = 'ADD_FIFITY',
		w0 = 'ADD_TWENTY',
		N0 = 'ADD_POINTS',
		_0 = 'RESET_SCORE',
		na = 'SET_PLAYER_NAME',
		aa = 'UI_OPEN_KEYBOARD',
		ia = 'UI_CLOSE_KEYBOARD',
		oa = 'UI_FLIP_BOARD',
		ca = 'BACKSIDE_ADD_LINE',
		Ca = 'BACKSIDE_CLEAR'
	var Il = (e, r) => ({ type: S0, player: e, qty: r }),
		Bl = (e, r) => ({ type: x0, player: e, qty: r }),
		ql = (e, r) => ({ type: w0, player: e, qty: r }),
		Qe = (e, r, t) => ({ type: N0, player: e, points: r, timestamp: t }),
		Nw = () => ({ type: _0, player: Zn })
	var Ul = (e) => ({ type: aa, player: e }),
		jl = () => ({ type: ia }),
		Gl = (e, r) => ({ type: na, player: e, name: r }),
		sa = () => ({ type: oa })
	var k0 = Q(y2()),
		_w = Q(W1())
	a3()
	X4()
	s0()
	g6()
	u1()
	var l4 = class extends G {
		constructor(r) {
			super(r),
				this.on('imageChange.konva', () => {
					this._setImageLoad()
				}),
				this._setImageLoad()
		}
		_setImageLoad() {
			let r = this.image()
			;(r && r.complete) ||
				(r && r.readyState === 4) ||
				(r &&
					r.addEventListener &&
					r.addEventListener('load', () => {
						this._requestDraw()
					}))
		}
		_useBufferCanvas() {
			return super._useBufferCanvas(!0)
		}
		_sceneFunc(r) {
			let t = this.getWidth(),
				n = this.getHeight(),
				i = this.attrs.image,
				c
			if (i) {
				let C = this.attrs.cropWidth,
					l = this.attrs.cropHeight
				C && l ? (c = [i, this.cropX(), this.cropY(), C, l, 0, 0, t, n]) : (c = [i, 0, 0, t, n])
			}
			;(this.hasFill() || this.hasStroke()) &&
				(r.beginPath(), r.rect(0, 0, t, n), r.closePath(), r.fillStrokeShape(this)),
				i && r.drawImage.apply(r, c)
		}
		_hitFunc(r) {
			var t = this.width(),
				n = this.height()
			r.beginPath(), r.rect(0, 0, t, n), r.closePath(), r.fillStrokeShape(this)
		}
		getWidth() {
			var r, t
			return (r = this.attrs.width) !== null && r !== void 0
				? r
				: (t = this.image()) === null || t === void 0
				? void 0
				: t.width
		}
		getHeight() {
			var r, t
			return (r = this.attrs.height) !== null && r !== void 0
				? r
				: (t = this.image()) === null || t === void 0
				? void 0
				: t.height
		}
		static fromURL(r, t, n = null) {
			var i = E.createImageElement()
			;(i.onload = function () {
				var c = new l4({ image: i })
				t(c)
			}),
				(i.onerror = n),
				(i.crossOrigin = 'Anonymous'),
				(i.src = r)
		}
	}
	l4.prototype.className = 'Image'
	G1(l4)
	F.addGetterSetter(l4, 'image')
	F.addComponentsGetterSetter(l4, 'crop', ['x', 'y', 'width', 'height'])
	F.addGetterSetter(l4, 'cropX', 0, M2())
	F.addGetterSetter(l4, 'cropY', 0, M2())
	F.addGetterSetter(l4, 'cropWidth', 0, M2())
	F.addGetterSetter(l4, 'cropHeight', 0, M2())
	var dZ = () => (
			window.schieferImage ||
				(window.schieferImage = new Promise((e) => {
					let r = window.schieferImage || new window.Image()
					;(r.src = 'assets/schiefer.jpg'),
						(r.onload = () => {
							e(r)
						})
				})),
			window.schieferImage
		),
		vZ = () => {
			let { width: e, height: r } = c5(),
				[t, n] = (0, k0.useState)(null)
			return (
				(0, k0.useEffect)(() => {
					dZ().then((i) => {
						;(i.width = e), (i.height = r), n(i)
					})
				}),
				t && k0.default.createElement(_w.Image, { hitStrokeWidth: 0, image: t })
			)
		},
		la = vZ
	var I2 = Q(y2()),
		va = Q(S1())
	var mZ = (e) => {
			let r = Math.floor(e / 1e3),
				t = e % 1e3,
				n = Math.floor(t / 500),
				i = t % 500,
				c = Math.floor(i / 100),
				C = i % 100,
				l = Math.floor(C / 50),
				u = C % 50,
				h = Math.floor(u / 20),
				v = u % 20
			return { thousand: r, fivehundred: n, hundred: c, fifty: l, twenty: h, one: v }
		},
		Xe = (e) => {
			let r = e.one % 20,
				t = e.twenty + Math.floor(e.one / 20),
				n = t > 40 ? 20 + (t % 5) : t,
				i = e.fifty > 18 ? 8 + (e.fifty % 2) : e.fifty,
				c = e.hundred + Math.floor((e.fifty - i) / 2) + Math.floor((t - n) / 5),
				C = c > 35 ? 25 + (c % 5) : c,
				l = e.fivehundred > 2 ? 0 + (e.fivehundred % 2) : e.fivehundred
			return {
				thousand: e.thousand + Math.floor((e.fivehundred - l) / 2) + Math.floor((c - C) / 10),
				fivehundred: l,
				hundred: C,
				fifty: i,
				twenty: n,
				one: r,
			}
		},
		kw = (e) => 1e3 * e.thousand + 500 * e.fivehundred + 100 * e.hundred + 50 * e.fifty + 20 * e.twenty + e.one,
		Pw = (e, r) => {
			let t = mZ(r)
			return {
				thousand: e.thousand + t.thousand,
				fivehundred: e.fivehundred + t.fivehundred,
				hundred: e.hundred + t.hundred,
				fifty: e.fifty + t.fifty,
				twenty: e.twenty + t.twenty,
				one: e.one + t.one,
			}
		},
		y6 = (e, r, t) => ({ me: r * e, you: r * (t && e < 157 ? 157 - e : 0) })
	var Ql = Q(y2()),
		f5 = Q(S1())
	var t8 = (e) => ({
		onTouchstart: e,
		onClick: e,
		onMouseEnter: () => {
			window.document.body.style.cursor = 'pointer'
		},
		onMouseLeave: () => {
			window.document.body.style.cursor = 'default'
		},
	})
	var Aw = '#bc1818',
		n8 = '#ffffff',
		Ew = '#888888',
		fa = '#3b3b3b',
		Tw = 'rgba(255, 255, 255 , .2)',
		Wl = '#2a86e3',
		Yl = '#1b5693',
		Je = '#11375e',
		Rw = '#00db00',
		Ow = '#b6b6b6'
	var S6 = 'Arial, Helvetica, sans-serif'
	var ua = Q(W1())
	X4()
	s0()
	g6()
	u1()
	function Kl(e, r, t, n, i, c, C) {
		var l = Math.sqrt(Math.pow(t - e, 2) + Math.pow(n - r, 2)),
			u = Math.sqrt(Math.pow(i - t, 2) + Math.pow(c - n, 2)),
			h = (C * l) / (l + u),
			v = (C * u) / (l + u),
			g = t - h * (i - e),
			m = n - h * (c - r),
			H = t + v * (i - e),
			L = n + v * (c - r)
		return [g, m, H, L]
	}
	function Dw(e, r) {
		var t = e.length,
			n = [],
			i,
			c
		for (i = 2; i < t - 2; i += 2)
			(c = Kl(e[i - 2], e[i - 1], e[i], e[i + 1], e[i + 2], e[i + 3], r)),
				!isNaN(c[0]) && (n.push(c[0]), n.push(c[1]), n.push(e[i]), n.push(e[i + 1]), n.push(c[2]), n.push(c[3]))
		return n
	}
	var x6 = class extends G {
		constructor(r) {
			super(r),
				this.on('pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva', function () {
					this._clearCache('tensionPoints')
				})
		}
		_sceneFunc(r) {
			var t = this.points(),
				n = t.length,
				i = this.tension(),
				c = this.closed(),
				C = this.bezier(),
				l,
				u,
				h
			if (!!n) {
				if ((r.beginPath(), r.moveTo(t[0], t[1]), i !== 0 && n > 4)) {
					for (
						l = this.getTensionPoints(),
							u = l.length,
							h = c ? 0 : 4,
							c || r.quadraticCurveTo(l[0], l[1], l[2], l[3]);
						h < u - 2;

					)
						r.bezierCurveTo(l[h++], l[h++], l[h++], l[h++], l[h++], l[h++])
					c || r.quadraticCurveTo(l[u - 2], l[u - 1], t[n - 2], t[n - 1])
				} else if (C) for (h = 2; h < n; ) r.bezierCurveTo(t[h++], t[h++], t[h++], t[h++], t[h++], t[h++])
				else for (h = 2; h < n; h += 2) r.lineTo(t[h], t[h + 1])
				c ? (r.closePath(), r.fillStrokeShape(this)) : r.strokeShape(this)
			}
		}
		getTensionPoints() {
			return this._getCache('tensionPoints', this._getTensionPoints)
		}
		_getTensionPoints() {
			return this.closed() ? this._getTensionPointsClosed() : Dw(this.points(), this.tension())
		}
		_getTensionPointsClosed() {
			var r = this.points(),
				t = r.length,
				n = this.tension(),
				i = Kl(r[t - 2], r[t - 1], r[0], r[1], r[2], r[3], n),
				c = Kl(r[t - 4], r[t - 3], r[t - 2], r[t - 1], r[0], r[1], n),
				C = Dw(r, n),
				l = [i[2], i[3]].concat(C).concat([c[0], c[1], r[t - 2], r[t - 1], c[2], c[3], i[0], i[1], r[0], r[1]])
			return l
		}
		getWidth() {
			return this.getSelfRect().width
		}
		getHeight() {
			return this.getSelfRect().height
		}
		getSelfRect() {
			var r = this.points()
			if (r.length < 4) return { x: r[0] || 0, y: r[1] || 0, width: 0, height: 0 }
			this.tension() !== 0
				? (r = [r[0], r[1], ...this._getTensionPoints(), r[r.length - 2], r[r.length - 1]])
				: (r = this.points())
			for (var t = r[0], n = r[0], i = r[1], c = r[1], C, l, u = 0; u < r.length / 2; u++)
				(C = r[u * 2]),
					(l = r[u * 2 + 1]),
					(t = Math.min(t, C)),
					(n = Math.max(n, C)),
					(i = Math.min(i, l)),
					(c = Math.max(c, l))
			return { x: t, y: i, width: n - t, height: c - i }
		}
	}
	x6.prototype.className = 'Line'
	x6.prototype._attrsAffectingSize = ['points', 'bezier', 'tension']
	G1(x6)
	F.addGetterSetter(x6, 'closed', !1)
	F.addGetterSetter(x6, 'bezier', !1)
	F.addGetterSetter(x6, 'tension', 0, M2())
	F.addGetterSetter(x6, 'points', [], wL())
	X4()
	s0()
	u1()
	var Y1 = class extends G {
		constructor(r) {
			super(r),
				(this.dataArray = []),
				(this.pathLength = 0),
				(this.dataArray = Y1.parsePathData(this.data())),
				(this.pathLength = 0)
			for (var t = 0; t < this.dataArray.length; ++t) this.pathLength += this.dataArray[t].pathLength
			this.on('dataChange.konva', function () {
				;(this.dataArray = Y1.parsePathData(this.data())), (this.pathLength = 0)
				for (var n = 0; n < this.dataArray.length; ++n) this.pathLength += this.dataArray[n].pathLength
			})
		}
		_sceneFunc(r) {
			var t = this.dataArray
			r.beginPath()
			for (var n = !1, i = 0; i < t.length; i++) {
				var c = t[i].command,
					C = t[i].points
				switch (c) {
					case 'L':
						r.lineTo(C[0], C[1])
						break
					case 'M':
						r.moveTo(C[0], C[1])
						break
					case 'C':
						r.bezierCurveTo(C[0], C[1], C[2], C[3], C[4], C[5])
						break
					case 'Q':
						r.quadraticCurveTo(C[0], C[1], C[2], C[3])
						break
					case 'A':
						var l = C[0],
							u = C[1],
							h = C[2],
							v = C[3],
							g = C[4],
							m = C[5],
							H = C[6],
							L = C[7],
							x = h > v ? h : v,
							w = h > v ? 1 : h / v,
							V = h > v ? v / h : 1
						r.translate(l, u),
							r.rotate(H),
							r.scale(w, V),
							r.arc(0, 0, x, g, g + m, 1 - L),
							r.scale(1 / w, 1 / V),
							r.rotate(-H),
							r.translate(-l, -u)
						break
					case 'z':
						;(n = !0), r.closePath()
						break
				}
			}
			!n && !this.hasFill() ? r.strokeShape(this) : r.fillStrokeShape(this)
		}
		getSelfRect() {
			var r = []
			this.dataArray.forEach(function (h) {
				if (h.command === 'A') {
					var v = h.points[4],
						g = h.points[5],
						m = h.points[4] + g,
						H = Math.PI / 180
					if ((Math.abs(v - m) < H && (H = Math.abs(v - m)), g < 0))
						for (let L = v - H; L > m; L -= H) {
							let x = Y1.getPointOnEllipticalArc(h.points[0], h.points[1], h.points[2], h.points[3], L, 0)
							r.push(x.x, x.y)
						}
					else
						for (let L = v + H; L < m; L += H) {
							let x = Y1.getPointOnEllipticalArc(h.points[0], h.points[1], h.points[2], h.points[3], L, 0)
							r.push(x.x, x.y)
						}
				} else if (h.command === 'C')
					for (let L = 0; L <= 1; L += 0.01) {
						let x = Y1.getPointOnCubicBezier(
							L,
							h.start.x,
							h.start.y,
							h.points[0],
							h.points[1],
							h.points[2],
							h.points[3],
							h.points[4],
							h.points[5],
						)
						r.push(x.x, x.y)
					}
				else r = r.concat(h.points)
			})
			for (var t = r[0], n = r[0], i = r[1], c = r[1], C, l, u = 0; u < r.length / 2; u++)
				(C = r[u * 2]),
					(l = r[u * 2 + 1]),
					isNaN(C) || ((t = Math.min(t, C)), (n = Math.max(n, C))),
					isNaN(l) || ((i = Math.min(i, l)), (c = Math.max(c, l)))
			return { x: t, y: i, width: n - t, height: c - i }
		}
		getLength() {
			return this.pathLength
		}
		getPointAtLength(r) {
			var t,
				n = 0,
				i = this.dataArray.length
			if (!i) return null
			for (; n < i && r > this.dataArray[n].pathLength; ) (r -= this.dataArray[n].pathLength), ++n
			if (n === i) return (t = this.dataArray[n - 1].points.slice(-2)), { x: t[0], y: t[1] }
			if (r < 0.01) return (t = this.dataArray[n].points.slice(0, 2)), { x: t[0], y: t[1] }
			var c = this.dataArray[n],
				C = c.points
			switch (c.command) {
				case 'L':
					return Y1.getPointOnLine(r, c.start.x, c.start.y, C[0], C[1])
				case 'C':
					return Y1.getPointOnCubicBezier(
						r / c.pathLength,
						c.start.x,
						c.start.y,
						C[0],
						C[1],
						C[2],
						C[3],
						C[4],
						C[5],
					)
				case 'Q':
					return Y1.getPointOnQuadraticBezier(r / c.pathLength, c.start.x, c.start.y, C[0], C[1], C[2], C[3])
				case 'A':
					var l = C[0],
						u = C[1],
						h = C[2],
						v = C[3],
						g = C[4],
						m = C[5],
						H = C[6]
					return (g += (m * r) / c.pathLength), Y1.getPointOnEllipticalArc(l, u, h, v, g, H)
			}
			return null
		}
		static getLineLength(r, t, n, i) {
			return Math.sqrt((n - r) * (n - r) + (i - t) * (i - t))
		}
		static getPointOnLine(r, t, n, i, c, C, l) {
			C === void 0 && (C = t), l === void 0 && (l = n)
			var u = (c - n) / (i - t + 1e-8),
				h = Math.sqrt((r * r) / (1 + u * u))
			i < t && (h *= -1)
			var v = u * h,
				g
			if (i === t) g = { x: C, y: l + v }
			else if ((l - n) / (C - t + 1e-8) === u) g = { x: C + h, y: l + v }
			else {
				var m,
					H,
					L = this.getLineLength(t, n, i, c),
					x = (C - t) * (i - t) + (l - n) * (c - n)
				;(x = x / (L * L)), (m = t + x * (i - t)), (H = n + x * (c - n))
				var w = this.getLineLength(C, l, m, H),
					V = Math.sqrt(r * r - w * w)
				;(h = Math.sqrt((V * V) / (1 + u * u))), i < t && (h *= -1), (v = u * h), (g = { x: m + h, y: H + v })
			}
			return g
		}
		static getPointOnCubicBezier(r, t, n, i, c, C, l, u, h) {
			function v(w) {
				return w * w * w
			}
			function g(w) {
				return 3 * w * w * (1 - w)
			}
			function m(w) {
				return 3 * w * (1 - w) * (1 - w)
			}
			function H(w) {
				return (1 - w) * (1 - w) * (1 - w)
			}
			var L = u * v(r) + C * g(r) + i * m(r) + t * H(r),
				x = h * v(r) + l * g(r) + c * m(r) + n * H(r)
			return { x: L, y: x }
		}
		static getPointOnQuadraticBezier(r, t, n, i, c, C, l) {
			function u(H) {
				return H * H
			}
			function h(H) {
				return 2 * H * (1 - H)
			}
			function v(H) {
				return (1 - H) * (1 - H)
			}
			var g = C * u(r) + i * h(r) + t * v(r),
				m = l * u(r) + c * h(r) + n * v(r)
			return { x: g, y: m }
		}
		static getPointOnEllipticalArc(r, t, n, i, c, C) {
			var l = Math.cos(C),
				u = Math.sin(C),
				h = { x: n * Math.cos(c), y: i * Math.sin(c) }
			return { x: r + (h.x * l - h.y * u), y: t + (h.x * u + h.y * l) }
		}
		static parsePathData(r) {
			if (!r) return []
			var t = r,
				n = ['m', 'M', 'l', 'L', 'v', 'V', 'h', 'H', 'z', 'Z', 'c', 'C', 'q', 'Q', 't', 'T', 's', 'S', 'a', 'A']
			t = t.replace(new RegExp(' ', 'g'), ',')
			for (var i = 0; i < n.length; i++) t = t.replace(new RegExp(n[i], 'g'), '|' + n[i])
			var c = t.split('|'),
				C = [],
				l = [],
				u = 0,
				h = 0,
				v = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi,
				g
			for (i = 1; i < c.length; i++) {
				var m = c[i],
					H = m.charAt(0)
				for (m = m.slice(1), l.length = 0; (g = v.exec(m)); ) l.push(g[0])
				for (var L = [], x = 0, w = l.length; x < w; x++) {
					if (l[x] === '00') {
						L.push(0, 0)
						continue
					}
					var V = parseFloat(l[x])
					isNaN(V) ? L.push(0) : L.push(V)
				}
				for (; L.length > 0 && !isNaN(L[0]); ) {
					var M = null,
						S = [],
						k = u,
						D = h,
						b,
						I,
						B,
						s2,
						Y,
						d2,
						_2,
						T2,
						N1,
						F2
					switch (H) {
						case 'l':
							;(u += L.shift()), (h += L.shift()), (M = 'L'), S.push(u, h)
							break
						case 'L':
							;(u = L.shift()), (h = L.shift()), S.push(u, h)
							break
						case 'm':
							var t1 = L.shift(),
								C1 = L.shift()
							if (((u += t1), (h += C1), (M = 'M'), C.length > 2 && C[C.length - 1].command === 'z')) {
								for (var s1 = C.length - 2; s1 >= 0; s1--)
									if (C[s1].command === 'M') {
										;(u = C[s1].points[0] + t1), (h = C[s1].points[1] + C1)
										break
									}
							}
							S.push(u, h), (H = 'l')
							break
						case 'M':
							;(u = L.shift()), (h = L.shift()), (M = 'M'), S.push(u, h), (H = 'L')
							break
						case 'h':
							;(u += L.shift()), (M = 'L'), S.push(u, h)
							break
						case 'H':
							;(u = L.shift()), (M = 'L'), S.push(u, h)
							break
						case 'v':
							;(h += L.shift()), (M = 'L'), S.push(u, h)
							break
						case 'V':
							;(h = L.shift()), (M = 'L'), S.push(u, h)
							break
						case 'C':
							S.push(L.shift(), L.shift(), L.shift(), L.shift()), (u = L.shift()), (h = L.shift()), S.push(u, h)
							break
						case 'c':
							S.push(u + L.shift(), h + L.shift(), u + L.shift(), h + L.shift()),
								(u += L.shift()),
								(h += L.shift()),
								(M = 'C'),
								S.push(u, h)
							break
						case 'S':
							;(I = u),
								(B = h),
								(b = C[C.length - 1]),
								b.command === 'C' && ((I = u + (u - b.points[2])), (B = h + (h - b.points[3]))),
								S.push(I, B, L.shift(), L.shift()),
								(u = L.shift()),
								(h = L.shift()),
								(M = 'C'),
								S.push(u, h)
							break
						case 's':
							;(I = u),
								(B = h),
								(b = C[C.length - 1]),
								b.command === 'C' && ((I = u + (u - b.points[2])), (B = h + (h - b.points[3]))),
								S.push(I, B, u + L.shift(), h + L.shift()),
								(u += L.shift()),
								(h += L.shift()),
								(M = 'C'),
								S.push(u, h)
							break
						case 'Q':
							S.push(L.shift(), L.shift()), (u = L.shift()), (h = L.shift()), S.push(u, h)
							break
						case 'q':
							S.push(u + L.shift(), h + L.shift()), (u += L.shift()), (h += L.shift()), (M = 'Q'), S.push(u, h)
							break
						case 'T':
							;(I = u),
								(B = h),
								(b = C[C.length - 1]),
								b.command === 'Q' && ((I = u + (u - b.points[0])), (B = h + (h - b.points[1]))),
								(u = L.shift()),
								(h = L.shift()),
								(M = 'Q'),
								S.push(I, B, u, h)
							break
						case 't':
							;(I = u),
								(B = h),
								(b = C[C.length - 1]),
								b.command === 'Q' && ((I = u + (u - b.points[0])), (B = h + (h - b.points[1]))),
								(u += L.shift()),
								(h += L.shift()),
								(M = 'Q'),
								S.push(I, B, u, h)
							break
						case 'A':
							;(s2 = L.shift()),
								(Y = L.shift()),
								(d2 = L.shift()),
								(_2 = L.shift()),
								(T2 = L.shift()),
								(N1 = u),
								(F2 = h),
								(u = L.shift()),
								(h = L.shift()),
								(M = 'A'),
								(S = this.convertEndpointToCenterParameterization(N1, F2, u, h, _2, T2, s2, Y, d2))
							break
						case 'a':
							;(s2 = L.shift()),
								(Y = L.shift()),
								(d2 = L.shift()),
								(_2 = L.shift()),
								(T2 = L.shift()),
								(N1 = u),
								(F2 = h),
								(u += L.shift()),
								(h += L.shift()),
								(M = 'A'),
								(S = this.convertEndpointToCenterParameterization(N1, F2, u, h, _2, T2, s2, Y, d2))
							break
					}
					C.push({
						command: M || H,
						points: S,
						start: { x: k, y: D },
						pathLength: this.calcLength(k, D, M || H, S),
					})
				}
				;(H === 'z' || H === 'Z') && C.push({ command: 'z', points: [], start: void 0, pathLength: 0 })
			}
			return C
		}
		static calcLength(r, t, n, i) {
			var c,
				C,
				l,
				u,
				h = Y1
			switch (n) {
				case 'L':
					return h.getLineLength(r, t, i[0], i[1])
				case 'C':
					for (
						c = 0, C = h.getPointOnCubicBezier(0, r, t, i[0], i[1], i[2], i[3], i[4], i[5]), u = 0.01;
						u <= 1;
						u += 0.01
					)
						(l = h.getPointOnCubicBezier(u, r, t, i[0], i[1], i[2], i[3], i[4], i[5])),
							(c += h.getLineLength(C.x, C.y, l.x, l.y)),
							(C = l)
					return c
				case 'Q':
					for (
						c = 0, C = h.getPointOnQuadraticBezier(0, r, t, i[0], i[1], i[2], i[3]), u = 0.01;
						u <= 1;
						u += 0.01
					)
						(l = h.getPointOnQuadraticBezier(u, r, t, i[0], i[1], i[2], i[3])),
							(c += h.getLineLength(C.x, C.y, l.x, l.y)),
							(C = l)
					return c
				case 'A':
					c = 0
					var v = i[4],
						g = i[5],
						m = i[4] + g,
						H = Math.PI / 180
					if (
						(Math.abs(v - m) < H && (H = Math.abs(v - m)),
						(C = h.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], v, 0)),
						g < 0)
					)
						for (u = v - H; u > m; u -= H)
							(l = h.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], u, 0)),
								(c += h.getLineLength(C.x, C.y, l.x, l.y)),
								(C = l)
					else
						for (u = v + H; u < m; u += H)
							(l = h.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], u, 0)),
								(c += h.getLineLength(C.x, C.y, l.x, l.y)),
								(C = l)
					return (
						(l = h.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], m, 0)),
						(c += h.getLineLength(C.x, C.y, l.x, l.y)),
						c
					)
			}
			return 0
		}
		static convertEndpointToCenterParameterization(r, t, n, i, c, C, l, u, h) {
			var v = h * (Math.PI / 180),
				g = (Math.cos(v) * (r - n)) / 2 + (Math.sin(v) * (t - i)) / 2,
				m = (-1 * Math.sin(v) * (r - n)) / 2 + (Math.cos(v) * (t - i)) / 2,
				H = (g * g) / (l * l) + (m * m) / (u * u)
			H > 1 && ((l *= Math.sqrt(H)), (u *= Math.sqrt(H)))
			var L = Math.sqrt((l * l * (u * u) - l * l * (m * m) - u * u * (g * g)) / (l * l * (m * m) + u * u * (g * g)))
			c === C && (L *= -1), isNaN(L) && (L = 0)
			var x = (L * l * m) / u,
				w = (L * -u * g) / l,
				V = (r + n) / 2 + Math.cos(v) * x - Math.sin(v) * w,
				M = (t + i) / 2 + Math.sin(v) * x + Math.cos(v) * w,
				S = function (Y) {
					return Math.sqrt(Y[0] * Y[0] + Y[1] * Y[1])
				},
				k = function (Y, d2) {
					return (Y[0] * d2[0] + Y[1] * d2[1]) / (S(Y) * S(d2))
				},
				D = function (Y, d2) {
					return (Y[0] * d2[1] < Y[1] * d2[0] ? -1 : 1) * Math.acos(k(Y, d2))
				},
				b = D([1, 0], [(g - x) / l, (m - w) / u]),
				I = [(g - x) / l, (m - w) / u],
				B = [(-1 * g - x) / l, (-1 * m - w) / u],
				s2 = D(I, B)
			return (
				k(I, B) <= -1 && (s2 = Math.PI),
				k(I, B) >= 1 && (s2 = 0),
				C === 0 && s2 > 0 && (s2 = s2 - 2 * Math.PI),
				C === 1 && s2 < 0 && (s2 = s2 + 2 * Math.PI),
				[V, M, l, u, b, s2, v, C]
			)
		}
	}
	Y1.prototype.className = 'Path'
	Y1.prototype._attrsAffectingSize = ['data']
	G1(Y1)
	F.addGetterSetter(Y1, 'data')
	var bw = ({
		bottomLeft: e,
		topRight: r,
		iconPosition: t,
		iconScale: n,
		iconPath: i,
		onStrike: c,
		disabled: C,
		rotation: l,
		fgProps: u,
		bgProps: h,
		debug: v,
	}) => [
		Ql.default.createElement(ua.Line, {
			key: 'bg',
			points: [...Object.values(e), r.x, e.y, ...Object.values(r), e.x, r.y],
			fill: v ? 'rgba(93,121,255,.2)' : 'transparent',
			...(c && !C ? t8(c) : {}),
			closed: !0,
			...h,
		}),
		Ql.default.createElement(ua.Path, {
			key: 'fg',
			...t,
			fill: C ? Ew : n8,
			data: i,
			scale: n,
			rotation: l,
			...(c && !C ? t8(c) : {}),
			...u,
		}),
	]
	bw.propTypes = {
		bottomLeft: z6.isRequired,
		topRight: z6.isRequired,
		iconPosition: z6.isRequired,
		iconScale: z6.isRequired,
		iconPath: f5.default.string.isRequired,
		onStrike: f5.default.func.isRequired,
		disabled: f5.default.bool,
		rotation: f5.default.number,
		fgProps: f5.default.object,
		bgProps: f5.default.object,
		debug: f5.default.bool,
	}
	var A4 = bw
	var LZ = {
		prefix: 'fas',
		iconName: 'arrow-rotate-left',
		icon: [
			512,
			512,
			[8634, 'arrow-left-rotate', 'arrow-rotate-back', 'arrow-rotate-backward', 'undo'],
			'f0e2',
			'M480 256c0 123.4-100.5 223.9-223.9 223.9c-48.86 0-95.19-15.58-134.2-44.86c-14.14-10.59-17-30.66-6.391-44.81c10.61-14.09 30.69-16.97 44.8-6.375c27.84 20.91 61 31.94 95.89 31.94C344.3 415.8 416 344.1 416 256s-71.67-159.8-159.8-159.8C205.9 96.22 158.6 120.3 128.6 160H192c17.67 0 32 14.31 32 32S209.7 224 192 224H48c-17.67 0-32-14.31-32-32V48c0-17.69 14.33-32 32-32s32 14.31 32 32v70.23C122.1 64.58 186.1 32.11 256.1 32.11C379.5 32.11 480 132.6 480 256z',
		],
	}
	var Fw = LZ,
		gZ = {
			prefix: 'fas',
			iconName: 'arrow-rotate-right',
			icon: [
				512,
				512,
				[8635, 'arrow-right-rotate', 'arrow-rotate-forward', 'redo'],
				'f01e',
				'M496 48V192c0 17.69-14.31 32-32 32H320c-17.69 0-32-14.31-32-32s14.31-32 32-32h63.39c-29.97-39.7-77.25-63.78-127.6-63.78C167.7 96.22 96 167.9 96 256s71.69 159.8 159.8 159.8c34.88 0 68.03-11.03 95.88-31.94c14.22-10.53 34.22-7.75 44.81 6.375c10.59 14.16 7.75 34.22-6.375 44.81c-39.03 29.28-85.36 44.86-134.2 44.86C132.5 479.9 32 379.4 32 256s100.5-223.9 223.9-223.9c69.15 0 134 32.47 176.1 86.12V48c0-17.69 14.31-32 32-32S496 30.31 496 48z',
			],
		}
	var Iw = gZ
	var ha = {
		prefix: 'fas',
		iconName: 'code',
		icon: [
			640,
			512,
			[],
			'f121',
			'M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z',
		],
	}
	var MZ = {
			prefix: 'fas',
			iconName: 'delete-left',
			icon: [
				576,
				512,
				[9003, 'backspace'],
				'f55a',
				'M576 384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64H512C547.3 64 576 92.65 576 128V384zM271 208.1L318.1 256L271 303C261.7 312.4 261.7 327.6 271 336.1C280.4 346.3 295.6 346.3 304.1 336.1L352 289.9L399 336.1C408.4 346.3 423.6 346.3 432.1 336.1C442.3 327.6 442.3 312.4 432.1 303L385.9 256L432.1 208.1C442.3 199.6 442.3 184.4 432.1 175C423.6 165.7 408.4 165.7 399 175L352 222.1L304.1 175C295.6 165.7 280.4 165.7 271 175C261.7 184.4 261.7 199.6 271 208.1V208.1z',
			],
		},
		Bw = MZ
	var pa = {
		prefix: 'fas',
		iconName: 'eraser',
		icon: [
			512,
			512,
			[],
			'f12d',
			'M480 416C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H150.6C133.7 480 117.4 473.3 105.4 461.3L25.37 381.3C.3786 356.3 .3786 315.7 25.37 290.7L258.7 57.37C283.7 32.38 324.3 32.38 349.3 57.37L486.6 194.7C511.6 219.7 511.6 260.3 486.6 285.3L355.9 416H480zM265.4 416L332.7 348.7L195.3 211.3L70.63 336L150.6 416L265.4 416z',
		],
	}
	var zZ = {
			prefix: 'fas',
			iconName: 'pencil',
			icon: [
				512,
				512,
				[61504, 9999, 'pencil-alt'],
				'f303',
				'M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z',
			],
		},
		qw = zZ
	var Uw = {
			prefix: 'fas',
			iconName: 'toggle-off',
			icon: [
				576,
				512,
				[],
				'f204',
				'M192 352C138.1 352 96 309 96 256C96 202.1 138.1 160 192 160C245 160 288 202.1 288 256C288 309 245 352 192 352zM384 448H192C85.96 448 0 362 0 256C0 149.1 85.96 64 192 64H384C490 64 576 149.1 576 256C576 362 490 448 384 448zM384 128H192C121.3 128 64 185.3 64 256C64 326.7 121.3 384 192 384H384C454.7 384 512 326.7 512 256C512 185.3 454.7 128 384 128z',
			],
		},
		jw = {
			prefix: 'fas',
			iconName: 'toggle-on',
			icon: [
				576,
				512,
				[],
				'f205',
				'M384 64C490 64 576 149.1 576 256C576 362 490 448 384 448H192C85.96 448 0 362 0 256C0 149.1 85.96 64 192 64H384zM384 352C437 352 480 309 480 256C480 202.1 437 160 384 160C330.1 160 288 202.1 288 256C288 309 330.1 352 384 352z',
			],
		}
	var ma = Q(W1())
	var Gw = Q(y2()),
		Xl = Q(S1())
	var HZ = ({ scope: e, children: r }) => Gw.default.createElement(h0.Consumer, null, (t) => r(t[e]))
	HZ.propTypes = { children: Xl.default.func.isRequired, scope: Xl.default.string.isRequired }
	var Jl = Q(y2()),
		P0 = Q(S1())
	var da = Q(W1())
	var Ww = ({
		bottomLeft: e,
		topRight: r,
		textPosition: t,
		text: n,
		rotation: i,
		onStrike: c,
		bgProps: C,
		fgProps: l,
	}) => [
		Jl.default.createElement(da.Line, {
			key: 'bg',
			points: [...Object.values(e), r.x, e.y, ...Object.values(r), e.x, r.y],
			stroke: n8,
			fill: fa,
			closed: !0,
			...C,
			...(c ? t8(c) : {}),
		}),
		Jl.default.createElement(da.Shape, {
			key: 'fg',
			...t,
			sceneFunc: (u) => {
				u.rotate(i),
					(u.fillStyle = n8),
					(u.textAlign = 'center'),
					(u.textBaseline = 'middle'),
					(u.font = '5.1vmin monospace'),
					l &&
						Object.entries(l).forEach(([h, v]) => {
							u[h] = v
						}),
					u.fillText(n, 0, 0)
			},
		}),
	]
	Ww.propTypes = {
		bottomLeft: z6.isRequired,
		topRight: z6.isRequired,
		textPosition: z6.isRequired,
		text: P0.default.string.isRequired,
		rotation: P0.default.number.isRequired,
		onStrike: P0.default.func,
		fgProps: P0.default.object,
		bgProps: P0.default.object,
	}
	var v1 = Ww
	var Yw = Q(y2())
	var F1 = (e) => (0, Yw.useContext)(h0)[e]
	var Kw = ({ scope: e, onConfirm: r, closeKeyboard: t }) => {
		let [n, i] = (0, I2.useState)(0),
			[c, C] = (0, I2.useState)(!0),
			l = (V) => {
				let M = 10 * n + V
				i(M > 257 ? 257 : M)
			},
			u = () => i(Math.floor(n / 10)),
			h = () => i(0),
			{ getPoint: v, rotation: g, rotationDeg: m, iconScale: H } = F1(e),
			L = 14,
			x = 13,
			w = 1.5
		return I2.default.createElement(
			ma.Group,
			null,
			I2.default.createElement(ma.Line, {
				points: [
					...Object.values(v(0, 0)),
					...Object.values(v(0, 200)),
					...Object.values(v(200, 200)),
					...Object.values(v(200, 0)),
				],
				fill: Tw,
				onClick: () => {
					h(), t()
				},
				onTouchstart: () => {
					h(), t()
				},
				closed: !0,
			}),
			I2.default.createElement(v1, {
				text: n.toString(),
				bottomLeft: v(29, 129),
				topRight: v(71, 143),
				textPosition: v(50, 135.5),
				rotation: g,
			}),
			I2.default.createElement(v1, {
				text: '1',
				bottomLeft: v(29, 115),
				topRight: v(43, 129),
				textPosition: v(36, 121.5),
				rotation: g,
				onStrike: () => l(1),
			}),
			I2.default.createElement(v1, {
				text: '2',
				bottomLeft: v(43, 115),
				topRight: v(57, 129),
				textPosition: v(50, 121.5),
				rotation: g,
				onStrike: () => l(2),
			}),
			I2.default.createElement(v1, {
				text: '3',
				bottomLeft: v(57, 115),
				topRight: v(71, 129),
				textPosition: v(64, 121.5),
				rotation: g,
				onStrike: () => l(3),
			}),
			I2.default.createElement(v1, {
				text: '4',
				bottomLeft: v(29, 100),
				topRight: v(43, 115),
				textPosition: v(36, 107),
				rotation: g,
				onStrike: () => l(4),
			}),
			I2.default.createElement(v1, {
				text: '5',
				bottomLeft: v(43, 100),
				topRight: v(57, 115),
				textPosition: v(50, 107),
				rotation: g,
				onStrike: () => l(5),
			}),
			I2.default.createElement(v1, {
				text: '6',
				bottomLeft: v(57, 100),
				topRight: v(71, 115),
				textPosition: v(64, 107),
				rotation: g,
				onStrike: () => l(6),
			}),
			I2.default.createElement(v1, {
				text: '7',
				bottomLeft: v(29, 87),
				topRight: v(43, 101),
				textPosition: v(36, 93),
				rotation: g,
				onStrike: () => l(7),
			}),
			I2.default.createElement(v1, {
				text: '8',
				bottomLeft: v(43, 87),
				topRight: v(57, 101),
				textPosition: v(50, 93),
				rotation: g,
				onStrike: () => l(8),
			}),
			I2.default.createElement(v1, {
				text: '9',
				bottomLeft: v(57, 87),
				topRight: v(71, 101),
				textPosition: v(64, 93),
				rotation: g,
				onStrike: () => l(9),
			}),
			I2.default.createElement(v1, {
				text: '0',
				bottomLeft: v(29, 73),
				topRight: v(57, 87),
				textPosition: v(43, 79),
				rotation: g,
				onStrike: () => l(0),
			}),
			I2.default.createElement(A4, {
				iconPath: Bw.icon[4],
				iconScale: H,
				bottomLeft: v(57, 73),
				topRight: v(71, 87),
				iconPosition: v(61, 84),
				rotation: m,
				onStrike: u,
				bgProps: { stroke: n8, fill: fa },
			}),
			I2.default.createElement(v1, {
				text: 'Gegner Erg\xE4nzen:',
				bottomLeft: v(29, 59),
				topRight: v(57, 73),
				textPosition: v(30, 66),
				rotation: g,
				fgProps: { font: `3vmin ${S6}`, textAlign: 'left' },
				bgProps: { stroke: 'transparent', fill: 'transparent' },
			}),
			I2.default.createElement(A4, {
				iconPath: (c ? jw : Uw).icon[4],
				iconScale: H,
				bottomLeft: v(57, 59),
				topRight: v(71, 73),
				iconPosition: v(62, 70),
				rotation: m,
				onStrike: () => C(!c),
				fgProps: { fill: c ? Rw : Ow },
			}),
			I2.default.createElement(v1, {
				text: '1x',
				bottomLeft: v(50 - 2 * L, 45),
				topRight: v(50 - 1 * L - w, 59),
				textPosition: v(50 - 2 * L + 6.5, 51.5),
				rotation: g,
				onStrike: () => {
					n < 1 || (r(y6(n, 1, c)), h(), t())
				},
				bgProps: { fill: Wl },
			}),
			I2.default.createElement(v1, {
				text: '2x',
				bottomLeft: v(50 - 1 * L, 45),
				topRight: v(50 - 0 * L - w, 59),
				textPosition: v(50 - 1 * L + 6.5, 51.5),
				rotation: g,
				onStrike: () => {
					n < 1 || (r(y6(n, 2, c)), h(), t())
				},
				bgProps: { fill: Yl },
			}),
			I2.default.createElement(v1, {
				text: '3x',
				bottomLeft: v(50 + 0 * L, 45),
				topRight: v(50 + 1 * L - w, 59),
				textPosition: v(50 + 0 * L + 6.5, 51.5),
				rotation: g,
				onStrike: () => {
					n < 1 || (r(y6(n, 3, c)), h(), t())
				},
				bgProps: { fill: Je },
			}),
			I2.default.createElement(v1, {
				text: '4x',
				bottomLeft: v(50 + 1 * L, 45),
				topRight: v(50 + 2 * L - w, 59),
				textPosition: v(50 + 1 * L + 6.5, 51.5),
				rotation: g,
				onStrike: () => {
					n < 1 || (r(y6(n, 4, c)), h(), t())
				},
				bgProps: { fill: Je },
			}),
			I2.default.createElement(v1, {
				text: '257',
				bottomLeft: v(50 - 2 * L, 28),
				topRight: v(50 - 1 * L - w, 42),
				textPosition: v(50 - 2 * L + 6.5, 34),
				rotation: g,
				onStrike: () => {
					r(y6(257, 1, !1)), h(), t()
				},
				bgProps: { fill: Wl },
			}),
			I2.default.createElement(v1, {
				text: '514',
				bottomLeft: v(50 - 1 * L, 28),
				topRight: v(50 - 0 * L - w, 42),
				textPosition: v(50 - 1 * L + 6.5, 34),
				rotation: g,
				onStrike: () => {
					r(y6(257, 2, !1)), h(), t()
				},
				bgProps: { fill: Yl },
			}),
			I2.default.createElement(v1, {
				text: '771',
				bottomLeft: v(50 + 0 * L, 28),
				topRight: v(50 + 1 * L - w, 42),
				textPosition: v(50 + 0 * L + 6.5, 34),
				rotation: g,
				onStrike: () => {
					r(y6(257, 3, !1)), h(), t()
				},
				bgProps: { fill: Je },
			}),
			I2.default.createElement(v1, {
				text: '1028',
				bottomLeft: v(50 + 1 * L, 28),
				topRight: v(50 + 2 * L - w, 42),
				textPosition: v(50 + 1 * L + 6, 34),
				rotation: g,
				onStrike: () => {
					r(y6(257, 4, !1)), h(), t()
				},
				bgProps: { fill: Je },
			}),
		)
	}
	Kw.propTypes = {
		scope: va.default.string.isRequired,
		onConfirm: va.default.func.isRequired,
		closeKeyboard: va.default.func.isRequired,
	}
	var Zl = Kw
	var E4 = Q(y2()),
		Qw = Q(S1())
	var U3 = Q(W1())
	var Xw = ({ scope: e, score: r }) => {
		let { getPoint: t, rotation: n } = F1(e)
		return E4.default.createElement(
			U3.Group,
			{ hitStrokeWidth: 0 },
			[...Array(r.thousand)].map((i, c) => [
				E4.default.createElement(U3.Line, {
					key: `thousand-${c}-1`,
					points: [...Object.values(t(88 - (c + 0.7) * 5, 96)), ...Object.values(t(88 - c * 5, 84))],
					stroke: 'white',
					strokeWidth: 6 / 3,
				}),
				E4.default.createElement(U3.Line, {
					key: `thousand-${c}-2`,
					points: [...Object.values(t(88 - (c + 0.7) * 5, 84)), ...Object.values(t(88 - c * 5, 96))],
					stroke: 'white',
					strokeWidth: 6 / 3,
				}),
			]),
			[...Array(r.fivehundred)].map((i, c) => {
				let C = r.thousand * 5 + 0.7
				return [
					E4.default.createElement(U3.Line, {
						key: `fivehundred-${c}-1`,
						points: [...Object.values(t(88 - C - (c + 0.3) * 5, 84)), ...Object.values(t(88 - C - c * 5, 96))],
						stroke: 'white',
						strokeWidth: 6 / 3,
					}),
					E4.default.createElement(U3.Line, {
						key: `fivehundred-${c}-2`,
						points: [
							...Object.values(t(88 - C - (c + 0.6) * 5, 96)),
							...Object.values(t(88 - C - (c + 0.3) * 5, 84)),
						],
						stroke: 'white',
						strokeWidth: 6 / 3,
					}),
				]
			}),
			[...Array(r.hundred)].map((i, c) =>
				E4.default.createElement(U3.Line, {
					key: `hundred-${c}`,
					points:
						(c + 1) % 5 === 0
							? [...Object.values(t(12 + (c - 5) * 1.5, 96)), ...Object.values(t(12 + c * 1.5, 84))]
							: [...Object.values(t(12 + c * 1.5, 96)), ...Object.values(t(12 + c * 1.5, 84))],
					thousand: !0,
					stroke: 'white',
					strokeWidth: 6 / 3,
				}),
			),
			[...Array(r.fifty)].map((i, c) =>
				E4.default.createElement(U3.Line, {
					key: `fifty-${c}`,
					points:
						c % 2 === 0
							? [
									...Object.values(t(22 + c * 2 * 1.5, 14 + c * 3)),
									...Object.values(t(21 + c * 2 * 1.5 + 1, 30 + c * 3)),
							  ]
							: [
									...Object.values(t(22 + c * 2 * 1.5, 14 + c * 3)),
									...Object.values(t(15 + c * 2 * 1.5 + 1, 24 + c * 3)),
							  ],
					stroke: 'white',
					strokeWidth: 6 / 3,
				}),
			),
			[...Array(r.twenty)].map((i, c) =>
				E4.default.createElement(U3.Line, {
					key: `twenty-${c}`,
					points:
						(c + 1) % 5 === 0
							? [...Object.values(t(88 - (c - 5) * 1.5, 4)), ...Object.values(t(88 - c * 1.5, 16))]
							: [...Object.values(t(88 - c * 1.5, 4)), ...Object.values(t(88 - c * 1.5, 16))],
					stroke: 'white',
					strokeWidth: 6 / 3,
				}),
			),
			E4.default.createElement(U3.Shape, {
				...t(87, 46),
				sceneFunc: (i) => {
					i.rotate(n), (i.fillStyle = 'white'), (i.font = `6vmin ${S6}`), i.fillText(r.one, 0, 0)
				},
			}),
			E4.default.createElement(U3.Shape, {
				...t(50, 45),
				sceneFunc: (i) => {
					i.rotate(n),
						(i.fillStyle = 'rgba(255,255,255,0.2)'),
						(i.textAlign = 'center'),
						(i.textBaseline = 'middle'),
						(i.font = `24vmin ${S6}`),
						i.fillText(kw(r), 0, 0)
				},
			}),
		)
	}
	Xw.propTypes = { scope: Qw.default.string.isRequired, score: Ag.isRequired }
	var $l = Xw
	var A0 = Q(y2()),
		a8 = Q(S1()),
		i8 = Q(W1())
	var Jw = ({ scope: e, onClickHundred: r, onClickFifty: t, onClickTwenty: n, onClickOne: i, debug: c = !1 }) => {
		let { getPoint: C } = F1(e)
		return A0.default.createElement(
			i8.Group,
			null,
			A0.default.createElement(i8.Line, {
				points: [
					...Object.values(C(10, 2)),
					...Object.values(C(90, 2)),
					...Object.values(C(90, 18)),
					...Object.values(C(10, 18)),
				],
				fill: c ? 'rgba(93,121,255,.2)' : 'transparent',
				onClick: n,
				onTouchstart: n,
				closed: !0,
			}),
			A0.default.createElement(i8.Line, {
				points: [
					...Object.values(C(10, 20)),
					...Object.values(C(70, 80)),
					...Object.values(C(90, 80)),
					...Object.values(C(30, 20)),
				],
				closed: !0,
				onClick: t,
				onTouchstart: t,
				fill: c ? 'rgba(93,121,255,.2)' : 'transparent',
			}),
			A0.default.createElement(i8.Line, {
				points: [
					...Object.values(C(10, 82)),
					...Object.values(C(90, 82)),
					...Object.values(C(90, 98)),
					...Object.values(C(10, 98)),
				],
				closed: !0,
				onClick: r,
				onTouchstart: r,
				fill: c ? 'rgba(93,121,255,.2)' : 'transparent',
			}),
			A0.default.createElement(i8.Line, {
				points: [
					...Object.values(C(80, 30)),
					...Object.values(C(80, 65)),
					...Object.values(C(95, 65)),
					...Object.values(C(95, 30)),
				],
				closed: !0,
				onClick: i,
				onTouchstart: i,
				fill: c ? 'rgba(93,121,255,.2)' : 'transparent',
			}),
		)
	}
	Jw.propTypes = {
		scope: a8.default.string.isRequired,
		onClickHundred: a8.default.func.isRequired,
		onClickFifty: a8.default.func.isRequired,
		onClickTwenty: a8.default.func.isRequired,
		onClickOne: a8.default.func.isRequired,
		debug: a8.default.bool,
	}
	var ef = Jw
	var O0 = Q(y2()),
		N72 = Q(S1()),
		$e = Q(m6())
	var oN = Q(W1())
	var cN = Q(sf())
	var { undo: QZ, redo: XZ } = cN.ActionCreators,
		JZ = () => {
			let e = (0, $e.useSelector)((C) => zw(C) > 0),
				r = (0, $e.useSelector)((C) => Hw(C) > 0),
				{ getPoint: t, iconScale: n, rotationDeg: i } = F1(q3),
				c = (0, $e.useDispatch)()
			return O0.default.createElement(
				oN.Group,
				null,
				O0.default.createElement(A4, {
					iconPath: Fw.icon[4],
					bottomLeft: t(1, 39),
					topRight: t(8, 46),
					iconPosition: t(2, 40),
					iconScale: n,
					onStrike: () => c(QZ()),
					disabled: !e,
					rotation: i,
				}),
				O0.default.createElement(A4, {
					iconPath: Iw.icon[4],
					bottomLeft: t(1, 47),
					topRight: t(8, 54),
					iconPosition: t(2, 48),
					iconScale: n,
					onStrike: () => c(XZ()),
					disabled: !r,
					rotation: i,
				}),
				O0.default.createElement(A4, {
					iconPath: pa.icon[4],
					bottomLeft: t(1, 55),
					topRight: t(8, 62),
					iconPosition: t(2, 56),
					iconScale: n,
					onStrike: () => c(Nw()),
					rotation: i,
				}),
				O0.default.createElement(A4, {
					iconPath: ha.icon[4],
					bottomLeft: t(88, 48),
					topRight: t(97, 52),
					iconPosition: t(89.5, 48.5),
					iconScale: n,
					onStrike: () => c(sa()),
					rotation: i,
				}),
			)
		},
		CN = JZ
	var za = Q(y2()),
		Ha = Q(S1())
	var D0 = Q(W1())
	var ZZ = (e, r, t) => {
			let n = window.prompt('Spielername:', r)
			t(e, n.substring(0, 30))
		},
		sN = ({ scope: e, name: r, setPlayerName: t }) => {
			let { getPoint: n, rotation: i } = F1(e)
			return za.default.createElement(
				D0.Group,
				null,
				za.default.createElement(D0.Line, {
					points: [
						...Object.values(n(12, 76)),
						...Object.values(n(12, 82)),
						...Object.values(n(40, 82)),
						...Object.values(n(40, 76)),
					],
					closed: !0,
					...t8(() => ZZ(e, r, t)),
				}),
				za.default.createElement(D0.Shape, {
					...n(12, 77),
					sceneFunc: (c) => {
						c.rotate(i), (c.font = `3vmin ${S6}`), (c.fillStyle = '#ffffff'), c.fillText(r, 0, 0)
					},
				}),
			)
		}
	sN.propTypes = {
		scope: Ha.default.string.isRequired,
		name: Ha.default.string.isRequired,
		setPlayerName: Ha.default.func.isRequired,
	}
	var lf = sN
	var lN = Q(y2()),
		fN = Q(S1()),
		uN = Q(W1())
	var hN = ({ scope: e }) => {
		let { getPoint: r } = F1(e)
		return lN.default.createElement(uN.Line, {
			hitStrokeWidth: 0,
			points: [
				...Object.values(r(90, 10)),
				...Object.values(r(10, 10)),
				...Object.values(r(90, 90)),
				...Object.values(r(10, 90)),
			],
			stroke: Aw,
			strokeWidth: 6,
		})
	}
	hN.propTypes = { scope: fN.default.string.isRequired }
	var ff = hN
	var $Z = () => {
			let e = (0, b0.useDispatch)(),
				r = (0, b0.useSelector)(ra),
				t = (0, b0.useSelector)(Sw),
				n = (0, b0.useSelector)(xw)
			return d3.default.createElement(
				Va.Layer,
				null,
				d3.default.createElement(la, { key: 'blackboard' }),
				d3.default.createElement(ff, { key: 'z-p1', scope: _4 }),
				d3.default.createElement(ff, { key: 'z-p2', scope: k4 }),
				d3.default.createElement($l, { key: 'score-p1', scope: _4, score: r[D1] }),
				d3.default.createElement($l, { key: 'score-p2', scope: k4, score: r[b1] }),
				d3.default.createElement(lf, {
					key: 'playername-p1',
					scope: _4,
					name: n[D1],
					setPlayerName: (i, c) => e(Gl(i, c)),
				}),
				d3.default.createElement(lf, {
					key: 'playername-p2',
					scope: k4,
					name: n[b1],
					setPlayerName: (i, c) => e(Gl(i, c)),
				}),
				t
					? null
					: d3.default.createElement(
							Va.Group,
							null,
							d3.default.createElement(ef, {
								key: 'ts-p1',
								scope: _4,
								onClickHundred: () => e(Il(D1, 1)),
								onClickFifty: () => e(Bl(D1, 1)),
								onClickTwenty: () => e(ql(D1, 1)),
								onClickOne: () => e(Ul(D1)),
							}),
							d3.default.createElement(ef, {
								key: 'ts-p2',
								scope: k4,
								onClickHundred: () => e(Il(b1, 1)),
								onClickFifty: () => e(Bl(b1, 1)),
								onClickTwenty: () => e(ql(b1, 1)),
								onClickOne: () => e(Ul(b1)),
							}),
							d3.default.createElement(CN, { key: 'ts-g' }),
					  ),
				t === D1
					? d3.default.createElement(Zl, {
							key: 'kb-p1',
							scope: _4,
							onConfirm: ({ me: i, you: c }) => {
								let C = Date.now()
								e(Qe(D1, i, C)), c > 0 && e(Qe(b1, c, C))
							},
							closeKeyboard: () => e(jl()),
					  })
					: null,
				t === b1
					? d3.default.createElement(Zl, {
							key: 'kb-p2',
							scope: k4,
							onConfirm: ({ me: i, you: c }) => {
								let C = Date.now()
								e(Qe(b1, i, C)), c > 0 && e(Qe(D1, c, C))
							},
							closeKeyboard: () => e(jl()),
					  })
					: null,
			)
		},
		pN = $Z
	var LN = ({ store: e }) => {
		let { width: r, height: t } = c5()
		return e9.default.createElement(
			mN.Stage,
			{ width: r, height: t, left: 0, top: 0 },
			e9.default.createElement(
				vN.Provider,
				{ store: e },
				e9.default.createElement(mn, null, e9.default.createElement(pN, null)),
			),
		)
	}
	LN.propTypes = { store: dN.default.object.isRequired }
	var gN = LN
	var r9 = Q(y2()),
		FN = Q(S1()),
		IN = Q(m6()),
		BN = Q(W1())
	var F0 = Q(y2()),
		ON = Q(W1())
	var ya = Q(y2()),
		zN = Q(m6()),
		Le2 = Q(S1())
	var HN = Q(W1())
	var uf = (e) => ({ type: ca, line: e }),
		MN = () => ({ type: Ca })
	var e$ = () => {
			let e = (0, zN.useDispatch)(),
				{ getPoint: r, iconScale: t, rotationDeg: n } = F1(q3)
			return ya.default.createElement(
				HN.Group,
				null,
				ya.default.createElement(A4, {
					iconPath: ha.icon[4],
					bottomLeft: r(88, 48),
					topRight: r(97, 52),
					iconPosition: r(89.5, 48.5),
					iconScale: t,
					onStrike: () => e(sa()),
					rotation: n,
				}),
				ya.default.createElement(A4, {
					iconPath: pa.icon[4],
					bottomLeft: r(1, 47),
					topRight: r(8, 54),
					iconPosition: r(2, 48),
					iconScale: t,
					onStrike: () => e(MN()),
					rotation: n,
				}),
			)
		},
		VN = e$
	var u5 = Q(y2()),
		Pe2 = Q(S1()),
		Sa = Q(m6())
	var EN = Q(kN())
	var hf = Q(Jn()),
		PN = Q(ea()),
		d$ = (0, hf.default)({}, 'backside'),
		AN = (0, PN.createSelector)(d$, (0, hf.default)([], 'lines'))
	var h5 = Q(W1())
	var v$ = () => {
			let e = (0, Sa.useSelector)((m) => AN(m)),
				r = (0, Sa.useDispatch)(),
				[{ drawing: t, points: n }, i] = (0, u5.useState)({ drawing: !1, points: [] }),
				c = (m, H) => {
					t && r(uf(n)), i({ drawing: !0, points: [H(m.clientX, m.clientY)] })
				},
				C = (m, H) => i({ drawing: t, points: t ? [...n, H(m.clientX, m.clientY)] : n }),
				l = () => {
					t && r(uf(n)), i({ drawing: !1, points: [] })
				},
				{ getPoint: u, iconScale: h, getPointReverse: v, rotationDeg: g } = F1(q3)
			return u5.default.createElement(
				h5.Group,
				null,
				u5.default.createElement(h5.Path, {
					...u(45, 45),
					fill: '#666',
					data: qw.icon[4],
					scale: { x: h.x * 3, y: h.y * 3 },
					rotation: g,
				}),
				e.map((m, H) =>
					u5.default.createElement(h5.Line, {
						key: H,
						points: m.reduce((L, x) => [...L, ...Object.values(u(x.x, x.y))], []),
						stroke: '#ffffff',
						strokeWidth: 6,
					}),
				),
				!(0, EN.default)(n) &&
					u5.default.createElement(h5.Line, {
						points: n.reduce((m, H) => [...m, ...Object.values(u(H.x, H.y))], []),
						stroke: '#ffffff',
						strokeWidth: 6,
					}),
				u5.default.createElement(h5.Line, {
					points: [
						...Object.values(u(0, 0)),
						...Object.values(u(0, 100)),
						...Object.values(u(100, 100)),
						...Object.values(u(100, 0)),
					],
					closed: !0,
					onMouseDown: (m) => c(m.evt, v),
					onTouchstart: (m) => c(m.evt.touches[0], v),
					onMousemove: (m) => C(m.evt, v),
					onTouchmove: (m) => C(m.evt.touches[0], v),
					onMouseout: () => l(),
					onMouseup: () => l(),
					onTouchend: () => l(),
				}),
			)
		},
		TN = v$
	var pf = Q(y2()),
		xa = Q(W1())
	var m$ = () => {
			let { getPoint: e, rotation: r } = F1(q3)
			return pf.default.createElement(
				xa.Group,
				null,
				pf.default.createElement(xa.Shape, {
					...e(98, 98),
					sceneFunc: (t) => {
						t.rotate(r),
							(t.textAlign = 'right'),
							(t.font = `1.5vmin ${S6}`),
							(t.fillStyle = '#ffffff'),
							t.fillText('Version 2.3.0', 0, 0)
					},
				}),
			)
		},
		RN = m$
	var DN = () =>
		F0.default.createElement(
			ON.Layer,
			null,
			F0.default.createElement(la, { key: 'blackboard' }),
			F0.default.createElement(TN, { key: 'lines' }),
			F0.default.createElement(VN, { key: 'ts-g' }),
			F0.default.createElement(RN, { key: 'version' }),
		)
	DN.propTypes = {}
	var bN = DN
	var qN = ({ store: e }) => {
		let { width: r, height: t } = c5()
		return r9.default.createElement(
			BN.Stage,
			{ width: r, height: t, left: 0, top: 0 },
			r9.default.createElement(
				IN.Provider,
				{ store: e },
				r9.default.createElement(mn, null, r9.default.createElement(bN, null)),
			),
		)
	}
	qN.propTypes = { store: FN.default.object.isRequired }
	var UN = qN
	var n9 = Q(y2()),
		G0 = Q(S1())
	var j0 = Q(V_()),
		y_ = j0.default.div`
	backface-visibility: hidden;

	position: absolute;
	top: 0;
	left: 0;
`,
		S_ = j0.default.div`
	transition: 0.6s;
	transform-style: preserve-3d;
	position: relative;
	transform: ${({ flipped: e }) => (e ? 'rotateY(180deg)' : 'none')};
`,
		Af = (0, j0.default)(y_)`
	z-index: 2;
`,
		Ef = (0, j0.default)(y_)`
	transform: rotateY(180deg);
`,
		x_ = j0.default.div`
	perspective: 1000px;

	${Af}, ${Ef} {
		width: ${({ width: e }) => e};
		height: ${({ height: e }) => e};
	}
`
	var w_ = ({ width: e, height: r, flipped: t, renderFrontside: n, renderBackside: i }) =>
		n9.default.createElement(
			x_,
			{ width: e, height: r },
			n9.default.createElement(
				S_,
				{ flipped: t },
				n9.default.createElement(Af, null, n()),
				n9.default.createElement(Ef, null, i()),
			),
		)
	w_.propTypes = {
		width: G0.default.string.isRequired,
		height: G0.default.string.isRequired,
		flipped: G0.default.bool.isRequired,
		renderFrontside: G0.default.func.isRequired,
		renderBackside: G0.default.func.isRequired,
	}
	var N_ = w_
	var P_ = ({ store: e }) => {
		let r = (0, k_.useSelector)(ww)
		return Oa.default.createElement(N_, {
			width: '100vw',
			height: '100vh',
			flipped: r,
			renderFrontside: () => Oa.default.createElement(gN, { store: e }),
			renderBackside: () => Oa.default.createElement(UN, { store: e }),
		})
	}
	P_.propTypes = { store: __.default.object.isRequired }
	var A_ = P_
	var F_ = Q(Cs()),
		Da = Q(sf()),
		I_ = Q(Ol())
	var E_ = { thousand: 0, fivehundred: 0, hundred: 0, fifty: 0, twenty: 0, one: 0 },
		a9 = (e = E_, r) => {
			switch (r.type) {
				case S0:
					return Xe({ ...e, hundred: e.hundred + r.qty })
				case x0:
					return Xe({ ...e, fifty: e.fifty + r.qty })
				case w0:
					return Xe({ ...e, twenty: e.twenty + r.qty })
				case N0:
					return Xe(Pw(e, r.points))
				case _0:
					return E_
				default:
					return e
			}
		}
	var T_ = a9(void 0, {}),
		C22 = { [D1]: T_, [b1]: T_ },
		R_ = (e = C22, r) =>
			r.player
				? r.player === Zn
					? { [D1]: a9(e[D1], r), [b1]: a9(e[b1], r) }
					: { ...e, [r.player]: a9(e[r.player], r) }
				: e
	var s22 = { keyboardOpenFor: null, isBoardFlipped: !1, playerNames: { [D1]: 'Team Green', [b1]: 'Team Blue' } },
		O_ = (e = s22, r) => {
			switch (r.type) {
				case aa:
					return { ...e, keyboardOpenFor: r.player }
				case ia:
					return { ...e, keyboardOpenFor: null }
				case na:
					return { ...e, playerNames: { ...e.playerNames, [r.player]: r.name } }
				case oa:
					return { ...e, isBoardFlipped: !e.isBoardFlipped }
				default:
					return e
			}
		}
	var D_ = { lines: [] },
		b_ = (e = D_, r) => {
			switch (r.type) {
				case ca:
					return { lines: [...e.lines, r.line] }
				case Ca:
					return D_
				default:
					return e
			}
		}
	var l22 = {
			limit: 200,
			groupBy: (0, I_.default)('timestamp'),
			filter: (0, Da.includeAction)([S0, x0, w0, N0, _0]),
			debug: !0,
		},
		B_ = (0, F_.combineReducers)({ score: (0, Da.default)(R_, l22), ui: O_, backside: b_ })
	function f22() {
		'serviceWorker' in navigator &&
			navigator.serviceWorker
				.register('./sw.js')
				.catch(() => alert('ServiceWorker registration failed. Sorry about that.'))
	}
	window.addEventListener('load', () => {
		f22()
	})
	var u22 = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Fa.compose,
		h22 = u22(),
		ba = (0, Fa.createStore)(B_, dL(), h22)
	ba.subscribe(() => {
		vL(ba.getState())
	})
	var j_ = document.getElementById('jasstafel'),
		p22 = (0, U_.createRoot)(j_)
	p22.render(Tf.default.createElement(q_.Provider, { store: ba }, Tf.default.createElement(A_, { store: ba })), j_)
})()
/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
