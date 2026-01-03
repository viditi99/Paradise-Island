const DataBindingComponent = () => {
    let product = {
    Name: 'JBL Speaker',
    Price: 6000.44,
    Stock: true,
    Photo: '../../assets/speaker.jpg'
    }
    return(
    <>
    <h2>Product Details</h2>
    <dl>
    <dt>Name</dt>
    <dt>Name</dt>
 <dd>{product.Name}</dd>
 <dt>Price</dt>
 <dd>{product.Price}</dd>
 <dt>Stock</dt>
 <dd>{(product.Stock==true)?"Available":"Out of Stock"}</dd>
 <dt>Preview</dt>
 <dd>
 <img src={product.Photo} width="100" height="100"/>
 </dd>
 </dl>
 </>
 )
}
 
