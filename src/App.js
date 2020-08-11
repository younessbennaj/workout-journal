import { ListItem } from './ListItem.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.props.users.fetch().then(users => {
            this.setState({
                users
            });
        })
    }

    render() {
        let App = (
            <React.Fragment>
                {
                    this.state.users.map(user => {
                        return < ListItem user={user} />
                    })
                }
            </React.Fragment>
        )

        return App;
    }
}

export { App };