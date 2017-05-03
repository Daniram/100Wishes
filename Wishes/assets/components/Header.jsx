import React from 'react';

var Header = React.createClass({
    render: function() {
        return (
           <div>
               <div className="row header-row">
                   <div className="col-md-4">
                       <img src="http://i.imgur.com/ij4XprK.jpg" className="pull-left" width="100px" />
                       <h1>
                           { this.props.title }
                       </h1>
                   </div>
                   <div className="col-md-4">

                   </div>
                   <div className="col-md-4">

                   </div>

                   <div className="clearfix"></div>
               </div>


            </div>
        );
    }
});
//<Auth user={ this.props.user } />

export default Header;