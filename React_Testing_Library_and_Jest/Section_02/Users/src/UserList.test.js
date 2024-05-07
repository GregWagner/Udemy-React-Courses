import UserList from './UserList';
import {render, screen, within} from '@testing-library/react';

function renderComponent() {
    // render the component
    const users = [
        {name: 'Jane', email: 'jane.gmail.com'},
        {name: 'Sam', email: 'sam.gmail.com'}
    ];
    render(<UserList users={users}/>);

    return {users};
}

test('render one row per user', () => {
    // render the component
    renderComponent();

    // find all the rows in the table
    //screen.logTestingPlaygroundURL();

    // does not work since it includes the header
    // const rows = screen.getAllByRole('row');

    // bad because you have to modify code to be able to run test
    const rows = within(screen.getByTestId('users')).getAllByRole('row');

    // eslint-disable-next-line
    //const rows = container.querySelectorAll('tbody tr');


    // assertion: correct number of rows in tables
    expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
    // render the component
    const {users} = renderComponent();

    for (let user of users) {
        const name = screen.getByRole('cell', {name: user.name});
        const email = screen.getByRole('cell', {name: user.email});

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
});
