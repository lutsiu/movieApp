import { BsSearch } from "react-icons/bs";
export default function SearchBar() {
  return (
    <form className=" bg-gray-800 w-[15rem] md:w-[20rem]  xl:w-[25rem] 2xl:w-[30rem] h-[5.6rem] rounded-2xl flex items-center py-[1.6rem] pl-[1rem] gap-[1.5rem]">
      <BsSearch className="flex-1 min-w-[2rem] md:min-w-[2.4rem] min-h-[2rem] md:min-h-[2.4rem] cursor-pointer" />
      <input
        type="text"
        placeholder="Search"
        className="flex-[9] bg-transparent text-2xl md:text-3xl outline-none pr-[1rem] overflow-hidden"
      />
    </form>
  );
}
