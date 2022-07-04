import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./userSlice";

export default function Users() {
  const count = useSelector((store) => store.counter);
  const users = useSelector((store) => store.userReducer);

  const dispatch = useDispatch();

  return (
    <div>
      hello from users component
      {count.value}
      <button
        onClick={() => {
          dispatch(addUser());
        }}
      >
        add user
      </button>
    </div>
  )
}