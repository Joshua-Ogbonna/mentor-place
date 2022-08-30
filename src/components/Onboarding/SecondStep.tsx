import React from 'react'
import { Input } from 'reactstrap'

const SecondStep = () => {
  return (
    <div className="onboarding__step">
        <form className="form__group">
            <div className="form__area">
                <label htmlFor="profile picture">Upload Profile Picture</label>
                <Input type="file" name="" id="" />
            </div>
            <div className="form__area">
                <label htmlFor="about you">Tell us about yourself</label>
                <textarea name="" id="" cols={30} rows={10} placeholder="Tell us briefly about yourself "></textarea>
            </div>
        </form>
    </div>
  )
}

export default SecondStep