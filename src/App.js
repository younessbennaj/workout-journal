let Hello = React.createElement('h1', null, 'Hello World !');

// class ListItem {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         const listItem = React.createElement('li', null, this.props.userName);
//         return listItem;
//     }
// }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    // return (
    //     <React.Fragment>
    //         {
    //             props.users.fetch().then(users => {
    //             // for (let user of users) {
    //             //     let html = `<li><b>Name:</b> ${user.name}</li>`;
    //             //     this.$el.append(html);
    //             // }
    //             })
    //         }
    //     </React.Fragment>
    // )

    componentDidMount() {
        this.props.users.fetch().then(users => {
            console.log(users);
            this.setState({
                users
            });
            // for (let user of users) {
            //     let html = `<li><b>Name:</b> ${user.name}</li>`;
            //     this.$el.append(html);
            // }
        })
    }

    render() {
        let App = (
            <React.Fragment>
                {
                    this.state.users.map(user => {
                        return <li>{user.name}</li>
                    })
                }
            </React.Fragment>
        )

        return App;
    }
}

console.log('test');