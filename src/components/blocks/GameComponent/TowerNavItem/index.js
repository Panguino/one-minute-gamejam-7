import * as S from './styles'
import useGeneralState from '@/state/generalState'

const TowerNavItem = ({ draggable, onDragStart, icon, cost }) => {
    const { money } = useGeneralState((state) => state)
    const active = cost <= money
    return (
        <S.TowerNavItem draggable={draggable && active} onDragStart={onDragStart} icon={icon} active={active}>
            <S.Cost>{cost}</S.Cost>
        </S.TowerNavItem>
    )
}

export default TowerNavItem
