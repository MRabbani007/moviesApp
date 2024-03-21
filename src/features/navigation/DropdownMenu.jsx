const DropdownMenu = ({ items, handledropdown }) => {
  return (
    <ul className="dropdown-menu-content bg-slate-700">
      {items.map((item, index) => {
        return (
          <li
            className="hover:text-slate-700 hover:bg-slate-300 duration-300 cursor-pointer p-2"
            key={index}
            onClick={() => handledropdown(item)}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default DropdownMenu;
