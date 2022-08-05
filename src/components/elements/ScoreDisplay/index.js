import * as S from './styles'
import useGeneralState from '@/state/generalState'

const ScoreDisplay = () => {
    const { score } = useGeneralState((state) => state)
    return <S.ScoreDisplay>{score}</S.ScoreDisplay>
}

export default ScoreDisplay
