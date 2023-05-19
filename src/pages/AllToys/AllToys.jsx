import { Button, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import './AllToys.css';

const AllToys = () => {
  return (
    <div className='my-5 py-5'>
      <h1 className="text-center my-5 fw-bold" style={{ color: '#7fa7e4' }}>All Toys Here</h1>
      <div className='d-flex justify-content-end container mb-4'>
        <Form action="/search" method="GET" className='d-flex'>
          <div>
            <input className='input-field-alltoys' type="text" name="query" placeholder="Enter your search query" />
          </div>
          <div>
            <Button type="submit" className='btn-danger mx-2 p-2'>Search</Button>
          </div>
        </Form>
      </div>
      <Table striped bordered hover size="sm" className='container'>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AllToys;
