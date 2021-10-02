import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import ThemeProvider from '../../hooks/ThemeProvider';

describe('App', () => {
    it('renders app and changes bg color', async () => {
        render(
            <ThemeProvider>
                <App />
            </ThemeProvider>
        );

        const colorBack = screen.getByTestId('themeDiv');
        const button = await screen.getByRole('button', { name: 'theme-toggle' });
        fireEvent.click(button);
        waitFor(() => {
            expect(colorBack).toHaveStyle({
                foreground: '#000000',
                background: '#494959'
            });
        });
    });
});