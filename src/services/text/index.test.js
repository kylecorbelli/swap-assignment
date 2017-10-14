import {
  prettyCurrency,
  snakeCaseToWords,
} from './index'

describe('text service', () => {
  describe('snakeCaseToWords', () => {
    it('returns an empty string if given an empty string', () => {
      const result = snakeCaseToWords('')
      expect(result).toBe('')
    })

    it('converts snake-case strings to capital case words', () => {
      const result = snakeCaseToWords('living_room')
      expect(result).toBe('Living Room')
    })
  })

  describe('prettyCurrency', () => {
    it('adds cents to integer amounts', () => {
      const result = prettyCurrency(4)
      expect(result).toBe('$4.00')
    })

    it('adds a thousands comma separator', () => {
      const result = prettyCurrency(2000)
      expect(result).toBe('$2,000.00')
    })
  })
})
