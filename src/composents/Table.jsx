import React from "react";
import { BsTrash, BsPencil } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/action";

const Table = ({ item, setEditUser }) => {
  const dispatch = useDispatch();
  const handleRemoveUser = () => {
    dispatch(removeUser(item.id));
  };
  const handleEditUser = () => {
    setEditUser(item);
  };
  return (
    <tr key={item.id}>
      <td className="border border-gray-400 px-4 py-2">{item.id}</td>
      <td className="border border-gray-400 px-4 py-2">{item.firstName}</td>
      <td className="border border-gray-400 px-4 py-2">{item.lastName}</td>
      <td className="border border-gray-400 px-4 py-2">{item.ville}</td>
      <td className="border border-gray-400 px-4 py-2">
        <div className="flex justify-center items-center gap-3">
          <button className="text-cyan-500">
            <BsPencil onClick={handleEditUser} />
          </button>
          <button className="text-cyan-500">
            <BsTrash onClick={handleRemoveUser} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Table;
