import React, { Component } from "react"
import { connect } from "react-redux"
import {
    counterDown,
    counterReset,
    counterSetValue,
    counterUp,
} from "../redux/reducers/counterReducer"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counterTune: 0
        }
        this.aumentar = this.aumentar.bind(this)
        this.disminuir = this.disminuir.bind(this)
        this.reiniciar = this.reiniciar.bind(this)
        this.handleChangeCounter = this.handleChangeCounter.bind(this)
        this.setCounterValue = this.setCounterValue.bind(this)
    }

    aumentar() {
        this.props.countUp()
    }

    disminuir() {
        this.props.countDown()
    }

    reiniciar() {
        this.props.countReset()
    }

    handleChangeCounter(event){
        this.setState({
            counterTune: event.target.value
        })
    }

    setCounterValue(){
        this.props.setValue(this.state.counterTune)
    }

    render() {
        return (
            <>
                <div>
                    <h4>Esto es home</h4>
                    <button onClick={this.aumentar}>Aumentar</button>
                    <button onClick={this.disminuir}>Disminuir</button>
                    <button onClick={this.reiniciar}>Reiniciar</button>
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Ingrese número de contador"
                        onChange={this.handleChangeCounter}
                    />
                    <button onClick={this.setCounterValue}>Asignar nuevo valor al contador</button>
                </div>
                <div>
                    <h5>
                        Estado de contador: {this.props.counterReducer.value}
                    </h5>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        countUp: () => dispatch(counterUp()),
        countDown: () => dispatch(counterDown()),
        countReset: () => dispatch(counterReset()),
        setValue: (newValue) => dispatch(counterSetValue(newValue))
    }
}

const mapStateToProps = (state) => {
    return {
        counterReducer: state.counterReducer,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
