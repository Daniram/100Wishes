import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as listActions from '../../actions/listActions'
import * as listItemActions from '../../actions/listItemActions'

var App = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            <div className="container-fluid">
                <Header
                    title={ this.props.title }
                    user={ this.props.user }
                    />
                <Content
                    newListData={ this.props.newListData }
                    activeList={ this.props.activeList }
                    listItems={ this.props.listItems }
                    newListItem={ this.props.newListItem }
                    listActions={ this.props.listActions }
                    listItemActions={ this.props.listItemActions }
                    />
            </div>
        );
    }

});

function mapStateToProps (state) {
    return {
        user: state.user.user,
        newListData: state.addListForm.data,
        activeList: state.activeList.data,
        lists: state.lists.data,
        listItems: state.listItems.data,
        newListItem: state.addListItemForm.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        listActions: bindActionCreators(listActions, dispatch),
        listItemActions: bindActionCreators(listItemActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);