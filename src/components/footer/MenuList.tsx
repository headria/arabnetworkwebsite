interface MenuListProps {
  title: string;
  menus: { title: string; url: string }[];
}

const MenuList = ({ title, menus = [] }: MenuListProps) => {
  return (
    <div className="footer-links">
      <h5 className="mt-3 font-semibold">{title}</h5>
      <ul className="link-list space-y-3 mt-3">
        {menus?.map((item, i) => (
          <li key={i}>
            <a className={"hover:text-Blue hover:font-medium"} href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
