# Product Frontend

This project is a simple frontend application for managing products. It allows users to list, create, edit, and delete products through a user-friendly interface. The application interacts with an existing API to perform CRUD operations.

## Project Structure

```
product-frontend
├── public
│   └── index.html        # Main HTML document
├── src
│   ├── css
│   │   └── styles.css    # Styles for the application
│   └── js
│       ├── api.js        # API interaction functions
│       └── app.js        # Application logic
├── .gitignore             # Files to ignore by Git
├── package.json           # npm configuration file
└── README.md              # Project documentation
```

## Features

- **List Products**: Displays a list of products fetched from the API.
- **Create Product**: Allows users to add new products through a form.
- **Edit Product**: Users can modify existing product details.
- **Delete Product**: Users can remove products from the list.

## Getting Started

To run this application locally, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd product-frontend
   ```

2. **Install dependencies** (if any):
   ```
   npm install
   ```

3. **Run the application**:
   You can use a local server to serve the `public/index.html` file. For example, you can use the `live-server` package:
   ```
   npx live-server public
   ```

4. **Open your browser**:
   Navigate to `http://localhost:8080` (or the port specified by your local server) to view the application.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.

## License

This project is open-source and available under the [MIT License](LICENSE).