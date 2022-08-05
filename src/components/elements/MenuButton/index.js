import * as S from './styles'

const MenuButton = ({ children, onClick }) => {
    return <S.MenuButton onClick={onClick}>{children}</S.MenuButton>
}

export default MenuButton
