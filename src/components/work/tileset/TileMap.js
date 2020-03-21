import React from 'react';
import Canvas from '../canvas/Canvas'
import { connect } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import squirtle from '../../../img/squirtle.jpg'

class TileMap extends React.Component {

    state = {
        scale: 50,
    }

    canvas = React.createRef();


    handleZoomIn = (e) => {
        e.stopPropagation()
        let { scale } = this.state;
        scale = scale * 2;
        this.setState({ scale: scale })
    }

    handleZoomOut = (e) => {
        e.stopPropagation()
        let { scale } = this.state;
        scale = scale / 2;
        this.setState({ scale: scale })
    }

    render() {
        const { style, width, imgWidth, height, imgHeight, window } = this.props;
        const totalStyle = {
            ...style,
            marginLeft: imgWidth ? imgWidth >= width ? "auto" : (width - imgWidth) / 2 : "auto",
            marginTop: imgHeight ? imgHeight >= height ? "auto" : (height - imgHeight) / 2 : "auto",
        }
        return (
            <PerfectScrollbar className="display-place" style={totalStyle} >
                <Canvas canvas={this.canvas} squirtle={squirtle} window={window} />
            </ PerfectScrollbar>
        )
    }

}

const mapStateToProps = (state) => {
    const { squirtle } = state.tileset.imgs
    if (!squirtle) return {}
    const { imgWidth, imgHeight } = squirtle
    return {
        imgWidth, imgHeight
    }
};

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(TileMap)
