import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateUser } from "./store/Slice";



const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  console.log(existingUser[0])
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);
  const dispatch=useDispatch()
  const navigate = useNavigate();



  const handleUpdate = (e) => {
    e.preventDefault()

    dispatch(updateUser({
      id: id,
      name: editName,
      email:editEmail
    }))
    navigate('/')
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="enter name"
              value={editName}
              onChange={e=>setEditName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email : </label>
            <input
              type="emaiol"
              name="email"
              className="form-control"
              placeholder="enter email"
              value={editEmail}
              onChange={e=>setEditEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-info mt-3">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
