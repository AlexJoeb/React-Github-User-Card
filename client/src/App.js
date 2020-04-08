import React from "react";

import "./globals.css"; 

import axios from "axios";

import InputArea from "./components/InputArea";
import Card from "./components/Card";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			user: null,
		};
	}

  setUser = name => {
    console.log(name);
    axios
			.get(`https://api.github.com/users/${name}`)
			.then(({ data }) => {
				const { login, id, avatar_url, html_url, followers_url, location, hireable, bio, public_repos } = data;
				axios.get(followers_url).then(({ data }) => {
					const followerList = data.map((follower) => follower.login);
					axios.get(`https://api.github.com/users/${name}/following`).then(({ data }) => {
						const followingList = data.map((follower) => follower.login);
						this.setState({
							user: {
								id,
								login,
								bio,
								location,
								hireable,
								avatar_url,
								html_url,
								followerList,
								followingList,
								public_repos,
							},
						}, () => console.log(this.state.user));
					});
				});
			})
			.catch((err) => console.log(err));
  }

	componentDidMount() {
		axios
			.get("https://api.github.com/users/alexjoeb")
			.then(({ data }) => {
				const { login, id, avatar_url, html_url, followers_url, location, hireable, bio, public_repos } = data;
				axios.get(followers_url).then(({ data }) => {
					const followerList = data.map((follower) => follower.login);
					axios.get(`https://api.github.com/users/${login}/following`).then(({ data }) => {
						const followingList = data.map((follower) => follower.login);
						this.setState({
							user: {
								id,
								login,
								bio,
								location,
								hireable,
								avatar_url,
								html_url,
								followerList,
								followingList,
								public_repos,
							},
						});
					});
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<div className='app'>
				<InputArea setUser={this.setUser} />
				<Card user={this.state.user} />
			</div>
		);
	}
}
