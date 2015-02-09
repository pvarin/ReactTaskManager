var Sidebar = React.createClass({displayName: "Sidebar",
    render: function(){
        return (
            <div className='Sidebar'>
                {this.props.children}
            </div>
        );
    }
});

var Columns = React.createClass({displayName: "Columns",
    render: function(){
        className = "Column-"+this.props.children.length;
        console.log(this.props);
        columnList = this.props.children.map(function(child){
            return (
                <div className={className}>
                    {child}
                </div>
            );
        })
        return (
            <div className={this.props.className}>
                {columnList}
            </div>
        );
    }
});