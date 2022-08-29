import { PURPLE } from '../helpers/colors'
import { SearchContact } from './index'

const NavBar = () => {
  return (
    <div className='nav navbar-dark navbar-expand-sm shadow-lg py-2'>
      <div className='container-md'>
        <div className='row w-100'>
          <div className='col-sm-6 align-self-center d-flex justify-content-center justify-content-sm-start'>
            <div className='navbar-brand'>
              <i className='fa fa-id-badge' style={{ color: PURPLE }} />
              {" "}وب اپلیکیشن مدیریت {" "}
              <span style={{ color: PURPLE }}>مخاطبین</span>
            </div>
          </div>
          <div className='col-sm-6 mt-2 mt-sm-0'>
            <SearchContact />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar