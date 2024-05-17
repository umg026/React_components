import React, { useState } from 'react'

function ImageUpload() {
  // https://rapidapi.com/guides/upload-files-react-axios


    const [image, setImage] = useState("")
    const handelImage = (e) => {
        setImage(e.target.files[0])
    }

    const handelSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("image", image)

        console.log(image.name); // path of image shows 

        for (let [key, value] of formData.entries()) {
            console.log(`${key} :`, value);
        }
    }

    return (
        <>
            <div className="flex justify-center items-center text-3xl">
                image upload
            </div>

            <form action="" onSubmit={handelSubmit} className='flex flex-col'>
                <input type="file" name='file' onChange={handelImage} />
                <button type='submit' className='bg-green-500 rounded shadow-xl w-28 mt-5 text-white py-1'>Submit</button>
            </form>
        </>
    )
}

export default ImageUpload