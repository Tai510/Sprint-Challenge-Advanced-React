import React from 'react';
import { render } from '@testing-library/react';
import WomenWorldCup from './WomenWorldCup';

test('renders without crashing', () => {
    render(<WomenWorldCup  />)
});

test('Found It!!!', () => {
    const { getByText } = render(<WomenWorldCup />);
})