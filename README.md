# ⚡ Monthly Challenge App

![Monthly Challenge App Banner](https://github.com/KishoreRam-M/MonthlyChallengeApp/blob/e1a58387f87822271eed3aaaff4d28f6a42a54ef/f59ab08d-3df2-46b4-bdbe-4b43407e77f8.jpg)

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot" alt="Spring Boot"/>
  <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap"/>
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="Java"/>
</div>

<div align="center">
  <h3>Stay Motivated. Achieve More. Track Your Progress. Unleash your inner hero!</h3>
</div>

## 🦇 Overview

The Monthly Challenge App is a Batman-themed productivity tool designed to help users track and accomplish monthly challenges. With its sleek dark UI, animated elements, and intuitive interface, it makes goal tracking both fun and effective, treating each task like a mission in Gotham City.

![App Demo](https://via.placeholder.com/800x400/000000/FFD700?text=App+Demo)

## ✨ Features

### 🎯 Track Your Gotham Missions
- Create and log monthly challenges
- Add detailed descriptions and deadlines
- Keep track of your progress like Batman tracking criminals

### ⏰ Set Deadlines Like a Vigilante
- Set deadlines for each challenge
- Automatic deadline tracking
- Prevent crime (procrastination) before it happens

### 🏆 Complete & Conquer Gotham
- Mark challenges as completed
- Track completion dates
- View your success history

### 💫 Special Features
- Animated UI elements for an engaging experience
- Dark mode Batman-inspired design
- Responsive layout that works on all devices

## 🚀 Live Demo

Check out the live demo of the app: [Monthly Challenge App](https://your-demo-url.com)

## 🔧 Tech Stack

### Frontend
- React.js
- React Router for navigation
- Axios for API requests
- Bootstrap for styling
- Custom CSS animations

### Backend
- Spring Boot
- Spring Data JPA
- Jakarta Persistence
- Lombok
- Optimistic & Pessimistic Locking for data integrity

### Database
- MySQL/PostgreSQL (configurable)

## 📋 Installation & Setup

### Prerequisites
- Node.js (v14+)
- Java JDK 17+
- Maven or Gradle
- MySQL/PostgreSQL

### Backend Setup
1. Clone the repository
   ```bash
   git clone https://github.com/KishoreRam-M/monthly-challenge-app.git
   cd monthly-challenge-app/backend
   ```

2. Configure database in `application.properties`
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/challenges_db
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update
   ```

3. Build and run the Spring Boot application
   ```bash
   ./mvnw spring-boot:run
   ```
   or with Gradle
   ```bash
   ./gradlew bootRun
   ```

### Frontend Setup
1. Navigate to the frontend directory
   ```bash
   cd ../frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the React development server
   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3000`

## 🖥️ API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/challenges` | Get all challenges |
| GET | `/challenges/{id}` | Get challenge by ID |
| GET | `/challenges/{id}/status` | Get challenge status |
| POST | `/challenges` | Create a new challenge |
| PUT | `/challenges/{id}/complete` | Mark challenge as complete |
| DELETE | `/challenges/{id}` | Delete a challenge |

## 📦 Project Structure

```
monthly-challenge-app/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/krm/Challenges/App/
│   │   │   │       ├── controller/
│   │   │   │       ├── model/
│   │   │   │       │   └── Challenge.java
│   │   │   │       ├── repo/
│   │   │   │       │   └── ChallengeRepo.java
│   │   │   │       └── service/
│   │   │   │           └── ChallengeService.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── AddChallenge.js
│       │   ├── ChallengeLists.js
│       │   ├── LandingPage.js
│       │   └── NavBar.js
│       ├── styles/
│       │   └── LandingPage.css
│       ├── App.js
│       └── index.js
└── README.md
```

## 🎨 UI Screenshots

### Landing Page
![Landing Page](https://github.com/KishoreRam-M/MonthlyChallengeApp/blob/e1a58387f87822271eed3aaaff4d28f6a42a54ef/f59ab08d-3df2-46b4-bdbe-4b43407e77f8.jpg)

### Challenge List
![Challenge List](https://github.com/KishoreRam-M/MonthlyChallengeApp/blob/27d5dcee40b400322a167685f6231f99be2be025/b6fd9b2a-164c-4ce5-8e6e-22694bdd6562.jpg)
### Completion of Challenge
![Challenge List](https://github.com/KishoreRam-M/MonthlyChallengeApp/blob/27d5dcee40b400322a167685f6231f99be2be025/b6fd9b2a-164c-4ce5-8e6e-22694bdd6562.jpg)

### Add Challenge Form
![Add Challenge](https://github.com/KishoreRam-M/MonthlyChallengeApp/blob/fd0b409f0d68a700091741118a98f3544e1e3b54/aaf52021-f21c-44f5-8ef8-630416b8cb34.jpg)

## 🧠 Design Decisions

### Concurrency Control
The application uses JPA's `@Version` annotation for optimistic locking and `@Lock(LockModeType.PESSIMISTIC_WRITE)` for critical operations to ensure data consistency when multiple users access the system simultaneously.

### Batman Theme
The dark theme with yellow accents is inspired by Batman's color scheme, making the productivity app more engaging and visually distinctive.

### Animation Effects
Custom CSS animations like `fade-in`, `pulse-btn`, `hover-glow`, and `glow-text` create an interactive and dynamic user experience.

## 🛠️ Future Enhancements

- User authentication and profiles
- Challenge categories and tags
- Social sharing features
- Progress analytics and charts
- Mobile app version
- Challenge templates
- Reminder notifications

## 👨‍💻 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Spring Boot](https://spring.io/projects/spring-boot)
- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Batman](https://www.dc.com/characters/batman) for the inspiration

---

<div align="center">
  <p><i>"A hero can be anyone"</i></p>
  <p>Developed with ❤️ by <a href="https://github.com/KishoreRam-M">KishoreRam-M</a></p>
</div>
