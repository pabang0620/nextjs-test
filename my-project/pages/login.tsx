import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "./state/loginState";

export default function Login() {
  const [inputIDvalue, setInputIDvalue] = useState("");
  const [inputPWvalue, setInputPWvalue] = useState("");
  const [loginstate, setLoginstate] = useRecoilState(loginState);

  const router = useRouter();
  const login = () => {
    if (
      localStorage.getItem("id") === inputIDvalue &&
      localStorage.getItem("pw") === inputPWvalue
    ) {
      setLoginstate(true);
      // console.log(loginstate);
    }
    if (loginstate) {
      alert("state 값 상태");
      router.push("/openAIapi");
    }
    if (loginstate === false) {
      alert("state 값 false 상태");
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/4 h-2/4 bg-red-200 flex flex-col justify-center items-center ">
        <p className="mb-2">아이디</p>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputIDvalue(e.target.value)
          }
          value={inputIDvalue}
          className="w-1/2 h-8 outline-none p-2 mb-4"
          type="text"
        />
        <p className="mb-2">패스워드</p>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputPWvalue(e.target.value)
          }
          value={inputPWvalue}
          className="w-1/2 h-8 outline-none p-2 mb-8"
          type="password"
        />
        {/* <Link */}
        <button
          className="mt-2 w-1/2 h-8 bg-red-300 text-white flex justify-center items-center"
          // href="/openAIapi"
          onClick={login}
        >
          로그인
        </button>
        {/* </Link> */}
        <Link
          href="/join"
          className="mt-2 w-1/2 h-8 bg-red-300 text-white flex justify-center items-center"
        >
          가입하기
        </Link>
      </div>
    </div>
  );
}
