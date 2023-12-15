const Web3 = require('web3');
const express = require('express');

const app = express();
const port = 3000;

// Ethereum 노드에 연결, ip주소는 docker-compose.yml의 서비스 명을 dns주소로 사용 가능
const web3 = new Web3('http://geth-rpc-endpoint:8545');

// 블록 정보 조회 API
app.get('/blocks', async (req, res) => {
  try {
    // 가장 최근의 블록 번호 가져오기
    const blockNumber = await web3.eth.getBlockNumber();

    // 최근 5개의 블록 정보 가져오기
    const blocks = [];
    for (let i = 0; i < 5; i++) {
      const block = await web3.eth.getBlock(blockNumber - i);
      blocks.push(block);
    }

    res.json(blocks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});