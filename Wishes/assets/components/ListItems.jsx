import React from 'react';
import ListItem from "./ListItem.jsx";
import _ from "lodash";

var ListItems = React.createClass({
    getInitialState: function() {
        return {
            wait: 'Wait...'
        };
    },
    getData: function() {
        this.props.listItemActions.getListItems();
    },
    componentWillMount: function() {
        this.getData();
    },
    render: function() {
        let data = this.props.listItems,
            tpl;
        if (this.props.listItems) {
            tpl = _.map(data, (item, i) => {
                return (
                    <li key={i}>
                        <ListItem data={item} />
                    </li>
                )
            })
        } else {
            tpl = <li> { this.state.wait } </li>
        }

        return (
            <ul> { tpl } </ul>
        );
    }
});

export default ListItems;