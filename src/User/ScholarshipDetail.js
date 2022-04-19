import { 
    useParams 
} from "react-router-dom";

function ScholarshipDetail() {

    const scholarShips = [
        {
            name: "Fafsa",
            date: "May, 5 2022",
            price: "$9000 recieveable",
        },
        {
            name: "American Legion",
            date: "May, 7 2022",
            price: "$10,000 recieveable",
        },
        {
            name: "AXA Achievement",
            date: "June, 3 2022",
            price: "$7000 recieveable",
        },
        {
            name: "SHPE Scholar",
            date: "April, 1 2022",
            price: "$11,0000 recieveable",
        },
        {
            name: "Do Something Scholarship",
            date: "March, 20 2022",
            price: "$100,0000 recieveable",
        },
        {
            name: "Burger King Scholars",
            date: "April, 25 2022",
            price: "$25,000 recieveable",
        },
        {
            name: "SHPE Scholar",
            date: "April, 1 2022",
            price: "$11,0000 recieveable",
        },
        {
            name: "Elks Foundation Most Valuable Students Scholarship",
            date: "May, 21 2022",
            price: "$15,0000 recieveable",
        },
        {
            name: "Doodle 4 Google",
            date: "April, 12 2022",
            price: "$30,0000 recieveable",
        },
    ]

    let params = useParams();
    let searchScholar = params.scholarname

    let currentScholarObj = scholarShips.find(scholar => scholar.name.toLowerCase().includes(searchScholar.toLowerCase()))

    if (!currentScholarObj) {
        return (
            <div className="m-5 p-2 flex justify-center">
                <h1 className='text-xl text-red font-bold font-inter justify-center mb-2'>Scholarship Not Found</h1>
            </div>
        )
    }

    return (
        <div className="m-5 p-2">
            <h1 className='text-xl text-yellow font-bold font-inter justify-center mb-2'>Scholarships Detail</h1>
            <p className='text-grey text-sm font-inter'>Qualification: Hispanic, Femail, Computer Science</p>

            <div className="flex w-full">
                <div className="flex flex-col max-w-lg">
                    <BoxMessage 
                        title={currentScholarObj.name}
                        body={[currentScholarObj.price, currentScholarObj.date]}
                    />

                    <BoxMessage 
                        title='Summary'
                        body={['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']}
                    />
                </div>
                <div className="m-8 w-full">
                    <h1 className="font-inter text-lg text-white font-bold mb-1">Essay: </h1>
                    <textarea className="min-h-full min-w-full bg-darkGreen border-4 border-green rounded-xl text-white focus:outline-none p-1 pl-3 pr-3"></textarea>
                </div>
            </div>

            <div className="flex min-w-full justify-center mt-10">
                <button className="m-2 font-inter text-dark text-base border-2 p-1.5 pr-6 pl-6 bg-green rounded-lg hover:cursor-pointer"> Apply Now </button>
            </div>
        </div>
    )
}

function BoxMessage({title, body}) {
    console.log(body)
    return (
        <div className='mt-10 shadow-lg'>
            <div className='bg-darkCyan bg-opacity-70 pt-2 pb-2 rounded-lg flex'>
                <div className='p-2'>
                    <h2 className='text-white font-bold font-inter text-lg m-3'> {title} </h2>
                    {
                        body.map(b => {
                            return (
                                <p className='text-white font-inter text-sm m-3'> {b} </p>
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )
}

export default ScholarshipDetail