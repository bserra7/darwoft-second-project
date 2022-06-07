import React from 'react'

const FormInputImage = ({handleImage}) => {

  return (
    <div>
        <label>Image: </label>
        <input type='file' name='image' onChange={handleImage} accept='image/jpeg, image/png' />
    </div>
  )
}

export default FormInputImage