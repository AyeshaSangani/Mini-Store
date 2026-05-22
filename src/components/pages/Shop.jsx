import React, { useEffect , useState} from 'react'

function Shop() {


      const [product, setProduct] = useState([])

        useEffect(() => {

          fetch('https://fakestoreapi.com/products')  
            .then(res => res.json())
            .then(data => {setProduct(data)})
        }, [])
      
      console.log(product);



  return (

    <>
<div class="container">

    <div class="content">
      
        <h1> <u> Feature Product </u></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, perferendis est. Mollitia ipsum ut officia?</p>
        
    </div>



<div class="row container-fluid" id="all-cards">
    
    <div class="card mx-2 my-2" style="width: 15rem;">
        <div class=" box box1">
            <img src="${element.image}" class=" my-3 card-img-top" alt="..."/>
        </div>
        <div class="card-body">
          <h5 class="card-title">${element.category}</h5>
          <p class="card-text">${element.description}</p>
          <p>Rs. <del>1,500</del> <strong>${element.price}</strong></p>
          <a href="#" class="btn btn-outline-info">Go somewhere</a>
        </div>
    </div> 

</div>




</div>


    </>

  )
}

export default Shop