import { useState, useEffect } from "react";
import Link from "next/link";

export default function Join() {
  const [idvalue, setIdvalue] = useState("");
  const [pwvalue, setPwvalue] = useState("");
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/4 h-2/4 bg-red-200 flex flex-col justify-center items-center ">
        <p className="mb-2">아이디</p>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setIdvalue(e.target.value)
          }
          value={idvalue}
          className="w-1/2 h-8 outline-none p-2 mb-4"
          type="text"
        />
        <p className="mb-2">패스워드</p>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPwvalue(e.target.value)
          }
          value={pwvalue}
          className="w-1/2 h-8 outline-none p-2 mb-8"
          type="password"
        />
        <Link
          href="/login"
          onClick={() => {
            localStorage.setItem("id", idvalue);
            localStorage.setItem("pw", pwvalue);
            alert("등록되었습니다");
          }}
          className="mt-2 w-1/2 h-8 bg-red-300 text-white flex justify-center items-center"
        >
          등록
        </Link>
      </div>
    </div>
  );
}
