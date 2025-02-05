import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export default function ProductList(){
    const[products , setProducts]= useState([])

    function getProduct(){
        fetch("http://localhost:4000/products?_sort=id&_order=desc").
        then(response  =>{
            if(response.ok){
                return response.json()
            }
            throw new Error() 
        })
        .then(data=> {
            setProducts(data)
        })
        .catch(error => {
            alert("unable to get the data ")
        })
    }

    useEffect(getProduct, [])


    return(
    <div className="container my-4">
<h2 className="text-center mb-4">Products </h2>

        <div className="row mb-3">
           <div className="col">
                <Link className="btn btn-primary me-1" to="/admin/products/create" role="button">Create Product</Link>
                <button type="button" className="btn btn-online-primary" onClick={getProduct}>Refresh </button>
            </div>
            <div className="col">

            </div>

        </div>

        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>price </th>
                    <th>image</th>
                    <th>created At </th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product , index )=> {
                        return(
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.brand}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td><img src={"http://localhost:4000/images/" + product.imageFilename } width="100" alt="..."/> </td>
                            <td>{product.createdAt.slice(0,10   )}</td>
                            <td style={{width: "10px" , whiteSpace:"nowrap"}}>
                                <Link className="btn btn-primary btn-sm me-1"
                                    to={"/admin/products/edit"+product.id}>Edit</Link>
                                <button type="button" className="btn btn-danger btn-sm">Delete</button>
                            </td>

                        </tr>
                        )       
                })
            }
            </tbody>

        </table>




    </div>
    )
}