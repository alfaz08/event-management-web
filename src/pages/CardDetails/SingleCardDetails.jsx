

const SingleCardDetails = ({singleCard}) => {
  const {event_name,id,image,price,short_description} =singleCard;
  return (
    <div>
      <img src={image} alt="" />
    </div>
  );
};

export default SingleCardDetails;