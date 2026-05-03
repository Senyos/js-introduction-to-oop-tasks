// BEGIN
export class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    getX() { return this.x }
    getY() { return this.y }
}

export class Segment {
    constructor(beginPoint, endPoint) {
        this.beginPoint = beginPoint
        this.endPoint   = endPoint
    }
    getBeginPoint() { return this.beginPoint }
    getEndPoint  () { return this.endPoint   }
}

export const reverse = (segment) => {
    const beginPoint = segment.getBeginPoint()
    const endPoint   = segment.getEndPoint()
    return new Segment( new Point( endPoint.getX(),   endPoint.getY()  ),
                        new Point( beginPoint.getX(), beginPoint.getY()) )
}

export default { Point, Segment, reverse }
// END
