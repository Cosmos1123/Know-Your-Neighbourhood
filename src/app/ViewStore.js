import React, { Component } from 'react'
import{viewStore} from '../service/OnlineService'

export class ViewStore extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             stores: [],
             key:''
             
        }
    }
    componentDidMount(){
        viewStore()
        .then((respone)=>{
            console.log("All Stores from the component" + JSON.stringify(respone))
            this.setState({
                stores:respone
            })
        })
    }

  searchChageHandler = (event) =>{
      this.setState({
          key:event.target.value
      })
  }

  searchStoreByKey = (key) =>{
      this.props.history.push(`/store/search/${key}`)
  }
    render() { 
        return (

            <div className="home-container">
            <h1 className="home-title"> VIEW Stores</h1>
            <div className="container">
            <form className="example" action="">
                    <input type="text" placeholder="Search Store" name="search"
                    value={this.state.key} onChange={this.searchChageHandler}/>
                   <input type="button" onClick = {() => this.searchStoreByKey(this.state.key)} value="SEARCH"></input>
                </form> 
                
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


export default ViewStore
