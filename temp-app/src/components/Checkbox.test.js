import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkbox from './Checkbox.js';

describe('checkbox', () => {
    it('should show correct value', () => {
        const dummyFunc = jest.fn();
        
        render(<Checkbox id="" label="" onChange={dummyFunc} checked={true} />);

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).toBeChecked();
    }); 
});