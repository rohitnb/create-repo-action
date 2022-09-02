const core = require('@actions/core');

const targetRepoName = core.getInput('repo-name');
const targetOrgName = core.getInput('org-name');
const ghToken = core.getInput('org-admin-token');


const octokit = new Octokit({
    auth: ghToken
  })

await octokit.request('POST /orgs/'+targetOrgName+'/repos', {
    org: targetOrgName,
    name: targetRepoName,
    description: 'This is a demo repo created from an action repository',
    homepage: 'https://github.com',
    'private': true,
    has_issues: true,
    has_projects: true,
    has_wiki: true
  })

