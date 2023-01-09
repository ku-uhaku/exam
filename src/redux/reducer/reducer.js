const initialState = {
  ville: [
    {
      id: 1,
      name: "Paris",
    },
    {
      id: 2,
      name: "Lyon",
    },
    {
      id: 3,
      name: "Marseille",
    },
    {
      id: 4,
      name: "Toulouse",
    },
  ],
  users: [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      ville: 1,
    },
    {
      id: 2,
      firstName: "Paul",
      lastName: "McCartney",
      ville: 2,
    },
    {
      id: 3,
      firstName: "George",
      lastName: "Harrison",
      ville: 3,
    },
    {
      id: 4,
      firstName: "Ringo",
      lastName: "Starr",
      ville: 1,
    },
  ],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USERS":
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: state.users.length + 1,
            ...action.payload,
          },
        ],
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };
    case "FILTER_VILLE":
      return {
        ...state,
        usersFilter: [
          ...state.users.filter(
            (user) => user.ville === Number(action.payload)
          ),
        ],
      };
    case "REMOVE_FILTER":
      const { usersFilter, ...rest } = state;
      return rest;
    case "CLEAR_VILLE":
      return {
        ...state,
        users: [
          ...state.users.filter((user) => user.ville !== action.payload.ville),
        ],
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: [...state.users.filter((user) => user.id !== action.payload)],
      };
    case "EDIT_USER":
      return {
        ...state,
        users: [
          ...state.users.map((user) => {
            if (user.id === action.payload.id) {
              return action.payload;
            }
            return user;
          }),
        ],
      }; //ke what
    default:
      return state;
  }
};
export default mainReducer;
