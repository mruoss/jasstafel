const numberToScore = number => {
	const hundred = Math.floor(number / 100)
	const hundredRemainder = number % 100
	const fifty = Math.floor(hundredRemainder / 50)
	const fiftyRemainder = hundredRemainder % 50
	const twenty = Math.floor(fiftyRemainder / 20)
	const one = fiftyRemainder % 20
	return {
		hundred,
		fifty,
		twenty,
		one,
	}
}

export const sanitizeScore = score => {
	const one = score.one % 20
	const twentyTmp = score.twenty + Math.floor(score.one / 20)
	const twenty = twentyTmp > 40 ? 20 + (twentyTmp % 5) : twentyTmp
	const fifty = score.fifty > 18 ? 8 + (score.fifty % 2) : score.fifty
	const hundred = score.hundred + Math.floor((score.fifty - fifty) / 2) + Math.floor((twentyTmp - twenty) / 5)
	return {
		hundred,
		fifty,
		twenty,
		one,
	}
}

export const getNumericScore = score => 100 * score.hundred + 50 * score.fifty + 20 * score.twenty + score.one

export const addPointsToScore = (score, pointsToAdd) => {
	const scoreToAdd = numberToScore(pointsToAdd)
	return {
		hundred: score.hundred + scoreToAdd.hundred,
		fifty: score.fifty + scoreToAdd.fifty,
		twenty: score.twenty + scoreToAdd.twenty,
		one: score.one + scoreToAdd.one,
	}
}

export const keyboardToPoints = (points, factor, complementOn) => {
	return { me: factor * points, you: factor * (complementOn && points < 157 ? 157 - points : 0) }
}
