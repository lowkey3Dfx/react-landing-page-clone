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
  width: 490.2px;
  height: 546px;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 2.6rem;
    line-height: 1;
    color: black;
    font-weight: 700;
  }

  h2 {
    color: #374151;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.75rem;
    margin-top: 16px;
  }

  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1rem;
    line-height: 1.75rem;
    color: #000000b3;
    font-weight: 400;
  }

  svg {
    height: 12px;
    width: 12px;
    background: black;
    margin-right: 8px;
  }

  ul {
    margin: 16px 0;
    justify-content: flex-start;
    padding: 0;
  }
`;

const mainTextStyled = css`
  margin: 0;
  font-size: 0.96rem;
  line-height: 1.8rem;
  display: block;
  font-size: 1.05rem;
  line-height: 1.75rem;
  color: #000000b3;
  font-weight: 400;
  margin-top: 16px;
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

const createLoginNavigationStyled = css`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const underlineStyled = css`
  text-decoration: underline;
`;

const gradientButtonStyled = css`
  color: white;
  font-weight: 600;
  font-size: 0.96rem;
  line-height: 1.5rem;
  padding: 12px 24px;
  margin: 0;
  border: transparent solid 1px;
  border-radius: 0.375rem;
  background: linear-gradient(
    60deg,
    #f79533,
    #f37055,
    #ef4e7b,
    #a166ab,
    #5073b8,
    #1098ad,
    #07b39b,
    #6fba82
  );

  border-color: white;

  :hover {
    cursor: pointer;
    border: solid 1px black;
  }

  svg {
    margin-left: 8px;
  }
`;

const loginButtonStyled = css`
  color: #374151;
  font-weight: 500;
  font-size: 0.96rem;
  line-height: 1.5rem;
  padding: 12px 24px;
  margin: 0 0 0 8px;
  border: lightgrey solid 1px;
  border-radius: 0.375rem;
  background: white;

  :hover {
    cursor: pointer;
  }
`;

const transactionBarStyled = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 16px;

  img {
    height: 1rem;
    max-width: 100%;
    display: block;
    margin: 0 0 0 8px;
  }
`;

const noSubscriptionStyled = css`
  margin: 16px 0 16px 0;
  color: #6b7280;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1rem;
  font-style: italic;
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
          <p css={mainTextStyled}>
            Your profile picture is the first thing people see when they look at
            your profile. We use artificial intelligence to generate an magical
            avatars of you that looks perfect and captures who you are. You can
            be anything or anyone!
          </p>
          <ul>
            <li>
              <svg src="#/"></svg>
              <p>4K format (4096x4096) and 300 dpi, perfect for printing.</p>
            </li>
            <li>
              <svg src="#/"></svg>
              <p>
                4120+ photos, over{' '}
                <span css={underlineStyled}>279 styles </span>
                to choose from
              </p>
            </li>
            <li>
              <svg src="#/"></svg>
              <p>
                Founded in 🇳🇱 Holland.{' '}
                <span css={underlineStyled}>We respect your data.</span>
              </p>
            </li>
          </ul>
          <div css={createLoginNavigationStyled}>
            <a>
              <button css={gradientButtonStyled}>
                <span>create your picture now</span>
                <svg>{'>'}</svg>
              </button>
            </a>
            <a>
              <button css={loginButtonStyled}>
                <span>Login to account</span>
              </button>
            </a>
          </div>
          <div css={transactionBarStyled}>
            <img
              src="https://www.profilepicture.ai/_nuxt/img/logo-credit-card.e3988ea.svg"
              alt="transactional icon"
            />
            <img
              src="https://www.profilepicture.ai/_nuxt/img/logo-paypal.bc32795.svg"
              alt="transactional icon"
            />
            <img
              src="https://www.profilepicture.ai/_nuxt/img/logo-apple-pay.b73261a.svg"
              alt="transactional icon"
            />
            <img
              src="https://www.profilepicture.ai/_nuxt/img/logo-google-pay.7bea712.svg"
              alt="transactional icon"
            />
            <img
              src="https://www.profilepicture.ai/_nuxt/img/logo-grab-pay.ffedc32.svg"
              alt="transactional icon"
            />
            <img
              src="https://www.profilepicture.ai/_nuxt/img/logo-ideal.be8096c.svg"
              alt="transactional icon"
            />
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzMiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDBIMzJWMjBIMFYwWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTI1LjY0MDggOC40MTIxMUgxNy45NzY4TDE3LjE5MzggOS4zMDgxMUwxNC42Njg4IDEyLjIwNjFMMTMuODg1OCAxMy4xMDIxSDYuMzMxOEw3LjA5NTggMTIuMTk2MUw3LjQ1NzggMTEuNzY4MUw4LjIyMDggMTAuODYxMUg0Ljc0NjhDNC4xMTA4IDEwLjg2MTEgMy41OTE4IDExLjQwOTEgMy41OTE4IDEyLjA2NjFWMTQuNjE2MUMzLjU5MTggMTUuMjgyMSA0LjExMTggMTUuODIwMSA0Ljc0NjggMTUuODIwMUgxOC4wNzQ4QzE4LjcxMTggMTUuODIwMSAxOS41ODI4IDE1LjQyMjEgMjAuMDAyOCAxNC45MjQxTDIyLjAxODggMTIuNTk0MUwyNS42NDA4IDguNDEyMTFaIiBmaWxsPSIjMDA1NDk4Ii8+CjxwYXRoIGQ9Ik0yNy4xNzcgNS42OTM4M0MyNy44MTMgNS42OTM4MyAyOC4zMzEgNi4yNDE4MyAyOC4zMzEgNi44OTg4M1Y5LjQzNzgzQzI4LjMzMSAxMC4xMDQ4IDI3LjgxMyAxMC42NDE4IDI3LjE3NyAxMC42NDE4SDIzLjcxMUwyNC40ODQgOS43NDU4M0wyNC44NjYgOS4yOTc4M0wyNS42MzkgOC40MDE4M0gxNy45NzdMMTMuODk2IDEzLjA4MThINi4yOTI5N0wxMS43NDQgNi44MDg4M0wxMS45NSA2LjU2OTgzQzEyLjM4IDYuMDgxODMgMTMuMjUxIDUuNjczODMgMTMuODg3IDUuNjczODNIMjcuMTc3VjUuNjkzODNaIiBmaWxsPSIjRkZCRjAwIi8+Cjwvc3ZnPgo="
              alt="transactional icon"
            />
            <img
              src="https://www.profilepicture.ai/_nuxt/img/logo-giropay.3dd60aa.svg"
              alt="transactional icon"
            />
          </div>
          <p css={noSubscriptionStyled}>One-time payment. No subscription.</p>
        </div>
        <div css={rightDivStyled}>
          <img src={HeroImg} alt="Hero img" />
        </div>
      </div>
    </section>
  );
}
