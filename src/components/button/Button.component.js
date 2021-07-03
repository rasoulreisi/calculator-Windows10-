import { Component } from 'react'

class Button extends Component {
	state = {
		style: { width: '50px', height: '50px' },
	}
	handleClick = () => {
		const { onClick } = this.props
		onClick(this.props.value)
	}

	render() {
		return (
			<button
				onClick={this.handleClick}
				style={{ ...this.props.style, ...this.state.style }}
			>
				{this.props.children}
			</button>
		)
	}
}

export { Button }
