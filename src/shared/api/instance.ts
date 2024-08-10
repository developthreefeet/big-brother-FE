import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const instance = axios.create({
  baseURL: `${baseUrl}`,
  timeout: 1000 * 60,
  headers: {
    'Content-Type': 'application/json',
  },
});
