import React from 'react'

const FirstStep = () => {
    
  return (
    <div className="onboarding__step">
        <form className="form__group">
            <div className="form__area">
                <label htmlFor="Name">Name</label>
                <input type="text" name="name" placeholder='John Doe' />
            </div>
            <div className="form__area">
                <label htmlFor="Email">Email Address</label>
                <input type="email" name="email" placeholder='john_doe@mail.com' />
            </div>
            <div className="form__area">
                <label htmlFor="Phone">Phone Number</label>
                <input type="text" name="phone" placeholder="Ensure to use country code" />
            </div>
            <div className="form__area">
                <label htmlFor="Gender">Gender</label>
                <select name="gender">
                    <option selected hidden>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            
        </form>
    </div>
  )
}

export default FirstStep