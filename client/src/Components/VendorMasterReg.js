import React, { useState } from 'react'
import Api_Url from '../env'

const VendorMasterReg = () => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [rickshaw, setRickshaw] = useState('')
    const [mob, setMob] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [fail, setFail] = useState(false)

    const submit = async () => {
        if (!id || !name || !rickshaw ||  !mob) setError(true)
        else {
                try {
                    let result = await fetch(`${Api_Url}/api/vendermaster/registartion`, {
                        method: 'post',
                        body: JSON.stringify({ ID: id, Name: name, Rickshaw_No: rickshaw, Mobile_No: mob }),
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
        setName('')
        setRickshaw('')
        setMob('')
        setError(false)
        setSuccess(false)
        setFail(false)
    }
    return (
        <div>
            <h1>Enter Vender Master Details For Registration</h1>
            <div>
                <span>Enter Id : </span>
                <input value={id} onChange={(e) => setId(e.target.value)} type='number' maxLength={45} />
                {error && !id && <p className='error'>Please Enter id</p>}
            </div>
            <div>
                <span>Enter Name : </span>
                <input value={name} onChange={(e) => setName(e.target.value)} type='text' maxLength={45} />
                {error && !name && <p className='error'>Please Enter Name : </p>}
            </div>
            <div>
                <span>Enter Rickshaw No. : </span>
                <input value={rickshaw} onChange={(e) => setRickshaw(e.target.value)} type='text' maxLength={45} />
                {error && !rickshaw && <p className='error'>Please Enter Rickshaw No. : </p>}
            </div>
            <div>
                <span>Enter Mobile No. : </span>
                <input value={mob} onChange={(e) => setMob(e.target.value)} type='number' range={10} />
                {error && !mob && <p className='error'>Please Enter Mobile No. : </p>}
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

export default VendorMasterReg;