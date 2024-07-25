import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from '../../src/components/ProductList';
describe('Product', () => {

    test('should render product name and price', () => {
        render(<ProductList />)
        expect(screen.getByText('Lista de produtos')).toBeInTheDocument();
    })
    test('shoud render product list', () => {
        render(<ProductList />)
        expect(screen.getByText('Produto 1')).toBeInTheDocument();
        expect(screen.getByText('Produto 2')).toBeInTheDocument();
        expect(screen.getByText('Produto 3')).toBeInTheDocument();
    })
});