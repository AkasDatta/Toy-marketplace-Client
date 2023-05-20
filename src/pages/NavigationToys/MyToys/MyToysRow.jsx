const MyToysRow = ({ addtoy }) => {
    const { sellerName, sellerEmail, photo, price, toyname, subcategory, rating, quantity, description } = addtoy;
    return (
      <tr>
        <td>
            {photo ? (
                <img
                style={{ width: '45px', height: '45px' }}
                src={photo}
                alt="Toy"
                />
            ) : (
                <p>Image not found</p>
            )}
        </td>
        <td>{toyname}</td>
        <td>{sellerName}</td>
        <td>{sellerEmail}</td>
        <td>{subcategory}</td>
        <td>{price}</td>
        <td>{rating}</td>
        <td>{quantity}</td>
        <td>{description}</td>
        <td><button className='btn btn-secondary'>Update</button></td>
        <td><button className='btn btn-secondary'>Delete</button></td>
      </tr>
    );
  };
  
  export default MyToysRow;
  