import { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AuthContext } from "../../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [addtoys, setAddtoys] = useState([]);
  const [error, setError] = useState(null);
  useTitle('My Toys');

  const url = `http://localhost:5000/addtoys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddtoys(data))
      .catch((error) => setError(error));
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addtoys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = addtoys.filter(
                (addtoy) => addtoy._id !== id
              );
              setAddtoys(remaining);
            }
          })
          .catch((error) => {
            console.log("Error deleting toy:", error);
          });
      }
    });
  };


  const handleConfirm = id => {
    const proceed = confirm('Are you sure you want to update?');
    if(proceed){
        fetch(`http://localhost:5000/addtoys/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                alert('Updated successfully');
                // update state
                const remaining = addtoys.filter(addtoy => addtoy._id !== id);
                const updated = addtoys.find(addtoy => addtoy._id === id);
                updated.status = "confirm"
                const newUpdates = [updated, ...remaining];
                setAddtoys(newUpdates);
            }
        })
    }
}

return (
    <div className="my-5 py-5 container">
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <h1 className="text-center my-5 fw-bold" style={{ color: "#7fa7e4" }}>
            My Toys Here
          </h1>
          <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Toys name</th>
            <th>Seller name</th>
            <th>Seller email</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Available quantity</th>
            <th>Detail description</th>
            <th>Update Toy</th>
            <th>Delete Toy</th>
          </tr>
        </thead>
        <tbody>
          {addtoys.map((addtoy) => (
            <MyToysRow
              key={addtoy._id}
              addtoy={addtoy}
              handleDelete={handleDelete}
              handleConfirm={handleConfirm}
            ></MyToysRow>
          ))}
        </tbody>
        </Table>
        </>
      )}
    </div>
  );
};

export default MyToys;
