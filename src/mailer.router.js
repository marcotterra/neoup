import express from 'express';
import axios from 'axios';

const router = express.Router();

const api = () => {
  return axios.create({
    baseURL: config.api_dev,
    timeout: 2000
    // headers: { "X-Requested-With": "XMLHttpRequest" }
  });

router.get('/', (req, res) => {
    res.json({
        status: 'funfou'
    })
});

export default router;