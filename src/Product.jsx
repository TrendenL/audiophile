import React from 'react'

export default function Product(props) {
    const { name, image } = props
    console.log(image.mobile)
  return (
    <div>Product
        <h1>{name}</h1>
        <img src={require(`${image.mobile}`)} alt="" />
    </div>
  )
}
