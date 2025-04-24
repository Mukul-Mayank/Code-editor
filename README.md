# Code-editor
A code editor challenge platform built with Next.js 14, TypeScript, Tailwind CSS, and CodeMirror. It supports multiple languages, syntax highlighting, problem statements, and output simulation. Additional features include a timer, localStorage for code persistence, and theme toggling.

Platform Overview:

The Code Editor Challenge Platform is a web-based solution for coding challenges, enabling users to solve problems in different programming languages.

Built using Next.js 14, TypeScript, Tailwind CSS, and CodeMirror, it offers an interactive and engaging environment for coding challenges with real-time feedback and multiple features to improve the user experience.

Key Features:

Multiple Language Support:

Currently supports Python through a FastAPI backend, allowing users to execute Python code.

Future expansion plans include support for additional languages, such as JavaScript, C++, and Java.

Syntax Highlighting:

CodeMirror is used as the core text editor, providing syntax highlighting for various languages.

Syntax highlighting enhances readability, helping users to easily identify errors and better understand the structure of their code.

Problem Statement Panel:

A dedicated panel displays the problem statement for the coding challenge.

This panel remains accessible while users are coding, reducing the need to switch between tabs or lose track of the task.

Output Simulation:

After code execution, the platform simulates the output and displays it in a separate panel.

This feature provides real-time feedback, helping users identify bugs or errors immediately after running their code.

Timer:

A countdown timer has been implemented to create a time-based challenge element.

This timer adds a sense of urgency, helping users to manage their time effectively and providing a competitive edge for users solving challenges under constraints.

LocalStorage for Code Persistence:

Code is saved in localStorage, allowing it to persist even after a page refresh or browser restart.

This feature ensures that users don’t lose their progress and can continue coding from where they left off.

Theme Toggling:

Users can switch between light and dark themes, making the platform more customizable.

The theme toggle enhances the user experience, allowing users to choose their preferred interface for better readability and comfort.

Technologies Used:

Next.js 14:

Next.js 14 is used for server-side rendering (SSR), static site generation (SSG), and routing, providing improved performance and SEO.

It also helps in creating a seamless experience by handling both server-side and client-side rendering efficiently.

TypeScript:

TypeScript is used to ensure type safety, which reduces runtime errors and makes the codebase more maintainable.

TypeScript also improves the developer experience by providing better tooling, such as auto-completion and type checking.

Tailwind CSS:

Tailwind CSS is utilized for styling, offering a utility-first framework to rapidly build responsive and customizable UIs.

It ensures consistency across the design while making it easy to adjust the layout for various screen sizes.

CodeMirror:

CodeMirror is integrated as the text editor, offering features such as syntax highlighting, autocompletion, and code folding.

It enhances the coding experience, making it more interactive and user-friendly for users.

FastAPI:

The backend uses FastAPI to execute Python code and send the output back to the frontend.

FastAPI is known for its speed and ease of use in creating APIs, making it a good choice for a backend to handle code execution efficiently.

Planned Future Features:

Support for Additional Languages:

Additional languages will be supported via the backend API, including JavaScript, Java, C++, etc.

This will make the platform more versatile and cater to a wider audience.

Leaderboard:

A leaderboard feature will be added to track users' performance.

Users will be ranked based on criteria such as completion time, number of challenges solved, or difficulty level of challenges.

Enhanced UI & Animations:

Future updates will focus on improving the platform's UI with smoother animations and more visually engaging elements.

These changes will help create a more polished and professional user experience.

Challenge Progress Tracker:

A progress tracker will be added to keep track of which challenges have been solved and which are still pending.

This feature will help users measure their progress and stay motivated.

Customizable Challenge Settings:

Users will be able to customize challenge settings, such as time limits, difficulty levels, and problem types.

This will provide a more tailored and engaging experience for users.

How to Run the Project Locally:

The platform can be run locally by following simple steps:

Clone the repository and install the frontend dependencies (yarn install or npm install).

Set up the FastAPI backend by installing the required Python dependencies (pip install -r requirements.txt).

Run the frontend and backend servers to start the application.

After setting it up, you can access the platform locally to start coding and testing.

Contributing:

Contributions are welcome! To contribute:

Fork the repository and create a new branch for your feature.

Commit your changes and push them to your fork.

Open a pull request to submit your changes for review.

License:

The project is licensed under the MIT License. For more details, check the LICENSE file.
