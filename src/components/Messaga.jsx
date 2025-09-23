export const Messaga = ({ textLogin, textAuth }) => {
    return (
        <div>
            <h2>Виберіть ваш варіант:</h2>
            <button>{textLogin}</button>
            <button>{textAuth}</button>
        </div>
    )
}