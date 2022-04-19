import mark from '.././resources/mark.png'

function ImageProfile() {
    return (
        <div className='ml-10 mr-10 min-w-fit'>
            <img src={mark} alt="Mark" width="382" height='306'/>
            <div className='bg-green bg-opacity-70 pt-2 pb-2 rounded-lg flex justify-center'>
                <h3 className='text-dark font-bold font-inter text-lg'> Mark Doe </h3>
            </div>
        </div>
    )
}

export default ImageProfile