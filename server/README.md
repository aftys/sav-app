<!-- @format -->

# Sav

## Project Structure

The project is organized into different packages to maintain a structured codebase:

1. **domain:** Various models of the application are organized under the domain package.

2. **model:** DTOs (data transfer objects) for the models are present under the model package. This package also includes the types created, such as "enums."

3. **repos:** Data access objects (DAOs) responsible for interacting with the database are present in the repos package.

4. **rest:** The controller layer, a crucial component, binds everything together from the moment a request is intercepted until the response is prepared and sent back. The controller layer is present in the rest package, serving as the API REST.

5. **service:** The service layer, responsible for business logic, is defined under the service package.

## Development

To set up the development environment:

1. Update your local database connection details in the `application.properties` file or create your own `application-local.properties` file to override settings specifically for development.

2. Ensure that Lombok is supported by your IDE. For IntelliJ, install the Lombok plugin and enable annotation processing.

After successfully setting up the development environment, you can access the application at `localhost:8080` after starting it.
