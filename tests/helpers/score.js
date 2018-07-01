import chai from 'chai'
import chaiMatchPattern from 'chai-match-pattern'
import { sanitizeScore, getNumericScore, addPointsToScore } from '../../src/js/helpers/score'

chai.use(chaiMatchPattern)

const expect = chai.expect

describe('score helper', () => {
	it('turns score to a number of points', () => {
		const score = {
			hundred: 5,
			fifty: 12,
			twenty: 14,
			one: 18,
		}
		const numericScore = getNumericScore(score)

		expect(numericScore).to.equal(1398)
	})

	it('sanitizes a score object with too many twenties correctly', () => {
		const scoreBeforeSanitizing = {
			hundred: 0,
			fifty: 0,
			twenty: 41,
			one: 0,
		}
		const scoreAfterSanitizing = sanitizeScore(scoreBeforeSanitizing)

		expect(getNumericScore(scoreBeforeSanitizing)).equals(getNumericScore(scoreAfterSanitizing))

		expect(scoreAfterSanitizing).to.matchPattern({
			hundred: 4,
			fifty: 0,
			twenty: 21,
			one: 0,
		})
	})

	it('sanitizes a score object with too many fifties correctly', () => {
		const scoreBeforeSanitizing = {
			hundred: 0,
			fifty: 11,
			twenty: 0,
			one: 0,
		}
		const scoreAfterSanitizing = sanitizeScore(scoreBeforeSanitizing)

		expect(getNumericScore(scoreBeforeSanitizing)).equals(getNumericScore(scoreAfterSanitizing))

		expect(scoreAfterSanitizing).to.matchPattern({
			hundred: 3,
			fifty: 5,
			twenty: 0,
			one: 0,
		})
	})

	it('sanitizes a score object with too many ones correctly', () => {
		const scoreBeforeSanitizing = {
			hundred: 0,
			fifty: 0,
			twenty: 0,
			one: 55,
		}
		const scoreAfterSanitizing = sanitizeScore(scoreBeforeSanitizing)

		expect(getNumericScore(scoreBeforeSanitizing)).equals(getNumericScore(scoreAfterSanitizing))

		expect(scoreAfterSanitizing).to.matchPattern({
			hundred: 0,
			fifty: 0,
			twenty: 2,
			one: 15,
		})
	})

	it('sanitizes a score object with too many ones that lead to too many twenties correctly', () => {
		const scoreBeforeSanitizing = {
			hundred: 0,
			fifty: 0,
			twenty: 40,
			one: 23,
		}
		const scoreAfterSanitizing = sanitizeScore(scoreBeforeSanitizing)

		expect(getNumericScore(scoreBeforeSanitizing)).equals(getNumericScore(scoreAfterSanitizing))

		expect(scoreAfterSanitizing).to.matchPattern({
			hundred: 4,
			fifty: 0,
			twenty: 21,
			one: 3,
		})
	})

	it('sanitizes a score object with too many ones => twenties and fifties correctly', () => {
		const scoreBeforeSanitizing = {
			hundred: 0,
			fifty: 11,
			twenty: 41,
			one: 33,
		}
		const scoreAfterSanitizing = sanitizeScore(scoreBeforeSanitizing)

		expect(getNumericScore(scoreBeforeSanitizing)).equals(getNumericScore(scoreAfterSanitizing))

		expect(scoreAfterSanitizing).to.matchPattern({
			hundred: 7,
			fifty: 5,
			twenty: 22,
			one: 13,
		})
	})

	it('adds a given number of points to a score', () => {
		const scoreBeforeAddingPoints = {
			hundred: 0,
			fifty: 11,
			twenty: 1,
			one: 4,
		}
		const pointsToAdd = 189

		const scoreAfterAddingPoints = addPointsToScore(scoreBeforeAddingPoints, pointsToAdd)

		expect(scoreAfterAddingPoints).to.matchPattern({
			hundred: 1,
			fifty: 12,
			twenty: 2,
			one: 23,
		})
	})
})
