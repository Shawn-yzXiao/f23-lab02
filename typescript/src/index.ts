import { newRenderer } from "./renderer.js"
import { newRectangle } from "./shapes/rectangle.js";
import { newCircle } from "./shapes/circle.js";


const shape: Shape = newCircle(3)
const renderer = newRenderer(shape)
renderer.draw();