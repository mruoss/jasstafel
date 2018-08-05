import React from 'react'

import Blackboard from '../Blackboard'
import GlobalTouchScreen from './TouchScreen/GlobalTouchScreen'
import Lines from './Lines'

const Layers = () => [<Blackboard key="blackboard" />, <Lines key="lines" />, <GlobalTouchScreen key="ts-g" />]

Layers.propTypes = {}

export default Layers
