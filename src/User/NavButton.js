import { 
Link,
useLocation,
} from "react-router-dom";


function NavButton(props) {

    const nonSelectedClass = 'm-5 font-inter text-white text-base p-3 hover:cursor-pointer'
    const SelectedClass = 'm-5 font-inter text-white text-base p-3 hover:cursor-pointerm-5 font-inter text-dark text-base border-2 p-3 bg-green rounded-lg hover:cursor-pointer'

    const location = useLocation()
    const path = location.pathname.toLocaleLowerCase()

    if (props.loggedIn) {
        return (
        <>
            <div className="flex">
                <Link to='/form'>
                    <div className={path === '/form' ? SelectedClass : nonSelectedClass}>Forms</div>
                </Link>

                <Link to='/scholarship'>
                    <div className={path === '/scholarship' ? SelectedClass : nonSelectedClass}>Scholarship</div>
                </Link>

                <Link to='/essayshelp'>
                    <div className={path === '/essayshelp' ? SelectedClass : nonSelectedClass}>Essays Help</div>
                </Link>

                <Link to='/'>
                    <div className={path === '/' ? SelectedClass : nonSelectedClass}>Profile</div>
                </Link>
            </div>
        </>
        )
    }

    return null;
}

export default NavButton;