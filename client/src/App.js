import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import PartyMasterReg from './Components/PartyMaster';
import PartyMasterTable from './Components/PartyMasterTable';
import PaackageMasterReg from './Components/PackageMasterReg';
import PackageMasterTable from './Components/PackageMasterGet';
import VendorMasterReg from './Components/VendorMasterReg';
import VendorMasterTable from './Components/VendorMasterGet';
import PackageTransMasterReg from './Components/PackageTransMasterReg';
import PackageTransMasterTable from './Components/PackageTransMasterGet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/partymaster/get' element={<PartyMasterTable/>}/>
        <Route path='/partymaster/register' element={<PartyMasterReg/>}/>
        <Route path='/packagemaster/get' element={<PackageMasterTable/>}/>
        <Route path='/packagemaster/register' element={<PaackageMasterReg/>}/>
        <Route path='/vendormaster/register' element={<VendorMasterReg/>}/>
        <Route path='/vendormaster/get' element={<VendorMasterTable/>}/>
        <Route path='/packagetransmaster/register' element={<PackageTransMasterReg/>}/>
        <Route path='/packagetransmaster/get' element={<PackageTransMasterTable/>}/>
      </Routes>
    </Router>
  );
}

export default App;
