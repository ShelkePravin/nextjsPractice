"use client";

import React, { useActionState } from 'react'
import { ContactType } from '../_types/contact';
import { FiTrash2 } from 'react-icons/fi';

type DeleteButtonProps = {
    action: (prevState: any, formData: FormData) => Promise<any>;
    contact: ContactType;
}

const DeleteButton = ({action, contact}: DeleteButtonProps) => {
    const [state, formAction] = useActionState(action, null);
  return <form action={formAction} method="post">
    <input type="hidden" name="id" value={contact?.id} />
    <button type="submit" className='flex items-center text-sm text-gray-600 hover:text-red-600 border border-gray-300 rounded px-2 py-1 transition-colors'
    onClick={(e) => {
        if (!confirm(`Are you sure you want to delete ${contact.name}?`)) {
            e.preventDefault();
        }
    }}
    >
        <FiTrash2 className='text-red-500 text-lg' />
      Delete
    </button>
  </form>
}

export default DeleteButton;