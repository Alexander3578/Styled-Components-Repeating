import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle.ts';
import {Button} from '../../../components/Button.ts';
import {Container} from '../../../components/Container.ts';
import {theme} from '../../../styles/Theme.ts';

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder={'name'}/>
                    <Field placeholder={'address'}/>
                    <Field placeholder={'Comment'} as={'textarea'}/>
                    <Button type={'submit'}>
                        Send message
                    </Button>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  ${Container} {
    min-height: 50vh;
  }
`

const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }
`

const Field = styled.input`
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid rgba(74, 74, 74, 1);
  padding: 7px 15px;

  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;
  color: ${theme.colors.font};

  &::placeholder {
    color: rgba(73, 80, 87, 1);
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid rgba(74, 74, 74, 1);
  }
`