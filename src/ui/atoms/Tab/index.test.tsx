import Tab from '.';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react';

describe('Tab', () => {
  const mockOnClick = jest.fn();

  it('should render correctly without error', () => {
    // #region ARRANGE
    const screen = render(<Tab data-testid="tab" />);
    // #endregioon

    //#region ASSERT
    expect(screen).toMatchSnapshot();
    // #endregion
  });

  it('should call onClick when clicked', async () => {
    // #region ARRANGE
    const screen = render(<Tab data-testid="tab" onClick={mockOnClick} />);

    const btn = await screen.findByTestId('tab:container');
    // #endregion

    // #region ACT
    act(() => {
      fireEvent.click(btn);
    });
    // #endregion

    // #region ASSERT
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    // #endregion
  });
});
