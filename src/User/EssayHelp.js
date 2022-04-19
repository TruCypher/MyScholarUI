import LiveHelpImg from '.././resources/call-center-technology.png'

function EssayHelp() {
    return (
        <div className="flex w-screen">
            <TipsAndTricks />
            <PopularEssayExamples />
            <LiveHelp />
        </div>
    )
}

function LiveHelp() {
    return (
        <div className='mt-12 ml-10 mr-10 w-2/6'>
            <div className='justify-left'>
                <h3 className='text-white font-bold font-inter text-lg'> Live Essay Help </h3>
            </div>
            <img src={LiveHelpImg} alt="LiveHelpImg" width="400" height='300' />
            <div className='ml-36'>
                <button className='font-inter text-dark text-base border-2 p-3 bg-green rounded-lg justify-center'
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://zoom.us/join';
                    }}
                    > Call Us Now </button>
                </div>
        </div>
    )
}


function TipsAndTricks() {
    return (
        <div className='ml-10 mr-10 w-2/6'>
            <div className='flex justify-left'>
                <h1 className='text-xl text-yellow font-bold font-inter justify-center mb-5'>Essay Help</h1>
            </div>
            <div className='bg-darkCyan bg-opacity-70 pt-2 pb-2 rounded-lg flex justify-center'>
                <div className='p-2'>
                    <h2 className='text-white font-bold font-inter text-lg m-3'> Tips and Tricks </h2>
                    <p className='text-white font-base font-inter m-3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </div>

            </div>
            
        </div>
    )
}

function PopularEssayExamples() {
    return (

        <div className='mt-12 ml-10 mr-10 w-2/6'>
            <div className='bg-darkCyan bg-opacity-70 pt-2 pb-2 rounded-lg flex justify-center'>
                <div className='p-2'>
                    <h2 className='text-white font-bold font-inter text-lg m-3'> Popular Essay Examples </h2>
                    <p className='text-white font-base font-inter text-base m-3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </div>

            </div>

        </div>
    )
}

export default EssayHelp