import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  width: 100%;
  margin: 25px 0;
  background-color: #303030;
  border: 1px solid #444;
  color: #fff !important;
  cursor: auto;
  transition: .3s;
  box-shadow: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  
  &:focus {
    box-shadow: none;
  }

  &:active {
    border: 1px solid #666 !important;
  }

  &:disabled {
    opacity: 0.65;
  }

  &.btn-next {
    background-color: #00bc8c;
    cursor: pointer;
    
    &:hover {
      background-color: #00efb2
    }
  }
`

const NextQuestion = ({ rightAnswer, handleNext }) => {
  return (
    <Button
      className={`${rightAnswer ? 'btn-next' : ''}`}
      disabled={!rightAnswer}
      onClick={handleNext}
    >
      Next Level
    </Button>
  )
}

export default NextQuestion