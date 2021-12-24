import React, { Fragment } from 'react';

import usePagination from '../hooks/usePagination';

const KaryawanList = ({ data, itemsPerPage, startFrom }) => {
    const { slicedData, pagination, prevPage, nextPage, changePage } = usePagination({ itemsPerPage, data, startFrom });

    return (
        <Fragment>
            <table className="table is-fullwidth is-striped">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Username</th>
                        <th>Nama</th>
                        <th>Biro</th>
                        <th>Team</th>
                        <th>Hobi</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {slicedData.map((item, index) => (
                        <tr key={item.id_kry}>
                            <td>{index+1}</td>
                            <td>{item.username}</td>
                            <td>{item.nama}</td>
                            <td>{item.biro}</td>
                            <td>{item.teambiro}</td>
                            <td>{item.hobi}</td>
                            <td>{item.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav className="pagination">
                <a href="/#" className="pagination-previous" onClick={prevPage}>Previous</a>
                <a href="/#" className="pagination-next" onClick={nextPage}>Next</a>
                <ul className="pagination-list">
                    {pagination.map(page => {
                        if (!page.ellipsis) {
                            return <li key={page.id}>
                                <a
                                    href="/#"
                                    className={page.current ? 'pagination-link is-current' : 'pagination-link'}
                                    onClick={(e) => changePage(page.id, e)}
                                >
                                    {page.id}
                                </a>
                            </li>
                        } else {
                            return <li key={page.id}><span className="pagination-ellipsis">&hellip;</span></li>
                        }
                    })}
                </ul>
            </nav>
        </Fragment>
    );
}

export default KaryawanList;