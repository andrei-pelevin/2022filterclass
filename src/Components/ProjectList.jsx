import React from 'react';
import PropTypes from 'prop-types';

class ProjectList extends React.Component {
    constructor(props) {
        super()
        this.props = props
    }
    render() {

        
        return (
            <div className='ProjectList'>
                {this.props.projects.map((item, i) => {
                    if (this.props.selected === item.category) {
                        return <div className='m5' key={i}><img alt='' src={item.img} /></div>
                    }
                    else if (this.props.selected === 'All') {
                        return <div className='m5' key={i}><img alt='' src={item.img} /></div>
                    }
                    else {
                        return ''
                    }
                    
                }) }
    
            </div>
        )
    }
}

ProjectList.propTypes = {
    projects: PropTypes.array
  };

export default ProjectList;
