import React from 'react';
import { render } from '@testing-library/react';
import WomenWorldCup from './WomenWorldCup';

test('renders without crashing', () => {
    render(<WomenWorldCup />)
});

// test('Found Players listed for United States', () => {
//     const { findAllBy
//     } = render(<WomenWorldCup />)
//     findAllBy('United States');
// })

