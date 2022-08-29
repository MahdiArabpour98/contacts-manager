import { Contact, Spinner, ContactsNotFound } from '../index'
import { PINK, BACKGROUND } from '../../helpers/colors'
import { Link } from 'react-router-dom'

const Contacts = ({ contacts, loading, confirmDelete }) => {
  // console.log(contacts, groups, loading)
  return (
    <>
      <section className='container'>
        <div className='row mx-0 mt-3'>
          <div className='col'>
            <Link type="button" className="btn btn-primary"
              to={"/contacts/add"}
              style={{ color: BACKGROUND, background: PINK, border: PINK }}
            >
              ساخت مخاطب جدید{' '}<i className='fa fa-plus-circle' />
            </Link>
          </div>
        </div>
      </section>
      {
        loading ? (
          <Spinner />
        ) : (
          <section className='container mt-4'>
            <div className='row g-3 row-cols-1 row-cols-sm-2 mx-0'>
              {contacts.length > 0 ? (
                contacts.map((c) => <Contact key={c.id} contact={c} confirmDelete={confirmDelete} />)
              ) : (
                <ContactsNotFound />
              )
              }
            </div>
          </section>
        )
      }
    </>
  )
}

export default Contacts