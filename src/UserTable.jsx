import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, editUser, deleteUser } from "./actions";
import { MdEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import "./UserTable.css";
const UserTable = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      dispatch(editUser(formData));
    } else {
      dispatch(addUser({ ...formData, id: Date.now() }));
    }
    setFormData({
      id: "",
      name: "",
      email: "",
    });
  };

  const handleEdit = (user) => {
    setFormData(user);
  };

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          className="Name"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <button className="btn" type="submit">
          {formData.id ? "Edit" : "Add"}
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>

              <td
                style={{
                  marginLeft: "20px",
                  position: "absolute",
                  gap: "10px",
                }}
              >
                <span
                  style={{ marginRight: "10px" }}
                  className="span"
                  onClick={() => handleEdit(user)}
                >
                  <MdEdit fontSize={"20px"} />
                </span>
                <span className="span" onClick={() => handleDelete(user.id)}>
                  <FaRegTrashCan fontSize={"18px"} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
