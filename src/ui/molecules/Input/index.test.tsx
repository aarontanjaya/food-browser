import Input from '.';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react';

describe('Input', () => {
  it('should render correctly without error and have required components', () => {
    // #region ARRANGE
    const screen = render(<Input data-testid="input" />);
    // #endregion

    // #region ASSERT
    expect(screen).toMatchSnapshot();
    expect(() => screen.getByTestId('input:container')).not.toThrow();
    expect(() => screen.getByTestId('input:input')).not.toThrow();
    // #endregion
  });

  it('should render leftElement if provided', () => {
    // #region ARRANGE
    const screen = render(<Input LeftElement={<div data-testid="left-element" />} data-testid="input" />);
    // #endregion

    // #region ASSERT
    expect(screen).toMatchSnapshot();
    expect(() => screen.getByTestId('left-element')).not.toThrow();
    // #endregion
  });

  it('should call onChange when input value changes', () => {
    // #region ARRANGE
    const mockOnChange = jest.fn();
    const screen = render(<Input data-testid="input" onChange={mockOnChange} />);
    const input = screen.getByTestId('input:input');
    // #endregion

    // #region ACT
    act(() => {
      fireEvent.change(input, { target: { value: 'new value' } });
    });

    // #endregion

    // #region ASSERT
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({ target: expect.objectContaining({ value: 'new value' }) }),
    );
    // #endregion
  });
});
