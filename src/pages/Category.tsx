import React, { Fragment } from 'react';
import { AuthConsumer } from '../authContext';
import CategoriesList from '../components/catgeories/CategoriesList';
import '../styles/category.css';

const Category: React.FC = (): JSX.Element => {
    return (
        <AuthConsumer>
            {({ user }) =>
                user && (
                    <Fragment>
                        <div className="componentHead">
                            <h2>Category</h2>
                        </div>

                        <CategoriesList />
                    </Fragment>
                )
            }
        </AuthConsumer>
    );
};

export default Category;
