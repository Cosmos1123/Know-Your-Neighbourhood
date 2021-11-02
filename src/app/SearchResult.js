import React, { Component } from 'react'
import { searchStoreByKey } from '../service/OnlineService'

export class SearchResult extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            key: this.props.match.params.key,
            stores:[]
        
        }
    }

    componentDidMount(){
        searchStoreByKey(this.state.key)
        .then((response) => {
            console.log("Search Product from Component" + JSON.stringify(response))
            this.setState({
                stores: response
           })
        })
    }
    render() {
        return (
            <div className="home-container">
            <h1 className="home-title"> Search Store Result</h1>
            <div className="container">
           
                
            <table className="table">
                <thead>
                    <tr className="tabe-info" >
                    
                    <th scope="col">StoreName</th>
                    <th scope="col">StoreContactno</th>
                    <th scope="col">StoreDescription</th>
                    <th scope="col">StoreLocation</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Fetch all products*/}
                    {
                        this.state.stores.map(store =>
                        <tr className="table-info" key={store.storeid}>
                           
                            <td>{store.storename}</td>
                            <td>{store.storecontactno}</td>
                            <td>{store.storedes}</td>
                            <td>{store.storelocation}</td>
                        </tr>
                        )
                    }
                </tbody>
                </table>
            </div>
    </div>
        )
    }
}

export default SearchResult
