import { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AuthContext } from "../../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";


const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [addtoys, setAddtoys] = useState([]);

    const url = `http://localhost:5000/addtoys?email=${user?.email}`
    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setAddtoys(data))
    }, []);

    return (
        <div className="my-5 py-5 container">
            <h1 className="text-center my-5 fw-bold" style={{ color: '#7fa7e4' }}>My Toys Here</h1>
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
                    {
                        addtoys.map(addtoy => <MyToysRow
                            key={addtoy._id}
                            addtoy={addtoy}
                        ></MyToysRow>) 
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyToys;