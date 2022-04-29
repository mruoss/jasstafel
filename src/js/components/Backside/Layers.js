import React from 'react'

import { Layer } from 'react-konva'

import Blackboard from '../Blackboard'
import GlobalTouchScreen from './TouchScreen/GlobalTouchScreen'
import Lines from './Lines'
import Version from './Version'

const Layers = () => (
	<Layer>
		<Blackboard key="blackboard" />
		<Lines key="lines" />
		<GlobalTouchScreen key="ts-g" />
		<Version key="version" />
	</Layer>
)

Layers.propTypes = {}

export default Layers
