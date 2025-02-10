import Selections from '.';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react';

const mockItems = [
  { label: 'Item 1', key: 'key1', value: 'value1' },
  { label: 'Item 2', key: 'key2', value: 'value2' },
];
describe('Selections', () => {
  const mockOnChange = jest.fn();
  it('should render correctly without error and have required components', () => {
    // #region ARRANGE
    const screen = render(
      <Selections data-testid="selection" items={mockItems} value={mockItems[0].value} onChange={mockOnChange} />,
    );
    // #endregion

    // #region ASSERT
    expect(screen).toMatchSnapshot();
    // #endregion
  });

  it('should call onChange with correct value when tab is clicked', () => {
    // #region ARRANGE
    const screen = render(
      <Selections data-testid="selection" items={mockItems} value={null} onChange={mockOnChange} />,
    );
    const firstTab = screen.getByTestId(`selection:tab:${mockItems[0].key}:container`);
    // #endregion

    // #region ACT
    act(() => {
      fireEvent.click(firstTab);
    });
    // #endregion

    // #region ASSERT
    expect(mockOnChange).toHaveBeenCalledWith(mockItems[0].value);
    // #endregion
  });

  it('should call onChange with correct value when chip is clicked', () => {
    // #region ARRANGE
    const screen = render(
      <Selections data-testid="selection" items={mockItems} value={null} onChange={mockOnChange} />,
    );
    const secondChip = screen.getByTestId(`selection:chip:${mockItems[1].key}:container`);
    // #endregion

    // #region ACT
    act(() => {
      fireEvent.click(secondChip);
    });
    //#endregion

    // #region ASSERT
    expect(mockOnChange).toHaveBeenCalledWith('value2');
    // #endregion
  });
});
