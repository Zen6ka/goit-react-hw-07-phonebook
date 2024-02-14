import { Input } from './Filter.styled'
import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from '../../redux/filterSlice';
import { getContacts, getFilter } from '../../redux/selectors';

// export function Filter({ filter, setFilter }) {
// 	const handleFilterChange = (evt) => {
// 	setFilter(evt.target.value);
// };

export function Filter() {
	const dispatch = useDispatch();
	const handleFilterChange = (evt) => {
		dispatch(setContactsFilter(evt.target.value));
};

	return (
		<Input
			type="text"
			name="filter"
			placeholder="Search by name"
			value={useSelector(getFilter)}
			onChange={handleFilterChange}
			disabled={useSelector(getContacts).length === 0}
		/>
);
}