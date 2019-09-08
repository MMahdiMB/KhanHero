import React , {Component} from 'react';
import './RoundButton.css';

class RoundButton extends Component {
    constructor(props) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.state = {
            isChecked: true,
            number: this.props.number,
            checkitem:0,
            bb:this.props.bb,
            type: this.props.type,
            styles: this.props.styles,
            width: 1,
            height:1,
        }
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    componentDidMount() {
        this.setState({
           number: this.props.number
        });

        if(this.props.type==='middle'){
            this.setState({
                isChecked: true,
                bb:'0.0',
                styles:{
                    opacity: '1.0',
                    border: '3px solid gray',
                }
            })
        }

        // if(this.state.width===320)
        // {
        //     console.log('A');
        //     this.setState({
        //         bb:'1.0',
        //         styles:{
        //             opacity: '1.0',
        //             border: '1px solid #44b37e',
        //             backgroundColor: 'white',
        //         }
        //     });
        // }
    }

    render() {

        let aa = <span style={this.props.styles}
                       onMouseEnter={this.props.over}
                       onMouseLeave={this.props.exit}
                       className="checkmark"
                       onClick={this.props.click}>
            <img style={{opacity:this.props.bb,transition: 'all 0.1s ease-in-out'}} className="illustrationsvg" src={require(`${this.props.tick}`)}/>
        </span>;


        return (
            <div>
                <div className="main">
                    <div className="circle-checkbox">
                        {aa}
                    </div>
                </div>
            </div>
        );
    }

}


export default RoundButton;

