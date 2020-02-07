import axios from "axios";
import {url} from '../../constants';

export function fetchFromApi() {
    return axios.get(url)
}