import PropTypes from 'prop-types';
const Link = ({route}) => {
    const {path, name} = route;
    return (
        <div>
            <li className="mr-10"><a href={path}>{name}</a></li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object,
    path: PropTypes.string,
    name: PropTypes.string,
}

export default Link;