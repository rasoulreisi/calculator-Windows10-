import { Component } from "react"
// import { Button } from '../../../../../index'

class OperandButton extends Component {

    state = {
        buttonValue: ''
    }


    setHandlers = () => {
        [...Array(8)].forEach((_,i)=>{
            ['Digit', 'Numpad'].forEach((item) => {
                document.addEventListener(item+_, () => {
                    this.props.parentCallBack(_)
                })
            })
        })
    }

    buttonFunction = async (value) => {
        await this.setState({buttonValue: value})
    }

    render() {
        return (
            // <Button callBack={(value) => this.onclick(value)} ></Button>
            <></>
        )
    }
}

export { OperandButton }