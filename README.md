# Timer - Pomodoro look like

## Project

  Practice the styled components, routes, forms, useEffect, useContext, context API and LocalStorage

## Languages

  JavaScript, TypeScript, CSS, HTML

## Framework

### React + TypeScript + Vite
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

## Library

    date-fns
    immer
    phosphor-react
    react-dom
    react-hook-form
    @hookform/resolvers
    react-router-dom
    styled-components
    @types/styled-components
    zod


## Tools

  VS Code;
  Git;
  Chrome;

## Next Steps Suggetions
  1. Implement a rest start for a pomodoro look like.

## Learnings
  1. How to use the Styled Components
  2. Configure themes in Styled components
  3. Typescript file specific for the app
  4. Rewrite the DefaultTheme type from styled componentsSobrescrever using the styled.d.ts file
  5. Configure and uses for ESLint
  6. Route Layout - Create a Default Layout and export using Outlet and wrap routes with the route defined with a layout element for the same layout in all routes wrapped.
  7. Use transparent border top and bottom to center the icon and change border color in a hover case and the button/icon stay still in the same position
  8. Use navlink from react-router-dom on buttons to navigate through pages
  9. Input HTML tags you can define limits, verifications direct in the tag without JS Ex: type="number" step={5} min={5} max={60}
  10. Create dataList for inputs, and keep history from old inputs - In this case projects.
  11. Cascade write in styled.components - component.
  12. Create tables using react and good practices for responsiveness table
  13. When we will create a new component just because something is visual different, using styled components it's possible to just create a new component on styles and change (on this case the status color) using props.
  14. Forms in react
    1. Validadation on the inputs, to prevent submit without all the inputs are filled
    2. watch the input to enable the button - Passing using useContext method watch
    3. Two work models for forms *Important for how React works
      1. Controlled
        * Keep watching in real time the info the user input in the app inside a state - a variable in the component - When use this type? Simple forms with a few inputs, simple interfaces, login forms, sign-in forms
      2. Uncontrolled
        * Take the input value just when we need them, no real time update
        - Dashboards, ou complex forms
    15. Forms library - React hook form - can be used in controlled or uncontrolled method
      * npm i react-hook-form
    16. Register is a function that receive the input name and return some methods that can be used to handle with input in JS as onChange, onBlur, onFocus
    17. Use watch from react hook form to see changes in the input
    18. Validation library yup, joi, zod.
      * npm i zod
      to integrate the hook forms is necessary a resolver library provided from react hook form
      * npm i @hookform/resolvers
    19. Use typescript to assign the fields inside a interface through a generic.
    20. Function from zod which extract the type of our form from a validation schema. "...\Home\index.tsx" line 25
    21. Use a interface when define the validation object e the type when create a type based in another reference - good practice
    22. The infer on typescript means that defines automatic something ( automatizate a process determine the type of something)
    23. The react hook form has a function that reset the form, just call the function inside a submit function and will clean the fields to the original value. * This function insert the defautValues defined before that means that if the field value is not defined the field will not reset.
    24. Set the state with the active cycle for a new one, that way we don't need acess all the list and check one by one in a new cycle set.
    25. Using hook useEffect -> Side-effect, It will be called everytime the component is rendered. It's pretty commum use the useEffect wrong - instead a useState for example,  https://pt-br.legacy.reactjs.org/docs/hooks-effect.html
    26. Prop Drilling -> When we have a lot of props just for comunication through components - can be harmful for maintenance porpouses.
    27. React Concept - called Context API -> Allows share information through MANY components on the same time, as a global variable per say, which all components that in the same context can access, modify and when modified changes all the components that depend on this info are updated.
    28. React hook form has his on context that can be used too for simple things
    29. Context API through routes - when the information is necessary in others route pages (in this case the cycles) create a context component which will be responsible to pass this information through all the routes, and call on the app component
    30. List all the context data in the history
    31. userReducer is used to keep more complex informations and actions that demands to many code lines to change them. Has been applied in the cycles in that app.
    32. useReducer ( reducer is a pattern that can be used in many context and aplications)
    33. Save objects on reducer and mark the finished cycle.
    34. Create ActionTypes using enum from typescript
    35. Split actions from dispatch and standardization in a definition file
    36. Use Immer library to deal with datas from the app and no worry with imutability from react.
      *npm i immer
    37. Save some informations using localStorage from the browser, and not lose all the cycles history on the page update.