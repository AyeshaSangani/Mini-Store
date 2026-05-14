
import React, { useEffect} from 'react'

function UseEffect() {

    useEffect(() => {

        setTimeout(() => {
        alert('this is use effect')
            fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())            
        .then(json=>console.log(json))
        }, 3000);

    }, [])


    return (
        <>

            <div className='container'>
                <h2>useEffect</h2>
            </div>

        </>

    )
}

export default UseEffect