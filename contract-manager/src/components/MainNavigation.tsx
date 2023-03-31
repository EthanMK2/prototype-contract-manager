import { NavLink, Outlet } from "react-router-dom";

const MainNavigation = () => {
    return (<>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/createJob">Create Job</NavLink>
                </li>
                <li>
                    <NavLink to="/estimate">Estimate</NavLink>
                </li>
                <li>
                    <NavLink to="/calculate">Calculate</NavLink>
                </li>
                <li>
                    <NavLink to="/sourcing">Sourcing</NavLink>
                </li>
                <li>
                    <NavLink to="/inspection">Closing Inspection</NavLink>
                </li>
                <li>
                    <NavLink to="/history">History</NavLink>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>)
}

export default MainNavigation;