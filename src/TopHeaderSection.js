/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const sectionStyled = css`
  background-color: #f3f4f6;
  height: 32px;
  padding: 8px 0;
  font-size: 0.75rem;

  div {
    display: flex;
    justify-content: space-evenly;
    gap: 1px;

    height: 16px;
    color: #9ca3af;
  }
`;

const divWrapper = css`
  display: block;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
`;

const divOneStyled = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding-left: 2rem;
  padding-right: 2rem;
  margin-left: auto;
  margin-right: auto;
`;

const divTwoStyled = css`
  display: flex;
  align-items: center;

  svg {
    width: 12px;
    height: 12px;
    background-color: black;
  }

  span {
    margin-left: 8px;
    color: #9ca3af;
    font-size: 0.7rem;
    line-height: 1rem;
    font-weight: 400;
  }
`;

const divThreeStyled = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    svg {
      width: 12px;
      height: 12px;
      background-color: black;
    }

    p {
      margin-left: 8px;
      color: #9ca3af;
      font-size: 0.7rem;
      line-height: 1rem;
      font-weight: 400;
    }
  }
`;

const divFourStyled = css`
  display: flex;
  align-items: center;

  svg {
    width: 12px;
    height: 12px;
    background-color: black;
  }

  span {
    margin-left: 8px;
    color: #9ca3af;
    font-size: 0.7rem;
    line-height: 1rem;
    font-weight: 400;
  }
`;

export default function TopHeaderSection() {
  return (
    <section css={sectionStyled}>
      <div css={divWrapper}>
        <div css={divOneStyled}>
          <div css={divTwoStyled}>
            <svg src="/#"></svg>
            <span>Founded in 🇳🇱 Holland. We respect your privacy.</span>
          </div>
          <div css={divThreeStyled}>
            <div>
              <div>
                <svg src="/#"></svg>
                <svg src="/#"></svg>
                <svg src="/#"></svg>
                <svg src="/#"></svg>
                <svg src="/#"></svg>
              </div>
              <p>Used by 5,603 happy customers</p>
            </div>
          </div>
          <div css={divFourStyled}>
            <svg src="/#"></svg>
            <span>806,832+ profile pictures already created</span>
          </div>
        </div>
      </div>
    </section>
  );
}
