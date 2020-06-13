import React from 'react';
import { render, fireEvent, debug } from '@testing-library/react-native';

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
    const { getByText, getByTestId } = render(<TechList />);

    fireEvent.changeText(getByTestId('tech-input'), 'Node.js');
    fireEvent.press(getByText('Adicionar'));

    expect(getByText('Node.js')).toBeTruthy();
    expect(getByTestId('tech-input')).toHaveProp('value', '');
  });
});
