import React, {useState} from 'react'

function Form() {

    const [submit, setSubmit] = useState(false)
    const [fn, setFn] = useState("")
    const [ln, setLn] = useState("")
    const [dob, setDob] = useState("")
    const [phone, setPhone] = useState("")
    const [eth, setEth] = useState("")

    return (
        <div>
            <h1 className='text-xl text-yellow font-bold font-inter justify-center m-5 p-2'>Scholarship Forms</h1>

            {
                submit 
                    ?   <SavedForm firstName={fn} lastName={ln} dob={dob} phone={phone} ethnicity={eth} /> 
                    :   <ActualForm setFn={setFn} setLn={setLn} setDob={setDob} setPhone={setPhone} setEth={setEth} setSubmit={setSubmit} />
            }
        </div>
    )
}

function SavedForm({ firstName, lastName, dob, phone, ethnicity }) {
    return (
        <>
            <div className="flex flex-col bg-darkCyan shadow-2xl rounded-lg p-10 max-w-lg m-5 ml-6">
                <div className="flex justify-between mb-10">
                    <div className="flex">
                        <h2 className="font-inter font-bold text-lg text-white mr-5">First Name:</h2>
                        <p className="font-inter text-base text-white pt-0.5"> {firstName} </p>
                    </div>
                    <div className="flex">
                        <h2 className="font-inter font-bold text-lg text-white mr-5">Last Name:</h2>
                        <p className="font-inter text-base text-white pt-0.5"> {lastName} </p>
                    </div>
                </div>

                <div className="flex mb-10">
                    <h2 className="font-inter font-bold text-lg text-white mr-5">Date Of birth:</h2>
                    <p className="font-inter text-base text-white pt-0.5"> { dob } </p>
                </div>

                <div className="flex mb-10">
                    <h2 className="font-inter font-bold text-lg text-white mr-5">Phone Number:</h2>
                    <p className="font-inter text-base text-white pt-0.5"> {phone} </p>
                </div>

                <div className="flex">
                    <h2 className="font-inter font-bold text-lg text-white mr-5">Ethnicity:</h2>
                    <p className="font-inter text-base text-white pt-0.5"> { ethnicity } </p>
                </div>
            </div>
        </>
    )
}

function ActualForm({ setFn, setLn, setDob, setPhone, setEth, setSubmit }) {
    return (
        <>
            <div className="flex mb-10">
                <p className="font-inter text-white font-bold pt-4 text-sm pl-2 ml-5 mr-5">First Name:</p>
                <input 
                    placeholder="First name" 
                    className="w-80 bg-darkGreen border-4 border-green rounded-xl mt-2 text-white focus:outline-none p-1 pl-3 pr-3"
                    onChange={(e) => setFn(e.target.value)}
                />
            </div>

            <div className="flex mb-10">
                <p className="font-inter text-white font-bold pt-4 text-sm pl-2 ml-5 mr-5">Last Name:</p>
                <input 
                    placeholder="Last name" 
                    className="w-80 bg-darkGreen border-4 border-green rounded-xl mt-2 text-white focus:outline-none p-1 pl-3 pr-3"
                    onChange={(e) => setLn(e.target.value)}
                />
            </div>
            
            <div className="flex mb-10">
                <p className="font-inter text-white font-bold pt-4 text-sm pl-2 ml-5 mr-5">Date Of Birth:</p>
                <input 
                    placeholder="MM-DD-YYYY" 
                    className="w-80 bg-darkGreen border-4 border-green rounded-xl mt-2 text-white focus:outline-none p-1 pl-3 pr-3"
                    onChange={(e) => setDob(e.target.value)}
                />
            </div>

            <div className="flex mb-10">
                <p className="font-inter text-white font-bold pt-4 text-sm pl-2 ml-5 mr-5">Phone Number:</p>
                <input 
                    placeholder="Phone Number" 
                    className="w-80 bg-darkGreen border-4 border-green rounded-xl mt-2 text-white focus:outline-none p-1 pl-3 pr-3"
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            <div className="flex mb-10">
                <p className="font-inter text-white font-bold pt-4 text-sm pl-2 ml-5 mr-5">Ethnicity:</p>
                <input 
                    placeholder="Ethnicity" 
                    className="w-80 bg-darkGreen border-4 border-green rounded-xl mt-2 text-white focus:outline-none p-1 pl-3 pr-3"
                    onChange={(e) => setEth(e.target.value)}
                />
            </div>

            <button className='font-inter m-5 text-dark text-base border-2 pl-5 pr-5 pt-2 pb-2  bg-green rounded-lg' onClick={() => setSubmit(true)}>Submit</button>
        </>
    )
}

export default Form;