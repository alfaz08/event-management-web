import { useLoaderData } from "react-router-dom";
import SingleService from "./SingleService";

const Services = () => {
  const allData = useLoaderData()
  console.log(allData);
  return (
    <div>
      <div className="mt-4">
      <h2 className="text-center font-semibold text-5xl">Our Services</h2>
      </div>
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {
        allData.map(service=>
          <SingleService key={service.id} service={service}></SingleService>
        )
      }
      </div>
     
    </div>
  );
};

export default Services;