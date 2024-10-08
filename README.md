# React TS Axios Project

This project demonstrates a simple implementation of dynamic product loading using React, TypeScript, and Axios. The project fetches and displays product details, with a focus on handling loading states, errors, and dynamic data retrieval using hooks.

## Features

- **Dynamic Product Loading**: Fetches and displays products dynamically.
- **Axios Integration**: Uses Axios for API calls to fetch product data.
- **Custom Hooks**: Manages product fetching with custom `useProducts` hook.
- **Loader Component**: Displays a loading spinner while data is being fetched.
- **Error Handling**: Displays error messages when the data fetching fails.

## How It Works

- The `useProducts` hook is responsible for fetching product data from an API using Axios.
- The `Product` component renders product details for each fetched product.
- The `Loader` component shows a spinner while the data is being loaded.
- The `ErrorMessage` component displays error messages if the API call fails.

The project allows users to dynamically load products by clicking the "Load Next Product" button. This increments the product ID and fetches the next product from the API.

## Running the App

### Clone the repository:

```bash
git clone https://github.com/SergiyKonrad/react-ts-axios-project.git
```

Move to the project directory:

```
cd react-ts-axios-project
```

To install the dependencies:

```bash
npm install
```

To start the development server:

```bash
npm start
```

Open http://localhost:3000 to view the app in the browser.

## Deployment

This project is deployed to Vercel at the following link:
[React TS Axios Project on Vercel](https://react-ts-axios-project.vercel.app/)

## Contributions

Feel free to open an issue or submit a pull request if you'd like to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENCE) file for details.
