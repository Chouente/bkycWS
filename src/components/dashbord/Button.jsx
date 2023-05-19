import React from 'react';
import styled from 'styled-components';


const ButtonComponent = styled.button`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    user-select: none;
    cursor: pointer;
    border-radius: 0.2rem;
    padding: 0 
        ${(props )=> 
            props.size === 'sm' 
                ? '1.1rem': props.size === 'md' 
                ? '1.4rem': props.size ==='lg' 
                ? '1.6rem': 
                '1.1rem' };

    ;
    height: 
        ${(props )=> 
            props.size === 'sm' 
            ? '34px': props.size ==='md'
            ? '37px': props.size === 'lg'
            ? '40px': '37px'    
        };
    font-weight:500;
    border: 1px solid transparent;
    background-color:
        ${props => props.variant === 'light'? '#f8f9fa':
                   props.variant === 'dark' ? '#212529':
                   props.variant === 'primary' ? '#43A047':
                   props.variant === 'secondary' ? '#E65100':
                   props.variant === 'default' ? '#CFD8DC': 'F8F9FA'
    
        };
    color: 
        ${props => props.variant === 'light'? '#ffffff':
                   props.variant === 'dark' ? '#ffffff':
                   props.variant === 'primary' ? '#ffffff':
                   props.variant === 'secondary' ? '#ffffff':
                   props.variant === 'default' ? '#ffffff': '#ffffff'
    
        };

`

const Button = ({ type, variant, className, id, onClick,size,children }) => {

    
    return (
        <ButtonComponent
            type={type? type:'button'}
            variant={variant}
            className={className? `btn-component ${className}`: 'btn-component'}
            id={id}
            onClick = {onClick}
            size = {size}
        >
            {children}
        </ButtonComponent>
    );
};

export default Button;