import styled, { css } from 'styled-components';
// import { GrLinkedin } from 'react-icons/gr';
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from 'react-icons/ai';
// import companyIcon from '../../../public/companhia.png'

export const Title = styled.span`
    font-size: 16px;
    color: var(--color-black);
`;

export const Container = styled.header`
    background: var(--color-header);
    padding: 0 30px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    display: none;
    
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
    }
`;

// export const LinkedInIcon = styled(GrLinkedin)`
//     width: 34px;
//     height: 34px;
//     color: var(--color-linkedin);
//     background: #fff;
//     border-radius: 4px;
//     flex-shrink: 0;
//     cursor: pointer;
// `;

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

export const HomeIcon = styled(AiFillHome)`
    ${generalIconCSS}
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
`;

export const CaretDownIcon = styled(AiFillCaretDown)`
    width: 16px;
    height: 16px;
`;