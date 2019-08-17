import React, {Component} from 'react';
import Chips, { Chip } from 'react-chips';
import Icon from '@material-ui/core/Icon';
import Button from 'material-ui/IconButton'


export default class Form extends Component {
    state = {
        chips : []
    }
    onChange = chips => {
        this.setState({ chips });
    }
      
    render() {
        return (
        <div>
        <Chips
            value={this.state.chips}
            onChange={this.onChange}
            />
        <Button variant="contained" color="primary" className={classes.button}>
        Send
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        <Icon className={classes.rightIcon}>send</Icon>
        </Button>
        </div>
        );
    }
}