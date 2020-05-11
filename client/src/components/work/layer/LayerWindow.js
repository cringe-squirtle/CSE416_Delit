import React from 'react';
import { Rnd } from 'react-rnd';
import { connect } from 'react-redux';
import Titlebar from '../../tools/Titlebar'
import LayerList from './LayerList';
import Slider from '@material-ui/core/Slider';
import * as handler from '../../../store/database/WorkScreenHandler';

class LayerWindow extends React.Component {


    handleOnResize = (e, direction, ref, delta, position) => {
        this.props.handleOnResize(ref, position, 'layer')
    };

    handleChange = (e) => {

    };

    handleAddLayer = e => {
        e.stopPropagation()
        this.props.handleAddLayer()
    }

    handleOpacityOnChange = (e, value) => {

        this.props.handlePassOpacity(value);
    };

    render() {
        const { open, dimension, selected, layerList, transactions } = this.props
        const { width } = dimension.size
        const maxWidth = width - 142;
        let opacity = 0
        if (selected) {
            for (let i = 0; i < layerList.length; i++) {
                if (layerList[i]._id === selected)
                    opacity = layerList[i].opacity * 100
            }
        }
        return (
            <Rnd
                className={"workscreen-window " + (open ? '' : 'invisible')}
                size={dimension.size}
                position={dimension.position}
                onMouseDown={() => { this.props.handleToTop('layer') }}
                onResize={this.handleOnResize}
                onResizeStop={this.handleOnResize}
                onResizeStart={() => this.props.handleToTop('layer')}
                id='layer'
                onDragStop={(e, d) => this.props.handleOnDragStop(e, d, 'layer')}
                style={{ zIndex: dimension.zIndex }}
            >
                <Titlebar title="Layer Window" />
                <LayerList maxWidth={maxWidth} transactions={transactions} />
                <i className="fas fa-plus layer-add-btn better-btn" onMouseDown={e => e.stopPropagation()} onClick={this.handleAddLayer} />
                <span className="opacity-text">OPACITY:</span>
                <div className="layer-range">
                    <Slider
                        defaultValue={0}
                        value={opacity}
                        getAriaValueText={value => value + "%"}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        marks
                        min={0}
                        max={100}
                        onMouseDown={e => e.stopPropagation()}
                        onChange={this.handleOpacityOnChange}
                        disabled={!selected}
                    />
                </div>
            </Rnd>

        )
    }

}

const mapStateToProps = (state) => {
    const { layerList, selected } = state.layer;
    return {
        layerList,
        selected
    }
};

const mapDispatchToProps = (dispatch) => ({
    handlePassOpacity: (value) => dispatch(handler.passOpacityHandler(value)),
    handleAddLayer: () => dispatch(handler.layerAddHandler())
})

export default connect(mapStateToProps, mapDispatchToProps)(LayerWindow)
