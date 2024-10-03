import { to24hourtime } from '../to-24-hourtime';

describe('to24hourtime', () => {
  it('Input =  1:00 am', () => {
    expect(to24hourtime(1, 0, 'am')).toBe('0100');
  });

  it('Input =  1:00 pm', () => {
    expect(to24hourtime(1, 0, 'pm')).toBe('1300');
  });

  it('Input = 12:00 am', () => {
    expect(to24hourtime(12, 0, 'am')).toBe('0000');
  });

  it('Input = 12:00 pm', () => {
    expect(to24hourtime(12, 0, 'pm')).toBe('1200');
  });

  it('Input =  6:30 am', () => {
    expect(to24hourtime(6, 30, 'am')).toBe('0630');
  });

  it('Input =  9:45 pm', () => {
    expect(to24hourtime(9, 45, 'pm')).toBe('2145');
  });
});
