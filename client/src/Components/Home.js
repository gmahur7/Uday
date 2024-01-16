import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () =>
{
    return(
        <div>
            <h2>
                PartyMaster Links
            </h2>
            <div>
                <NavLink className='links' to='/partymaster/get'>Party Master Table</NavLink>
                <NavLink className='links' to='/partymaster/register'>Party Master Registration</NavLink>
            </div>
            <div>
                <NavLink className='links' to='/packagemaster/get'>Package Master Table</NavLink>
                <NavLink className='links' to='/packagemaster/register'>Package Master Registration</NavLink>
            </div>
            <div>
                <NavLink className='links' to='/vendormaster/get'>Vendor Master Table</NavLink>
                <NavLink className='links' to='/vendormaster/register'>Vendor Master Registration</NavLink>
            </div>
            <div>
                <NavLink className='links' to='/packagetransmaster/get'>Package Trans Master Table</NavLink>
                <NavLink className='links' to='/packagetransmaster/register'>Package Trans Master Registration</NavLink>
            </div>
        </div>
    )
}

export default Home