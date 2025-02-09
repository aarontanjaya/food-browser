import Button from '.';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react';

describe('Button', () => {
  const mockOnClick = jest.fn();

  it('should render correctly without error', () => {
    // #region ARRANGE
    const screen = render(<Button data-testid="button" />);
    // #endregioon

    //#region ASSERT
    expect(screen).toMatchSnapshot();
    // #endregion
  });

  it('should call onClick when clicked', async () => {
    // #region ARRANGE
    const screen = render(<Button data-testid="button" onClick={mockOnClick} />);

    const btn = await screen.findByTestId('button:container');
    // #endregion

    // #region ACT

    act(() => {
      fireEvent.click(btn);
    });

    //#region ASSERT
    expect(mockOnClick).toHaveBeenCalled();
    // #endregion
  });
});
