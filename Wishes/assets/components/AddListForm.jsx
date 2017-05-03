import React from 'react';
import Input from './Input.jsx';

var AddListForm = React.createClass({
    getInitialState: function() {
        return {
            buttonText: 'Add List',
            hidden: true,
            submitted: false,
            clear: false,
            name: this.props.newListData.name,
            year: this.props.newListData.year,
            description: this.props.newListData.description
        };
    },
    toggleForm: function(e) {
        e.preventDefault();

        if (this.state.hidden) {
            this.setState({
                hidden: false,
                buttonText: 'Hide',
                clear: false
            });
        } else if (!this.state.hidden) {
            this.setState({
                hidden: true,
                buttonText: 'Add List',
                clear: true
            });
        }
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

        this.props.listActions.setListData({
            name: this.state.name,
            year: this.state.year,
            description: this.state.description
        });
    },

    render: function() {
        var hidden = this.state.hidden,
            btnTxt = this.state.buttonText;
        return (
            <div>
                <button className="btn btn-success" onClick={ this.toggleForm }>{ btnTxt }</button>
                <form className={ 'form-inline ' + (hidden ? 'hidden' : '') } >
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
                    <Input
                        id="year"
                        onChange={ this.handleFieldChange }
                        clear={ this.state.clear }
                        value={ this.state.year }
                        placeholder="Year"
                        type="text"/>
                    <button type="submit" onClick={ this.submitForm } className="btn btn-default">Submit</button>
                </form>
                <div className="results"></div>
            </div>
        );
    }
});

export default AddListForm;