import React from 'react';

var Input = React.createClass({
    getInitialState: function() {
        return {
            value: this.props.value
        };
    },
    onChangeHandler: function(e) {
        var txt = e.target.value;
        this.setState({value: txt});
        this.props.onChange(this.props.id, txt);
    },
    clearField: function() {
        this.setState({ value: ''});
    },
    componentWillUpdate: function() {
        if (this.props.clear && this.state.value) this.clearField();
    },
    render: function() {
        let value = this.state.value,
            type = this.props.type,
            id = this.props.id,
            label =  (this.props.label ? this.props.label : null),
            labelTpl = '',
            placeholder = ( this.props.placeholder ? this.props.placeholder : label ),
            wrapper = ( this.props.wrapper ? this.props.wrapper : "form-group" ),
            className = ( this.props.className ? this.props.className : "form-control" );

        if (label) labelTpl = <label>{ label }</label>

        return (
            <div className={ wrapper } >
                { labelTpl }
                <input
                    id= { id }
                    type={ type }
                    className={ className }
                    value={ value }
                    placeholder={ placeholder }
                    onChange={ this.onChangeHandler }
                    />
            </div>
        );
    }

});

export default Input;