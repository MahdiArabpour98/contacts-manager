import axios from "axios";

const baseUrl = "http://localhost:9000/"

export const getAllContacts = () => {
  const url = `${baseUrl}contacts`
  return axios.get(url)
}

export const getAllGroups = () => {
  const url = `${baseUrl}groups`
  return axios.get(url)
}

export const createContact = (contact) => {
  const url = `${baseUrl}contacts`
  return axios.post(url, contact)
}

export const getContact = (id) => {
  const url = `${baseUrl}contacts/${id}`
  return axios.get(url)
}

export const getGroup = (id) => {
  const url = `${baseUrl}groups/${id}`
  return axios.get(url)
}

export const updateContact = (contact, contactId) => {
  console.log('contact', contact)
  const url = `${baseUrl}contacts/${contactId}`;
  return axios.put(url, contact);
};

export const deleteContact = (contactId) => {
  const url = `${baseUrl}contacts/${contactId}`;
  return axios.delete(url);
};