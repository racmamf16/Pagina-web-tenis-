import React, {useContext, useState, useEffect} from 'react'
import{DataContext} from "../../context/Dataprovider";
import {useParams} from "react-router-dom";

export const ProductoDetalles = () => {
    const value = useContext(DataContext)
    const [productos] = value.productos;
    const [detalle, setDetalle] = useState([])
    const [url, setUrl] = useState(0);
    const [images, setImages] = useState('')
    const params = useParams();

    useEffect (() =>{
        productos.forEach(producto =>{

            if(producto.id == parseInt(params.id)){
            setDetalle(producto)
            
            }
        })
    },[params.id, productos])
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
                <button>Añadir al carrito</button>
                <img src= "https://stockx-360.imgix.net/Nike-LD-Waffle-Sacai-Black-Nylon/Images/Nike-LD-Waffle-Sacai-Black-Nylon/Lv2/img20.jpg?auto=format,compress&q=90&updated_at=1606321430&w=1000"alt={detalle.title} />
                <input type="range" min="1" max="36" onChange={handleInput}/>
                <div className="description" >
                <p><b>Description: </b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum necessitatibus soluta alias porro, saepe facere expedita asperiores quos fugit inventore ex, itaque sapiente quae pariatur beatae optio repellat aperiam quia possimus mollitia repellendus? Illo natus quam eaque impedit omnis pariatur!</p>
          <br/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vitae accusantium omnis, facere laudantium ipsa hic reprehenderit blanditiis quibusdam quos repellendus id illo reiciendis magni, aliquid beatae, consequatur sapiente! Sequi facere itaque,</p>
                </div>
            </div>
        }
    </>
  )
}
