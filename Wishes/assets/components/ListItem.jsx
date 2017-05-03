import React from 'react';

var ListItem = React.createClass({
    showProgress: function() {
        this.props.listItemActions.getListItemProgress();
    },
    render: function() {
        let data = this.props.data;
        return (
            <div>
                <strong>{ data.name }</strong>
                <p className="mute">{ data.description }</p>
                <button class="btn btn-default" onclick={ this.showProgress }  />
            </div>
        );
    }
});

export default ListItem;