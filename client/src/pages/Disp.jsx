import { useEffect, useState } from 'react'

export default function Disp() {
    const [images, setImages] = useState([]);
    useEffect(() => {    
        const handleFetch = async () => {
            const response = await fetch('http://localhost:3000/dispImages');
            const data = await response.json();
            setImages(data);
        }
        handleFetch();
    }, [])
  return (
    <div>
        {images.map(image => {
            return (
                <div key={image.id} className='disp-img'>
                    <img src={`http://localhost:3000/images/${image.imgName}`} alt="" />
                </div>
            )
        })}
    </div>
  )
}
