import React from 'react';
import { Rnd } from 'react-rnd';
import { connect } from 'react-redux';
import Titlebar from '../tools/Titlebar'
import LayerList from './LayerList'
import * as handler from '../../../store/database/WorkScreenHandler';
import InputRange from 'react-input-range';


class LayerWindow extends React.Component {

    state = {
        value: { min: 2, max: 10 },
    };

    handleOnResize = (e, direction, ref, delta, position) => {
        this.props.handleToTop('layer');
        const { width, height } = ref.style
        this.setState({ rander: 'go' }, () => {
            this.props.handleOnResize("layer", { width, height })
        })
    }

    handleChange = (e) => {

    }

    render() {
        const { size, position } = this.props.window
        return (
            <Rnd
                className="workscreen-window"
                size={size}
                default={position}
                onMouseDown={() => { this.props.handleToTop('layer') }}
                onResize={this.handleOnResize}
            >
                <Titlebar title="Layer Window" />
                <LayerList />
                <i className="fas fa-plus layer-add-btn better-btn" />
                <span className="opacity-text">OPACITY</span>
                <div className="layer-range">

                </div>
                <InputRange
                    maxValue={20}
                    minValue={0}
                    value={this.state.value}
                    onChange={value => this.setState({ value })} />
            </Rnd>

        )
    }

}

const mapStateToProps = (state) => {
    const { layer } = state.workScreen
    return {
        window: layer,
    }
};

const mapDispatchToProps = (dispatch) => ({
    handleOnResize: (name, value) => dispatch(handler.resizeWindowHandler(name, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LayerWindow)
