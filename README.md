# Cloudinary Node.js SDK Quick Start

This small Node.js project shows the finished result of the [Node.js SDK Quick Start](https://cloudinary.com/documentation/node_quickstart) instructions provided in the Cloudinary documentation.

Feel free to fork this project and use it as a quick way to get started playing with the Cloudinary Node.js SDK. However, keep in mind that the intention of this code is to help developers quickly get started using several common Cloudinary features. It doesn't necessarily employ coding best practices and the code isn't intended for production.

## Running the script

To run the script:

1. Clone this repo.
1. Open a terminal in the `cld-node-sdk-quick-start` folder.
1. Set your Cloudinary API Environment variable:
   ```
   export CLOUDINARY_URL=cloudinary://<api_key>:<api_secret>@<cloud_name>
   ```
   You can find your API Environment variable in the Account Details section of your Cloudinary console.
1. Install Cloudinary:
   ```
   npm install cloudinary
   ```
1. Run the script:
   ```
   node index.js
   ```
