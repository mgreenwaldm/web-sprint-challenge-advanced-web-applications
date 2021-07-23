import {api} from '../helpers/axiosWithAuth';

const fetchColorService = async () => {
    const result = await api.get('http://localhost:5000/api/colors');
    return result.data;
}

export default fetchColorService;
