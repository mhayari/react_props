import PropTypes from 'prop-types'



const ProfileComponent = (props) => {
    return (
        <div style={{width:'200px',margin:'auto'}}>
            <p onLoad={()=>props.handelName(props.fullName)}>{ props.fullName}</p>
            <p>{ props.bio}</p>
            <p>{props.profession}</p>
            <p >{props.children}</p>
        </div>
    )
}

ProfileComponent.defaultProps = {
    handelName:() => alert('hello'),
    fullName: 'Mohammed Hayari',
    bio: 'happy',
    profession: 'deve',
    children:'image'
}

ProfileComponent.propTypes = {
    fullName:PropTypes.string
}

export default ProfileComponent
