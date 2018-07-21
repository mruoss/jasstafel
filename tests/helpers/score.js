import chai from 'chai'
import chaiMatchPattern from 'chai-match-pattern'
import { sanitizeScore, getNumericScore, addPointsToScore, keyboardToPoints } from '../../src/js/helpers/score'

chai.use(chaiMatchPattern)

const expect = chai.expect

describe('score helper', () => {
	it('turns score to a number of points', () => {
		const score = {
			thousand: 1,
			fivehundred: 1,
			hundred: 5,
			fifty: 12,
			twenty: 14,
			one: 18,
		}
		const numericScore = getNumericScore(score)

		expect(numericScore).to.equal(2898)
	})

	it('sanitizes a score object with too many fivehundreds correctly', () => {
		const scoreBeforeSanitizing = {
			thousand: 0,
			fivehundred: 3,
			hundred: 0,
			fifty: 0,
			twenty: 0,
			one: 0,
		}
		const scoreAfterSanitizing = sanitizeScore(scoreBeforeSanitizing)

		expect(getNumericScore(scoreBeforeSanitizing)).equals(getNumericScore(scoreAfterSanitizing))

		expect(scoreAfterSanitizing).to.matchPattern({
			thousand: 1,
			fivehundred: 1,
			hundred: 0,
			fifty: 0,
			twenty: 0,
			one: 0,
		})
	})

	it('sanitizes a score object with too many hundreds correctly', () => {
		const scoreBeforeSanitizing = {
			thousand: 0,
			fivehundred: 0,
			hundred: 36,
			fifty: 0,
			twenty: 0,
			one: 0,
		}
		const scoreAfterSanitizing = sanitizeScore(scoreBeforeSanitizing)

		expect(getNumericScore(scoreBeforeSanitizing)).equals(getNumericScore(scoreAfterSanitizing))

		expect(scoreAfterSanitizing).to.matchPattern({
			thousand: 1,
			fivehundred: 0,
			hundred: 26,
			fifty: 0,
			twenty: 0,
			one: 0,
		})
	})

	it('sanitizes a score object with too many fifties correctly', () => {
		const scoreBeforeSanitizing = {
			thousand: 0,
			fivehundred: 0,
			hundred: 0,
			fifty: 21,
			twenty: 0,
			one: 0,
		}
		const scoreAfterSanitizing = sanitizeScore(scoreBeforeSanitizing)

		expect(getNumericScore(scoreBeforeSanitizing)).equals(getNumericScore(scoreAfterSanitizing))

		expect(scoreAfterSanitizing).to.matchPattern({
			thousand: 0,
			fivehundred: 0,
			hundred: 6,
			fifty: 9,
			twenty: 0,
			one: 0,
		})
	})

	it('sanitizes a score object with too many twenties correctly', () => {
		const scoreBeforeSanitizing = {
			thousand: 0,
			fivehundred: 0,
			hundred: 0,
			fifty: 0,
			twenty: 41,
			one: 0,
		}
		const scoreAfterSanitizing = sanitizeScore(scoreBeforeSanitizing)

		expect(getNumericScore(scoreBeforeSanitizing)).equals(getNumericScore(scoreAfterSanitizing))

		expect(scoreAfterSanitizing).to.matchPattern({
			thousand: 0,
			fivehundred: 0,
			hundred: 4,
			fifty: 0,
			twenty: 21,
			one: 0,
		})
	})

	it('sanitizes a score object with too many ones correctly', () => {
		const scoreBeforeSanitizing = {
			thousand: 0,
			fivehundred: 0,
			hundred: 0,
			fifty: 0,
			twenty: 0,
			one: 55,
		}
		const scoreAfterSanitizing = sanitizeScore(scoreBeforeSanitizing)

		expect(getNumericScore(scoreBeforeSanitizing)).equals(getNumericScore(scoreAfterSanitizing))

		expect(scoreAfterSanitizing).to.matchPattern({
			thousand: 0,
			fivehundred: 0,
			hundred: 0,
			fifty: 0,
			twenty: 2,
			one: 15,
		})
	})

	it('sanitizes a score object with too many ones that lead to too many twenties correctly', () => {
		const scoreBeforeSanitizing = {
			thousand: 0,
			fivehundred: 0,
			hundred: 0,
			fifty: 0,
			twenty: 40,
			one: 23,
		}
		const scoreAfterSanitizing = sanitizeScore(scoreBeforeSanitizing)

		expect(getNumericScore(scoreBeforeSanitizing)).equals(getNumericScore(scoreAfterSanitizing))

		expect(scoreAfterSanitizing).to.matchPattern({
			thousand: 0,
			fivehundred: 0,
			hundred: 4,
			fifty: 0,
			twenty: 21,
			one: 3,
		})
	})

	it('sanitizes a score object with too many ones => twenties and fifties correctly', () => {
		const scoreBeforeSanitizing = {
			thousand: 0,
			fivehundred: 0,
			hundred: 0,
			fifty: 19,
			twenty: 41,
			one: 33,
		}
		const scoreAfterSanitizing = sanitizeScore(scoreBeforeSanitizing)

		expect(getNumericScore(scoreBeforeSanitizing)).equals(getNumericScore(scoreAfterSanitizing))

		expect(scoreAfterSanitizing).to.matchPattern({
			thousand: 0,
			fivehundred: 0,
			hundred: 9,
			fifty: 9,
			twenty: 22,
			one: 13,
		})
	})

	it('adds a given number of points to a score', () => {
		const scoreBeforeAddingPoints = {
			thousand: 0,
			fivehundred: 0,
			hundred: 0,
			fifty: 11,
			twenty: 1,
			one: 4,
		}
		const pointsToAdd = 1689

		const scoreAfterAddingPoints = addPointsToScore(scoreBeforeAddingPoints, pointsToAdd)

		expect(scoreAfterAddingPoints).to.matchPattern({
			thousand: 1,
			fivehundred: 1,
			hundred: 1,
			fifty: 12,
			twenty: 2,
			one: 23,
		})
	})

	it('turns keyboard input to points without completion', () => {
		expect(keyboardToPoints(40, 1, false)).to.matchPattern({
			me: 40,
			you: 0,
		})

		expect(keyboardToPoints(40, 2, false)).to.matchPattern({
			me: 80,
			you: 0,
		})

		expect(keyboardToPoints(40, 3, false)).to.matchPattern({
			me: 120,
			you: 0,
		})
	})

	it('turns keyboard input to points with completion', () => {
		expect(keyboardToPoints(57, 1, true)).to.matchPattern({
			me: 57,
			you: 100,
		})

		expect(keyboardToPoints(57, 2, true)).to.matchPattern({
			me: 114,
			you: 200,
		})

		expect(keyboardToPoints(57, 3, true)).to.matchPattern({
			me: 171,
			you: 300,
		})
	})
})
