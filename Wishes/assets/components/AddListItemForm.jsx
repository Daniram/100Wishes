import React from 'react';
import Input from './Input.jsx';

var AddListForm = React.createClass({
    getInitialState: function() {
        return {
            buttonText: 'Add Wish',
            submitted: false,
            clear: false,
            name: '',
            description: ''
        };
    },
    handleFieldChange: function(fieldId, value) {
        var newState = {};
        newState[fieldId] = value;

        this.setState(newState);
    },

    submitForm: function(e) {
        e.preventDefault();

        this.setState({
            submitted: true,
            clear: true });

        this.props.listItemActions.setListItemData({
            name: this.state.name,
            description: this.state.description
        });
    },

    render: function() {
        return (
            <div>
                <form className={ 'form-inline' } >
                    <Input
                        id="name"
                        onChange={ this.handleFieldChange }
                        value={ this.state.name }
                        clear={ this.state.clear }
                        type="text"
                        placeholder="List Name" />
                    <Input
                        id="description"
                        onChange={ this.handleFieldChange }
                        clear={ this.state.clear }
                        value= { this.state.description }
                        placeholder="Description"
                        type="text"/>
                    <button type="submit" onClick={ this.submitForm } className="btn btn-default">{ this.state.buttonText }</button>
                </form>
            </div>
        );
    }
});

export default AddListForm;