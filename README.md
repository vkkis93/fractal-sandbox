[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
# Fractal

It's serverless project which uses AWS Lambda && AWS API Gateway.

## Documentation
- [Install](#install)
- [Requirements](#requirements)
- [Testing locally](#testing-locally)
- [Unit tests](#unit-tests)
- [CI/CD](#ci/cd)


# Install
In root of project need to run
```bash
yarn
```
or
```bash
npm install
```

and the same step repeat for folder ```functions```.

# Requirements
On your PC you should have install
- [Serverless](https://serverless.com) -*  npm install -g serverless@1.43.0*
- Node.js >= 8.10
- NPM or Yarn

# Create/Deploy stack locally
We use [serverless framework](https://serverless.com) to build serverless app.

The Serverless Framework needs access to your cloud provider's account so that it can create and manage resources on your behalf.
The quick way to do it's export environment variables *AWS_ACCESS_KEY_ID* & *AWS_SECRET_ACCESS_KEY*
Example
```bash
export AWS_ACCESS_KEY_ID=<your-key-here>
export AWS_SECRET_ACCESS_KEY=<your-secret-key-here>
```
Now you are ready to deploy serverless stack
```bash
cd functions;
sls deploy --stage=REPLACE_WITH_STAGE_NAME
```
All stages you can find in ```functions/serverless.yml``` in section ```custom```

# Testing locally
For local testing we use [serverless-offline](https://github.com/dherault/serverless-offline).
For running you need to run command ```sls offline``` in folder ```functions```.
App will be ready accept requests via ```http://localhost:3000/```

# Unit tests
As a basis for unit testing was chosen ```jest```.
All unit tests are located in folder ```tests```.
For running tests
```bash
npm run jest
```

# CI/CD

Implemented CI/CD by using AWS CodePipeline/ AWS Codebuild/ AWS CodeDeploy.
AWS automatically detects new changes and uploads it.
In CI section we run unit tests and if tests passed - codedeploy deploys latest changes.
