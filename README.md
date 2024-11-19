# Portfolio Website

[![Deploy Portfolio](https://github.com/norandom/art_app/actions/workflows/deploy.yml/badge.svg)](https://github.com/norandom/art_app/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![Styled Components](https://img.shields.io/badge/Styled_Components-6.1.13-pink.svg)](https://styled-components.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![Tests](https://img.shields.io/badge/Tests-Jest-C21325?logo=jest&logoColor=white)](https://jestjs.io/)

A crafty, responsive and simple portfolio website built with React, TypeScript, and Styled Components. Features a clean design, accessibility and internationalization support.

* Download option for Human Ressource professionals in ATS format.
* Contact option for potential clients.

![Portfolio Screenshot](screenshots/screenshot.png)

## ✨ Features

- 🌍 Internationalization (English/German)
- ♿ Accessibility focused 
- 📱 Fully responsive design 
- 🎨 Modern animations with a conservative art style
- 🚀 Optimized performance 
- 📄 CV download options (PDF/DOCX) for your curated and optimized documents
- 🔍 SEO (free self-advertising)
- 🚀 Deployment to GitHub Pages (free hosting)
- 📦 Applicant Tracking System (ATS) support (CVs to help your recruiter / hiring manager)
- 📝 Skill table in an Excel like look
- Git branch support
- and more...


## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/norandom/art_app.git
   cd art_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🛠️ Technologies

- React 18
- TypeScript
- Styled Components
- Framer Motion
- React Router

## 📁 Project Structure

```
art_app/
├── public/          # Static files
├── src/             # Source code
│   ├── components/  # React components
│   ├── context/     # React context providers
│   ├── styles/      # Global styles and themes
│   ├── translations/# Internationalization files
│   ├── utils/       # Utility functions
│   └── App.tsx      # Main application component
├── package.json     # Dependencies and scripts
└── ...
```

## 🔧 Configuration

### Dependencies

Key dependencies and their versions:
- React: ^18.3.1
- TypeScript: ^4.9.5
- Styled Components: ^6.1.13
- Framer Motion: ^11.11.17
- Handsontable: ^14.6.1
- React Scripts: ^3.0.1

### Testing

The project uses Jest and React Testing Library for unit and integration tests. Run the tests with:

```bash
npm test                 # Run tests in watch mode
npm test -- --coverage  # Run tests with coverage report
```

Test files are located in `src/components/__tests__/` and follow the naming pattern `*.test.tsx`.

Key testing features:
- Unit tests for components
- Integration tests for component interactions
- Mocked intersection observer for animation tests
- Styled-components theme provider integration

### Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions. Any push to the main branch will trigger a deployment. 

To set up deployment:
1. Go to your GitHub repository settings
2. Navigate to "Settings" > "Developer settings" > "Personal access tokens" > "Tokens (classic)"
3. Generate a new token with `repo` and `workflow` permissions
4. Go to your repository settings
5. Navigate to "Settings" > "Secrets and variables" > "Actions"
6. Add a new secret named `DEPLOY_TOKEN` with your token as the value

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Your Name
- Website: [Because Security](https://www.because-security.com/)
- GitHub: [@norandom](https://github.com/norandom)
- LinkedIn: [Marius Ciepluch](https://www.linkedin.com/in/marius-ciepluch-9ba12313b/)
