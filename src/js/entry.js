/* eslint-env browser */
import React from 'react'
import { render } from 'react-dom'
import '../sass/global.sass'

import Jasstafel from './components/Jasstafel'

const appRootElement = document.getElementById('jasstafel')
render(<Jasstafel />, appRootElement)
