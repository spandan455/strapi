import React from 'react'
import Link from 'next/link'

const Products = (props) => {
  return (
    
    <>
    <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Our Products </h1>
        <div class="h-1 w-20 bg-green-500 rounded"></div>
      </div>
      
    </div>
    <div className="flex flex-wrap -m-4">
      {props.products.data.map((item)=>{
        let oc = item.attributes.color;
        let cc = oc.trim();
        return(
          
          <div className="lg:w-[24vw] md:w-[45vw] mx-[2.5vw] lg:mx-[4px] my-2  p-4 w-[95vw] bg-gray-800 rounded-lg">
            <a className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.attributes.image.data && item.attributes.image.data.attributes.name} />
            </a> 
            <div className="mt-4 bg-gray-800">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">COLOR: {item.attributes.color} , SIZE:{item.attributes.size}</h3>
              <h2 className="text-white title-font text-lg font-medium">{item.attributes.Title}</h2>
              <div className='hidden bg-red-800 bg-green-800 bg-blue-800 bg-yellow-800'></div>
              <button className={"border-2 border-gray-800 ml-1  rounded-full w-6 h-6 focus:outline-none " + `bg-${cc}-800`}></button>
              <p className="leading-relaxed text-base">{item.attributes.description}</p>
              <p className="my-2 text-gradient">${item.attributes.price}</p>

              <button className="inline-flex text-white items-center gradient border-0 py-1 px-3 focus:outline-none hover:scale-105 duration-300  rounded text-base relative top- md:mt-0">Buy now
        </button>
            </div>
          </div>
      )
      })}
    </div>
  </div>
</section>
    </>
  )
}



export async function getServerSideProps(context) {
  let headers = {Authorization : "Bearer 0727ca13505acccd1b6e042e705480fea4fe638c6bc6384369814ade98633028975393e516750ad5c3957afb187b40769a3b94d0f9d29567f78d7b2613888352aa007358725b648301ef3629603790ed293935f790708eee41320009618bf57373c8d751945854e04edeec5407e83c4d52d74cb665ed104189344a9f0d944466"}
  let a = await fetch("http://localhost:1337/api/products?populate=*" , {headers : headers})
  let products = await a.json()
  return {
    props: {products : products}, 
  }
}

export default Products