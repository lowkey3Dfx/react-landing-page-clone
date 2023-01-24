/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import HeroImg from './HeroImg.jpg';

const sectionDivStyled = css`
  display: block;
  padding: 16px;
  width: 945px;
  height: 578px;
`;
const wrapperDivStyled = css`
  display: flex;
  flex-direction: row;
  padding-left: 16px;
  padding-right: 16px;
  gap: 32px;
  margin-left: auto;
  margin-right: auto;
  width: 881px;
  height: 546px;
`;
const leftDivStyled = css`
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    line-height: 1;
    color: black;
    font-weight: 700;
  }
`;

const gradientStyle = css`
  background-image: linear-gradient(
    90deg,
    rgba(247, 149, 51, 1) 0%,
    rgba(243, 112, 85, 1) 45%,
    rgba(161, 102, 171, 1) 100%
  );
  background-clip: inherit;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const rightDivStyled = css`
  width: 40%;
  margin-top: 0;

  img {
    display: block;
    max-width: 326.8px;
    height: auto;
  }
`;

export default function Main() {
  return (
    <section css={sectionDivStyled}>
      <div css={wrapperDivStyled}>
        <div css={leftDivStyled}>
          <h1>
            Create your perfect
            <br />
            <span css={gradientStyle}>profile picture</span> with AI.
          </h1>
          <h2>The #1 Profile Picture Marker and Generator</h2>
          <p>lorem10</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div>create your picture now</div>
          <div>visa etc</div>
          <p>One-time payment. No subscription.</p>
        </div>
        <div css={rightDivStyled}>
          <img src={HeroImg} alt="Hero img" />
        </div>
      </div>
    </section>
  );
}
