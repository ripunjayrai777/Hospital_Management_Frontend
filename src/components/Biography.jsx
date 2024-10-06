import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ratione esse dicta expedita voluptatem nihil ut accusamus, accusantium quisquam eos omnis veritatis? Veritatis, sunt, repellat aspernatur asperiores animi nihil autem, tenetur reprehenderit consectetur odit a praesentium repellendus sed! Ipsum laboriosam similique sit ex, magnam quasi accusantium sunt sed quisquam alias.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum autem atque expedita ut earum rem culpa, qui saepe beatae iste modi officia numquam labore, enim corporis? Totam minima enim, hic nemo sapiente veritatis nisi.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab quod voluptate ad!</p>
        <p>Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempore sed reiciendis porro tenetur eos ipsa dicta officia expedita iste, ipsum voluptatibus neque? Voluptate itaque beatae officiis, reiciendis dignissimos eius ut molestiae consequatur nesciunt tempore, nemo voluptatibus deleniti, </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores porro laudantium ea harum eius velit id, voluptatum repellendus quo consequatur.</p>
      </div>
    </div>
  )
}

export default Biography
