import React from 'react';
import ListItems from "./ListItems.jsx";
import AddListItemForm from "./AddListItemForm.jsx";

var List = React.createClass({
    getInitialState: function() {
        return {
            wait: 'Wait...'
        };
    },
    getData: function() {
        this.props.listActions.getListData();
    },
    componentWillMount: function() {
        this.getData();
    },
    render: function() {
        let tpl;

        if (this.props.activeList) {
            tpl = (
                <div>
                    <h1>{ this.props.activeList.name },
                        <small>{ this.props.activeList.year }</small>
                    </h1>
                    <p>{ this.props.activeList.description }</p>
                    <ListItems listItemActions={ this.props.listItemActions } listItems={ this.props.listItems }/>
                </div>
            )
        } else {
            tpl = ( <div>{ this.state.wait }</div>  )
        }

        return (
            <div>
                { tpl }
                <AddListItemForm listItemActions={ this.props.listItemActions } />
            </div>
        )
    }
});

export default List;