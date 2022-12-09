import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const ContactsNotification = () => {
  const savedContacts = useSelector(selectContacts);
  return (
    <div>
      <span>Total number of contacts: {savedContacts.length}</span>
    </div>
  );
};
