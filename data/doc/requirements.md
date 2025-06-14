# Functional Requirements for the E110 Checklist Application

## Objective
Develop an application that reproduces the checklist for operating the E110 in simulators, facilitating the verification of each flight phase.

## Checklist Structure
- The checklist should be divided into flight phases.
- Each phase will contain a set of items to be verified.

## Features
1. **Data Integration**
   - The application should fetch checklist data from the `checklist.js` file.

2. **Checklist Display**
   - When the application is opened, all checklist items should be presented unchecked.
   - The checklist phases should start all collapsed.
   - The user will be able to expand (uncollapse) each phase by clicking on it.
   - When one phase is opened, all others should be closed.

3. **User Interaction**
   - The user should click on checklist items to mark them as complete.
   - When all items in a phase are completed, the phase should be marked as complete.

4. **Resetting the Checklist**
   - There should be a button to reset the checklist, which will uncheck all items.

5. **Responsiveness**
   - The checklist layout should be responsive, adapting to different types of devices (browsers, tablets, and smartphones).

## Technologies
- **Layout and UI Management:** We will use Tailwind CSS for the design and layout of the checklist.
- **Hosting:** The checklist should be hosted on Firebase.
- **CI/CD:** A CI/CD pipeline should be implemented using GitHub Actions.

## Final Considerations
The application should provide an intuitive and efficient user experience, ensuring that all checklist items are easily accessible and manageable during the operation of the E110.


