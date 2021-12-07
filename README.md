# Quickstart: Boilerplate project for GitHub Actions written in JavaScript

To quickly have an environment to make & test JavaScript GitHub actions. It uses the basic JavaScript action from [this tutorial](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action). To get started, just follow the instructions the [Usage section](https://github.com/PrLemon/js-action-template-repo/blob/main/README.md#usage).

💡 If you're using Codespaces, this repo contains a devcontainer file that makes it faster to be able to start using this project. The Codespace is configured to install the Actions libraries and `ncc` to distribute this easily.

## Usage:

### Prepare: 
- Click on the Use this template button and create a copy for yourself

#### If using your local Dev Environment:
- Clone this to your local
- Run a `npm i -g @vercel/ncc`
- Run `npm i -g @actions/github`
- Run a `npm i -g @actions/core`

#### If using a GitHub Codespace
- Spin up your Codespace

### Use:
- Modify the `action.yml` file to use the inputs you will be using
- Modify `src/index.js` 
- Build by running 
```
ncc build src/index.js --license licenses.txt
```
- Commit everything
- Go to the Actions tab to run this workflow manually

#### Note
This repository uses a way to call Actions from a private repository. Whatever is written in this action can only be used by the repository itself. It cannot be referenced from elsewhere.

```
- name: Hello world action step
  uses: ./ # Uses an action in the root directory
  with:
    who-to-greet: 'Mona the Octocat'
```

Converting the repository to public will allow it to be referenced across multiple repositories.

```
- name: Hello world action step
  uses: <owner-org>/<repo-created-from-this-template>@<tag>
  with:
    who-to-greet: 'Mona the Octocat'
```
