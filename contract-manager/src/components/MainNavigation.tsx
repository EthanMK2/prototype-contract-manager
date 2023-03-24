import { NavLink, Outlet } from "react-router-dom";

const MainNavigation = () => {
    return (<>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/">Create Job</NavLink>
                </li>
                <li>
                    <NavLink to="/">Estimate</NavLink>
                </li>
                <li>
                    <NavLink to="/">Calculate</NavLink>
                </li>
                <li>
                    <NavLink to="/">Sourcing</NavLink>
                </li>
                <li>
                    <NavLink to="/">Closing Inspection</NavLink>
                </li>
                <li>
                    <NavLink to="/">History</NavLink>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>)
}

export default MainNavigation;