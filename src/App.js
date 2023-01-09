import { useSelector, useDispatch } from "react-redux";
import Table from "./composents/Table";
import { useState } from "react";
import {
  addUser,
  clearUsers,
  filterVill,
  removeFilter,
  editAUser,
} from "./redux/action";
function App() {
  const data = useSelector((state) => state.mainReducer);
  const [editUser, setEditUser] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const newUser = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      ville: Number(formData.get("ville")),
    };

    if (editUser) {
      dispatch(
        editAUser({
          id: editUser.id,
          ...newUser,
        })
      );
    } else {
      dispatch(addUser(newUser));
    }
  };
  const handleClearAll = () => {
    dispatch(clearUsers());
  };

  const handleSubmitFilter = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const filterVille = formData.get("filterVille");

    return dispatch(filterVill(filterVille));
  };

  const handleClearVille = () => {
    return dispatch(removeFilter());
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <fieldset className="border border-gray-400 py-4 px-6">
          <legend className="px-4">Ajouter Un Utilitateur</legend>
          <div className="flex justify-between items-center gap-3 pb-4 ">
            <input
              type="text"
              name="firstName"
              defaultValue={editUser ? editUser.firstName : ""}
              placeholder="First Name"
              className="border border-gray-400 rounded-sm px-3 py-1
            w-1/2"
            />
            <input
              name="lastName"
              type="text"
              defaultValue={editUser ? editUser.lastName : ""}
              placeholder="Last Name"
              className="border border-gray-400 rounded-sm px-3 py-1
            w-1/2"
            />
          </div>
          <div className="mb-4">
            <select
              name="ville"
              className="border boreder-gray-400 rounded-sm px-3 py-1 w-full"
            >
              {data.ville.map((item, index) => {
                return (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex justify-end items-center gap-5 w-full">
            <button
              className="border text-white bg-cyan-500 py-2 px-4 rounded-sm transition-all ease-out duration-300 hover:bg-cyan-600"
              type="submit"
            >
              {editUser ? "Modifier" : "Ajouter"}
            </button>
            <button
              type="button"
              onClick={handleClearAll}
              className="border  border-cyan-500 py-2 px-4 rounded-sm transition-all ease-out duration-300 hover:bg-cyan-500 hover:text-white"
            >
              Clear All
            </button>
          </div>
        </fieldset>
      </form>
      <fieldset className="border border-gray-400 py-4 mb-4 px-6">
        <legend className="px-4">Filter Par Ville</legend>
        <form onSubmit={handleSubmitFilter}>
          <div className="mb-4">
            <select
              name="filterVille"
              className="border boreder-gray-400 rounded-sm px-3 py-1 w-full"
            >
              {data.ville.map((item, index) => {
                return (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex justify-end items-center gap-5 w-full">
            <button
              type="submit"
              className="border text-white bg-cyan-500 py-2 px-4 rounded-sm transition-all ease-out duration-300 hover:bg-cyan-600"
            >
              Filter
            </button>
            <button
              onClick={handleClearVille}
              type="button"
              className="border  border-cyan-500 py-2 px-4 rounded-sm transition-all ease-out duration-300 hover:bg-cyan-500 hover:text-white"
            >
              Clear
            </button>
          </div>
        </form>
      </fieldset>
      <div>
        {data.users.length > 0 || data.usersFilter > 0 ? (
          <table className="border border-gray-400 w-3/4 mx-auto">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">#</th>
                <th className="border border-gray-400 px-4 py-2">First Name</th>
                <th className="border border-gray-400 px-4 py-2">Last Name</th>
                <th className="border border-gray-400 px-4 py-2">Ville</th>
                <th className="border border-gray-400 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.usersFilter
                ? data.usersFilter.map((item, index) => {
                    return (
                      <Table
                        item={item}
                        key={index}
                        setEditUser={setEditUser}
                      />
                    );
                  })
                : data.users.map((item, index) => {
                    return (
                      <Table
                        item={item}
                        key={index}
                        setEditUser={setEditUser}
                      />
                    );
                  })}
            </tbody>
          </table>
        ) : (
          <p className="text-center">No Data</p>
        )}
      </div>
    </div>
  );
}

export default App;
