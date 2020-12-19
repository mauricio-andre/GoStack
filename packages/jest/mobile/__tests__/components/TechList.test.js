import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import TechList from '~/components/TechList';

/**
 * Mock necessário por issues
 *  #27721 facebook/react-native
 *  #113 testing-library/native-testing-library
 */
jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity',
  () => 'TouchableOpacity'
);

describe('TechList', () => {
  it('should be able to add new tech', () => {
    expect(1).toBe(1);
    const { getByText, getByTestId } = render(<TechList />);

    fireEvent.changeText(getByTestId('tech-input'), 'Node.js');
    fireEvent.press(getByText('Adicionar'));

    expect(getByText('Node.js')).toBeTruthy();
    // Método adequado, pode apresentar erro por conta do TouchableOpacity
    // expect(getByTestId('tech-input')).toHaveProp('value', '');
    expect(getByTestId('tech-input').props.value).toBe('');
  });
});
