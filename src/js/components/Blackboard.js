import React, { useEffect, useState } from 'react'

import { Layer, Image } from 'react-konva/lib/ReactKonvaCore'
import 'konva/lib/shapes/Image'

import useWindowSizes from '../hooks/UseWindowSizes'

export const getSchiefer = () => {
	if (window.schieferImage) {
		return window.schieferImage
	}
	window.schieferImage = new Promise((resolve) => {
		const image = window.schieferImage || new window.Image()
		image.src = 'assets/schiefer.jpg'
		image.onload = () => {
			// setState will redraw layer
			// because "image" property is changed
			resolve(image)
		}
	})
	return window.schieferImage
}

const Blackboard = () => {
	const { width, height } = useWindowSizes()
	const [schiefer, setSchiefer] = useState(null)

	useEffect(() => {
		getSchiefer().then((image) => {
			image.width = width
			image.height = height
			setSchiefer(image)
		})
	})

	return schiefer && <Image hitStrokeWidth={0} image={schiefer} />
}

export default Blackboard
