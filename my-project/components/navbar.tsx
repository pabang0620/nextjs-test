import { useRecoilState } from "recoil";
import { loginState } from "../pages/state/loginState";

export default function Navbar() {
  const loginstatus = useRecoilState(loginState);
  return { loginstatus };
}
