import React from 'react'

import Blackboard from '../Blackboard'
import GlobalTouchScreen from './TouchScreen/GlobalTouchScreen'
import Lines from './Lines'
import Version from './Version'

const Layers = () => [
	<Blackboard key="blackboard" />,
	<Lines key="lines" />,
	<GlobalTouchScreen key="ts-g" />,
	<Version key="version" />,
]

Layers.propTypes = {}

export default Layers
