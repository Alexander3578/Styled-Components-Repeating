import {S} from '../Slider_Styles.ts';

type SlidePropsType = {
    text: string
    author: string
}

export const Slide = ({text, author}: SlidePropsType) => {
    return <S.Slide>
        <S.Text>
            {text}
        </S.Text>
        <S.Name>{author}</S.Name>
    </S.Slide>
}