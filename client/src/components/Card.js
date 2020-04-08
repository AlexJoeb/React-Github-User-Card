import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default ({ user }) => {
	// followerList,
	// followingList,
	// public_repos,
	return user === null ? (
		<h1>Was not able to find this user</h1>
	) : (
		<div
			className='card'
			css={css`
				margin-top: 50px;
				background: white;
				padding: 15px;
				border-radius: 10px;
			`}
		>
			<div
				className='card__top'
				css={css`
					display: flex;
				`}
			>
				<div
					className='card__top__image'
					css={css`
						height: 100px;
						width: 100px;
						background: url(${user.avatar_url}) center center no-repeat, white;
						background-size: cover;
						margin-right: 15px;
					`}
				></div>
				<div className='card__top__info'>
					<p
						className='card__top__info--name'
						css={css`
							position: relative;
							width: 150px;
							${user.hireable
								? `
                                &::after {
                                    content: "Hireable";
                                    font-size: .7rem;
                                    position: absolute;
                                    left: ${user.login.length};
                                    top: -12px;
                                    background: skyblue;
                                    border: 0;
                                    border-radius 5px;
                                    padding: 3px;
                                    color: white;
                                }
                            `
								: ""}
						`}
					>
						{user.login}
					</p>
					<p className='card__top__info--location'>{user.location}</p>
					<p className='card__top__info--bio'>{user.bio}</p>
					<a href={user.html_url} className='card__top__info--profileLink'>
						GitHub Profile
					</a>
				</div>
			</div>
			<div className='card__bottom'>
				<h1
					css={css`
						font-weight: bold;
					`}
				>
					Follower List
				</h1>
                <ul css={css`
                    display: flex;

                    li + li {
                        margin-left: 10px;
                    }

                    li {
                        background:skyblue;
                        color:white;
                        padding: 3px;
                        border-radius: 5px;

                        &:nth-of-type(odd){
                            background:tomato;
                        }
                    }
                `}>
					{user.followerList.map((f, i) => (
						<li key={i}>{f}</li>
					))}
				</ul>
				<h1
					css={css`
						font-weight: bold;
					`}
				>
					Follwing List:
				</h1>
                <ul css={css`
                    display: flex;

                    li + li {
                        margin-left: 10px;
                    }

                    li {
                        background:skyblue;
                        color:white;
                        padding: 3px;
                        border-radius: 5px;

                        &:nth-of-type(odd){
                            background:tomato;
                        }
                    }
                `}>
					{user.followingList.map((f, i) => (
						<li key={i}>{f}</li>
					))}
				</ul>
			</div>
		</div>
	);
};
