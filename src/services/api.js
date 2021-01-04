import axios from "axios";
const getRestaurants = async () => {
    return (await axios.get('api/restaurants-data.json')).data;
};

export default { getRestaurants };
