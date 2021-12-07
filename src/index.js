const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

const targetRepoName = core.getInput('repo-name');
const ghToken = core.getInput('org-admin-token');
var createRepoData = JSON.stringify(
  {
    "name":targetRepoName,
    "private":true,
    "visibility":"private"
  }
);
const targetOrgName = github.context.payload.repository.owner.login;

var config = {
  method: 'post',
  url: 'https://api.github.com/orgs/'+targetOrgName+'/repos',
  headers: { 
    'Accept': 'application/vnd.github.v3+json', 
    'Authorization': 'token '+ghToken, 
    'Content-Type': 'application/json'
  },
  data : createRepoData
};

axios(config)
.then(function (response) {
  console.log("Repo "+targetRepoName+' created successfully!');
  core.setOutput("repo-url", "https://github.com/"+targetOrgName+"/"+targetRepoName);
})
.catch(function (error) {
  core.setOutput("repo-url", "");
  core.setFailed(error.message);
});