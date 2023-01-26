/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const sectionStyled = css`
  display: block;
  padding: 64px 0 40px;
  background-color: black;
`;
const divOneStyled = css`
  padding-left: 24px;
  padding-right: 24px;
  margin-left: auto;
  margin-right: auto;
`;
const divTwoStyled = css`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 32px;
  row-gap: 48px;
`;

const divThreeStyled = css`
  display: block;
  grid-column: span 4 / span 4;
  tab-size: 4;

  svg {
    color: white;
    width: 150px;
    display: block;
  }

  p {
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.625;
    font-size: 0.96rem;
    margin-top: 1.75rem;
  }
  /* Remove this when you found the logo svg */
  span {
    color: white;
    line-height: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    text-align: center;
  }

  button {
    line-height: 1rem;
    font-weight: 500;
    font-size: 0.875rem;
    text-align: center;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: rgba(0, 0, 0);
    border-color: rgba(255, 255, 255, 0.2);
    border-radius: 0.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0 0 0;

    &:hover {
      cursor: pointer;
    }
    svg {
      width: 0.75rem;
      height: 0.75rem;
      margin-right: 0.25rem;
      display: block;
    }

    span {
      color: white;
      line-height: 1rem;
      font-size: 0.875rem;
      font-weight: 500;
      text-align: center;
    }
  }
`;

const divFourStyled = css`
  display: block;
`;

const divFiveStyled = css`
  display: block;

  p {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    font-size: 0.92rem;
    line-height: 1.5rem;
    margin: 0;
  }

  ul {
    margin-top: 24px;
    list-style: none;

    padding: 0;
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
    margin-top: 24px;

    a {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.82rem;
      line-height: 1.25rem;
      display: flex;
    }
  }
`;

const lineBreakStyled = css`
  border-color: #1f2937;
  margin-bottom: 2.5rem;
  margin-top: 4rem;
  border-top-width: 1px;
`;

const divSixStyled = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.82rem;
    line-height: 1.25rem;
    margin: 0;
  }
`;

export default function Footer() {
  return (
    <section css={sectionStyled}>
      <div css={divOneStyled}>
        <div css={divTwoStyled}>
          <div css={divThreeStyled}>
            <svg src="/#"></svg>
            {/* Remove this when you found the logo svg  */}
            <span>ProfilePicture.AI</span>
            <p>
              We use artificial intelligence to generate profile pictures of you
              that looks perfect and captures who you are. Make a profile
              picture with AI, you can be anything, anywhere, or anyone!
            </p>
            <button>
              <svg src="/#"></svg>
              <span>Start live chat</span>
            </button>
          </div>
          <div css={divFourStyled}>
            <div css={divFiveStyled}>
              <p>Links</p>
              <ul>
                <li>
                  <a>Affiliate </a>
                </li>
                <li>
                  <a>Dashboard </a>
                </li>
                <li>
                  <a>Login </a>
                </li>
                <li>
                  <a>Sign up </a>
                </li>
                <li>
                  <a>Reset password </a>
                </li>
                <li>
                  <a>Redeem card </a>
                </li>
              </ul>
            </div>
          </div>
          <div css={divFourStyled}>
            <div css={divFiveStyled}>
              <p>Legal</p>
              <ul>
                <li>
                  <a>Terms & Conditions </a>
                </li>
                <li>
                  <a>Privacy Policy </a>
                </li>
                <li>
                  <a>Suub-processors </a>
                </li>
              </ul>
            </div>
          </div>
          <div css={divFourStyled}>
            <div css={divFiveStyled}>
              <p>For</p>
              <ul>
                <li>
                  <a>Male </a>
                </li>
                <li>
                  <a>Female </a>
                </li>
                <li>
                  <a>Couples </a>
                </li>
                <li>
                  <a>Cats </a>
                </li>
                <li>
                  <a>Dogs </a>
                </li>
              </ul>
            </div>
          </div>
          <div css={divFourStyled}>
            <div css={divFiveStyled}>
              <p>Packs</p>
              <ul>
                <li>
                  <a>Linkedin </a>
                </li>
                <li>
                  <a>CV </a>
                </li>
                <li>
                  <a>Tinder </a>
                </li>
                <li>
                  <a>Whatsapp </a>
                </li>
                <li>
                  <a>Fantasy </a>
                </li>
                <li>
                  <a>Background </a>
                </li>
                <li>
                  <a>Video Games </a>
                </li>
                <li>
                  <a>Realistic </a>
                </li>
                <li>
                  <a>Instagram </a>
                </li>
                <li>
                  <a>Animation </a>
                </li>
                <li>
                  <a>Cartoon </a>
                </li>
                <li>
                  <a>Wallpaper </a>
                </li>
                <li>
                  <a>Valentine </a>
                </li>
                <li>
                  <a>Anime </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr css={lineBreakStyled} />
        <div css={divSixStyled}>
          <p>© Copyright 2023, All Rights Reserved by Postcraft PTE LTD </p>
        </div>
      </div>
    </section>
  );
}
