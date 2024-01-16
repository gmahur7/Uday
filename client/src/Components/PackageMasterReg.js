import React, { useState } from 'react'
import Api_Url from '../env'

const PaackageMasterReg = () => {
    const [id, setId] = useState('')
    const [private_marka, setPrivate_marka] = useState('')
    const [partymaster_id, setPartymaster_id] = useState('')
    const [qty, setQty] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [fail, setFail] = useState(false)

    const submit = async () => {
        if (!id || !partymaster_id || !private_marka ||  !qty) setError(true)
        else {
                try {
                    let result = await fetch(`${Api_Url}/api/packagemaster/registartion`, {
                        method: 'post',
                        body: JSON.stringify({ ID: id, private_marka: private_marka, partymaster_id: partymaster_id, Quantity: qty }),
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
    }
    function reset() {
        setId('')
        setPrivate_marka('')
        setPartymaster_id('')
        setQty('')
        setError(false)
        setSuccess(false)
        setFail(false)
    }
    return (
        <div>
            <h1>Enter Package Master Details For Registration</h1>
            <div>
                <span>Enter Id : </span>
                <input value={id} onChange={(e) => setId(e.target.value)} type='text' maxLength={45} />
                {error && !id && <p className='error'>Please Enter id</p>}
            </div>
            <div>
                <span>Enter Private Marka : </span>
                <input value={private_marka} onChange={(e) => setPrivate_marka(e.target.value)} type='text' maxLength={45} />
                {error && !private_marka && <p className='error'>Please Enter Private Marka : </p>}
            </div>
            <div>
                <span>Enter Party Master Id : </span>
                <input value={partymaster_id} onChange={(e) => setPartymaster_id(e.target.value)} type='text' maxLength={45} />
                {error && !private_marka && <p className='error'>Please Enter Party Master Id : </p>}
            </div>
            <div>
                <span>Enter Quantity : </span>
                <input value={qty} onChange={(e) => setQty(e.target.value)} type='number' range={45} />
                {error && !qty && <p className='error'>Please Enter Quantity : </p>}
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

export default PaackageMasterReg