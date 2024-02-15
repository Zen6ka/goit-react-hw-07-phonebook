import { Input } from './Filter.styled'
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectContacts, selectFilter } from '../../redux/selectors';

// export function Filter({ filter, setFilter }) {
// 	const handleFilterChange = (evt) => {
// 	setFilter(evt.target.value);
// };

// export function Filter() {
// 	const dispatch = useDispatch();
// 	const handleFilterChange = (evt) => {
// 		dispatch(setContactsFilter(evt.target.value));
// };
// 	return (
// 		<Input
// 			type="text"
// 			name="filter"
// 			placeholder="Search by name"
// 			value={useSelector(getFilter)}
// 			onChange={handleFilterChange}
// 			disabled={useSelector(getContacts).length === 0}
// 		/>
// );
// }

export  function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  
  const handleFilterChange = (evt) => {
    dispatch(setFilter(evt.target.value.trim()));
  };

  return (
    <Input
      type="text"
      name="filter"
      placeholder="Search by name"
      value={filter}
      onChange={handleFilterChange}
      disabled={useSelector(selectContacts).length === 0}
    />
  );
}