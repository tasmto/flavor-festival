import axios from 'axios';
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

// Get Search results
export const searchUsers = async (text) => {
  const searchQuery = new URLSearchParams({
    q: text,
  });

  const response = await github.get(`/search/users?${searchQuery}`);
  return response.data.items;
};

// Get user and repos
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};

// ! Old Way
// Get user repos
// export const getUserRepos = async (login) => {
//   const searchQuery = new URLSearchParams({
//     sort: 'created',
//     per_page: 10,
//   });

//   const response = await fetch(
//     `${GITHUB_URL}/users/${login}/repos?${searchQuery}`,
//     {
//       headers: {
//         Authorization: `token ${GITHUB_TOKEN}`,
//       },
//     }
//   );
//   const ResponseData = await response.json();
//   return ResponseData;
// };
