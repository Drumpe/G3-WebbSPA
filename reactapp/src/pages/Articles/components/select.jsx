import { useDispatch, useSelector } from 'react-redux';
import { setSorting, selectedSorting} from '../redux/topicSortSlice';

const SelectsComponent = () => {
    const sorting = useSelector(selectedSorting);
    const dispatch = useDispatch();

    const handleSortingChange = (e) => {
        const selectedSorting = e.target.value;
        dispatch(setSorting(selectedSorting));
    };

    return (
        <div>
            <label htmlFor="sorting">Sort:</label>
            <select id="sorting" name="sorting" value={sorting} onChange={handleSortingChange}>
                <option value="newest" selected>Nya</option>
                <option value="oldest" selected>Äldre</option>
            </select>
        </div>
    );
};

export default SelectsComponent;