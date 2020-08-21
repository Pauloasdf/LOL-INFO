import { summonerByNameExample } from '../../API/SummonerData';

test('search summoner name should return a object', () => {
    return summonerByNameExample('Sua Sogra').then(data => {
        expect(data).toBe('a');
    });
});
