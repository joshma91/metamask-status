import styled from 'styled-components'

const Checkbox = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  background: ${props => props.checked ? 'salmon' : 'papayawhip'}
  border-radius: 3px;
  transition: all 150ms;
  text-align: center;
`;

export default Checkbox