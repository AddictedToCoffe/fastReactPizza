import { useSelector } from "react-redux";
import { getUser } from "../cart/cartSlice";

function Username() {
  const username = useSelector(getUser);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
