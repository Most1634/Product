import { Link, useNavigate } from "react-router-dom";

export default function CreateProduct (){

    const navigate = useNavigate()

    async function handelSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.target)
        const product = Object.fromEntries(formData.entries())
        if (!product.name || !product.brand || !product.category || !product.price || !product.description || !product.image.name ){
          alert("Please fill all the Fields ")
          return      
        } 
        
        try {
         const response = await   fetch("http://localhost:4000/products" , {
                method : "POST" ,
                body : formData 
            })
            const data = await response.json() 

            if(response.ok){
                //Product is created 
                navigate("/admin/products")
            } else if (response.status === 400){
                alert("Validation Erros ")
            } else{
                alert("unable to create product ")
            }




        } catch (error) {
            alert("unable to connect to server ")
        }
    } 


    return(
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 mx-auto rounded border p-4">
                    <h2 className="text-center mb-5"> Create Product </h2>
                    <form onSubmit={handelSubmit}>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label ">Name</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="name"/>
                                <span className="text-danger"></span>

                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label ">Brand</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="brand"/>
                                <span className="text-danger"></span>

                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label ">Category </label>
                            <div className="col-sm-8">
                                <select className="form-select" name="category">
                                    <option value="Other">Other</option>
                                    <option value="Phones">Phones</option>
                                    <option value="Computers">Computers</option>
                                    <option value="Accessories">Accessories</option>
                                    <option value="Printers">Printers</option>
                                    <option value="Cameras">Cameras</option>

                                </select>
                                <span className="text-danger"></span>

                            </div>
                            
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label ">Price</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="price" type="number" step="0.01" min="1"/>
                                <span className="text-danger"></span>

                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label ">Description</label>
                            <div className="col-sm-8">
                                <textarea className="form-control" name="description" rows="4"/>
                                <span className="text-danger"></span>

                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label ">Image</label>
                            <div className="col-sm-8">
                                <input className="form-control" type="file" name="image" />
                                <span className="text-danger"></span>

                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="offset-sm-4 col-sm-4 d-grid">
                                <button type="submit" className="btn btn-primary" >Submit</button>
                            </div>
                            <div className="col-sm-4 d-grid">
                                <Link className="btn btn-secondary" to='/admin/products' role="button"> Cancel</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}