/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Logo from './Screenshot 2023-01-24 at 16.33.28 (2).png';

const headerStyled = css`
  margin-bottom: 32px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px #f3f4f6 solid;
`;

const navbarStyled = css`
  display: block;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
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

const navbarItemsLogoStyled = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    display: block;
    width: 160px;
  }
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

const navbarTopRightStyled = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
`;

const loginLinkStyled = css`
  color: #374151;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.5rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-width: 1px;
  border-radius: 9999px;
`;

const createPFPStyled = css`
  color: #374151;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.5rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 1px solid black;

  border-radius: 9999px;
`;

const dropdownMenuStyled = css`
  display: flex;
  margin-left: 16px;

  button {
    border-radius: 9999px;
    border: 1px solid black;
    padding: 0.625rem;
  }
`;

export default function Header() {
  return (
    <header css={headerStyled}>
      <div css={navbarStyled}>
        <div css={navbarItemsStyled}>
          <div css={navbarItemsLogoStyled}>
            <div>
              <a>ProfilePicture.AI</a>
              {/* insert future logo here */}
              {/* <svg src={Logo}></svg> */}
            </div>
          </div>
          <div css={navbarTopRightStyled}>
            <a css={loginLinkStyled}>Login</a>
            <a css={createPFPStyled}>Create your PFP</a>
          </div>
          {/* Top right header dropdown menu */}
          <div css={dropdownMenuStyled}>
            <button>
              <span>
                <svg src="/#"></svg>
              </span>
            </button>
          </div>
          {/* <nav css={navStyled}>
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

            </nav> */}
        </div>
      </div>
    </header>
  );
}
