import PropTypes from 'prop-types';
import css from './Filter.module.css' 

export const Filter = ({ onChange }) => {
    return (
        <div className={css.filter_block}>
            <label
                className={css.label}
                htmlFor="filter">
                Find contacts by name
            </label>
            <input
                className={css.input}
                id='filter'
                name='filter'
                type='text'
                placeholder='name to search for'
                onChange={onChange}
            />
        </div>
    )
}

Filter.propTypes={
    onChange: PropTypes.func.isRequired,
    
}