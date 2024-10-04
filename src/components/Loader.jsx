import { AiOutlineLoading } from "react-icons/ai";

export default function Loader() {
  return (
    <div className="self-center my-6 text-xl md:text-2xl text-gray-300 flex items-center justify-center gap-3">
      <p>Loading images</p>{" "}
      <AiOutlineLoading className="animate-spin"></AiOutlineLoading>
    </div>
  );
}
