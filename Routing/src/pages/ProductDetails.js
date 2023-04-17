import { useParams } from "react-router-dom";

const ProductDetails = () =>{
    const params = useParams();
    return (
        <>
            <h2>Product Details</h2>
            <p>{params.productId}</p>
        </>
    )
}

export default ProductDetails;