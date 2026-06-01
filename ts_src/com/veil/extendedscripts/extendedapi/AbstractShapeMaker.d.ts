
/**
 * Interface for generating sets of block positions that form 3D shapes.
 */
declare namespace ShapeMaker {
	/**
	 * Solid box centred on {@code center} with the given full width, height, and length.
	 */
	function getBox(center: IPos, width: number, height: number, length: number): IPos[];

	/**
	 * Solid box from corner {@code pos1} to corner {@code pos2}.
	 */
	function getBox(pos1: IPos, pos2: IPos): IPos[];

	/**
	 * Hollow box with configurable shell thickness.
	 */
	function getHollowBox(center: IPos, width: number, height: number, length: number, thickness: number): IPos[];

	/**
	 * Hollow box with shell thickness 1.
	 */
	function getHollowBox(center: IPos, width: number, height: number, length: number): IPos[];

	/**
	 * Hollow box from corner to corner with configurable shell thickness.
	 */
	function getHollowBox(pos1: IPos, pos2: IPos, thickness: number): IPos[];

	/**
	 * Hollow box from corner to corner with shell thickness 1.
	 */
	function getHollowBox(pos1: IPos, pos2: IPos): IPos[];

	/**
	 * Solid ellipsoid centred on {@code center} with per-axis radii.
	 */
	function getEllipsoid(center: IPos, radiusX: number, radiusY: number, radiusZ: number): IPos[];

	/**
	 * Hollow ellipsoid with configurable shell thickness.
	 */
	function getHollowEllipsoid(center: IPos, radiusX: number, radiusY: number, radiusZ: number, thickness: number): IPos[];

	/**
	 * Hollow ellipsoid with shell thickness 1.
	 */
	function getHollowEllipsoid(center: IPos, radiusX: number, radiusY: number, radiusZ: number): IPos[];

	/**
	 * Solid sphere centred on {@code center}.
	 */
	function getSphere(center: IPos, radius: number): IPos[];

	/**
	 * Hollow sphere with configurable shell thickness.
	 */
	function getHollowSphere(center: IPos, radius: number, thickness: number): IPos[];

	/**
	 * Hollow sphere with shell thickness 1.
	 */
	function getHollowSphere(center: IPos, radius: number): IPos[];

	/**
	 * Solid hemisphere centred on the flat base.
	 * 
	 * @param center Centre of the flat base.
	 * @param radiusX Radius along X.
	 * @param radiusY Height of the dome above (or below) the base.
	 * @param radiusZ Radius along Z.
	 * @param faceUp {@code true} → dome rises upward; {@code false} → dome hangs downward.
	 */
	function getHemisphere(center: IPos, radiusX: number, radiusY: number, radiusZ: number, faceUp: boolean): IPos[];

	/**
	 * Solid hemisphere with equal XZ radius and configurable direction.
	 */
	function getHemisphere(center: IPos, radius: number, height: number, faceUp: boolean): IPos[];

	/**
	 * Solid upward-facing hemisphere with equal XZ radius.
	 */
	function getHemisphere(center: IPos, radius: number, height: number): IPos[];

	/**
	 * Hollow hemisphere with configurable direction and shell thickness.
	 */
	function getHollowHemisphere(center: IPos, radiusX: number, radiusY: number, radiusZ: number, faceUp: boolean, thickness: number): IPos[];

	/**
	 * Hollow upward-facing hemisphere with configurable shell thickness.
	 */
	function getHollowHemisphere(center: IPos, radiusX: number, radiusY: number, radiusZ: number, thickness: number): IPos[];

	/**
	 * Hollow upward-facing hemisphere with shell thickness 1.
	 */
	function getHollowHemisphere(center: IPos, radiusX: number, radiusY: number, radiusZ: number): IPos[];

	/**
	 * Solid cylinder centred on {@code center} (mid-height).
	 * 
	 * @param center Centre of the cylinder.
	 * @param radius Radius of the circular cross-section (XZ plane).
	 * @param height Full height.
	 */
	function getCylinder(center: IPos, radius: number, height: number): IPos[];

	/**
	 * Solid elliptic cylinder from corner {@code pos1} to corner {@code pos2}.
	 * The XZ cross-section is scaled to fill the bounding box.
	 */
	function getCylinder(pos1: IPos, pos2: IPos): IPos[];

	/**
	 * Hollow cylinder (pipe) with configurable wall thickness.
	 */
	function getHollowCylinder(center: IPos, radius: number, height: number, thickness: number): IPos[];

	/**
	 * Hollow cylinder with wall thickness 1.
	 */
	function getHollowCylinder(center: IPos, radius: number, height: number): IPos[];

	/**
	 * Solid pyramid centred on its geometric centre (mid-height).
	 * 
	 * @param center Centre of the bounding box.
	 * @param baseWidth Full width of the base (X axis).
	 * @param baseLength Full length of the base (Z axis).
	 * @param height Full height.
	 */
	function getPyramid(center: IPos, baseWidth: number, baseLength: number, height: number): IPos[];

	/**
	 * Solid pyramid from corner {@code pos1} to corner {@code pos2}.
	 */
	function getPyramid(pos1: IPos, pos2: IPos): IPos[];

	/**
	 * Hollow pyramid with configurable shell thickness.
	 */
	function getHollowPyramid(center: IPos, baseWidth: number, baseLength: number, height: number, thickness: number): IPos[];

	/**
	 * Hollow pyramid with shell thickness 1.
	 */
	function getHollowPyramid(center: IPos, baseWidth: number, baseLength: number, height: number): IPos[];

	/**
	 * Hollow pyramid from corner to corner with configurable shell thickness.
	 */
	function getHollowPyramid(pos1: IPos, pos2: IPos, thickness: number): IPos[];

	/**
	 * Hollow pyramid from corner to corner with shell thickness 1.
	 */
	function getHollowPyramid(pos1: IPos, pos2: IPos): IPos[];

	/**
	 * Solid cone centred on its geometric centre (mid-height).
	 * 
	 * @param center Centre of the bounding box.
	 * @param baseRadius Radius of the circular base (XZ plane).
	 * @param height Full height.
	 */
	function getCone(center: IPos, baseRadius: number, height: number): IPos[];

	/**
	 * Hollow cone with configurable shell thickness.
	 */
	function getHollowCone(center: IPos, baseRadius: number, height: number, thickness: number): IPos[];

	/**
	 * Hollow cone with shell thickness 1.
	 */
	function getHollowCone(center: IPos, baseRadius: number, height: number): IPos[];

	/**
	 * Solid capsule (cylinder with hemispherical end-caps) centred on the middle
	 * of the cylindrical body.
	 * 
	 * @param center Centre of the cylindrical section.
	 * @param radius Radius of both the cylinder and the end-caps.
	 * @param cylinderHeight Height of the straight cylindrical section only.
	 *                       Total height = {@code cylinderHeight + 2 * radius}.
	 */
	function getCapsule(center: IPos, radius: number, cylinderHeight: number): IPos[];

	/**
	 * Hollow capsule with configurable shell thickness.
	 */
	function getHollowCapsule(center: IPos, radius: number, cylinderHeight: number, thickness: number): IPos[];

	/**
	 * Hollow capsule with shell thickness 1.
	 */
	function getHollowCapsule(center: IPos, radius: number, cylinderHeight: number): IPos[];

	/**
	 * Solid torus lying flat in the XZ plane, centred on {@code center}.
	 * 
	 * @param center Centre of the torus.
	 * @param majorRadius Distance from the torus centre to the centre of the tube.
	 * @param minorRadius Radius of the tube itself.
	 */
	function getTorus(center: IPos, majorRadius: number, minorRadius: number): IPos[];

	/**
	 * Hollow torus with configurable tube-wall thickness.
	 */
	function getHollowTorus(center: IPos, majorRadius: number, minorRadius: number, thickness: number): IPos[];

	/**
	 * Hollow torus with tube-wall thickness 1.
	 */
	function getHollowTorus(center: IPos, majorRadius: number, minorRadius: number): IPos[];

	/**
	 * Finds points for an arc in 3D space.
	 * 
	 * @param centerPos When radius angleDeg is 360, a circle will form with this point at the center.
	 * @param direction A direction that points towards one of the points on the circle. Use this to control pitch and yaw.
	 * @param radius When angleDef is 360, a circle with will form with this radius.
	 * @param angleDeg How much of the circle to show. If 180, you will see a semicircle with 90 degrees to the left of the direction vector and the other 90 on the other side.
	 * @param rollDeg Use this to roll the arc.
	 * @param numPoints Number of points used to approximate the arc.
	 */
	function drawArc(centerPos: IPos, direction: IPos, radius: number, angleDeg: number, rollDeg: number, numPoints: number): IPos[];

	/**
	 * Draws a simple arc centered at {@code center} in the XZ plane.
	 * 
	 * @param center Arc center.
	 * @param radius Arc radius.
	 * @param angleDeg Total sweep angle in degrees.
	 * @param segments Number of line segments used to approximate the arc.
	 */
	function drawArc(center: IPos, radius: number, angleDeg: number, segments: number): IPos[];

	/**
	 * Draws a simple arc and rotates it around its center.
	 * 
	 * <p>Base arc lies in the XZ plane, then is rotated by X (pitch), Y (yaw), Z (roll).
	 */
	function drawArc(center: IPos, radius: number, angleDeg: number, segments: number, pitchDeg: number, yawDeg: number, rollDeg: number): IPos[];

	/**
	 * Draws a ring (full circle) centered at {@code center} in the XZ plane.
	 * 
	 * @param center Ring center.
	 * @param radius Ring radius.
	 * @param segments Number of segments used to approximate the ring.
	 */
	function drawRing(center: IPos, radius: number, segments: number): IPos[];

	/**
	 * Draws a ring and rotates it around its center.
	 * 
	 * <p>Base ring lies in the XZ plane, then is rotated by X (pitch), Y (yaw), Z (roll).
	 */
	function drawRing(center: IPos, radius: number, segments: number, pitchDeg: number, yawDeg: number, rollDeg: number): IPos[];

	/**
	 * Finds points for a crescent in 3D space. This is just 2 arcs.
	 * 
	 * @param centerPos When radius angleDeg is 360, a circle will form with this point at the center.
	 * @param direction A direction that points towards one of the points on the circle. Use this to control pitch and yaw.
	 * @param radius Radius of the outer arc.
	 * @param width Determines the distance between the outer arc and the inner arc.
	 * @param angleDeg How much of the circle to show. If 180, you will see a semicircle with 90 degrees to the left of the direction vector and the other 90 on the other side.
	 * @param rollDeg Use this to roll the arc.
	 * @param numPoints Number of points used to approximate the arc.
	 */
	function drawCrescent(centerPos: IPos, direction: IPos, radius: number, width: number, angleDeg: number, rollDeg: number, numPoints: number): IPos[];

	/**
	 * Draws a 3D Lissajous curve centered at {@code center}.
	 * 
	 * @param center Curve center.
	 * @param amplitudeX Amplitude on X.
	 * @param amplitudeY Amplitude on Y.
	 * @param amplitudeZ Amplitude on Z.
	 * @param freqX Frequency multiplier on X.
	 * @param freqY Frequency multiplier on Y.
	 * @param freqZ Frequency multiplier on Z.
	 * @param phaseDeg Phase offset in degrees (applied to X component).
	 * @param points Number of sampled points.
	 */
	function drawLissajous(center: IPos, amplitudeX: number, amplitudeY: number, amplitudeZ: number, freqX: number, freqY: number, freqZ: number, phaseDeg: number, points: number): IPos[];

	/**
	 * Draws a straight line between two points.
	 * 
	 * @param start Start point.
	 * @param end End point.
	 * @param points Number of sampled points including endpoints.
	 */
	function drawLine(start: IPos, end: IPos, points: number): IPos[];

	/**
	 * Draws a Bezier curve of arbitrary degree.
	 * 
	 * @param controlPoints Bezier control points (2+).
	 * @param points Number of sampled points including endpoints.
	 */
	function drawBezier(controlPoints: IPos[], points: number): IPos[];

	/**
	 * Draws a spiral in the XZ plane around {@code center}, with optional vertical rise.
	 * 
	 * @param center Spiral center.
	 * @param radiusStart Radius at t=0.
	 * @param radiusEnd Radius at t=1.
	 * @param height Total Y displacement from start to end.
	 * @param turns Number of full rotations.
	 * @param angleOffset Initial phase offset in degrees.
	 * @param points Number of sampled points.
	 */
	function drawSpiral(center: IPos, radiusStart: number, radiusEnd: number, height: number, turns: number, angleOffset: number, points: number): IPos[];

	/**
	 * Draws a helix around world Y.
	 * 
	 * @param referencePos Anchor position.
	 * @param radius Helix radius.
	 * @param heightOffset Vertical offset from {@code referencePos}.
	 * @param height Vertical extent of the helix.
	 * @param compression Number of turns (1 = one full revolution).
	 * @param angleOffset Initial phase offset in degrees.
	 * @param numPoints Number of sampled points.
	 */
	function drawHelix(referencePos: IPos, radius: number, heightOffset: number, height: number, compression: number, angleOffset: number, numPoints: number): IPos[];

	/**
	 * Draws multiple helices phase-shifted around the same axis.
	 * 
	 * @param referencePos Anchor position.
	 * @param radius Helix radius.
	 * @param heightOffset Vertical offset from {@code referencePos}.
	 * @param height Vertical extent of each helix.
	 * @param compression Number of turns per helix.
	 * @param angleOffset Initial phase offset in degrees.
	 * @param pointsPerHelix Number of sampled points per helix.
	 * @param numHelices Number of helices to generate.
	 */
	function drawMultiHelix(referencePos: IPos, radius: number, heightOffset: number, height: number, compression: number, angleOffset: number, pointsPerHelix: number, numHelices: number): IPos[];

	/**
	 * Rotates a set of points around an explicit pivot.
	 * 
	 * <p>Rotation order is X (pitch), then Y (yaw), then Z (roll), with all angles in degrees.
	 */
	function rotatePoints(points: IPos[], pivot: IPos, pitchDeg: number, yawDeg: number, rollDeg: number): IPos[];

	/**
	 * Rotates a set of points around their centroid.
	 * 
	 * <p>Rotation order is X (pitch), then Y (yaw), then Z (roll), with all angles in degrees.
	 */
	function rotatePoints(points: IPos[], pitchDeg: number, yawDeg: number, rollDeg: number): IPos[];
}



