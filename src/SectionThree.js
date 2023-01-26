/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { click } from '@testing-library/user-event/dist/click';
import Armor from './8084ed64-9ff2-44c9-b050-71d602a5a1c0.png';
import img1 from './avatar-all.35f3a88.png';
import Cat from './avatar-cat.f65d233.png';
import Couple from './avatar-couple.92759a5.png';
import Dog from './avatar-dog.9866871.png';
import Female from './avatar-female.3866314.png';
import Male from './avatar-male.20fbef4.png';
import Click from './click-me.584d534.png';

const sectionStyled = css`
  padding: 4rem 0 4rem 0;
  background-color: #f9fafb;
`;

const divOneStyled = css`
  padding: 0 1.5rem 0 1.5rem;
  margin-left: auto;
  margin-right: auto;
`;
const divTwoStyled = css`
  text-align: center;
  max-width: 48rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;

  h2 {
    font-size: 2.2rem;
    line-height: 2.5rem;
    letter-spacing: -0.025em;
    font-weight: 500;
    color: #111827;

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
  p {
    color: #1f2937;
    line-height: 1.75rem;
    font-weight: 400;
    font-size: 0.94rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;
const divThreeStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  button {
    border-radius: 0.5rem;
    padding: 0;
    line-height: inherit;
    color: inherit;
    cursor: pointer;
    background-color: transparent;
    border-color: transparent;

    img {
      display: block;
      opacity: 0.5;
      border-radius: 0.5rem;
      width: 4rem;
      height: 4rem;
      max-width: 100%;
    }
    span {
      opacity: 0.5;
      text-transform: capitalize;
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }
`;

const clickImage = css`
  display: block;
  right: 30px;
  position: absolute;
  max-width: 100%;
  height: auto;
`;

const divFourStyled = css`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
`;

const divFiveStyled = css`
  overflow: hidden;
  position: relative;
`;

const divSixStyled = css`
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;

  img {
    display: block;
    border-radius: 0.375rem;
    max-width: 100%;
    height: auto;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
`;
const divSevenStyled = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1f2937;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;

  span {
    font-weight: 500;
    flex-shrink: 0;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #1f2937;
  }

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  svg {
    width: 12px;
    height: 12px;
    background-color: black;
    margin-left: 8px;
  }
`;

export default function SectionThree() {
  return (
    <section css={sectionStyled}>
      <div css={divOneStyled}>
        <div css={divTwoStyled}>
          <h2>
            Over<span> 305 styles </span>to choose from
          </h2>
          <p>
            Turn yourself into anything you want. Picking up to 15 styles to
            start with is included in the price. The rest of the styles are
            available for purchase for an additional $2.99 per style.
          </p>
        </div>
        <div css={divThreeStyled}>
          <button>
            <img src={img1} alt="selection" />
            <span>All</span>
          </button>
          <button>
            <img src={Male} alt="selection" />
            <span>Male</span>
          </button>
          <button>
            <img src={Female} alt="selection" />
            <span>Female</span>
          </button>
          <button>
            <img src={Couple} alt="selection" />
            <span>Couple</span>
          </button>
          <button>
            <img src={Cat} alt="selection" />
            <span>Cat</span>
          </button>
          <button>
            <img src={Dog} alt="selection" />
            <span>Dog</span>
          </button>
          <img css={clickImage} src={Click} alt="selection" />
        </div>
        <div css={divFourStyled}>
          <div css={divFiveStyled}>
            <div css={divSixStyled}>
              <img src={Armor} alt="Armored cute girl" />
            </div>
            <div css={divSevenStyled}>
              <span>Armor</span>
              <div>
                <svg src="/#"></svg>
              </div>
            </div>
          </div>
          <div css={divFiveStyled}>
            <div css={divSixStyled}>
              <img src={Armor} alt="Armored cute girl" />
            </div>
            <div css={divSevenStyled}>
              <span>Armor</span>
              <div>
                <svg src="/#"></svg>
              </div>
            </div>
          </div>
          <div css={divFiveStyled}>
            <div css={divSixStyled}>
              <img src={Armor} alt="Armored cute girl" />
            </div>
            <div css={divSevenStyled}>
              <span>Armor</span>
              <div>
                <svg src="/#"></svg>
              </div>
            </div>
          </div>
          <div css={divFiveStyled}>
            <div css={divSixStyled}>
              <img src={Armor} alt="Armored cute girl" />
            </div>
            <div css={divSevenStyled}>
              <span>Armor</span>
              <div>
                <svg src="/#"></svg>
              </div>
            </div>
          </div>
          <div css={divFiveStyled}>
            <div css={divSixStyled}>
              <img src={Armor} alt="Armored cute girl" />
            </div>
            <div css={divSevenStyled}>
              <span>Armor</span>
              <div>
                <svg src="/#"></svg>
              </div>
            </div>
          </div>
          <div css={divFiveStyled}>
            <div css={divSixStyled}>
              <img src={Armor} alt="Armored cute girl" />
            </div>
            <div css={divSevenStyled}>
              <span>Armor</span>
              <div>
                <svg src="/#"></svg>
              </div>
            </div>
          </div>
          <div css={divFiveStyled}>
            <div css={divSixStyled}>
              <img src={Armor} alt="Armored cute girl" />
            </div>
            <div css={divSevenStyled}>
              <span>Armor</span>
              <div>
                <svg src="/#"></svg>
              </div>
            </div>
          </div>
          <div css={divFiveStyled}>
            <div css={divSixStyled}>
              <img src={Armor} alt="Armored cute girl" />
            </div>
            <div css={divSevenStyled}>
              <span>Armor</span>
              <div>
                <svg src="/#"></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
