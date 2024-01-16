import React, { useState } from 'react'
import Api_Url from '../env'

const PartyMasterReg = () => {
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [type, setType] = useState('')
    const [gstNo, setGstNo] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const [qty, setQty] = useState('')
    const [error, setError] = useState(false)
    const [mobError, setMobError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [fail, setFail] = useState(false)

    function mobHandler(e) {
        setMobile(e.target.value)
        if (mobError === true) setMobError(false)
      }

    const submit = async () => {
        if (!name || !id || !type || !gstNo || !mobile || !address || !qty) setError(true)
        else {
            if (mobile.length === 10) {
                try {
                    let result = await fetch(`${Api_Url}/api/partymaster/registartion`, {
                        method: 'post',
                        body: JSON.stringify({ ID: id, Name: name, Type: type, Gst_No : gstNo, Mobile: mobile, Address: address, Qty: qty }),
                        headers: { 'Content-Type': 'application/json' }
                    })
                    result = await result.json()
                    if (result.msg === 'Successfull') {
                        setSuccess(true)
                        setFail(false)
                        setTimeout(()=>
                        {
                            reset()
                        },3000)
                    }
                    else {
                        throw new Error("Registartion Failed.")
                    }
                }
                catch (err) {
                    setSuccess(false)
                    setFail(true)
                }

            }
            else{
                setMobError(true)
            }
        }
    }
    function reset() {
        setId('')
        setGstNo('')
        setName('')
        setType('')
        setMobile('')
        setQty('')
        setAddress('')
        setError(false)
        setSuccess(false)
        setFail(false)
        setMobError(false)
    }
    return (
        <div>
            <h1>Enter Party Master Details For Registration</h1>
            <div>
                <span>Enter Id : </span>
                <input value={id} onChange={(e) => setId(e.target.value)} type='text' maxLength={45} />
                {error && !id && <p className='error'>Please Enter id</p>}
            </div>
            <div>
                <span>Enter GST No : </span>
                <input value={gstNo} onChange={(e) => setGstNo(e.target.value)} type='text' maxLength={45} />
                {error && !gstNo && <p className='error'>Please Enter GST No : </p>}
            </div>
            <div>
                <span>Enter Name : </span>
                <input value={name} onChange={(e) => setName(e.target.value)} type='text' maxLength={45} />
                {error && !name && <p className='error'>Please Enter Name : </p>}
            </div>
            <div>
                <span>Enter Type : </span>
                <input value={type} onChange={(e) => setType(e.target.value)} type='text' maxLength={45} />
                {error && !type && <p className='error'>Please Enter Type : </p>}
            </div>
            <div>
                <span>Enter Mobile No. : </span>
                <input value={mobile} onChange={mobHandler} type='number' maxLength={10} />
                {error && !mobile && <p className='error'>Please Enter Mobile No. : </p>}
                {mobError && <p className='error'>Please Enter 10 Digit Vaild Mobile No. : </p>}
            </div>
            <div>
                <span>Enter Address : </span>
                <input value={address} onChange={(e) => setAddress(e.target.value)} type='text' range={45} />
                {error && !address && <p className='error'>Please Enter Address : </p>}
            </div>
            <div>
                <span>Enter Qty : </span>
                <input value={qty} onChange={(e) => setQty(e.target.value)} type='text' range={45} />
                {error && !qty && <p className='error'>Please Enter Qty : </p>}
            </div>
            <div>
                <button onClick={submit}>Submit</button>
                <button onClick={reset}>Reset</button>
                {success&&<p>Registered Successfully</p>}
                {fail&&<p>Registration Failed</p>}
            </div>
        </div>
    )
}

export default PartyMasterReg