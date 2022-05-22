import React, {useState} from "react";
import "./index.css";

export default function App() {
    const [form, setform] = useState({
        firstname: '',
        lastname: '',
        email: '',
    })
    const [success, setsuccess] = useState(false)
    const [valid , setvalid] = useState(false)

    const handledchangefirstname = (event) => {
        setform({...form, firstname: event.target.value})
    }
    const handledchangelastname = (event) => {
        setform({...form, lastname: event.target.value})
    }
    const handledchangeemail = (event) => {
        setform({...form, email: event.target.value})
    }
    const handlesubmit = (event) => {
        event.preventDefault();
        if (form.firstname && form.lastname && form.email){
            setvalid(true)
        }
        setsuccess(true)
    }
    return (
        <div className="form-container">
            <form className="register-form" onSubmit={handlesubmit}>
                {success && valid ? <div className="success-message">Success! Thank you for registering</div> : null}
                <input
                    onChange={handledchangefirstname}
                    value={form.firstname}
                    id="first-name"
                    className="form-field"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                />
                {success && !form.firstname ? <span id="first-name-error">Please enter a first name</span> : null}

                <input
                    onChange={handledchangelastname}
                    value={form.lastname}
                    id="last-name"
                    className="form-field"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                />
                {success && !form.lastname ? <span id="last-name-error">Please enter a last name</span> : null}

                <input
                    onChange={handledchangeemail}
                    value={form.email}
                    id="email"
                    className="form-field"
                    type="text"
                    placeholder="Email"
                    name="email"
                />
                {success && !form.email ? <span id="email-error">Please enter an email address</span> : null}

                <button className="form-field" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}