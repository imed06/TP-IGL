import pic1 from '../images/pic1.jpeg'

function AnnonceTemplate(props) {
    const annonce = props.annonce
    const images = annonce.images

    return (
        <div className=" cursor-pointer bg-white max-w-xs p-2  rounded-lg shadow-xl  ">
            <div className=" flex h-96 flex-col">
                <div className='w-full h-72 group'>
                    {images.length !== 0 ? <div key={annonce.id}
                        style={{ backgroundImage: `url(${"http://www.annonce-algerie.com" + images[0].lien})` }}
                        className='w-full flex-col justify-between flex items-center h-full rounded-md bg-center bg-cover duration-500'
                    >
                    </div> :
                        <div key={annonce.id}
                            style={{ backgroundImage: `url(${pic1})` }}
                            className='w-full flex-col justify-between flex items-center h-full rounded-md bg-center bg-cover duration-500'
                        >
                        </div>
                    }
                </div>
                <div className=' divide-y divide-gray-300'>
                    <div className='p-3' >
                        <h5 className="text-2xl font-extrabold text-left  text-[#0f2446]"> {annonce.titre} </h5>
                        <div className='flex flex-row items-center justify-between '>
                            <h5 className="text-xl font-extrablod text-left tracking-tight text-[#345970] ">{annonce.prix}</h5>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between py-2 px-3'>
                        <div>  <span className='text-sm font-extrabold text-[#D4BB83] font-blod  font-Montserrat'>Crée depuis</span> <span className='text-[#596D78] font-blod text-sm font-Montserrat'>{annonce.Date.slice(0, 10)}</span> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnnonceTemplate