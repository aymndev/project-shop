
import { useEffect,useState } from 'react';
import Footer from "../components/footer";
import dashcard from '../components/dashcard';

export default function Dashnoard() {

  const [product ,setProduct]=usestate([]);

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })

  }
  return (
    <div>
      
    </div>
  )
}
