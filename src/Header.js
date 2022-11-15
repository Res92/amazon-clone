import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }] = useStateValue(); // console.log(basket);
    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            {/* logo on the left -> img */}
            <Link to={!user && "/login" || "/"}>
                <img
                    className="header__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>

            {/* Search box */}
            <div className='header__search'>
                <input type="text" className='header__searchInput' />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* Links */}
            <div className='header__nav'>
                {/* 1st */}
                <Link to="/login" className='header__link'>
                    <div onClick={handleAuthenticaton} className='header__option'>
                        <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>                        
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                {/* 2st */}
                <Link to="/login" className='header__link'>
                    <div className='header__option'>
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                {/* 3st */}
                <Link to="/login" className='header__link'>
                    <div className='header__option'>
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
            </div>
            {/* Basket icon with number */}
            <Link to='/checkout' className='header__link'>
                <div className='header__optionBasket'>
                    {/* Shopping basket icon */}
                    <ShoppingBasketIcon />
                    {/* Number of items in the basket */}
                    <span className='header__optionLineTwo header__basetCount'>
                        {basket?.length}
                    </span>
                </div>
            </Link>
        </nav>
    )
}

export default Header;
