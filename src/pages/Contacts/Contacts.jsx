import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from '/src/components/ContactList/ContactList';
import SearchBox from '/src/components/SearchBox/SearchBox';
import ContactForm from '/src/components/ContactForm/ContactForm';
import Loader from '/src/components/Loader/Loader';
import Error from '/src/components/Error/Error';
import { fetchContacts } from '/src/redux/contacts/operations.js';
import { selectLoading, selectError } from '/src/redux/contacts/selectors.js';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <Error />}
      <ContactList />
    </div>
  );
}
