import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer'

function Card(props) {
    const options = props.options
    const priceOption = Object.keys(options)
    const priceRef = useRef()
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState('')
    let data = useCart()
    let dispatch = useDispatchCart()
    const handleAddTocart = async () => {
        const existingItem = data.find(item => item.id === props.foodItem._id);

        if (existingItem) {
            // Item already exists in the cart
            if (existingItem.size === size) {
                await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty });
            } else {
                await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size });
                console.log("Size different so simply ADD one more to the list");
            }
        } else {
            // Item doesn't exist in the cart
            await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size });
        }

        console.log(data);

    }

    let finalPrice = qty * parseInt(options[size])
    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])
    return (
        <div>
            <div className='container'>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <div style={{ maxHeight: "200px", overflow: "hidden" }}>
                        <img src={props.foodItem.img} className="card-img-top" style={{ objectFit: "cover", width: "100%" }} alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItem.name}</h5>

                        <div className="container w-100">
                            <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}

                            </select>
                            <select className='m-2 h-100  bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                                {priceOption.map((data) => {
                                    return <option key={data} value={data}>{data}</option>
                                })}
                            </select>
                            <div className='d-inline h-100 fs-5'>
                                {finalPrice}/-
                            </div>
                            <hr></hr>
                            <button className={'btn btn-success justify-center ms-2'} onClick={handleAddTocart}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card