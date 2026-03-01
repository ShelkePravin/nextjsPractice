import React from 'react'
import { ContactType } from '../_types/contact'
import Link from 'next/link'
import { FiEdit } from 'react-icons/fi'
import DeleteButton from './DeleteButton'
import { deleteContact } from '../api/contact'
// import { deleteContactAction } from '../actions/contact'
import { deleteContactAction } from '../actions/contact'

const ContactList = ({contacts}: {contacts: ContactType[]}) => {
  return (
    <div className='space-y-4'>
        {contacts.map(contact => (
          <div key={contact.id} className="bg-white p-4 rounded shadow">
            <div className='flex justify-between items-start'>
                <div>
                    <h2 className="text-lg font-semibold">{contact.name}</h2>
                    <p className="text-gray-600">{contact.email}</p>
                </div>
                <div className='flex items-center self-center gap-3'>
                    <Link href={`/contact/edit/${contact.id}`} className="flex items-center text-sm text-gray-600 hover:text-blue-600 border border-gray-300 rounded px-2 py-1 transition-colors">
                    <FiEdit className='text-blue-600'/>
                    Edit</Link>
                    <DeleteButton action={deleteContactAction} contact={contact} />
                </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default ContactList