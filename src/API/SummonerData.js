
import { accountKey } from '../shared/lolkey.js'

const api = {
    key: accountKey
}

export async function summonerByNameExample(name) {
    const response = await fetch(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${api.key}`);
    const data = await response.json();
    return data;
}

