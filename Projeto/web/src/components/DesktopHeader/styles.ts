import styled, { css } from 'styled-components';
import { AiOutlineBell, AiFillCaretDown } from 'react-icons/ai';

export const Container = styled.header`
    background: var(--color-header);
    padding: 0 30px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    display: none;

    h1 {
        font-size: 24px;
        color: var(--color-white);
        margin: 10px 0 0 0;
    }

    span {
        font-size: 12px;
        color: var(--color-white);
        text-decoration: none;
        color: inherit;
    }

    @media (min-width: 1180px) {
        display: block;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 1128px;
    margin: 0 auto;
    height: 52px;
    .left, .right nav {
        display: flex;
        align-items: center;
    }

    .right nav {
        height: 100%;
        button {
            background: none;
            border: none;
            outline: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 90px;
            min-height: 100%;
            color: var(--color-icons);
            &.active {
                border-bottom: 2px solid var(--color-white);
            }
            &.hover {
                color: var(--color-white);
            }
        }

        .dropdown-menu {
            position: relative; 
            top: 100%;
            left: 0;
            width: 150px;
            background-color: var(--color-background);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            padding: 8px;
            z-index: 1;
      
            a,
            button {
              text-decoration: none;
              color: var(--color-black);
              padding: 8px;
              font-size: 14px;
              cursor: pointer;
              transition: background-color 0.3s;
      
              &:hover {
                background-color: var(--color-primary);
                color: var(--color-white);
              }
            }
      
            button {
              background: none;
              border: none;
              cursor: pointer;
              text-align: left;
      
              &:hover {
                background: none;
              }
            }
        }
    }
`;

export const UfopIcon = styled.img`
    width: 34px;
    height: 34px;
    background: #fff;
    border-radius: 4px;
    flex-shrink: 0;
    cursor: pointer;
`;


export const SearchInput = styled.input`
    margin-left: 12px;
    background: var(--color-input);
    color: var(--color-black);
    font-size: 14px;
    padding: 7.5px 8px;
    border: none;
    outline: none;
    border-radius: 2px;
    width: 100%;
    &:focus {
        background: var(--color-white);
    }
`;

const generalIconCSS = css`
    width: 24px;
    height: 24px;
`;

export const HomeIcon = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-left: 8px;
    color: var(--color-icons);
    cursor: pointer;
    border: 1px solid var(--color-icons);
    &:hover {
        background: var(--color-icons);
}    
`;

export const NotificationsIcon = styled(AiOutlineBell)` 
${generalIconCSS}
`;

export const CompanyIcon = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-left: 8px;
    color: var(--color-icons);
    cursor: pointer;
    border: 1px solid var(--color-icons);
    &:hover {
        background: var(--color-icons);
    }    
`;

export const ProfileCircle = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid var(--color-icons);
    cursor: pointer;
    &:hover {
        background: var(--color-icons);
    }
`;

export const CaretDownIcon = styled(AiFillCaretDown)`
    width: 16px;
    height: 16px;
`;