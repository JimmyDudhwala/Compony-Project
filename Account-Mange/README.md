# React Account Management Application

## Overview

This is a simple React application where users can create and manage their accounts. The application consists of three main pages: **Login**, **Register**, and **Profile**. User authentication and account management are handled using **localStorage**, and basic Bootstrap is used for styling.

## Features

- **Login:** Allows users to log in using their email and password.
- **Register:** Enables new users to create an account with a username, email, and password.
- **Profile:**
  - View account details.
  - Edit account information (username, email).
  - Logout from the account.
  - Delete the account permanently.

## Pages

1. **Login Page:**

   - Users can log in by entering their registered email and password.
   - Basic form validation is implemented.

2. **Register Page:**

   - New users can sign up by providing a username, email, and password.
   - The form includes validation for proper input formats.

3. **Profile Page:**
   - Displays the current user's account information.
   - Users can edit their profile details and save the changes.
   - A "Logout" button allows users to log out of the session.
   - A "Delete Account" button permanently removes the user account from local storage.

## Authentication

All user authentication and account management functions are handled through a utility module called `auth.js`. This module interacts with **localStorage** to store and retrieve user data.

- **Login:** Verifies if the provided credentials match the stored user data.
- **Register:** Saves the new user’s information in local storage.
- **Edit Profile:** Allows users to update their account information in local storage.
- **Logout:** Clears the user session.
- **Delete Account:** Removes the user’s data from local storage.

## Setup and Installation

1. Clone the repository to your local machine:
   ```bash
   git clone <your-repo-link>
   ```
