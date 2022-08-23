import './Card.css';

const Card = (props) => {
    // add className when props item has a class
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card; 