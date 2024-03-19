import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { arrowDownIcon, bookMarkIcon, exploreIcon, hobbiesIcon, logo, notificationsIcon, searchIcon, shopChartIcon } from '../assets/images';
import Button from './FormProps';

const NavSection = () => {
    return (
        <nav className='custom-nav-style d-flex justify-content-between align-items-center mx-5 px-5'>
            <img src={logo} alt="logo" />
            <form className='searchInput d-flex'>
                <input type="search" placeholder="Search here..."/>
                <button type="submit">
                    <img src={searchIcon} alt="search icon" />
                </button>
            </form>
            <div className='d-flex justify-content-center align-items-center'>
                <DropDown
                    src={exploreIcon}
                    label="Explore"
                    dropList={["People - Community",
                        "Places - Venues",
                        "Programs - Events",
                        "Products - Store",
                        "Blogs"
                    ]}
                />
                <DropDown
                    src={hobbiesIcon}
                    label="Hobbies"
                />
                <picture className='grid gap-3'>
                    <img src={bookMarkIcon} alt="bookmark icon" className='px-3 g-row-6' />
                    <img src={notificationsIcon} alt="notification bell" className='px-3 g-row-6' />
                    <img src={shopChartIcon} alt="shop chart" className='px-3 g-row-6' />
                </picture>
                <Button
                    label="Sign In"
                />
            </div>
        </nav>
    )
}

const DropDown = (props) => {

    const { label, src, dropList } = props;
    return (
        <div className="dropdown">
            <span className=" dropdown-toggle d-flex align-items-center cursor-pointer" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={src} alt="logo" className='p-2' />
                <h6 className='m-0 h6'>{label}</h6>
                <img src={arrowDownIcon} alt="arrow down" className='p-3' />
            </span>
            {dropList && <ul className="dropdown-content dropdown-menu">
                {dropList.map((item, index) => (
                    <li key={index} className={`dropdown-content--li dropdown-item d-flex align-items-center ${index === dropList.length - 1 ? "border-0" : ""}`}>{item}</li>
                ))}
            </ul>}
        </div>
    )
}

export default NavSection;
