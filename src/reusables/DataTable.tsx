/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/datatable.css';

interface DataTableProps {
    items?: any;
    // name?: string;
    // user: User;
    changePage?: (value: number) => void;
    // handleEdit?: (value?: number) => void;
    // deleteSelected?: (checkedItems?: any[]) => void;
    // getDetails?: (date: any, id?: number, code?: string) => void;
}

const DataTable: React.FC<DataTableProps> = ({ items, changePage }): JSX.Element => {
    const [offset] = useState(4);
    const [dir, setDir] = useState('ASC');
    const [sortedColumn, setSortedColumn] = useState('name');
    const [checkedItems, setCheckedItems] = useState<any[]>([]);
    const [stateObject, setObjectState] = useState<__DataTableType__>({
        allChecked: false,
        checkboxes: [],
    });

    useEffect(() => {
        if (items === undefined) {
            return;
        }

        setObjectState({
            allChecked: false,
            checkboxes: items.data.map(
                (options: any, option: number) => ({
                    ...options,
                    isChecked: false,
                    assigned: 'item' + option,
                }),
                {},
            ),
        });
    }, [items]);

    // const isAdmin = props.user.permission === UserRoles.admin;

    const getKeys = (): string[] | undefined => {
        if (items === undefined) return;
        return Object.keys(items.data[0]);
    };

    const keys = getKeys();

    // const handleDelete = (checkedItems: any[]): void => {
    //     if (props.deleteSelected === undefined) return;
    //     props.deleteSelected(checkedItems);

    //     setCheckedItems([]);
    // };

    // const handleDetails = (date: any, productCodeId?: number, productCode?: string): void => {
    //     if (props.getDetails === undefined) return;
    //     props.getDetails(date, productCodeId, productCode);
    // };

    const handlePageChange = (value: number): any => {
        if (changePage === undefined) return;
        changePage(value);
    };

    // const handleEdit = (value?: number): any => {
    //     if (props.handleEdit === undefined) return;
    //     props.handleEdit(value);
    // };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const itemName = e.target.name;
        const checked = e.target.checked;
        const value = e.target.value;

        let checkboxes = stateObject.checkboxes;
        let allChecked = stateObject.allChecked;

        if (checkboxes === undefined) return;
        if (items === undefined) return;

        if (itemName === 'checkAll') {
            allChecked = checked;

            checkboxes = checkboxes.map((item) => ({
                ...item,
                isChecked: checked,
            }));

            if (checked) {
                setCheckedItems(
                    checkboxes.map((item) => {
                        return item.id;
                    }),
                );

                setObjectState({
                    allChecked: checked,
                    checkboxes: checkboxes,
                });
            } else {
                setCheckedItems([]);

                setObjectState({
                    allChecked: false,
                    checkboxes: checkboxes,
                });
            }
        } else {
            checkboxes = checkboxes.map((item) => {
                return item?.assigned === itemName ? { ...item, isChecked: checked } : item;
            });
            allChecked = checkboxes.every((item) => item?.isChecked);

            if (checked) {
                console.log(checked);
                setCheckedItems([...checkedItems, value]);

                setObjectState({
                    allChecked: allChecked,
                    checkboxes: checkboxes,
                });
            } else {
                console.log(checked);
                const removeIndex = checkedItems.indexOf(value);
                checkedItems.splice(removeIndex, 1);

                setObjectState({
                    allChecked: false,
                    checkboxes: checkboxes,
                });
            }
        }
    };

    const sortTable = (n: number, column: string): void => {
        setSortedColumn(column);
        const table: any = document.getElementById('myTable');
        let rows,
            switching: boolean,
            i,
            x,
            y,
            shouldSwitch,
            switchcount = 0;
        switching = true;
        //Set the sorting direction to ascending:
        setDir('DESC');

        /*Make a loop that will continue until
        no switching has been done:*/
        while (switching) {
            //start by saying: no switching is done:
            switching = false;

            rows = table.rows;
            /*Loop through all table rows (except the
            first, which contains table headers):*/
            for (i = 1; i < rows.length - 1; i++) {
                //start by saying there should be no switching:
                shouldSwitch = false;

                /*Get the two elements you want to compare,
                one from current row and one from the next:*/
                x = rows[i].getElementsByTagName('TD')[n];
                y = rows[i + 1].getElementsByTagName('TD')[n];

                /*check if the two rows should switch place,
                based on the direction, asc or desc:*/
                if (dir === 'DESC') {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        setDir('ASC');
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir === 'ASC') {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        setDir('DESC');
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                /*If a switch has been marked, make the switch
                and mark that a switch has been done:*/
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;

                //Each time a switch is done, increase this count by 1:
                switchcount++;
            } else {
                /*If no switching has been done AND the direction is "asc",
                set the direction to "desc" and run the while loop again.*/
                if (switchcount === 0 && dir === 'DESC') {
                    setDir('ASC');
                    switching = true;
                }
            }
        }
    };

    const columnHead = (value: string): string => {
        return value.split('_').join(' ').toLowerCase();
    };

    const tableHeads = (): any => {
        let icon: JSX.Element;
        if (dir === 'ASC') {
            icon = <i className="mdi mdi-arrow-up"></i>;
        } else {
            icon = <i className="mdi mdi-arrow-down"></i>;
        }

        return keys?.map((column, index) => {
            if (column !== 'id' && column !== 'isChecked' && column !== 'assigned' && column !== '__typename') {
                return (
                    <th scope="col" key={index} onClick={(): void => sortTable(index, column)}>
                        {columnHead(column)}
                        {column === sortedColumn && icon}
                    </th>
                );
            }
        });
    };

    const showKey = (key: string, index: number, data: any): any => {
        const peg = key.split('_').join(' ').toLowerCase();

        if (key !== 'id' && key !== 'isChecked' && key !== 'assigned' && key !== '__typename') {
            return (
                <td data-label={peg} key={index}>
                    {data[key] === true ? (
                        <i className="fa fa-check"></i>
                    ) : data[key] === false ? (
                        <i className="fa fa-times"></i>
                    ) : (
                        data[key]
                    )}
                </td>
            );
        }
    };

    const dataList = (): any => {
        if (items === undefined) return;
        if (items.data.length) {
            return stateObject?.checkboxes?.map((data, index: number) => {
                return (
                    <tr key={index} className="table-row">
                        <td>
                            <input
                                type="checkbox"
                                name={'item' + index}
                                value={data.id}
                                checked={data.isChecked}
                                onChange={handleChange}
                                key={index}
                            />
                        </td>
                        {Object.keys(data).map((key, index) => showKey(key, index, data))}
                        {data.id && (
                            <td data-label="actions">
                                <i
                                    className="mdi mdi-square-edit-outline btnDetail"
                                    data-label="edit"
                                    // onClick={(): void => handleEdit(data.id)}
                                ></i>
                            </td>
                        )}
                    </tr>
                );
            });
        }
    };

    const pageRange = (): any => {
        const differential = items.pageData.perPage - 1;
        const dataCount = items.pageData.perPage * items.pageData.currentPage;
        const firstItem = dataCount - differential;

        function prependZero(value: number): any {
            if (value <= 9) {
                return '0' + value;
            } else {
                return value;
            }
        }

        const changedDataCount = prependZero(dataCount);
        const changedFirstItem = prependZero(firstItem);
        const changedTotal = prependZero(items?.pageData.total);

        return (
            <span className="pagination-total" style={{ marginTop: '8px' }}>
                <i className="page-item">
                    Showing {changedFirstItem} - {changedDataCount} of {changedTotal}
                </i>
            </span>
        );
    };

    const pages = (): any => {
        if (!items?.pageData.perPage) {
            return [];
        }

        const pages: any[] = [];
        if (items.pageData.currentPage === undefined) return;

        let from = items.pageData.currentPage - Math.floor(offset / 2);
        if (from < 1) {
            from = 1;
        }
        let to = from + offset - 1;
        if (items.pageData.lastPage === undefined) return;
        if (to > items.pageData.lastPage) {
            to = items.pageData.lastPage;
        }
        while (from <= to) {
            pages.push(from);
            from++;
        }
        return pages;
    };

    const pageList = (): any => {
        return pages().map((page: any) => {
            return (
                <li className={page === items?.pageData.currentPage ? 'page-item active' : 'page-item'} key={page}>
                    <button className="page-link" onClick={(): void => handlePageChange(page)}>
                        {page}
                    </button>
                </li>
            );
        });
    };

    return (
        <div>
            <div className="data-table">
                {checkedItems.length > 0 && (
                    <div className="row">
                        <span style={{ paddingRight: '10px', paddingTop: '2px' }}>
                            <p>{checkedItems.length} selected</p>
                        </span>
                        {/* <Button
                            bsPrefix="lgBtn"
                            onClick={(): void => handleDelete(checkedItems)}
                            className="btn-delete"
                        >
                            Delete
                        </Button> */}
                    </div>
                )}
                <table id="myTable" className="table responsive-table">
                    {/* <caption>{props.name} Data Table</caption> */}
                    <thead className="table-header">
                        <tr className="">
                            {keys !== undefined && (
                                <th>
                                    <input
                                        type="checkbox"
                                        id="checkall"
                                        name="checkAll"
                                        checked={stateObject.allChecked}
                                        onChange={handleChange}
                                    />
                                </th>
                            )}
                            {tableHeads()}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>{dataList()}</tbody>
                </table>
                {pageRange()}
                {items?.pageData.lastPage !== undefined && items?.pageData.currentPage !== undefined
                    ? items?.pageData.lastPage >= items?.pageData.currentPage && (
                          <nav className="tableNav">
                              <ul className="pagination">
                                  <li className="page-item">
                                      <i
                                          className={
                                              1 === items?.pageData.currentPage
                                                  ? 'page-link disabled'
                                                  : 'page-link fa fa-angle-left'
                                          }
                                          onClick={(): void => {
                                              if (items.pageData.currentPage === undefined) return;
                                              handlePageChange(items.pageData.currentPage - 1);
                                          }}
                                      ></i>
                                  </li>
                                  {pageList()}
                                  <li className="page-item">
                                      <i
                                          className={
                                              items?.pageData.lastPage === items?.pageData.currentPage
                                                  ? 'page-link disabled'
                                                  : 'page-link fa fa-angle-right'
                                          }
                                          onClick={(): void => {
                                              if (items.pageData.currentPage === undefined) return;
                                              handlePageChange(items.pageData.currentPage + 1);
                                          }}
                                      ></i>
                                  </li>
                              </ul>
                          </nav>
                      )
                    : ''}
            </div>
        </div>
    );
};

DataTable.propTypes = {
    items: PropTypes.any,
    // name: PropTypes.string,
    // user: PropTypes.any,
    // getDetails: PropTypes.func,
    // handleEdit: PropTypes.func,
    changePage: PropTypes.func,
    // deleteSelected: PropTypes.func,
};

// const mapStateToProps = (state: AppState): AuthState => ({
//     isLoggedIn: state.auth.isLoggedIn,
//     user: state.auth.user,
// });

export default DataTable;
