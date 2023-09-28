import React, { useState } from 'react'
import './global.css'
import './index.css'
import Frame from '../../assets/img/frame.svg'
import polygon from '../../assets/img/polygon-1.svg'
import QrCOde from '../../assets/img/group-1000004212.svg'
import axios from 'axios'


const Register = () => {

    const defaultForm = {
        djName: "",
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        instagramUsername: "",
        customername: false,
        platformname: false
    }

    const [form, setForm] = useState(defaultForm)

    const onChangeHanlder = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const checkHandler = (e) => {
        if(e.target.name === "customername"){
            if(e.target.checked){
                setForm({...form,customername:true})
            }else{
                setForm({...form,customername:false})
            }
        }else{
            if(e.target.checked){
                setForm({...form,platformname:true})
            }else{
                setForm({...form,platformname:false})
            }
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try{
           let res = await axios.post("https://api.ampspot.co/createUser",form)
           if (res.ok) {
            // Handle success
            alert("API call successful");
        } else {
            // Handle error
            alert("API call failed");
        }
        }catch(error){
            console.error("API call error:", error);
        }
    }

    return (
        <div className="row login_form ">
            <div className="col-md-6  col_login_form">
                <div className="login_form_item wrappoer_login_item">
                    <div className=" logo_img">
                        <img className="frame-icon" alt="" src={Frame} />
                    </div>
                    <div className="english-uk-parent">
                        <div className="english-uk">English (UK)</div>
                        <img className="frame-child" alt="" src={polygon} />
                    </div>
                </div>
                <div className="join-waitlist-parent">
                    <div className="join-waitlist-children">
                        <div className="join-waitlist">Join Waitlist</div>
                        <form action='post' onSubmit={submitHandler}>
                            <div className="you-dj-name-parent">
                                <div className="you-dj-name">You DJ Name</div>
                                <input type="text"
                                    required className="dj-sigma-wrapper"
                                    id="djName"
                                    name="djName"
                                    onChange={onChangeHanlder}
                                    value={form.djName}
                                    placeholder="Enter your DJ Name" />
                            </div>
                            <div className="row">
                                <div className="col-md-6 usa-wrapper-col">
                                    <div className="first-name">First Name</div>
                                    <input type="text"
                                        required
                                        className="usa-wrapper"
                                        id="firstName"
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={onChangeHanlder}
                                        placeholder="Enter your First Name" />
                                </div>
                                <div className="col-md-6 usa-wrapper-col">
                                    <div className="first-name">Last Name</div>
                                    <input type="text"
                                        required
                                        className="usa-wrapper"
                                        id="lastName"
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={onChangeHanlder}
                                        placeholder="Enter your Last Name" />
                                </div>
                            </div>
                            <div className="you-dj-name-parent">
                                <div className="you-dj-name">Email</div>
                                <input type="email"
                                    required
                                    className="dj-sigma-wrapper"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={onChangeHanlder}
                                    placeholder="Enter your Email" />
                            </div>
                            <div className="you-dj-name-parent">
                                <div className="you-dj-name">Your Contact Number</div>
                                <input type="tel"
                                maxLength={10}
                                    required
                                    className="dj-sigma-wrapper"
                                    id="contactNumber"
                                    name="contactNumber"
                                    value={form.contactNumber}
                                    onChange={onChangeHanlder}
                                    placeholder="Enter your Contact Number" />
                            </div>
                            <div className="you-dj-name-parent">
                                <div className="you-dj-name">Enter Your Instagram Username</div>
                                <input type="text"
                                    required
                                    className="dj-sigma-wrapper"
                                    id="instagramUsername"
                                    value={form.instagramUsername}
                                    onChange={onChangeHanlder}
                                    name="instagramUsername"
                                    placeholder="Enter your Instagram Username" />
                            </div>
                            <div className="fi-rr-checkbox-parent">
                                <input type="checkbox"
                                 checked={form.customername}
                                 onChange={checkHandler} 
                                 name='customername'
                                 value={form.customername} id="customername" />
                                <div className="ready-to-be">Ready to be customer</div>
                            </div>
                            <div className="fi-rr-checkbox-group">
                                <input 
                                checked={form.platformname}
                                value={form.platformname}
                                onChange={checkHandler} 
                                name='platformname'
                                type="checkbox" id="platformname" />
                                <div className="opt-in-to">Opt in to email/text messages about the platform</div>
                            </div>

                            <div className="buttons-wrapper">
                                <div  id="buttonsContainer">
                                    <button type='submit' className="buttons joinBtn" id="submitButton">Join</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col_login_form2">
                <div className="login_imageWrapper">
                    <div className="rectangle-div">
                        <div className="frame-div">
                            <img src={QrCOde} className="frame-item" width="200" alt="qrCode" />
                            <b className="dj-sigma">Log in with QR code </b>
                            <div className="scan-this-with-container">
                                <span className="scan-this-with-container1">
                                    <span>Scan this with your </span>
                                    <span className="mobile">mobile </span>
                                    <span>to log in instantly</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register