import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { NavBar, Contacts, AddContact, EditContact, ViewContact, Page404 } from './components/index'
import { getAllContacts, getAllGroups, deleteContact } from './services/ContactsServices'
import { confirmAlert } from "react-confirm-alert";
import {
  CURRENTLINE, FOREGROUND, PURPLE, YELLOW, COMMENT,
} from "./helpers/colors";

const App = () => {

  const [loading, setLoading] = useState(false)
  const [contacts, setContacts] = useState([])
  const [groups, setGroups] = useState([])
  const [forceRender, setForceRender] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const contactsData = await getAllContacts();
        const groupsData = await getAllGroups();

        // console.log('contactsData', contactsData);

        setContacts(contactsData.data);
        setGroups(groupsData.data);
        setLoading(false);

      } catch (err) {
        console.log(err.massage);
        setLoading(false);
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data: contactsData } = await getAllContacts();

        setContacts(contactsData);

        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [forceRender]);

  const confirm = (contactId, contactFullname) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            dir="rtl"
            style={{
              backgroundColor: CURRENTLINE,
              border: `1px solid ${PURPLE}`,
              borderRadius: "1em",
            }}
            className="p-4"
          >
            <h1 style={{ color: YELLOW }}>پاک کردن مخاطب</h1>
            <p style={{ color: FOREGROUND }}>
              مطمئنی که میخوای مخاطب {contactFullname} رو پاک کنی ؟
            </p>
            <button
              onClick={() => {
                removeContact(contactId);
                onClose();
              }}
              className="btn mx-2"
              style={{ backgroundColor: PURPLE }}
            >
              مطمئن هستم
            </button>
            <button
              onClick={onClose}
              className="btn"
              style={{ backgroundColor: COMMENT }}
            >
              انصراف
            </button>
          </div>
        );
      },
    });
  };

  const removeContact = async (contactId) => {
    try {
      setLoading(true);
      const response = await deleteContact(contactId);
      if (response) {
        const { data: contactsData } = await getAllContacts();
        setContacts(contactsData);
        setLoading(false);
      }
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Navigate to='/contacts' />} />
        <Route path='/contacts' element={<Contacts contacts={contacts} loading={loading} confirmDelete={confirm} />} />
        <Route path='/contacts/add' element={<AddContact groups={groups} forceRender={forceRender} setForceRender={setForceRender} />} />
        <Route path='/contacts/edit/:contactId' element={<EditContact forceRender={forceRender} setForceRender={setForceRender} />} />
        <Route path='/contacts/:contactId' element={<ViewContact />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App