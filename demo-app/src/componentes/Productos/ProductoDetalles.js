import React, {useContext, useState, useEffect} from 'react'
import{DataContext} from "../../context/Dataprovider";
import {useParams} from "react-router-dom";
import {ProductoItem} from "./ProductoItem";

export const ProductoDetalles = () => {
    const value = useContext(DataContext)
    const [productos] = value.productos;
    const addCarrito = value.addCarrito;
    const [detalle, setDetalle] = useState([])
    const [url, setUrl] = useState(0);
    const [images, setImages] = useState('')
    const params = useParams();
    let item = 0;

    useEffect (() =>{
        productos.forEach(producto =>{
        item = 0;
            if(producto.id == parseInt(params.id)){
            setDetalle(producto)
            setUrl(0)
            }
        })
    },[params.id, productos])

   useEffect(( )=>{
     const values = `${detalle.img1}${url}${detalle.img2}`
     setImages(values);
   },[url, params.id])

    const handleInput = e =>{
        const number = e.target.value.toString().padStart(2, '01')   
          setUrl(number)   
        console.log(number)
    }
    if(detalle.length < 1) return null;
  return (
    <>
        {
            <div className ="detalles">
                <h2>{detalle.title}</h2>
                <p className ="price">${detalle.price}</p>
                <div className ="grid">
                    <p className ="nuevo">Nuevo</p>
                    <div className ="size">
                       <select placeholder="Tamaño">
                           <option value="1">1</option>
                           <option value="1">2</option>
                           <option value="1">3</option>
                           <option value="1">4</option>
                           <option value="1">5</option>
                           <option value="1">6</option>
                           <option value="1">7</option>
                           <option value="1">8</option>
                           <option value="1">9</option>
                       </select>
                       <p>Tamaño</p>
                    </div>
                </div>
                <button onClick={()=> addCarrito(detalle.id)}>Añadir al carrito</button>
                {
                    url ? <img src={images}alt={detalle.title} /> : <img src={detalle.image}alt={detalle.title} />
                }
                
                <input type="range" min="1" max="36"  value={url} onChange={handleInput}/>
                <div className="description" >
                <p><b>Description: </b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum necessitatibus soluta alias porro, saepe facere expedita asperiores quos fugit inventore ex, itaque sapiente quae pariatur beatae optio repellat aperiam quia possimus mollitia repellendus? Illo natus quam eaque impedit omnis pariatur!</p>
          <br/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vitae accusantium omnis, facere laudantium ipsa hic reprehenderit blanditiis quibusdam quos repellendus id illo reiciendis magni, aliquid beatae, consequatur sapiente! Sequi facere itaque,</p>
          <br/>
          <br/>
                </div>
            </div>
        }

        <h2 className="relacionado">Productos Relacionados</h2>
        <div className="productos">
      {productos.map((producto) =>{
          if((item < 6 )&&(detalle.category === producto.category)){
              item++;
            return <ProductoItem 
            key={producto.id} 
            id={producto.id}
            title={producto.title}
            price={producto.price}
            image={producto.image}
            category={producto.category}
            cantidad={producto.cantidad}
            />
          }
        })
    }
         
      </div>
    </>
  )
}
