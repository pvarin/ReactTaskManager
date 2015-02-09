dummyData = {tasks:[
    {
        title:"Do Laundry",
        description:"This needs to be done soone"
    },
    {
        title:"Vehicle Insurance",
        description:"So you stop wasting money"
    }
]};

var TaskManager = React.createClass({diplayName: 'TaskManager',
    render: function(){
        return (
            <div className="TaskManager">
                <Sidebar>
                    <TaskControls />
                </Sidebar>
                <Columns className="withSidebar">
                    <TaskList data={dummyData} />
                    <TaskView />
                </Columns>
            </div>
        );
    }
});

var TaskList = React.createClass({displayName: 'TaskList',
    render: function(){
        taskItems = this.props.data.tasks.map(function(task){
            return <TaskItem data={task}/>;
        });
        return (
            <ul>
                {taskItems}
            </ul>
        );
    }
});

var TaskItem = React.createClass({displayName: 'TaskItem',
    render: function(){
        return (
            <li>
                <h2>{this.props.data.title}</h2>
                <p>{this.props.data.description}</p>
            </li>
        );
    }
});

var TaskView = React.createClass({displayName: 'TaskView',
    render: function(){
        return (
            <div>
                This is the view of the current task
            </div>
        );
    }
});

var TaskControls = React.createClass({displayName: 'TaskControls',
    render: function(){
        return (
            <div>
                These are some task controls
            </div>
        );
    }

})

React.render(
    <TaskManager/>,
    document.getElementById('content')
);