import React, { useEffect, useState } from 'react'
import Api_Url from '../env'

function PackageTransMasterTable()
{
    const [data,setData]=useState([])
    const [getError,setGetError]=useState(false)

    const getData=async()=>
    {
        try{
            let result=await fetch(`${Api_Url}/api/package_trans_master/get`)
            result=await result.json()
            console.log()
            if(result[0])
            {
                setData(result)
                setGetError('')
            }
            else{
                throw new Error("Failed To Get")
            }
        }
        catch(err)
        {
            setData([])
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
                data.length>0&&!getError?
                <div>
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Id</th>
                            <th>Package Master Id</th>
                            <th>Vender Master Id</th>
                            <th>Date</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((value,index)=>
                            <tr key={index+1}>
                                <td>{index+1}</td>
                                <td>{value.ID}</td>
                                <td>{value.packagemaster_id}</td>
                                <td>{value.vendermaster_id}</td>
                                <td>{value.Date}</td>
                                <td>{value.Quantity}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            :
            <h4>No Data Found</h4>
            }
            {getError&&<h4>Server Error, Failed To Fetch Data</h4>}
        </div>
    )
}

export default PackageTransMasterTable;