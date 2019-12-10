import request from 'superagent';


const API_URL = 'tps://api.harvardartmuseums.org/person?q=culture:';
const API_KEY = '&apikey=dd77b0f0-1ad0-11ea-94bb-4da9e6156d05';

export const REQUEST_ART = 'REQUEST_ART';

export function requestArt(term = null){
    const data = request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`);
    return {
        type: REQUEST_ART,
        payload: data
    }
}