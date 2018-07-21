const numberToScore = number => {
	const thousand = Math.floor(number / 1000)
	const thousandRemainder = number % 1000
	const fivehundred = Math.floor(thousandRemainder / 500)
	const fivehundredRemainder = thousandRemainder % 500
	const hundred = Math.floor(fivehundredRemainder / 100)
	const hundredRemainder = fivehundredRemainder % 100
	const fifty = Math.floor(hundredRemainder / 50)
	const fiftyRemainder = hundredRemainder % 50
	const twenty = Math.floor(fiftyRemainder / 20)
	const one = fiftyRemainder % 20
	return {
		thousand,
		fivehundred,
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
	const hundredTmp = score.hundred + Math.floor((score.fifty - fifty) / 2) + Math.floor((twentyTmp - twenty) / 5)
	const hundred = hundredTmp > 35 ? 25 + (hundredTmp % 5) : hundredTmp
	const fivehundred = score.fivehundred > 2 ? 0 + (score.fivehundred % 2) : score.fivehundred
	const thousand =
		score.thousand + Math.floor((score.fivehundred - fivehundred) / 2) + Math.floor((hundredTmp - hundred) / 10)
	return {
		thousand,
		fivehundred,
		hundred,
		fifty,
		twenty,
		one,
	}
}

export const getNumericScore = score =>
	1000 * score.thousand +
	500 * score.fivehundred +
	100 * score.hundred +
	50 * score.fifty +
	20 * score.twenty +
	score.one

export const addPointsToScore = (score, pointsToAdd) => {
	const scoreToAdd = numberToScore(pointsToAdd)
	return {
		thousand: score.thousand + scoreToAdd.thousand,
		fivehundred: score.fivehundred + scoreToAdd.fivehundred,
		hundred: score.hundred + scoreToAdd.hundred,
		fifty: score.fifty + scoreToAdd.fifty,
		twenty: score.twenty + scoreToAdd.twenty,
		one: score.one + scoreToAdd.one,
	}
}

export const keyboardToPoints = (points, factor, complementOn) => {
	return { me: factor * points, you: factor * (complementOn && points < 157 ? 157 - points : 0) }
}
