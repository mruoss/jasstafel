/* eslint-env browser */
import React from 'react'
import { render } from 'react-dom'
import '../sass/global.sass'

import Schiefertafel from './components/Schiefertafel'

const appRootElement = document.getElementById('jasstafel')
render(<Schiefertafel />, appRootElement)
