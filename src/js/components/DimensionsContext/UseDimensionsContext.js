import { useContext } from 'react'

import { DimensionsContext } from './context'

export default (scope) => {
	const dimensions = useContext(DimensionsContext)
	return dimensions[scope]
}
