import Header from '../Header'
import * as S from './styles'

const Layout = ({ children }) => {
    return (
        <S.OverallLayout>
            <Header />
            {children}
        </S.OverallLayout>
    )
}

export default Layout
