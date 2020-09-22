/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLazyQuery } from '@apollo/client';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { GET_CATEGORIES } from '../../graphql/query/categories';
import DataTable from '../../reusables/DataTable';

const CategoriesList: React.FC = (): JSX.Element => {
    const [_isMounted, setIsMounted] = useState(true);
    const history = useHistory();

    const [getCategories, { data, loading, error }] = useLazyQuery(GET_CATEGORIES);

    const items = data?.categories;

    function useUrlQuery(): any {
        return new URLSearchParams(useLocation().search);
    }
    const query = useUrlQuery();
    const page = query.get('page');

    useEffect(() => {
        if (_isMounted) {
            getCategories({ variables: { currentPage: page } });
        }

        return () => {
            setIsMounted(false);
        };
    }, [_isMounted, getCategories, page]);

    const changePage = useCallback(
        (pageNumber: number): void => {
            if (pageNumber) {
                getCategories({ variables: { currentPage: pageNumber } });
                history.push('/categories' + '/' + '?page=' + pageNumber);
            }
        },
        [getCategories, history],
    );

    useEffect(() => {
        const ac = new AbortController();
        if (!page) {
            return;
        }

        changePage(page);
        return function cleanup(): void {
            ac.abort();
        };
    }, [page, changePage]);

    if (loading) return <p>...Loading</p>;
    if (error) {
        return <p>ERROR</p>;
    }
    if (!data) return <p>Not found</p>;

    return (
        <Fragment>
            {items === undefined || items.length < 0 ? (
                <h5>No Records Available!</h5>
            ) : (
                <DataTable items={items} changePage={changePage} />
            )}
        </Fragment>
    );
};

export default CategoriesList;
