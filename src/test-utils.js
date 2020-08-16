/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing';

const renderApollo = (node, { mocks, addTypename, defaultOptions, cache, ...options } = {}) => {
    return render(
        <MockedProvider mocks={mocks} addTypename={addTypename} defaultOptions={defaultOptions} cache={cache}>
            {node}
        </MockedProvider>,
        options,
    );
};

export * from '@testing-library/react';
export { renderApollo };
