import React, { Component } from 'react';
import { GET, POST } from '../../api';

class Posts extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fetched: false,
			posts: []
		};

		this.handlers = {
			addRandomPost: this.addRandomPost.bind(this),
			update: this.update.bind(this)
		}
	}

	componentDidMount() {
		this.handlers.update();
	}

	update() {
		this.setState({
			fetched: true
		});

		GET('http://frontendo.ru/vova/p.php?vova=pidor&type=get')
		.then(resp => resp.json())
		.then(resp => {
			this.setState({
				posts: resp,
				fetched: false
			});
		});
	}

	addRandomPost() {
		this.setState({
			fetched: true
		});

		const randomPost = 'random content ' + Math.random();
		const userId = 999;

		GET(`http://frontendo.ru/vova/p.php?vova=pidor&type=post&content=${randomPost}&user_id=${userId}`)
			.then(this.handlers.update);
	}

	deletePost(id) {
		this.setState({
			fetched: true
		});

		GET(`http://frontendo.ru/vova/p.php?vova=pidor&type=delete&id=${id}`)
			.then(this.handlers.update);
	}

	render() {
		const { posts, fetched } = this.state;

		return (
			<div style={{width: '500px'}}>
				<button onClick={this.handlers.addRandomPost}>Add random post</button>
				{fetched === true && ' Loading...'}

				<table width="100%">
					<thead>
						<tr>
							<td>id</td>
							<td>content</td>
							<td>likes</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						{posts.map(({ id, content, likes }) =>
							<tr key={id}>
								<td>{id}</td>
								<td>{content}</td>
								<td>{likes}</td>
								<td>
									<button onClick={this.deletePost.bind(this, id)}>
										delete
									</button>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Posts;