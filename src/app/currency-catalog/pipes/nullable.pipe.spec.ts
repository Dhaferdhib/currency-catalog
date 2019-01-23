import { NullablePipe } from './nullable.pipe';

describe('NullablePipe', () => {
  it('create an instance', () => {
    const pipe = new NullablePipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(null)).toBe('-');
    expect(pipe.transform('abs')).toBe('abs');
  });


  it('test null and passed value', () => {
    const pipe = new NullablePipe();
    expect(pipe.transform(null)).toBe('-');
    expect(pipe.transform('abs')).toBe('abs');
  });
});
