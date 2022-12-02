addEventListener("DOMContentLoaded", main);

function main() {
    // Submit button listener
    document.querySelector("#create").addEventListener("click", createBoard);


    // Create a new board
    function createBoard() {
        if(document.querySelector("table") != null) {
            let t = document.querySelector("table");
            t.parentNode.removeChild(t);
        }
        let w = document.querySelector("#width").value;
        let h = document.querySelector("#height").value;
        let b = new Board(w, h);
        console.log(b);

        // Add characters to sidebar
        let a = ["abra", "cadabra", "alakazam"]     // Temp demo variable before integration :)
        displayCharacters(a);
    }
    
    /*
    *   DOM manipulation function - Display list of characters that can be placed on the board
    *
    *   @param array of character objects 
    */
    function displayCharacters(characters) {
        for(let character of characters) {
            let c = document.createElement("p");
            document.querySelector("main").querySelectorAll("div")[1].appendChild(c);
            c.textContent = character;
            c.setAttribute("draggable", "true");
            c.addEventListener("dragstart", dragStart);
        }
    }


    // Board object
    function Board(w, h) {
        if(Number.isNaN(w) || Number.isNaN(h)) {
            throw console.error("NaN detected");
        }

        // Variables
        this.width = w;
        this.height = h;
        this.tiles = [];

        // Create a blank table to display the board later
        addTable();

        // Populate tiles array
        for(let i = 0; i < w; i++) {
            this.tiles[i] = [];
            addRow();
            for(let j = 0; j < h; j++) {
                this.tiles[i][j] = new Tile(null, i, j);
            }
        }
    }


    // DOM manipulation function - Add a table to the page
    function addTable() {
        let t = document.createElement("table");
        document.body.querySelector("main").querySelector("div").appendChild(t);

        // Add an event listener for changing cells to walls
        t.addEventListener("click", wallVisual);
    }

    // DOM manipulation function - Add rows to the table
    function addRow() {
        let t = document.querySelector("table");
        let r = document.createElement("tr");
        t.appendChild(r);
    } 

    // DOM manipulation function - Add cells to the table
    function addCell(row, content) {
        let t = document.querySelectorAll("tr")[row];
        let c = document.createElement("td");
        t.appendChild(c);
        let p = document.createElement("p");
        c.appendChild(p);
        p.textContent = content;

        c.addEventListener("dragover", dragOver);
        c.addEventListener("drop", drop);
        c.addEventListener("dragend", dragEnd);
    }

    // DOM manipulation function - Changes the visual appearance of wall tiles
    function wallVisual(event) {
        let c = event.target;
        if(!c.classList.contains("wall")) {
            c.classList.add("wall");
        } else {
            c.classList.remove("wall");
        }
    }


    // Tile object
    function Tile(contents, row, col) {
        // Variables
        this.wall = false;
        this.contents = contents;
        this.row = row;
        this.col = col;

        // Add a corresponding cell to the table
        addCell(row, null);
    }

    // Make wall Tile method
    Tile.prototype.setWall = function(cell) {
        console.log("clicked")
        if(this.wall == true) {
            this.wall == false;
        } else {
            this.wall = true;
        }
        wallVisual(cell, this.wall);
    }

    // Change tile contents Tile method
    Tile.prototype.changeContents = function(content) {
        this.contents = content;
    }

    // toString Tile method
    Tile.prototype.toString = function() {
        return this.contents;
    }


    // When a drag starts
    function dragStart(event) {
        event.dataTransfer.setData("text/html", event.target.innerHTML);
    }

    // Preparing table cells for dropping
    function dragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }

    // Actually dropping
    function drop(event) {
        event.preventDefault();
        let character = event.dataTransfer.getData("text/html");
        let p = document.createElement("p");
        event.target.appendChild(p);
        p.innerHTML = character;
    }

    // After a drop is complete
    function dragEnd(event) {
        console.log(event.target)
        if(event.dataTransfer.dropEffect !== "none") {
            event.target.remove();
        }
    }
}