import Form from './Form.js';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('submit button', () => {
    it('should be enabled, when checkbox is not checked', async () => {
        const user = userEvent.setup();

        render(
            <Form title="hello" />
        );

        await user.click(screen.getByRole('checkbox', { name: /terms/i }));

        const submitButton = screen.getByRole('button', { name: /submit/i });
        expect(submitButton).toBeInTheDocument();
        expect(submitButton).not.toBeDisabled();
    });
})