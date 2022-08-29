import { COMMENT, PURPLE } from '../../helpers/colors'

const SearchContact = () => {
  return (
    <div className="input-group mx-2" dir='ltr'>
      <span className="input-group-text" style={{ backgroundColor: 'purple',borderColor: '#44475a' }}>
        <i className='fa fa-search' />
      </span>
      <input
        style={{ backgroundColor: COMMENT, borderColor: PURPLE }}
        dir='rtl'
        type="text"
        className="form-control"
        placeholder="جستجوی مخاطب..."
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
  )
}

export default SearchContact