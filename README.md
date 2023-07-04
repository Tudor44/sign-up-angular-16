# Sign Up Entelechia Application

A demonstration using Angular 16 for a single-page application with a sign up form.

## Description

The application contains the concepts for build a basic Angular application.

It is based by the following features:

1. The application has a responsive interface, making it easy to use across various devices.

2. The application dynamically displays the full name of the user in the subtitle, as they input their first and last name into the form.

3. Form Validation: The form fields in the application with validation. All fields are required, and the password field has specific requirements, including a minimum of eight characters, a mixture of lower and uppercase letters, and restrictions against including the user's first or last name.

4. Data Interaction: Once the form is successfully filled, the application interacts with a test API to send the data and retrieve responses two times using RxJS for managing state and flow of data.

## Technologies Used

1. Angular v16: The primary framework used for building the application.
3. RxJS: Used for managing asynchronous data and controlling form state.
4. Bootstrap 4: Used for styling the application and making it responsive.

## Usage

### Prerequisite
1. Node 18.16.1
2. npm 9.5.1

### Setup
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run npm install to install all necessary dependencies.
4. Run ng serve to start the development server. Navigate to http://localhost:4200/ to view the application.
5. Run ng build if you want create a distribution production-ready