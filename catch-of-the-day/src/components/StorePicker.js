import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();

    static propTypes = {
        history: PropTypes.object
    }

    goToStore = (event) => {

        //1. Stop form from submitting
        event.preventDefault();
        //2. Get text from input
        //GOLDEN RULE: dont touch the DOM
        const storeName = this.myInput.current.value
        console.log(storeName)
        //3. Change page to /store/what was entered
        this.props.history.push(`/store/${storeName}`)
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input
                    type="text"
                    ref={this.myInput}
                    required placeholder="Store Name" 
                    defaultValue={getFunName()}        
                />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;