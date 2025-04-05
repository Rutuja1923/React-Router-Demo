import { useParams } from "react-router-dom";

function User() {
  const { id} = useParams();
  return (
    <div className="min-h-[700px] bg-gray-600 text-white text-3xl flex justify-center items-center">
        <h1>User : {id}</h1>
    </div>
    
  );
}

export default User;
