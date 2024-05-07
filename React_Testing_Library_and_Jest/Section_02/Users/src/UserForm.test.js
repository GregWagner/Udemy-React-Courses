import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

/*
 * Important parts of UserForm
 * 1) Shows 2 inputs and one button
 * 2) Entering a name & email then submitting the form causes
 *    the onUserAdd callback to be called
 */

test('it shows two inputs and a button', () => {
    // render the component
    render(<UserForm/>);

    // manipulate the component
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    // assertion - make sure the component is doing what we expect it to do
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted', async () => {
    const mock = jest.fn();

    // try to render the component
    render(<UserForm onUserAdd={mock}/>);

    // find the two inputs
    const nameInput = screen.getByRole('textbox', {
        name: /name/i
    });
    const emailInput = screen.getByRole('textbox', {
        name: /email/i
    });

    // simulate typing in a name
    await user.click(nameInput);
    await user.keyboard('Jane');

    // simulate typing in an email
    await user.click(emailInput);
    await user.keyboard('jane@gmail.com');

    // find the button
    const button = screen.getByRole('button');

    // simulate clicking the button
    await user.click(button);

    // assertion to make sure onUserAdd gets called
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({name: 'Jane', email: 'jane@gmail.com'});
});

test('empties the two inputs when form is submitted', async () => {
    render(<UserForm onUserAdd={() => {
    }}/>);

    const nameInput = screen.getByRole('textbox', {
        name: /name/i
    });

    const emailInput = screen.getByRole('textbox', {
        name: /email/i
    });

    const button = screen.getByRole('button');

    await user.click(nameInput);
    await user.keyboard('Jane');

    // simulate typing in an email
    await user.click(emailInput);
    await user.keyboard('jane@gmail.com');

    await user.click(button);

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
});
