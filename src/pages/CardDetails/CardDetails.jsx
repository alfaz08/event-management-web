
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {
  const allCard=useLoaderData();
  const {id} = useParams()
  const [singleCard,setSingleCard]=useState({})
  console.log(id,allCard); 

   useEffect(()=>{
    const findCard=allCard?.find((data)=>data.id===id)
    setSingleCard(findCard)
   },[id,allCard])
   console.log(singleCard);

  return (
    <div>
     
    </div>
  );
};

export default CardDetails;