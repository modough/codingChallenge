import { useSelector } from "react-redux"
import Login from "../../pages/login/Login"
import PropTypes from 'prop-types'

function LayoutAdmin({ children }) {
    const { token } = useSelector((state) =>
        state.playerReducer
    )
    console.log(token)
    if (!token) return <Login />
    if (token) return children
}
LayoutAdmin.propTypes = {
    children: PropTypes.object,
}
export default LayoutAdmin