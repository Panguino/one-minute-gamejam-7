import * as S from './styles'

const VolumeScrubber = ({ label, volume, onChange }) => {
    return (
        <S.VolumeScrubber>
            <S.Label>{label}</S.Label>
            <S.Plus
                onClick={() => {
                    onChange(volume + 5)
                }}
            />
            <S.Minus
                onClick={() => {
                    onChange(volume - 5)
                }}
            />
            <S.Scrubber>
                <S.Bar position={volume} />
            </S.Scrubber>
        </S.VolumeScrubber>
    )
}

export default VolumeScrubber
