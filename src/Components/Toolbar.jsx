import React from 'react';
import PropTypes from 'prop-types';


class Toolbar extends React.Component {
    constructor(props) {
        super()
        this.props = props
    }
    render() {
        
        return (
            <div className='Toolbar'>
                {this.props.filters.map(o => {
                    return (
                        <button 
                            className={o === this.props.selected ? 'm5 btn btn-dark' : 'm5 btn btn-outline-dark'}
                            key={o}
                            onClick={() => this.props.onSelectFilter(o)} >{o}
                        </button>
                    )
                })}
    
            </div>
        )
    }
}

Toolbar.propTypes = {
    filters: PropTypes.array
  };

export default Toolbar;