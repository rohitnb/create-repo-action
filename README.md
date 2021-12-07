# Create Repo Action

This action will create a repository in the namespace of the calling workflow. For example, if this action is called from `DemoOrg` , the repo will be created in `DemoOrg`

## Inputs:

`repo-name`: Name of the repository

`org-admin-token`: Org admin token with `repo` and `admin:org` scope

## Outputs:

`repo-url`: URL of the newly created repo. Blank if error.
