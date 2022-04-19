
function Scholarship () {
    
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

    return (
        <div className='flex grow flex-col m-5 mr-10'>
            <div className='flex'>
                <h1 className='text-xl text-yellow font-bold font-inter justify-center mb-5 pl-2'>Personalized Scholarship List</h1>
            </div>
            
            {
                scholarShips.map(scholar => {
                    return (
                        <div className='flex justify-between border-4 border-green p-5 rounded-xl mb-8'>
                            <div>
                                <h1 className='text-white text-2xl font-bold font-inter mb-4'>{scholar.name}</h1> 
                                <p className='text-white font-inter'>{scholar.price}</p>
                            </div>
                            <div>
                                <p className='text-white font-inter mb-4'>{scholar.date}</p>
                                <p className='text-white font-inter'>Essay Required</p>
                            </div> 
                        </div>
                    )
                })
            }
            
        </div>
        )
}

export default Scholarship