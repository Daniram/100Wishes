import React from 'react';
import List from "./List.jsx";
import Lists from "./Lists.jsx";
import ListItems from "./ListItems.jsx";
import AddListItemForm from "./AddListItemForm.jsx";
import AddListForm from "./AddListForm.jsx";

var Header = React.createClass({
    render: function() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <AddListForm
                            newListData={ this.props.newListData }
                            listActions={ this.props.listActions }
                            />
                        <Lists
                            lists={ this.props.lists }
                            listActions={ this.props.listActions }
                            />
                    </div>
                    <div className="col-md-4">
                        <List
                            activeList={ this.props.activeList }
                            listActions={ this.props.listActions }
                            />
                        <ListItems
                            listActions={ this.props.listActions }
                            activeList={ this.props.activeList }
                            listItemActions={ this.props.listItemActions }
                            listItems={ this.props.listItems }
                            />
                    </div>
                    <div className="col-md-4">
                        {/*<ListItemProgress
                            activeList={ this.props.activeList }
                            listItemProgressActions={ this.props.listItemProgressActions }
                            activeListItem={ this.props.activeListItem }
                            />
                            */}
                    </div>

                    <div className="clearfix"></div>
                </div>


            </div>
        );
    }
});

export default Header;