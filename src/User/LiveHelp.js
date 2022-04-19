import LiveHelpImg from '.././resources/call-center-technology.png'

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

export default LiveHelp