import { IoIosArrowDown } from "react-icons/io";
import {
  List,
  ListItems,
  SubMenu,
  Wrapper,
  WrapperIcon,
} from "./Header-Styled";

interface INavLinkProps {
  title: string;
  className: string;
  icon: any;
  url: string;
}

const NavLink = ({
  icon = <></>,
  className,
  title,
  url,
}: Partial<INavLinkProps>) => {
  const DynamicIcon = () => icon;
  return (
    <ListItems className={className}>
      <a href={url}>{title}</a>
      <WrapperIcon>
        <DynamicIcon />
      </WrapperIcon>
    </ListItems>
  );
};

const NavLinks = () => {
  return (
    <div className="nav-links">
      <List className="menu-list">
        <NavLink title="Home" url="/" />
        <NavLink
          className={"flex items-center space-x-0.5"}
          icon={<IoIosArrowDown />}
          title="Tools"
          url="/tools"
        />
        <SubMenu>
          <div>tools</div>
          <List>
            <NavLink
              title="Arab Block Explorer"
              className="sub-menu-item"
              url="/"
            />
            <NavLink
              title="Arab Wallet"
              className="sub-menu-item"
              url="/arab-wallet"
            />
            <NavLink title="Arab Dex" className="sub-menu-item" url="/dex" />
            <NavLink
              title="Arab Tokenomics"
              className="sub-menu-item"
              url="/tokenomics"
            />
          </List>
        </SubMenu>
        <NavLink
          icon={<IoIosArrowDown />}
          title="Developers"
          className={"flex items-center space-x-0.5"}
          url="/developers"
        />
        <NavLink title="Arab Academy" url="/academy" />
        <NavLink title="Community" url="/community" />
        <NavLink title="Whitepaper" url="/whitepaper.pdf" />
      </List>
    </div>
  );
};

export default NavLinks;
