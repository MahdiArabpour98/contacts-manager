import { Link } from "react-router-dom";
import { CURRENTLINE, ORANGE, CYAN, RED } from '../../helpers/colors';
import profileImage from "../../assets/profile-image.jpg"

const Contact = ({ contact, confirmDelete }) => {
  return (
    <div className='col'>
      <div className="card" style={{ backgroundColor: CURRENTLINE }}>
        <div className="card-body">
          <div className='row d-flex justify-content-around'>
            <div className='col-4'>
              <img src={profileImage} className="rounded w-100 h-100" alt="..." />
            </div>
            <div className='col-7'>
              <ul className="list-group px-0" >
                <li className="list-group-item list-group-item-dark">
                  نام و نام خانوداگی :{"  "}
                  <span className="fw-bold">
                    {contact.fullname}
                  </span>
                </li>

                <li className="list-group-item list-group-item-dark">
                  شماره موبایل :{"  "}
                  <span className="fw-bold">
                    {contact.mobile}
                  </span>
                </li>

                <li className="list-group-item list-group-item-dark">
                  آدرس ایمیل :{"  "}
                  <span className="fw-bold">
                    {contact.email}
                  </span>
                </li>
              </ul>
            </div>
            <div className='col-1 d-flex align-items-center flex-column'>
              <Link to={`/contacts/${contact.id}`} className="btn my-1" style={{ backgroundColor: ORANGE }}>
                <i className="fa fa-eye" />
              </Link>
              <Link to={`/contacts/edit/${contact.id}`} className="btn my-1" style={{ backgroundColor: CYAN }}>
                <i className="fa fa-pencil" />
              </Link>
              <button
                onClick={() => confirmDelete(contact.id, contact.fullname)}
                className="btn my-1" style={{ backgroundColor: RED }}>
                <i className="fa fa-trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact