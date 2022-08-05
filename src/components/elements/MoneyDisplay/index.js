import * as S from './styles'
import useGeneralState from '@/state/generalState'

const MoneyDisplay = () => {
    const { money } = useGeneralState((state) => state)
    return <S.MoneyDisplay>{money}</S.MoneyDisplay>
}

export default MoneyDisplay
