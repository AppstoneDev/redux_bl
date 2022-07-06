import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, getUsers, getUsers2 } from "./userSlice";

export default function Users() {
  const count = useSelector((store) => store.counter);
  const users = useSelector((store) => store.userReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(10))
  }, [count.value]);

  return (
    <div>
      {users.userList.map((user, index) =>
        <div key={index}>
          {user.first_name} {user.last_name}
        </div>
      )}

      <button>
        add user
      </button>
    </div>
  )
}