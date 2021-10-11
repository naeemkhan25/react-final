import Styled from 'styled-components';

export const Container=Styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  background: #262626;
  width: 100%;
  height: 100vh;
  `;
export const CardContainer=Styled.div`
    position: relative;
    background: #1e1e1e;
    height: 350px;
    width: 550px;
    overflow: hidden;
    display: flex;
    align-items: center;
  `;
 
  export const Content=Styled.div`
    width: 215px;
    position: absolute;
    left: 20px;
    z-index: 3;
  `;
  
  export const Buttons=Styled.div`
      width: fit-content;
      height: fit-content;
      margin-top: 10px;
  & a {
        display: inline-block;
        overflow: hidden;
        position: relative;
        font-size: 11px;
        color: #aaa;
        text-decoration: none;
        padding: 10px 15px;
        border: 1px solid #333;
        font-weight: bold;
        &:after {
            content: '';
            position: absolute;
            top: 0;
            right: -10px;
            width: 0%;
            background: #262626;
            height: 100%;
            z-index: -1;
            transition: width 0.3s ease-in-out;
            transform: skew(-25deg);
            transform-origin: right;
        }
        &:hover {
            color: #fff;
            transition: all 0.5s ease;
            &:after {
                width: 150%;
                left: -10px;
                transform-origin: left;
            }
        }
        &:nth-of-type(1) {
            border-radius: 50px 0 0 50px;
            border-right: none;
        }
        &:nth-of-type(2) {
            border-radius: 0px 50px 50px 0;
        }
    }
  `;
   
  export const Tag=Styled.span`
    display: inline-block;
  color: #fff;
  background: ${(props)=>props.color};
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 0.7em;
  `;

export const H1=Styled.h1`
color: #fff;
  `;
export const P=Styled.p`
 width: 280px;
  font-size: 13px;
  line-height: 1.4;
  color: #aaa;
  margin: 20px 0;
  `;
export const Image = Styled.img`
    position: absolute;
    top: 30px;
    right: -20px;
    z-index: 0;
`;