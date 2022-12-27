import axios from "axios";

const clientRequest = axios.create({
  baseURL: "https://developer-lostark.game.onstove.com",
  headers: {
    Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMDA1ODkifQ.AHhDk3ftIkWlFJB1nT1jOzgPJe-Mx978Wbe9-LrkAQjdrw2I2v4mvN1ynK2PNBzJlqu1V54cGfMAp4NbqXhLXaazCV_GOBdpuI6AcQrPfFVrRt1tA6RYQa-1UhM4GytYa-BafChhURuGdgs0-wClukyPZPLFkwEtoeNuU9VOSLYXvlQFmrTE01l-9MNOY0UOtBbpT_JAT-dwSxPfm2cUaoWZNiqorP3sGe-VKO3kp-uVBcVkRZKuXLW64soG8x0ATW0Wvft674PrHLjtiWTHEX1mgR6-EhZCK8A3MJjfN0NGcQ6UOtzcAo-hWOSUCSIYgJGUyBT5K-ODWv9y7g_3_w`,
  },
});

const createGetRequest = (url, body) =>
  clientRequest.get(url, body).then((r) => r.data);

export const getNoticeList = () => createGetRequest(`/news/events`); // 공지사항
export const getCharacterInfo = (characterName) =>
  createGetRequest(`/characters/${characterName}/siblings`); // 원정대 전체 캐릭터 정보
export const getArmorProfiles = (characterName) =>
  createGetRequest(`/armories/characters/${characterName}/profiles`); // 상세 캐릭터 정보
export const getEquipment = (characterName) =>
  createGetRequest(`/armories/characters/${characterName}/equipment`); // 검색한 캐릭터 착용 장비
export const getAvatars = (characterName) =>
  createGetRequest(`/armories/characters/${characterName}/avatars`); // 검색한 캐릭터 아바타 장비
export const getCombatSkills = (characterName) =>
  createGetRequest(`/armories/characters/${characterName}/combat-skills`); // 검색한 캐릭터 스킬 및 트라이포드
export const getEngrabving = (characterName) =>
  createGetRequest(`/armories/characters/${characterName}/engravings`); // 검색한 캐릭터 각인
export const getCards = (characterName) =>
  createGetRequest(`/armories/characters/${characterName}/cards`); // 검색한 캐릭터 장착 카드 효과
export const getGems = (characterName) =>
  createGetRequest(`/armories/characters/${characterName}/gems`); // 검색한 캐릭터 보석 효과
export const getColosseums = (characterName) =>
  createGetRequest(`/armories/characters/${characterName}/colosseums`); // 검색한 캐릭터의 pvp정보
export const getCollectibles = (characterName) =>
  createGetRequest(`/armories/characters/${characterName}/collectibles`); // 검색한 캐릭터의 수집품 현황
