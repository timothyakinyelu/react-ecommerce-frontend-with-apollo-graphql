import React from 'react';
import { cleanup, fireEvent, wait } from '@testing-library/react';
import AdminLogin from '../Admin/pages/Auth/AdminLogin';
import { LOGIN_USER } from '../graphql/mutations/auth';
import { InMemoryCache } from '@apollo/client';
import { renderApollo } from '../test-utils';

describe('Login Page', () => {
    afterEach(cleanup);

    it('renders Login component', () => {
        const { getByText } = renderApollo(<AdminLogin />);

        getByText(/Sign In/i);
    });

    it('fires login mutation', async () => {
        const cache = new InMemoryCache();
        const loginData = {
            login: {
                tokens: {
                    access_token: '2uy788',
                    expires_in: '87878',
                },
                user: {
                    id: 1,
                    first_name: 'Juniper',
                    last_name: 'Lee',
                    email: 'lee.juniper@xo.com',
                },
            },
        };

        const mocks = [
            {
                request: {
                    query: LOGIN_USER,
                    variables: {
                        input: {
                            email: 'lee.juniper@xo.com',
                            password: 'secret',
                        },
                    },
                },
                result: jest.fn(() => {
                    return {
                        data: loginData,
                    };
                }),
            },
        ];

        const { findByText, getByTestId } = await renderApollo(<AdminLogin />, { mocks, cache });

        //check input event fires
        fireEvent.change(getByTestId('login-input'), {
            target: { value: 'lee.juniper@xo.com' },
        });

        //check input event fires
        fireEvent.change(getByTestId('password-input'), {
            target: { value: 'secret' },
        });

        //check form submits
        const loginButton = await findByText('Sign In');
        fireEvent.submit(loginButton);

        //check that results have been called
        const loginMutationMock = mocks[0].result;
        await wait(() => expect(loginMutationMock).toHaveBeenCalled());
    });
});

// import React from 'react';
// import { MockedProvider } from '@apollo/client/testing';
// import { render } from '@testing-library/react';

// import { cleanup, fireEvent, waitForElement } from '@testing-library/react';

// import AdminLogin from '../Admin/pages/Auth/AdminLogin';
// import { LOGIN_USER } from '../graphql/mutations/auth';
// import { InMemoryCache, gql } from '@apollo/client';
// import { IS_LOGGED_IN } from '../graphql/query/auth';

// describe('Login Page', () => {
//     //cleanup dom after test ends
//     afterEach(cleanup);

//     it('renders Login component', () => {
//         const { getByText } = render(
//             <MockedProvider mocks={[]} addTypename={false}>
//                 <AdminLogin />
//             </MockedProvider>,
//         );

//         getByText(/Sign In/i);
//     });

//     it('fires login mutation and updates cache when done', async () => {
//         const cache = new InMemoryCache();
//         const login = {
//             login: {
//                 tokens: { access_token: '3893i33e', expires_in: '647373' },
//                 user: {
//                     id: 1,
//                     first_name: 'Juniper',
//                     last_name: 'Lee',
//                     email: 'lee.juniper@xo.com',
//                 },
//             },
//         };
//         const mocks = [
//             {
//                 request: {
//                     query: LOGIN_USER,
//                     variables: {
//                         input: {
//                             email: 'lee.juniper@xo.com',
//                             password: 'secret',
//                         },
//                     },
//                     result: () => {
//                         return { data: { login } };
//                     },
//                 },
//             },
//         ];

//         const { getByText, getByTestId } = await render(
//             <MockedProvider mocks={mocks} addTypename={false}>
//                 <AdminLogin />
//             </MockedProvider>,
//             cache,
//         );

//         fireEvent.change(getByTestId('login-input'), {
//             target: { value: 'lee.juniper@xo.com' },
//         });

//         fireEvent.change(getByTestId('password-input'), {
//             target: { value: 'secret' },
//         });

//         fireEvent.submit(getByText(/Sign In/i));

//         //login complete when loader disappears
//         await waitForElement(() => getByText(/Sign In/i));

//         //check to make sure if cache is updated properly
//         // const { isLoggedIn } = cache.readQuery({
//         //     query: gql`
//         //         query IsUserLoggedIn {
//         //             isLoggedIn @client
//         //         }
//         //     `,
//         // });
//         // expect(isLoggedIn).toBeTruthy();
//     });
// });

// // it('should render loading state initially', async () => {
// //     let loginMutationCalled = false;
// //     const mocks = [
// //         {
// //             request: {
// //                 query: LOGIN_USER,
// //                 variables: {
// //                     login: {
// //                         email: 'lee.juniper@xo.com',
// //                         password: 'secret',
// //                     },
// //                 },
// //             },
// //             result: () => {
// //                 loginMutationCalled = true;
// //             },
// //         },
// //     ];

// //     const { getByText } = render(
// //         <MockedProvider mocks={mocks} addTypename={false}>
// //             <AdminLogin />
// //         </MockedProvider>,
// //     );

// //     getByText(/Sign In/i);

// // const form = component.root.findByType('form');
// // form.props.onSubmit();

// // const tree = component.toJSON();
// // await new Promise((resolve) => setTimeout(resolve, 3));

// // expect(tree.children).toContain('Loading...');
// // expect(loginMutationCalled).toBe(true);
// // });

// // let container = null;
// // beforeEach(() => {
// //     container = document.createElement('div');
// //     document.body.appendChild(container);
// // });

// // afterEach(() => {
// //     unmountComponentAtNode(container);
// //     container.remove();
// //     container = null;
// // });
