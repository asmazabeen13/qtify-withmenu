import { ReactComponent as SearchIcon } from "./Search-icon.svg";
import Menu from "../Menu"; // Make sure to import the Menu component

const SearchBox = () => {
  return (
    <div style={{ position: 'relative' }}>
      <form
        style={{
          display: "flex",
          minWidth: "378px",
        }}
      >
        <input
          placeholder="Search an album of your choice"
          style={{
            flex: 1,
            borderRadius: "8px 0px 0px 8px",
            padding: "10px", // Add padding for better styling
          }}
        />
        <button
          style={{
            width: "66px",
            height: "48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0px 8px 8px 0px",
            padding: "8px",
            cursor: "pointer",
          }}
        >
          <SearchIcon width={20} height={20} />
        </button>
      </form>
      <Menu data={[1, 2, 3, 4, 5, 6]} />
    </div>
  );
};

export default SearchBox;
