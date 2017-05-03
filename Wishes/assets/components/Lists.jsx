import React from 'react';
import _ from 'lodash';

var List = React.createClass({
    getInitialState: function() {
        return {
            wait: 'Wait...'
        };
    },
    getData: function() {
        this.props.listActions.getLists();
    },
    showList: function(id) {
        this.props.listActions.getListData(id);
    },
    componentWillMount: function() {
        this.getData();
    },
    render: function() {
        let tpl;

        if (this.props.lists) {
            tpl = _.map(this.props.lists, (list, i) => {
                return (
                    <div onClick={ this.showList(list.id) } data-id={ list.id }>
                        <h3>{ list.name },
                            <small>{ list.year }</small>
                        </h3>
                    </div>
                )
            })
        } else {
            tpl = ( <div>{ this.state.wait }</div>  )
        }

        return (
            <div>
                { tpl }
            </div>
        )
    }
});

export default List;