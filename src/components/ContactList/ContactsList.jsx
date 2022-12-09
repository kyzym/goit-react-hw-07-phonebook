import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { Box } from '../utils/Box.styled';
import { ContactsListItem } from './ContactListItem/ContactsListItem';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilter);

  const normalizedFilter = filter.toLowerCase().trim();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Box as="ul" width="430px">
      <ContactsListItem filteredContacts={filteredContacts} />
    </Box>
  );
};
