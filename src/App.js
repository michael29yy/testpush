import { useState, useEffect, Fragment } from 'react';
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import Header from './components/Header';
import KaryawanList from './components/KaryawanList';
function App() {

  const handlePageClick = (data) => {
    console.log('Clicked :', data.selected);
  }

  const [karyawan, setKaryawan] = useState([]);

  useEffect(() => {
    getDataKaryawan();
  }, [])

  const getDataKaryawan = async () => {
    const respon = await axios.get('http://localhost:8080/karyawan');
    setKaryawan(respon.data)
    console.log(respon.data);
  }

  return (
    <Fragment>
      <Header title="ReactJS pagination using custom hook" />
      <div className="container px-2">
        <KaryawanList data={karyawan} itemsPerPage={3} />
        <KaryawanList data={karyawan} itemsPerPage={5} startFrom={15} />
      </div>
    </Fragment>
    /* <div>
      <table id="tabelkry" className="table table-responsive table-bordered table-striped table-hover table-sm">
        <thead style={{ textAlign: "center" }}>
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
          {
            karyawan.map((kryn, index) => {
              return (
                <tr key={kryn.id_kry}>
                  <td>{index + 1}</td>
                  <td>{kryn.username}</td>
                  <td>{kryn.nama}</td>
                  <td>{kryn.biro}</td>
                  <td>{kryn.teambiro}</td>
                  <td>{kryn.hobi}</td>
                  <td>{kryn.password}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={'<< prev'}
        nextLabel={'next >>'}
        breakLabel={'...'}
        pageCount={15}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName='active'
      />
    </div> */
  );
}

export default App;
