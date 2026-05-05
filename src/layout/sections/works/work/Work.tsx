import {Link} from '../../../../components/Link.ts';
import {Button} from '../../../../components/Button.ts';
import {S} from './Work_Styles.ts'

type WorkPropsType = {
    imgSrc: string
    title: string
    text: string
}

export const Work = (props: WorkPropsType) => {
    const {imgSrc, text, title} = props

    return (
        <S.StyledWork>
            <S.ImageWrapper>
                <S.Image src={imgSrc}/>
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{title}</S.Title>
                <S.Text>{text}</S.Text>
                <Link href={'#'}>demo</Link>
                <Link href={'#'}>code</Link>
            </S.Description>
        </S.StyledWork>
    );
};


