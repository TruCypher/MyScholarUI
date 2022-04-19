import React, { useState } from 'react';

function Wizard() {
    const [wizard, setWizard] = useState(2)
    const [selectedButton, setSelectedButton] = useState(2)

    const nonSelectedClassButton = 'text-white font-inter p-3'
    const selectedClassbutton = 'font-inter text-dark text-base border-2 p-3 bg-green rounded-lg'

    let CurrWizardComponent;
    if (wizard === 0) {
        CurrWizardComponent = MyEssay 
    } else if (wizard === 1) {
        CurrWizardComponent = AppliedScholarship
    } else {
        CurrWizardComponent = ScholarDueSoon 
    }
    
    return (
        <div className='flex grow flex-col'>
            <div>
                <button className={selectedButton === 0 ? selectedClassbutton : nonSelectedClassButton} onClick={(e) => {setWizard(0); setSelectedButton(0)}}>My Essays</button>
                <button className={selectedButton === 1 ? selectedClassbutton : nonSelectedClassButton} onClick={(e) => {setWizard(1); setSelectedButton(1)}}>Applied Scholarship</button>
                <button className={selectedButton === 2 ? selectedClassbutton : nonSelectedClassButton} onClick={(e) => {setWizard(2); setSelectedButton(2)}}>Scholarship Due Soon</button>
            </div>
            
            <CurrWizardComponent />
        </div>
    )
}

function ScholarDueSoon() {
    return (
        <div className='flex grow flex-col m-5 mr-10'>
            <div className='flex justify-center'>
                <h1 className='text-xl text-yellow font-bold font-inter justify-center mb-5'>Scholarship Due Soon</h1>
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

function AppliedScholarship() {
    return (
        <div className='flex grow flex-col m-5 mr-10'>
            <div className='flex justify-center'>
                <h1 className='text-xl text-yellow font-bold font-inter justify-center mb-5'>Applied Scholarship</h1>
            </div>
            
            <div className='flex justify-between border-4 border-green p-5 rounded-xl'>
                <div>
                    <h1 className='text-white text-2xl font-bold font-inter mb-4'>Fafsa</h1> 
                    <p className='text-white font-inter'>$9000 Recievable</p>
                </div>
                <div>
                    <p className='text-white font-inter mb-4'>Submitted May, 5 2022</p>
                </div> 
            </div>
        </div>
    )
}

function MyEssay() {
    return (
        <div className='flex grow flex-col m-5 mr-10'>
            <div className='flex justify-center'>
                <h1 className='text-xl text-yellow font-bold font-inter justify-center mb-5'>My Essays</h1>
            </div>
            
            <div className='border-4 border-green p-5 rounded-xl'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-white text-2xl font-bold font-inter mb-4'>Fafsa</h1> 
                    </div>
                    <div>
                        <p className='text-white font-inter mb-4'>Submitted May, 5 2022</p>
                    </div> 
                </div>
                <p className='text-white font-inter'>
                    Essays: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries,
                </p>
                
            </div>
        </div>
    )
}

export default Wizard;