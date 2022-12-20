import axios from "axios";

const clientRequest = axios.create({
  baseURL: "https://developer-lostark.game.onstove.com",
  headers: {
    Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMDA1ODkifQ.AHhDk3ftIkWlFJB1nT1jOzgPJe-Mx978Wbe9-LrkAQjdrw2I2v4mvN1ynK2PNBzJlqu1V54cGfMAp4NbqXhLXaazCV_GOBdpuI6AcQrPfFVrRt1tA6RYQa-1UhM4GytYa-BafChhURuGdgs0-wClukyPZPLFkwEtoeNuU9VOSLYXvlQFmrTE01l-9MNOY0UOtBbpT_JAT-dwSxPfm2cUaoWZNiqorP3sGe-VKO3kp-uVBcVkRZKuXLW64soG8x0ATW0Wvft674PrHLjtiWTHEX1mgR6-EhZCK8A3MJjfN0NGcQ6UOtzcAo-hWOSUCSIYgJGUyBT5K-ODWv9y7g_3_w`,
  },
});

export const createGetRequest = (url, body) =>
  clientRequest.get(url, body).then((r) => r.data);

export const getNoticeList = () => createGetRequest(`/news/events`); // 공지사항

const formatQueryStr = (json) => {
  var queryString = Object.entries(json)
    .map(([key, value]) => key + "=" + escape(value))
    .filter((v) => v)
    .join("&");

  return queryString;
};
