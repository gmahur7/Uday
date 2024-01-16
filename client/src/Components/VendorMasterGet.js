import React, { useEffect, useState } from 'react'
import Api_Url from '../env'

function VendorMasterTable() {
    const [data, setData] = useState([])
    const [getError, setGetError] = useState(false)
    const [inp, setInp] = useState('')
    const [searchError, setSearchError] = useState(false)

    const getData = async () => {
        try {
            let result = await fetch(`${Api_Url}/api/vendermaster/get`)
            result = await result.json()
            console.log()
            if (result[0]) {
                setData(result)
                setGetError('')
            }
            else {
                throw new Error("Failed To Get")
            }
        }
        catch (err) {
            setData([])
            setGetError(err)
        }
    }

    const search = async () => {
        try {
            let result = await fetch(`${Api_Url}/api/vendermaster/search`, {
                method: 'post',
                body: JSON.stringify({ inp }),
                headers: {
                    'Content-Type': 'application/json'
                }

            })
            result = await result.json()
            if (result.length > 0) {
                setData(result)
                setGetError(false)
            }
            else {
                throw new Error("No Search Result Found")
            }
        }
        catch (err) {
            setSearchError(true)
            setGetError(false)
        }
    }

    const inputHandler = (e) => {
        setInp(e.target.value)
        search()
    }

    useEffect(() => {
        if (inp.length <= 0) {
            getData()
            setSearchError(false)
        }
    }, [inp])

    useEffect(() => {
        getData()
        setSearchError(false)
    }, [])
    return (
        <div>
            <div>
                <input id='search' type='text' placeholder='Enter Name' onChange={inputHandler} />
                <button onClick={search}>Search</button>
            </div>
            {
                data.length > 0 && !getError ?
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Ricksahw No</th>
                                    <th>Mobile No.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((value, index) =>
                                        <tr key={index + 1}>
                                            <td>{index + 1}</td>
                                            <td>{value.ID}</td>
                                            <td>{value.Name}</td>
                                            <td>{value.Rickshaw_No}</td>
                                            <td>{value.Mobile_No}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <h4>No Data Found</h4>
            }
            {getError && <h4>Server Error, Failed To Fetch Data</h4>}
            {searchError && <h4>{searchError}</h4>}
        </div>
    )
}

export default VendorMasterTable;