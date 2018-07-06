import { combineReducers } from 'redux'

import score from './score'
import ui from './ui'

export default combineReducers({ score, ui })
