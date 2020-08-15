import axios from 'axios';

const baseUrl = 'https://chakky-jr.github.io/mock/sample1';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// 記事 を取得する
const getAll = async () => {
    const rand = getRandomInt(4);
    const response = await axios.get(`${baseUrl}/${rand}.json`);
    return response.data;
};

export default { getAll };