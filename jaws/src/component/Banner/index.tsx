import { Menu } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

interface MenuItem {
  key: string;
  label: string;
  path: string;
}

export const Banner: FC = () => {
  const menuItems: MenuItem[] = [
    { key: 'progress', label: 'Progress', path: '/' },
    { key: 'awards', label: 'Awards', path: '/awards' },
    { key: 'community', label: 'Community', path: '/community' },
    { key: 'journey', label: 'Journey', path: '/journey' },
    { key: 'ecoTracking', label: 'Eco Tracking', path: '/ecoTracking' },
  ];

  return (
    <Menu
      mode="horizontal"
      style={{
        minWidth: 0,
        flex: 'auto',
        backgroundColor: '#7fb9ba',
        fontSize: '12px',
        justifyContent: "center",
        fontWeight: "700"
      }}
    >
      {menuItems.map(item => (
        <Menu.Item key={item.key} >
          <Link to={item.path}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};