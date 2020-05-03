export default class DrawGridController {
    constructor(ctx, visialWidth, visialHeight, tileWidth, tileHeight) {
        this.ctx = ctx
        this.visialWidth = visialWidth
        this.visialHeight = visialHeight
        this.tileWidth = tileWidth
        this.tileHeight = tileHeight
        this.gridPositions = []
        this.numColumn = 0
        this.numRow = 0
        this.gridColor = '#000000'
        this.backgroundColor = 'rgba(211,211,211,1)'
        this.gridThickness = 2
        this.canvasWidth = 0
        this.canvasHeight = 0
        this.buildModel()
        this.setCanvasDimension()
    }

    drawGrid = () => {
        this.drawGridBackground()
        this.drawGridBorder()
    }

    drawGridBorder = () => {
        this.ctx.save()
        this.ctx.fillStyle = this.gridColor
        for (let i = 0; i < this.numRow + 1; i++) {
            const top = i * (this.gridThickness + this.tileHeight)
            this.ctx.fillRect(0, top, this.canvasWidth, this.gridThickness)
        }
        for (let i = 0; i < this.numColumn + 1; i++) {
            const left = i * (this.gridThickness + this.tileWidth)
            this.ctx.fillRect(left, 0, this.gridThickness, this.canvasHeight)
        }
        this.ctx.restore()
    }

    drawGridBackground = () => {
        this.ctx.save()
        this.ctx.fillStyle = this.backgroundColor
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
        this.ctx.restore()
    }

    setGridThickness = (gridThickness) => {
        this.gridThickness = gridThickness
    }

    getGridThickness = () => {
        return this.gridThickness
    }

    setGridColor = (gridColor) => {
        this.gridColor = gridColor
    }

    getGridColor = () => {
        return this.getGridColor
    }

    setBackgroundColor = (color) => {
        this.backgroundColor = color
    }

    getBackGroundColor = () => {
        return this.backgroundColor
    }

    buildModel = () => {
        this.numColumn = Math.floor(this.visialWidth / this.tileWidth)
        this.numRow = Math.floor(this.visialHeight / this.tileHeight)
        for (let o = 0; o < this.numRow; o++)
            for (let i = 0; i < this.numColumn; i++)
                this.gridPositions.push({
                    x: this.gridThickness + i * (this.tileWidth + this.gridThickness),
                    y: this.gridThickness + o * (this.tileHeight + this.gridThickness)
                })
    }

    setCanvasDimension = () => {
        this.canvasWidth = this.visialWidth + (this.numColumn + 1) * this.gridThickness
        this.canvasHeight = this.visialHeight + (this.numRow + 1) * this.gridThickness
    }

    getCanvasDimension = () => {
        return {
            width: this.canvasWidth,
            height: this.canvasHeight
        }
    }

    getGridPositions = () => {
        return this.gridPositions
    }

    mouseXYisInGrid = (mouseX, mouseY, gridLeft, gridTop) => {
        if (
            mouseX > gridLeft &&
            mouseY > gridTop &&
            mouseX < gridLeft + this.tileWidth &&
            mouseY < gridTop + this.tileHeight
        )
            return true
        return false
    }

    getGridIndexFromMouseXY = (x, y) => {
        for (let o = 0; o < this.numRow; o++)
            for (let i = 0; i < this.numColumn; i++) {
                const gridLeft = this.gridThickness + i * (this.tileWidth + this.gridThickness)
                const gridTop = this.gridThickness + o * (this.tileHeight + this.gridThickness)
                if (this.mouseXYisInGrid(x, y, gridLeft, gridTop))
                    return {
                        x: i,
                        y: o
                    }
            }

        return null
    }

    getGridPositionFromIndex = (x, y) => {
        return {
            x: this.gridThickness + x * (this.tileWidth + this.gridThickness),
            y: this.gridThickness + y * (this.tileHeight + this.gridThickness)
        }
    }

    getGridPositionFromMouseXY = (x, y) => {
        const gridIndex = this.getGridIndexFromMouseXY(x, y)
        if (!gridIndex) return null
        return this.getGridPositionFromIndex(gridIndex.x, gridIndex.y)
    }

    fillGridFromMouseXY = (x, y) => {
        const gridPosition = this.getGridPositionFromMouseXY(x, y)
        if (!gridPosition) return
        this.ctx.fillRect(gridPosition.x, gridPosition.y, this.tileWidth, this.tileHeight)
    }

}