import NavButton from "../User/NavButton";

function Header(props) {
    return (
        <div className="flex justify-between m-auto">
            <h1 className="m-5 text-2xl font-inter font-bold text-green p-2 hover:cursor-pointer">MyScholar</h1>

            <NavButton loggedIn={props.loggedIn} />
        </div>
    )
}

export default Header;