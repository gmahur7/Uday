import React, { useEffect, useState } from 'react'
import Api_Url from '../env'

function PartyMasterTable()
{
    const [data,setData]=useState([])
    const [getError,setGetError]=useState(false)

    const getData=async()=>
    {
        try{
            let result=await fetch(`${Api_Url}/api/partymaster/get`)
            result=await result.json()
            console.log()
            if(result[0])
            {
                setData(result)
            }
            else{
                throw new Error("Failed To Get")
            }
        }
        catch(err)
        {
            setGetError(err)
        }
    }
    useEffect(()=>
    {
        getData()
    },[])
    return(
        <div>
            {
                data.length>0?
                <div>
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Id</th>
                            <th>Gst No</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Mobile No.</th>
                            <th>Address</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((value,index)=>
                            <tr key={index+1}>
                                <td>{index+1}</td>
                                <td>{value.ID}</td>
                                <td>{value.Gst_No}</td>
                                <td>{value.Name}</td>
                                <td>{value.Type}</td>
                                <td>{value.Mobile}</td>
                                <td>{value.Address}</td>
                                <td>{value.Qty}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            :
            <h4>Server Error, Failed To Fetch Data</h4>
            }
        </div>
    )
}

export default PartyMasterTable;