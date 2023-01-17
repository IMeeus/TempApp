import { useState, createContext } from "react";
import Checkbox from "./Checkbox";

const FormContext = createContext(null);

const Form = ({ title }) => {
    const [checked, setChecked] = useState(false);

    const formContext = {
        checked: checked,
        toggle: () => {
            setChecked(!checked)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(formContext);
    }

    return (
        <FormContext.Provider value={formContext}>
            <h1>{title}</h1>

            <form id='form' onSubmit={onSubmit}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' />
                </div>
                <div>
                    <label htmlFor='numPersons'>Number of persons</label>
                    <input type='number' id='numPersons' />
                </div>
                <Checkbox id="terms" label="I agree with the Terms & Conditions" />
                <button type='submit'>Submit</button>
            </form>
        </FormContext.Provider>
    )
}

const titlePropType = (props, propName, componentName) => {
    const value = props[propName]
    if (!value) {
        return new Error(`${propName} in ${componentName} is undefined.`);
    }

    if (typeof value !== 'string') {
        return new Error(`${propName} in ${componentName} must be a string.`);
    }

    if (value.length > 50) {
        return new Error(`${propName} in ${componentName} must be shorter than 50 characters.`);     
    }
}

Form.propTypes = {
    title: titlePropType
}


export { FormContext };
export default Form;