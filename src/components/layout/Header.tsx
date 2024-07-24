
import { Link } from 'react-router-dom';
import './Header.css'; // 导入样式文件

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">MyApp</h1>
        <nav>
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
