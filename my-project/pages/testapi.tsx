export default function Testapi() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/4 h-2/4 bg-red-200 flex flex-col justify-center items-center ">
        <p className="mb-2">아이디</p>
        <input className="w-1/2 h-8 outline-none p-2 mb-4" type="text" />
        <p className="mb-2">패스워드</p>
        <input className="w-1/2 h-8 outline-none p-2 mb-8" type="password" />
        <button className="mt-2 w-1/2 h-8 bg-sky-300">로그인</button>
      </div>
    </div>
  );
}
