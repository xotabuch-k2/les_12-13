import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Add from `../App.js`

describe( 'TEST NEWS', () => {
    test('News has title', () => {
      render(<Add />);
      const titleElement = screen.getByText(/news/i);
      expect(titleElement).toBeInTheDocument(); 
    });

    test('News has links', async () => {
        render(<MemoryRouter> <Add /></MemoryRouter>);
        const link = await screen.findAllByTestId('link');
        expect(link.length > 1);
    });
})
