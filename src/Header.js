/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const sectionHeaderStyled = css`
  display: flex;
  justify-content: space-evenly;
  background-color: #f3f4f6;
  height: 32px;
  padding: 8px 0;
  font-size: 0.75rem;

  svg {
    width: 12px;
    height: 12px;
    background-color: green;
  }

  div {
    display: flex;
    gap: 1px;
    align-items: center;
    height: 16px;
    color: #9ca3af;
  }
`;

const sectionHeaderStyledDiv = css`
  padding-right: 24px;
`;

const headerStyled = css`
  margin-bottom: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const navbarStyled = css`
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;

  display: block;

  li {
    list-style-type: none;
    text-align: center;
    background-color: white;
    padding-right: 1rem;
    border-radius: 50%;
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  a {
  }
`;

const navbarItemsStyled = css`
  display: flex;
  align-items: center;
  margin: auto;
`;

const navStyled = css`
  ul {
    display: flex;

    align-items: center;
    padding-left: 1rem;
    text-align: center;
    color: #374151;
  }
`;

export default function Header() {
  return (
    <>
      <section css={sectionHeaderStyled}>
        <div>
          <div css={sectionHeaderStyledDiv}>
            <svg></svg>
            <span>Founded in 🇳🇱 Holland. We respect your privacy.</span>
          </div>
          <div css={sectionHeaderStyledDiv}>
            <div>
              <div>
                <svg>star</svg>
                <svg>star</svg>
                <svg>star</svg>
                <svg>star</svg>
                <svg>star</svg>
              </div>
              <p>Used by 5,603 happy customers</p>
            </div>
          </div>
          <div css={sectionHeaderStyledDiv}>
            <svg></svg>
            <span>806,832+ profile pictures already created</span>
          </div>
        </div>
      </section>
      <header css={headerStyled}>
        <div css={navbarStyled}>
          <div css={navbarItemsStyled}>
            <div>logo</div>
            <nav css={navStyled}>
              <ul>
                <li>
                  <a>For who</a>
                </li>
                <li>
                  <a>Styles</a>
                </li>
                <li>
                  <a>Buy giftcard</a>
                </li>
                <li>
                  <a>Packs</a>
                </li>
              </ul>
              <div>
                <a>Login</a>
                <a>Create your PFP</a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
