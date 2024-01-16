import React, { useState } from 'react'
import Api_Url from '../env'

const PackageTransMasterReg = () => {
    const [id, setId] = useState('')
    const [packagemaster_id, setPackagemaster_id] = useState('')
    const [vendermaster_id, setVendermaster_id] = useState('')
    const [Date, setDate] = useState('')
    const [Quantity, setQuantity] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [fail, setFail] = useState(false)

    const submit = async () => {
        if (!id || !packagemaster_id || !vendermaster_id ||  !Date||!Quantity) setError(true)
        else {
                try {
                    let result = await fetch(`${Api_Url}/api/package_trans_master/registartion`, {
                        method: 'post',
                        body: JSON.stringify({ ID: id, packagemaster_id, vendermaster_id, Date,Quantity }),
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
        setPackagemaster_id('')
        setVendermaster_id('')
        setDate('')
        setQuantity('')
        setError(false)
        setSuccess(false)
        setFail(false)
    }
    return (
        <div>
            <h1>Enter Package Trans Master Details For Registration</h1>
            <div>
                <span>Enter Id : </span>
                <input value={id} onChange={(e) => setId(e.target.value)} type='number' maxLength={45} />
                {error && !id && <p className='error'>Please Enter id</p>}
            </div>
            <div>
                <span>Enter Package Master Id : </span>
                <input value={packagemaster_id} onChange={(e) => setPackagemaster_id(e.target.value)} type='number' maxLength={45} />
                {error && !packagemaster_id && <p className='error'>Please Enter Package Master Id : </p>}
            </div>
            <div>
                <span>Enter Vender Master Id : </span>
                <input value={vendermaster_id} onChange={(e) => setVendermaster_id(e.target.value)} type='number' maxLength={45} />
                {error && !vendermaster_id && <p className='error'>Please Enter Vender Master Id: </p>}
            </div>
            <div>
                <span>Enter Date : </span>
                <input value={Date} onChange={(e) => setDate(e.target.value)} type='date' />
                {error && !Date && <p className='error'>Please Enter Date : </p>}
            </div>
            <div>
                <span>Enter Quantity : </span>
                <input value={Quantity} onChange={(e) => setQuantity(e.target.value)} type='text' range={45} />
                {error && !Quantity && <p className='error'>Please Enter Quantity : </p>}
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

export default PackageTransMasterReg;