import React from 'react'
import { render } from 'react-dom'
import Library from './Library'


let bookList = [
	{'title':'Their Eyes Were Watching God', 'author':'Zora Neale Hurston', 'pages':325},
	{'title':'The Sun Also Rises', 'author':'Ernest Hemingway', 'pages':260},
	{'title':'Animal Farm', 'author':'George Orwell', 'pages':313},
	{'title':'Grapes of Wrath', 'author':'John Steinbeck', 'pages':583}
]



render(
	<Library books={bookList} />, 
	document.getElementById('root')
)






// class FavoriteColorForm extends Component {
// 	state = { value: ''}

// 	newColor = e =>
// 		this.setState({ value: e.target.value })

// 	submit = e => {
// 		console.log(`New Color: ${this.state.value}`);
// 		e.preventDefault()
// 	}
// 	render() {
// 		return (
// 			<form onSubmit={this.submit}>
// 				<label>Favorite Color:
// 					<input
// 						type="color"
// 						onChange={this.newColor}/>
// 				</label>
// 				<button>Submit</button>
// 			</form>
// 		)
// 	}
// }