import { hexToRgba } from './'

test('#FFF and 0.3 alpha should return rgba(255, 255, 255, .3)', () => {
  expect(hexToRgba('#FFF','.3')).toBe('rgba(255, 255, 255, .3)')
})

test('#FFFFFF and 1 alpha should return rgba(255, 255, 255, 1)', () => {
    expect(hexToRgba('#FFFFFF', 1)).toBe('rgba(255, 255, 255, 1)')
})

test('FFF and 0.5 alpha should return rgba(255, 255, 255, 0.5)', () => {
    expect(hexToRgba('FFF','0.5')).toBe('rgba(255, 255, 255, 0.5)')
})

test('FFFFFF and 1 alpha should return rgba(255, 255, 255, 1)', () => {
    expect(hexToRgba('FFFFFF', 1)).toBe('rgba(255, 255, 255, 1)')
})

test('FFFFF and 1 alpha should throw error', () => {
    expect(() => { hexToRgba('FFFFF', 1) }).toThrowError(new Error('hex is invalid'))
})

test('#d0d4c7 and .8 alpha should return rgba(208, 212, 199, .8)', () => {
    expect(hexToRgba('#d0d4c7', '.8')).toBe('rgba(208, 212, 199, .8)')
})