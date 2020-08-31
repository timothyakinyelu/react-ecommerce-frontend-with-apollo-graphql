import React from 'react';
import '../styles/loading.css';

const Loading = (): JSX.Element => {
    return (
        <section className="loader">
            <section className="loader__item loader__circle loader__circle-1"></section>
            <section className="loader__item loader__circle loader__circle-2"></section>
            <section className="loader__item loader__circle loader__circle-3"></section>
            <section className="loader__item loader__pulse"></section>
        </section>
    );
};

export default Loading;
