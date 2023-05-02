# Learning Resources App

This is a small Vue app based on a tutorial.

It demonstrates dynamic components in TheResources.vue:

`<keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>`

As well as a reusable dialog window in BaseDialog.vue

## Installing

1. Run `npm install` in the extracted project folder to install all required dependencies
2. Run `npm run serve` to bring up the development server, view the app at localhost:8080

## Troubleshooting

Because this is based on starter files from a tutorial, some files might be outdated. 
You might come across the following errors:

Error: `ERR_OSSL_EVP_UNSUPPORTED`

1. https://stackoverflow.com/questions/69394632/webpack-build-failing-with-err-ossl-evp-unsupported
2. https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported

Solution: `npm audit fix --force`

Error: `ESLint is not a constructor`

https://stackoverflow.com/questions/64334362/eslint-is-not-a-constructor

Solution: `npm i eslint@7.32.0`