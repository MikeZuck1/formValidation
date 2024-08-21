# A Form Validation with @vite

Welcome to My Vite Project! This project is configured with Vite, a fast, modern project-building tool for web development. This project uses vanilla JavaScript (without frameworks like React or Vue) and is structured for simplicity and efficiency.

## Description of folders and files
public/: Contains publicly accessible static files, such as images and favicon.

src/ : Contains all project source files.

assets/ : Contains resources such as CSS/SCSS styles and images used in the project.

components/ : Contains reusable JavaScript scripts for components such as form fields.

pages/ : Contains JavaScript scripts for each page of the application.

app.js : The main file that initializes the application.

main.js : Application entry point, where the application is mounted.

router.js: Route configuration file if you need to manage different pages.

## Prerequisites
- npm (ou Yarn) 
- npm create vite@latest  

## Installation

1. Clone this repository on your local machine : 

```bash
  git clone https://github.com/MikeZuck1/menuIcon.git
```

2. Install dependencies :

```bash
  npm install
```

3. Go to the project folder : 

```bash
  cd menuIcon
```

4. Launch the development server :
```bash
  npm run dev
```
This will start the development server, and your project will be accessible at http://localhost:5173. 

5. Building for production :

To create a production-optimized version of the project, run :
```bash
  npm run build
```

## Deployment

Once the project has been built with npm run build, you can deploy the contents of the dist/ folder on a web server.

```bash
  npm run build
```

## Free hosting with GitHub Pages
1. Build the project with npm run build.
2. Push the contents of the dist/ folder onto a gh-pages branch of your repository.
3. Configure GitHub Pages to serve files from the gh-pages branch.


## Contributing

Contributions are welcome! If you would like to improve this project, please submit a pull request. Please follow good development practices.

## License

This project is licensed under the MIT license. See the LICENSE file for more details.

## Thanks
Thanks to the Vite team for this incredible modern web development tool!