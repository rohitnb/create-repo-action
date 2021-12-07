const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

const targetRepoName = core.getInput('repo-name');
var createRepoData = JSON.stringify(
  {
    "name":targetRepoName,
  }
);
const payload = JSON.stringify(github.context.payload, undefined, 2);
console.log(payload.repository.owner.login);

// var config = {
//   method: 'post',
//   url: 'https://api.github.com/orgs//repos',
//   headers: { 
//     'Accept': 'application/vnd.github.v3+json', 
//     'Authorization': 'token ', 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };