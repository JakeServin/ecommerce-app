import React from 'react';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'
import {BsFillPersonFill } from 'react-icons/bs'
const Footer = () => {
  return (
		<div className="footer-container">
			<p>
				Made by <a href="https://">JakeServin.dev</a>
			</p>
			<p className="icons">
				<a href="https://www.linkedin.com/in/jakeservin" target="blank">
					<AiFillLinkedin />
				</a>
				<a href="https://www.linkedin.com/in/jakeservin" target="blank">
					<AiOutlineGithub />
				</a>
				<a href="https://jakeservin.dev" target="blank">
					<BsFillPersonFill />
				</a>
			</p>
		</div>
  );
}

export default Footer
