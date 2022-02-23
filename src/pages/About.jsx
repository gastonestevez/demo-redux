import React, { Component } from "react"
import { connect } from "react-redux"

class About extends Component {
    render() {
        return <div>
            About
            <p>Numero actual: {this.props.counterReducer.value}</p>
        </div>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const mapStateToProps = (state) => {
    return {
        counterReducer: state.counterReducer,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)