/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const sectionStyled = css`
  display: block;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;
const divOneStyled = css`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-left: auto;
  margin-right: auto;
`;
const divTwoStyled = css`
  text-align: center;
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;

  p {
    color: #4b5563;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0;
  }

  h2 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    color: #111827;
    letter-spacing: -0.025em;
    font-weight: 500;
    margin-top: 0.5rem;

    span {
      background-image: linear-gradient(
        90deg,
        rgba(247, 149, 51, 1) 0%,
        rgba(243, 112, 85, 1) 45%,
        rgba(161, 102, 171, 1) 100%
      );
      background-clip: inherit;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: inherit;
      line-height: inherit;
      letter-spacing: inherit;
      font-weight: inherit;
    }
  }
`;

const divThreeStyled = css`
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  a {
    text-align: center;

    svg {
      width: 12px;
      height: 12px;
      background-color: black;
      margin-left: 8px;
    }
  }
`;

const gradientButtonStyled = css`
    content: '';
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
    border-width: 1px;
    border-radius: 0.375rem;
    color: white;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    padding: 12px 24px 12px 24px;
  }

  button:hover {
    cursor: pointer;
    border: black solid 1px;
  }

  span {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
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

export default function SectionFive() {
  return (
    <section css={sectionStyled}>
      <div css={divOneStyled}>
        <div css={divTwoStyled}>
          <p>Try it out now</p>
          <h2>
            Create your perfekt <span>profile picture </span> with AI.
          </h2>
          <div css={divThreeStyled}>
            <a>
              <button css={gradientButtonStyled}>
                <span>Create your pictures</span>
                <svg src="/#"></svg>
              </button>
            </a>
            <a>
              <button css={loginButtonStyled}>
                <span>Login to account</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
