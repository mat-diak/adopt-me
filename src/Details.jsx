import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  console.log(id);

  return <div>Hello</div>;
};

export default Details;
