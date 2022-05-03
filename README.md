# Release Pipeline Setup Guide
This release pipeline upload APP Build and Release Page to Azure Blob automatically which accept both android and iOS build.
You may skip the android/iOS Artifact Setup if android/iOS build is not available.

### Artifact Setup for android and iOS build
- Add an artifact and select Build in Source Type
- Select the target project and source (build pipeline)
- Update Source alias to '_android' or '_ios' for android and iOS build respectively

### Artifact Setup for target repository
- Add an artifact and select GitHub in Source Type
- Select the "pastellink/app-dist" repository and update the Source alias to "_src"

### Pipeline variable setup

Pipeline variables are required to setup correctly for every project and environment.

| Name | Description |
| ------ | ------ |
| APPNAME | Application Name |
| BASE_URL | Base URL of Azure Blob Storage |
| BUNDLE_ID | Application Bundle ID|
| ICON_PATH | URL of Application Icon |
| VERSION | Application Version |

> Note: VERSION are required to update on every release

### Create a New Release Pipeline
- Click on "Create release"
- Select the target artifact version
- Update the variable "VERSION" if necessary

### After Release Pipeline Finished
- The generated release page will be uploaded to Azure Blob
- The identifier of the generated release page can be found in the 'Bash Script' step
- The URL of the release page is <BASE_URL>/<identifier>.html