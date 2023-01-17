import PropTypes from 'prop-types';
import { useContext } from 'react';
import { FormContext } from './Form';

const Checkbox = ({ id, label }) => {
    const formContext = useContext(FormContext);

    const onChange = () => {
        formContext.toggle();
    }

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type='checkbox' id={id} onChange={onChange} checked={formContext.checked} />
        </div>
    )
}

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

export default Checkbox;