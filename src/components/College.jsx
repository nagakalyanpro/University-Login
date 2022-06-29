import React, {useState} from 'react'
import Data from './Data'

import '../App.css';
import { Link } from 'react-router-dom';

const data = Data

console.log(data);
function College() {
    const [list, setList] = useState(data)
  return (

   <>
   <div>
    <h1 className='universe'>Top Universities</h1>
   </div>
     <hr />
     {list.map((item)=>{
         const{ web_page, country, domain,image, name} = item;
        return(
           <article className='article' key={name}>
             <section className="text-gray-800 bg-slate-900-500-900 body-font">     
  <div className="container px-5 py-24 mx-auto flex">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
       <a href={web_page}>
       <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={image} />
       </a>
       <a href="{web_page}"><u>{name}</u></a>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Country: <b>{country}</b></h3>
          <h2 className="text-gray-500 title-font text-lg font-medium">{domain}</h2>
         
        </div>
      </div>
      </div>
      </div>
      </section>
           </article>
        )
  
     })}
   </>
  )
}

export default College