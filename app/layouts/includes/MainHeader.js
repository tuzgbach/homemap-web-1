import { debounce } from "debounce";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";

export default function MainLayout() {
  const [items, setItems] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchName = debounce(async (event) => {
    const searchTerm = event.target.value.trim();

    if (searchTerm === "") {
      setItems([]);
      return;
    }

    setIsSearching(true);

    try {
      const response = await fetch(
        `/api/products/search-by-name/${searchTerm}`
      );
      const result = await response.json();

      if (result) {
        setItems(result);
      } else {
        setItems([]);
      }
    } catch (error) {
      console.error(error);
      alert("Đã có lỗi xảy ra trong quá trình tìm kiếm.");
    } finally {
      setIsSearching(false);
    }
  }, 500);

  return (
    <div id="MainHeader" className="border-b">
      <nav className="flex items-center justify-between w-full mx-auto max-w-screen-xl">
        <div className="flex items-center w-full bg-white">
          <div className="flex lg:justify-start justify-between gap-10 max-w-xl w-full px-3 py-5 mx-auto">
            <Link href="/">
              <img
                className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-80"
                src="/images/Homemap.svg"
                alt="Logo"
              />
            </Link>

            <div className="w-[140%] relative flex items-center border border-gray-300 rounded">
              <input
                className="w-full py-2 px-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                onChange={handleSearchName}
                placeholder="Tìm kiếm sản phẩm yêu thích"
                type="text"
              />

              <button className="absolute right-2 top-2">
                {isSearching ? (
                  <BiLoaderCircle className="animate-spin" size={22} />
                ) : (
                  <AiOutlineSearch size={22} />
                )}
              </button>

              {items.length > 0 && (
                <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded">
                  {items.map((item) => (
                    <div className="p-2 border-b" key={item.id}>
                      <Link
                        href={`/product/${item?.id}`}
                        className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2">
                        <div className="flex items-center">
                          <img
                            className="w-8 h-8 rounded-md"
                            src={item?.url + "/40"}
                            alt={item?.title}
                          />
                          <div className="ml-2 truncate">{item?.title}</div>
                        </div>
                        <div>£{(item?.price / 100).toFixed(2)}</div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button className="search-button">Tìm kiếm</button>
            <style jsx>{`
              .custom-width {
                width: 140%; /* Đặt chiều dài là 145% */
                margin-left: 200px;
              }

              .search-button {
                background-color: #222;
                color: #fff;
                font-size: 14px;
                font-weight: normal;
                padding: 8px 16px;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s;
                border: none;
                white-space: nowrap; /* Giữ chữ không xuống dòng */
              }
            `}</style>
          </div>
        </div>
      </nav>
    </div>
  );
}
