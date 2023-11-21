// import React, { useState } from 'react';

// const AddDahliaForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         value: '',
//         quantity: 0,
//     });

//     const handleInputChange = event => {
//         const { name, value } = event.target;
//         setFormData(prevState => ({ ...prevState, [name]: value }));
//     };

//     const handleSubmit = event => {
//         event.preventDefault();
//         // Now you can access formData here
//         console.log(formData);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Name:
//                 <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
//             </label>
//             <br />
//             <label>
//                 Value:
//                 <input type="text" name="value" value={formData.value} onChange={handleInputChange} />
//             </label>
//             <br />
//             <label>
//                 Quantity:
//                 <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} />
//             </label>
//             <br />
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default AddDahliaForm;

import React, { Component } from 'react';

class AddDahliaForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            value: '',
            quantity: 0,
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        // Pass the form data to the parent component
        this.props.onSubmit(this.state)
        // Optionally, you can reset the form fields
        this.setState({
            name: '',
            value: '',
            quantity: 0,
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Variety: 
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Value: 
                    <input type="text" name="value" value={this.state.value} onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Quantity: 
                    <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleInputChange} />
                </label>
                <br />
                <button type="submit">Add to inventory</button>
            </form>
        );
    }
}

export default AddDahliaForm;

