import PropTypes from 'prop-types';

const Checkbox = ({ id, label, onChange, checked }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type='checkbox' id={id} onChange={onChange} checked={checked} />
        </div>
    )
}

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Checkbox;