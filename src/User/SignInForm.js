import { 
Link
} from "react-router-dom";


function SignInForm({ setLoggedIn }) {

    setLoggedIn(false);

    return (
        <div className="flex justify-center m-auto p-10 rounded-xl bg-darkGreen max-w-sm shadow-2xl">
            <div className="min-w-full">
                <div className="flex justify-center">
                    <h2 className="text-xl text-yellow font-bold font-inter justify-center"> Log In </h2>
                </div>

                <p className="font-inter text-white pt-4 pb-2 text-sm">Email:</p>
                <input className="min-w-full bg-darkGreen border-4 border-green rounded-xl text-white focus:outline-none p-1 pl-3 pr-3"/>

                <p className="font-inter text-white pt-4 pb-2 text-sm">Password:</p>
                <input className="min-w-full bg-darkGreen border-4 border-green rounded-xl text-white focus:outline-none p-1 pl-3 pr-3"/>

                <div className="flex flex-col p-14 pr-20 pl-20">
                    <Link to="/" className="flex justify-center">
                        <button className="m-2 font-inter text-dark text-base border-2 p-1.5 pr-4 pl-4 bg-green rounded-lg hover:cursor-pointer" onClick={() => setLoggedIn(true)}> Sign In </button>
                    </Link>
                    <Link to="/signup" className="flex justify-center">
                        <button className="font-inter text-white text-sm tracking-wider"> Create Account </button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default SignInForm