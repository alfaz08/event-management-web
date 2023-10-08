
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleCardDetails from './SingleCardDetails';
const CardDetails = () => {
  const allCard=useLoaderData();
  const {id} = useParams()
  const [singleCard,setSingleCard]=useState({})
  console.log(id,allCard); 

   useEffect(()=>{
    const findCard=allCard?.find((data)=>data.id===id)
    setSingleCard(findCard)
   },[id,allCard])


  return (
    <div>
     <SingleCardDetails singleCard={singleCard}></SingleCardDetails>
    </div>
  );
};

export default CardDetails;