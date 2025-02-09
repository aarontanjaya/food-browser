import Chip from '.';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react';

describe('Chip', () => {
  const mockOnClick = jest.fn();

  it('should render correctly without error', () => {
    //#region ARRANGE
    const screen = render(
      <>
        <Chip data-testid="chip" />
        <Chip data-testid="chip" isActive />
      </>,
    );
    // #endregion

    //#region ASSERT
    expect(screen).toMatchSnapshot();
    // #endregion
  });

  it('should call onClick when clicked', async () => {
    // #region ARRANGE
    const screen = render(<Chip data-testid="chip" onClick={mockOnClick} />);

    const btn = await screen.findByTestId('chip:container');
    // #endregion

    // #region ACT
    act(() => {
      fireEvent.click(btn);
    });
    // #endregion

    // #region ASSERT
    expect(mockOnClick).toHaveBeenCalled();
    // #endregion
  });
});
