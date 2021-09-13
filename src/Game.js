import React from 'react';
import './Game.css';
// import SVG from "svgjs"
const width = 256;
const height = 256;

const CELLS_X = 20
const WIDTH = window.innerWidth;
const CELL_SIZE = WIDTH / CELLS_X;
const HEIGHT = window.innerHeight - 100;
const shapes = [
    "<polygon points='128.15 0 0 256 256.3 256 128.15 0'/>",
    "<path d='M256,256h0C114.61,256,0,141.39,0,0H0C141.39,0,256,114.61,256,256Z'/>",
    "<path d='M0,256H0C0,114.61,114.61,0,256,0h0C256,141.39,141.39,256,0,256Z'/>",
    "<rect width='256' height='128'/>",
    "<rect x='37.49' y='37.49' width='181.02' height='181.02' transform='translate(-53.02 128) rotate(-45)'/>",
    "<polygon points='256 256 0 256 0 0 256 256'/>",
    "<rect width='256' height='256'/>",
    "<polygon points='128 256 0 256 128 0 256 0 128 256'/>",
    "<rect x='37.49' y='37.49' width='181.02' height='181.02' transform='translate(-53.02 128) rotate(-45)'/>",
    "<rect width='256' height='256' rx='128'/>",
    "<polygon points='0 256 0 0 256 0 0 256'/>",
    "<polygon points='128.15 0 0 256 256.3 256 128.15 0'/>",
    "<polygon points='256 256 0 256 0 0 256 256'/>",
    "<rect width='256' height='256'/>",
    "<polygon points='128 256 0 256 128 0 256 0 128 256'/>",
    "<polygon points='128 256 0 256 128 0 256 0 128 256'/>",
    "<rect x='37.49' y='37.49' width='181.02' height='181.02' transform='translate(-53.02 128) rotate(-45)'/>",
    "<rect width='256' height='256' rx='128'/>",
    "<path d='M205.6,101.29,256.3,0H0L50.71,101.29C82.64,165.08,173.67,165.08,205.6,101.29Z'/>",
    "<polygon points='0 256 0 0 256 0 0 256'/>",
    "<path d='M256,256H0V0H0C141.39,0,256,114.61,256,256Z'/>",
    "<polygon points='128 256 256 256 128 0 0 0 128 256'/>",
    "<path d='M128,181,0,53H0a181,181,0,0,1,256,0h0Z'/>",
    "<path d='M128,128V0h0a128,128,0,0,0,0,256h0A128,128,0,0,0,256,128Z'/>",
    "<polygon points='128 0 0 0 0 128 0 256 128 256 128 128 256 128 256 0 128 0'/>",
    "<path d='M128,0h0A128,128,0,0,0,0,128H0V256H128V128H256V0Z'/>",
    "<path d='M128,0h0A128,128,0,0,1,0,128H0A128,128,0,0,0,128,256h0V128h0V256A128,128,0,0,1,256,128,128,128,0,0,0,128,0Z'/>",
    "<path d='M128,0h0A128,128,0,0,0,0,128H0V256H256V0Z'/>",
    "<path d='M128,0h0A128,128,0,0,0,0,128H0V256H128A128,128,0,0,0,256,128h0V0Z'/>",
    "<path d='M128,0h0A128,128,0,0,0,0,128H0V256H128A128,128,0,0,0,256,128h0A128,128,0,0,0,128,0Z'/>",
    "<path d='M256,256h0C114.61,256,0,141.39,0,0H256Z'/>",
    "<polygon points='0 0 256 0 256 256 0 0'/>",
    "<polygon points='256 0 256 256 0 256 256 0'/>",
    "<path d='M0,256H0C0,114.61,114.61,0,256,0h0C256,141.39,141.39,256,0,256Z'/>",
    "<path d='M256,256h0C114.61,256,0,141.39,0,0H0C141.39,0,256,114.61,256,256Z'/>",
    "<rect width='256' height='128'/>",
    "<rect width='128' height='256'/>",
    "<polygon points='256 0 0 0 0 256 128 128 256 256 256 0 256 0 256 0'/>",
    "<polygon points='256 256 256 0 128 128 0 0 0 256 0 256 0 256 256 256'/>",
    "<path d='M256,64V0H192a64,64,0,0,0-64,64A64,64,0,0,0,64,0H0V64a64,64,0,0,0,64,64A64,64,0,0,0,0,192v64H64a64,64,0,0,0,64-64,64,64,0,0,0,64,64h64V192a64,64,0,0,0-64-64A64,64,0,0,0,256,64Z'/>",
    "<path d='M0,128A128,128,0,0,0,128,0H0V256H128A128,128,0,0,0,0,128Z'/><path d='M128,256H256V128h0A128,128,0,0,0,128,256Z'/><path d='M256,128V0H128A128,128,0,0,0,256,128Z'/>",
    "<path d='M0,256H0V0L75,75C141.78,141.78,94.47,256,0,256Z'/>",
    "<path d='M0,0H256L181,75C114.22,141.78,0,94.47,0,0Z'/>",
    "<path d='M106.25,0h0V256l-75-75C-35.53,114.22,11.78,0,106.25,0Z'/>",
    "<path d='M256,106.25H0l75-75C141.78-35.53,256,11.78,256,106.25Z'/>",
    "<path d='M256,256h0L128,0H0L70.76,141.51A207.09,207.09,0,0,0,256,256Z'/>",
    "<path d='M0,256H0L128,0H256L185.24,141.51A207.09,207.09,0,0,1,0,256Z'/>",
    "<path d='M128,181,0,53H0a181,181,0,0,1,256,0h0Z'/>",
    "<path d='M53,256h0A181,181,0,0,1,53,0h0a181,181,0,0,1,0,256Z'/>",
    "<path d='M128,128h0V0A128,128,0,0,1,0,128H0A128,128,0,0,0,128,256h0A128,128,0,0,0,256,128V0A128,128,0,0,1,128,128Z'/>",
    "<path d='M128,0H0A128,128,0,0,0,128,128h0A128,128,0,0,0,256,0Z'/>",
    "<path d='M128,0a128,128,0,0,0,0,256h0V0Z'/>",
    "<path d='M0,128H256A128,128,0,0,0,0,128Z'/>",
    "<path d='M0,128H256A128,128,0,0,0,0,128Z'/>",
    "<path d='M181,128a53,53,0,0,1-53-53V0h0a128,128,0,0,0,0,256h0a127.61,127.61,0,0,0,91-37.94C252,184.71,228,128,181,128Z'/>",
    "<path d='M256,128V0H128A128,128,0,0,0,0,128H128A128,128,0,0,0,0,256H128V128A128,128,0,0,0,256,256h0V128Zm-128,0V0A128,128,0,0,0,256,128Z'/>",
    "<path d='M0,128H0a181,181,0,0,1,256,0h0A181,181,0,0,1,0,128Z'/>",
    "<path d='M256,0h0V256l-75-75C114.22,114.22,161.53,0,256,0Z'/>",
    "<path d='M128,0h0V256h0A128,128,0,0,0,128,0Z'/>",
    "<path d='M128,128H0A128,128,0,0,0,128,256h0A128,128,0,0,0,256,128Z'/>",
    "<path d='M128,0a128,128,0,0,0,0,256h0V0Z'/>",
    "<path d='M0,128H256A128,128,0,0,0,0,128Z'/>",
    "<path d='M128,0h0A128,128,0,0,0,0,128H128Z'/>",
    "<path d='M128,0h0V128H256A128,128,0,0,0,128,0Z'/>",
    "<path d='M0,128A128,128,0,0,0,128,256h0V128Z'/>",
    "<path d='M128,256h0A128,128,0,0,0,256,128H128Z'/>",
    "<path d='M256,256h0C114.61,256,0,141.39,0,0H0Z'/>",
    "<path d='M0,256H0C0,114.61,114.61,0,256,0h0Z'/>",
    "<path d='M256,256h0C114.62,256,0,141.39,0,0H0Z'/>",
    "<path d='M256,0h0C256,141.39,141.39,256,0,256H0Z'/>",
    "<path d='M128,256,0,128H0a181,181,0,0,1,256,0h0Z'/>",
    //  "<rect y='64' width='64' height='64'/><rect x='64' width='64' height='64'/><rect x='128' y='64' width='64' height='64'/><rect x='192' width='64' height='64'/><rect x='192' y='128' width='64' height='64'/><rect x='64' y='128' width='64' height='64'/><rect y='192' width='64' height='64'/><rect x='128' y='192' width='64' height='64'/>",
    //  "<rect x='128' width='64' height='64'/><rect x='192' y='64' width='64' height='64'/><rect x='128' y='128' width='64' height='64'/><rect x='192' y='192' width='64' height='64'/><rect x='64' y='192' width='64' height='64'/><rect x='64' y='64' width='64' height='64'/><rect width='64' height='64'/><rect y='128' width='64' height='64'/>",
    //  "<rect width='32' height='32'/><rect x='64' width='32' height='32'/><rect x='128' width='32' height='32'/><rect x='192' width='32' height='32'/><rect x='32' y='32' width='32' height='32'/><rect x='96' y='32' width='32' height='32'/><rect x='160' y='32' width='32' height='32'/><rect x='224' y='32' width='32' height='32'/><rect y='64' width='32' height='32'/><rect x='64' y='64' width='32' height='32'/><rect x='128' y='64' width='32' height='32'/><rect x='192' y='64' width='32' height='32'/><rect x='32' y='96' width='32' height='32'/><rect x='96' y='96' width='32' height='32'/><rect x='160' y='96' width='32' height='32'/><rect x='224' y='96' width='32' height='32'/><rect y='128' width='32' height='32'/><rect x='64' y='128' width='32' height='32'/><rect x='128' y='128' width='32' height='32'/><rect x='192' y='128' width='32' height='32'/><rect x='32' y='160' width='32' height='32'/><rect x='96' y='160' width='32' height='32'/><rect x='160' y='160' width='32' height='32'/><rect x='224' y='160' width='32' height='32'/><rect y='192' width='32' height='32'/><rect x='64' y='192' width='32' height='32'/><rect x='128' y='192' width='32' height='32'/><rect x='192' y='192' width='32' height='32'/><rect x='32' y='224' width='32' height='32'/><rect x='96' y='224' width='32' height='32'/><rect x='160' y='224' width='32' height='32'/><rect x='224' y='224' width='32' height='32'/>",
    //  "<rect width='32' height='32' rx='16'/><rect x='64' width='32' height='32' rx='16'/><rect x='128' width='32' height='32' rx='16'/><rect x='192' width='32' height='32' rx='16'/><rect x='32' y='32' width='32' height='32' rx='16'/><rect x='96' y='32' width='32' height='32' rx='16'/><rect x='160' y='32' width='32' height='32' rx='16'/><rect x='224' y='32' width='32' height='32' rx='16'/><rect y='64' width='32' height='32' rx='16'/><rect x='64' y='64' width='32' height='32' rx='16'/><rect x='128' y='64' width='32' height='32' rx='16'/><rect x='192' y='64' width='32' height='32' rx='16'/><rect x='32' y='96' width='32' height='32' rx='16'/><rect x='96' y='96' width='32' height='32' rx='16'/><rect x='160' y='96' width='32' height='32' rx='16'/><rect x='224' y='96' width='32' height='32' rx='16'/><rect y='128' width='32' height='32' rx='16'/><rect x='64' y='128' width='32' height='32' rx='16'/><rect x='128' y='128' width='32' height='32' rx='16'/><rect x='192' y='128' width='32' height='32' rx='16'/><rect x='32' y='160' width='32' height='32' rx='16'/><rect x='96' y='160' width='32' height='32' rx='16'/><rect x='160' y='160' width='32' height='32' rx='16'/><rect x='224' y='160' width='32' height='32' rx='16'/><rect y='192' width='32' height='32' rx='16'/><rect x='64' y='192' width='32' height='32' rx='16'/><rect x='128' y='192' width='32' height='32' rx='16'/><rect x='192' y='192' width='32' height='32' rx='16'/><rect x='32' y='224' width='32' height='32' rx='16'/><rect x='96' y='224' width='32' height='32' rx='16'/><rect x='160' y='224' width='32' height='32' rx='16'/><rect x='224' y='224' width='32' height='32' rx='16'/>",
    //  "<rect x='128' y='128' width='32' height='32' rx='16'/><rect x='160' y='160' width='32' height='32' rx='16'/><rect x='192' y='192' width='32' height='32' rx='16'/><rect x='224' y='224' width='32' height='32' rx='16'/><rect x='96' y='96' width='32' height='32' rx='16'/><rect x='64' y='64' width='32' height='32' rx='16'/><rect x='32' y='32' width='32' height='32' rx='16'/><rect width='32' height='32' rx='16'/><rect x='32' y='192' width='32' height='32' rx='16'/><rect x='64' y='160' width='32' height='32' rx='16'/><rect y='224' width='32' height='32' rx='16'/><rect x='160' y='64' width='32' height='32' rx='16'/><rect x='192' y='32' width='32' height='32' rx='16'/><rect x='224' width='32' height='32' rx='16'/>",
    // " <rect x='224' y='224' width='32' height='32' rx='16'/><rect width='32' height='32' rx='16'/><rect y='224' width='32' height='32' rx='16'/><rect y='160' width='32' height='32' rx='16'/><rect y='64' width='32' height='32' rx='16'/><rect x='224' width='32' height='32' rx='16'/><rect x='224' y='64' width='32' height='32' rx='16'/><rect x='224' y='160' width='32' height='32' rx='16'/><rect x='64' width='32' height='32' rx='16'/><rect x='64' y='224' width='32' height='32' rx='16'/><rect x='160' y='224' width='32' height='32' rx='16'/><rect x='160' width='32' height='32' rx='16'/>",
    "<path d='M256,128V0H128A128,128,0,0,0,256,128Z'/><path d='M128,0H0V128H0A128,128,0,0,0,128,0Z'/>",
    "<path d='M0,128V256H128A128,128,0,0,0,0,128Z'/><path d='M256,128h0A128,128,0,0,0,128,256H256Z'/>",
    "<path d='M128,0H0V128H0A128,128,0,0,0,128,0Z'/><path d='M0,128V256H128A128,128,0,0,0,0,128Z'/>",
    "<path d='M256,128V0H128A128,128,0,0,0,256,128Z'/><path d='M256,128h0A128,128,0,0,0,128,256H256Z'/>",
    "<path d='M128,0H0V128H0A128,128,0,0,0,128,0Z'/>",
    "<path d='M256,128V0H128A128,128,0,0,0,256,128Z'/>",
    "<path d='M0,128V256H128A128,128,0,0,0,0,128Z'/>",
    "<path d='M256,128h0A128,128,0,0,0,128,256H256Z'/>",
  ];


class Cell extends React.Component {
    constructor(props) {
        super(props);
      }


color(){
   let COLORRGB = `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, .7)`
   let COLORRGB2 = `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, .7)`
   let COLOR = `linear-gradient(${COLORRGB}, ${COLORRGB2})`
   return COLOR
}

shape(){
    const { x, y } = this.props;
    // let shapeVariable = `borderBottomLeftRadius`;
    let shapeValue = `${0.5*CELL_SIZE}`
    let randomBolean1 = Math.floor(Math.random()*2) * shapeValue + "px"
    let randomBolean2 = Math.floor(Math.random()*2) * shapeValue + "px"
    let randomBolean3 = Math.floor(Math.random()*2) * shapeValue + "px"
    let randomBolean4 = Math.floor(Math.random()*2) * shapeValue + "px"
    let style= {
    background:this.color(),
    left: `${CELL_SIZE * x + 1}px`,
    top: `${CELL_SIZE * y + 1}px`,
    width: `${CELL_SIZE + 10}px`,
    height: `${CELL_SIZE + 10}px`,
    overflow:`visible`,
    // borderBottomLeftRadius: randomBolean1,
    // borderBottomRightRadius: randomBolean2,
    // borderTopLeftRadius: randomBolean3,
    // borderTopRightRadius: randomBolean4,

};



return style}



    render() {
        const { x, y } = this.props;
        return (
            // <div className="Cell" style={
            // this.shape()} />
            <div className="Cell"  style={
                this.shape()}> 
<svg width="1000" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
<rect x={CELL_SIZE * x} y={CELL_SIZE * y}  width={CELL_SIZE} height={CELL_SIZE} stroke="black" fill="transparent" strokeWidth="5"/>
{/* {shapes[0]} */}
            </svg>
            </div>
        );
    }
}


class Game extends React.Component {

    constructor() {
        super();
        this.rows = HEIGHT / CELL_SIZE;
        this.cols = WIDTH / CELL_SIZE;

        this.board = this.makeEmptyBoard();
    }

    state = {
        cells: [],
        isRunning: false,
        interval: 1000,
    }

    makeEmptyBoard() {
        let board = [];
        for (let y = 0; y < this.rows; y++) {
            board[y] = [];
            for (let x = 0; x < this.cols; x++) {
                board[y][x] = false;
            }
        }

        return board;
    }

    getElementOffset() {
        const rect = this.boardRef.getBoundingClientRect();
        const doc = document.documentElement;

        return {
            x: (rect.left + window.pageXOffset) - doc.clientLeft,
            y: (rect.top + window.pageYOffset) - doc.clientTop,
        };
    }

    makeCells() {
        let cells = [];
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                if (this.board[y][x]) {
                    cells.push({ x, y });
                }
            }
        }

        return cells;
    }

    handleClick = (event) => {

        const elemOffset = this.getElementOffset();
        const offsetX = event.clientX - elemOffset.x;
        const offsetY = event.clientY - elemOffset.y;
        
        const x = Math.floor(offsetX / CELL_SIZE);
        const y = Math.floor(offsetY / CELL_SIZE);

        if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
            this.board[y][x] = !this.board[y][x];
        }

        this.setState({ cells: this.makeCells() });
    }

    runGame = () => {
        this.setState({ isRunning: true });
        this.runIteration();
    }

    stopGame = () => {
        this.setState({ isRunning: false });
        if (this.timeoutHandler) {
            window.clearTimeout(this.timeoutHandler);
            this.timeoutHandler = null;
        }
    }

    runIteration() {
        let newBoard = this.makeEmptyBoard();

        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                let neighbors = this.calculateNeighbors(this.board, x, y);
                if (this.board[y][x]) {
                    if (neighbors>1 &&neighbors<4) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                } else {
                    if (!this.board[y][x] && neighbors === 3) {
                        newBoard[y][x] = true;
                    }
                }
            }
        }

        this.board = newBoard;
        this.setState({ cells: this.makeCells() });

        this.timeoutHandler = window.setTimeout(() => {
            this.runIteration();
        }, this.state.interval);
    }

    /**
     * Calculate the number of neighbors at point (x, y)
     * @param {Array} board 
     * @param {int} x 
     * @param {int} y 
     */
    calculateNeighbors(board, x, y) {
        let neighbors = 0;
        const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
        for (let i = 0; i < dirs.length; i++) {
            const dir = dirs[i];
            let y1 = y + dir[0];
            let x1 = x + dir[1];

            if (x1 >= 0 && x1 < this.cols && y1 >= 0 && y1 < this.rows && board[y1][x1]) {
                neighbors++;
            }
        }

        return neighbors;
    }

    handleIntervalChange = (event) => {
        this.setState({ interval: event.target.value });
    }

    handleClear = () => {
        this.board = this.makeEmptyBoard();
        this.setState({ cells: this.makeCells() });
    }

    handleRandom = () => {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                this.board[y][x] = (Math.random() >= 0.5);
            }
        }

        this.setState({ cells: this.makeCells() });
    }

    render() {
        const { cells, interval, isRunning } = this.state;
        return (
            <div>
                <div className="Board"
                    style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}
                    onClick={this.handleClick}
                    ref={(n) => { this.boardRef = n; }}>

                    {cells.map(cell => (
                        <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`}/>
                    ))}
                </div>

                <div className="controls">
                    Update every <input value={this.state.interval} onChange={this.handleIntervalChange} /> msec
                    {isRunning ?
                        <button className="button" onClick={this.stopGame}>Stop</button> :
                        <button className="button" onClick={this.runGame}>Run</button>
                    }
                    <button className="button" onClick={this.handleRandom}>Random</button>
                    <button className="button" onClick={this.handleClear}>Clear</button>
                </div>
            </div>
        );
    }
}


export default Game;