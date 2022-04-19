
function Scholarship () {
    return (
        <div className='flex grow flex-col m-5 mr-10'>
            <div className='flex'>
                <h1 className='text-xl text-yellow font-bold font-inter justify-center mb-5 pl-2'>Personalized Scholarship List</h1>
            </div>
            
            <div className='flex justify-between border-4 border-green p-5 rounded-xl'>
                <div>
                    <h1 className='text-white text-2xl font-bold font-inter mb-4'>Fafsa</h1> 
                    <p className='text-white font-inter'>$9000 Recievable</p>
                </div>
                <div>
                    <p className='text-white font-inter mb-4'>Due May, 5 2022</p>
                    <p className='text-white font-inter'>Essay Required</p>
                </div> 
            </div>
        </div>
        )
}

export default Scholarship