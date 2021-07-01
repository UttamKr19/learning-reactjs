import React from 'react';

export default class Api extends React.Component {

    constructor() {
        super();
        this.state = {
            users: null
        }
    }

    componentDidMount() {
        fetch('https://reqres.in/api/users').then((res) => {
            res.json().then((result) => {
                this.setState({
                    users:result.data
                })
            })
        })
        // console.log('did')
    }

    render() {
        console.log(this.state.users);
        return (
            <div>
                <h1>API Data</h1>
                {
                    this.state.users ?
                        this.state.users.map((item,index)=>
                            <div key={index}> <p>{index} --- {item.first_name} --- {item.email}</p></div>
                        )
                    :
                    <div> problem occured while fetching api data </div>
                }
            </div>
        );
    }

}