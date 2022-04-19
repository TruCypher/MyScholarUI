
function Form() {

    return (
        <div>
            <h1 className='text-xl text-yellow font-bold font-inter justify-center m-5 p-2'>Scholarship Forms</h1>

            <div className="flex mb-10">
                <p className="font-inter text-white font-bold pt-4 text-sm pl-2 ml-5 mr-5">First Name:</p>
                <input placeholder="First name" className="w-80 bg-darkGreen border-4 border-green rounded-xl mt-2 text-white focus:outline-none p-1 pl-3 pr-3"/>
            </div>

            <div className="flex mb-10">
                <p className="font-inter text-white font-bold pt-4 text-sm pl-2 ml-5 mr-5">Last Name:</p>
                <input placeholder="Last name" className="w-80 bg-darkGreen border-4 border-green rounded-xl mt-2 text-white focus:outline-none p-1 pl-3 pr-3"/>
            </div>
            
            <div className="flex mb-10">
                <p className="font-inter text-white font-bold pt-4 text-sm pl-2 ml-5 mr-5">Date Of Birth:</p>
                <input placeholder="MM-DD-YYYY" className="w-80 bg-darkGreen border-4 border-green rounded-xl mt-2 text-white focus:outline-none p-1 pl-3 pr-3"/>
            </div>

            <div className="flex mb-10">
                <p className="font-inter text-white font-bold pt-4 text-sm pl-2 ml-5 mr-5">Phone Number:</p>
                <input placeholder="Phone Number" className="w-80 bg-darkGreen border-4 border-green rounded-xl mt-2 text-white focus:outline-none p-1 pl-3 pr-3"/>
            </div>

            <div className="flex mb-10">
                <p className="font-inter text-white font-bold pt-4 text-sm pl-2 ml-5 mr-5">Ethnicity:</p>
                <input placeholder="Ethnicity" className="w-80 bg-darkGreen border-4 border-green rounded-xl mt-2 text-white focus:outline-none p-1 pl-3 pr-3"/>
            </div>

            <button className='font-inter m-5 text-dark text-base border-2 pl-5 pr-5 pt-2 pb-2  bg-green rounded-lg'>Submit</button>
        </div>
    )
}

export default Form;