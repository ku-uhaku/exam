const addUser = (users) => {
  return {
    type: "ADD_USERS",
    payload: users,
  };
};
const clearUsers = () => {
  return {
    type: "CLEAR_USERS",
    payload: [],
  };
};
const filterVill = (idVille) => {
  return {
    type: "FILTER_VILLE",
    payload: idVille,
  };
};
const removeFilter = () => {
  return {
    type: "REMOVE_FILTER",
    payload: [],
  };
};
const ClearVille = (users) => {
  return {
    type: "CLEAR_VILLE",
    payload: users,
  };
};
const removeUser = (id) => {
  return {
    type: "REMOVE_USER",
    payload: id,
  };
};
const editAUser = (user) => {
  return {
    type: "EDIT_USER",
    payload: user,
  };
};
export {
  addUser,
  clearUsers,
  filterVill,
  removeFilter,
  ClearVille,
  removeUser,
  editAUser,
};
